import React, { Component } from 'react';
import userservice from './userservice';
import Userserv from './userservice'
class ListEmployee extends Component {
    constructor(props){
        super(props);
        this.state={
            employees: []
        }
    }
    componentDidMount(){
        Userserv.getemp().then((res) => {
            this.setState({employees: res.data})
        })
    }
    addemp = () => {
        this.props.history.push("/add-emp")
    }
    newemp = (id) => {
        this.props.history.push(`/updateemp/${id}`)
    }
    delete = (id) => {

            userservice.deletemp(id).then(res => {
                this.props.history.push("/employee")
            })
        
    }
    handlesubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <h3 className='header'> List Employee </h3>
                    <button className="btn btn-primary" onClick={this.addemp}> Add Employee </button>
                <div className="row">
                    <table onSubmit={this.handlesubmit} className="table table-striped table-bordered">
                        <thead>
                            <tr key="words">
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Email</th>
                                <th>Id</th>
                                <th> Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employees.map(emp => (
                               <tr key={emp.id}>
                                   <td>{emp.firstname}</td>
                                   <td>{emp.lastname}</td>
                                   <td>{emp.email}</td>
                                   <td><button className="btn btn-info" onClick={() => this.newemp(emp.id)}> Update </button> </td>
                                   <td> <button type="submit" className="btn btn-danger" style={{margin: "10px"}} onClick={() => this.delete(emp.id)}> Delete </button> </td>

                               </tr> 
                            ))}
                        </tbody>
                    </table>
                </div>
                </div>
        );
    }
}

export default ListEmployee;