package com.saas.event_service.repository;

import com.saas.event_service.model.Event;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface EventRepository extends MongoRepository<Event, String> {

    Optional<Event> findById(String id) ;

    List<Event> findByDate(LocalDate date);

    List<Event> findAll();
}
