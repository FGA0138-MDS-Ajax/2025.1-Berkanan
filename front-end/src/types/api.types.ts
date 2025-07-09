export interface ApiResponse<T> {
    status: string;
    data: T;
    totalPages: number;
    currentPage: number;
    pageSize: number;
}
export interface PaginationProps {
    totalPages: number;
    currentPage: number;
    pageSize: number;
}
export interface QueryParams {
  page?: number;
  limit?: number;
  slug?: string 
}

