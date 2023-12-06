"use client"

import { useMobileMenu } from "@lib/context/mobile-menu-context"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import DropDownCategories from "@modules/layout/components/dropdown-categories"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import clsx from "clsx"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import {UserIcon} from '@heroicons/react/24/solid'
import { useProductCategories } from "medusa-react"



const Nav = () => {
  const pathname = usePathname()
  const [isHome, setIsHome] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const { product_categories } = useProductCategories()


  //useEffect that detects if window is scrolled > 5px on the Y axis
  useEffect(() => {
    if (true) {
      const detectScrollY = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }

      window.addEventListener("scroll", detectScrollY)

      return () => {
        window.removeEventListener("scroll", detectScrollY)
      }
    }
  }, [true])

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false)
  }, [pathname])

  const { toggle } = useMobileMenu()

  return (
    
    <div
      className={clsx("sticky top-0 inset-x-0 z-50")}
    >
      <div className={clsx("transition-all duration-600 delay-200 ease-in-out flex items-center justify-center h-32 w-full bg-stone-900",
      {"!h-16": isScrolled})}>
      <Link href={"/"} className={clsx("h-full transition-all duration-700 ease-in-out", {"!h-8" : isScrolled})} style={{objectFit: "contain"}}>
        <Image src="/logoWhiteHome.png" alt="" className={clsx("h-full transition-all duration-700 ease-in-out", {"" : isScrolled})} width="500" height="500" style={{objectFit: "contain"}}/>
      </Link>
      </div>
      <header
        className=
          "h-16 transition-all duration-600 delay-300 ease-in-out relative text-white h-16 px-8 mx-auto bg-stone-900 duration-200 group-hover:bg-white"
      >
        <nav
          className={clsx(
            "flex items-center justify-between w-full h-full text-small-regular transition-colors duration-200",
            {
              "text-white group-hover:text-gray-900": !isScrolled,
            }
          )}
        >
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="block small:hidden">
              <Hamburger setOpen={toggle} />
            </div>
            <div className="hidden small:block h-full">
              <DropdownMenu />
            </div>
            <div className="hidden small:flex h-full items-center">
            {product_categories && (
                <ul className="flex flex-row gap-16">
                  {product_categories?.slice(0, 4).map((c) => {
                    if (c.parent_category) {
                      return
                    }
                    return (
                      <li className="flex flex-col gap-2" key={c.id}>
                          <DropDownCategories data={c}/>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          </div>
          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && <DesktopSearchModal />}
              <Link href="/account">
                <UserIcon className="h-5 w-5"></UserIcon>
              </Link>
            </div>
            <CartDropdown />
          </div>
        </nav>
        <MobileMenu />
      </header>
    </div>
  )
}

export default Nav
