import { ImageWithFallback } from './components/ImageWithFallback';
import { SectionHeader } from './components/section-header';
import { ActivityCard } from './components/activity-card';
import { GalleryGrid } from './components/gallery-grid';
import { CodeExample } from './components/code-example';
import { LanguageCard } from './components/language-card';
import { Code, Trophy, Users, Calendar, MapPin, Mail, Cpu, Terminal } from 'lucide-react';

const languages = [
  {
    name: 'C言語',
    description: 'プログラミングの基礎を学ぶための最適な言語。メモリ管理やアルゴリズムの理解に最適です。',
    features: [
      '基本構文と制御構造',
      'ポインタとメモリ管理',
      'データ構造（配列、構造体）',
      'ファイル入出力',
      'アルゴリズムの実装'
    ],
    color: 'bg-blue-600'
  },
  {
    name: 'Java',
    description: 'オブジェクト指向プログラミングを学び、大規模なアプリケーション開発の基礎を身につけます。',
    features: [
      'オブジェクト指向の基礎',
      'クラスとインターフェース',
      '例外処理',
      'コレクションフレームワーク',
      'GUIアプリケーション開発'
    ],
    color: 'bg-orange-600'
  },
  {
    name: 'Python',
    description: 'データ分析、AI・機械学習など、最新技術に触れながら実践的なプログラミングを学びます。',
    features: [
      '基本文法とデータ型',
      'ライブラリの活用',
      'データ分析（Pandas、NumPy）',
      '機械学習の基礎',
      'Webスクレイピング'
    ],
    color: 'bg-green-600'
  }
];

const codeExamples = [
  {
    language: 'C言語',
    title: 'Hello World プログラム',
    code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
    description: 'C言語の基本的なプログラム。標準出力に文字列を表示します。'
  },
  {
    language: 'Java',
    title: 'クラスの基本',
    code: `public class Student {
    private String name;
    private int age;
    
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void introduce() {
        System.out.println("私は" + name + "です。");
        System.out.println(age + "歳です。");
    }
}`,
    description: 'Javaのオブジェクト指向プログラミングの例。クラスとメソッドの定義を学びます。'
  },
  {
    language: 'Python',
    title: 'リスト操作とループ',
    code: `# リストの作成
numbers = [1, 2, 3, 4, 5]

# リスト内包表記で2乗を計算
squared = [n ** 2 for n in numbers]

# 結果を表示
for num in squared:
    print(f"値: {num}")`,
    description: 'Pythonの強力なリスト操作機能。簡潔なコードで複雑な処理を実現できます。'
  }
];

const activities = [
  {
    id: '1',
    icon: Code,
    title: 'プログラミング学習',
    description: 'C言語、Java、Pythonの基礎から応用まで、段階的に学習します。先輩が丁寧に教えてくれます。'
  },
  {
    id: '2',
    icon: Cpu,
    title: 'アルゴリズム研究',
    description: 'ソートや探索など、基本的なアルゴリズムを実装し、計算効率について学びます。'
  },
  {
    id: '3',
    icon: Terminal,
    title: 'プロジェクト開発',
    description: 'ゲーム、Webアプリ、データ分析ツールなど、実際のプロダクト開発に挑戦します。'
  }
];

const achievements = [
  {
    year: '2024年',
    items: [
      'プログラミングコンテスト 地区大会 金賞',
      '情報オリンピック 予選通過',
      'ハッカソンイベント 最優秀賞',
      'Pythonによるデータ分析アプリ開発'
    ]
  },
  {
    year: '2023年',
    items: [
      'アルゴリズムコンテスト 入賞',
      'Javaでゲーム開発コンテスト 優秀賞',
      'C言語プログラミング検定 合格者多数',
      '校内システム開発プロジェクト参加'
    ]
  }
];

const galleryImages = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1582138825658-fb952c08b282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHByb2dyYW1taW5nJTIwdGVhbXxlbnwxfHx8fDE3NjUzNTkyNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'プログラミング作業の様子',
    href: '/activities/programming'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1575320854760-bfffc3550640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY1MzQ2NTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: '北斗祭での展示作品',
    href: '/activities/hokutosai_tennzi'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1707651020201-f8ccbb481361?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMG1vZGVsaW5nJTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzY1MzU5Mjc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: '3Dモデリング制作',
    href: '/activities/3d-modeling'
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1742440710226-450e3b85c100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjB3b3JraW5nfGVufDF8fHx8MTc2NTI2MTA4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'チームでのミーティング',
    href: '/activities/meeting'
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1663535067514-66386c117b6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwc3R1ZGVudHN8ZW58MXx8fHwxNzY1MjcxMzc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: '技術勉強会',
    href: '/activities/study'
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1558655146-d09347e92766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGVzaWdufGVufDF8fHx8MTc2NTI1MDQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    caption: 'デザイン制作の様子',
    href: '/activities/design'
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1558655146-d09347e92766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGVzaWdufGVufDF8fHx8MTc2NTI1MDQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="デジタルメディア部"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-white mb-4">デジタルメディア部</h1>
            <p className="text-xl md:text-2xl mb-6">創造力と技術で未来を切り拓く</p>
            <p className="text-lg max-w-2xl mx-auto">
              C言語・Java・Pythonを学び、プログラミングの基礎から実践まで。
              コードで創る、未来への扉。
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Club Info */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <SectionHeader title="部活動概要" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="mb-3">活動内容</h3>
              <p className="text-gray-700 mb-4">
                プログラミング部では、C言語、Java、Pythonの3つの言語を中心に学習します。
                基礎文法から始まり、アルゴリズム実装、実践的なアプリケーション開発まで、
                段階的にスキルアップできる環境が整っています。
              </p>
              <p className="text-gray-700">
                また、プログラミングコンテストへの参加や、チームでのプロジェクト開発を通じて、
                実践的な経験を積むことができます。初心者でも先輩がサポートするので安心です。
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-600">活動日時</p>
                  <p>月・水・金曜日 16:30 〜 18:30</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-600">活動場所</p>
                  <p>情報処理センター、マルチメディア実習室</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-600">部員数</p>
                  <p>42名（1年生：15名、2年生：14名、3年生：13名）</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-600">見学・体験</p>
                  <p>随時受付中！お気軽にお越しください</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Activities */}
        <section className="mb-12">
          <SectionHeader 
            title="主な活動分野" 
            subtitle="興味のある分野から始められます。複数の分野に挑戦することも可能です。"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activities.map((activity) => (
              <ActivityCard
                key={activity.id}
                icon={activity.icon}
                title={activity.title}
                description={activity.description}
              />
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <SectionHeader title="活動実績" />
          <div className="space-y-6">
            {achievements.map((achievement) => (
              <div key={achievement.year} className="border-l-4 border-blue-600 pl-6">
                <h3 className="mb-3 flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-blue-600" />
                  {achievement.year}
                </h3>
                <ul className="space-y-2">
                  {achievement.items.map((item, index) => (
                    <li key={index} className="text-gray-700 flex items-start">
                      <span className="text-blue-600 mr-2">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="mb-12">
          <SectionHeader title="活動の様子" subtitle="日々の活動やイベントの様子をご紹介します" />
          <GalleryGrid images={galleryImages} />
        </section>

        {/* Programming Languages */}
        <section className="mb-12">
          <SectionHeader 
            title="学習言語" 
            subtitle="3つの主要プログラミング言語を習得できます"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((language) => (
              <LanguageCard
                key={language.name}
                name={language.name}
                description={language.description}
                features={language.features}
                color={language.color}
              />
            ))}
          </div>
        </section>

        {/* Code Examples */}
        <section className="mb-12">
          <SectionHeader 
            title="コード例" 
            subtitle="実際に学習するプログラミングの例をご紹介します"
          />
          <div className="space-y-6">
            {codeExamples.map((example, index) => (
              <CodeExample
                key={index}
                language={example.language}
                title={example.title}
                code={example.code}
                description={example.description}
              />
            ))}
          </div>
        </section>

        {/* Message */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 md:p-12 text-white">
          <h2 className="text-white mb-6 text-center">部長からのメッセージ</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-4">
              プログラミング部は、コードを書くだけでなく、論理的思考力や問題解決能力を育てる場所です。
              最初は誰でも初心者。一行ずつコードを書きながら、少しずつできることが増えていきます。
            </p>
            <p className="text-lg mb-4">
              C言語でアルゴリズムの基礎を学び、Javaでオブジェクト指向を理解し、Pythonで最新技術に触れる。
              3つの言語を通じて、プログラミングの本質を学べます。
            </p>
            <p className="text-lg">
              コンテストで結果を出すことも、自分の作りたいものを形にすることも、どちらも素晴らしい経験です。
              一緒にコードを書いて、楽しく成長しましょう！
            </p>
            <p className="mt-6 text-right">プログラミング部 部長　田中 健太（3年）</p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>見学や入部についてのお問い合わせは、顧問の先生または部員までお気軽にどうぞ</p>
          <p className="text-gray-400 text-sm mt-2">富山高等専門学校 デジタルメディア部</p>
        </div>
      </footer>
    </div>
  );
}
