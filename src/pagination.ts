/**
 * Paginator class for handling pagination logic.
 *
 * This class is used to manage and calculate pagination data, including
 * the current page, total number of pages, and the items on each page.
 *
 * @example
 * ```typescript
 * const paginator = new Paginator();
 * paginator.setPage(2).setItemsPerPage(10).setItemCount(100);
 * console.log(paginator.getPage()); // 2
 * console.log(paginator.getFirstItemOnPage()); // 11
 * console.log(paginator.getLastItemOnPage()); // 20
 * console.log(paginator.getPageCount()); // 10
 * console.log(paginator.isFirst()); // false
 * console.log(paginator.isLast()); // false
 * ```
 */
export class Paginator {
  private base: number = 1;
  private itemsPerPage: number = 1;
  private page: number = 1;
  private itemCount: number | null = null;

  /**
   * Sets the current page number.
   *
   * @param page The page number to set.
   * @returns The Paginator instance.
   */
  public setPage(page: number): this {
    this.page = page;
    return this;
  }

  /**
   * Returns the current page number.
   *
   * @returns The current page number.
   */
  public getPage(): number {
    return this.base + this.getPageIndex();
  }

  /**
   * Returns the first page number.
   *
   * @returns The first page number.
   */
  public getFirstPage(): number {
    return this.base;
  }

  /**
   * Returns the last page number.
   *
   * @returns The last page number, or null if itemCount is not set.
   */
  public getLastPage(): number | null {
    return this.itemCount === null
      ? null
      : this.base + Math.max(0, this.getPageCount()! - 1);
  }

  /**
   * Returns the sequence number of the first item on the current page.
   *
   * @returns The sequence number of the first item on the page.
   */
  public getFirstItemOnPage(): number {
    return this.itemCount !== 0 ? this.getOffset() + 1 : 0;
  }

  /**
   * Returns the sequence number of the last item on the current page.
   *
   * @returns The sequence number of the last item on the page.
   */
  public getLastItemOnPage(): number {
    return this.getOffset() + this.getLength();
  }

  /**
   * Sets the base page number.
   *
   * @param base The base page number to set.
   * @returns The Paginator instance.
   */
  public setBase(base: number): this {
    this.base = base;
    return this;
  }

  /**
   * Returns the base page number.
   *
   * @returns The base page number.
   */
  public getBase(): number {
    return this.base;
  }

  /**
   * Returns the zero-based page index.
   *
   * @returns The zero-based page index.
   */
  protected getPageIndex(): number {
    const index = Math.max(0, this.page - this.base);
    return this.itemCount === null
      ? index
      : Math.min(index, Math.max(0, this.getPageCount()! - 1));
  }

  /**
   * Checks if the current page is the first page.
   *
   * @returns True if it is the first page, false otherwise.
   */
  public isFirst(): boolean {
    return this.getPageIndex() === 0;
  }

  /**
   * Checks if the current page is the last page.
   *
   * @returns True if it is the last page, false otherwise.
   */
  public isLast(): boolean {
    return this.itemCount === null
      ? false
      : this.getPageIndex() >= this.getPageCount()! - 1;
  }

  /**
   * Returns the total number of pages.
   *
   * @returns The total number of pages, or null if itemCount is not set.
   */
  public getPageCount(): number | null {
    return this.itemCount === null
      ? null
      : Math.ceil(this.itemCount / this.itemsPerPage);
  }

  /**
   * Sets the number of items to display on a single page.
   *
   * @param itemsPerPage The number of items per page.
   * @returns The Paginator instance.
   */
  public setItemsPerPage(itemsPerPage: number): this {
    this.itemsPerPage = Math.max(1, itemsPerPage);
    return this;
  }

  /**
   * Returns the number of items to display on a single page.
   *
   * @returns The number of items per page.
   */
  public getItemsPerPage(): number {
    return this.itemsPerPage;
  }

  /**
   * Sets the total number of items.
   *
   * @param itemCount The total number of items.
   * @returns The Paginator instance.
   */
  public setItemCount(itemCount: number | null = null): this {
    this.itemCount = itemCount === null ? null : Math.max(0, itemCount);
    return this;
  }

  /**
   * Returns the total number of items.
   *
   * @returns The total number of items, or null if not set.
   */
  public getItemCount(): number | null {
    return this.itemCount;
  }

  /**
   * Returns the absolute index of the first item on the current page.
   *
   * @returns The absolute index of the first item.
   */
  public getOffset(): number {
    return this.getPageIndex() * this.itemsPerPage;
  }

  /**
   * Returns the absolute index of the first item on the current page in countdown paging.
   *
   * @returns The absolute index in countdown paging, or null if itemCount is not set.
   */
  public getCountdownOffset(): number | null {
    return this.itemCount === null
      ? null
      : Math.max(
          0,
          this.itemCount - (this.getPageIndex() + 1) * this.itemsPerPage,
        );
  }

  /**
   * Returns the number of items on the current page.
   *
   * @returns The number of items on the current page.
   */
  public getLength(): number {
    return this.itemCount === null
      ? this.itemsPerPage
      : Math.min(
          this.itemsPerPage,
          this.itemCount - this.getPageIndex() * this.itemsPerPage,
        );
  }
}

/**
 * Creates and returns a new `Paginator` instance configured with the specified items per page.
 *
 * This function is a convenient way to create a `Paginator` instance and set the number of items per page in one step.
 *
 * @param perPage The number of items to display on each page.
 * @param itemCount The total number of items.
 * @returns A `Paginator` instance with the items per page set to `perPage`.
 *
 * @example
 * ```typescript
 * const paginator = pagination(10, 100);
 * paginator.setPage(2);
 * console.log(paginator.getPage()); // 2
 * console.log(paginator.getFirstItemOnPage()); // 11
 * console.log(paginator.getLastItemOnPage()); // 20
 * console.log(paginator.getPageCount()); // 10
 * console.log(paginator.isFirst()); // false
 * console.log(paginator.isLast()); // false
 * ```
 */
export function pagination(perPage: number, itemCount: number): Paginator {
  return new Paginator().setItemsPerPage(perPage).setItemCount(itemCount);
}
