// import React, { Component } from 'react';
// import DayNightData from './DayNightData';
// import { render } from '@testing-library/react';

// class DayNight extends Component {
//     state = {
//         isDay: true
//     }
//     handleclick = () => {
//         console.log("it's clicked")
//         this.state.isDay({ isDay: !this.state.isDay });
//     }
//     render() {
//         return (
//             <div>
//                 <p>{this.state.isDay ? "Day" : "Night"}</p>
//                 <button onClick={this.handleclick}>Change to {this.state.isDay ? "Night : "Day"}</button>
//             </div>
//         );
//     }
// }

// export default DayNight


// Anass Version
//-------------------------------
// import React, { Component } from 'react';
// import './dayandnight.css'
// class DayAndNight extends Component {
//     state = {
//         isDay: true
//     }
//     handleClik = () => {
//         console.log("it's clicked")
//         this.setState({ isDay: !this.state.isDay });
//     }
//     render() {
//         return (
//             <section className={this.state.isDay ? "light" : "dark"}>
//                 <p>{this.state.isDay ? "Day" : "Night"}</p>
//                 <button onClick={this.handleClik}>Change to {this.state.isDay ? "Night" : "Day"}</button>
//             </section>
//         );
//     }
// }

// export default DayAndNight;