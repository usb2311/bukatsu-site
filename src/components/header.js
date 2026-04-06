import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const scrollTo = (id) => {
        setOpen(false);
        if (location.pathname !== "/") {
            navigate(`/#${id}`);
            return;
        }
        const el = document.getElementById(id);
        if (el) {
            const yOffset = -80;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };
    const isActivityPage = location.pathname.startsWith("/activities");
    return (_jsxs("header", { className: "fixed top-0 left-0 w-full bg-white shadow-md z-50", children: [_jsxs("div", { className: "max-w-7xl mx-auto px-4 py-3 flex justify-between items-center", children: [_jsx(Link, { to: "/", className: "font-bold text-lg text-blue-600", children: "\u30C7\u30B8\u30BF\u30EB\u30E1\u30C7\u30A3\u30A2\u90E8" }), !isActivityPage && (_jsxs("nav", { className: "hidden md:flex space-x-6 text-sm", children: [_jsx("button", { onClick: () => scrollTo("overview"), children: "\u90E8\u6D3B\u52D5\u6982\u8981" }), _jsx("button", { onClick: () => scrollTo("activities"), children: "\u4E3B\u306A\u6D3B\u52D5\u5206\u91CE" }), _jsx("button", { onClick: () => scrollTo("achievements"), children: "\u6D3B\u52D5\u5B9F\u7E3E" }), _jsx("button", { onClick: () => scrollTo("gallery"), children: "\u6D3B\u52D5\u306E\u69D8\u5B50" }), _jsx("button", { onClick: () => scrollTo("languages"), children: "\u5B66\u7FD2\u8A00\u8A9E" }), _jsx("button", { onClick: () => scrollTo("message"), children: "\u90E8\u9577\u30E1\u30C3\u30BB\u30FC\u30B8" })] })), !isActivityPage && (_jsx("button", { className: "md:hidden", onClick: () => setOpen(!open), children: "\u2630" }))] }), !isActivityPage && open && (_jsxs("div", { className: "md:hidden bg-white border-t px-4 py-3 space-y-3", children: [_jsx("button", { onClick: () => scrollTo("overview"), className: "block w-full text-left", children: "\u90E8\u6D3B\u52D5\u6982\u8981" }), _jsx("button", { onClick: () => scrollTo("activities"), className: "block w-full text-left", children: "\u4E3B\u306A\u6D3B\u52D5\u5206\u91CE" }), _jsx("button", { onClick: () => scrollTo("achievements"), className: "block w-full text-left", children: "\u6D3B\u52D5\u5B9F\u7E3E" }), _jsx("button", { onClick: () => scrollTo("gallery"), className: "block w-full text-left", children: "\u6D3B\u52D5\u306E\u69D8\u5B50" }), _jsx("button", { onClick: () => scrollTo("languages"), className: "block w-full text-left", children: "\u5B66\u7FD2\u8A00\u8A9E" }), _jsx("button", { onClick: () => scrollTo("message"), className: "block w-full text-left", children: "\u90E8\u9577\u30E1\u30C3\u30BB\u30FC\u30B8" })] }))] }));
}
