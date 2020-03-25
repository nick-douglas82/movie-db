import React from "react";
import { Link } from 'react-router-dom';

import { POSTER_PATH } from '../../config';

class Card extends React.Component {
  convertDate(date) {
    const dateObj = new Date(date);
    return dateObj.getFullYear();
  }

  render() {
    const { poster_path, release_date, first_air_date, media_type, type, id, title, name } = this.props.item;
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
            {/* <ul className="reset-list card__genres-list">
              {isComplete && this.props.genres.map(id => {
                const item = genresAll.filter(genre => genre.id === id);
                return ( (item.length) ? <li key={id}>{isComplete && item.shift().name},&nbsp;</li> : '' )
              })}
            </ul> */}
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


// export default connect(
//   mapStateToProps
// )(Card);
export default Card;
