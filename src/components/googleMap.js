import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

class GoogleMap extends Component {
  static defaultProps = {
    zoom: 11
  };

  render() {
    return (
      <GoogleMapReact
        center={{ lng: this.props.lng, lat: this.props.lat }}
        defaultZoom={this.props.zoom}
      />
    );
  }
}

GoogleMap.propTypes = {
  zoom: PropTypes.number,
  lng: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired
};

export default GoogleMap;
