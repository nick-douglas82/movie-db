import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { changeFilterFunc } from '../../actions/movieActions';
import { changeFilterFunc } from '../../actions/movieActions';


class Filters extends Component {
  handleChangeFilter = (filter)=>{
    this.props.changeFilter(filter);
  }

  render() {
    const { filter } = this.props;

		const filters = [
			{
				title: 'In the Cinema',
				slug: 'in_theatres',
			},
			{
				title: 'Coming Soon',
				slug: 'comming_soon'
			},
			{
				title: 'Charts',
				slug: 'chart',
      },
			{
				title: 'TV Series',
				slug: 'tv',
			},
			{
				title: 'Trailers',
				slug: 'trailers',
			}
		];

		return (
			<div className="filters">
				<ul>
					{filters.map(item => (
            <li
              key={item.slug}
              className={item.slug === filter.type  ? 'active' : ''}
              onClick={()=>{this.handleChangeFilter(item.slug)}}
            >
              {item.title}
            </li>
					))}
				</ul>
			</div>
		)
  }
}

const mapStateToProps = (state) => {
	return {
		filter: state.filter
	};
};

const mapDispatchToProps = (dispatch)=>{
  return{
    changeFilter: (filter) => {dispatch(changeFilterFunc(filter))},
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
