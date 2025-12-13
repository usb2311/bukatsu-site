import { SectionHeader } from '../../components/section-header'

export default function Model3D() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeader title="3Dモデリングの様子" />
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-700">モデリング、テクスチャ、レンダリングのワークフローを紹介します。</p>
        </div>
      </div>
    </div>
  )
}
