import { Popover, Transition } from "@headlessui/react"
import { useProductCategories } from "medusa-react"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { ProductCategory } from "@medusajs/medusa"


interface DropDownCategoriesProps {
    data: ProductCategory;
}
const categories = [
  {
    name: 'New Arrivals',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg',
  },
  {
    name: 'Productivity',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg',
  },
  {
    name: 'Workspace',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg',
  },
  {
    name: 'Accessories',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg',
  },
  { name: 'Sale', href: '#', imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg' },
]

const DropDownCategories: React.FC<DropDownCategoriesProps> = ({ data }) => {
  const [open, setOpen] = useState(false)
  const { push } = useRouter()
  const children =
  data.category_children?.map((child) => ({
    name: child.name,
    handle: child.handle,
    id: child.id,
  }));

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="h-32"
    >
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          <>
            <Popover.Button
            className={clsx(
                "relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none"
            )}
            onClick={() => push(`/${data.handle}`)}
            >
            <div className="text-xl border-b-2 border-white w-8">
                {data.name}
            </div>
            </Popover.Button>
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
                className="absolute top-full text-sm text-gray-700 z-30 border-y border-gray-200"
              >
                <div className="relative bg-white py-8">
                  <div className="flex items-start content-container gap-x-10">
                    <div className="flex flex-col flex-1 max-w-[10%]">
                      <div className="flex items-start">
                        <div className="flex flex-col gap-y-2">
                          <ul className="flex flex-row gap-8">
                            {
                            <li className="flex flex-col gap-2" key={data.id}>
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
                            }   
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="-my-2">
            <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
              <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                {categories.map((category) => (
                  <a
                    key={category.name}
                    href={category.href}
                    className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                  >
                    <span aria-hidden="true" className="absolute inset-0">
                      <img src={category.imageSrc} alt="" className="h-full w-full object-cover object-center" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                    />
                    <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                  </a>
                ))}
              </div>
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

export default DropDownCategories
