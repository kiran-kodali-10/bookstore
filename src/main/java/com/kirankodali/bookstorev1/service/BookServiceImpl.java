package com.kirankodali.bookstorev1.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kirankodali.bookstorev1.business.bean.BookBean;
import com.kirankodali.bookstorev1.dao.BookDaoWrapper;

@Service
public class BookServiceImpl implements BookService {

	@Autowired
	private BookDaoWrapper bookDaoWrapper;
	
	@Override
	public List<BookBean> getAllBookDetails() throws Exception {
		
		return bookDaoWrapper.getAllBookDetails();
	}

	@Override
	public Integer uploadNewBook(BookBean bookBean) throws Exception {
		
		
		return bookDaoWrapper.uploadNewBook(bookBean);
	}

	@Override
	public void deleteBookById(Integer bookId) throws Exception {
		// TODO Auto-generated method stub
		bookDaoWrapper.deleteBookById(bookId);
	}

	@Override
	public void updateBookDetails(BookBean bookBean) throws Exception {
		// TODO Auto-generated method stub
		bookDaoWrapper.updateBookDetails(bookBean);
	}
	
}
