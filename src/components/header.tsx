import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y =
        el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const isActivityPage = location.pathname.startsWith("/activities");

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="font-bold text-lg text-blue-600">
          デジタルメディア部
        </Link>

        {/* PCナビ */}
        {!isActivityPage && (
          <nav className="hidden md:flex space-x-6 text-sm">
            <button onClick={() => scrollTo("overview")}>部活動概要</button>
            <button onClick={() => scrollTo("activities")}>主な活動分野</button>
            <button onClick={() => scrollTo("achievements")}>活動実績</button>
            <button onClick={() => scrollTo("gallery")}>活動の様子</button>
            <button onClick={() => scrollTo("languages")}>学習言語</button>
            <button onClick={() => scrollTo("message")}>部長メッセージ</button>
          </nav>
        )}

        {/* スマホボタン */}
        {!isActivityPage && (
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        )}
      </div>

      {/* スマホメニュー */}
      {!isActivityPage && open && (
        <div className="md:hidden bg-white border-t px-4 py-3 space-y-3">
          <button onClick={() => scrollTo("overview")} className="block w-full text-left">
            部活動概要
          </button>
          <button onClick={() => scrollTo("activities")} className="block w-full text-left">
            主な活動分野
          </button>
          <button onClick={() => scrollTo("achievements")} className="block w-full text-left">
            活動実績
          </button>
          <button onClick={() => scrollTo("gallery")} className="block w-full text-left">
            活動の様子
          </button>
          <button onClick={() => scrollTo("languages")} className="block w-full text-left">
            学習言語
          </button>
          <button onClick={() => scrollTo("message")} className="block w-full text-left">
            部長メッセージ
          </button>
        </div>
      )}
    </header>
  );
}