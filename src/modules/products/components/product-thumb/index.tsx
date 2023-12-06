import { Image as MedusaImage } from "@medusajs/medusa";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

type ImageGalleryProps = {
  images: MedusaImage[];
  handle: string | null;
};

const ProductThumb = ({ images, handle }: ImageGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col flex-1 gap-y-4">
        <div key={0} className="relative aspect-[50/40] w-full mb-6">
          <Link href={`/products/${handle}`}>
            <Image
              src={images[activeIndex].url}
              className="absolute inset-0"
              alt={`Product image`}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </Link>
        </div>
      </div>
      <div className="hidden small:flex flex-row gap-x-4">
        {images.map((image, index) => (
          <button
            key={index}
            className={`h-14 w-12 relative border border-white ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={image.url}
              className="absolute inset-0"
              alt="Thumbnail"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductThumb;
