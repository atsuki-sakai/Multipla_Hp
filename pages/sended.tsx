import React from 'react'
import Link from 'next/link'


const Sended = () => {
    return (
        <>
            <div className="mx-4">
                <div className='py-48 max-w-xl mx-auto h-screen'>
                    <div id="alert-additional-content-3" className="p-4 mb-4 bg-green-100 rounded-lg dark:bg-green-200 " role="alert">
                        <h3 className="text-lg font-bold text-green-700 dark:text-green-800">お問い合わせ完了</h3>
                        <div className="mt-2 mb-4 text-sm text-green-700 dark:text-green-800">
                            お問い合わせありがとうございました。
                            内容を確認のうえ、回答させて頂きます。しばらくお待ちください。
                        </div>
                        <div className="flex">
                            <Link href={"/"}>
                                <a type="button" className="text-white font-bold bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-green-800 dark:hover:bg-green-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    <p className='ml-1'>
                                        トップページへ戻る
                                    </p>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sended