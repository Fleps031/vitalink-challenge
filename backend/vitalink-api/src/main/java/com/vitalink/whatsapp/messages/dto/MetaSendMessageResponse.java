package com.vitalink.whatsapp.messages.dto;

import lombok.Data;
import java.util.List;

@Data
public class MetaSendMessageResponse {

    private String messaging_product;
    private List<Contact> contacts;
    private List<Message> messages;

    @Data
    public static class Contact {
        private String input;
        private String wa_id;
    }

    @Data
    public static class Message {
        private String id;
    }
}