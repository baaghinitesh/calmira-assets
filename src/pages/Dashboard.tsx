import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import MoodCarousel from '@/components/dashboard/MoodCarousel';
import ServiceCard from '@/components/dashboard/ServiceCard';
import Navigation from '@/components/navigation/Navigation';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'manga',
      title: 'Manga Creation',
      description: 'Create personalized manga stories based on your mood and preferences',
      icon: '📚',
      path: '/services/manga',
      gradient: 'from-primary-dark/20 to-primary-medium/20'
    },
    {
      id: 'voice',
      title: 'Voice Chat',
      description: 'Have voice conversations with AI friends, therapists, or teachers',
      icon: '🎙️',
      path: '/services/voice',
      gradient: 'from-primary-medium/20 to-primary-dark/20'
    },
    {
      id: 'chat',
      title: 'Chat',
      description: 'Text-based conversations with AI companions',
      icon: '💬',
      path: '/services/chat',
      gradient: 'from-accent/20 to-primary/20'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation transparent />

      {/* Main Content */}
      <main className="pt-20 px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              How are you?
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Choose your mood and explore our services designed to support your mental wellness journey
            </p>
          </motion.div>

          {/* Mood Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <MoodCarousel />
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Choose Your Service
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <ServiceCard
                    {...service}
                    onClick={() => navigate(service.path)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-transparent border-t border-border/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Mental Wellness App. Supporting your journey to better mental health.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;