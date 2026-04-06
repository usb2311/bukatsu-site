import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
export const GalleryGrid = ({ images }) => {
    return (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: images.map((image) => {
            const Card = (_jsxs("div", { className: "rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white", children: [_jsxs("div", { className: "relative aspect-video overflow-hidden bg-gray-200", children: [_jsx("img", { src: image.url, alt: image.caption, className: "w-full h-full object-cover hover:scale-105 transition-transform" }), _jsx("div", { className: "absolute inset-0 flex items-end", children: _jsx("div", { className: "w-full bg-gradient-to-t from-black/60 to-transparent p-4", children: _jsx("p", { className: "text-white text-sm font-semibold truncate", children: image.caption }) }) })] }), _jsx("div", { className: "p-4", children: _jsx("p", { className: "text-gray-700 text-sm", children: image.caption }) })] }));
            return image.href ? (_jsx(Link, { to: image.href, className: "no-underline", children: Card }, image.id)) : (_jsx("div", { children: Card }, image.id));
        }) }));
};
export default GalleryGrid;
