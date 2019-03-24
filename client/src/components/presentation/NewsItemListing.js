import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewsItemListing extends Component {
    render() {
        return (
            <div>
                <b>{this.props.title}</b>
                <p>{this.props.teaser}</p>
            </div>
        )
    }
}

NewsItemListing.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    teaser: PropTypes.string.isRequired
};

export default NewsItemListing;