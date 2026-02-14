import { SectionHeader } from '../../components/section-header'

export default function Model3D() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* 共通ヘッダー */}
        <SectionHeader title="3Dモデリングの様子" />

        <div className="bg-white rounded-lg shadow-md p-8">

          {/* タイトル */}
          <h1 className="text-3xl font-bold mb-4">
            立体モデル制作と設計活動
          </h1>

          {/* 概要 */}
          <p className="text-gray-700 mb-6">
            部活動では、3Dモデリングソフトを活用して立体物の設計やデザイン制作を行っています。
            基礎操作の習得から応用的なモデリングまで、段階的に学習しています。
          </p>

          {/* セクション① */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">
              ① 日常の制作内容
            </h2>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>基本形状（立方体・円柱など）の作成</li>
              <li>キャラクターやオブジェクトのモデリング</li>
              <li>展示用作品の設計</li>
              <li>レンダリング画像の作成</li>
              <li>修正・改良作業</li>
            </ul>
          </section>

          {/* セクション② */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">
              ② 使用ソフトと技術
            </h2>

            <p className="text-gray-700 mb-4">
              3Dモデリングでは、正確な形状設計と立体構造の理解が重要になります。
              操作技術だけでなく、空間認識力も鍛えられます。
            </p>

            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>Blender などの3D制作ソフト</li>
              <li>オブジェクト編集・スカルプト機能</li>
              <li>マテリアル設定とライティング</li>
              <li>カメラアングル調整</li>
            </ul>
          </section>

          {/* セクション③ */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              ③ 制作を通して得られたこと
            </h2>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>立体的に物事を考える力</li>
              <li>設計とデザインの両立</li>
              <li>細部までこだわる集中力</li>
              <li>試行錯誤を繰り返す粘り強さ</li>
            </ul>

            <p className="mt-4 text-gray-700">
              3D制作を通して、アイデアを形にする力と、
              デジタル技術を活用した表現力を身につけています。
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
