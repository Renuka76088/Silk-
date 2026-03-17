import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import heroImg from './assets/hero.png'
import './App.css'
import LandingPage from './Components/LandingPage'
import SilkPage from './Components/SilkPage'
import Footer from './Components/Footer'
import HomePage from './Components/HomePage'
import AboutPage from './Components/AboutPage'
import ContactUs from './Components/ContactUs'
import OurManagement from './Components/OurManagement'
import TradeEnquiryForm from './Pages/TradeEnquiryForm'
import EQuotationForm from './Pages/EQuotationForm'
import EAuctionForm from './Pages/EAuctionForm'
import TenderContractsUI from './Pages/TenderContractsUI'
import CareerPage from './Pages/CareerPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <HomePage/>
    <Routes>

      <Route path='/' element={<LandingPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/products' element={<SilkPage/>}/>
      <Route path='/page/our-management' element={<OurManagement/>}/>
      <Route path='/page/trade-enquiry' element={<TradeEnquiryForm/>}/>
      <Route path='/page/e-quotation' element={<EQuotationForm/>}/>
      <Route path='/page/e-auction' element={<EAuctionForm/>}/>
      <Route path='/page/tender-contract' element={<TenderContractsUI/>}/>
      <Route path='/page/career' element={<CareerPage/>}/>
    </Routes>
     <Footer/>
    
    </BrowserRouter>
    </>
  )
}

export default App
