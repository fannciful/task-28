import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {  
        super(props);

        this.state = {
            isOk: true
        };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({
            isOk: false
        });
    }

    render() {
        if (!this.state.isOk) {
            return <span>Ooops...</span>;
        }

        return this.props.children;
    }
}
