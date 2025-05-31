package com.ramaitre.backend.controller;

import com.ramaitre.backend.Service.TaskService;
import com.ramaitre.backend.entity.Task;
import com.ramaitre.backend.entity.User;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("api/v1/task")
public class TaskController {
    private Task task;
    private TaskService taskService;

    public ResponseEntity<Task> createTask(@RequestBody Task task1, @PathVariable Long projectId){
        return null;
    }
}
