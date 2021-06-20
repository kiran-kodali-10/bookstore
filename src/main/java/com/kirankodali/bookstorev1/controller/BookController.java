package com.kirankodali.bookstorev1.controller;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kirankodali.bookstorev1.business.bean.BookBean;
import com.kirankodali.bookstorev1.service.BookService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
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
	
	@PostMapping(path="book")
	public ResponseEntity<Integer> createNewBook(@RequestBody BookBean bookBean){
		Integer bookId = null;
		try {
			bookId = bookService.uploadNewBook(bookBean);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<Integer>(bookId, HttpStatus.OK);
	}
	
	@DeleteMapping(path = "book")
	public ResponseEntity<String> deleteBookById(@RequestBody LinkedHashMap<String, Integer> bookId){
//		System.out.println(bookId.getClass().getName());
//		System.out.println(bookId);
		System.out.println(bookId.get("bookId"));
		
		try {
			bookService.deleteBookById((Integer)bookId.get("bookId"));
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<String>("deleted", HttpStatus.OK);
	}
}
