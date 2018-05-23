import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            fields: {},
            errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["firstName"]) {
            formIsValid = false;
            errors["firstName"] = "Please enter first name.";
        }
        if (!fields["lastName"]) {
            formIsValid = false;
            errors["lastName"] = "Please enter last name.";
        }
        if (typeof fields["firstName"] !== "undefined") {
            if (!fields["firstName"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["firstName"] = "Only letters";
            }
        }
        if (typeof fields["lastName"] !== "undefined") {
            if (!fields["lastName"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["lastName"] = "Only letters";
            }
        }
        if (!fields["gender"]) {
            formIsValid = false;
            errors["gender"] = "Please select gender.";
        }
        this.setState({ errors: errors });
        return formIsValid;
    }
    handleSubmit(event) {
        if (this.handleValidation()) {
            alert('Details Submitted by you: ' + this.state.fields["firstName"] + ' ' + this.state.fields["lastName"] + " Gender:" + this.state.fields["gender"]);
        } else {
            alert("Form has errors.")
        }
        event.preventDefault();
    }
    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
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
                            <input placeholder="Enter first name" className="form-control" type="text" onChange={this.handleChange.bind(this, "firstName")} value={this.state.fields["firstName"]} /><br />
                            <span style={{ color: "red" }}>{this.state.errors["firstName"]}</span>
                            <br />
                            <label>Last Name:</label>
                            <input placeholder="Enter last name" className="form-control" type="text" onChange={this.handleChange.bind(this, "lastName")} value={this.state.fields["lastName"]} /><br />
                            <span style={{ color: "red" }}>{this.state.errors["lastName"]}</span>
                            <br />
                            <label style={{ paddingRight: 17 + 'px' }}>Gender:</label>
                            <select className="form-control" value={this.state.fields["gender"]} onChange={this.handleChange.bind(this, "gender")} >
                                <option value="" disabled defaultValue hidden>Choose a Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Transgender">Transgender</option>
                            </select>
                            <span style={{ color: "red" }}>{this.state.errors["gender"]}</span>
                            <br />
                            <div style={{ paddingTop: 2 + 'em', textAlign: "right" }}>
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