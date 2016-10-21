import React from 'react';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   value: ''
    // }
    this.state = {
      filteredNames: this.props.names
    }
    this.filterNames = this.filterNames.bind(this);
  }

  filterNames(event) {
    console.log(event.target.value);
    let filteredNames = [];
    const value = event.target.value;
    this.props.names.forEach(name => {
      console.log(name.substring(0, value.length));
      if (name.toLowerCase().substring(0, value.length) === value) {
        filteredNames.push(name);
      }
    });

    this.setState({filteredNames: filteredNames});
  }

  render() {
    return (
      <div>
        <label>Search</label>
        <br />
        <input type="text" onChange={this.filterNames} className="filter-input"/>
        <ul>
          {
            this.state.filteredNames.map((name, index) => (
              <li key={index}>{name}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default AutoComplete;
