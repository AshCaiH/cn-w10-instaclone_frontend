import ImageGrid from "../../components/images/image-grid/_main";
import LoginRegister from "../../components/login-register/_main";

const Home = (props) => {
    return (
        <>
            {!props.user ?
                < LoginRegister
                    setUser={props.setUser} />

                :

                < ImageGrid />
            }
        </>
    )
}

export default Home;