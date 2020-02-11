import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { API_IMAGE } from '../../config';

class Card extends React.Component {
  render() {
    const { genresAll, isComplete } = this.props;
    return (
      <div className="card">
				<Link to={`/movie/${this.props.id}`} className="movie-title">
          <h3>{this.props.title}</h3>
				</Link>
        <div className="card__rating">
          {this.props.rating}
        </div>
        <img src={`${API_IMAGE.small}/${this.props.poster}`} alt="" />
        <div className="card__genres">
					<ul className="card__genres-list">
            {isComplete && this.props.genres.map((id, index) => {
              const item = genresAll.filter(genre => genre.id === id);
              return ( (item.length) ? <li key={id}>{isComplete && item.shift().name}</li> : '' )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
	return {
		genresAll: state.genres.data,
		isComplete: state.genres.isCompleted
	};
};


export default connect(
  mapStateToProps
)(Card);
