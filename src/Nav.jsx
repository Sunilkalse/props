import React from "react";
import { Component } from "react";
// const Nav=(props)=>{
//     return(
//         <div>
//             {props.data}
//         </div>
//     )
// }

class Nav extends Component{
        render(){
            return(
                    <div>
                        {this.props.data}
                    </div>
                                )
            }
        }


// class Nav extends Component{
//     render(){
//         return(
//            <img src={this.props.photo} alt="" />
//         )
//         }
//     }

export default Nav