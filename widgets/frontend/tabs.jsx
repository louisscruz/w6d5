import React from 'react';
import Header from './header';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  clickHeader(index) {
    console.log('in click');
    this.setState({index: index}, () => {
      console.log(this.state.index);
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <ul className="tab-ul">
          {this.props.tabs.map((tab, index) => (
            <li key={index} className="tab">
              <Header title={tab.title} onClick={this.clickHeader.bind(this, index)}/>
            </li>
          ))}
        </ul>
        <div className="tab-content-container">
          <article className="tab-content">
            {this.props.tabs[this.state.index].content}
          </article>
        </div>
      </div>
    )
    // <h1 onClick={this.clickHeader.bind(this, index)}>{tab.title}</h1>
  }
}

export default Tabs;
