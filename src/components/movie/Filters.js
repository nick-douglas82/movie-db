import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { changeFilterFunc } from '../../actions/movieActions';
import { setFilter } from '../../store/actions/filters';


class Filters extends Component {
  handleChangeFilter = (filter) => {
		this.props.onSetFilter(filter)
  }

  render() {
		const { type } = this.props.filter.filter;

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
			<div className="wrapper filters">

					<ul className="reset-list filters__list">
						{filters.map(item => (
							<li
								key={item.slug}
								className={ item.slug === type  ? 'active' : '' }
								onClick={ () => this.handleChangeFilter(item.slug) }
							>
								{item.title}
							</li>
						))}
					</ul>
			</div>
		)
  }
}

const mapStateToProps = (state, ownProps) => ({ filter: state.filtersReducer });

const mapDispatchToProps = dispatch => {
	return {
			onSetFilter: (filter) => dispatch(setFilter(filter)),
	}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
