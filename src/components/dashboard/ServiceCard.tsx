import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  gradient,
  onClick
}) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className="h-full"
    >
      <Card className={`service-card h-full cursor-pointer bg-gradient-to-br ${gradient} backdrop-blur-sm border-border/50 hover:border-primary/50`}>
        <CardContent className="p-6 h-full flex flex-col">
          <div className="flex items-center space-x-4 mb-4">
            <div className="text-4xl">{icon}</div>
            <h3 className="text-xl font-bold text-foreground">{title}</h3>
          </div>
          
          <p className="text-muted-foreground mb-6 flex-grow">
            {description}
          </p>
          
          <Button
            onClick={onClick}
            className="w-full bg-gradient-to-r from-primary to-primary-medium hover:from-primary-medium hover:to-primary text-primary-foreground font-semibold py-3 rounded-2xl transition-all duration-300"
          >
            Start {title}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;