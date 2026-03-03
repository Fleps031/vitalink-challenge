package com.vitalink.whatsapp.messages.dto;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class SendMessageRequest {

    @NotBlank
    private String to;

    @NotBlank
    private String message;
}