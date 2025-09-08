package com.ecommerce.project.payLoad;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddressDTO {
    private Long addressId;

    @NotBlank(message = "Street name cannot be blank")
    @Size(min = 3, message = "Street name must be at least 5 characters")
    private String street;

    @NotBlank(message = "Building name cannot be blank")
    @Size(min = 3, message = "Building name must be at least 5 characters")
    private String buildingName;

    @NotBlank(message = "City cannot be blank")
    @Size(min = 4, message = "City must be at least 4 characters")
    private String city;

    @NotBlank(message = "State cannot be blank")
    @Size(min = 2, message = "State must be at least 2 characters")
    private String state;

    @NotBlank(message = "Country cannot be blank")
    @Size(min = 4, message = "Country must be at least 2 characters")
    private String country;

    @NotBlank(message = "Pincode cannot be blank")
    @Size(min = 5, message = "Pincode must be at least 5 characters")
    private String pincode;
}
