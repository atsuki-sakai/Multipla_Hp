import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"
import { useUI } from "@components/context";
import { Menu } from "@components/icon"
import style from "./Header.module.css";
import cn from "classnames"
import { UnderLineAnimationLink } from "@components/ui"

interface Props {
  hidden?: boolean
}

const Header = ({hidden = false}: Props) => {
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
      [style.hide]: scrollY >= switchAnimationY,
      [style.hidden_header]: hidden
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
            <Menu/>
          </div>
          {/* md ~ lg */}
          <div className={style.desktop_menu}>
            <UnderLineAnimationLink text="ご契約プランについて" link="/plan"/>
            <UnderLineAnimationLink text="契約までの流れ" link="/agreement"/>
            <UnderLineAnimationLink text="ECサイト構築" link="/ec-lp"/>
            <UnderLineAnimationLink text="ブログ" link="/blog/page/1"/>
            <UnderLineAnimationLink text="よくある質問" link="/faq"/>
            <UnderLineAnimationLink text="お問い合せ" link="/contact"/>
          </div>
        </div>
      </header>
      <div
        className={underContainerClassNames}>
        <div
          className={style.under_button}
          onClick={(e) => windowToTop(e)}
        >
          <Menu className="text-white w-8 h-8" />
        </div>
      </div>
    </>
  );
};

export default Header;
