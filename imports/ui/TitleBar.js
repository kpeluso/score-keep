import React from 'react';
import PropTypes from 'prop-types';

// my first React component:
export default class TitleBar extends React.Component {
  renderSubtitle() {
    if (this.props.subTitle) {
      return (
        <h3 className="title-bar__subtitle">
          {this.props.subTitle}
        </h3>
      );
    }
  }
  render() {
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{this.props.title}</h1>
          {this.renderSubtitle()}
        </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
};

TitleBar.defaultProps = {
  title: 'Default title',
};

