import React, { Component } from 'react';
import Select from 'react-select';

class SelectFilter extends Component {
    render() {
        const { articles } = this.props;
        const options = articles.map((article) => ({
            label: article.title,
            value: article.id,
        }))
        return (
            <div>
                <Select options={options} isMulti />
            </div>
        )
    }
}

export default SelectFilter;