package com.kirankodali.bookstorev1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kirankodali.bookstorev1.business.bean.UserBean;
import com.kirankodali.bookstorev1.dao.UserDaoWrapper;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDaoWrapper userDaoWrapper;

	@Override
	public List<UserBean> getAllUserDetails() throws Exception {
		return userDaoWrapper.getAllUsers();
	}


}
