package com.ramaitre.backend.Service.impl;

import com.ramaitre.backend.Service.TaskService;
import com.ramaitre.backend.entity.Task;
import com.ramaitre.backend.repository.TaskRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class TaskServiceImpl implements TaskService {
    private TaskRepository taskRepository;
    @Override
    public Task createTask(Task task) {
        return taskRepository.save(task);
    }
}
