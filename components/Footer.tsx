'use client';

import React, { useState } from 'react';
import { Facebook, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-black text-white py-8" id='contact'>
      <div className="container-center">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 w-full md:w-1/2">
            <h3 className="text-xl font-bold mb-2">Subscribe to our newsletter</h3>
            {!subscribed ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-primary mb-2 sm:mb-0 sm:mr-2 w-full text-black"
                  required
                />
                <button 
                  type="submit"
                  className="button-primary w-full sm:w-auto"
                >
                  Subscription
                </button>
              </form>
            ) : (
              <p className="text-rose-400">Thank you for subscribing!</p>
            )}
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 mt-4 md:mt-0 w-full md:w-1/2">
            <a href="#" className="hover:text-rose-400 hover-transition mb-2 md:mb-0"><Facebook size={24} /></a>
            <a href="#" className="hover:text-rose-400 hover-transition mb-2 md:mb-0"><Instagram size={24} /></a>
            <a href="mailto:info@example.com" className="hover:text-rose-400 hover-transition mb-2 md:mb-0"><Mail size={24} /></a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} JOOBADAM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;