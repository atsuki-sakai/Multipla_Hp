import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"
import { useUI } from "@components/context";
import style from "./Header.module.css";
import cn from "classnames"
import { UnderLineAnimationLink } from "@components/ui"

const Header = () => {
  const { openDrawer, isDrawerOpen } = useUI();

  const [scrollY, setScrollY] = useState(0);
  const switchAnimationY = 300;
  const [scrollListner, setScrollListoner] = useState(true);

  const underContainerClassNames = cn(
    style.under_link, {
      [style.show]: scrollY >= switchAnimationY,
      [style.hide]: scrollY <= switchAnimationY
  })

  const headerClassNames = cn(
    style.header, {
      [style.show]: scrollY <= switchAnimationY,
      [style.hide]: scrollY >= switchAnimationY
    }
  )

  const windowToTop = (e: any) => {
    setScrollY(0);
    window.scrollTo(0, 0);
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      e.returnValue = false;
    }
  };
  const handle = (e: any) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (isDrawerOpen) {
      document.addEventListener("wheel", handle, { passive: false });
      document.addEventListener("touchmove", handle, { passive: false });
    }
    function handleScrollYChange() {
      setScrollY(window.scrollY);
    }
    if (scrollListner) {
      window.addEventListener("scroll", handleScrollYChange);
    }
    return () => {
      if (isDrawerOpen) {
        document.removeEventListener("wheel", handle);
        document.removeEventListener("touchmove", handle);
      }
      setScrollListoner(false);
      window.removeEventListener("scroll", handle);
    };
  }, [scrollListner, scrollY, isDrawerOpen]);

  return (
    <>
      <header className={headerClassNames}>
        <div className={style.wrapper}>
          <Link href={"/"} passHref>
            <div className="flex items-center">
              <div className="relative h-10 w-10">
                <Image src={"/images/test-logo.png"} layout="responsive" height={80} width={80} alt={"Logo"}></Image>
              </div>
              <a>
                <h3 className={style.title}>MULTIPLA</h3>
                <p className={style.subtitle}>マルチプラ</p>
              </a>
            </div>
          </Link>
          {/* sm */}
          <div
            className={style.mobile_menu}
            onClick={() => openDrawer()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          {/* md ~ lg */}
          <div className={style.desktop_menu}>
            <UnderLineAnimationLink text="ご契約プランについて" link="/"/>
            <UnderLineAnimationLink text="契約までの流れ" link="/"/>
            <UnderLineAnimationLink text="ブログ" link="/"/>
            <UnderLineAnimationLink text="よくある質問" link="/"/>
            <UnderLineAnimationLink text="お問い合せ" link="/"/>
            <UnderLineAnimationLink text="ECお見積りシュミレーター" link="/"/>
          </div>
        </div>
      </header>
      <div
        className={underContainerClassNames}>
        <div
          className={style.under_button}
          onClick={(e) => windowToTop(e)}
        >
          <p>
            TOP
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 11l7-7 7 7M5 19l7-7 7 7"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Header;
