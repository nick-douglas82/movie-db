import React from "react";
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

import { API_IMAGE } from '../../config';

class Card extends React.Component {
  convertDate(date) {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString();
  }

  render() {
    // const { genresAll, isComplete } = this.props;
    return (
      <div className="card">
        <img src={`${API_IMAGE.medium}/${this.props.poster}`} alt="" />
        <div className="card__content">
          <div className="card__meta">
            <span className="card__date">{this.convertDate(this.props.date)}</span>
            <span className="card__media-type">Movie</span>
          </div>
          <Link to={`/movie/${this.props.id}`} className="card__title">
            {this.props.title}
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
