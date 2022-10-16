import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={style.root}>
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <Link href={"/"} passHref>
                        <div className='flex items-center'>
                            <div className={style.logo}>
                                <Image className="w-full h-full" src={"/images/test-logo.png"} layout="fill" priority={true} loading='eager' objectFit="cover" alt="Byte Logo" />
                            </div>
                            <div>
                                <p className='text-white font-bold text-base font-noto_sans'>MULTIPLA</p>
                                <p className='text-[10px] text-white'>マルチプラ</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={style.navigation}>
                    <div>
                        <h3 className={style.navTitle}>MULTIPLAについて</h3>
                        <ul className={style.navbar}>
                            <li className="mb-4">
                                <Link href="/question">
                                    <a rel="nofollow" className={style.link}>よくある質問</a>
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="/contact">
                                    <a rel="nofollow" className={style.link}>お問い合わせ</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/plan">
                                    <a className={style.link}>契約プランについて</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={style.navTitle}>料金形態について</h3>
                        <ul className={style.navbar}>
                            <li className="mb-4">
                                <Link href={"/blog/page/1"}>
                                    <a className={style.link}>ブログ</a>
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link href="/agreement">
                                    <a className={style.link}>ご契約までの流れ</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={style.navTitle}>特記事項</h3>
                        <ul className={style.navbar}>
                            <li className="mb-4">
                                <Link href={"/privacy-policy"}>
                                    <a className={style.link}>プライバシーポリシー</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-us" >
                                    <a className={style.link}>私たちについて</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            {/* 公式アカウント */}

            <div className="hidden sm:flex sm:items-center sm:justify-between">
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                    <a href="https://www.facebook.com/%E5%A3%B2%E3%82%8C%E3%82%8BEC%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AA%E3%82%89Byte-100535229345034" aria-label="FaceBook" className={style.sns_icon}>
                        <svg className="text-blue-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                    </a>
                    <a href="https://www.instagram.com/byte.ecommerce/" aria-label="Instagram" className={style.sns_icon}>
                        <svg className="text-pink-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" /></svg>
                    </a>
                </div>
            </div>
            <p className="w-full block mt-4 text-base text-center text-white font-thin">© 2022 MULTIPLA™. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer