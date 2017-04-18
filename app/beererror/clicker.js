import React from 'react'

class Clicker extends React.Component {
  constructor () {
    super();
    this.state = {count: 3};
  }
  more () {
    this.setState({count: this.state.count + 1}); // will throw error because wrong `this`
  }
  render () {
    return <div>
      <p>{this.state.count} bottles of beer on the wall</p>
      <button onClick={this.more}>Buy more</button>
    </div>;
  }
}

export default Clicker
