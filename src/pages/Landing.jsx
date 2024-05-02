import { FeaturedProduct, Hero } from "../components";
import { customFetch } from "../utils";

const url = "/products?featured=true";

export const loader = async()=>{
    const response = await customFetch(url);
    // console.log(response.data.data);
    const products = response.data.data;
    return {products};
};

const Landing = ()=>{
    return(
        <div>
            <Hero/>
            <FeaturedProduct/>
        </div>
    )
}
export default Landing;