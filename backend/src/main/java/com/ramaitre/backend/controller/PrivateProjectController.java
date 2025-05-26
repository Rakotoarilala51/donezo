package com.ramaitre.backend.controller;

import com.ramaitre.backend.Service.PrivateProjectService;
import com.ramaitre.backend.Service.UserService;
import com.ramaitre.backend.entity.PrivateProject;
import com.ramaitre.backend.entity.User;
import com.ramaitre.backend.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("api/v1/private-project")
public class PrivateProjectController {

    private PrivateProjectService privateProjectService;
    private UserRepository userRepository;
    private UserService userService;
    //create private project
    @PostMapping
    public ResponseEntity<PrivateProject> createPrivateProject(@RequestBody PrivateProject privateProject){
        User user = userService.getConnectedUser();
        privateProject.setUser(user);
        PrivateProject savedPrivateProject=privateProjectService.createPrivateProject(privateProject);
        return new ResponseEntity<>(savedPrivateProject, HttpStatus.CREATED);
    }
}
