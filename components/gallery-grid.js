import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ImageWithFallback } from './figma/ImageWithFallback';
export function GalleryGrid({ images }) {
    return (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: images.map((image) => (_jsxs("div", { className: "group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all", children: [_jsx("div", { className: "aspect-video overflow-hidden", children: _jsx(ImageWithFallback, { src: image.url, alt: image.caption, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" }) }), _jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4", children: _jsx("p", { className: "text-white text-sm", children: image.caption }) })] }, image.id))) }));
}
