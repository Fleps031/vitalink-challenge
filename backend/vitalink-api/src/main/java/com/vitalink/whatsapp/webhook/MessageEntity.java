package com.vitalink.whatsapp.webhook;

import java.time.LocalDateTime;

public class MessageEntity {

    private String from;
    private String content;
    private String type;
    private LocalDateTime receivedAt;

    public MessageEntity(String from, String content, String type) {
        this.from = from;
        this.content = content;
        this.type = type;
        this.receivedAt = LocalDateTime.now();
    }

    public String getFrom() { return from; }
    public String getContent() { return content; }
    public String getType() { return type; }
    public LocalDateTime getReceivedAt() { return receivedAt; }
}