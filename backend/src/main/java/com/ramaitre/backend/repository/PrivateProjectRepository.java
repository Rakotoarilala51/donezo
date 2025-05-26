package com.ramaitre.backend.repository;

import com.ramaitre.backend.entity.PrivateProject;
import com.ramaitre.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PrivateProjectRepository extends JpaRepository<PrivateProject, Long> {
    boolean existsByUserAndProjectName(User user, String project_name);
}
