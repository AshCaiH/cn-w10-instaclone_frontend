import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/_main'
import { imagesContext, userContext } from './common/contexts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageHome from './pages/home/_main'
import PageLikes from './pages/likes/_main'

function App() {
    const [user, setUser] = useState(null);

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
            < BrowserRouter basename="">

            < Navbar 
                setUser={setUser} 
                user={user} 
                routes={routes}/>

            < Routes >
                {routes.map((item, index) => {
                    if (user) return <Route path={item.path} element={item.element} />;
                    else return <Route path={item.path} element={<PageHome setUser={setUser} user={user}/>} />
                })}
            </Routes >
            </BrowserRouter>

        </userContext.Provider>
        
    )
}

export default App