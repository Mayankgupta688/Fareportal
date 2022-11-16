import React from "react";

export default class TimerClassComponent extends React.Component {
    
    getTime() {
        return `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`  
    }

    constructor(props) {
        super(props);
        this.state = {
            currentTime: this.getTime(),
            intervalValue: +this.props.initialCount
        }
    }
    
    componentDidUpdate() {
        debugger;
    }
    
    shouldComponentUpdate(newProps, newState) {
        if (newState.intervalValue % 3 == 0) {
            return false;
        }
        return true;
    }
    
    createInterval() {
        setInterval(() => {
            this.setState({
                currentTime: this.getTime()
            })
        }, 1000)
    }
    
    asyncUpdateInterval = () => {
        console.time("Mayank")
        this.setState({
            intervalValue: this.state.intervalValue + 1
        });
        
        this.setState({
            intervalValue: this.state.intervalValue + 1
        });
    }
    
    syncUpdateInterval = () => {
        this.setState({
            intervalValue: this.state.intervalValue + 1
        }, () => {
            setTimeout(() => {
                if (this.state.intervalValue < 6) {
                    this.syncUpdateInterval();
                }
            }, 1000)
            
        });
    }
      
    render() {
        return (
            <div>
                <h1>Time for {this.props.name} Class {this.state.currentTime}</h1>
                <h1>Interval is {this.state.intervalValue}</h1><hr />
                <input type="button" onClick={this.syncUpdateInterval} value="Update Interval" />
                <SubComponent intervalValue={this.state.intervalValue}></SubComponent>
            </div>
        )
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                currentTime: this.getTime()
            })
        }, 1000)
    }
}

class SubComponent extends React.Component {
    
    constructor() {
        super();
    }
    
    shouldComponentUpdate(newProps) {
        if (newProps.intervalValue % 4 == 0) {
            return false;
        }
        return true;
    }
    
    render() {
        return <h1>The value from props is {this.props.intervalValue}</h1>
    }
}
