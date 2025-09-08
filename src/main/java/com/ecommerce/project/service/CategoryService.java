package com.ecommerce.project.service;

import com.ecommerce.project.payLoad.CategoryDTO;
import com.ecommerce.project.payLoad.CategoryResponse;

public interface CategoryService {

    /*List<Category>*/ CategoryResponse getAllCategories(Integer pageNumber, Integer pageSize , String sortBy, String sortOrder); //changed for dto

    CategoryDTO createCategory(CategoryDTO categoryDTO);

    CategoryDTO deleteCategory(Long categoryId);

    CategoryDTO updateCategory(CategoryDTO categoryDTO, Long categoryId);
}
