const motusone = {
  name: 'MOTUSONE',
  headline: 'Easy Event Transportation',
  subheading: 'Logistics',
  cardImage: '/images/motusone.webp',
  cardBgColor: '#3A66D0',
  linkText: 'Get a Sneak Peek',
  linkHref: '#',
  detailsTitle:
    'Eliminate wasted time on manual payroll calculations. Leverage automated payrolls, tax updates and payment processes to completion.',
  features: [
    'Fleet Live Tracking & Status Update',
    'Event Transportation Analytics',
    'MIS Event Overview',
    'Vehicle And Driver Commission Management',
    'Mobile & Web Application Management',
  ],
  detailsImage: '/images/motusone-2.webp',
  caseStudy: {
    accent: '#172953',
    title: 'Motus One',
    intro: 'Event Transportation Management',
    platforms: [
      {
        label: 'Web Application',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M27 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V25C3 25.5304 3.21071 26.0391 3.58579 26.4142C3.96086 26.7893 4.46957 27 5 27H27C27.5304 27 28.0391 26.7893 28.4142 26.4142C28.7893 26.0391 29 25.5304 29 25V7C29 6.46957 28.7893 5.96086 28.4142 5.58579C28.0391 5.21071 27.5304 5 27 5ZM5 19H7C7.26522 19 7.51957 18.8946 7.70711 18.7071C7.89464 18.5196 8 18.2652 8 18C8 17.7348 7.89464 17.4804 7.70711 17.2929C7.51957 17.1054 7.26522 17 7 17H5V15H7C7.26522 15 7.51957 14.8946 7.70711 14.7071C7.89464 14.5196 8 14.2652 8 14C8 13.7348 7.89464 13.4804 7.70711 13.2929C7.51957 13.10536 7.26522 13 7 13H5V11H7C7.26522 11 7.51957 10.8946 7.70711 10.7071C7.89464 10.5196 8 10.2652 8 10C8 9.73478 7.89464 9.48043 7.70711 9.29289C7.51957 9.10536 7.26522 9 7 9H5V7H10V25H5V19ZM27 25H12V7H27V25Z" fill="black" />
          </svg>
        )
      },
      {
        label: 'Mobile App',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M20 3H12C10.3431 3 9 4.34315 9 6V26C9 27.6569 10.3431 29 12 29H20C21.6569 29 23 27.6569 23 26V6C23 4.34315 21.6569 3 20 3ZM16 27C15.4477 27 15 26.5523 15 26C15 25.4477 15.4477 25 16 25C16.5523 25 17 25.4477 17 26C17 26.5523 16.5523 27 16 27ZM21 23H11V6H21V23Z" fill="black" />
          </svg>
        )
      }
    ],
    insights: {
      title: 'Insights',
      subtitle: 'What we learned',
      items: [
        'Operational visibility reduces coordination overhead for all stakeholders.',
        'Mobile-first workflows help drivers and on-ground staff stay aligned.',
        'Dashboards tailored to roles increase adoption and outcomes.'
      ]
    },
    keyFeatures: {
      title: 'Key Features That Made the',
      subtitle: 'Difference',
      items: [
        { title: 'Live Tracking Map', description: 'Unified vehicle map with status, routes, and ETA overlays.' },
        { title: 'Dispatcher Console', description: 'Assign trips, manage exceptions, and broadcast updates.' },
        { title: 'SLA Alerts', description: 'Real-time exceptions and predicted delays to protect SLAs.' },
        { title: 'Analytics', description: 'Utilization, demand, and performance overview for events.' },
      ]
    },
    features: [
      { 
        title: 'Fleet Live Tracking', 
        description: 'Real-time status, routing, and ETAs for all vehicles and trips.',
        subtitle: 'Services Include:',
        items: [
          'Live vehicle location and status updates',
          'Route optimization and ETA predictions',
          'Driver assignment and dispatch management',
          'Real-time exception alerts and notifications'
        ]
      },
      { 
        title: 'Event Analytics', 
        description: 'MIS overview, utilization, and performance metrics per event.',
        subtitle: 'Key Metrics:',
        items: [
          'Fleet utilization rates and trends',
          'Trip completion and SLA adherence',
          'Demand forecasting and capacity planning',
          'Cost analysis per event and route'
        ]
      },
      { 
        title: 'Commission Mgmt', 
        description: 'Vehicle and driver commissions with automated workflows.',
        subtitle: 'Features:',
        items: [
          'Automated commission calculations',
          'Performance-based incentive tracking',
          'Multi-tier commission structures',
          'Real-time payout reports and approvals'
        ]
      },
    ],
    items: [
      {
        title: 'Fleet Utilization',
        summary: 'Balanced load across routes with ETA predictions for peak windows.',
        metrics: [
          { label: 'Utilization', value: '+21%' },
          { label: 'Late Arrivals', value: '-32%' },
        ],
        tags: ['Logistics', 'Prediction']
      },
      {
        title: 'Ops Efficiency',
        summary: 'Reduced dispatcher calls by surfacing live status to stakeholders.',
        metrics: [
          { label: 'Calls Reduced', value: '-45%' },
          { label: 'SLA Adherence', value: '96%' },
        ],
        tags: ['Operations', 'SLA']
      },
    ],
    solutions: [
      { 
        title: 'Live Tracking Map', 
        description: 'Unified vehicle map with status, routes, and ETA overlays.', 
        image: '/images/motusone.webp',
        imageClassName: 'absolute left-1/2 -translate-x-1/2 bottom-0 w-[90%] h-[240px] object-contain rounded-lg'
      },
      { 
        title: 'Dispatcher Console', 
        description: 'Assign trips, manage exceptions, and broadcast updates.', 
        image: '/images/motusone-2.webp',
        imageClassName: 'absolute left-0 top-0 w-full h-[280px] object-contain rounded-lg'
      },
    ],
    results: {
      heading: ['Results', 'Logistics Outcomes'],
      columns: ['KPI', 'Before', 'After', 'Improvement'],
      rows: [
        ['Late arrivals', 'Baseline', '-32%', '↓ 32%'],
        ['Fleet utilization', 'Baseline', '+21%', '↑ 21%'],
        ['Dispatcher calls', 'High volume', 'Lower volume', '↓ 45%'],
      ],
    },
    testimonialsConfig: {
      title: 'Field & Ops',
      subtitle: 'Feedback'
    },
    testimonials: [
      { quote: '“Live tracking removed a lot of back-and-forth for our team. We can finally focus on decisions, not chasing updates.”', author: '— Ops Lead' },
      { quote: '“The dispatcher console is the control room we always wanted.”', author: '— Senior Dispatcher' }
    ],
    businessImpact: [
      'Improved event SLA adherence and stakeholder experience',
      'More efficient fleet allocation and route planning',
    ],
    wireframes: {
      style: 'style2',
      title: 'Wireframes',
      subtitle: 'Complete platform interface designs',
      bgColor: '#3366FF',
      images: [
        '/images/motusone.webp',
        '/images/motusone-2.webp',
        '/images/motusone.webp',
        '/images/motusone-2.webp',
        '/images/motusone.webp',
        '/images/motusone-2.webp'
      ]
    }
  }
}

export default motusone


