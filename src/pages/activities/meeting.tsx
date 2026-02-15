import { SectionHeader } from '../../components/section-header'

export default function Meeting() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* 共通ヘッダー */}
        <SectionHeader title="チームミーティングの様子" />

        <div className="bg-white rounded-lg shadow-md p-8">

          {/* タイトル */}
          <h1 className="text-3xl font-bold mb-4">
            ChatGTP 活用ミーティング記録
          </h1>

          {/* 概要 */}
          <p className="text-gray-700 mb-6">
            チームミーティングでは、ChatPを活用しながら
            企画立案やWebサイト制作の改善案を議論しました。
            実際の会話内容や検証結果をまとめています。
          </p>

          {/* セクション① */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">
              ① ChatGTPに何をしてもらったか
            </h2>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>部活動サイトの構成案の提案</li>
              <li>React / TypeScript のエラー修正サポート</li>
              <li>ページデザインの改善提案</li>
              <li>北斗祭展示ページの文章作成支援</li>
              <li>Git・Vercelデプロイ時のトラブル解決</li>
            </ul>

            <p className="mt-4 text-gray-700">
              ミーティングでは「どう書けばエラーが消えるか」「より見やすい構成は何か」
              といった具体的な質問を行い、その場でコード修正を実施しました。
            </p>
          </section>

          {/* セクション② */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">
              ② 使って分かったChatPの長所・短所
            </h2>

            <h3 className="text-xl font-semibold mb-2">長所</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>エラー原因を即座に特定できる</li>
              <li>コード例を具体的に提示してくれる</li>
              <li>デザインや文章作成も支援できる</li>
              <li>初心者でも理解しやすい説明</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">短所</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>プロジェクト全体構造を誤認することがある</li>
              <li>パスやファイル名の不一致に注意が必要</li>
              <li>最終判断は人間側で確認する必要がある</li>
            </ul>
          </section>

          {/* セクション③ */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">
              ③ Pro版ならではの性能・機能
            </h2>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>より高度なコード生成能力</li>
              <li>長文コンテキスト処理能力の向上</li>
              <li>複雑なプロジェクト構成の分析支援</li>
              <li>高速レスポンスによる議論の効率化</li>
            </ul>

            <p className="mt-4 text-gray-700">
              ミーティングでは特に「複数ファイルにまたがる修正」において
              Pro版の処理能力が活きていました。
            </p>
          </section>

          {/* 動画セクション（中心） */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              🎥 ミーティング録画（中心資料）
            </h2>

            <p className="text-gray-700 mb-4">
              実際の会話や操作の様子を録画した動画です。
              ChatPを使いながらコード修正や議論を行う様子をご覧いただけます。
            </p>

            <a
              href="https://kosenjp.sharepoint.com/sites/msteams_fb6309/_layouts/15/stream.aspx?id=%2Fsites%2Fmsteams%5Ffb6309%2FShared%20Documents%2FGeneral%2F2025%5F1%E5%B9%B4%E7%94%9F%E5%90%91%E3%81%91%E8%AC%9B%E5%BA%A7%28%E5%85%A83%E5%9B%9E%29%2FVideoPro%5F20250409%5F164844%2Emp4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline"
            >
              ミーティング録画を見る（Stream）
            </a>
          </section>

        </div>
      </div>
    </div>
  )
}
