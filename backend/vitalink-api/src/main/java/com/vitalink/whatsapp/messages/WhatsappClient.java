package com.vitalink.whatsapp.messages;

import com.vitalink.whatsapp.messages.config.WhatsappProperties;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import com.vitalink.whatsapp.messages.dto.MetaSendMessageRequest;
import com.vitalink.whatsapp.messages.dto.MetaSendMessageResponse;
import reactor.core.publisher.Mono;



import java.util.Map;

@Component
@RequiredArgsConstructor
public class WhatsappClient {

    private final WebClient whatsappWebClient;
    private final WhatsappProperties properties;

    public Mono<MetaSendMessageResponse> sendTextMessage(MetaSendMessageRequest request) {

        return whatsappWebClient.post()
                .uri(uriBuilder -> uriBuilder
                        .path("/{phoneNumberId}/messages")
                        .build(properties.getPhoneNumberId()))
                .bodyValue(request)
                .retrieve()
                .onStatus(
                        status -> status.is4xxClientError() || status.is5xxServerError(),
                        response -> response.bodyToMono(String.class)
                                .map(body -> new RuntimeException("Erro Meta API: " + body))
                )
                .bodyToMono(MetaSendMessageResponse.class);
    }
}