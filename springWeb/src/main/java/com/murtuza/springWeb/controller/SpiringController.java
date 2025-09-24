package com.murtuza.springWeb.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SpiringController {

    @RequestMapping("/")
    public String http(){
        System.out.println("ass");
        return "map is working on the server";
    }
}
