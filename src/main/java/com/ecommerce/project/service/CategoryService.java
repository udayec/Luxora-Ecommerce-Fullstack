package com.ecommerce.project.service;

import com.ecommerce.project.model.Category;
import com.ecommerce.project.payLoad.CategoryDTO;
import com.ecommerce.project.payLoad.CategoryResponse;

import java.util.List;

public interface CategoryService {

    /*List<Category>*/ CategoryResponse getAllCategories(Integer pageNumber, Integer pageSize , String sortBy, String sortOrder); //changed for dto

    CategoryDTO createCategory(CategoryDTO category);

    CategoryDTO deleteCategory(Long categoryId);

    CategoryDTO updateCategory(CategoryDTO categoryDTO, Long categoryId);
}
