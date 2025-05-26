package com.ramaitre.backend.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public abstract class ProjectDto {
    private Long project_id;
    private String project_name;
    private String Tags;
}
