import type { PostgrestError } from "@supabase/supabase-js";

export interface PaginatedResponse<T> {
    data: T[];
    totalItems: number;
    totalPages: number;
    currentPage: number;
}
export interface QueryParams {
  page?: string;
  limit?: string;
  id?: string 
}
export interface ResponseProps<T> {
  data: T | null;
  error: PostgrestError | null;
  count: number | null;
}