import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { X, Menu, Home, User, BookOpen, Mic, MessageCircle } from 'lucide-react';

const ServiceNavigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/dashboard' },
    { id: 'profile', label: 'Profile', icon: User, path: '/profile' },
    { id: 'manga', label: 'Manga Creation', icon: BookOpen, path: '/mental-wellness' },
    { id: 'voice', label: 'Voice Chat', icon: Mic, path: '/voice' },
    { id: 'chat', label: 'Chat', icon: MessageCircle, path: '/services/chat' }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleMobileMenu}
          className="p-3 bg-background/90 backdrop-blur-md border border-border/50 hover:bg-primary/10 rounded-xl shadow-lg"
        >
          <Menu className="h-6 w-6 text-foreground" />
        </Button>
      </div>

      {/* Desktop Left Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
        className="hidden lg:flex fixed top-0 left-0 h-full w-64 bg-background/95 backdrop-blur-lg border-r border-border/50 flex-col z-40"
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-border/30">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-medium rounded-xl flex items-center justify-center">
              <span className="text-white font-bold kalam-bold">MW</span>
            </div>
            <div>
              <h2 className="kalam-bold text-foreground">Mental Wellness</h2>
              <p className="text-muted-foreground text-sm kalam-light">Your companion</p>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.path)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 kalam-regular ${
                location.pathname === item.path
                  ? 'bg-primary/20 text-primary border border-primary/30'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-border/30">
          <p className="text-xs text-muted-foreground kalam-light text-center">
            &copy; 2024 Mental Wellness
          </p>
        </div>
      </motion.div>

      {/* Mobile Sliding Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Sliding Navigation Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="lg:hidden fixed top-0 left-0 h-full w-80 max-w-[80vw] bg-background/95 backdrop-blur-lg border-r border-border/50 z-50 overflow-y-auto"
            >
              <div className="p-6">
                {/* Panel Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-medium rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold kalam-bold">MW</span>
                    </div>
                    <div>
                      <h2 className="kalam-bold text-foreground">Mental Wellness</h2>
                      <p className="text-muted-foreground text-sm kalam-light">Your companion</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-primary/10 rounded-xl"
                  >
                    <X className="h-5 w-5 text-foreground" />
                  </Button>
                </div>

                {/* Navigation Items */}
                <nav className="space-y-2">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleNavigation(item.path)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 kalam-regular ${
                        location.pathname === item.path
                          ? 'bg-primary/20 text-primary border border-primary/30'
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </motion.button>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServiceNavigation;