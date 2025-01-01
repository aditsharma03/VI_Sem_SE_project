import { Route, Routes } from "react-router-dom";


const Feed = ()=>{

    return  <>
                <div className=" bg-slate-900 h-screen w-screen text-white flex justify-center items-center">
                <Routes>
                    <Route path="/instagram" element={ <h1 className=" font-semibold text-4xl text-purple-500">instagram posts here </h1>}/>
                    <Route path="/facebook" element={ <h1 className="font-semibold text-2xl text-blue-400">facebook posts here </h1>}/>
                    <Route path="/twitter" element={ <h1 className="font-semibold text-xl text-blue-700">twitter posts here </h1>}/>
                    <Route path="/tumblr" element={ <h1 className="font-semibold text-xs text-white">tumblr posts here </h1>}/>
                </Routes>
                    
                </div>
            </>

}


export default Feed;