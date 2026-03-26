
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {


  return (
     <div >
      <nav className='p-3 bg-amber-50 shadow-2xl shadow-amber-200 sticky z-50'>
        <Navbar />
      </nav>

      <main className='max-w-7xl mx-auto'>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
