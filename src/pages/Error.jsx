import { Link, useRouteError } from "react-router-dom";

const Error = ()=>{
    const error = useRouteError();
    console.log(error); 
    if(error.status === 404){
        return(
        <main className="grid min-h-[100vh] place-items-center">
            <div className="text-center">
            <h1 className="font-bold text-[#fc9dfa] text-8xl">404</h1>
            <h2 className="font-bold text-white text-3xl p-2">Page not Found</h2>
            <p className="font-bold text-white text-sm md:text-lg ">Sorry we couldn't find the page your looking for...!</p>
            <Link to={"/"} className="btn bg-[#fc9dfa] text-black font-bold m-2 hover:bg-[#ffc0fe]">Go Back</Link>
            </div>
        </main>
        )
    }
    return(
        <main className="grid min-h-[100vh] place-items-center">
            <div className="text-center">
            <h1 className="font-smibold text-2xl md:text-5xl md:p-3">There is a error in this page</h1>
            <Link to={"/"} className="btn bg-[#fc9dfa] text-black font-bold m-2 hover:bg-[#ffc0fe]">Go Back</Link>
            </div>
        </main>
    )
}
export default Error;


