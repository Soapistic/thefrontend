import clsx from "clsx"
import { ProductPreviewType } from "types/global"
import ProductThumb from "../product-thumb"



const ProductPreview = ({
  title,
  handle,
  images,
  price,
}: ProductPreviewType) => {
  return (
      <div>
        <div className="flex flex-col gap-y-8 w-full">
          <ProductThumb handle={handle} images={images || []}/>
        </div>
        <div className="mt-1.5">
        <div className="flex justify-between mt-3 text-sm">
          <h3
            className="text-gray-900 group-hover:underline group-hover:underline-offset-4"
          >
            {title}
          </h3>
          <p className="text-gray-900">
            {price ? (
              <>
                {price.price_type === "sale" && (
                  <span className="line-through text-gray-500">
                    {price.original_price}
                  </span>
                )}
                <span
                  className={clsx("font-semibold text-xl", {
                    "text-rose-500": price.price_type === "sale",
                  })}
                >
                  {price.calculated_price}
                </span>
              </>
            ) : (
              <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductPreview
