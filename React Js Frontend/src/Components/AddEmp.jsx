import React, { Component } from 'react';
import userservice from './userservice';

class AddEmp extends Component {
    constructor(props){
        super(props);
        this.state={
            firstname: "",
            lastname: "",
            email: ""
        }
    }
    firstname = (e) => {
        this.setState({
            firstname: e.target.value
        })
    }

    save = (e) => {
        
        let employee= {firstname: this.state.firstname ,lastname: this.state.lastname,email: this.state.email}
        userservice.Addemp(employee)
        this.props.history.push("/")
    }
    lastname = (e) => {
        this.setState({lastname: e.target.value})
    }
    cancel = () => {
        this.props.history.push("/employee")
    }
    render() {
        return (
         <div>
            <div className="row">
                  <div className="container">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> Add Employee </h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group" >
                                        <label> FirstName </label>
                                        <input placeholder="FirstName" onChange={this.firstname} className="form-control" /> 
                                    </div>
                                    <div className="form-group" >
                                        <label> LastName </label>
                                        <input className="form-control" placeholder="Enter Your Last Name" onChange={this.lastname} />
                                    </div>
                                    <div className="form-group" >
                                        <label> Email </label>
                                        <input className="form-control" placeholder="Enter Your Email" onChange={e =>{this.setState({email: e.target.value})}} />
                                    </div>
                                    <br />
                                    <button className="btn btn-success" onClick={this.save}> Save </button>
                                    <button className="btn btn-danger" style={{marginLeft: "10px"}} onClick={this.cancel}> Cancel </button>
                                </form>
                           </div>
                    </div>
                 </div>
            </div>
        </div>
        );
    }
}

export default AddEmp;