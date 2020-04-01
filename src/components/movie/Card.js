import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { POSTER_PATH } from '../../config';

class Card extends React.Component {
  convertDate(date) {
    const dateObj = new Date(date);
    return dateObj.getFullYear();
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (prevProps.movieGenres !== this.props.movieGenres) {
  //       // Do whatever you want
  //   }
  // }

  render() {
    const { poster_path, release_date, first_air_date, media_type, type, id, title, name, genre_ids } = this.props.item;
    const mediaType = media_type || type;
    return (
      <div className="card">
        <img src={`${POSTER_PATH}${poster_path}`} alt={title || name} />
        <div className="card__content">
          <div className="card__meta">
            <span className="card__date">{this.convertDate(release_date || first_air_date)}</span>
            <span className="card__media-type">{media_type || type}</span>
          </div>
          <Link to={`/movie/${id}`} className="card__title">
            {title || name}
          </Link>
          <div className="card__genres">
            <ul className="reset-list card__genres-list">
              {genre_ids.map(id => {
                const item = this.props.movieGenres.filter(genre => genre.id === id);
                console.log(item)
                return '1';
                // return ( (item.length) ? <li key={id}>{item.shift().name},&nbsp;</li> : '' )
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
// 	return {
// 		genresAll: state.genres.data,
// 		isComplete: state.genres.isCompleted
// 	};
// };

const mapStateToProps = state => ({
  movieGenres: state.genresReducer.genres.movie
});


export default connect(
  mapStateToProps,
  null
)(Card);
