package com.example.mpm.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.mpm.model.Task;
import com.example.mpm.repository.TaskRepository;
import com.example.mpm.service.TaskService;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin

//@CrossOrigin(origins = "http://localhost:3000") 
public class TaskController {

    @Autowired
    private TaskService taskService;

    // Test endpoint
    @GetMapping("/hello")
    public String hello() {
        return "Hello";
    }

    // Get all tasks
    @GetMapping
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    // Get a task by ID
    @GetMapping("/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable("id") String id) {
        Optional<Task> task = taskService.getTaskById(id);
        if (task.isPresent()) {
            return ResponseEntity.ok(task.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Create a new task
    @PostMapping
    public ResponseEntity<Task> createTask(@RequestBody Task task) {
        Task savedTask = taskService.createTask(task);
        return ResponseEntity.ok(savedTask);
    }
    
 

    // Delete a task by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable("id") String id) {
        taskService.deleteTask(id);
        return ResponseEntity.noContent().build(); // 204 No Content
    }

    // Update a task by ID
    @PutMapping("/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable("id") String id, @RequestBody Task task) {
        Task updatedTask = taskService.updateTask(id, task);
        if (updatedTask != null) {
            return ResponseEntity.ok(updatedTask);
        } else {
            return ResponseEntity.notFound().build(); // 404 Not Found
        }
    }
}
