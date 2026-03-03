package com.vitalink.whatsapp.webhook;

import com.vitalink.whatsapp.webhook.dto.MetaWebhookRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/webhook/whatsapp")
@RequiredArgsConstructor
public class WebhookController {
    private final WebhookService service;

    private static final String VERIFY_TOKEN = "vitalink_webhook_2026";

    @GetMapping
    public ResponseEntity<String> verifyWebhook(
            @RequestParam("hub.mode") String mode,
            @RequestParam("hub.verify_token") String token,
            @RequestParam("hub.challenge") String challenge) {

        if ("subscribe".equals(mode) && VERIFY_TOKEN.equals(token)) {
            return ResponseEntity.ok(challenge);
        }

        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }

    @PostMapping
    public ResponseEntity<Void> receiveMessage(
            @RequestBody MetaWebhookRequest request) {

        service.processWebhook(request);
        return ResponseEntity.ok().build();
    }
}
