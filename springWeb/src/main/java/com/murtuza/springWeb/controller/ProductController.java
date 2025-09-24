package com.murtuza.springWeb.controller;

import com.murtuza.springWeb.model.Product;
import com.murtuza.springWeb.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    ProductService service;


    @RequestMapping("/products")
    public List<Product> product(){
        return service.getproduct();
    }

    @GetMapping("/products/{id}")
    public Product getId(@PathVariable int id){
        return service.getId(id);
    }

    @PostMapping("/products/")
    public void addProduct(@RequestBody Product prod){
        System.out.println(prod);
        service.addProduct(prod);
    }

    @PutMapping("/products/")
    public void updateProduct(@RequestBody Product prod){
        System.out.println("check");
        service.updateProduct(prod);
    }

    @DeleteMapping("/products/{id}")
    public void deleteProd(@PathVariable int id){
        System.out.println("check delete");
        service.deleteProd(id);
    }
}
