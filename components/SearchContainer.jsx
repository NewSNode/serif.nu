import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import Search from './Search.jsx';

const style = {
  searchGroup: {
    margin: 'auto',
    width: 300
  },
  icon: {
    verticalAlign: 'middle'
  }
};

export default class SearchContainer extends React.Component {
  render() {
    return (
      <div style={style.searchGroup}>
        <FontIcon style={style.icon} className="material-icons">search</FontIcon>
        <Search searchdata={this.props.searchdata} />
      </div>
    );
  }
}

SearchContainer.propTypes = {
    searchdata: React.PropTypes.array
};
