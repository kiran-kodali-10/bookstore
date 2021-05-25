package com.kirankodali.bookstorev1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kirankodali.bookstorev1.business.bean.UserBean;
import com.kirankodali.bookstorev1.service.UserService;

@RestController
public class UserController {

	@Autowired
	private UserService userService;

	@GetMapping(path = "users")
	public ResponseEntity<List<UserBean>> getUserDetails() throws Exception{
		List<UserBean> userBean = userService.getAllUserDetails();
		return new ResponseEntity<List<UserBean>>(userBean, HttpStatus.OK);
	}

}
