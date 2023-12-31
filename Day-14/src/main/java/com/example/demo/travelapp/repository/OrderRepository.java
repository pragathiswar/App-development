package com.example.demo.travelapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.ecom.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

    void deleteByUserUid(Long uid);

}
