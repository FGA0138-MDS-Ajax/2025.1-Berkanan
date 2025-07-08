export interface ApiResponse<T> {
    status: string;
    data: T;
    totalPages: number;
    currentPage: number;
    pageSize: number;
}
export interface Pagination {
    totalPages: number;
    currentPage: number;
    pageSize: number;
}
export interface QueryParams {
  page?: number;
  limit?: number;
  id?: string 
}