import React, { useState } from "react";

let Conditionalview=()=>
{
    let[greetHeading,setGreetHeading]= useState("Welcome Guest")
    let[greeetBody,setGreetBody]= useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
    let[isLogin,setIsLogin]= useState(false)

    let login=()=>
    {
        setIsLogin(true)
        setGreetHeading("Welcome Rohit!")
        setGreetBody("You are now logged in")
    }
    let logout=()=>
    {
        setIsLogin(false)
        setGreetHeading("Bye Rohit!")
        setGreetBody("You are now logged out")  
    }
    return(
        <React.Fragment>
            <div className="container ">
                <div className="card col-8">
                    <div className="card-header">
                        <h1>Login / Logout</h1>
                    </div>
                    <div className="class-body mt-3 mb-3">
                        <div className="container">
                            {(isLogin===false)?
                             <button className=" btn btn-success" onClick={login}>Login</button>
                              :
                             <button className="btn btn-danger" onClick={logout}>Logout</button>
                             }
                             <h1>{greetHeading}</h1>
                             <p>{greeetBody}</p> 
                         </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
export default Conditionalview

// import React from "react";

// class Conditionalview extends React.Component
// {
//     constructor(props)
//     {
//         super(props)
//         this.state={
//             greetHeading:'Welcome Guest!',
//             greeetBody:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//             isLogin:'false'
//         }
//     }

//     login=()=>{
//         this.setState(
//             {
                
//                 isLogin: 'true',
//                 greetHeading:'Welcome Rohit!',
//                 greeetBody:'It is now login',
//             }
//         )
//     }

//     logout=()=>{
//         this.setState(
//             {
//                 isLogin: 'false',
//                 greetHeading:'Welcome Guest!',
//                 greeetBody:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                
//             }
//         )
//     }
//     render()
//     {
//         return(
//            <React.Fragment>
//                <div className="container ">
//                    <div className="card col-8">
//                        <div className="card-header">
//                            <h1>Login / Logout</h1>
//                        </div>
//                        <div className="class-body mt-3 mb-3">
//                            <div className="container">
//                                {(this.state.isLogin==='false')?
//                                 <button className=" btn btn-success" onClick={this.login}>Login</button>
//                                  :
//                                 <button className="btn btn-danger" onClick={this.logout}>Logout</button>
//                                 }
//                                 <h1>{this.state.greetHeading}</h1>
//                                 <p>{this.state.greeetBody}</p>

                              
                                
//                             </div>
//                        </div>
//                    </div>
//                </div>
//            </React.Fragment>
//         );
//     }
// }
// export default Conditionalview