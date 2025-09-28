package com.murtuza.springWeb.controller;

import com.murtuza.springWeb.model.Product;
import com.murtuza.springWeb.service.ProductService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;

    }


    @RequestMapping("/")
    public String greet() {
        return "hi there";
    }
    @GetMapping("/Products")
    public List<Product> getAllProducts() {
        System.out.println("working a getallproducts");
        return service.getAllProducts();
    }


    @GetMapping("/Products/{id}")
    public Product getProducts(@PathVariable int id) {
        System.out.println("working a getproducts");
        return service.getProducts(id);
    }




}