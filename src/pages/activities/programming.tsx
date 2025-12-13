import { SectionHeader } from '../../components/section-header'

export default function Programming() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader title="プログラミング作業の様子" />
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-700">ここではコーディングやデバッグ、アルゴリズム実装の様子を紹介します。</p>
          <p className="mt-4 text-gray-600">動画や記事、外部リソースへのリンクもここにまとめられます。</p>
        </div>
      </div>
    </div>
  )
}
