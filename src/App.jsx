import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/_main'
import LoginRegister from './components/login-register/_main'
import ImageGrid from './components/images/image-grid/_main'



function App() {    

    return (
        <>
            < Navbar />
            < LoginRegister />
            < ImageGrid />
        </>
    )
}

export default App
