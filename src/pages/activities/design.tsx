import { SectionHeader } from '../../components/section-header'

export default function Design() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* 共通ヘッダー */}
        <SectionHeader title="デザイン制作の様子" />

        <div className="bg-white rounded-lg shadow-md p-8">

          {/* タイトル */}
          <h1 className="text-3xl font-bold mb-4">
            Webデザインとビジュアル制作
          </h1>

          {/* 概要 */}
          <p className="text-gray-700 mb-6">
            サイト制作や展示物作成に向けて、レイアウト設計や配色の検討、
            ユーザーにとって見やすいデザインを意識した制作活動を行っています。
          </p>

          {/* セクション① */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">
              ① 日常の制作内容
            </h2>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Webページのレイアウト設計</li>
              <li>Tailwind CSS を使ったUIデザイン</li>
              <li>展示ポスター・資料デザイン</li>
              <li>配色バランスの調整</li>
              <li>フォント選定と視認性の改善</li>
            </ul>
          </section>

          {/* セクション② */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">
              ② 使用ツールと工夫
            </h2>

            <p className="text-gray-700 mb-4">
              デザイン制作では、視覚的な統一感を保ちながら、
              情報が整理されて見える構成を意識しています。
            </p>

            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Figma を用いたレイアウト設計</li>
              <li>Tailwind CSS による一貫したデザイン</li>
              <li>余白（スペーシング）の最適化</li>
              <li>色のコントラスト調整</li>
            </ul>
          </section>

          {/* セクション③ */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              ③ 制作を通して得られたこと
            </h2>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>ユーザー目線で考える力</li>
              <li>情報を整理する設計力</li>
              <li>視認性と美しさの両立</li>
              <li>チームでのデザイン共有スキル</li>
            </ul>

            <p className="mt-4 text-gray-700">
              デザインは見た目だけでなく、使いやすさや分かりやすさも重要であることを学びました。
              技術とデザインの両立を目指し、改善を重ねています。
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
