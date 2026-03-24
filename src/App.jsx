
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'

function App() {


  return (
     <div >
      <nav className='p-3 bg-amber-50 shadow-2xl shadow-amber-200 sticky z-50'>
        <Navbar />
      </nav>

      <main className='max-w-7xl mx-auto'>
        <Outlet />
      </main>
    </div>
  )
}

export default App
