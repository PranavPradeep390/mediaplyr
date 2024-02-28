import { Route, Routes } from 'react-router-dom'
import './App.css'
import Watch from './pages/Watch'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'



function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Landing/>} /> {/*  '/' is the default path */}
        <Route path='/home' element={<Home/>} />
        <Route path='/watch' element={<Watch/>} />

      </Routes>
      <hr />
      <Footer/>
    </>
  )
}


export default App