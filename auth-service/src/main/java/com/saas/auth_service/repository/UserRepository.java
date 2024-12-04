package com.saas.auth_service.repository;

import com.saas.auth_service.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {

    boolean existsByUsername(String username);

    User findByUsername(String username);
}
