import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as style from './style';

class Home extends Component {
    static propTypes = {
        location: PropTypes.shape({
            status: PropTypes.string.isRequired,
            data: PropTypes.string.isRequired
        }),
        children: PropTypes.object.isRequired
    };
    render() {
        const {
            location,
            children
        } = this.props;
        return (
            <div>
                <h1 className={style.title}>Todo List</h1>
                <small className={style.subTitle}>
                    { location.status === 'default' && '[YOUR_LOCATION]' }
                    { location.status === 'loading' && 'fetching...' }
                    { location.status === 'loaded' && location.data }
                    { location.status === 'failed' && 'fetching... failed' }
                </small>
                {children}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        location: state.location
    }
};

export default connect(mapStateToProps)(Home);
