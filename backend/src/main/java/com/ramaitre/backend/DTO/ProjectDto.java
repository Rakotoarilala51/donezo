package com.ramaitre.backend.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public abstract class ProjectDto {
    private Long projectId;
    private String projectName;
    private String projectTag;
    private String projectDescription;
}
