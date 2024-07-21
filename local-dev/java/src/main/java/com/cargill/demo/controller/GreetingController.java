package com.cargill.demo.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cargill.demo.model.Greeting;
import com.cargill.demo.repository.GreetingRepository;

@RestController
@RequestMapping("/greeting")
public class GreetingController {

    GreetingRepository greetingRepository;

    @Autowired
    public GreetingController(GreetingRepository greetingRepository) {
        this.greetingRepository = greetingRepository;
    }

    @GetMapping("/{name}")
    public ResponseEntity<Greeting> namedGreeting(@PathVariable String name) {
        return greetingResponse(greetingRepository.findByName(name));
    }

    @GetMapping
    public ResponseEntity<Greeting> greeting() throws IOException {
        // List<Greeting> greetingList = greetingRepository.findAll();
        // int random = (int)(Math.random() * greetingList.size());
        // return greetingResponse(greetingList.get(random));
        Greeting greeting = new Greeting();
        greeting.setName("Sample Java app with database");
        return greetingResponse(greeting);
    }

    private ResponseEntity<Greeting> greetingResponse(Greeting greeting) {
        if (null != greeting) {
            return new ResponseEntity<Greeting>(greeting, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
