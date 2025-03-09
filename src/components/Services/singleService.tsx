import { Feature } from "@/types/feature";
import { Service } from "@/types/services";
const SingleFeature = ({ feature }: { feature: Service }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full rounded-sm bg-white p-6 shadow-two duration-300 hover:shadow-gray-dark dark:bg-black   lg:px-4 xl:px-6">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="flex ">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="m-5 align-center text-l font-bold text-black dark:text-white sm:text-2l lg:text-l xl:text-2l">
          {title}
        </h3>
        </div>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
