import React from "react";
import Item from '../movie/Card.js';

class Listing extends React.Component {
  render() {
    if (this.props.items) {
      return (
        <div className="wrapper">
          <div className="listing">
            {this.props.items.map((item, index) => (
              <Item item={item} key={index}></Item>
            ))}
          </div>
        </div>
      )
    }

    return (
      <div>Loading...</div>
    )
  }
}

export default Listing

