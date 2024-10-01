package com.example.mpm.model;

//import java.sql.Date;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class Task {
	

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "start_date")
    private LocalDate startDate;

    @Column(name = "end_date")
    private LocalDate endDate;

    @Column(name = "dependencies")
    private String dependencies;

    // Default constructor
    public Task() {
        super();
    }

    // Constructor without id (since it's auto-generated)
    public Task(String name, LocalDate startDate, LocalDate endDate, String dependencies) {
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.dependencies = dependencies;
    }

    // Getters and setters
    public String getId() {
        return id;
    }

    public void setId(String id2) {
        this.id = id2;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public String getDependencies() {
        return dependencies;
    }

    public void setDependencies(String dependencies) {
        this.dependencies = dependencies;
    }

    @Override
    public String toString() {
        return "Task [id=" + id + ", name=" + name + ", startDate=" + startDate + ", endDate=" + endDate
                + ", dependencies=" + dependencies + "]";
    }
    
}

