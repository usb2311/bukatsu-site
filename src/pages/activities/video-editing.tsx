import { SectionHeader } from '../../components/section-header'

export default function VideoEditing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader title="動画編集の様子" />
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-700">動画のカット、モーショングラフィックス、カラーグレーディングなどの作業を紹介します。</p>
        </div>
      </div>
    </div>
  )
}
