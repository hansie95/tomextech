import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <>
      {/* Main Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
        style={{
          background: `
            linear-gradient(
              135deg,
              rgba(0, 10, 30, 0.95) 0%,
              rgba(10, 30, 60, 0.95) 50%,
              rgba(0, 10, 30, 0.95) 100%
            )
          `
        }}
      />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(95, 194, 193, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(95, 194, 193, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: 'perspective(500px) rotateX(60deg)',
          backgroundPosition: 'center'
        }}
      />

      {/* Animated Lines */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-tomex-teal/30 to-transparent"
            style={{
              width: '200%',
              left: '-50%',
              top: `${15 + i * 20}%`
            }}
            animate={{
              x: ['-50%', '0%', '-50%']
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Floating Tech Elements */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-lg bg-tomex-teal/10 backdrop-blur-sm"
          style={{
            width: 20 + Math.random() * 60,
            height: 20 + Math.random() * 60,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
        />
      ))}

      {/* Digital Circuit Lines */}
      <div className="absolute inset-0 z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px"
            style={{
              width: 100 + Math.random() * 200,
              background: `linear-gradient(90deg, transparent, rgba(95, 194, 193, ${0.1 + Math.random() * 0.3}), transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-tomex-teal/20"
          style={{
            width: 2 + Math.random() * 4,
            height: 2 + Math.random() * 4,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: 'blur(1px)'
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(0, 10, 30, 0.5) 100%)'
        }}
      />
    </>
  );
};

export default AnimatedBackground;