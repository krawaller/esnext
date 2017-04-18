import React from 'react';
import autobind from 'autobind-decorator'; // https://www.npmjs.com/package/autobind-decorator

class Clicker extends React.Component {
  constructor () {
    super();
    this.state = {count: 3};
  }
  @autobind
  more () {
    this.setState({count: this.state.count + 1});
  }
  render () {
    return <div>
      <p>{this.state.count} bottles of beer on the wall</p>
      <button onClick={this.more}>Buy more</button>
    </div>;
  }
}

export default Clicker
