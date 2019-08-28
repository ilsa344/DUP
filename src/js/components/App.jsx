import React, { Component } from "react";
import data from "./data"
import Nav from "./Nav"
import Header from "./Header"
import About from "./About"
import Services from "./Services"
import Portfolio from "./Portfolio"
import Dark from "./Dark"
import Contact from "./Contact"
import Footer from "./Footer"


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       data:data
    };
  };
  render() { 
    return ( 
      <div>
        <Nav nav={this.state.data[0].nav}/>
        <Header header={this.state.data[0].header}/>
        <About about={this.state.data[0].about}/>
        <Services services={this.state.data[0].services}/>
        <Portfolio portfolio={this.state.data[0].portfolio}/>
        <Dark dark={this.state.data[0].dark}/>
        <Contact contact={this.state.data[0].contact}/>
        <Footer footer={this.state.data[0].footer}/>
      </div>
      
     );
  }
}
 
export default App;