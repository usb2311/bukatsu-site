import { SectionHeader } from '../../components/section-header'

export default function Study() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* 共通ヘッダー */}
        <SectionHeader title="技術勉強会の様子" />

        {/* メインカード */}
        <div className="bg-white rounded-lg shadow-md p-8">

          {/* タイトル */}
          <h1 className="text-3xl font-bold mb-4">
            技術勉強会：ウェブ開発入門
          </h1>

          {/* 概要 */}
          <p className="text-gray-700 mb-6">
            部活動の一環として、初心者向けのウェブ開発勉強会を行いました。
            HTML・CSS・JavaScript を使ったウェブサイトの基本構造から、
            実際にページを作る流れまでを学びました。
          </p>

          {/* 学んだこと */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              勉強会で学んだこと
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>HTML の基本構造とタグの意味</li>
              <li>CSS で見た目を整える方法</li>
              <li>JavaScript で簡単な動きをつける方法</li>
              <li>自己紹介ページの作成</li>
            </ul>
          </section>

          {/* 動画 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              撮影した動画（ウェブ開発勉強会）
            </h2>
            <p className="text-gray-700 mb-4">
              以下のリンクから、当日の勉強会の様子を撮影した動画をご覧いただけます。
            </p>

            <ul className="list-disc pl-6 text-blue-700">
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

          {/* 参考リンク */}
          <section>
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
                  MDN Web Docs
                </a>
              </li>
              <li>
                <a
                  href="https://ja.javascript.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  JavaScript 入門
                </a>
              </li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  )
}
