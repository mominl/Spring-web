package com.murtuza.springWeb.service;

import com.murtuza.springWeb.model.Product;
import com.murtuza.springWeb.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;



@Service
public class  ProductService {

    private ProductRepo repo;

    public ProductService(ProductRepo repo) {
        this.repo = repo;
    }

    public List<Product> getAllProducts() {
        return repo.findAll();
    }

    public Product getProducts(int id) {
        return repo.findById(id).orElse(new Product());
    }


    public Product addProduct(Product product, MultipartFile imageFile)
        throws IOException {
            product.setImageName(imageFile.getOriginalFilename());
            product.setImageName(imageFile.getOriginalFilename());
            product.setImageType(imageFile.getContentType());
            product.setImageDate(imageFile.getBytes());


            return repo.save(product);
        }
    }
//    @Autowired
//    ProductRepo repo;

//    //convert immutable into the mutable becouse we are performing the post (add the products operations)
//    List<Product> products = new ArrayList<>(Arrays.asList(new Product(101,"phone", 20000),
//            new Product(102,"laptop",2003)));
//
//
//    public List<Product> getproduct(){
//            return repo.findAll();
//    }
//
//
//    public Product getId(int id){
//        return repo.findById(id).orElse(new Product());
//    }
//
//
//
//    public void addProduct(Product prod){
//        repo.save(prod);
//    }
//
//
//
//    public void updateProduct(Product prod) {
//        repo.save(prod);
//    }
////        int index = 0;
////        for (int i = 0; i<products.size()-1; i++){
////            if(products.get(i).getId() == prod.getId()){
////                index  = i;
////            }
////        }
////        products.set(index,prod);
////    }
//
//    public void deleteProd(int id) {
//
//        repo.deleteById(id);
//    }
////        int index = 0;
////        for (int i = 0; i<products.size(); i++) {
////            if (products.get(i).getId() == id)
////                index = i;
////        }
////        products.remove(index);
////
////    }
//}
