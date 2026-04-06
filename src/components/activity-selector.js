import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { SectionHeader } from './section-header';
const defaultItems = [
    { id: 'prog', title: 'プログラミング作業', description: 'コーディング・デバッグの様子', href: '/activities/programming' },
    { id: 'video', title: '動画編集', description: '動画カット・カラーグレーディング', href: '/activities/video-editing' },
    { id: '3d', title: '3Dモデリング', description: 'モデリング・レンダリング作業', href: '/activities/3d-modeling' },
    { id: 'design', title: 'デザイン制作', description: 'デザインワーク・UI制作', href: '/activities/design' },
    { id: 'meeting', title: 'チームミーティング', description: '企画・レビューの様子', href: '/activities/meeting' },
    { id: 'study', title: '技術勉強会', description: 'ハンズオン・発表の様子', href: '/activities/study' }
];
export const ActivitySelector = ({ items = defaultItems }) => {
    return (_jsxs("section", { className: "mb-12", children: [_jsx(SectionHeader, { title: "\u5206\u91CE\u3092\u9078\u3093\u3067\u8A73\u3057\u304F\u898B\u308B", subtitle: "\u5404\u6D3B\u52D5\u306E\u69D8\u5B50\u3092\u7D39\u4ECB\u3057\u3066\u3044\u307E\u3059" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", children: items.map((item) => (_jsxs(Link, { to: item.href, className: "block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow no-underline", children: [_jsx("h3", { className: "text-lg font-semibold mb-2 text-gray-900", children: item.title }), _jsx("p", { className: "text-gray-600 mb-4", children: item.description }), _jsx("div", { className: "text-sm text-blue-600", children: "\u8A73\u3057\u304F\u898B\u308B \u2192" })] }, item.id))) })] }));
};
export default ActivitySelector;
