import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      itemList: []
    };
  }

  componentDidMount(){
    console.log('App Component Mounted');
    fetch('/api/inventory')
      .then(res => res.json())
      .then(data => {
        const newitemList = [];
        data.forEach(({itemName, currentStock, idealStock}) => {
          newitemList.push(
            <div className='item'>
              <h4>Name: {itemName} Current Stock: {currentStock} Ideal Stock: {idealStock}</h4>
            </div>
          );
        });
        this.setState({itemList: newitemList});
        console.log('State: ', this.state);
      })
      .catch(err => {
        console.log('Error:', err);
      }); 
  }


  render() {
    console.log('IN RENDER', this.state);
    // if (this.state.itemList.length === 0) 
    //   return(
    //     <div>
    //       <h1>Loading data, please wait...</h1>
    //     </div>
    //   );

    return (
      <div>
        <div className='item-list'>
          {this.state.itemList}
        </div>

        <Link to='/add'>
          <button>Add Item!</button>
        </Link>
      </div>
    );
  }
}

export default MainContainer;