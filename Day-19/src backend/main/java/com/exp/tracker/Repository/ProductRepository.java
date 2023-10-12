package com.exp.tracker.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.exp.tracker.Entity.ProductEntity;




public interface ProductRepository extends JpaRepository<ProductEntity,Integer>{

}
