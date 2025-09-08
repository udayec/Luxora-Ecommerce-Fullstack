package com.ecommerce.project.controller;


import com.ecommerce.project.config.AppConstants;
import com.ecommerce.project.payLoad.CategoryDTO;
import com.ecommerce.project.payLoad.CategoryResponse;
import com.ecommerce.project.service.CategoryService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api") //we can took the common part from every mapping to make code look cleaner set url pattern to ha dole useful in teams
//earlier it eas line "/api/public/categories" now apis removed

public class CategoryController {

   // private List<Category> categories = new ArrayList<>();  //will be moved to category serviceimpl

    @Autowired
    private CategoryService categoryService;


    //we can use @autowired annotation above the property to get rid of this constructor(used)
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }


    //@GetMapping("/api/public/categories")
    //@RequestMapping(value="/public/categories",method= RequestMethod.GET)    //another use of request mapping calling get/put.. through it
    @GetMapping("/public/categories")
    public ResponseEntity<CategoryResponse> getAllCategories( @RequestParam(name="pageNumber", defaultValue = AppConstants.PAGE_NUMBER, required = false) Integer pageNumber,
                                                              @RequestParam(name="pageSize", defaultValue = AppConstants.PAGE_SIZE, required = false) Integer pageSize ,
                                                              @RequestParam(name="sortBy" , defaultValue = AppConstants.SORT_CATEGORIES_BY, required = false) String sortBy ,
                                                              @RequestParam(name="sortOrder" , defaultValue = AppConstants.SORT_DIR, required = false) String sortOrder )
    {
        CategoryResponse categoryResponse = categoryService.getAllCategories(pageNumber,pageSize, sortBy, sortOrder);   //earlier it was only return  categoryService.getAllCategories();
        return new ResponseEntity<>(categoryResponse , HttpStatus.OK);                                                  //but we are now changing to response entity //2 now chnah8jng to dtos
    }



    @PostMapping("/public/categories")
    public ResponseEntity<CategoryDTO> createCategory (@Valid @RequestBody CategoryDTO categoryDTO)
    {

        CategoryDTO savedCategoryDTO = categoryService.createCategory(categoryDTO);
        return new ResponseEntity<>(savedCategoryDTO,HttpStatus.CREATED);
    }

    @DeleteMapping("/admin/categories/{categoryId}")
    public ResponseEntity<CategoryDTO> deleteCategory(@PathVariable Long categoryId)  //path varivable annootattio maps the req and the parametere ion the bracket
    {
        {
            CategoryDTO deleteCategory = categoryService.deleteCategory(categoryId);
            return new ResponseEntity<>(deleteCategory, HttpStatus.OK);  //most common one
            // or return ResponseEntity.ok(status);
            // or return ResponseEntity.status(HttpStatus.OK).body(deleteCategory);
        }
//        catch(ResponseStatusException e)
//        {
//            return new ResponseEntity<>(e.getReason(),e.getStatusCode());
//        }
    }

    @PutMapping("/admin/categories/{categoryId}")
    public ResponseEntity<CategoryDTO> updateCategory(@Valid @RequestBody CategoryDTO categoryDTO, @PathVariable Long categoryId) {

        CategoryDTO savedCategoryDTO = categoryService.updateCategory(categoryDTO, categoryId);
        return new ResponseEntity<>(savedCategoryDTO, HttpStatus.OK);
    }
//        catch(ResponseStatusException e)
//        {
//            return new ResponseEntity<>(e.getReason(),e.getStatusCode());
//        }



}
