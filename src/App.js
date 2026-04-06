import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ImageWithFallback } from './components/ImageWithFallback';
import { SectionHeader } from './components/section-header';
import { ActivityCard } from './components/activity-card';
import { GalleryGrid } from './components/gallery-grid';
import { CodeExample } from './components/code-example';
import { LanguageCard } from './components/language-card';
import { Code, Trophy, Users, Calendar, MapPin, Mail, Cpu, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
function Header() {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (_jsx("header", { className: "fixed top-0 left-0 w-full bg-white shadow-md z-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 py-3 flex justify-between items-center", children: [_jsx(Link, { to: "/", className: "font-bold text-lg text-blue-600", children: "\u30C7\u30B8\u30BF\u30EB\u30E1\u30C7\u30A3\u30A2\u90E8" }), _jsxs("nav", { className: "hidden md:flex space-x-6 text-sm", children: [_jsx("button", { onClick: () => scrollTo('overview'), children: "\u90E8\u6D3B\u52D5\u6982\u8981" }), _jsx("button", { onClick: () => scrollTo('activities'), children: "\u4E3B\u306A\u6D3B\u52D5\u5206\u91CE" }), _jsx("button", { onClick: () => scrollTo('achievements'), children: "\u6D3B\u52D5\u5B9F\u7E3E" }), _jsx("button", { onClick: () => scrollTo('gallery'), children: "\u6D3B\u52D5\u306E\u69D8\u5B50" }), _jsx("button", { onClick: () => scrollTo('languages'), children: "\u5B66\u7FD2\u8A00\u8A9E" }), _jsx("button", { onClick: () => scrollTo('message'), children: "\u90E8\u9577\u30E1\u30C3\u30BB\u30FC\u30B8" })] })] }) }));
}
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
        href: '/activities/hokutosai-tennzi'
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
    return (_jsxs("div", { className: "min-h-screen bg-gray-50", children: [_jsx(Header, {}), _jsxs("div", { className: "relative h-[400px] md:h-[500px] overflow-hidden", children: [_jsx(ImageWithFallback, { src: "https://images.unsplash.com/photo-1558655146-d09347e92766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGVzaWdufGVufDF8fHx8MTc2NTI1MDQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", alt: "\u30C7\u30B8\u30BF\u30EB\u30E1\u30C7\u30A3\u30A2\u90E8", className: "w-full h-full object-cover" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 flex items-center justify-center", children: _jsxs("div", { className: "text-center text-white px-4", children: [_jsx("h1", { className: "text-white mb-4", children: "\u30C7\u30B8\u30BF\u30EB\u30E1\u30C7\u30A3\u30A2\u90E8" }), _jsx("p", { className: "text-xl md:text-2xl mb-6", children: "\u5275\u9020\u529B\u3068\u6280\u8853\u3067\u672A\u6765\u3092\u5207\u308A\u62D3\u304F" }), _jsx("p", { className: "text-lg max-w-2xl mx-auto", children: "C\u8A00\u8A9E\u30FBJava\u30FBPython\u3092\u5B66\u3073\u3001\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u306E\u57FA\u790E\u304B\u3089\u5B9F\u8DF5\u307E\u3067\u3002 \u30B3\u30FC\u30C9\u3067\u5275\u308B\u3001\u672A\u6765\u3078\u306E\u6249\u3002" })] }) })] }), _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [_jsxs("section", { id: "overview", className: "bg-white rounded-lg shadow-md p-8 mb-12", children: [_jsx(SectionHeader, { title: "\u90E8\u6D3B\u52D5\u6982\u8981" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [_jsxs("div", { children: [_jsx("h3", { className: "mb-3", children: "\u6D3B\u52D5\u5185\u5BB9" }), _jsx("p", { className: "text-gray-700 mb-4", children: "\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u90E8\u3067\u306F\u3001C\u8A00\u8A9E\u3001Java\u3001Python\u306E3\u3064\u306E\u8A00\u8A9E\u3092\u4E2D\u5FC3\u306B\u5B66\u7FD2\u3057\u307E\u3059\u3002 \u57FA\u790E\u6587\u6CD5\u304B\u3089\u59CB\u307E\u308A\u3001\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u5B9F\u88C5\u3001\u5B9F\u8DF5\u7684\u306A\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u958B\u767A\u307E\u3067\u3001 \u6BB5\u968E\u7684\u306B\u30B9\u30AD\u30EB\u30A2\u30C3\u30D7\u3067\u304D\u308B\u74B0\u5883\u304C\u6574\u3063\u3066\u3044\u307E\u3059\u3002" }), _jsx("p", { className: "text-gray-700", children: "\u307E\u305F\u3001\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u30B3\u30F3\u30C6\u30B9\u30C8\u3078\u306E\u53C2\u52A0\u3084\u3001\u30C1\u30FC\u30E0\u3067\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u958B\u767A\u3092\u901A\u3058\u3066\u3001 \u5B9F\u8DF5\u7684\u306A\u7D4C\u9A13\u3092\u7A4D\u3080\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u521D\u5FC3\u8005\u3067\u3082\u5148\u8F29\u304C\u30B5\u30DD\u30FC\u30C8\u3059\u308B\u306E\u3067\u5B89\u5FC3\u3067\u3059\u3002" })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-start space-x-3", children: [_jsx(Calendar, { className: "w-5 h-5 text-blue-600 flex-shrink-0 mt-1" }), _jsxs("div", { children: [_jsx("p", { className: "text-gray-600", children: "\u6D3B\u52D5\u65E5\u6642" }), _jsx("p", { children: "\u6708\u30FB\u6C34\u30FB\u91D1\u66DC\u65E5 16:30 \u301C 18:30" })] })] }), _jsxs("div", { className: "flex items-start space-x-3", children: [_jsx(MapPin, { className: "w-5 h-5 text-blue-600 flex-shrink-0 mt-1" }), _jsxs("div", { children: [_jsx("p", { className: "text-gray-600", children: "\u6D3B\u52D5\u5834\u6240" }), _jsx("p", { children: "\u60C5\u5831\u51E6\u7406\u30BB\u30F3\u30BF\u30FC\u3001\u30DE\u30EB\u30C1\u30E1\u30C7\u30A3\u30A2\u5B9F\u7FD2\u5BA4" })] })] }), _jsxs("div", { className: "flex items-start space-x-3", children: [_jsx(Users, { className: "w-5 h-5 text-blue-600 flex-shrink-0 mt-1" }), _jsxs("div", { children: [_jsx("p", { className: "text-gray-600", children: "\u90E8\u54E1\u6570" }), _jsx("p", { children: "42\u540D\uFF081\u5E74\u751F\uFF1A15\u540D\u30012\u5E74\u751F\uFF1A14\u540D\u30013\u5E74\u751F\uFF1A13\u540D\uFF09" })] })] }), _jsxs("div", { className: "flex items-start space-x-3", children: [_jsx(Mail, { className: "w-5 h-5 text-blue-600 flex-shrink-0 mt-1" }), _jsxs("div", { children: [_jsx("p", { className: "text-gray-600", children: "\u898B\u5B66\u30FB\u4F53\u9A13" }), _jsx("p", { children: "\u968F\u6642\u53D7\u4ED8\u4E2D\uFF01\u304A\u6C17\u8EFD\u306B\u304A\u8D8A\u3057\u304F\u3060\u3055\u3044" })] })] })] })] })] }), _jsxs("section", { id: "activities", className: "mb-12", children: [_jsx(SectionHeader, { title: "\u4E3B\u306A\u6D3B\u52D5\u5206\u91CE", subtitle: "\u8208\u5473\u306E\u3042\u308B\u5206\u91CE\u304B\u3089\u59CB\u3081\u3089\u308C\u307E\u3059\u3002\u8907\u6570\u306E\u5206\u91CE\u306B\u6311\u6226\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059\u3002" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: activities.map((activity) => (_jsx(ActivityCard, { icon: activity.icon, title: activity.title, description: activity.description }, activity.id))) })] }), _jsxs("section", { id: "achievements", className: "bg-white rounded-lg shadow-md p-8 mb-12", children: [_jsx(SectionHeader, { title: "\u6D3B\u52D5\u5B9F\u7E3E" }), _jsx("div", { className: "space-y-6", children: achievements.map((achievement) => (_jsxs("div", { className: "border-l-4 border-blue-600 pl-6", children: [_jsxs("h3", { className: "mb-3 flex items-center", children: [_jsx(Trophy, { className: "w-5 h-5 mr-2 text-blue-600" }), achievement.year] }), _jsx("ul", { className: "space-y-2", children: achievement.items.map((item, index) => (_jsxs("li", { className: "text-gray-700 flex items-start", children: [_jsx("span", { className: "text-blue-600 mr-2", children: "\u25CF" }), item] }, index))) })] }, achievement.year))) })] }), _jsxs("section", { id: "gallery", className: "mb-12", children: [_jsx(SectionHeader, { title: "\u6D3B\u52D5\u306E\u69D8\u5B50", subtitle: "\u65E5\u3005\u306E\u6D3B\u52D5\u3084\u30A4\u30D9\u30F3\u30C8\u306E\u69D8\u5B50\u3092\u3054\u7D39\u4ECB\u3057\u307E\u3059" }), _jsx(GalleryGrid, { images: galleryImages })] }), _jsxs("section", { id: "languages", className: "mb-12", children: [_jsx(SectionHeader, { title: "\u5B66\u7FD2\u8A00\u8A9E", subtitle: "3\u3064\u306E\u4E3B\u8981\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u8A00\u8A9E\u3092\u7FD2\u5F97\u3067\u304D\u307E\u3059" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: languages.map((language) => (_jsx(LanguageCard, { name: language.name, description: language.description, features: language.features, color: language.color }, language.name))) })] }), _jsxs("section", { className: "mb-12", children: [_jsx(SectionHeader, { title: "\u30B3\u30FC\u30C9\u4F8B", subtitle: "\u5B9F\u969B\u306B\u5B66\u7FD2\u3059\u308B\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u306E\u4F8B\u3092\u3054\u7D39\u4ECB\u3057\u307E\u3059" }), _jsx("div", { className: "space-y-6", children: codeExamples.map((example, index) => (_jsx(CodeExample, { language: example.language, title: example.title, code: example.code, description: example.description }, index))) })] }), _jsxs("section", { id: "message", className: "bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 md:p-12 text-white", children: [_jsx("h2", { className: "text-white mb-6 text-center", children: "\u90E8\u9577\u304B\u3089\u306E\u30E1\u30C3\u30BB\u30FC\u30B8" }), _jsxs("div", { className: "max-w-3xl mx-auto", children: [_jsx("p", { className: "text-lg mb-4", children: "\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u90E8\u306F\u3001\u30B3\u30FC\u30C9\u3092\u66F8\u304F\u3060\u3051\u3067\u306A\u304F\u3001\u8AD6\u7406\u7684\u601D\u8003\u529B\u3084\u554F\u984C\u89E3\u6C7A\u80FD\u529B\u3092\u80B2\u3066\u308B\u5834\u6240\u3067\u3059\u3002 \u6700\u521D\u306F\u8AB0\u3067\u3082\u521D\u5FC3\u8005\u3002\u4E00\u884C\u305A\u3064\u30B3\u30FC\u30C9\u3092\u66F8\u304D\u306A\u304C\u3089\u3001\u5C11\u3057\u305A\u3064\u3067\u304D\u308B\u3053\u3068\u304C\u5897\u3048\u3066\u3044\u304D\u307E\u3059\u3002" }), _jsx("p", { className: "text-lg mb-4", children: "C\u8A00\u8A9E\u3067\u30A2\u30EB\u30B4\u30EA\u30BA\u30E0\u306E\u57FA\u790E\u3092\u5B66\u3073\u3001Java\u3067\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u6307\u5411\u3092\u7406\u89E3\u3057\u3001Python\u3067\u6700\u65B0\u6280\u8853\u306B\u89E6\u308C\u308B\u3002 3\u3064\u306E\u8A00\u8A9E\u3092\u901A\u3058\u3066\u3001\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u306E\u672C\u8CEA\u3092\u5B66\u3079\u307E\u3059\u3002" }), _jsx("p", { className: "text-lg", children: "\u30B3\u30F3\u30C6\u30B9\u30C8\u3067\u7D50\u679C\u3092\u51FA\u3059\u3053\u3068\u3082\u3001\u81EA\u5206\u306E\u4F5C\u308A\u305F\u3044\u3082\u306E\u3092\u5F62\u306B\u3059\u308B\u3053\u3068\u3082\u3001\u3069\u3061\u3089\u3082\u7D20\u6674\u3089\u3057\u3044\u7D4C\u9A13\u3067\u3059\u3002 \u4E00\u7DD2\u306B\u30B3\u30FC\u30C9\u3092\u66F8\u3044\u3066\u3001\u697D\u3057\u304F\u6210\u9577\u3057\u307E\u3057\u3087\u3046\uFF01" }), _jsx("p", { className: "mt-6 text-right", children: "\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u90E8 \u90E8\u9577\u3000\u7530\u4E2D \u5065\u592A\uFF083\u5E74\uFF09" })] })] })] }), _jsx("footer", { className: "bg-gray-800 text-white py-8 mt-12", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [_jsx("p", { children: "\u898B\u5B66\u3084\u5165\u90E8\u306B\u3064\u3044\u3066\u306E\u304A\u554F\u3044\u5408\u308F\u305B\u306F\u3001\u9867\u554F\u306E\u5148\u751F\u307E\u305F\u306F\u90E8\u54E1\u307E\u3067\u304A\u6C17\u8EFD\u306B\u3069\u3046\u305E" }), _jsx("p", { className: "text-gray-400 text-sm mt-2", children: "\u5BCC\u5C71\u9AD8\u7B49\u5C02\u9580\u5B66\u6821 \u30C7\u30B8\u30BF\u30EB\u30E1\u30C7\u30A3\u30A2\u90E8" })] }) })] }));
}
