import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ArticlesChart extends Component {
    static propTypes = {

    }
    componentWillReceiveProps() {
        //d3 works with this.refs.chart
    }

    componentDidMount() {
        //update chart for new artcile
    }

    render() {
        return(
            <div ref='chart' />
        )
    }
    
    componentWillUnmount() {
        //do some cleanup
    }
}

export default ArticlesChart;