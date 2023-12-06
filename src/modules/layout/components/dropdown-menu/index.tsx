import { Popover, Transition } from "@headlessui/react"
import { useProductCategories } from "medusa-react"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import Image from "next/image"

const DropdownMenu = () => {
  const [open, setOpen] = useState(false)
  const { push } = useRouter()
  const { product_categories } = useProductCategories()

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="h-full"
    >
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          <>
            <Link href="/store" className="relative flex h-full w-20" passHref>
              <Popover.Button
                className={clsx(
                  "relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none"
                )}
                onClick={() => push("/store")}
              >
                <div className="h-2 w-5">
                  <Image src="/logoBig.png" alt="" className="" fill style={{objectFit: "contain"}}/>
                </div>
              </Popover.Button>
            </Link>
            <Transition
              show={open}
              as={React.Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Panel
                static
                className="absolute top-full inset-x-0 text-sm text-gray-700 z-30 border-y border-gray-200"
              >
                <div className="relative bg-white py-8">
                  <div className="flex items-start content-container">
                    <div className="flex flex-col flex-1 max-w-[30%]">
                      <div className="flex items-start">
                        {product_categories && (
                        <div className="flex flex-col gap-y-2">
                          <ul className="flex flex-row gap-8">
                            {product_categories?.slice(0, 6).map((c) => {
                              if (c.parent_category) {
                                return
                              }

                              const children =
                                c.category_children?.map((child) => ({
                                  name: child.name,
                                  handle: child.handle,
                                  id: child.id,
                                })) || null

                              return (
                                <li className="flex flex-col gap-2" key={c.id}>
                                  <Link
                                    className={clsx(children && "text-xl border-b-2 border-black w-8")}
                                    href={`/${c.handle}`}
                                  >
                                    {c.name}
                                  </Link>
                                  {children && (
                                    <ul className="grid grid-cols-1 gap-2 text-xs text-gray-500">
                                      {children &&
                                        children.map((child) => (
                                          <li key={child.id}>
                                            <Link href={`/${child.handle}`}>
                                              {child.name}
                                            </Link>
                                          </li>
                                        ))}
                                    </ul>
                                  )}
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        </Popover>
      </div>
    </div>
  )
}

export default DropdownMenu
