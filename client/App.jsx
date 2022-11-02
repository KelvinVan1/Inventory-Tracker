import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainContainer from './containers/MainContainer.jsx';
import AddItem from './containers/AddItemContainer.jsx';
import EditItem from './containers/EditItemContainer.jsx';


class App extends Component {
  render() {
    return (
      <Router>
        <div className= 'app'>
          <h1 className='title'>Veterinary Inventory System</h1>

          <Routes>
            <Route exact path='/' element={<MainContainer/>}/>
            <Route path='/add' element={<AddItem/>}/>
            <Route path='/edit/:id' element={<EditItem/>}/>
          </Routes>

        </div>
      </Router>
    );
  }
}

export default App;