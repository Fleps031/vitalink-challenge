package com.vitalink.whatsapp.webhook.dto;

import java.util.List;


public class MetaWebhookRequest {

    private List<Entry> entry;

    public List<Entry> getEntry() { return entry; }

    public static class Entry {
        private List<Change> changes;

        public List<Change> getChanges() { return changes; }
    }

    public static class Change {
        private Value value;

        public Value getValue() { return value; }
    }

    public static class Value {
        private List<Message> messages;

        public List<Message> getMessages() { return messages; }
    }

    public static class Message {
        private String from;
        private String type;
        private Text text;

        public String getFrom() { return from; }
        public String getType() { return type; }
        public Text getText() { return text; }
    }

    public static class Text {
        private String body;

        public String getBody() { return body; }
    }
}