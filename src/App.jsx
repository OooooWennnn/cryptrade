import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useAuth, AuthProvider } from "./context/AuthContext";

import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Trade from "./pages/Trade";
import Wallet from "./pages/Wallet";
import Premium from "./pages/Premium";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 500,
    },
  },
});

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Navigate replace to={"premium"} />} />
                <Route
                  path="dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="trade"
                  element={
                    <ProtectedRoute>
                      <Trade />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="wallet"
                  element={
                    <ProtectedRoute>
                      <Wallet />
                    </ProtectedRoute>
                  }
                />
                <Route path="premium" element={<Premium />} />
                <Route path="login" element={<Login />} />
                <Route
                  path="logout"
                  element={<Navigate replace to={"/login"} />}
                />
                <Route
                  path="profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
              </Route>
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
