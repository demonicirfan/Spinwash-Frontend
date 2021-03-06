import { Box, Center, Stack } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '../Components/Hero/Hero';
import BookNow from '../Components/Home/BookNow';
import Count from '../Components/Home/Count';
import HowItWorks from '../Components/Home/HowItWorks';

const MotionStack = motion(Stack);

const variant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  hidden: { opacity: 0, y: 40 },
};

const Home = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Box>
      <Hero />
      <HowItWorks />
      <MotionStack
        ref={ref}
        animate={controls}
        variants={variant}
        initial='hidden'
        direction={{ base: 'column', lg: 'row' }}
        mx='auto'
        px={{ base: '0', md: '1rem' }}
        maxW='7xl'
        justifyContent='space-between'
        my={{ base: '2rem', md: '4rem' }}
      >
        <BookNow />
        <Count />
      </MotionStack>
    </Box>
  );
};

export {Home};
