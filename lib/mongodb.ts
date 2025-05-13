import { MongoClient, ObjectId } from 'mongodb';

// Connection URL
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = process.env.MONGODB_DB || 'bsm_website';

// Create a new MongoClient
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export { clientPromise, ObjectId };

// Helper function to get database connection
export async function getDatabase() {
  const client = await clientPromise;
  return client.db(dbName);
}

// Types for our database collections
export type ContactSubmission = {
  _id?: string | ObjectId;
  name: string;
  email: string;
  company?: string;
  message: string;
  created_at: Date;
  read: boolean;
};

export type BlogPost = {
  _id?: string | ObjectId;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  published: boolean;
  created_at: Date;
  updated_at: Date;
};

export type NewsletterSubscriber = {
  _id?: string | ObjectId;
  email: string;
  name?: string;
  subscribed_at: Date;
  confirmed: boolean;
  confirmation_token?: string;
  unsubscribe_token?: string;
};

export type User = {
  _id?: string | ObjectId;
  email: string;
  password: string; // This should be hashed
  name?: string;
  role: 'admin' | 'user';
  created_at: Date;
};

// Helper functions for database operations
export async function saveContactSubmission(data: Omit<ContactSubmission, '_id' | 'created_at' | 'read'>) {
  const db = await getDatabase();
  const result = await db.collection('contact_submissions').insertOne({
    ...data,
    read: false, 
    created_at: new Date()
  }); 
  
  const insertedDocument = await db.collection('contact_submissions').findOne({ _id: result.insertedId });
  return { data: insertedDocument };
}

export async function getContactSubmissions() {
  const db = await getDatabase();
  const submissions = await db
    .collection('contact_submissions')
    .find({})
    .sort({ created_at: -1 })
    .toArray();
  
  return { data: submissions };
}

export async function markContactAsRead(id: string) {
  const db = await getDatabase();
  const result = await db
    .collection('contact_submissions')
    .updateOne({ _id: new ObjectId(id) }, { $set: { read: true } });
  
  return { data: result.modifiedCount > 0 };
}

export async function getBlogPosts(includeUnpublished = false) {
  const db = await getDatabase();
  const query = includeUnpublished ? {} : { published: true };
  
  const posts = await db
    .collection('blog_posts')
    .find(query)
    .sort({ date: -1 })
    .toArray();
  
  return { data: posts };
}

export async function getBlogPostBySlug(slug: string) {
  const db = await getDatabase();
  const post = await db.collection('blog_posts').findOne({ slug });
  
  return { data: post };
}

export async function createBlogPost(data: Omit<BlogPost, '_id' | 'created_at' | 'updated_at'>) {
  const db = await getDatabase();
  const now = new Date();
  
  const result = await db.collection('blog_posts').insertOne({
    ...data,
    created_at: now,
    updated_at: now
  });
  
  const insertedDocument = await db.collection('blog_posts').findOne({ _id: result.insertedId });
  return { data: insertedDocument };
}

export async function updateBlogPost(id: string, data: Partial<Omit<BlogPost, '_id' | 'created_at' | 'updated_at'>>) {
  const db = await getDatabase();
  
  const result = await db
    .collection('blog_posts')
    .updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...data, updated_at: new Date() } }
    );
  
  const updatedDocument = await db.collection('blog_posts').findOne({ _id: new ObjectId(id) });
  return { data: updatedDocument };
}

export async function deleteBlogPost(id: string) {
  const db = await getDatabase();
  
  const result = await db
    .collection('blog_posts')
    .deleteOne({ _id: new ObjectId(id) });
  
  return { data: result.deletedCount > 0 };
}

// Newsletter subscription functions
export async function subscribeToNewsletter(email: string, name?: string) {
  const db = await getDatabase();
  
  // Generate tokens for confirmation and unsubscribe
  const confirmationToken = crypto.randomUUID();
  const unsubscribeToken = crypto.randomUUID();
  
  const result = await db.collection('newsletter_subscribers').insertOne({
    email,
    name,
    confirmed: false,
    confirmation_token: confirmationToken,
    unsubscribe_token: unsubscribeToken,
    subscribed_at: new Date()
  });
  
  const insertedDocument = await db.collection('newsletter_subscribers').findOne({ _id: result.insertedId });
  return { data: [insertedDocument] };
}

export async function confirmNewsletterSubscription(token: string) {
  const db = await getDatabase();
  
  const result = await db
    .collection('newsletter_subscribers')
    .updateOne(
      { confirmation_token: token },
      { $set: { confirmed: true, confirmation_token: null } }
    );
  
  if (result.modifiedCount === 0) {
    return { data: null, error: { message: 'Invalid token' } };
  }
  
  const updatedDocument = await db.collection('newsletter_subscribers').findOne({ unsubscribe_token: token });
  return { data: [updatedDocument] };
}

export async function unsubscribeFromNewsletter(token: string) {
  const db = await getDatabase();
  
  const result = await db
    .collection('newsletter_subscribers')
    .deleteOne({ unsubscribe_token: token });
  
  return { data: result.deletedCount > 0 };
}

export async function getNewsletterSubscribers(confirmedOnly = true) {
  const db = await getDatabase();
  const query = confirmedOnly ? { confirmed: true } : {};
  
  const subscribers = await db
    .collection('newsletter_subscribers')
    .find(query)
    .sort({ subscribed_at: -1 })
    .toArray();
  
  return { data: subscribers };
}

export async function checkIfEmailSubscribed(email: string) {
  const db = await getDatabase();
  const subscriber = await db.collection('newsletter_subscribers').findOne({ email });
  
  return { data: subscriber };
}
