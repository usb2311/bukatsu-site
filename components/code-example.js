import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function CodeExample({ language, title, code, description }) {
    return (_jsxs("div", { className: "bg-white rounded-lg shadow-md overflow-hidden", children: [_jsxs("div", { className: "bg-gray-800 text-white px-4 py-2 flex items-center justify-between", children: [_jsx("span", { children: title }), _jsx("span", { className: "text-sm bg-blue-600 px-3 py-1 rounded", children: language })] }), _jsxs("div", { className: "p-4", children: [_jsx("pre", { className: "bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto", children: _jsx("code", { children: code }) }), _jsx("p", { className: "text-gray-600 mt-4", children: description })] })] }));
}
