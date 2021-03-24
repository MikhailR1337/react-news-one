import React, { Component } from 'react';
import SelectFilter from './SelectFilter';
import DayPicker from './DayPickerRanged';
import { connect } from 'react-redux';

class Filters extends Component {
    render() {
        const { articles } = this.props;
        return (
            <div>
                <DayPicker />
                <SelectFilter articles={articles} />
            </div>
        )
    }
}

export default connect(({ articles }) => ({ articles }))(Filters);