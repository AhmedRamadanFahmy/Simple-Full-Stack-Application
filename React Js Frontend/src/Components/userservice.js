import ax from 'axios';

import React, { Component } from 'react';

let url = "http://localhost:7070/api/v1/getemp"
const url_add = "http://localhost:7070/api/v1/addemp"
const url_id = "http://localhost:7070/api/v1/empid"
const url_put = "http://localhost:7070/api/v1/update"
const delete_url = "http://localhost:7070/api/v1/delete"

class userservice {
    
    getemp(){
        return(
        ax.get(url))
    }    
    Addemp(employee){
        return(
            ax.post(url_add,employee)
        )
    }
    getempbyid(employeeid){
        return ax.get(url_id+'/'+employeeid);
    }
    updateemployee(employee,employeeid){
        return ax.put(url_put + '/' + employeeid,employee)
    }
    deletemp(employeeid){
        return ax.delete(delete_url+'/'+employeeid)
    }
    }


export default new userservice();