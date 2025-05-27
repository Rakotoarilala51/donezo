package com.ramaitre.backend.Service.impl;

import com.ramaitre.backend.Service.PrivateProjectService;
import com.ramaitre.backend.entity.PrivateProject;
import com.ramaitre.backend.entity.User;
import com.ramaitre.backend.repository.PrivateProjectRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    @Override
    public List<PrivateProject> getPrivateProject(User user) {
        return privateProjectRepository.findAllByUser(user);
    }

    @Override
    public PrivateProject getPrivateProjectById(Long id) {
        Optional<PrivateProject> optional = privateProjectRepository.findById(id);
        return optional.get();
    }

    @Override
    public PrivateProject getPrivateProjectByName(String projectName) {
        return privateProjectRepository.findByProjectName(projectName);
    }


}
