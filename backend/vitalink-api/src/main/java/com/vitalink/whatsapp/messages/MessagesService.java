package com.vitalink.whatsapp.messages;

import com.vitalink.whatsapp.messages.WhatsappClient;
import com.vitalink.whatsapp.messages.dto.MetaSendMessageRequest;
import com.vitalink.whatsapp.messages.dto.MetaSendMessageResponse;
import com.vitalink.whatsapp.messages.dto.SendMessageRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class MessagesService {

    private final WhatsappClient client;

    public MetaSendMessageResponse sendTextMessage(SendMessageRequest request) {

        MetaSendMessageRequest metaRequest =
                MetaSendMessageRequest.builder()
                        .messaging_product("whatsapp")
                        .to(request.getTo())
                        .type("text")
                        .text(
                                MetaSendMessageRequest.Text.builder()
                                        .body(request.getMessage())
                                        .build()
                        )
                        .build();

        return client.sendTextMessage(metaRequest).block();
    }
}