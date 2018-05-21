import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            firstName: '',
            lastName: '',
            gender: ''
        };
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleGender = this.handleGender.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleFirstNameChange(event) {
        this.setState({ firstName: event.target.value.toUpperCase() });
    }
    handleLastNameChange(event) {
        this.setState({ lastName: event.target.value.toUpperCase() });
    }
    handleGender(event) {
        this.setState({ gender: event.target.value });
    }
    handleSubmit(event) {
        if (this.state.firstName && this.state.lastName) {
            alert('Details Submitted by you: ' + this.state.firstName + ' ' + this.state.lastName + " Gender:" + this.state.gender);
        }
        event.preventDefault();
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2 style={{ paddingLeft: 93 + 'em', fontSize: 13 + 'px' }}>{this.state.days[this.state.date.getDay()] + ',' + this.state.date.getDate() + '-' + ((this.state.date.getMonth() + 1 < 10) ? ('0' + (this.state.date.getMonth() + 1)) : (this.state.date.getMonth() + 1)) + '-' + this.state.date.getFullYear()}</h2>
                <h2 style={{ paddingLeft: 95 + 'em', fontSize: 13 + 'px' }} >{this.state.date.toLocaleTimeString()}.</h2>
                <center>
                    <div style={{ width: 250 + 'px' }} className="form-control">
                        <form onSubmit={this.handleSubmit}>
                            <label>First Name:</label>
                            <input placeholder="Enter first name" className="form-control" type="text" value={this.state.firstName} onChange={this.handleFirstNameChange} required /><br />
                            <label>Last Name:</label>
                            <input placeholder="Enter last name" className="form-control" type="text" value={this.state.lastName} onChange={this.handleLastNameChange} required /><br />
                            <label style={{ paddingRight: 17 + 'px' }}>Gender:</label>
                            <select className="form-control" value={this.state.gender} onChange={this.handleGender} >
                                <option value="" disabled defaultValue hidden>Choose a Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Transgender">Transgender</option>
                            </select>
                            <div style={{ paddingTop: 2 + 'em', textAlign:"right" }}>
                                <input type="submit" value="Submit" />
                            </div >
                        </form>
                    </div>
                </center>

            </div>
        );
    }
}

export default Form;