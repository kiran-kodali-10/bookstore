package com.kirankodali.bookstorev1.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kirankodali.bookstorev1.business.bean.UserBean;
import com.kirankodali.bookstorev1.entity.UserEntity;

@Repository
public class UserDaoWrapper {
	
	@Autowired
	private UserDao userDao;
	
	public List<UserBean> getAllUsers(){
		
		List<UserBean> userBeanList = new ArrayList<>();
		List<UserEntity> users = (List<UserEntity>) userDao.findAll();
		
		// Convert bean entity class to bean class
		users.forEach( (userEntity) -> {
			UserBean userBean = new UserBean();
			// Method to copy the properties
			BeanUtils.copyProperties(userEntity, userBean);
			userBeanList.add(userBean);
		});
		return userBeanList;
	}
	
}
