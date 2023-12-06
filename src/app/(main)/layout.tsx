'use client'

import { usePathname } from "next/navigation"
import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import { motion, AnimatePresence } from "framer-motion"

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
	const pageKey = usePathname();

  const transitionColor = "white";
  const variants = {
    hidden: { opacity: 0, x: 0, y: 100 },
    enter: { opacity: 1, x: 0, y: 0 },
  }

  return (
    <>
      <Nav />
      <AnimatePresence mode="popLayout">
        <motion.main
          variants={variants}
          key={pageKey}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "ease-in-out", duration: 0.3 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  )
}
