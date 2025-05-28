package com.ramaitre.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class PrivateProject extends Project{
    @ManyToOne
    @JoinColumn(name="user_id")
    @JsonIgnore
    private User user;
}
