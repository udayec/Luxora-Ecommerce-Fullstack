package com.ecommerce.project.exceptions;


import com.ecommerce.project.payLoad.APIResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.HashMap;
import java.util.Map;

// Global exception handler for handling validation errors it is important to intercept this
@RestControllerAdvice
public class MyGlobalExceptionHandler {

    //@ExceptionHandler(Exception.class)  we can add this as a generic exception handler if method not defined for any exception
    // Method to handle validation exceptions
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> myMethodArgumentNotValidException(MethodArgumentNotValidException e) {

        // Create a map to store field-specific validation error messages
        Map<String, String> response = new HashMap<>();

        // Iterate through validation errors and store field name with its corresponding error message
        e.getBindingResult().getAllErrors().forEach(err -> {
            String fieldName = ((FieldError) err).getField(); // Extract the field name that caused the error
            String message = err.getDefaultMessage(); // Get the default error message , WHEN CAN use if(field-name) than this message to custom our response
            response.put(fieldName, message); // Store in the response map
        });

        // Return JSON response containing validation error messages we have created map for being more user-friendly
        return new ResponseEntity<Map<String,String>>(response, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<APIResponse> myResourceNotFoundException(ResourceNotFoundException e)
    {
        String message= e.getMessage();            // now we have created our own class for exceptions in a custom way of message and status APIResponse.java
        APIResponse apiResponse= new APIResponse(message,false);
        return new ResponseEntity<>(apiResponse, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(APIException.class)
    public ResponseEntity<APIResponse> myAPIException(APIException e)
    {
        String message= e.getMessage();
        APIResponse apiResponse= new APIResponse(message,false);
        return new ResponseEntity<>(apiResponse, HttpStatus.BAD_REQUEST);
    }
}
