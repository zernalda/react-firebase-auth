// import React from 'react';
// import Gallery from './components/Gallery';

// const Home = ({handleLogout}) => {
//     return (
//         <section className="hero">
//             <nav>
//                 <h2>Welcome</h2>

//                 <button onClick={handleLogout}>Logout</button>
//             </nav>
//                 <Gallery/>
//         </section>
//     );
// };

// export default Home;

import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Gallery from './components/Gallery';


class Home extends Component {
      
      Gallery=()=> {
        return <Gallery />
      }
      
    render() {
        const {handleLogout} = this.props
        return (
            <section className="hero">
                <Router>
                    <div>
                        <nav className="nav-menu">
                            <ul>
                                <li className="test"><Link to="/">Home</Link></li>
                                <li><Link to="/gallery">Gallery</Link></li>
                                
                            </ul>
                            <button onClick={handleLogout}>Logout</button>
                        </nav>
                        <Switch>
                            <Route exact path="/" />
                            <Route path="/gallery">
                                <Gallery />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </section>
        );
    }
}

export default Home;