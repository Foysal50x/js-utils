import { describe, it, expect } from 'vitest';
import { Paginator, pagination } from '../src'; // Adjust the import path based on your project structure

describe('Paginator', () => {
  it('should set and get the current page correctly', () => {
    const paginator = new Paginator();
    paginator.setPage(3);
    expect(paginator.getPage()).toBe(3);
  });

  it('should return the correct first page', () => {
    const paginator = new Paginator();
    expect(paginator.getFirstPage()).toBe(1);
  });

  it('should return the correct last page when item count is set', () => {
    const paginator = new Paginator();
    paginator.setItemsPerPage(10).setItemCount(100);
    expect(paginator.getLastPage()).toBe(10);
  });

  it('should return null for last page when item count is not set', () => {
    const paginator = new Paginator();
    expect(paginator.getLastPage()).toBeNull();
  });

  it('should return the correct first item on the page', () => {
    const paginator = new Paginator();
    paginator.setItemsPerPage(10).setItemCount(100).setPage(2);
    expect(paginator.getFirstItemOnPage()).toBe(11);
  });

  it('should return the correct last item on the page', () => {
    const paginator = new Paginator();
    paginator.setItemsPerPage(10).setItemCount(100).setPage(2);
    expect(paginator.getLastItemOnPage()).toBe(20);
  });

  it('should correctly identify the first page', () => {
    const paginator = new Paginator();
    paginator.setPage(1);
    expect(paginator.isFirst()).toBe(true);
  });

  it('should correctly identify the last page', () => {
    const paginator = new Paginator();
    paginator.setItemsPerPage(10).setItemCount(100).setPage(10);
    expect(paginator.isLast()).toBe(true);
  });

  it('should return the correct page count', () => {
    const paginator = new Paginator();
    paginator.setItemsPerPage(10).setItemCount(95);
    expect(paginator.getPageCount()).toBe(10);
  });

  it('should return the correct offset', () => {
    const paginator = new Paginator();
    paginator.setItemsPerPage(10).setPage(3);
    expect(paginator.getOffset()).toBe(20);
  });

  it('should return the correct countdown offset', () => {
    const paginator = new Paginator();
    paginator.setItemsPerPage(10).setItemCount(100).setPage(2);
    expect(paginator.getCountdownOffset()).toBe(80);
  });

  it('should return the correct length of items on the current page', () => {
    const paginator = new Paginator();
    paginator.setItemsPerPage(10).setItemCount(95).setPage(10);
    expect(paginator.getLength()).toBe(5);
  });
});

describe('pagination fn', () => {
  it('should return the correct last page when item count is set', () => {
    const paginator = pagination(10, 100);
    expect(paginator.getLastPage()).toBe(10);
  });
});
