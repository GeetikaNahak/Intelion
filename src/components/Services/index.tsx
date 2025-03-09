import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./singleService";
import serviceData from "./serviceData";
import Link from "next/link";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <section id="features" className="pt-16 md:py-20 lg:pt-20">
        <div className="container">
          <Image
            src="/images/brands/banner.jpeg"
            alt="logo"
            width={140}
            height={30}
            className="hidden w-full dark:block mb-10"
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4 ">
            {serviceData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
          <div className="flex justify-center mt-10">
          <Link
                    href=""
                    className="rounded-sm bg-primary px-8 py-2 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Explore
                  </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
