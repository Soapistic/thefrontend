"use client"

import usePreviews from "@lib/hooks/use-previews"
import {
  ProductCategoryWithChildren,
  getProductsByCategoryHandle,
} from "@lib/data"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useCart } from "medusa-react"
import React, { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { notFound, usePathname } from "next/navigation"
import CategoriesProducts from "@modules/home/components/categories-products"

type CategoryTemplateProps = {
  categories: ProductCategoryWithChildren[]
}

const ParentCategoryTemplate: React.FC<CategoryTemplateProps> = ({ categories }) => {

  const category = categories[categories.length - 1]



  const hommeCategory = [
    {
      index: "0",
      image: "/img/1.jpg"
    },
    {
      index: "1",
      image: "/img/2.jpg"
    },
    {
      index: "2",
      image: "/img/3.jpg"
    },
    {
      index: "3",
      image: "/img/4.jpg"
    },
    {
      index: "4",
      image: "/img/5.jpg"
    },
    {
      index: "5",
      image: "/img/5.jpg"
    },
  ];
  const femmeCategory = [
    {
      index: "0",
      image: ""
    },
    {
      index: "1",
      image: ""
    },
    {
      index: "2",
      image: ""
    },
    {
      index: "3",
      image: ""
    },
    {
      index: "4",
      image: ""
    },
    {
      index: "5",
      image: ""
    },
  ];

  const pathname = usePathname()
  const [isHomme, setIsHomme] = useState(true)

  useEffect(() => {
  pathname === "/homme" ? setIsHomme(true) : setIsHomme(false)
  }, [pathname])

  return (
    <div>
      <CategoriesProducts categories={categories} />
        <div className="max-w-7xl">
          <div className="w-screen group aspect-h-2 aspect-w-8">
              <img
                src={isHomme ? hommeCategory[0].image : femmeCategory[0].image}
                alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                className="object-cover object-top group-hover:opacity-75"
              />
              <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
              <div className="flex items-end p-6">
                <div>
                  <h3 className="font-semibold text-white">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {category.category_children[0].name}
                    </a>
                  </h3>
                  <p aria-hidden="true" className="mt-1 text-sm text-white">
                    Découvrir
                  </p>
                </div>
              </div>
          </div>
          <div className="w-screen group aspect-h-2 aspect-w-8">
              <img
                src={isHomme ? hommeCategory[0].image : femmeCategory[0].image}
                alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                className="object-cover object-top group-hover:opacity-75"
              />
              <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
              <div className="flex items-end p-6">
                <div>
                  <h3 className="font-semibold text-white">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {category.category_children[0].name}
                    </a>
                  </h3>
                  <p aria-hidden="true" className="mt-1 text-sm text-white">
                    Découvrir
                  </p>
                </div>
              </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 w-screen">
            <div className="group aspect-h-1 aspect-w-2 overflow-hidden  sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
              <img
                src={isHomme ? hommeCategory[0].image : femmeCategory[0].image}
                alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                className="object-cover object-top group-hover:opacity-75"
              />
              <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
              <div className="flex items-end p-6">
                <div>
                  <h3 className="font-semibold text-white">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {category.category_children[0].name}
                    </a>
                  </h3>
                  <p aria-hidden="true" className="mt-1 text-sm text-white">
                    Découvrir
                  </p>
                </div>
              </div>
            </div>
            <div className="group aspect-h-1 aspect-w-2 overflow-hidden  -lg sm:aspect-none sm:relative sm:h-full">
              <img
                src={isHomme ? hommeCategory[1].image : femmeCategory[1].image}
                alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                className="object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
              />
              <div
                aria-hidden="true"
                className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
              />
              <div className="flex items-end p-6 sm:absolute sm:inset-0">
                <div>
                  <h3 className="font-semibold text-white">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {category.category_children[1].name}
                    </a>
                  </h3>
                  <p aria-hidden="true" className="mt-1 text-sm text-white">
                    Découvrir
                  </p>
                </div>
              </div>
            </div>
            <div className="group aspect-h-1 aspect-w-2 overflow-hidden  -lg sm:aspect-none sm:relative sm:h-full">
              <img
                src={isHomme ? hommeCategory[2].image : femmeCategory[2].image}
                alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                className="object-cover object-top group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
              />
              <div
                aria-hidden="true"
                className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
              />
              <div className="flex items-end p-6 sm:absolute sm:inset-0">
                <div>
                  <h3 className="font-semibold text-white">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {category.category_children[3].name}
                    </a>
                  </h3>
                  <p aria-hidden="true" className="mt-1 text-sm text-white">
                    Découvrir
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 w-screen">
            <div className="group aspect-h-1 aspect-w-2 overflow-hidden sm:aspect-none sm:relative sm:row-span-1">
              <img
                src={isHomme ? hommeCategory[3].image : femmeCategory[3].image}
                alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
              />
              <div
                aria-hidden="true"
                className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
              />
              <div className="flex items-end p-6 sm:absolute sm:inset-0">
                <div>
                  <h3 className="font-semibold text-white">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {category.category_children[4].name}
                    </a>
                  </h3>
                  <p aria-hidden="true" className="mt-1 text-sm text-white">
                    Découvrir
                  </p>
                </div>
              </div>
            </div>
            <div className="group aspect-h-1 aspect-w-2 overflow-hidden -lg sm:aspect-none sm:relative sm:row-span-2">
              <img
                src={isHomme ? hommeCategory[4].image : femmeCategory[4].image}
                alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
              />
              <div
                aria-hidden="true"
                className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
              />
              <div className="flex items-end p-6 sm:absolute sm:inset-0">
                <div>
                  <h3 className="font-semibold text-white">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {category.category_children[5].name}
                    </a>
                  </h3>
                  <p aria-hidden="true" className="mt-1 text-sm text-white">
                    Découvrir
                  </p>
                </div>
              </div>
            </div>
            <div className="group aspect-h-1 aspect-w-2 overflow-hidden -lg sm:aspect-h-1 sm:relative sm:h-full">
              <img
                src={isHomme ? hommeCategory[5].image : femmeCategory[5].image}
                alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                className="object-cover object-center group-hover:opacity-75"
              />
              <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
              <div className="flex items-end p-6">
                <div>
                  <h3 className="font-semibold text-white">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {category.category_children[6].name}
                    </a>
                  </h3>
                  <p aria-hidden="true" className="mt-1 text-sm text-white">
                    Découvrir
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ParentCategoryTemplate
