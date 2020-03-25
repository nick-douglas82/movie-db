import React from 'react';
import { connect } from 'react-redux';
import { getTv } from '../store/actions/tv';
import Listing from '../components/movie/Listing';

class TV extends React.Component {
  componentDidMount() {
    this.props.getTv();
  }

  render() {
    if (this.props.tv) {
      return (
        <div className="wrapper">
          <div className="listing">
            <Listing items={this.props.tv}></Listing>
          </div>
        </div>
      );
    } else {
      return (
        <div>Nothing</div>
      )
    }
  }
}

const mapStateToProps = state => ({ tv: state.tvReducer.tv });
const mapDispatchToProps = { getTv };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TV);
