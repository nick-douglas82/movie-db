import React from "react";
import Item from '../movie/Card.js';

class Listing extends React.Component {
  render() {
    if (this.props.movies) {
      return (
        <div className="wrapper">
          <div className="listing">
            {Object.keys(this.props.movies).map((i) => (
              <Item
                title={this.props.movies[i].title}
                date={this.props.movies[i].release_date}
                id={this.props.movies[i].id}
                genres={this.props.movies[i].genre_ids}
                rating={this.props.movies[i].vote_average}
                poster={this.props.movies[i].poster_path}
                key={i}
              ></Item>
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

