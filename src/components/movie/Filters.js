import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../../store/actions/filters';
import { getMovies } from '../../store/actions/movies';


class Filters extends Component {
  handleChangeFilter = (filter) => {
		this.props.onSetFilter(filter);
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		const prevFilter = prevProps.filter.type;
		const stateFilter = this.props.filter.type;

		if (prevFilter !== stateFilter) {
			this.props.onUpdateMovies();
		}
	}

  render() {
		const { type } = this.props.filter;

		const filters = [
			{
				title: 'In the Cinema',
				slug: 'IN_THEATRES',
			},
			{
				title: 'Coming Soon',
				slug: 'COMING_SOON'
			},
			{
				title: 'Charts',
				slug: 'CHART',
      },
			{
				title: 'TV Series',
				slug: 'TV',
			},
			{
				title: 'Trailers',
				slug: 'TRAILERS',
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

const mapStateToProps = (state, ownProps) => ({ filter: state.filtersReducer.filter });

const mapDispatchToProps = dispatch => {
	return {
			onSetFilter: (filter) => dispatch(setFilter(filter)),
			onUpdateMovies: () => dispatch(getMovies())
	}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
