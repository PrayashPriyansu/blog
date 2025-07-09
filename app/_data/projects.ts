import { ProjectData } from "../_components/portfolio/ProjectShowcase.types";
import { 
  Code, 
  Palette, 
  Database, 
  Globe, 
  Smartphone, 
  Zap,
  TrendingUp,
  Shield,
  Cloud
} from "lucide-react";

export const projects: Record<string, ProjectData> = {
  ecotrack: {
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
  },

  // Add more projects here
  taskmaster: {
    title: "TaskMaster Pro",
    tagline: "Advanced project management platform with AI-powered insights and team collaboration tools",
    images: [
      {
        src: "/dog-8262506.jpg",
        caption: "Project Dashboard",
        alt: "TaskMaster Pro main project dashboard"
      },
      {
        src: "/red-bull-8143008.jpg",
        caption: "Team Collaboration",
        alt: "Team collaboration and communication interface"
      },
      {
        src: "/dennis-haug-QJ2nHy1YGFY-unsplash.jpg",
        caption: "Analytics Dashboard",
        alt: "Advanced project analytics and reporting"
      }
    ],
    problem: "Traditional project management tools lack intelligent insights and seamless team collaboration, leading to missed deadlines and poor resource allocation.",
    solution: "TaskMaster Pro combines AI-powered project insights with intuitive collaboration tools, providing real-time analytics, automated task prioritization, and seamless team communication to boost productivity and project success rates.",
    technologies: [
      {
        name: "Next.js",
        version: "14.0.0",
        useCase: "Full-stack React framework with SSR",
        icon: <Globe className="w-6 h-6" />,
        color: "text-black"
      },
      {
        name: "Prisma",
        version: "5.0.0",
        useCase: "Type-safe database ORM and migrations",
        icon: <Database className="w-6 h-6" />,
        color: "text-indigo-500"
      },
      {
        name: "PostgreSQL",
        version: "15.0.0",
        useCase: "Robust relational database for complex queries",
        icon: <Database className="w-6 h-6" />,
        color: "text-blue-700"
      },
      {
        name: "Socket.io",
        version: "4.7.0",
        useCase: "Real-time communication and updates",
        icon: <Zap className="w-6 h-6" />,
        color: "text-yellow-500"
      },
      {
        name: "OpenAI API",
        version: "4.0.0",
        useCase: "AI-powered task insights and recommendations",
        icon: <Shield className="w-6 h-6" />,
        color: "text-green-500"
      },
      {
        name: "AWS S3",
        version: "3.0.0",
        useCase: "File storage and document management",
        icon: <Cloud className="w-6 h-6" />,
        color: "text-orange-500"
      }
    ],
    metrics: [
      {
        label: "Productivity Increase",
        value: 150,
        suffix: "%",
        description: "Average team productivity improvement"
      },
      {
        label: "Project Success Rate",
        value: 94,
        suffix: "%",
        description: "Projects completed on time and budget"
      },
      {
        label: "User Satisfaction",
        value: 4.8,
        suffix: "/5",
        description: "Average user rating"
      },
      {
        label: "Active Teams",
        value: 500,
        suffix: "+",
        description: "Teams using the platform daily"
      }
    ],
    role: {
      responsibilities: [
        "Architected full-stack application with Next.js and Prisma",
        "Integrated AI-powered features using OpenAI API",
        "Implemented real-time collaboration with Socket.io",
        "Designed and optimized PostgreSQL database schema",
        "Built responsive UI with advanced data visualization"
      ],
      contributions: [
        { area: "Full-Stack Development", percentage: 90 },
        { area: "AI Integration", percentage: 80 },
        { area: "Database Design", percentage: 85 },
        { area: "UI/UX Implementation", percentage: 75 }
      ]
    },
    challenges: [
      {
        title: "Real-time Collaboration",
        problem: "Implementing seamless real-time updates across multiple users without conflicts or performance issues",
        solution: "Built a robust conflict resolution system using operational transformation and optimistic updates",
        timeline: "Week 4-6"
      },
      {
        title: "AI Integration Complexity",
        problem: "Integrating AI insights while maintaining fast response times and managing API costs",
        solution: "Implemented intelligent caching, batch processing, and context-aware AI queries",
        timeline: "Week 7-9"
      },
      {
        title: "Scalability Challenges",
        problem: "Ensuring the platform could handle growing user base and increasing data volume",
        solution: "Optimized database queries, implemented Redis caching, and used CDN for static assets",
        timeline: "Week 10-12"
      }
    ],
    links: {
      demo: "https://taskmaster-pro.vercel.app",
      github: "https://github.com/username/taskmaster-pro",
      status: "Production Ready"
    },
    colors: {
      primary: "blue",
      secondary: "indigo",
      accent: "purple"
    }
  }
};