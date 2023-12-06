"use client"
import FooterNav from "@modules/layout/components/footer-nav"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import FooterCTA from "@modules/layout/components/footer-cta"


const Footer = () => {
  const pathname = usePathname()
  const [isHome, setIsHome] = useState(true)

  useEffect(() => {
  pathname === "/" ? setIsHome(true) : setIsHome(false)
  }, [pathname])
  return (
    <footer className={clsx("", {"hidden" : isHome})}>
      <FooterNav />
    </footer>
  )
}

export default Footer
