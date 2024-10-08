import { useState } from 'react';
import { signUp, logIn, logOut } from '../firebase/functions/auth'; // Import backend helper functions
import { useAuth } from '../contexts/authContext'; // Assuming you're using a context provider

const AuthNav = () => {
  const { currentUser } = useAuth(); // Get current user from context
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // For confirming the password
  const [fullName, setFullName] = useState(''); // For storing the full name
  const [error, setError] = useState('');

  const handleAuth = async () => {
    if (isSignUp && password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      if (isSignUp) {
        await signUp(email, password, fullName); // Pass the full name
      } else {
        await logIn(email, password);
      }
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <nav className="relative z-50 flex items-center justify-between p-4 bg-pink-50 shadow">
      <div>
        {!currentUser ? (
          <h2 className="text-xl font-semibold cursor-pointer" onClick={() => setIsSignUp(true)}>
            Join Yae Publishing House!
          </h2>
        ) : (
          <h2 className="text-xl font-semibold">
            おはよう, {currentUser.displayName?.split(' ')[0]} {/* Use the first name */}
          </h2>
        )}
      </div>
      {currentUser && (
        <button
          className="bg-red-500 text-white p-2 rounded"
          onClick={handleLogOut}
        >
          Log Out
        </button>
      )}
      {isSignUp && !currentUser && (
        <div className="absolute top-16 left-0 right-0 bg-white p-6 rounded shadow-lg z-50">
          <h2 className="text-xl font-semibold text-center">Sign Up</h2>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="mt-4 p-2 border border-pink-300 rounded w-full"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-4 p-2 border border-pink-300 rounded w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-2 p-2 border border-pink-300 rounded w-full"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="mt-2 p-2 border border-pink-300 rounded w-full"
          />
          <button
            onClick={handleAuth}
            className="mt-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2 rounded w-full hover:from-pink-600 hover:to-purple-600"
          >
            Sign Up
          </button>
          <p className="mt-2 text-center">
            Already have an account?
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => setIsSignUp(false)}
            >
              Log In
            </span>
          </p>
        </div>
      )}
      {!isSignUp && !currentUser && (
        <div className="absolute top-16 left-0 right-0 bg-white p-6 rounded shadow-lg z-50">
          <h2 className="text-xl font-semibold text-center">Log In</h2>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-4 p-2 border border-pink-300 rounded w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-2 p-2 border border-pink-300 rounded w-full"
          />
          <button
            onClick={handleAuth}
            className="mt-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2 rounded w-full hover:from-pink-600 hover:to-purple-600"
          >
            Log In
          </button>
          <p className="mt-2 text-center">
            Don't have an account?
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => setIsSignUp(true)}
            >
              Sign Up
            </span>
          </p>
        </div>
      )}
    </nav>
  );
};

export default AuthNav;
