import { useState } from 'react';
import { signUp, logIn } from '../firebase/functions/auth'; // Import backend helper functions

const AuthModal = ({ closeModal }: { closeModal: () => void }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleAuth = async () => {
    try {
      if (isSignUp) {
        await signUp(email, password);
        alert('Signed up successfully!');
      } else {
        await logIn(email, password);
        alert('Logged in successfully!');
      }
      closeModal(); // Close modal after success
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <h2 className="text-xl font-semibold text-center">
          {isSignUp ? 'Sign Up' : 'Log In'}
        </h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="mt-4 p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="mt-2 p-2 border border-gray-300 rounded w-full"
        />
        <button
          onClick={handleAuth}
          className="mt-4 bg-green-500 text-white p-2 rounded w-full hover:bg-green-600"
        >
          {isSignUp ? 'Sign Up' : 'Log In'}
        </button>
        <p className="mt-2 text-center">
          {isSignUp ? 'Already have an account?' : 'Don’t have an account?'}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? ' Log In' : ' Sign Up'}
          </span>
        </p>
        <button
          className="mt-4 bg-red-500 text-white p-2 rounded w-full hover:bg-red-600"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
