import { SectionHeader } from '../../components/section-header'

export default function Programming() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* 共通ヘッダー */}
        <SectionHeader title="プログラミング作業の様子" />

        <div className="bg-white rounded-lg shadow-md p-8">

          {/* タイトル */}
          <h1 className="text-3xl font-bold mb-4">
            日々のコーディングとアルゴリズム学習
          </h1>

          {/* 概要 */}
          <p className="text-gray-700 mb-6">
            部活動ではWeb制作だけでなく、アルゴリズムや問題解決能力を高めるための
            競技プログラミング学習も行っています。
            基礎文法の確認から応用問題まで、段階的に取り組んでいます。
          </p>

          {/* セクション① */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">
              ① 日常の作業内容
            </h2>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>React / TypeScript を用いたWebサイト制作</li>
              <li>Gitを使ったバージョン管理</li>
              <li>エラーの解析と修正</li>
              <li>UIデザイン改善</li>
              <li>コードレビューと改善提案</li>
            </ul>
          </section>

          {/* セクション② */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">
              ② AtCoder を活用した学習
            </h2>

            <p className="text-gray-700 mb-4">
              アルゴリズム思考力を鍛えるため、
              競技プログラミングサイト「AtCoder」を活用しています。
              初級問題から取り組み、データ構造や計算量の考え方を学習しています。
            </p>

            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>ABC（AtCoder Beginner Contest）への挑戦</li>
              <li>配列・文字列操作問題</li>
              <li>ソート・探索アルゴリズム</li>
              <li>時間計算量の理解</li>
            </ul>

            <div className="mt-4">
              <a
                href="https://atcoder.jp/?lang=ja"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline"
              >
                AtCoder 公式サイトを見る
              </a>
            </div>
          </section>

          {/* セクション③ */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              ③ 学習を通して得られたこと
            </h2>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>問題を分解して考える力</li>
              <li>最適なアルゴリズムを選択する力</li>
              <li>コードを書くスピード向上</li>
              <li>バグの発見と修正能力の向上</li>
            </ul>

            <p className="mt-4 text-gray-700">
              Web制作だけでなく、論理的思考力や問題解決能力を鍛えることが、
              将来のエンジニアリングにおいて重要であると実感しています。
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
