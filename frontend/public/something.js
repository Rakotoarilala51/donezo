import React, { useState, useEffect, createContext, useContext } from 'react';
import { User, Lock, LogOut, Send } from 'lucide-react';

// Context pour gérer l'authentification
const AuthContext = createContext();

// Hook personnalisé pour utiliser le contexte d'auth
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Service API
const API_BASE_URL = 'http://localhost:8080/api/v1';

class ApiService {
  static async login(email, password) {
    const response = await fetch(`${API_BASE_URL}/auth/authenticate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    });
    
    if (!response.ok) {
      throw new Error('Échec de la connexion');
    }
    
    return response.json();
  }

  static async register(firstname, lastname, email, password) {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstname, lastname, email, password })
    });
    
    if (!response.ok) {
      throw new Error('Échec de l\'inscription');
    }
    
    return response.json();
  }

  static async callDemoEndpoint(token) {
    const response = await fetch(`${API_BASE_URL}/demo-controller`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    });
    
    if (!response.ok) {
      throw new Error(`Erreur API: ${response.status}`);
    }
    
    return response.text();
  }
}

// Utilitaires pour le stockage des tokens
class TokenService {
  static setToken(token) {
    // En production, considérez utiliser des cookies httpOnly pour plus de sécurité
    sessionStorage.setItem('jwt_token', token);
  }

  static getToken() {
    return sessionStorage.getItem('jwt_token');
  }

  static removeToken() {
    sessionStorage.removeItem('jwt_token');
  }

  static isTokenExpired(token) {
    if (!token) return true;
    
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const currentTime = Date.now() / 1000;
      return payload.exp < currentTime;
    } catch (error) {
      return true;
    }
  }
}

// Provider d'authentification
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = TokenService.getToken();
    if (storedToken && !TokenService.isTokenExpired(storedToken)) {
      setToken(storedToken);
      // Ici vous pourriez décoder le token pour extraire les infos utilisateur
      setUser({ authenticated: true });
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await ApiService.login(email, password);
      TokenService.setToken(response.token);
      setToken(response.token);
      setUser({ authenticated: true, email });
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const register = async (firstname, lastname, email, password) => {
    try {
      const response = await ApiService.register(firstname, lastname, email, password);
      TokenService.setToken(response.token);
      setToken(response.token);
      setUser({ authenticated: true, email, firstname, lastname });
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    TokenService.removeToken();
    setToken(null);
    setUser(null);
  };

  const value = {
    user,
    token,
    login,
    register,
    logout,
    isAuthenticated: !!user
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Chargement...</div>
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Composant de connexion
const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login, register } = useAuth();

  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      let result;
      if (isLogin) {
        result = await login(formData.email, formData.password);
      } else {
        result = await register(formData.firstname, formData.lastname, formData.email, formData.password);
      }

      if (!result.success) {
        setError(result.error);
      }
    } catch (err) {
      setError('Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isLogin ? 'Connexion' : 'Inscription'}
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}
          
          {!isLogin && (
            <>
              <div>
                <label className="sr-only">Prénom</label>
                <input
                  name="firstname"
                  type="text"
                  required={!isLogin}
                  className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Prénom"
                  value={formData.firstname}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="sr-only">Nom</label>
                <input
                  name="lastname"
                  type="text"
                  required={!isLogin}
                  className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Nom"
                  value={formData.lastname}
                  onChange={handleChange}
                />
              </div>
            </>
          )}
          
          <div>
            <label className="sr-only">Email</label>
            <input
              name="email"
              type="email"
              required
              className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label className="sr-only">Mot de passe</label>
            <input
              name="password"
              type="password"
              required
              className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Mot de passe"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {isLogin ? <Lock className="h-5 w-5" /> : <User className="h-5 w-5" />}
              </span>
              {loading ? 'Chargement...' : (isLogin ? 'Se connecter' : 'S\'inscrire')}
            </button>
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-indigo-600 hover:text-indigo-500"
            >
              {isLogin ? 'Pas de compte ? S\'inscrire' : 'Déjà un compte ? Se connecter'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Composant principal avec demo API
const Dashboard = () => {
  const [demoResponse, setDemoResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { user, token, logout } = useAuth();

  const callDemoApi = async () => {
    setLoading(true);
    setError('');
    setDemoResponse('');

    try {
      const response = await ApiService.callDemoEndpoint(token);
      setDemoResponse(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Dashboard JWT Demo</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">
                Bienvenue, {user?.email || 'Utilisateur'}
              </span>
              <button
                onClick={logout}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Test de l'API Demo</h2>
            
            <div className="space-y-4">
              <button
                onClick={callDemoApi}
                disabled={loading}
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                <Send className="h-5 w-5 mr-2" />
                {loading ? 'Appel en cours...' : 'Appeler Demo API'}
              </button>

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                  <strong>Erreur:</strong> {error}
                </div>
              )}

              {demoResponse && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  <strong>Réponse de l'API:</strong>
                  <pre className="mt-2 whitespace-pre-wrap">{demoResponse}</pre>
                </div>
              )}

              <div className="mt-6 bg-gray-100 p-4 rounded">
                <h3 className="font-semibold mb-2">Informations sur le token:</h3>
                <p className="text-sm text-gray-600 break-all">
                  <strong>Token:</strong> {token ? `${token.substring(0, 50)}...` : 'Aucun token'}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Statut:</strong> {TokenService.isTokenExpired(token) ? '❌ Expiré' : '✅ Valide'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Application principale
const App = () => {
  return (
    <AuthProvider>
      <AuthRouter />
    </AuthProvider>
  );
};

// Router simple basé sur l'authentification
const AuthRouter = () => {
  const { isAuthenticated } = useAuth();
  
  return isAuthenticated ? <Dashboard /> : <LoginForm />;
};

export default App;