package com.exp.tracker.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exp.tracker.dto.LoginRequest;
import com.exp.tracker.dto.RegisterRequest;
import com.exp.tracker.service.AuthService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
@CrossOrigin

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@Transactional
public class AuthController {
	private final AuthService authService = new AuthService();

	    @PostMapping("/register")
	    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
	        boolean isRegistered = authService.userRegistration(request);
	        return isRegistered ? ResponseEntity.ok("User registered successfully")
	                : ResponseEntity.badRequest().body("User already Exists");
	    }

	    @PostMapping("/login")
	    public ResponseEntity<?> authenticate(@RequestBody LoginRequest request) {
	    	System.err.println(authService.userAuthentication(request));
	        return (authService.userAuthentication(request));
	    }
} 