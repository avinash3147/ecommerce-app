import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer, Navbar, Sidebar } from './components';
import { About, Cart, Checkout, Error, Home, Products, SingleProduct } from './pages';

function App() {
  return (
    <Router>

      <Navbar />
      {/* <Sidebar /> */}

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/about'>
            <About />
          </Route>

          <Route exact path='/checkout'>
            <Checkout />
          </Route>

          <Route exact path='/cart'>
            <Cart />
          </Route>

          <Route exact path='/products'>
            <Products />
          </Route>

          <Route exact path='/product/:id' children={<SingleProduct />}>
          </Route>

          <Route path='*'>
            <Error />
          </Route>
        </Switch>

      <Footer />
      
    </Router>
  );
}

export default App;
