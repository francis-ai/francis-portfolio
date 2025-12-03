// AdminLogin.jsx
import React, { useState } from "react";
import { TextField, IconButton, InputAdornment, Button, Card, CardContent, Typography } from "@mui/material";
import { Visibility, VisibilityOff, Lock, Email } from "@mui/icons-material";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation example
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setError("");
    console.log("Logging in with:", { email, password });
    // Here you can call your backend API for authentication
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <Card className="w-full max-w-md shadow-lg rounded-lg">
        <CardContent className="p-8">
          <Typography variant="h5" className="text-center font-bold mb-6">
            Admin Login
          </Typography>

          {error && (
            <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              variant="outlined"
              label="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="w-full py-2 mt-4"
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
