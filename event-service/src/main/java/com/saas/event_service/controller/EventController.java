package com.saas.event_service.controller;

import com.saas.event_service.model.Event;
import com.saas.event_service.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/events")
public class EventController {

    @Autowired
    private EventService eventService;

    @GetMapping("/all")
    public List<Event> getAllEvents() {
        return eventService.findAll();
    }

    @PostMapping("/add")
    public Event addEvent(@RequestBody Event event) {
        return eventService.save(event);
    }

    @PostMapping("/{eventId}/register")
    public ResponseEntity<String> registerToEvent(@PathVariable String eventId, @RequestBody String userId) {
        boolean success = eventService.registerUserToEvent(eventId, userId);

        if (success) {
            return ResponseEntity.ok("Inscription réussie");
        }
        else {
            return ResponseEntity.badRequest().body("Inscription impossible");
        }

    }
}
