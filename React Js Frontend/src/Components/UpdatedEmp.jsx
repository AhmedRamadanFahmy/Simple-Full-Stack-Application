import React, { Component } from 'react';
import userservice from './userservice';

class UpdatedEmp extends Component {
    constructor(props){
        super(props);
        this.state={
            id: this.props.match.params.id,
            firstname: "",
            lastname: "",
            email: ""
        }
    }
    componentDidMount(){
        userservice.getempbyid(this.state.id).then(res => {
            let employee = res.data;
            console.log(employee)
            this.setState({
                firstname: employee.firstname,
                lastname: employee.lastname,
                email: employee.email
            })
        })
    }
    firstname = (e) => {
        this.setState({
            firstname: e.target.value
        })
    }

    
    lastname = (e) => {
        this.setState({lastname: e.target.value})
    }
    cancel = () => {
        this.props.history.push("/employee")
    }
    update = () => {
        let employee = {firstname: this.state.firstname,lastname: this.state.lastname,email:this.state.email}
        userservice.updateemployee(employee,this.state.id)
        this.props.history.push("/")
        

    }
    render() {
        return (
         <div>
            <div className="row">
                  <div className="container">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> Update Employee </h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group" >
                                        <label> FirstName </label>
                                        <input value={this.state.firstname} placeholder="FirstName" onChange={this.firstname} className="form-control" /> 
                                    </div>
                                    <div className="form-group" >
                                        <label> LastName </label>
                                        <input value={this.state.lastname} className="form-control" placeholder="Enter Your Last Name" onChange={this.lastname} />
                                    </div>
                                    <div className="form-group" >
                                        <label> Email </label>
                                        <input value={this.state.email} className="form-control" placeholder="Enter Your Email" onChange={e =>{this.setState({email: e.target.value})}} />
                                    </div>
                                    <br />
                                    <button className="btn btn-success" onClick={this.update}> update </button>
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
export default UpdatedEmp;