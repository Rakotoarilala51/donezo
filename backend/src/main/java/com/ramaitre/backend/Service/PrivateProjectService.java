package com.ramaitre.backend.Service;

import com.ramaitre.backend.entity.PrivateProject;
import com.ramaitre.backend.entity.User;

import java.util.List;

public interface PrivateProjectService {
    PrivateProject createPrivateProject(PrivateProject privateProject);
    List<PrivateProject> getPrivateProject(User user);
    PrivateProject getPrivateProjectById(Long id);
    PrivateProject getPrivateProjectByName(String projectName);
}
