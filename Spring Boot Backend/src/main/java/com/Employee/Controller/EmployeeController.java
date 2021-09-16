package com.Employee.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Employee.Exception.ResourceNotFound;
import com.Employee.Model.Employee;
import com.Employee.Repository.RepositoryEmployee;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:3001")
public class EmployeeController {
	
	@Autowired
	RepositoryEmployee emprepo;
	
	@GetMapping("/getemp")
	public List<Employee> getemp(){
		return emprepo.findAll();
	}
	
	@PostMapping("/addemp")
	public Employee addemp(@RequestBody Employee employee) {
		return emprepo.save(employee);
	}
	@GetMapping("/empid/{id}")
	public ResponseEntity<Employee> getemp(@PathVariable Long id) {
		Employee employee = emprepo.findById(id).orElseThrow(() -> new ResourceNotFound("employee not found with id: "+id));
		
		return ResponseEntity.ok(employee);
				
		
	}
	@PutMapping("/update/{id}")
	public ResponseEntity<Employee> updateemp(@PathVariable Long id,@RequestBody Employee detailedemp){
		Employee employee = emprepo.findById(id).orElseThrow(() -> new ResourceNotFound("employee not found with id: "+id));
		employee.setFirstname(detailedemp.getFirstname());
		employee.setLastname(detailedemp.getLastname());
		employee.setEmail(detailedemp.getEmail());
		
		Employee updatedemp = emprepo.save(employee);
		return ResponseEntity.ok(updatedemp);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Map<String,Boolean>> delete(@PathVariable Long id){
		Employee employee = emprepo.findById(id).orElseThrow(() -> new ResourceNotFound("Employee not Found" + id));
		emprepo.delete(employee);
		Map<String,Boolean> response = new HashMap<>();
		response.put("Deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}
}
