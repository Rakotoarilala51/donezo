package com.ramaitre.backend.controller;

import com.ramaitre.backend.Service.TaskService;
import com.ramaitre.backend.entity.Project;
import com.ramaitre.backend.entity.Task;
import com.ramaitre.backend.entity.User;
import com.ramaitre.backend.repository.ProjectRepository;
import com.ramaitre.backend.repository.TaskRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("api/v1/task")
public class TaskController {
    private TaskService taskService;
    ProjectRepository projectRepository;
    @PostMapping("{id}")
    public ResponseEntity<Task> createTask(@RequestBody Task task1, @PathVariable Long id){
        Project project = projectRepository.findById(id)
                .orElseThrow(()->new RuntimeException("project not found"));
        task1.setProject(project);
        Task savedTask = taskService.createTask(task1);
        return new ResponseEntity<>(savedTask, HttpStatus.CREATED);
    }
}
