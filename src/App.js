
import React,{Component} from 'react';
import './App.css';
import {Searchbox} from './component/search-box/search-component';
import {CardList} from './component/card-list/card-list';



class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField: ''

    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({monsters: user}));
  }
render(){
  const { monsters, searchField } = this.state;
  const filteredMonsters = monsters.filter(monsters => 
    monsters.name.toLowerCase().includes(searchField.toLowerCase()));
return (
  <div className="App">
 
<Searchbox 
placeholder='search monster'
handleChange= {e => this.setState({searchField: e.target.value})}
/>
     <CardList monsters={filteredMonsters} />
    
    </div>
  );
}


}



    

export default App;
