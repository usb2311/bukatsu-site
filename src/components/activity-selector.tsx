import React from 'react'
import { SectionHeader } from './section-header'

export interface SelectorItem {
  id: string
  title: string
  description: string
  href: string
}

const defaultItems: SelectorItem[] = [
  { id: 'prog', title: 'プログラミング作業', description: 'コーディング・デバッグの様子', href: '/activities/programming' },
  { id: 'video', title: '動画編集', description: '動画カット・カラーグレーディング', href: '/activities/video-editing' },
  { id: '3d', title: '3Dモデリング', description: 'モデリング・レンダリング作業', href: '/activities/3d-modeling' },
  { id: 'design', title: 'デザイン制作', description: 'デザインワーク・UI制作', href: '/activities/design' },
  { id: 'meeting', title: 'チームミーティング', description: '企画・レビューの様子', href: '/activities/meeting' },
  { id: 'study', title: '技術勉強会', description: 'ハンズオン・発表の様子', href: '/activities/study' }
]

export const ActivitySelector: React.FC<{ items?: SelectorItem[] }> = ({
  items = defaultItems
}) => {
  return (
    <section className="mb-12">
      <SectionHeader
        title="分野を選んで詳しく見る"
        subtitle="各活動の様子を紹介しています"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow no-underline"
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              {item.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {item.description}
            </p>
            <div className="text-sm text-blue-600">詳しく見る →</div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default ActivitySelector
