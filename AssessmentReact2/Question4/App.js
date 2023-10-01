import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ProductComponent from './ProductComponent'

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/product" component={ProductComponent} />
    </Router>
  )
}

function Home() {
  return <div>Home Page</div>;
}

export default App;
