export const stats = {
  totalChildren: 847,
  redFlagged: 23,
  referralsPending: 11,
  activeCentres: 34,
}

export const children = [
  {
    id: 'TN-CBE-2024-0047',
    name: 'Riya Kumari',
    age: '20 months',
    centre: 'Anganwadi Centre 12, Ukkadam',
    risk: 'red',
    domain: 'Language',
    lastSeen: '2 days ago',
    worker: 'Meenakshi',
    domains: { Physical: 72, Language: 28, Cognitive: 61, SocialEmotional: 45, SelfCare: 68 },
    prevDomains: { Physical: 75, Language: 40, Cognitive: 65, SocialEmotional: 55, SelfCare: 70 },
  },
  {
    id: 'TN-CBE-2024-0089',
    name: 'Karthik Selvam',
    age: '3 years',
    centre: 'Anganwadi Centre 7, Saibaba Colony',
    risk: 'yellow',
    domain: 'Physical',
    lastSeen: '1 day ago',
    worker: 'Selvi',
    domains: { Physical: 48, Language: 72, Cognitive: 68, SocialEmotional: 74, SelfCare: 65 },
    prevDomains: { Physical: 55, Language: 70, Cognitive: 66, SocialEmotional: 72, SelfCare: 63 },
  },
  {
    id: 'TN-CBE-2024-0102',
    name: 'Priya Devi',
    age: '4.5 years',
    centre: 'Anganwadi Centre 3, RS Puram',
    risk: 'red',
    domain: 'Cognitive',
    lastSeen: '3 days ago',
    worker: 'Lakshmi',
    domains: { Physical: 65, Language: 55, Cognitive: 31, SocialEmotional: 60, SelfCare: 72 },
    prevDomains: { Physical: 66, Language: 60, Cognitive: 45, SocialEmotional: 63, SelfCare: 71 },
  },
  {
    id: 'TN-CBE-2024-0134',
    name: 'Arjun Raj',
    age: '2 years',
    centre: 'Anganwadi Centre 19, Gandhipuram',
    risk: 'green',
    domain: null,
    lastSeen: 'Today',
    worker: 'Meenakshi',
    domains: { Physical: 88, Language: 82, Cognitive: 79, SocialEmotional: 85, SelfCare: 91 },
    prevDomains: { Physical: 84, Language: 79, Cognitive: 76, SocialEmotional: 82, SelfCare: 88 },
  },
  {
    id: 'TN-CBE-2024-0156',
    name: 'Surya Kumar',
    age: '5 years',
    centre: 'Anganwadi Centre 12, Ukkadam',
    risk: 'yellow',
    domain: 'Social-Emotional',
    lastSeen: '2 days ago',
    worker: 'Meenakshi',
    domains: { Physical: 80, Language: 75, Cognitive: 70, SocialEmotional: 42, SelfCare: 78 },
    prevDomains: { Physical: 80, Language: 73, Cognitive: 71, SocialEmotional: 55, SelfCare: 77 },
  },
  {
    id: 'TN-CBE-2024-0178',
    name: 'Kavitha Nair',
    age: '18 months',
    centre: 'Anganwadi Centre 7, Saibaba Colony',
    risk: 'green',
    domain: null,
    lastSeen: 'Today',
    worker: 'Selvi',
    domains: { Physical: 91, Language: 88, Cognitive: 85, SocialEmotional: 90, SelfCare: 76 },
    prevDomains: { Physical: 89, Language: 85, Cognitive: 83, SocialEmotional: 88, SelfCare: 74 },
  },
  {
    id: 'TN-CBE-2024-0211',
    name: 'Aarav Mehta',
    age: '30 months',
    centre: 'Anganwadi Centre 12, Ukkadam',
    risk: 'green',
    domain: null,
    lastSeen: 'Today',
    worker: 'Meenakshi',
    domains: { Physical: 84, Language: 77, Cognitive: 73, SocialEmotional: 79, SelfCare: 82 },
    prevDomains: { Physical: 82, Language: 74, Cognitive: 72, SocialEmotional: 77, SelfCare: 80 },
  },
  {
    id: 'TN-CBE-2024-0236',
    name: 'Nila Suresh',
    age: '22 months',
    centre: 'Anganwadi Centre 12, Ukkadam',
    risk: 'yellow',
    domain: 'Language',
    lastSeen: '1 day ago',
    worker: 'Meenakshi',
    domains: { Physical: 63, Language: 39, Cognitive: 54, SocialEmotional: 58, SelfCare: 66 },
    prevDomains: { Physical: 65, Language: 46, Cognitive: 57, SocialEmotional: 62, SelfCare: 64 },
  },
  {
    id: 'TN-CBE-2024-0250',
    name: 'Maya Iyer',
    age: '4 years',
    centre: 'Anganwadi Centre 12, Ukkadam',
    risk: 'green',
    domain: null,
    lastSeen: 'Today',
    worker: 'Meenakshi',
    domains: { Physical: 86, Language: 80, Cognitive: 84, SocialEmotional: 81, SelfCare: 79 },
    prevDomains: { Physical: 85, Language: 78, Cognitive: 82, SocialEmotional: 80, SelfCare: 77 },
  },
  {
    id: 'TN-CBE-2024-0274',
    name: 'Vedh Krishnan',
    age: '3 years',
    centre: 'Anganwadi Centre 12, Ukkadam',
    risk: 'green',
    domain: null,
    lastSeen: 'Today',
    worker: 'Meenakshi',
    domains: { Physical: 81, Language: 74, Cognitive: 78, SocialEmotional: 76, SelfCare: 80 },
    prevDomains: { Physical: 79, Language: 72, Cognitive: 76, SocialEmotional: 75, SelfCare: 78 },
  },
]

export const referralPipeline = [
  { stage: 'Flagged', count: 23 },
  { stage: 'Confirmed', count: 18 },
  { stage: 'Referred', count: 11 },
  { stage: 'Visited', count: 6 },
  { stage: 'Closed', count: 3 },
]

export const riskDistribution = [
  { name: 'Safe', value: 721, color: '#3A9E5F' },
  { name: 'Watch', value: 103, color: '#E8A838' },
  { name: 'Flagged', value: 23, color: '#D64045' },
]

export const workers = [
  { name: 'Meenakshi R.', centre: 'Centre 12, Ukkadam', score: 87, children: 38 },
  { name: 'Selvi K.', centre: 'Centre 7, Saibaba Colony', score: 82, children: 34 },
  { name: 'Lakshmi P.', centre: 'Centre 3, RS Puram', score: 79, children: 41 },
  { name: 'Kavitha M.', centre: 'Centre 19, Gandhipuram', score: 74, children: 36 },
]

export const milestones = {
  Physical: [
    { text: 'Walks independently', status: 'achieved' },
    { text: 'Climbs stairs with support', status: 'achieved' },
    { text: 'Runs without falling', status: 'pending' },
    { text: 'Kicks a ball forward', status: 'overdue' },
  ],
  Language: [
    { text: 'Responds to own name', status: 'overdue' },
    { text: 'Uses 2-word phrases', status: 'overdue' },
    { text: 'Points to objects when named', status: 'pending' },
    { text: 'Follows 2-step instructions', status: 'pending' },
  ],
  Cognitive: [
    { text: 'Imitates actions', status: 'achieved' },
    { text: 'Matches shapes and colours', status: 'pending' },
    { text: 'Solves simple puzzles', status: 'pending' },
  ],
  SocialEmotional: [
    { text: 'Makes eye contact', status: 'overdue' },
    { text: 'Smiles responsively', status: 'pending' },
    { text: 'Plays alongside others', status: 'pending' },
  ],
  SelfCare: [
    { text: 'Holds spoon independently', status: 'achieved' },
    { text: 'Drinks from cup', status: 'achieved' },
    { text: 'Attempts to dress self', status: 'pending' },
  ],
}

export const emotionHistory = [
  { day: 'Mon', emotion: 'happy' },
  { day: 'Tue', emotion: 'sad' },
  { day: 'Wed', emotion: 'sad' },
  { day: 'Thu', emotion: 'scared' },
  { day: 'Fri', emotion: 'sad' },
  { day: 'Sat', emotion: 'angry' },
  { day: 'Sun', emotion: 'sad' },
]

export const priorityActions = [
  {
    type: 'home-visit',
    title: '2 children need home visits',
    detail: 'Riya Kumari (overdue 7 days) · Priya Devi (overdue 4 days)',
    urgent: true,
  },
  {
    type: 'referral',
    title: 'Referral follow-up overdue',
    detail: 'Karthik Selvam · ENT referral · 12 days no update',
    urgent: true,
  },
  {
    type: 'report',
    title: 'Monthly nutrition report due in 2 days',
    detail: 'March 2025 · 38 children · Centre 12, Ukkadam',
    urgent: false,
  },
]

export const dashboardObservations = [
  {
    worker: 'Meenakshi',
    time: '9:42 AM',
    text: 'Riya did not respond when I called her name today',
    domain: 'Language',
  },
  {
    worker: 'Selvi',
    time: '9:15 AM',
    text: 'Karthik has not gained weight in 6 weeks',
    domain: 'Physical',
  },
  {
    worker: 'Lakshmi',
    time: '10:03 AM',
    text: 'Priya cannot match shapes today during activity',
    domain: 'Cognitive',
  },
  {
    worker: 'Meenakshi',
    time: '8:58 AM',
    text: 'Surya avoided all group play this morning',
    domain: 'Social-Emotional',
  },
  {
    worker: 'Selvi',
    time: '11:20 AM',
    text: 'Arjun completed all activities independently today',
    domain: 'Physical',
  },
]

export const workerChildList = children.filter((child) => child.worker === 'Meenakshi')