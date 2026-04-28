import { useCallback, useMemo } from "react";

type UseAuthOptions = {
  redirectOnUnauthenticated?: boolean;
  redirectPath?: string;
};

export function useAuth(options?: UseAuthOptions) {
  // Mocked auth state for frontend-only project
  const state = useMemo(() => {
    const mockUser = {
      id: "mock-user-id",
      name: "Mock User",
      email: "user@example.com",
    };
    
    return {
      user: mockUser,
      loading: false,
      error: null,
      isAuthenticated: true,
    };
  }, []);

  const logout = useCallback(async () => {
    console.log("Mock logout called");
  }, []);

  return {
    ...state,
    refresh: () => Promise.resolve(),
    logout,
  };
}
