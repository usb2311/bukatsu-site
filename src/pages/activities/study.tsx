import React from 'react'

export default function Study() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      
      {/*  技術勉強会*/}
      <h1 className="text-3xl font-bold mb-4">
        技術勉強会：ウェブ開発入門
      </h1>

      {/* 概要 */}
      <p className="text-gray-700 mb-6">
        部活動の一環として、初心者向けのウェブ開発勉強会を行いました。  
        HTML・CSS・JavaScript を使ったウェブサイトの基本構造から、  
        実際にページを作る流れまでを学びました。
      </p>

      {/* セクション：内容 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          勉強会で学んだこと
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>HTML の基本構造とタグの意味</li>
          <li>CSS で見た目を整える方法</li>
          <li>JavaScript で簡単な動きをつける方法</li>
          <li>実際に「自己紹介ページ」を作成</li>
        </ul>
      </section>

      {/* セクション：動画リンク */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          撮影した動画（ウェブ開発勉強会）
        </h2>
        <p className="text-gray-700 mb-4">
          以下のリンクから、当日の勉強会の様子を撮影した動画にアクセスできます。  
          生徒が実際にコードを書いたり、講義を聞いている様子をご覧いただけます。
        </p>

        <ul className="list-disc pl-6 text-blue-700 space-y-2">
          <li>
            <a
              href="https://kosenjp-my.sharepoint.com/personal/i2421443_toyama_kosen-ac_jp/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fi2421443%5Ftoyama%5Fkosen%2Dac%5Fjp%2FDocuments%2FWeb%E9%96%8B%E7%99%BA%E8%AC%9B%E5%BA%A72025&ga=1"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              ウェブ開発勉強会 2025 動画（OneDrive）
            </a>
          </li>
        </ul>
      </section>

      {/* セクション：参考リンク（任意） */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          参考リソース
        </h2>
        <ul className="list-disc pl-6 text-blue-700 space-y-2">
          <li>
            <a
              href="https://developer.mozilla.org/ja/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              MDN Web Docs（公式リファレンス）
            </a>
          </li>
          <li>
            <a
              href="https://ja.javascript.info/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              JavaScript 入門（日本語）
            </a>
          </li>
        </ul>
      </section>

    </div>
  )
}
