import React from 'react';
class Change extends React.Component{
    constructor(props) {
        console.log('Change',props);
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.actions.buttonClick();
    }

    render() {
        return (
            <button onClick={this.handleClick} >按钮</button>
        );
    }
}
export default Change