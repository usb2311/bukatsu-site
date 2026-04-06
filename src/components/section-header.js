import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const SectionHeader = ({ title, subtitle }) => {
    return (_jsxs("div", { className: "mb-8", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-2", children: title }), subtitle && _jsx("p", { className: "text-gray-600 text-lg", children: subtitle })] }));
};
