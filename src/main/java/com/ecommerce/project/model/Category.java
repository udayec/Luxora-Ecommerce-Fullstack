package com.ecommerce.project.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity(name= "categories")   //this particular class is now an entity we can change the table name in database that's optional
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Category {
    @Id                          // we have declared at least one primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long categoryId;

    @NotBlank(message="cant be blank")
    @Size(min = 5, message= "Category Must Have At-least five Characters")
    private String categoryName;

    @OneToMany(mappedBy = "category" , cascade = CascadeType.ALL)
    private List<Product> products;
}


//GOT RID OF ALL GETTER AND SETTER WITH THIS LOMBOK ANNOTATIONS

//    public  Category()
//    {}
//
//    public String getCategoryName() {
//        return categoryName;
//    }
//
//    public void setCategoryName(String categoryName) {
//        this.categoryName = categoryName;
//    }
//
//    public long getCategoryId() {
//        return categoryId;
//    }
//
//    public void setCategoryId(long categoryId) {
//        this.categoryId = categoryId;
//    }
//
//    public Category(long categoryId, String categoryName) {
//        this.categoryId = categoryId;
//        this.categoryName = categoryName;



