// authService.js

const API_BASE_URL = 'http://localhost:8080';

export async function login(email, password) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/jwt/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email,password }),
    });

    if (response.ok) {
      
      const data = await response.json();
      
      return data.token;
    } else {
      throw new Error('Login failed');
    }
  } catch (error) {
    throw new Error('Login failed');
  }
}

export function logout() {
  // Implement logout logic here (e.g., clear token from localStorage)
  localStorage.removeItem('token');
}

export function getToken() {
  return localStorage.getItem('token');
}
