package com.ramaitre.backend.controller;

import com.ramaitre.backend.Service.PrivateProjectService;
import com.ramaitre.backend.Service.UserService;
import com.ramaitre.backend.entity.PrivateProject;
import com.ramaitre.backend.entity.User;
import com.ramaitre.backend.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    //get all private project
    @GetMapping
    public ResponseEntity<List<PrivateProject>> getPrivateProject(){
        User user = userService.getConnectedUser();
        List<PrivateProject> privateProjects=privateProjectService.getPrivateProject(user);
        return new ResponseEntity<>(privateProjects, HttpStatus.OK);
    }
    //get one private project
    @GetMapping("{id}")
    public ResponseEntity<PrivateProject> getPrivateProjectById(@PathVariable Long id){
        PrivateProject project = privateProjectService.getPrivateProjectById(id);
        return new ResponseEntity<>(project, HttpStatus.OK);
    }
    //get one private project by name
    @GetMapping("/name/{name}")
    public ResponseEntity<PrivateProject> getPrivateProjectByName(@PathVariable String name){
        PrivateProject project = privateProjectService.getPrivateProjectByName(name);
        return new ResponseEntity<>(project, HttpStatus.OK);
    }
    //update a private project
    @PutMapping
    public ResponseEntity<PrivateProject> setPrivateProject(@RequestBody PrivateProject project){
        PrivateProject privateProject = privateProjectService.setPrivateProject(project);
        return new ResponseEntity<>(privateProject, HttpStatus.OK);
    }
    //Delete a private project
    @DeleteMapping
    public ResponseEntity<String> deletPrivateProject(@RequestBody PrivateProject project){
        privateProjectService.deletePrivateProject(project);
        return new ResponseEntity<>("Deleted successfully", HttpStatus.OK);
    }
}
