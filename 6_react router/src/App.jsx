
import Header from './components/header/Header';

import Footer from './components/footer/Footer';

import { Outlet } from 'react-router-dom';

export default function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer />
    </>
  )
  
}
