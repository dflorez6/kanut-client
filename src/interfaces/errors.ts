export interface ApiError {
  data?: {
    status?: {
      message?: string;
      // [key: string]: any; // For any other properties that might be included
    };
  };
  error?: string;
  status?: number;
  // [key: string]: any; // For any other properties that might be included
}
