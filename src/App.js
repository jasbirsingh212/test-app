// @ts-ignore
import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Input } from "antd";
import CardList from "./components/card-list/card-list";

const { Search } = Input;

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchInput : ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ monsters: data }));
  }

  handleNameChange = () => {
    // this.setState({...this.state, firstName: 'Jas'})
    this.setState({ firstName: "Jas" });
  };

  onSearch = (value) => {
    const { monsters } = this.state;
    const filterMonster = monsters.filter( monster => {
        const { name } = monster;
        if(name.toLowerCase().includes(value.toLowerCase())){
          return monster;
        }
    })
    this.setState({ filterMonster, searchInput : value })
  };

  render() {
    const { monsters, filterMonster } = this.state;
    return (
      <div className="App">
        <h1 className='center'>Monster Rolodex</h1>
        <Search
          placeholder="Search for monster"
          onSearch={this.onSearch}
          className="search-input"
        />
        <CardList monsters={filterMonster ? filterMonster : monsters} />
      </div>
    );
  }
}

export default App;
