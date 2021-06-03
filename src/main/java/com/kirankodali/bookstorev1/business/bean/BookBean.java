package com.kirankodali.bookstorev1.business.bean;

public class BookBean {

	private Integer bookId;
	
	private String bookTitle;
	
	private String category;
	
	private String author;
	
	private Integer rating;

	public Integer getBookId() {
		return bookId;
	}

	// Getters and setters
	public void setBookId(Integer bookId) {
		this.bookId = bookId;
	}

	public String getBookTitle() {
		return bookTitle;
	}

	public void setBookTitle(String bookTitle) {
		this.bookTitle = bookTitle;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public Integer getRating() {
		return rating;
	}

	public void setRating(Integer rating) {
		this.rating = rating;
	}

	@Override
	public String toString() {
		return "BookBean [bookId=" + bookId + ", bookTitle=" + bookTitle + ", category=" + category + ", author="
				+ author + ", rating=" + rating + "]";
	}
	
	
	
}
