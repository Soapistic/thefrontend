import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const HommeFemme = () => {
  return (
    <div className="h-[72.9vh] flex flex-row w-full bg-gray-400">
        <div className="h-full w-1/2 relative w-full aspect-square small:w-[50%] small:aspect-[28/36] flex justify-center items-center">
        <Image
            src="/woman.jpg"
            alt=""
            className="absolute inset-0"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
          <div className="transition-all ease-in duration-200 absolute w-full h-full text-white text-5xl flex justify-center items-center bg-gray-900 bg-opacity-0 hover:bg-opacity-70">
              <UnderlineLink href="/femme">
                <div className="text-center xl:text-3xl">
                Collection Femme
                </div>  
              </UnderlineLink>
          </div>
        </div>
        <div className="h-full w-1/2 relative w-full aspect-square small:w-[50%] small:aspect-[28/36]">
        <Image
            src="/man.jpg"
            alt=""
            className=""
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
          <div className="transition-all ease-in duration-200 absolute w-full h-full text-white text-5xl flex justify-center items-center bg-stone-900 bg-opacity-0 hover:bg-opacity-70">
              <UnderlineLink href="/homme">
                <div className="text-center xl:text-3xl">
                Collection Homme
                </div>  
              </UnderlineLink>
          </div>
        </div>
    </div>
  )
}

export default HommeFemme
