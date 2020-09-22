import React, { Component } from 'react';
import Card from './Card';
import data from '../data/data';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Gallery extends Component {
    constructor({props}){
        super(props);
        this.state = {
          appearHome: true,
          property: data.properties[0]
        }
      }

      toggleAppear = () => {
        this.setState({
          appearHome: !this.state.appearHome
        })
      }
    
      nextProperty = () => {
        const newIndex = this.state.property.index+1;
        this.setState({
          property: data.properties[newIndex]
        })
      }
    
      prevProperty = () => {
        const newIndex = this.state.property.index-1;
        this.setState({
          property: data.properties[newIndex]
        })
      }

    render() {
        const {property} = this.state;
        return (
            <div className="page">
              <section>
                <button onClick={() => this.nextProperty()} disabled={property.index === data.properties.length-1}>Next</button>
                <button onClick={() => this.prevProperty()} disabled={property.index === 0}>Prev</button>
              </section>
              <TransitionGroup className="card-container">
                <CSSTransition
                  key={property._id}
                  timeout={300}
                  classNames="fade" >
                  <Card property={property} />
                </CSSTransition>
              </TransitionGroup>
            </div>
        );
    }
}

export default Gallery;