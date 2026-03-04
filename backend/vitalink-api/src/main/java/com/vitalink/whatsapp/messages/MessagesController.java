package com.vitalink.whatsapp.messages;

import com.vitalink.whatsapp.messages.dto.MetaSendMessageResponse;
import com.vitalink.whatsapp.messages.dto.SendMessageRequest;
import com.vitalink.whatsapp.messages.MessagesService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/whatsapp")
@RequiredArgsConstructor
public class MessagesController {

    private final MessagesService service;


    @PostMapping("/send")
    public ResponseEntity<MetaSendMessageResponse> sendMessage(
            @RequestBody @Valid SendMessageRequest request) {

        return ResponseEntity.ok(service.sendTextMessage(request));
    }
}