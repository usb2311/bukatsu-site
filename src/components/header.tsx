import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // スクロール検知
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItem = ({ isActive }: { isActive: boolean }) =>
    `transition ${
      isActive
        ? 'text-blue-600 font-semibold'
        : 'text-gray-700 hover:text-blue-600'
    }`

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all ${
        scrolled
          ? 'bg-white/80 backdrop-blur shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* ロゴ */}
        <NavLink to="/" className="text-xl font-bold text-blue-600">
          デジタルメディア部
        </NavLink>

        {/* PCナビ */}
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/" className={navItem}>ホーム</NavLink>
          <NavLink to="/activities/programming" className={navItem}>プログラミング</NavLink>
          <NavLink to="/activities/design" className={navItem}>デザイン</NavLink>
          <NavLink to="/activities/3d-modeling" className={navItem}>3D</NavLink>
          <NavLink to="/activities/meeting" className={navItem}>ミーティング</NavLink>
          <NavLink to="/activities/study" className={navItem}>勉強会</NavLink>
        </nav>

        {/* モバイルボタン */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* モバイルメニュー */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 bg-white shadow-md' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col px-4 py-2 space-y-2">
          <NavLink to="/" className={navItem} onClick={() => setIsOpen(false)}>ホーム</NavLink>
          <NavLink to="/activities/programming" className={navItem} onClick={() => setIsOpen(false)}>プログラミング</NavLink>
          <NavLink to="/activities/design" className={navItem} onClick={() => setIsOpen(false)}>デザイン</NavLink>
          <NavLink to="/activities/3d-modeling" className={navItem} onClick={() => setIsOpen(false)}>3D</NavLink>
          <NavLink to="/activities/meeting" className={navItem} onClick={() => setIsOpen(false)}>ミーティング</NavLink>
          <NavLink to="/activities/study" className={navItem} onClick={() => setIsOpen(false)}>勉強会</NavLink>
        </div>
      </div>
    </header>
  )
}