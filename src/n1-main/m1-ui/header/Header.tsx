import {FakeNavbar} from "./Navbar/FakeNavbar";
import {useSelector} from "react-redux";
import {AppStateType} from "../../m2-bll/store";
import {Navbar} from "./Navbar/Navbar";

export const Header: React.FC = () => {

    const isInitialized = useSelector<AppStateType, boolean>(state => state.app.isInitialized)

    return (
        <div>

            {isInitialized? <Navbar/>:<FakeNavbar/>}
        </div>
    )
}
