import React from "react";
import Item from '../movie/Card.js';

class Listing extends React.Component {
  render() {
    if (this.props.movies) {
      return (
        <div className="wrapper">
          <div className="listing">
            {this.props.movies.map((movie, index) => (
              <Item
                title={movie.title}
                date={movie.release_date}
                id={movie.id}
                genres={movie.genre_ids}
                rating={movie.vote_average}
                poster={movie.poster_path}
                key={index}
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

