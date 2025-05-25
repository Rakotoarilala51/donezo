package com.ramaitre.backend.Demo;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/demo-controller")
@RequiredArgsConstructor
public class demo {
    @GetMapping("")
    public ResponseEntity<String> SayHello(){
        return ResponseEntity.ok("Hello world");
    }
}
