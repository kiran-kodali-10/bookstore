package com.kirankodali.bookstorev1.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kirankodali.bookstorev1.business.bean.BookBean;
import com.kirankodali.bookstorev1.service.BookService;

@RestController
public class BookController {

	@Autowired
	private BookService bookService;
	
	@GetMapping(path = "books")
	public ResponseEntity<List<BookBean>> getAllBookDetails(){
		
		List<BookBean> bookBeanList = new ArrayList<BookBean>();
		try {
			bookBeanList = bookService.getAllBookDetails();
			
		} catch (Exception e) {
			
			e.printStackTrace();
		}
		
		return new ResponseEntity<List<BookBean>>(bookBeanList, HttpStatus.OK);
	}
}
