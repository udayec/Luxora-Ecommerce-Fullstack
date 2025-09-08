package com.ecommerce.project.payLoad;

import com.ecommerce.project.model.Address;
import lombok.Data;

import java.util.Map;

@Data
public class StripePaymentDTO {
    private Long amount;
    private String currency;
}