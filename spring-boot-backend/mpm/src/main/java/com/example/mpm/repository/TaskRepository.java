package com.example.mpm.repository;





import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mpm.model.Task;

public interface TaskRepository extends JpaRepository<Task, String> {


	
	
}
