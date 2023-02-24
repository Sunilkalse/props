import React from 'react'
import { Component } from 'react'
import Nav from "./Nav.jsx"
// import img from "./nature.jpg"


//  const App=()=>{
//     return(
//         <div>
//             <Nav data="hello"/>
//         </div>
//     )
//  }

class App extends Component{
    render(){
        return(
            <div>
                <Nav data="this is class by using based "/>
            </div>
        )
    }
}

// class App extends Component{
//     render(){
//         return(
//             <div>
//                 <Nav photo={img} />
//             </div>
//         )
//     }
// }
export default App