package com.saas.api_gateway.config;

import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.function.Predicate;

@Component
public class RouterValidator {

    public static final List<String> openApiEndpoints = List.of(
            "/auth/signin",
            "/auth/signup",
            "/events/add",
            "/events/all",
            "/events"
    );

    public Predicate<ServerHttpRequest> isSecured = request -> {
        String path = request.getURI().getPath();
        boolean secured = openApiEndpoints.stream().noneMatch(path::contains);
        System.out.println("Path: " + path + ", Secured: " + secured); // Log pour vérifier
        return secured;
    };
}
