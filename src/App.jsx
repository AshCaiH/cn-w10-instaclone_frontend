import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/_main'
import { imagesContext, userContext } from './common/contexts'
import { HashRouter, Route, Routes } from 'react-router-dom'
import PageHome from './pages/home/_main'
import PageLikes from './pages/likes/_main'

function App() {
    const [user, setUser] = useState(null);
    const [images, setImages] = useState({page: null, images: null});

    const routes = [{
        path: "/",
        element: <PageHome user={user} setUser={setUser}/>,
        title: "Home"
    },{
        path: "/likes",
        element: <PageLikes user={user} setUser={setUser}/>,
        title: "Likes"
    }]

    return (
        <userContext.Provider value={{ user, setUser }}>
        <imagesContext.Provider value={{ user, setUser }}>

        < HashRouter basename="">

            < Navbar 
                setUser={setUser} 
                user={user} 
                routes={routes}/>

            < Routes >
                {routes.map((item, index) => {
                    return <Route path = {item.path} key={index} element={item.element}/>
                })}                
            </Routes >

        </HashRouter>

        </imagesContext.Provider>
        </userContext.Provider>
    )
}

export default App