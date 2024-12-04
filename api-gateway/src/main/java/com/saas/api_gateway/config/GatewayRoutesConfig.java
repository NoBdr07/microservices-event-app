package com.saas.api_gateway.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class GatewayRoutesConfig {

    @Autowired
    AuthTokenFilter filter;

    @Bean
    public RouteLocator routes(RouteLocatorBuilder builder) {
        return builder.routes()
                // Redirection des requêtes /auth/** vers AUTH-SERVICE
                .route("auth-service", r ->
                        r.path("/auth/**")
                        .filters(f -> f.filter(filter))
                        .uri("lb://auth-service")) // Load Balancer via Eureka
                .route("event-service", r ->
                        r.path("/events/**")
                                .filters(f -> f.filter(filter))
                        .uri("lb://event-service"))
                .build();
    }
}
