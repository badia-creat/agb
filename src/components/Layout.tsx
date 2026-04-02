import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const location = useLocation();

  // Cookie state
  const [showCookie, setShowCookie] = useState(false);

  // Check if user already made a choice
  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowCookie(true);
    }
  }, []);

  // Handlers
  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setShowCookie(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setShowCookie(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      {/*  Cookie Consent */}
      {showCookie && (
        <div className="fixed bottom-4 right-4 z-50 max-w-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 flex flex-col space-y-3"
          >
            <p className="text-xs text-gray-600">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            </p>

            <div className="flex space-x-2">
              <button 
                onClick={handleAccept}
                className="text-[10px] font-bold uppercase tracking-widest bg-primary text-white px-4 py-2 rounded-full"
              >
                Accept
              </button>

              <button 
                onClick={handleDecline}
                className="text-[10px] font-bold uppercase tracking-widest text-gray-500 px-4 py-2 rounded-full border border-gray-200"
              >
                Decline
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}