import React from "react";
import { connect } from 'react-redux';

class Card extends React.Component {
  render() {
    return (
      <div className="Card">
        {/* {console.log(this.props)} */}
        {this.props.title}
        {this.props.rating}
        <img src={this.props.poster} alt="" />
        {/* {console.log(this.props.genres)} */}
        {/* {this.props.genres.map((genre, index) => (
          <div key={index}>{genre}</div>
        ))} */}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // let items = null;
  // if (state.genres.length > 0) {
  //   items = ownProps.genres.map(function(id) {
  //     if (state.genres.length > 0) {
  //       return state.genres.find(obj => obj.id === id);
  //     }
  //     return false;
  //   })
  // }
  return {
    ...ownProps
  }
}

export default connect(mapStateToProps)(Card);
