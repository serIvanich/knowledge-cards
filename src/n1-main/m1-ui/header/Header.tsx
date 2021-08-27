import {FakeNavbar} from "./Navbar/FakeNavbar";
import {useSelector} from "react-redux";
import {AppStateType} from "../../m2-bll/store";
import {Navbar} from "./Navbar/Navbar";

export const Header: React.FC = () => {

    const isLogged = useSelector<AppStateType, boolean>(state => state.auth.isLogged)

    return (
        <div>

            {isLogged? <Navbar/>:<FakeNavbar/>}
        </div>
    )
}
