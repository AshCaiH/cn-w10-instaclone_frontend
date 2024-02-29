import { createContext, useContext, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/_main'
import LoginRegister from './components/login-register/_main'
import ImageGrid from './components/images/image-grid/_main'
import { userContext } from './common/contexts'

function App() {
    const [user, setUser] = useState(null);

    return (
        <userContext.Provider value={{ user, setUser }}>            
            < Navbar 
                setUser={setUser} 
                user={user} />

            { !user ?
                < LoginRegister 
                setUser={setUser} />

                :

                < ImageGrid />
            }
        </userContext.Provider>
    )
}

export default App