package com.ramaitre.backend.repository;

import com.ramaitre.backend.entity.PrivateProject;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PrivateProjectRepository extends JpaRepository<PrivateProject, Long> {
}
