import { toast } from "react-toastify";
import { Forminput, Submitbutton } from "../components";
import {Form, Link,redirect, useNavigate} from "react-router-dom";
import { customFetch } from "../utils";
import { loginUser } from "../features/User/userSlice";
import { useDispatch } from "react-redux";


export const action =(store)=> async ({request}) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
        const response = await customFetch.post('/auth/local', data);
        store.dispatch(loginUser(response.data));
        toast.success('login successfull');
        return redirect('/');
      } catch (error) {
        const errorMessage =
          error?.response?.data?.error?.message ||
          'please double check your credentials';
        toast.error(errorMessage);
        return null;
      }
  };

const Login = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGuestUser = async()=>{
        try{
            const response = await customFetch.post('/auth/local',
            {
            "identifier":"test@test.com","password":"secret"
        });
        dispatch(loginUser(response.data));
        navigate("/");
        }
        catch(err){
            console.log(err);
        }
    }
    return(
        <section className="min-h-screen grid place-content-center">
            <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
                <h4 className="text-center text-3xl font-bold">Login</h4>
                <Forminput type="email" label="Email" name="identifier" />
                <Forminput type="password" label="Password" name="password"  />
                <div className="mt-2">
                    <Submitbutton label="login" />
                    <button className="btn btn-secondary btn-block my-2" onClick={handleGuestUser} >Guest User</button>
                    <p className="text-center">Not a member yet?<Link to="/register" className="ml-2 link link-hover link-primary capitalize">Register</Link></p>
                </div>
            </Form>
        </section>
    )
}
export default Login;