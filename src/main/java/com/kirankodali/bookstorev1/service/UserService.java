package com.kirankodali.bookstorev1.service;

import java.util.List;

import com.kirankodali.bookstorev1.business.bean.UserBean;

public interface UserService {
	List<UserBean> getAllUserDetails() throws Exception;
}
