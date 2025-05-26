package com.ramaitre.backend.Service.impl;

import com.ramaitre.backend.Service.PrivateProjectService;
import com.ramaitre.backend.entity.PrivateProject;
import com.ramaitre.backend.repository.PrivateProjectRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class PrivateProjectServiceImpl implements PrivateProjectService {
    private PrivateProjectRepository privateProjectRepository;
    @Override
    public PrivateProject createPrivateProject(PrivateProject privateProject) {
        if(privateProjectRepository.existsByUserAndProjectName(privateProject.getUser(), privateProject.getProjectName())){
            throw new RuntimeException("Le projet existe déjà");
        }
        return privateProjectRepository.save(privateProject);
    }
}
