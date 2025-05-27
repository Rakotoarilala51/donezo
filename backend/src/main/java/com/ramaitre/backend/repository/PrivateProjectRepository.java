package com.ramaitre.backend.repository;

import com.ramaitre.backend.entity.PrivateProject;
import com.ramaitre.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PrivateProjectRepository extends JpaRepository<PrivateProject, Long> {
    boolean existsByUserAndProjectName(User user, String project_name);
    List<PrivateProject> findAllByUser(User user);
    PrivateProject findByProjectName(String project_name);
}
