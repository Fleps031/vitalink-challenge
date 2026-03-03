package com.vitalink.whatsapp.webhook.dto;

public class MessageResponseDTO {

    private String from;
    private String content;
    private String timestamp;

    public MessageResponseDTO(String from, String content, String timestamp) {
        this.from = from;
        this.content = content;
        this.timestamp = timestamp;
    }

    public String getFrom() { return from; }
    public String getContent() { return content; }
    public String getTimestamp() { return timestamp; }
}