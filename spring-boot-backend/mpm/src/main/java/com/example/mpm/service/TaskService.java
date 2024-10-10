package com.example.mpm.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mpm.model.Task;
import com.example.mpm.repository.TaskRepository;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    // Get all tasks
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    // Get a task by ID
    public Optional<Task> getTaskById(String id) {
        return taskRepository.findById(id);
    }

    // Create a new task
    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    // Delete a task by ID
    public void deleteTask(String id) {
        taskRepository.deleteById(id);
    }

    // Update a task by ID
    public Task updateTask(String id, Task task) {
        if (taskRepository.existsById(id)) {
            task.setId(id); // Set the correct ID
            return taskRepository.save(task);
        }
        return null;
    }

	
}