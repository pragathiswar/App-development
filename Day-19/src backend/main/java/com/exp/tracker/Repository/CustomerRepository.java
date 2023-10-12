package com.exp.tracker.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exp.tracker.Entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer,Integer> {
	Optional<Customer> findByEmail(String email);
}
