package com.vitalink.whatsapp.webhook.dto;

import java.time.LocalDateTime;

public class MessageEntity {
    private String from;
    private String content;
    private LocalDateTime receivedAt;
    private String type;
}
