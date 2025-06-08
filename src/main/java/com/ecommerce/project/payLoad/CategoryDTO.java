package com.ecommerce.project.payLoad;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CategoryDTO   //will represent category at presentation layer
{
    private Long categoryId;
    private String categoryName;

}
