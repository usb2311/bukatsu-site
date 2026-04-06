import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
export const ImageWithFallback = ({ src, alt, className = '' }) => {
    const [hasError, setHasError] = React.useState(false);
    const handleError = () => {
        setHasError(true);
    };
    if (hasError) {
        return (_jsx("div", { className: `bg-gray-300 flex items-center justify-center ${className}`, children: _jsx("span", { className: "text-gray-500", children: "\u753B\u50CF\u3092\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093" }) }));
    }
    return (_jsx("img", { src: src, alt: alt, className: className, onError: handleError }));
};
