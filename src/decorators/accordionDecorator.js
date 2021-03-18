import React, { Component as ReactComponent } from 'react';

export default (OriginalComponent) => class AccordionWrapper extends ReactComponent {
    state = {
        openItemId: null,
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleAccordeon={this.toggleAccordeon} />
    }

    toggleAccordeon = (openItemId) => () => {
        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId,
        })  
    }

/*     toggleAccordeon = (openArticleId) => () => {
        this.state.openArticleId !== openArticleId ? this.setState({ openArticleId }) : this.setState({ openArticleId: null });  
    } */

/*     toggleAccordeon = (openArticleId) => () => {
        let { openArticleId: previousCurrentId } = this.state;

        if (previousCurrentId === openArticleId) {
            this.setState({ openArticleId: null });
        } else {
            this.setState({ openArticleId });
        }
    } */
}