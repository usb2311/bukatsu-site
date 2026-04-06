import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Header from './components/header';
export default function Layout({ children }) {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx("div", { className: "pt-20", children: children })] }));
}
