import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function ActivityCard({ icon: Icon, title, description }) {
    return (_jsx("div", { className: "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow", children: _jsxs("div", { className: "flex items-start space-x-4", children: [_jsx("div", { className: "flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center", children: _jsx(Icon, { className: "w-6 h-6 text-blue-600" }) }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "mb-2", children: title }), _jsx("p", { className: "text-gray-600", children: description })] })] }) }));
}
