import React, { Component } from 'react';
import SelectFilter from './SelectFilter';
import DayPickerRanged from './DayPickerRanged';

class Filters extends Component {
    render() {
        return (
            <div>
                <DayPickerRanged />
                <SelectFilter />
            </div>
        )
    }
}

export default Filters;