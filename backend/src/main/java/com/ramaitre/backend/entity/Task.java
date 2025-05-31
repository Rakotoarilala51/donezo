package com.ramaitre.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long taskId;
    private String taskName;
    private String description;
    private TaskStatus taskStatus;
    private TaskPriority taskPriority;
    @ManyToOne
    @JoinColumn(name = "projectId")
    private Project project;
}
