package com.ecommerce.project.payLoad;
//we have added a standard for returning execeptions to user
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class APIResponse {
    public String message;
    public boolean status;
}
