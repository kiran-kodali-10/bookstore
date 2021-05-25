package com.kirankodali.bookstorev1.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.kirankodali.bookstorev1.entity.UserEntity;

@Repository
public interface UserDao extends CrudRepository<UserEntity, Integer> {
	

}
