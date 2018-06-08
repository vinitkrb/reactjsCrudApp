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
                errors["firstName"] = "first name must contains only letters.";
            }
        }
        if (typeof fields["lastName"] !== "undefined") {
            if (!fields["lastName"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["lastName"] = "last name must contains only letters.";
            }
        }
        if (typeof fields["contactNo"] !== "undefined") {
            if (!fields["contactNo"].match(/^(\+\d{1,3}[- ]?)?\d{10}$/)) {
                formIsValid = false;
                errors["contactNo"] = "please enter correct mobile number.";
            }
        }
        if (!fields["contactNo"]) {
            formIsValid = false;
            errors["contactNo"] = "Please enter contact number.";
        }
        
        if (!fields["gender"]) {
            formIsValid = false;
            errors["gender"] = "Please select gender.";
        }
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "email field cannot be empty";
        }

        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }
        this.setState({ errors: errors });
        return formIsValid;
    }
    handleSubmit(event) {
        if (this.handleValidation()) {
            alert("Details Submitted by you ,please check console for payload.");
            console.log(this.state.fields);
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
                    <div style={{ width: 500 + 'px' }} className="form-control">
                        <form name="contactform" onSubmit={this.handleSubmit}>
                        <fieldset>
                            <label>First Name: <span style={{color:"red"}}>😂*</span></label>
                            <input placeholder="Enter first name" className="form-control" type="text" onChange={this.handleChange.bind(this, "firstName")} value={this.state.fields["firstName"]} /><br />
                            <span style={{ color: "red" }}>{this.state.errors["firstName"]}</span>
                            <br />
                            <label>Last Name:<span style={{color:"red"}}>😂*</span></label>
                            <input placeholder="Enter last name" className="form-control" type="text" onChange={this.handleChange.bind(this, "lastName")} value={this.state.fields["lastName"]} /><br />
                            <span style={{ color: "red" }}>{this.state.errors["lastName"]}</span>
                            <br />
                            <label>Email:<span style={{color:"red"}}>😂*</span></label>
                            <input placeholder="Enter email" className="form-control" type="email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} /><br />
                            <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                            <br />  
                            <label>Contact:<span style={{color:"red"}}>😂*</span></label>
                            <input placeholder="Enter contact number" className="form-control" type="number" onChange={this.handleChange.bind(this, "contactNo")} value={this.state.fields["contactNo"]} /><br />
                            <span style={{ color: "red" }}>{this.state.errors["contactNo"]}</span>
                            <br />
                            <label>Gender:<span style={{color:"red"}}>😂*</span></label>
                            <select className="form-control" value={this.state.fields["gender"]} onChange={this.handleChange.bind(this, "gender")} >
                                <option value="" hidden>Choose a Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Transgender">Transgender</option>
                            </select>
                            <span style={{ color: "red" }}>{this.state.errors["gender"]}</span>
                            <br />
                            <div style={{ paddingTop: 2 + 'em', textAlign: "right" }}>
                                <input type="submit" className="btn btn-success" value="Submit" />
                            </div >
                            </fieldset>
                        </form>
                    </div>
                </center>
            </div>
        );
    }
}

export default Form;