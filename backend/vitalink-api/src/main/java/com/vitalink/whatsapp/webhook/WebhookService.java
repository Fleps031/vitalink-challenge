package com.vitalink.whatsapp.webhook;

import com.vitalink.whatsapp.webhook.dto.MessageResponseDTO;
import com.vitalink.whatsapp.webhook.dto.MetaWebhookRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class WebhookService {
    private final ObjectMapper objectMapper = new ObjectMapper();
    private final SimpMessagingTemplate messagingTemplate;

    private final List<MessageEntity> messageStore = new ArrayList<>();

    public void processWebhook(MetaWebhookRequest request) {

        if (request.getEntry() == null) return;

        request.getEntry().forEach(entry ->
                entry.getChanges().forEach(change -> {

                    if (change.getValue().getMessages() == null) return;

                    change.getValue().getMessages().forEach(msg -> {

                        if ("text".equals(msg.getType())) {

                            MessageEntity entity = new MessageEntity(
                                    msg.getFrom(),
                                    msg.getText().getBody(),
                                    msg.getType()
                            );

                            messageStore.add(entity);

                            System.out.println("Mensagem recebida: "
                                    + entity.getFrom() + " - "
                                    + entity.getContent());

                            MessageResponseDTO response = new MessageResponseDTO(
                                    entity.getFrom(),
                                    entity.getContent(),
                                    entity.getReceivedAt().toString()
                            );

                            System.out.println("Enviando pro socket - " + response);
                            messagingTemplate.convertAndSend("/topic/messages", response);
                        }
                    });
                })
        );
    }

    public List<MessageEntity> getAllMessages() {
        return messageStore;
    }
}
