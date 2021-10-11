import React from 'react'
import quotes from './Quotes';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quotes: quotes[0],
      used: [],
      color: 'pink'
    }
  }

  generateNew = () => {
    let rand = Math.floor(Math.random() * quotes.length);
    let randColor = Math.floor(Math.random()*16777215).toString(16);
    let selected = quotes[rand];
    if (!this.state.used.includes(selected)) {
      this.setState({quotes:selected, color:`#${randColor}`})
    }
    this.state.used.push(selected)
  }

  render () {
    return (
      <div className="container" style={{backgroundColor: this.state.color}}>
        <div className="frame">
          <header className="quote" style={{color: this.state.color}}>"{this.state.quotes.quote}"</header>
          <span className="author" style={{color: this.state.color}}>-{this.state.quotes.author}-</span>
          <div>
            <button className="btn" style={{backgroundColor: this.state.color}} onClick={this.generateNew}>New quote</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
