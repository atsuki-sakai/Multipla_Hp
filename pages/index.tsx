import React from "react";
import Image from "next/image"

const index = () => {
  return (
    <div className="relative pt-14">
      <div className="relative h-screen w-full overflow-hidden">
        <Image src={"/images/top-bg-image.jpg"} width={800} height={600} layout="fill" objectFit="cover" alt={"background image"} />
      </div>
      <div className="absolute top-1/2 left-1/2 w-fit -translate-x-1/2">
        <div className="bg-gray-500 bg-opacity-60 px-4 py-2 rounded-md">
          <p className="font-noto_sans font-bold text-3xl text-white">MALTIPLA</p>
          <p className="text-white">ITの力でビジネスを成長させる。</p>
        </div>
      </div>
    </div>
  );
};

export default index;
