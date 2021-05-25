package com.kirankodali.bookstorev1.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kirankodali.bookstorev1.entity.BookEntity;

@Repository
public interface BookDao extends JpaRepository<BookEntity, Integer> {

}
