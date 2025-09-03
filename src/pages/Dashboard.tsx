import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import MoodCarousel from '@/components/dashboard/MoodCarousel';
import ServiceCard from '@/components/dashboard/ServiceCard';
import ImprovedNavigation from '@/components/navigation/ImprovedNavigation';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'manga',
      title: 'Manga Creation',
      description: 'Create personalized manga stories based on your mood and preferences',
      icon: '📚',
      path: '/mental-wellness', // Direct to Mental Wellness app
      gradient: 'from-primary-dark/20 to-primary-medium/20'
    },
    {
      id: 'voice',
      title: 'Voice Chat',
      description: 'Have voice conversations with AI friends, therapists, or teachers',
      icon: '🎙️',
      path: '/voice', // Direct to Voice Chat interface
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
      <ImprovedNavigation transparent />

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen pt-20 lg:pt-0 px-4 pb-8">
        <div className="max-w-7xl mx-auto py-8 lg:py-16">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl kalam-bold text-foreground mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              How are you?
            </h1>
            <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto kalam-light leading-relaxed">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl kalam-bold text-foreground mb-12 text-center">
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
      <footer className="lg:ml-64 bg-transparent border-t border-border/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p className="kalam-light text-lg">&copy; 2024 Mental Wellness App. Supporting your journey to better mental health.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;