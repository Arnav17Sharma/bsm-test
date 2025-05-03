"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Package2, Menu, X, ChevronDown, ShoppingCart, Store, Zap, Package, BarChart3, Gift } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "#",
      dropdown: true,
      items: [
        {
          name: "E-Commerce Distribution & Fulfillment",
          href: "/services/ecommerce-distribution",
          icon: <ShoppingCart className="h-5 w-5 text-blue-500" />,
          description: "Optimized logistics for Amazon, Flipkart, Blinkit, Zepto, and D2C platforms.",
        },
        {
          name: "Retail & Modern Trade Distribution",
          href: "/services/retail-distribution",
          icon: <Store className="h-5 w-5 text-blue-500" />,
          description: "High-efficiency stock movement for supermarkets, pharmacies, and institutional sales.",
        },
        {
          name: "Quick Commerce Execution",
          href: "/services/quick-commerce",
          icon: <Zap className="h-5 w-5 text-blue-500" />,
          description: "Rapid inventory allocation for <10-minute delivery platforms.",
        },
        {
          name: "Super Stockist & C&F Services",
          href: "/services/stockist-services",
          icon: <Package className="h-5 w-5 text-blue-500" />,
          description: "High-speed, cost-efficient product distribution across regions.",
        },
        {
          name: "Strategic Pricing & Inventory Management",
          href: "/services/pricing-inventory",
          icon: <BarChart3 className="h-5 w-5 text-blue-500" />,
          description: "Optimized stock levels and revenue-maximizing pricing strategies.",
        },
        {
          name: "Customized Kitting & Bundling Solutions",
          href: "/services/kitting-bundling",
          icon: <Gift className="h-5 w-5 text-blue-500" />,
          description: "Product packaging strategies to boost average order value (AOV).",
        },
      ],
    },
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blogs", href: "/blogs" },
  ]

  return (
    <header
    className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300 h-20",
      isScrolled
        ? "bg-white shadow-lg dark:bg-slate-900/90"
        : "bg-white/90 shadow-md dark:bg-transparent"
    )}
  >
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
        {/* <svg width="1211" height="253" viewBox="0 0 1211 253" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "180px", height: "auto" }}>
          <g id="LOGOMAIN">
          <g id="logo2">
          <g id="Group">
          <g id="glyph0-1">
          <path id="Vector" d="M89.8125 61.9167L82.7083 90.8958H147.25L138.813 123.813H59.7917L80.8542 39.5208H28.1875L0 152.792H158.042C161.479 152.792 164.896 152 168.583 150.167C172.271 148.313 175.438 145.938 178.583 143.042C181.75 140.417 184.396 137.25 186.75 133.833C188.875 130.396 190.438 126.979 191.5 123.813L198.875 94.3125C199.146 93.25 199.146 91.6875 198.604 90.1042C198.083 88.5208 197.292 86.6667 196.5 84.8333C195.458 83.25 194.667 81.6667 193.875 80.0833C192.813 78.5 192.292 77.4583 191.771 76.3958C192.563 75.875 193.875 74.5625 195.458 72.9792C197.021 71.3958 198.875 69.8125 200.708 67.9792C202.292 66.3958 203.875 64.5417 205.188 62.7083C206.521 61.125 207.313 59.5417 207.833 58.4792L212.563 39.5208H159.896L154.354 61.9167H89.8125ZM196.25 0H38.1875L30.8125 28.9792H215.208C215.729 25.8333 215.729 22.6667 215.208 19.2292C214.688 15.8125 213.354 12.6458 211.792 9.75C210.208 7.125 207.833 4.75 205.188 2.91667C202.563 1.0625 199.396 0 196.25 0Z" fill="#4384F3"/>
          </g>
          <g id="glyph0-2">
          <path id="Vector_2" d="M363.247 90.8958L354.809 123.813H223.101L215.997 152.792H374.038C377.476 152.792 380.893 152 384.58 150.167C388.268 148.313 391.434 145.938 394.58 143.042C397.747 140.417 400.393 137.25 402.747 133.833C404.872 130.396 406.434 126.979 407.497 123.813L415.934 90.8958C416.455 87.7292 416.455 84.5625 415.934 81.1458C415.393 77.7083 414.08 74.5625 412.497 71.6667C410.913 69.0208 408.559 66.6458 405.913 64.8125C403.288 62.9583 400.122 61.9167 396.705 61.9167H291.33L296.851 39.5208H244.184L238.643 61.9167C237.601 65.0833 237.601 68.5 238.122 71.9167C238.643 75.3542 239.955 78.5 241.809 81.1458C243.393 84.0417 245.768 86.4167 248.393 88.25C251.018 90.1042 254.184 90.8958 257.872 90.8958H363.247ZM438.58 0H280.538C277.101 0 273.684 1.0625 269.997 2.91667C266.309 4.75 262.872 7.125 259.726 9.75C256.559 12.6458 253.663 15.8125 251.288 19.2292C248.913 22.6667 247.33 25.8333 246.809 28.9792H431.205L438.58 0Z" fill="#4384F3"/>
          </g>
          <g id="glyph0-3">
          <path id="Vector_3" d="M578.702 152.792L672.493 39.5208H630.348L576.598 104.583L555.785 39.5208H498.368L535.764 152.792H578.702ZM699.618 152.792L727.806 39.5208H675.118L646.931 152.792H699.618ZM467.285 152.792L495.473 39.5208H459.91L431.723 152.792H467.285ZM737.806 0H663.264L639.035 28.9792H730.431L737.806 0ZM462.535 28.9792H552.639L543.41 0H469.91L462.535 28.9792Z" fill="#4384F3"/>
          </g>
          </g>
          <g id="Group_2">
          <g id="glyph1-1">
          <path id="Vector_4" d="M9.47134 239.208H14.263L23.1172 197.417H41.2422L42.2005 193.021H1.20051L0.221344 197.417H18.3463L9.47134 239.208Z" fill="#4384F3"/>
          </g>
          </g>
          <g id="Group_3">
          <g id="glyph1-2">
          <path id="Vector_5" d="M33.7297 239.208H38.5213L42.1463 222.062C44.2088 212.5 51.1255 209.312 56.313 209.312C57.7922 209.312 59.2088 209.458 60.6463 209.708L61.6672 204.792C61.0213 204.667 60.2505 204.542 58.8963 204.542C50.938 204.542 46.7297 209.25 44.1463 213.271H44.0213L45.688 205.562H40.9172L33.7297 239.208Z" fill="#4384F3"/>
          </g>
          <g id="glyph1-3">
          <path id="Vector_6" d="M88.8324 239.208H93.624L100.812 205.562H96.0199L92.1449 223.813C90.5199 231.438 85.2282 236.229 75.8324 236.229C69.749 236.229 66.1449 233.896 67.5615 227.25L72.2074 205.562H67.4365L62.9574 226.396C61.2907 234.417 63.4157 240.25 74.6032 240.25C82.0407 240.25 87.9365 236.167 90.124 232.604H90.2699L88.8324 239.208Z" fill="#4384F3"/>
          </g>
          <g id="glyph1-4">
          <path id="Vector_7" d="M138.065 215.542C138.96 208.479 135.356 204.542 124.419 204.542C114.648 204.542 109.023 208.667 107.794 214.5C106.565 220.458 109.731 222.917 119.96 223.937C130.231 224.979 132.315 226.458 131.585 229.833C130.502 234.875 125.71 236.229 119.044 236.229C110.44 236.229 107.669 234.292 108.044 228.667H103.648C101.898 236.75 107.523 240.25 118.21 240.25C128.752 240.25 135.023 236.229 136.44 229.562C137.815 223.042 133.919 221.229 123.96 219.875C114.002 218.5 111.856 217.792 112.648 214.312C113.606 209.646 118.523 208.542 123.565 208.542C130.565 208.542 133.606 210.104 133.669 215.542H138.065Z" fill="#4384F3"/>
          </g>
          <g id="glyph1-5">
          <path id="Vector_8" d="M152.552 205.562H145.24L144.469 209.187H151.781L147.052 231.375C145.886 236.812 146.865 239.729 154.302 239.729C155.844 239.729 157.781 239.604 159.656 239.333L160.511 235.333C159.531 235.521 157.99 235.708 155.656 235.708C151.781 235.708 151.198 234.354 151.844 231.437L156.552 209.187H166.073L166.844 205.562H157.344L159.531 194.958H154.74L152.552 205.562Z" fill="#4384F3"/>
          </g>
          <g id="glyph1-7">
          <path id="Vector_9" d="M217.497 233.187L205.455 193.021H198.476L188.643 239.208H193.434L201.893 199.229H202.039L213.872 239.208H218.268L247.122 199.292H247.247L238.768 239.208H243.559L253.393 193.021H246.601L217.497 233.187Z" fill="#4384F3"/>
          </g>
          <g id="glyph1-8">
          <path id="Vector_10" d="M261.786 219.937C264.641 211.708 271.953 208.542 278.099 208.542C284.495 208.542 289.932 211.646 289.474 219.937H261.786ZM286.828 228.479C284.057 233.583 279.911 236.229 271.891 236.229C263.349 236.229 259.536 230.542 261.016 223.562H293.495C296.786 208.292 287.286 204.542 278.62 204.542C266.057 204.542 258.495 213 256.495 222.396C254.745 230.604 257.266 240.25 271.036 240.25C282.182 240.25 288.453 234.417 291.62 228.479H286.828Z" fill="#4384F3"/>
          </g>
          <g id="glyph1-8_2">
          <path id="Vector_11" d="M306.287 219.937C309.141 211.708 316.454 208.542 322.6 208.542C328.996 208.542 334.433 211.646 333.975 219.937H306.287ZM331.329 228.479C328.558 233.583 324.412 236.229 316.391 236.229C307.85 236.229 304.037 230.542 305.516 223.562H337.996C341.287 208.292 331.787 204.542 323.121 204.542C310.558 204.542 302.996 213 300.996 222.396C299.246 230.604 301.766 240.25 315.537 240.25C326.683 240.25 332.954 234.417 336.121 228.479H331.329Z" fill="#4384F3"/>
          </g>
          <g id="glyph1-5_2">
          <path id="Vector_12" d="M353.517 205.562H346.205L345.434 209.187H352.746L348.017 231.375C346.851 236.812 347.83 239.729 355.267 239.729C356.809 239.729 358.746 239.604 360.621 239.333L361.476 235.333C360.496 235.521 358.955 235.708 356.621 235.708C352.746 235.708 352.163 234.354 352.809 231.437L357.517 209.187H367.038L367.809 205.562H358.309L360.496 194.958H355.705L353.517 205.562Z" fill="#4384F3"/>
          </g>
          <g id="glyph1-4_2">
          <path id="Vector_13" d="M402.935 215.542C403.831 208.479 400.226 204.542 389.289 204.542C379.518 204.542 373.893 208.667 372.664 214.5C371.435 220.458 374.601 222.917 384.831 223.937C395.101 224.979 397.185 226.458 396.456 229.833C395.372 234.875 390.581 236.229 383.914 236.229C375.31 236.229 372.539 234.292 372.914 228.667H368.518C366.768 236.75 372.393 240.25 383.081 240.25C393.622 240.25 399.893 236.229 401.31 229.562C402.685 223.042 398.789 221.229 388.831 219.875C378.872 218.5 376.726 217.792 377.518 214.312C378.476 209.646 383.393 208.542 388.435 208.542C395.435 208.542 398.476 210.104 398.539 215.542H402.935Z" fill="#4384F3"/>
          </g>
          <g id="glyph1-9">
          <path id="Vector_14" d="M447.491 233.771L438.304 193.021H432.741L443.554 239.208H448.72L478.991 193.021H473.824L447.491 233.771Z" fill="#4384F3"/>
          </g>
          </g>
          <g id="Group_4">
          <g id="glyph1-8_3">
          <path id="Vector_15" d="M479.762 219.937C482.617 211.708 489.929 208.542 496.075 208.542C502.471 208.542 507.908 211.646 507.45 219.937H479.762ZM504.804 228.479C502.033 233.583 497.887 236.229 489.867 236.229C481.325 236.229 477.512 230.542 478.992 223.562H511.471C514.762 208.292 505.262 204.542 496.596 204.542C484.033 204.542 476.471 213 474.471 222.396C472.721 230.604 475.242 240.25 489.012 240.25C500.158 240.25 506.429 234.417 509.596 228.479H504.804Z" fill="#4384F3"/>
          </g>
          <g id="glyph1-10">
          <path id="Vector_16" d="M516.451 239.208H521.242L531.138 192.625H526.347L516.451 239.208Z" fill="#4384F3"/>
          </g>
          <g id="glyph1-11">
          <path id="Vector_17" d="M538.252 222.396C539.981 214.312 546.46 208.542 555.523 208.542C564.564 208.542 568.585 214.312 566.835 222.396C565.148 230.479 558.689 236.229 549.627 236.229C540.564 236.229 536.564 230.479 538.252 222.396ZM533.46 222.396C531.46 231.771 535.856 240.25 548.794 240.25C561.731 240.25 569.627 231.771 571.627 222.396C573.627 213 569.294 204.542 556.356 204.542C543.419 204.542 535.46 213 533.46 222.396Z" fill="#4384F3"/>
          </g>
          <g id="glyph1-12">
          <path id="Vector_18" d="M608.88 227.167C606.484 232.417 601.755 236.229 594.713 236.229C585.588 236.229 581.713 230.729 583.463 222.396C585.13 214.625 590.963 208.542 600.609 208.542C606.546 208.542 610.567 210.812 610.817 216.562H615.609C615.859 211.708 612.963 204.542 601.442 204.542C588.692 204.542 580.796 212.292 578.671 222.396C576.463 232.937 581.713 240.25 593.88 240.25C606.088 240.25 611.796 231.583 613.671 227.167H608.88Z" fill="#4384F3"/>
          </g>
          <g id="glyph1-13">
          <path id="Vector_19" d="M618.841 239.208H623.633L630.8 205.563H626.008L618.841 239.208ZM627.237 199.75H632.029L633.529 192.625H628.737L627.237 199.75Z" fill="#4384F3"/>
          </g>
          <g id="glyph1-5_3">
          <path id="Vector_20" d="M643.872 205.562H636.559L635.788 209.187H643.101L638.372 231.375C637.205 236.812 638.184 239.729 645.622 239.729C647.163 239.729 649.101 239.604 650.976 239.333L651.83 235.333C650.851 235.521 649.309 235.708 646.976 235.708C643.101 235.708 642.517 234.354 643.163 231.437L647.872 209.187H657.392L658.163 205.562H648.663L650.851 194.958H646.059L643.872 205.562Z" fill="#4384F3"/>
          </g>
          <g id="glyph1-14">
          <path id="Vector_21" d="M674.789 233.583L667.081 205.562H661.914L671.039 239.458L667.872 244.125C665.602 247.479 663.727 248.271 660.289 248.271C658.997 248.271 657.914 248.208 656.935 248.125L656.018 252.146C657.456 252.271 659.143 252.271 660.622 252.271C665.935 252.271 668.31 250.792 671.872 245.479L698.664 205.562H693.477L674.789 233.583Z" fill="#4384F3"/>
          </g>
          </g>
          </g>
          <g id="logo">
          <g id="Clip path group">
          <mask id="mask0_24_90" maskUnits="userSpaceOnUse" x="930" y="89" width="281" height="163">
          <g id="clip1">
          <path id="Vector_22" d="M930.78 89.3721H1210.14V252H930.78V89.3721Z" fill="white"/>
          </g>
          </mask>
          <g mask="url(#mask0_24_90)">
          <g id="Group_5">
          <path id="Vector_23" d="M1209.36 91.5583V184.731C1209.36 186.585 1208.37 188.296 1206.77 189.223L1189.33 199.29L1117.77 240.605L1117.7 240.64L1101.74 249.854C1100.14 250.781 1098.18 250.787 1096.58 249.871L1080.42 240.64L1080.33 240.594L998.387 193.79C996.635 192.794 994.655 192.268 992.641 192.268H963.121C960.505 192.268 957.936 191.587 955.658 190.288L931.981 176.764C930.224 175.757 930.934 173.073 932.96 173.073H993.711C997.517 173.073 1001.25 174.068 1004.56 175.951L1033.13 192.268L1096.34 228.375C1097.95 229.285 1099.91 229.285 1101.51 228.364L1186.74 179.156C1188.34 178.235 1189.33 176.518 1189.33 174.664V104.842C1189.33 101.831 1190.93 99.0499 1193.54 97.5447L1206.64 89.9788C1207.85 89.2805 1209.36 90.1562 1209.36 91.5583Z" fill="#4384F3"/>
          </g>
          </g>
          </g>
          <g id="Clip path group_2">
          <mask id="mask1_24_90" maskUnits="userSpaceOnUse" x="819" y="0" width="392" height="214">
          <g id="clip2">
          <path id="Vector_24" d="M819.431 0H1210.14V213.907H819.431V0Z" fill="white"/>
          </g>
          </mask>
          <g mask="url(#mask1_24_90)">
          <g id="Group_6">
          <path id="Vector_25" d="M1210.14 65.5296L1210.12 67.3324C1210.11 69.2839 1209.08 71.0924 1207.4 72.0997L1198.09 77.6683L1117.91 125.611L1111.84 129.234C1110.16 130.241 1109.13 132.049 1109.12 134.007L1109.06 142.889L1108.69 203.291C1108.65 208.521 1104.41 212.745 1099.18 212.745H1098.83C1093.56 212.745 1089.29 208.447 1089.32 203.176L1089.7 142.477L1089.74 134.55C1089.76 132.564 1088.72 130.727 1087.02 129.709L1080.16 125.611L1017.48 88.1301C1016.1 87.3003 1016.12 85.2915 1017.52 84.496L1030.69 76.993L1030.87 76.8842C1032.63 75.8884 1034.79 75.9056 1036.52 76.9415L1036.61 76.993L1089.91 108.859L1096.17 112.602C1097.93 113.661 1100.14 113.661 1101.91 112.602L1109.27 108.201L1175.21 68.7746C1176.78 67.8303 1176.76 65.541 1175.16 64.6311L1113.67 29.6857L1101.94 23.0183C1100.22 22.0454 1098.11 22.0454 1096.4 23.024L1035.7 57.6202L1019.57 66.8116L1003.01 76.2604C1002.16 76.7412 1001.2 76.993 1000.23 76.993H822.773C820.438 76.993 819.62 73.8968 821.651 72.735L844.813 59.5318C847.011 58.2784 849.494 57.6202 852.018 57.6202H995.096C996.069 57.6202 997.025 57.3684 997.866 56.8877L1000.49 55.394L1079.58 10.313L1096.38 0.738262C1098.09 -0.240391 1100.2 -0.240391 1101.92 0.738262L1118.73 10.2901L1133.24 18.5371L1197.84 55.2394L1207.3 60.6249C1209.07 61.6264 1210.15 63.5036 1210.14 65.5296Z" fill="#4384F3"/>
          </g>
          </g>
          </g>
          <path id="Vector_26" d="M1063.42 130.928C1064.62 131.643 1064.62 133.377 1063.42 134.092L1048.39 143.055C1047.33 143.69 1046 143.69 1044.94 143.055L1029.92 134.092L999.869 116.179C998.444 115.326 996.813 114.874 995.148 114.874H776.88C776.548 114.874 776.221 114.783 775.935 114.617L749.907 99.0899C748.293 98.1284 748.974 95.6617 750.845 95.6617H1001.24C1003.23 95.6617 1005.19 96.1997 1006.9 97.2184" fill="#ED1C23"/>
          <path id="Vector_27" d="M1029.83 154.06L1013.43 163.835C1012.37 164.459 1011.06 164.459 1010.02 163.835L994.507 154.587C993.105 153.751 991.508 153.311 989.877 153.311H876.748C876.582 153.311 876.422 153.265 876.284 153.179L847.108 135.781C846.318 135.306 846.65 134.092 847.572 134.092H995.932C997.912 134.092 999.858 134.63 1001.56 135.643L1029.83 152.504C1030.42 152.858 1030.42 153.711 1029.83 154.06Z" fill="#ED1C23"/>
          </g>
          </g>
          </svg> */}
          <Image src="/Logo-011.png" alt="BSM Logo" width={180} height={80} className="p-8"/>

        </Link>
        <nav className="hidden md:flex items-center gap-6" ref={dropdownRef}>
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              {item.dropdown ? (
                <button
                  onClick={() => toggleDropdown(item.name)}
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-500",
                    activeDropdown === item.name ? "text-blue-500" : "",
                  )}
                >
                  {item.name}
                  <ChevronDown
                    className={cn("h-4 w-4 transition-transform", activeDropdown === item.name ? "rotate-180" : "")}
                  />
                </button>
              ) : (
                <Link href={item.href} className="text-sm font-medium transition-colors hover:text-blue-500">
                  {item.name}
                </Link>
              )}

              {item.dropdown && activeDropdown === item.name && (
                <div
                  className="absolute top-full left-0 mt-2 w-[320px] rounded-lg border bg-card shadow-lg overflow-hidden"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="grid grid-cols-1 gap-0.5 p-1">
                    {item.items?.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="flex items-start gap-3 rounded-md p-3 hover:bg-muted transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="mt-0.5">{subItem.icon}</div>
                        <div>
                          <div className="font-medium">{subItem.name}</div>
                          {/* <div className="text-xs text-muted-foreground">{subItem.description}</div> */}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700">
              Contact Us
            </Button>
          </Link>
          <ModeToggle />
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b"
          >
            <div className="container px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full text-sm font-medium py-2 transition-colors hover:text-blue-500"
                      >
                        {item.name}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            activeDropdown === item.name ? "rotate-180" : "",
                          )}
                        />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="pl-4 mt-2 space-y-2 border-l-2 border-blue-100 dark:border-blue-900">
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-blue-500"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.icon}
                              <span>{subItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-sm font-medium py-2 transition-colors hover:text-blue-500 block"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link href="/contact" className="w-full">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

