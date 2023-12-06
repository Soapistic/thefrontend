"use client"

import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
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


type CategoryTemplateProps = {
  categories: ProductCategoryWithChildren[]
}

const CategoriesProducts: React.FC<CategoryTemplateProps> = ({ categories }) => {
  const { cart } = useCart()
  const { ref, inView } = useInView()


  const category = categories[categories.length - 1]
  const parents = categories.slice(0, categories.length - 1)

  if (!category) notFound()

  const {
    data: infiniteData,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery(
    [`get_category_products`, category.handle, cart?.id],
    ({ pageParam }) =>
      getProductsByCategoryHandle({
        pageParam,
        handle: category.handle!,
        cartId: cart?.id,
        currencyCode: cart?.region?.currency_code,
      }),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  )
  useEffect(() => {
    if (cart?.region_id) {
      refetch()
    }
  }, [cart?.region_id, refetch])

  const previews = usePreviews({
    pages: infiniteData?.pages,
    region: cart?.region,
  })

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, hasNextPage])

  return (
    <div className="py-12">
      <div className="content-container py-12">
        <div className="flex flex-col items-center text-center mb-2">
          <span className="text-3xl-regular text-gray-600 mb-6">
            LES PLUS PLÉBISCITÉS DU MOIS
          </span>
        </div>
        <ul className="grid grid-cols-2 small:grid-cols-3 gap-x-4 gap-y-8">
          {previews
            ? previews.map((product) => (
                <li key={product.id}>
                  <ProductPreview {...product} />
                </li>
              ))
            : Array.from(Array(4).keys()).map((i) => (
                <li key={i}>
                  <SkeletonProductPreview />
                </li>
              ))}
        </ul>
      </div>
    </div>
  )
}

export default CategoriesProducts
