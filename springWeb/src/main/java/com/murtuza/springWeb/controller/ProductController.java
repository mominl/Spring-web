package com.murtuza.springWeb.controller;

import com.murtuza.springWeb.model.Product;
import com.murtuza.springWeb.service.ProductService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    
//    RestApi start
    @RequestMapping("/")
    public String greet() {
        return "hi there";
    }

    @GetMapping("/Products")
    public List<Product> getAllProducts() {
        System.out.println("working on getAllProducts");
        return service.getAllProducts();
    }

    @GetMapping("/Products/{id}")
    public Product getProducts(@PathVariable int id) {
        System.out.println("working on getProducts");
        return service.getProducts(id);
    }

    @PostMapping("/Product")
    public ResponseEntity<?> addProduct(
            @RequestPart Product product,
            @RequestPart MultipartFile imageFile) {
        System.out.println("working on postMapping");

        try {
            Product product1 = service.addProduct(product, imageFile);
            return new ResponseEntity<>(product1, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


   @GetMapping("/product/{id}/image")
    public product getimage(@PathVariable  )
}
