package com.cargill.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cargill.demo.model.Greeting;

public interface GreetingRepository extends JpaRepository<Greeting, Integer> {
    Greeting findByName(String eid);
}