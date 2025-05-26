package com.ramaitre.backend.Service.impl;

import com.ramaitre.backend.Service.PrivateProjectService;
import com.ramaitre.backend.entity.PrivateProject;
import com.ramaitre.backend.repository.PrivateProjectRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Service
@AllArgsConstructor
public class PrivateProjectServiceImpl implements PrivateProjectService {
    private PrivateProjectRepository privateProjectRepository;
    @Override
    public PrivateProject createPrivateProject(PrivateProject privateProject) {
        return privateProjectRepository.save(privateProject);
    }
}
