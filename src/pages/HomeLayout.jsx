import { Outlet ,useNavigation} from "react-router-dom";
import { Header, Navbar,Loading } from "../components";


const HomeLayout = ()=>{
    const navigation = useNavigation();
    const isPagination = navigation.state==='loading';
    return(
        <>
        <Header/>
        <Navbar/>
        {isPagination?<Loading/>:       
             <section className="align-elements py-20">
                <Outlet/>
            </section>}

        </>
    )
}
export default HomeLayout;