package com.ravi.controller;

import org.springframework.web.bind.annotation.*;

@RestController
public class HomeController {

    @GetMapping //retrieving any data from database
    public String homeController(){
        return "Hello welcome back to spring with Ravindya";
    }

//    @PostMapping -> Inserting and creating new records to the database
//    @PutMapping -> Update and Edit existing data in the database
//    @DeleteMapping -> Deleting any data from our database
}
