"use client";

import { motion, useInView, useAnimation } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { 
  Github, 
  ExternalLink, 
  Calendar, 
  Users, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Play,
  Code,
  Palette,
  Database,
  Globe,
  Smartphone,
  Zap
} from "lucide-react";
import Image from "next/image";

// Types
interface ProjectData {
  title: string;
  tagline: string;
  images: {
    src: string;
    caption: string;
    alt: string;
  }[];
  problem: string;
  solution: string;
  technologies: {
    name: string;
    version: string;
    useCase: string;
    icon: React.ReactNode;
    color: string;
  }[];
  metrics: {
    label: string;
    value: number;
    suffix: string;
    description: string;
  }[];
  role: {
    responsibilities: string[];
    contributions: {
      area: string;
      percentage: number;
    }[];
  };
  challenges: {
    title: string;
    problem: string;
    solution: string;
    timeline: string;
  }[];
  links: {
    demo?: string;
    github: string;
    status?: string;
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

// Sample project data - replace with your actual project data
const sampleProject: ProjectData = {
  title: "EcoTrack Dashboard",
  tagline: "Revolutionizing environmental monitoring through intelligent data visualization and real-time analytics",
  images: [
    {
      src: "/pexels-jonathanborba-29276547.jpg",
      caption: "Main Dashboard Overview",
      alt: "EcoTrack main dashboard showing environmental metrics"
    },
    {
      src: "/hills-2836301.jpg",
      caption: "Real-time Monitoring",
      alt: "Real-time environmental data monitoring interface"
    },
    {
      src: "/flowers-8564948_1920.png",
      caption: "Analytics & Insights",
      alt: "Advanced analytics and insights panel"
    }
  ],
  problem: "Environmental monitoring systems lack real-time insights and user-friendly interfaces, making it difficult for organizations to track and respond to environmental changes effectively.",
  solution: "EcoTrack provides a comprehensive dashboard that aggregates environmental data from multiple sources, offering real-time monitoring, predictive analytics, and actionable insights through an intuitive interface. The platform enables organizations to make data-driven decisions for environmental protection and compliance.",
  technologies: [
    {
      name: "React",
      version: "18.2.0",
      useCase: "Frontend framework for building interactive UI",
      icon: <Code className="w-6 h-6" />,
      color: "text-blue-500"
    },
    {
      name: "TypeScript",
      version: "5.0.0",
      useCase: "Type-safe development and better code quality",
      icon: <Zap className="w-6 h-6" />,
      color: "text-blue-600"
    },
    {
      name: "Tailwind CSS",
      version: "3.3.0",
      useCase: "Rapid UI development and responsive design",
      icon: <Palette className="w-6 h-6" />,
      color: "text-cyan-500"
    },
    {
      name: "Node.js",
      version: "18.16.0",
      useCase: "Backend API and data processing",
      icon: <Database className="w-6 h-6" />,
      color: "text-green-500"
    },
    {
      name: "MongoDB",
      version: "6.0.0",
      useCase: "Environmental data storage and retrieval",
      icon: <Database className="w-6 h-6" />,
      color: "text-green-600"
    },
    {
      name: "Chart.js",
      version: "4.2.0",
      useCase: "Data visualization and interactive charts",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-purple-500"
    }
  ],
  metrics: [
    {
      label: "Data Processing Speed",
      value: 85,
      suffix: "%",
      description: "Improvement in real-time data processing"
    },
    {
      label: "User Engagement",
      value: 240,
      suffix: "%",
      description: "Increase in daily active users"
    },
    {
      label: "Response Time",
      value: 60,
      suffix: "ms",
      description: "Average API response time"
    },
    {
      label: "Accuracy Rate",
      value: 99,
      suffix: "%",
      description: "Environmental data accuracy"
    }
  ],
  role: {
    responsibilities: [
      "Led frontend development and UI/UX design implementation",
      "Architected real-time data visualization system",
      "Implemented responsive design across all device types",
      "Optimized application performance and user experience",
      "Collaborated with backend team for API integration"
    ],
    contributions: [
      { area: "Frontend Development", percentage: 85 },
      { area: "UI/UX Design", percentage: 70 },
      { area: "API Integration", percentage: 60 },
      { area: "Testing & QA", percentage: 45 }
    ]
  },
  challenges: [
    {
      title: "Real-time Data Synchronization",
      problem: "Managing real-time environmental data updates across multiple sensors while maintaining UI responsiveness",
      solution: "Implemented WebSocket connections with optimized data batching and selective component re-rendering",
      timeline: "Week 3-4"
    },
    {
      title: "Performance Optimization",
      problem: "Large datasets causing slow rendering and poor user experience on mobile devices",
      solution: "Introduced virtual scrolling, data pagination, and lazy loading for charts and components",
      timeline: "Week 6-7"
    },
    {
      title: "Cross-browser Compatibility",
      problem: "Inconsistent chart rendering and responsive behavior across different browsers",
      solution: "Implemented progressive enhancement and comprehensive browser testing with fallback solutions",
      timeline: "Week 8-9"
    }
  ],
  links: {
    demo: "https://ecotrack-demo.vercel.app",
    github: "https://github.com/username/ecotrack",
    status: "Active Development"
  },
  colors: {
    primary: "emerald",
    secondary: "blue",
    accent: "purple"
  }
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Counter animation hook
function useCounter(end: number, duration: number = 2) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      let startTime: number;
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration, hasAnimated]);

  return { count, ref };
}

// Components
function Header({ project }: { project: ProjectData }) {
  return (
    <motion.section 
      className="text-center py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="container mx-auto px-4">
        <motion.h1 
          className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-${project.colors.primary}-600 to-${project.colors.secondary}-600 bg-clip-text text-transparent`}
          variants={fadeInUp}
        >
          {project.title}
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed"
          variants={fadeInUp}
        >
          {project.tagline}
        </motion.p>
      </div>
    </motion.section>
  );
}

function ImageCarousel({ images }: { images: ProjectData['images'] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.section 
      className="py-20 bg-white dark:bg-slate-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">
          Project Gallery
        </h2>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-lg font-medium">
                  {images[currentIndex].caption}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-slate-800 transition-colors"
          >
            <ArrowRight className="w-6 h-6 rotate-180 text-slate-800 dark:text-slate-200" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-slate-800 transition-colors"
          >
            <ArrowRight className="w-6 h-6 text-slate-800 dark:text-slate-200" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-blue-600' 
                    : 'bg-slate-300 dark:bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function ProblemSolution({ project }: { project: ProjectData }) {
  return (
    <motion.section 
      className="py-20 bg-slate-50 dark:bg-slate-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div variants={slideInLeft}>
            <div className="bg-red-50 dark:bg-red-900/20 p-8 rounded-2xl border-l-4 border-red-500">
              <h3 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-400">
                The Problem
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>
          </motion.div>

          <motion.div variants={slideInRight}>
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-2xl border-l-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-400">
                Our Solution
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function TechStack({ technologies }: { technologies: ProjectData['technologies'] }) {
  return (
    <motion.section 
      className="py-20 bg-white dark:bg-slate-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">
          Technology Stack
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`${tech.color} mr-3`}>
                  {tech.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-slate-200">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    v{tech.version}
                  </p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                {tech.useCase}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Metrics({ metrics }: { metrics: ProjectData['metrics'] }) {
  return (
    <motion.section 
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">
          Impact & Results
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {metrics.map((metric, index) => {
            const { count, ref } = useCounter(metric.value);
            
            return (
              <motion.div
                key={metric.label}
                ref={ref}
                variants={fadeInUp}
                className="text-center bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg"
              >
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {count}{metric.suffix}
                </div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  {metric.label}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

function RoleContributions({ role }: { role: ProjectData['role'] }) {
  return (
    <motion.section 
      className="py-20 bg-slate-50 dark:bg-slate-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">
          My Role & Contributions
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div variants={slideInLeft}>
            <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-slate-200">
              Key Responsibilities
            </h3>
            <ul className="space-y-3">
              {role.responsibilities.map((responsibility, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">
                    {responsibility}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={slideInRight}>
            <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-slate-200">
              Contribution Breakdown
            </h3>
            <div className="space-y-4">
              {role.contributions.map((contribution, index) => (
                <motion.div
                  key={contribution.area}
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: "100%" }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 dark:text-slate-300">
                      {contribution.area}
                    </span>
                    <span className="text-slate-600 dark:text-slate-400">
                      {contribution.percentage}%
                    </span>
                  </div>
                  <div className="bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${contribution.percentage}%` }}
                      transition={{ delay: index * 0.2, duration: 1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function DevelopmentJourney({ challenges }: { challenges: ProjectData['challenges'] }) {
  return (
    <motion.section 
      className="py-20 bg-white dark:bg-slate-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">
          Development Journey
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              variants={fadeInUp}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index < challenges.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-32 bg-gradient-to-b from-blue-500 to-purple-500" />
              )}
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-6">
                  {index + 1}
                </div>
                
                <div className="flex-1 bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                      {challenge.title}
                    </h3>
                    <span className="text-sm text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-full">
                      {challenge.timeline}
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">
                        Challenge
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300 text-sm">
                        {challenge.problem}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">
                        Solution
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300 text-sm">
                        {challenge.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function CallToAction({ links, colors }: { links: ProjectData['links'], colors: ProjectData['colors'] }) {
  return (
    <motion.section 
      className={`py-20 bg-gradient-to-br from-${colors.primary}-600 to-${colors.secondary}-700 text-white`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Explore?
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Experience the project firsthand or dive into the code to see how it was built.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {links.demo && (
            <motion.a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-slate-800 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5" />
              Live Demo
            </motion.a>
          )}
          
          <motion.a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-slate-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            View Code
          </motion.a>
        </div>
        
        {links.status && (
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              {links.status}
            </span>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}

// Main component
export default function ProjectShowcase({ projectData = sampleProject }: { projectData?: ProjectData }) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header project={projectData} />
      <ImageCarousel images={projectData.images} />
      <ProblemSolution project={projectData} />
      <TechStack technologies={projectData.technologies} />
      <Metrics metrics={projectData.metrics} />
      <RoleContributions role={projectData.role} />
      <DevelopmentJourney challenges={projectData.challenges} />
      <CallToAction links={projectData.links} colors={projectData.colors} />
    </div>
  );
}