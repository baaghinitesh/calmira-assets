import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/navigation/Navigation';
import ChatInterface from '@/services/chat/ChatInterface';

interface VoiceOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  personality: string;
  gradient: string;
}

const VoiceService: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const navigate = useNavigate();

  const voiceOptions: VoiceOption[] = [
    {
      id: 'friend',
      title: 'Talk to Friend',
      description: 'Chat with a supportive AI friend who listens and understands',
      icon: '👥',
      personality: 'Friendly, casual, supportive, and understanding',
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      id: 'therapist',
      title: 'Talk to Therapist',
      description: 'Professional AI therapist for mental health support and guidance',
      icon: '🧠',
      personality: 'Professional, empathetic, trained in therapeutic techniques',
      gradient: 'from-green-500/20 to-teal-500/20'
    },
    {
      id: 'teacher',
      title: 'Talk to Teacher',
      description: 'Educational AI that helps you learn and grow intellectually',
      icon: '🎓',
      personality: 'Knowledgeable, patient, encouraging, and educational',
      gradient: 'from-purple-500/20 to-indigo-500/20'
    }
  ];

  const handleSelectOption = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleBackToOptions = () => {
    setSelectedOption(null);
  };

  const getContactInfo = (optionId: string) => {
    const option = voiceOptions.find(opt => opt.id === optionId);
    switch (optionId) {
      case 'friend':
        return {
          name: 'Alex - Your AI Friend',
          avatar: '/images/friend-avatar.png',
          status: 'Ready to chat and listen'
        };
      case 'therapist':
        return {
          name: 'Dr. Sarah - AI Therapist',
          avatar: '/images/therapist-avatar.png',
          status: 'Professional support available'
        };
      case 'teacher':
        return {
          name: 'Prof. Morgan - AI Educator',
          avatar: '/images/teacher-avatar.png',
          status: 'Ready to help you learn'
        };
      default:
        return {
          name: 'AI Assistant',
          avatar: '/images/default-avatar.png',
          status: 'Online'
        };
    }
  };

  if (selectedOption) {
    const contactInfo = getContactInfo(selectedOption);
    const option = voiceOptions.find(opt => opt.id === selectedOption);
    
    return (
      <div className="min-h-screen bg-background">
        <Navigation showHamburger />
        
        <div className="pt-16 h-screen">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
            className="h-full flex flex-col"
          >
            {/* Back Button */}
            <div className="p-4 border-b border-border">
              <Button
                variant="ghost"
                onClick={handleBackToOptions}
                className="text-foreground hover:text-primary hover:bg-primary/10 rounded-xl"
              >
                ← Back to Options
              </Button>
            </div>

            {/* Chat Interface */}
            <div className="flex-1">
              <ChatInterface
                contactName={contactInfo.name}
                contactAvatar={contactInfo.avatar}
                contactStatus={contactInfo.status}
                initialMessages={[
                  {
                    id: 'welcome',
                    content: `Hello! I'm here to ${option?.description.toLowerCase()}. How can I help you today?`,
                    sender: 'ai',
                    timestamp: new Date(),
                    type: 'text'
                  }
                ]}
                onSendMessage={(message) => {
                  console.log(`Message to ${selectedOption}:`, message);
                  // Handle message sending to specific AI type
                }}
                onVoiceMessage={() => {
                  console.log(`Voice message for ${selectedOption}`);
                  // Handle voice messages
                }}
                onVoiceCall={() => {
                  console.log(`Voice call with ${selectedOption}`);
                  // Handle voice calls
                }}
                onVideoCall={() => {
                  console.log(`Video call with ${selectedOption}`);
                  // Handle video calls
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation showHamburger />
      
      <main className="pt-20 px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Voice Chat Service
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose who you'd like to talk with. Each AI companion has been trained with different personalities and expertise to support you.
            </p>
          </motion.div>

          {/* Voice Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {voiceOptions.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card className={`service-card cursor-pointer bg-gradient-to-br ${option.gradient} backdrop-blur-sm border-border/50 hover:border-primary/50 h-full`}>
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-4xl">{option.icon}</div>
                      <h3 className="text-xl font-bold text-foreground">{option.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {option.description}
                    </p>
                    
                    <div className="mb-6 p-3 bg-background/50 rounded-xl border border-border/30">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Personality:</strong> {option.personality}
                      </p>
                    </div>
                    
                    <Button
                      onClick={() => handleSelectOption(option.id)}
                      className="w-full bg-gradient-to-r from-primary to-primary-medium hover:from-primary-medium hover:to-primary text-primary-foreground font-semibold py-3 rounded-2xl transition-all duration-300"
                    >
                      Start Conversation
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Features Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 p-6 bg-card/50 rounded-2xl border border-border/30 backdrop-blur-sm"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
              Voice Chat Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <div className="text-2xl">🎙️</div>
                <p className="text-sm text-muted-foreground">Real-time voice conversations</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">🧠</div>
                <p className="text-sm text-muted-foreground">AI trained for emotional support</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl">🔒</div>
                <p className="text-sm text-muted-foreground">Private and secure conversations</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default VoiceService;