import React from 'react';

export default class Checkbox extends React.Component {
    constructor(props){
        super(props)
        this.state={check: true};

        this.Toggle_checkbox = this.Toggle_checkbox.bind(this);
    }
    Toggle_checkbox = () => {
        this.setState({check: !this.state.check});
    }
}