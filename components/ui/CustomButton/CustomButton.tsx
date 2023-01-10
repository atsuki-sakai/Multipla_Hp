import React, { ReactNode } from "react";
import Link from "next/link";

interface Props {
  href: string;
  text: string;
  children?: ReactNode | ReactNode[];
}

const CustomButton = ({ href, text, children }: Props) => {
  return (
    <div className="flex justify-center py-4 ">
      <Link href={href}>
        <a>
          <div className="bg-gray-700 text-white shadow-md rounded-md hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 hover:-translate-y-1 transfrom duration-500 ease-in-out">
            <div className="flex items-center justify-between w-[220px] px-4 py-1 md:py-2 lg:py-3">
              <div className="text-base md:text-lg lg:text-xl text-center w-full">
                {text}
              </div>
              {children && <div>{children}</div>}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default CustomButton;
