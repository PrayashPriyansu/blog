import image1 from "@/public/dennis-haug-QJ2nHy1YGFY-unsplash.jpg";
import image2 from "@/public/janosch-diggelmann-OW97sLU0cOw-unsplash.jpg";
import image3 from "@/public/hills-2836301.jpg";
import image4 from "@/public/red-bull-8143008.jpg";
import image5 from "@/public/flowers-8564948_1920.png";
import image6 from "@/public/dog-8262506.jpg";
import image7 from "@/public/pexels-jonathanborba-29276547.jpg";
import Image from "next/image";
import AnimatedLink from "@/app/_components/AimatedLink";
import { Link2 } from "lucide-react";

export default function Home() {
  return (
    <section className="grid h-full grid-cols-12 gap-2 grid-rows-1">
      <div className="col-span-8 bg-surface rounded-md">
        <div className="w-full h-80 aspect-video relative">
          <Image
            src={image1}
            fill
            placeholder="blur"
            alt="Christmas Cabin"
            className="object-cover object-bottom rounded-tl-md rounded-tr-md"
          />
        </div>
        <div className="px-2 py-1">
          <h1 className="text-xl font-semibold pb-3">Cristmas Cabin</h1>
          <span className="text-sm ">
            A Christmas cabin is a cozy, snow-covered retreat, often nestled in
            the woods, decorated with twinkling lights and festive ornaments.
            Inside, a crackling fireplace, warm blankets, and the scent of
            cinnamon and pine create a magical holiday atmosphere. {`It's`} the
            perfect place to enjoy hot cocoa, family gatherings, and the
            peaceful charm of a winter wonderland.
          </span>
        </div>
      </div>
      <div className="grid col-start-9 grid-rows-3 col-span-4 gap-2">
        <div className="bg-surface rounded-md  flex col-span-full w-full">
          <div className="relative w-1/2 h-full">
            <Image
              src={image2}
              alt=""
              fill
              placeholder="blur"
              className="object-cover rounded-tl-md rounded-bl-md object-left-bottom"
            ></Image>
          </div>
          <div className="py-1 px-2 w-1/2 ">
            <h1 className="text-lg font-semibold">Aurora</h1>
            <span className="text-xs ">
              The Aurora is a natural light display that dances across the polar
              skies, creating a spectacle of color.
            </span>
          </div>
        </div>
        <div className="bg-surface flex rounded-md col-span-full w-full">
          <div className="relative  w-1/2 h-full">
            <Image
              src={image4}
              alt=""
              placeholder="blur"
              fill
              className="object-cover rounded-tl-md rounded-bl-md object-left-bottom"
            ></Image>
          </div>
          <div className="py-1 px-2 w-1/2">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-semibold">F1</h1>
              <AnimatedLink href={"/blog/1"} className="flex items-center">
                <span className="text-xs">More</span>
                <Link2 size={10} />
              </AnimatedLink>
            </div>
            <span className="text-xs">
              F1 racing is the pinnacle of speed and precision, where the
              world’s fastest drivers compete on global circuits.
            </span>
          </div>
        </div>
        <div className="bg-surface flex rounded-md col-span-full w-full">
          <div className="relative  w-1/2 h-full">
            <Image
              src={image3}
              alt=""
              placeholder="blur"
              fill
              className="object-cover rounded-tl-md rounded-bl-md object-left-bottom"
            ></Image>
          </div>
          <div className="py-1 px-2 w-1/2">
            <h1 className="text-lg font-semibold">Nature</h1>
            <span className="text-xs">
              {`Nature's`} serene landscapes provide a peaceful escape, offering
              beauty and tranquility in every corner of the earth
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-full col-span-4">
        <div className="relative w-full aspect-video  ">
          <Image
            src={image5}
            fill
            className="object-cover object-center"
            alt="flower"
          />
        </div>
      </div>
      <div className="w-full h-full col-span-4">
        <div className="relative w-full aspect-video  ">
          <Image
            src={image6}
            fill
            className="object-cover object-center"
            alt="flower"
          />
        </div>
      </div>
      <div className="w-full h-full col-span-4">
        <div className="relative w-full aspect-video  ">
          <Image
            src={image7}
            fill
            className="object-cover object-bottom"
            alt="flower"
          />
        </div>
      </div>
    </section>
  );
}
