const seed = {
  name: 'SEED',
  headline: 'Care in Everywhere!',
  subheading: 'Students Special Education',
  cardImage: '/images/seed.webp',
  cardBgColor: '#30D5C7',
  linkText: 'Get a Sneak Peek',
  linkHref: '#',
  detailsTitle:
    'Eliminate wasted time on manual payroll calculations. Leverage automated payrolls, tax updates and payment processes to completion.',
  features: [
    'Institution Management',
    'Automated Student Improvment Forms',
    'Personal Progression Tracking',
    'Student and School Overview',
    'Both Skill & Subject wise Improvement Plans ',
  ],
  detailsImage: '/images/seed-2.webp',
  caseStudy: {
    title: 'SEED – Case Studies',
    intro: 'Personalized student progress tracking and interventions at scale.',
    platforms: [
      {
        label: 'Web Application',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M27 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V25C3 25.5304 3.21071 26.0391 3.58579 26.4142C3.96086 26.7893 4.46957 27 5 27H27C27.5304 27 28.0391 26.7893 28.4142 26.4142C28.7893 26.0391 29 25.5304 29 25V7C29 6.46957 28.7893 5.96086 28.4142 5.58579C28.0391 5.21071 27.5304 5 27 5ZM5 19H7C7.26522 19 7.51957 18.8946 7.70711 18.7071C7.89464 18.5196 8 18.2652 8 18C8 17.7348 7.89464 17.4804 7.70711 17.2929C7.51957 17.1054 7.26522 17 7 17H5V15H7C7.26522 15 7.51957 14.8946 7.70711 14.7071C7.89464 14.5196 8 14.2652 8 14C8 13.7348 7.89464 13.4804 7.70711 13.2929C7.51957 13.1054 7.26522 13 7 13H5V11H7C7.26522 11 7.51957 10.8946 7.70711 10.7071C7.89464 10.5196 8 10.2652 8 10C8 9.73478 7.89464 9.48043 7.70711 9.29289C7.51957 9.10536 7.26522 9 7 9H5V7H10V25H5V19ZM27 25H12V7H27V25Z" fill="black" />
          </svg>
        )
      },
      {
        label: 'Mobile App',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M27 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V25C3 25.5304 3.21071 26.0391 3.58579 26.4142C3.96086 26.7893 4.46957 27 5 27H27C27.5304 27 28.0391 26.7893 28.4142 26.4142C28.7893 26.0391 29 25.5304 29 25V7C29 6.46957 28.7893 5.96086 28.4142 5.58579C28.0391 5.21071 27.5304 5 27 5ZM27 7V12H5V7H27ZM5 14H12V25H5V14ZM27 25H14V14H27V25Z" fill="black"/>
        </svg>
        )
      }
    ],
    insights: {
      title: 'Insights',
      subtitle: 'What we learned',
      items: [
        'Automation frees educators to focus on teaching, not admin.',
        'Transparent progress dashboards improve guardian engagement.',
        'Personalized interventions at scale require clean data flows.'
      ]
    },
    keyFeatures: {
      title: 'Key Features That Made the',
      subtitle: 'Difference',
      items: [
        { title: 'IEP Automation', description: 'Auto-generate plans with configurable templates and workflows.' },
        { title: 'Progress Dashboard', description: 'Cohort and student-level analytics for outcomes.' },
        { title: 'Mobile Parent Access', description: 'Guardians stay involved via simple, clear progress updates.' },
      ]
    },
    features: [
      { 
        title: 'Institution Management', 
        description: 'Centralized operations and educator tooling.',
        subtitle: 'Services Include:',
        items: [
          'Multi-school dashboard and administration',
          'Educator and staff role management',
          'Class scheduling and resource allocation',
          'Parent communication and engagement tools'
        ]
      },
      { 
        title: 'Automated Improvement Forms', 
        description: 'Generate and track individualized development plans.',
        subtitle: 'Key Features:',
        items: [
          'Customizable IEP templates and workflows',
          'Goal setting with measurable targets',
          'Progress tracking with session logs',
          'Automated reminders for review cycles'
        ]
      },
      { 
        title: 'Outcome Analytics', 
        description: 'Skill and subject improvements tracked per cohort.',
        subtitle: 'Analytics Include:',
        items: [
          'Skill-based progress visualization',
          'Cohort performance comparisons',
          'Goal achievement percentages',
          'Intervention effectiveness reports'
        ]
      },
    ],
    items: [
      {
        title: 'IEP Completion',
        summary: 'Automated individualized plans, nudges for educators and guardians.',
        metrics: [
          { label: 'Completion Rate', value: '89%' },
          { label: 'Time Saved', value: '3.2 hrs/wk' },
        ],
        tags: ['Education', 'Automation']
      },
      {
        title: 'Outcome Tracking',
        summary: 'Unified analytics for skill and subject improvements.',
        metrics: [
          { label: 'Improvement', value: '+18%' },
          { label: 'Coverage', value: '100% cohorts' },
        ],
        tags: ['Analytics']
      },
    ],
    solutions: [
      { image: '/images/seed/dashboard-1.webp' },
      { image: '/images/seed/dashboard-2.webp' },
      { image: '/images/seed/dashboard-3.webp' },
      { image: '/images/seed/dashboard-4.webp' },
      { image: '/images/seed/dashboard-5.webp' },
  
    ],
    results: {
      title: 'Education Outcomes',
      columns: ['KPI', 'Before', 'After', 'Improvement'],
      rows: [
        ['IEP completion rate', 'Baseline', '89%', '↑ Completion'],
        ['Teacher time on admin', 'Baseline', '-3.2 hrs/wk', '↓ Workload'],
        ['Outcome improvement', 'Baseline', '+18%', '↑ Learning'],
      ],
    },
    testimonialsConfig: {
      title: 'Educators & Parents',
      subtitle: 'Feedback'
    },
    testimonials: [
      { quote: '“I spend less time on forms and more on students.”', author: '— Special Educator' },
      { quote: '“The progress dashboard makes it easy to stay involved.”', author: '— Parent' }
    ],
    businessImpact: [
      'Higher educator productivity and focus on teaching',
      'Better learning outcomes tracked transparently',
    ],
    wireframes: {
      style: 'style3',
      title: 'Wireframes',
      bgColor: '#00D4AA',
      images: [
        '/images/seed/wireframe-1.webp',
        '/images/seed/wireframe-2.webp',
        '/images/seed/wireframe-3.webp',
        '/images/seed/wireframe-4.webp'
      ]
    }
  }
}

export default seed


