package com.vitalink.whatsapp.messages.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class MetaSendMessageRequest {

    private String messaging_product;
    private String to;
    private String type;
    private Text text;

    @Data
    @Builder
    public static class Text {
        private String body;
    }
}