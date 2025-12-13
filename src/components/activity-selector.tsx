import React from 'react'
import { SectionHeader } from './section-header'

export interface SelectorItem {
  id: string
  title: string
  description: string
  href: string
}

const defaultItems: SelectorItem[] = [
  { id: 'prog', title: 'プログラミング作業', description: 'コーディング・デバッグの様子', href: 'https://example.com/programming' },
  { id: 'video', title: '動画編集', description: '動画カット・カラーグレーディング', href: 'https://example.com/video-editing' },
  { id: '3d', title: '3Dモデリング', description: 'モデリング・レンダリング作業', href: 'https://example.com/3d-modeling' },
  { id: 'design', title: 'デザイン制作', description: 'デザインワーク・UI制作', href: 'https://example.com/design' },
  { id: 'meeting', title: 'チームミーティング', description: '企画・レビューの様子', href: 'https://example.com/meeting' },
  { id: 'study', title: '技術勉強会', description: 'ハンズオン・発表の様子', href: 'https://example.com/study' }
]

export const ActivitySelector: React.FC<{ items?: SelectorItem[] }> = ({ items = defaultItems }) => {
  return (
    <section className="mb-12">
      <SectionHeader title="分野を選んで詳しく見る" subtitle="各活動の様子を別サイトで詳しく紹介しています" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((it) => (
          <a
            key={it.id}
            href={it.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow no-underline"
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-900">{it.title}</h3>
            <p className="text-gray-600 mb-4">{it.description}</p>
            <div className="text-sm text-blue-600">外部サイトで詳しく見る →</div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default ActivitySelector
