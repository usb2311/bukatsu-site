import Header from './components/header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="pt-20">
        {children}
      </div>
    </>
  )
}