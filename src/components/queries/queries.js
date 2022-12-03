import React from 'react';
import ReactDOM from 'react-dom';
import './queries.css';

class Query extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Your name",
      number: "Your number",
    }
  }
  change() {
    this.setState({
      name: document.query.name.value,
      number: document.query.number.value,
    });
  }
  render() {
    return (
      <form name="query" encType="multipart/form-data">
        <input name="name" className="Your_name" type="text" value={this.state.name} onChange={() => this.change()}/>
        <input name="number" className="Your_number" type="text" value={this.state.number} onChange={() => this.change()}/>
        <input className="Get_a_call" type="submit" value="Get a call"/>
      </form>
    );
  }
}

export default Query;