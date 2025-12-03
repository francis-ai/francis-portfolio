// AdminLogin.jsx
import React, { useState, useEffect, useRef } from "react";
import { 
  TextField, 
  IconButton, 
  InputAdornment, 
  Button, 
  Card, 
  CardContent, 
  Typography,
  CircularProgress,
  Alert,
  Fade
} from "@mui/material";
import { 
  Visibility, 
  VisibilityOff, 
  Lock, 
  Email,
  Login,
  Shield
} from "@mui/icons-material";

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState({
    email: false,
    password: false
  });
  const [isHovered, setIsHovered] = useState(false);
  
  const emailInputRef = useRef(null);

  // Focus email input on mount
  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, []);

  // Validate email format
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Validate form
  const validateForm = () => {
    const errors = [];

    if (!formData.email.trim()) {
      errors.push("Email is required");
    } else if (!validateEmail(formData.email)) {
      errors.push("Please enter a valid email address");
    }

    if (!formData.password) {
      errors.push("Password is required");
    } else if (formData.password.length < 6) {
      errors.push("Password must be at least 6 characters");
    }

    return errors;
  };

  // Handle input changes
  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    
    // Clear error when user starts typing
    if (error && touched[field]) {
      setError("");
    }
  };

  // Handle blur for touched fields
  const handleBlur = (field) => () => {
    setTouched(prev => ({ ...prev, [field]: true }));
    
    // Validate on blur
    const errors = validateForm();
    if (errors.length > 0) {
      setError(errors[0]);
    }
  };

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({ email: true, password: true });
    
    // Validate form
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setError(validationErrors[0]);
      return;
    }
    
    setLoading(true);
    setError("");
    setSuccess("");
    
    try {
      // Simulate API call with delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would make the actual API call
      // const response = await fetch('/api/admin/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      // For demo purposes, simulate successful login
      console.log("Logging in with:", formData);
      setSuccess("Login successful! Redirecting...");
      
      // Clear form
      setFormData({ email: "", password: "" });
      setTouched({ email: false, password: false });
      
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !loading) {
      handleLogin(e);
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <Card 
        className="w-full max-w-lg shadow-2xl rounded-2xl overflow-hidden border border-gray-200/50 backdrop-blur-sm bg-white/90"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Header Section with Gradient */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
          <div className="flex flex-col items-center space-y-4">
            <div className={`p-3 rounded-full bg-white/10 ${isHovered ? 'rotate-12' : ''} transition-transform duration-300`}>
              <Shield className="text-white text-4xl" />
            </div>
            <div className="text-center">
              <Typography 
                variant="h4" 
                className="font-bold tracking-tight"
                sx={{ color: 'white' }}
              >
                Admin Portal
              </Typography>
              <Typography 
                variant="body2" 
                className="mt-2 opacity-90"
                sx={{ color: 'white' }}
              >
                Secure access to the administration dashboard
              </Typography>
            </div>
          </div>
        </div>

        <CardContent className="p-8">
          {/* Alerts Section */}
          <div className="space-y-3 mb-6">
            {error && (
              <Fade in={!!error}>
                <Alert 
                  severity="error"
                  className="rounded-lg border-l-4 border-red-500"
                  onClose={() => setError("")}
                  sx={{ 
                    '& .MuiAlert-icon': { color: 'error.main' }
                  }}
                >
                  <span className="font-medium">{error}</span>
                </Alert>
              </Fade>
            )}

            {success && (
              <Fade in={!!success}>
                <Alert 
                  severity="success"
                  className="rounded-lg border-l-4 border-green-500"
                  sx={{ 
                    '& .MuiAlert-icon': { color: 'success.main' }
                  }}
                >
                  <span className="font-medium">{success}</span>
                </Alert>
              </Fade>
            )}
          </div>

          <form onSubmit={handleLogin} noValidate className="space-y-6">
            {/* Email Field */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
                <span className="text-red-500 ml-1">*</span>
              </label>
              <TextField
                inputRef={emailInputRef}
                fullWidth
                variant="outlined"
                type="email"
                placeholder="admin@example.com"
                value={formData.email}
                onChange={handleInputChange('email')}
                onBlur={handleBlur('email')}
                onKeyPress={handleKeyPress}
                error={touched.email && (!!error || !validateEmail(formData.email))}
                disabled={loading}
                autoComplete="email"
                required
                className="group"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    transition: 'all 0.2s',
                    '&:hover:not(.Mui-disabled)': {
                      '& fieldset': { borderColor: '#3b82f6' }
                    },
                    '&.Mui-focused': {
                      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
                    }
                  }
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email className={`text-gray-400 group-hover:text-blue-500 transition-colors ${touched.email && !validateEmail(formData.email) ? 'text-red-500' : ''}`} />
                      </InputAdornment>
                    ),
                    className: "py-0"
                  }
                }}
              />
              {touched.email && !validateEmail(formData.email) && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Invalid email format
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="group">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
                <span className="text-red-500 ml-1">*</span>
              </label>
              <TextField
                fullWidth
                variant="outlined"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={formData.password}
                onChange={handleInputChange('password')}
                onBlur={handleBlur('password')}
                onKeyPress={handleKeyPress}
                error={touched.password && (!!error || formData.password.length < 6)}
                disabled={loading}
                autoComplete="current-password"
                required
                className="group"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    transition: 'all 0.2s',
                    '&:hover:not(.Mui-disabled)': {
                      '& fieldset': { borderColor: '#3b82f6' }
                    },
                    '&.Mui-focused': {
                      boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
                    }
                  }
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock className={`text-gray-400 group-hover:text-blue-500 transition-colors ${touched.password && formData.password.length < 6 ? 'text-red-500' : ''}`} />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={togglePasswordVisibility}
                          edge="end"
                          disabled={loading}
                          aria-label={showPassword ? "Hide password" : "Show password"}
                          className="hover:bg-blue-50 transition-colors"
                        >
                          {showPassword ? 
                            <VisibilityOff className="text-gray-500 hover:text-blue-600" /> : 
                            <Visibility className="text-gray-500 hover:text-blue-600" />
                          }
                        </IconButton>
                      </InputAdornment>
                    ),
                    className: "py-0"
                  }
                }}
              />
              <div className="flex justify-between items-center mt-1">
                {touched.password && formData.password.length < 6 && (
                  <p className="text-sm text-red-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Minimum 6 characters
                  </p>
                )}
                <button
                  type="button"
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors disabled:text-gray-400"
                  disabled={loading}
                >
                  Forgot password?
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                fullWidth
                className={`relative py-3.5 rounded-xl text-base font-semibold shadow-lg transition-all duration-300 ${loading ? 'opacity-90' : 'hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0'}`}
                sx={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                  },
                  '&:disabled': {
                    background: '#9ca3af',
                  }
                }}
                startIcon={
                  loading ? (
                    <CircularProgress 
                      size={22} 
                      sx={{ color: 'white' }} 
                    />
                  ) : (
                    <Login className="text-white" />
                  )
                }
              >
                {loading ? (
                  <span className="flex items-center">
                    <span className="animate-pulse">Signing in...</span>
                  </span>
                ) : (
                  "Sign In to Dashboard"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}