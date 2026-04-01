import { Link } from 'react-router-dom'

export default function Header() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const yOffset = -80 // ヘッダー分ずらす
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset

      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="font-bold text-lg text-blue-600">
          デジタルメディア部
        </Link>

        <nav className="hidden md:flex space-x-6 text-sm">
          <button onClick={() => scrollTo('overview')}>部活動概要</button>
          <button onClick={() => scrollTo('activities')}>主な活動分野</button>
          <button onClick={() => scrollTo('achievements')}>活動実績</button>
          <button onClick={() => scrollTo('gallery')}>活動の様子</button>
          <button onClick={() => scrollTo('languages')}>学習言語</button>
          <button onClick={() => scrollTo('message')}>部長メッセージ</button>
        </nav>
      </div>
    </header>
  )
}