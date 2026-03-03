package com.vitalink.whatsapp.messages.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Getter
@Setter
@ConfigurationProperties(prefix = "meta.whatsapp")
public class WhatsappProperties {

    private String baseUrl;
    private String phoneNumberId;
    private String token;
}