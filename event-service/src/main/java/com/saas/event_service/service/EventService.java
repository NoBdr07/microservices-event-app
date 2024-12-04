package com.saas.event_service.service;

import com.saas.event_service.model.Event;
import com.saas.event_service.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    public Optional<Event> findById(String id) {
        return eventRepository.findById(id);
    }

    public List<Event> findByDate(LocalDate date) {
        return eventRepository.findByDate(date);
    }

    public List<Event> findAll() {
        return eventRepository.findAll();
    }

    public Event save(Event event) {
        return eventRepository.save(event);
    }

    public boolean registerUserToEvent(String eventId, String userId) {
        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new RuntimeException("Événement introuvable"));

        if (event.getParticipantIds().size() >= event.getMaxParticipants()) {
            return false; // Plus de place disponible
        }

        event.getParticipantIds().add(userId);
        eventRepository.save(event);
        return true;
    }


}
