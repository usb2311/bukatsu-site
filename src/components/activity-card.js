import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const ActivityCard = ({ icon: Icon, title, description }) => {
    return (_jsxs("div", { className: "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow", children: [_jsx(Icon, { className: "w-12 h-12 text-blue-600 mb-4" }), _jsx("h3", { className: "text-xl font-bold mb-2", children: title }), _jsx("p", { className: "text-gray-600", children: description })] }));
};
