import React, { Component } from 'react'

export class Room extends Component {
    render() {
        return (
            // <div>
            //     <nav class="navbar navbar-expand-lg fixed-nav-bar">
            //         <div class="container-fluid">
            //         <ul>
            //             <li className="nav-link">
            //             <span><img src={require('../assets/arrow.svg')} alt="Arrow"/></span>
            //             <span  id="nav-content"> Mathematics 101</span>
            //             <span><img src={require('../assets/locker.svg')} alt="Locker"/></span>
            //             </li>
            //         </ul>

            //         <ul className="nav-items">
            //            <li className="nav-link">Room</li>
            //            <li className="nav-link">Participants</li>
            //            <li className="nav-link">Settings</li>
            //         </ul>
            //         </div>
            //     </nav>
                // <div className="Quick-post-button">
                //  <button className="Quick-post">Quick Post</button>
                // </div>

                // <div class="float">
                //  <i class="fa fa-plus my-float"> <span id="textRotate">Comments</span></i>
                // </div>

                // <div style={{display:"flex", justifyContent:"center", marginTop:"5em"}}>
                //     <ul>
                //         <li className="nav-link" style={{textAlign:"center"}}><h3>Hi John!</h3></li>
                //         <li className="nav-link" style={{textAlign:"center", color:"#4E4DFE"}}>
                //             <p>No activites has been created or posted in this room yet</p></li>
                //     </ul>
                // </div>

                // <div>
                //     <ul className="plus-Sign-symbol">
                //         <li className="nav-link" style={{textAlign:"center"}}><h3>Create an activity here!</h3></li>
                //         <li className="nav-link"><img src={require('../assets/plus.svg')} alt="plus sign"/></li>
                //     </ul>
                // </div>
            // </div>
<div>
    <nav class ="navbar">
        <div class="head-icon-nav">
            <span><img src={require('../assets/arrow.svg')} alt="Arrow"/></span>
            <span class="brand-title">Mathematics 101</span>
            <span><img src={require('../assets/locker.svg')} alt="Locker"/></span>
        </div>
        <div class="navbar-links">
            <ul>
                <li><a href="#">Rooms</a></li>
                <li><a href="#">Participants</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </div>
    </nav>
    <div className="Quick-post-button">
                 <button className="Quick-post">Quick Post</button>
                </div>

                <div class="float">
                 <i class="fa fa-plus my-float"> <span id="textRotate">Comments</span></i>
                </div>

                <div style={{display:"flex", justifyContent:"center", marginTop:"5rem"}}>
                    <ul>
                        <li className="nav-link" style={{textAlign:"center"}}><h3>Hi John!</h3></li>
                        <li className="nav-link" style={{textAlign:"center", color:"#4E4DFE"}}>
                            <p>No activites has been created or posted in this room yet</p></li>
                    </ul>
                </div>

                <div>
                    <ul className="plus-Sign-symbol">
                        <li className="nav-link" style={{textAlign:"center"}}><h3>Create an activity here!</h3></li>
                        <li className="nav-link"><img src={require('../assets/plus.svg')} alt="plus sign"/></li>
                    </ul>
                </div>
</div>



        )
    }
}

export default Room
