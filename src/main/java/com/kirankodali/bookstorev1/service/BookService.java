package com.kirankodali.bookstorev1.service;

import java.util.List;

import com.kirankodali.bookstorev1.business.bean.BookBean;

public interface BookService {
	List<BookBean> getAllBookDetails() throws Exception;
	
	Integer uploadNewBook(BookBean bookBean) throws Exception;
	
	void deleteBookById(Integer bookId) throws Exception;
}
