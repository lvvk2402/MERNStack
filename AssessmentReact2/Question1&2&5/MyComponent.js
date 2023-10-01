// Question 1
import React, { Component } from 'react'

class MyComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
    }
  }


// Question 2 
  // updateState = () => {
  //   const newState = /* create a new state object */;
  //   if (newState !== this.state) {
  //     this.setState(newState);
  //   }
  // };
  

  componentDidMount() {
    // Called after the component is rendered to the DOM
    // Perform AJAX requests, data fetching, etc.
  }

  componentDidUpdate(prevProps, prevState) {
    // Called whenever component updates (props or state change)
    // You can compare current props and state with prevProps and prevState here
  }

  componentWillUnmount() {
    // Called before the component is removed from the DOM
    // Clean up any resources, subscriptions, timers, etc.
  }

  render() {
    return <div>{this.state.data}</div>
  }
}

// Question 5
// useState: Allows functional components to manage state.
// useEffect: Performs side effects in functional components, like data fetching or DOM manipulation.
// useContext: Accesses the context of a parent component.
// useReducer: Manages more complex state logic, often in conjunction with useState.
// useRef: Creates a mutable ref object to interact with DOM elements or persist values between renders.