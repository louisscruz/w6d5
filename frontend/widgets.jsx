import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './tabs';
import Clock from './clock';
import Weather from './weather';
import AutoComplete from './autocomplete';

const names = ['Randy', 'Bob', 'Vince', 'Louis', 'Bill', 'Buckner'];

class Root extends React.Component {
  render() {
    const tabs = [{
      title: 'Randy',
      content: 'I am completely in charge of the choices I make about what I am doing to lose weight and get healthy. And you know what? We all have this power. Don’t be angry with me for something good I’ve done for myself. Be angry with yourself for not having the courage to do the same in your own life.'
    }, {
      title: 'Bob',
      content: 'One\'s first step in wisdom is to question everything - and one\'s last is to come to terms with everything.'
    }, {
      title: 'Louis',
      content: 'It is not worth an intelligent man\'s time to be in the majority. By definition, there are already enough people to do that.'
    },
    {
      title: 'Vince',
      content: 'The nice thing about standards is that there are so many of them to choose from.'
    }];
    return (
      <div>
        <h1>Tabs</h1>
        <Tabs tabs={tabs}/>
        <Clock />
        <Weather />
        <AutoComplete names={names}/>
      </div>
    )
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});
