import { Link } from "react-router-dom";
import { Button } from "../ui/button";


const title = "Minimal Social Media Application";

const arr = [
    {
        name: "Instagram",
    },
    {
        name: "Facebook",
    },
    {
        name: "Twitter",
    },
    {
        name: "tumblr",
    }
]


const Sidebar = ()=>{
    return  <>
                <div className=" h-screen w-72 bg-slate-950 border-r-2 border-slate-700">
                    <h3 className=" text-xl text-white p-3 font-mono"> {title} </h3>

                    <div className="text-white py-20 mt-28 mb-20  p-5 border-y-2 border-slate-700 mx-5">
                        <ul>
                            {
                                arr.map( element => {
                                    return <Link to={`/${element.name}`}><Button className=" w-full mt-2 block"> {element.name}</Button></Link>
                                })
                            }
                        </ul>
                    </div>

                    
                    <div className=" text-center">
                            <Button className=" w-10/12">Preferences</Button>
                    </div>
                </div>
            </>
}


export default Sidebar