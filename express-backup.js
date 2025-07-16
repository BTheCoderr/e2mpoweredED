const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'E2EmpowerED API is running',
    timestamp: new Date().toISOString()
  });
});

// Services API
app.get('/api/services', (req, res) => {
  const services = [
    {
      id: 'transformation',
      name: 'Transformation & Management Consulting',
      description: 'Guiding mission-driven organizations through strategic transitions',
      focus: 'For Organizations navigating system changes or reorganization'
    },
    {
      id: 'design',
      name: 'Organization Design',
      description: 'Aligning people and systems for measurable impact',
      focus: 'For Organizations seeking structural alignment'
    },
    {
      id: 'coaching',
      name: 'Leadership Coaching',
      description: 'Developing effective leadership capabilities',
      focus: 'For Leaders seeking personal and professional growth'
    },
    {
      id: 'training',
      name: 'Training & Facilitation',
      description: 'Building capacity through proven methodologies',
      focus: 'For Teams seeking skill development'
    }
  ];
  res.json(services);
});

// Team API
app.get('/api/team', (req, res) => {
  const team = [
    {
      name: 'Mariama Kurbally',
      role: 'M.ED.L. CEO',
      initials: 'MK'
    },
    {
      name: 'Dr. Antoinette Pearson',
      role: 'Consultant',
      initials: 'AP'
    },
    {
      name: 'Caroleena Vargos, M.A.',
      role: 'Consultant',
      initials: 'CV'
    },
    {
      name: 'Dr. Maria Kicking Horse',
      role: 'Consultant',
      initials: 'MKH'
    },
    {
      name: 'Courtney Rodriguez Sales',
      role: 'Consultant',
      initials: 'CRS'
    },
    {
      name: 'Stephen Pham',
      role: 'Consultant',
      initials: 'SP'
    }
  ];
  res.json(team);
});

// Contact form submission
app.post('/api/contact', (req, res) => {
  const { name, email, organization, role, budget, service, message } = req.body;
  
  // Here you would typically save to a database or send an email
  console.log('New contact form submission:', {
    name,
    email,
    organization,
    role,
    budget,
    service,
    message,
    timestamp: new Date().toISOString()
  });
  
  res.json({
    success: true,
    message: 'Thank you for your interest! We will be in touch soon to schedule your diagnostic consultation.'
  });
});

// Case studies API
app.get('/api/case-studies', (req, res) => {
  const caseStudies = [
    {
      title: 'Advancing Transformation In State Department Of Education',
      description: 'Systemic Inequities Magnified By The Pandemic Required Stronger Leadership And A Redesign Of The Educational Experience For Marginalized Students',
      category: 'Education'
    },
    {
      title: 'Renewing A State\'s Food System Plan For 2030',
      description: 'Comprehensive food system transformation to address sustainability and accessibility challenges',
      category: 'Government'
    },
    {
      title: 'Talent Strategy Rehaul For A $4 Million Interior Design Firm',
      description: 'High Turnover And Misaligned Recruitment Practices Amid Growing Market Competition',
      category: 'Professional Services'
    }
  ];
  res.json(caseStudies);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 E2EmpowerED server running on port ${PORT}`);
  console.log(`📚 Organization Design & Management Firm ready!`);
  console.log(`🌐 Visit http://localhost:${PORT} to get started`);
  console.log(`💼 Supporting mission-driven leaders since 2024`);
}); 