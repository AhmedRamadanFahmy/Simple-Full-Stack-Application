package com.Employee.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Employee.Model.Employee;

@Repository
public interface RepositoryEmployee extends JpaRepository<Employee, Long> {

}
