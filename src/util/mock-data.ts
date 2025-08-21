import type { Project, User, Report, Finding } from "./types";

export const mockUsers: User[] = [
  {
    id: "1",
    name: "Ebube",
    avatar: "../../public/Ellipse 1.svg",
    address: "0x1A2B3C4D5E6F7A8B9C0D1E2F3A4B5C6D7E8F9A0B",
    reputation: 91,
    totalAudits: 12,
    validationsMade: 8,
  },
  {
    id: "2",
    name: "Yunus",
    avatar: "../../public/Ellipse 1.svg",
    address: "0x2B3C4D5E6F7A8B9C0D1E2F3A4B5C6D7E8F9A0B1C",
    reputation: 98,
    totalAudits: 5,
    validationsMade: 12,
  },
];

export const mockFindings: Finding[] = [
  {
    id: "1",
    title: "Potential Reentrancy in Buying Report",
    description:
      "The contract contains a potential reentrancy vulnerability in the buying function that could be exploited.",
    severity: "high",
    category: "Security",
    recommendation:
      "Implement proper checks-effects-interactions pattern and use reentrancy guards.",
  },
  {
    id: "2",
    title: "Insufficient Access Control for Validator Registration",
    description:
      "The validator registration function lacks proper access controls.",
    severity: "medium",
    category: "Access Control",
    recommendation: "Add proper role-based access control mechanisms.",
  },
  {
    id: "3",
    title: "Gas Inefficiency in Commerce Voting Loop",
    description: "The voting mechanism uses inefficient gas patterns.",
    severity: "low",
    category: "Gas Optimization",
    recommendation: "Optimize loops and reduce unnecessary storage operations.",
  },
];

export const mockReports: Report[] = [
  {
    id: "1",
    userId: "1",
    projectId: "1",
    type: "researcher",
    findings: mockFindings,
    summary:
      "Smart Contract Audit is a planned, thorough evaluation of a smart contract's codebase, designed to equip researchers with a clear framework for assessing its security, functionality, and efficiency within the Mindblitz ecosystem or related blockchain applications.",
    methodology:
      "The audit was conducted using a combination of automated tools and manual code review techniques.",
    keyObservations: [
      "The smart contract implements a high-security framework with advanced cryptographic protocols",
      "Gas optimization techniques are well-implemented throughout the codebase",
      "Access control mechanisms follow industry best practices",
    ],
    recommendations: [
      "Implement additional reentrancy protection",
      "Add comprehensive event logging",
      "Consider implementing emergency pause functionality",
    ],
    rating: 8.5,
    submittedAt: "2025-08-15",
    expanded: false,
  },
  {
    id: "2",
    userId: "2",
    projectId: "1",
    type: "validator",
    findings: mockFindings.slice(0, 2),
    summary:
      "Validation report confirms the thoroughness of the researcher's findings and provides additional security recommendations.",
    methodology:
      "Cross-validation using independent testing frameworks and security analysis tools.",
    keyObservations: [
      "Researcher findings are accurate and well-documented",
      "Additional edge cases identified during validation",
      "Code quality meets industry standards",
    ],
    recommendations: [
      "Address high-priority security findings immediately",
      "Implement suggested gas optimizations",
      "Add comprehensive test coverage",
    ],
    rating: 9.2,
    submittedAt: "2025-08-16",
    expanded: false,
  },
];

export const mockProjects: Project[] = [
  {
    id: "1",
    title: "Smart contract audit",
    description:
      "Smart Contract Audit is a planned, thorough evaluation of a smart contract’s codebase, designed to equip researchers with a clear framework for assessing its security, functionality, and efficiency within the Mindblitz ecosystem or related blockchain applications. The audit, to be conducted by specialized security experts, will utilize automated analysis tools and in-depth manual code review to uncover potential vulnerabilities, logical errors, or inefficiencies that could lead to exploits or operational issues. Researchers will focus on verifying the contract’s alignment with its specified requirements, compliance with blockchain industry best practices, and robustness against common attack vectors, such as reentrancy, integer overflows, or unauthorized access. The process will result in a detailed report that identifies any issues, evaluates their severity, and provides actionable recommendations for remediation, enabling researchers to ensure the smart contract’s reliability, security, and trustworthiness prior to its deployment in decentralized systems.",
    status: "audited",
    priority: "low",
    deadline: "17th - Aug - 2025",
    bountyAmount: 1200,
    contractAddress: "https://yourproject.com",
    githubRepo: "https://github.com/project/repo",
    certificate: "https://certificate.com/audit-cert",
    researcher: mockUsers[0],
    validator: mockUsers[1],
    researcherReport: mockReports[0],
    validatorReport: mockReports[1],
    createdAt: "2025-08-01",
  },
  {
    id: "2",
    title: "Funding Function audit",
    description:
      "Comprehensive audit of the funding mechanism smart contract to ensure security and efficiency.",
    status: "in-progress",
    priority: "high",
    deadline: "17th - Aug - 2025",
    bountyAmount: 2500,
    contractAddress: "https://fundingproject.com",
    githubRepo: "https://github.com/funding/repo",
    researcher: mockUsers[0],
    createdAt: "2025-08-10",
  },
];

export const mockResercher: ProjectCard[] = [
  {
    id: "1",
    title: "Smart contract audit",
    status: "Available",
    priority: "Low",
    deadline: "17th - Aug - 2025",
  },
  {
    id: "2",
    title: "Funding Function audit",
    status: "Completed",
    priority: "High",
    deadline: "17th - Aug - 2025",
  },
  {
    id: "3",
    title: "Strategy Review",
    status: "Completed",
    priority: "Medium",
    deadline: "5th - Sep - 2025",
  },
  {
    id: "4",
    title: "User Experience Testing",
    status: "Available",
    priority: "High",
    deadline: "22nd - Jul - 2025",
  },
  {
    id: "5",
    title: "Quarterly Financial Report",
    status: "Completed",
    priority: "Low",
    deadline: "30th - Oct - 2025",
  },
  {
    id: "6",
    title: "Product Launch Plan",
    status: "Available",
    priority: "High",
    deadline: "15th - Nov - 2025",
  },
  {
    id: "7",
    title: "Analysis",
    status: "Completed",
    priority: "Low",
    deadline: "10th - Dec - 2025",
  },
  {
    id: "8",
    title: "Social Media Campaign",
    status: "Available",
    priority: "Medium",
    deadline: "25th - Jan - 2026",
  },
  {
    id: "9",
    title: "Performance Evaluation",
    status: "Available",
    priority: "Medium",
    deadline: "30th - Mar - 2026",
  },
];

export interface ProjectCard {
  id: string;
  title: string;
  status: string;
  priority: string;
  deadline: string;
}
export type CardPriority = "Low" | "Medium" | "High";
export interface DetailedProjectCard {
  id: string;
  title: string;
  status: "Audited" | "In Progress";
  priority: CardPriority;
  description: string;
  deadline: string;
  submittedDate: string;
  commentCount: number;
  actionButton: "Go to Project" | "Edit Report";
}

export const detailedProjectsData: DetailedProjectCard[] = [
  {
    id: "1",
    title: "Smart contract audit",
    status: "Audited",
    priority: "Low",
    description:
      "SQL injection vulnerability in user profile update functionality allowing data exfiltration.",
    deadline: "17th - Aug - 2025",
    submittedDate: "17th - Aug - 2025",
    commentCount: 4,
    actionButton: "Go to Project",
  },
  {
    id: "2",
    title: "Platform migration",
    status: "In Progress",
    priority: "Medium",
    description:
      "Migration to new hosting service for improved performance and scalability.",
    deadline: "30th - Sep - 2025",
    submittedDate: "10th - Sep - 2025",
    commentCount: 3,
    actionButton: "Edit Report",
  },
  {
    id: "3",
    title: "User interface redesign",
    status: "In Progress",
    priority: "High",
    description:
      "Complete overhaul of the user interface to enhance user experience.",
    deadline: "22nd - Oct - 2025",
    submittedDate: "01st - Oct - 2025",
    commentCount: 5,
    actionButton: "Edit Report",
  },
  {
    id: "4",
    title: "New feature implementation",
    status: "Audited",
    priority: "High",
    description:
      "Implementation of dark mode feature based on user feedback and requests.",
    deadline: "12th - Nov - 2025",
    submittedDate: "12th - Nov - 2025",
    commentCount: 2,
    actionButton: "Go to Project",
  },
];



export type PriorityLevel = "High" | "Medium" | "Low";

export interface ProjectAlert {
  id: string;
  title: string;
  priority: PriorityLevel;
  timestamp: string;
}

export interface ReportStats {
  reportScore: {
    percentage: number;
    maxPercentage: number;
  };
  totalReports: {
    count: number;
    inProgress: number;
  };
  approvalRate: {
    approved: number;
    total: number;
    description: string;
  };
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface PerformanceSnapshot {
  rank: {
    position: number;
    totalResearchers: number;
  };
  reputation: {
    percentage: number;
    maxPercentage: number;
  };
  achievements: Achievement[];
}

export interface DashboardData {
  newProjectAlerts: ProjectAlert[];
  reportStats: ReportStats;
  performanceSnapshot: PerformanceSnapshot;
}

export const dashboardData: DashboardData = {
  newProjectAlerts: [
    {
      id: "1",
      title: "Smart contract audit",
      priority: "High",
      timestamp: "30 mins ago",
    },
    {
      id: "2",
      title: "Smart contract audit",
      priority: "Medium",
      timestamp: "1 hour ago",
    },
    {
      id: "3",
      title: "Smart contract audit",
      priority: "Low",
      timestamp: "1 day ago",
    },
  ],
  reportStats: {
    reportScore: {
      percentage: 70,
      maxPercentage: 100,
    },
    totalReports: {
      count: 4,
      inProgress: 1,
    },
    approvalRate: {
      approved: 3,
      total: 4,
      description: "Correct Report",
    },
  },
  performanceSnapshot: {
    rank: {
      position: 4,
      totalResearchers: 47,
    },
    reputation: {
      percentage: 91,
      maxPercentage: 100,
    },
    achievements: [
      {
        id: "accuracy-badge",
        title: "Accuracy Badge",
        description: "85%+ accuracy for 3 months",
        icon: "🛡️",
      },
    ],
  },
};


export const badgesData: Badge[] = [
  {
    id: "1",
    title: "Critical Finder",
    status: "Earned",
    description: "Found 3+ critical vulnerabilities",
    icon: "🛡️",
  },
  {
    id: "2",
    title: "Top Researcher",
    status: "Earned",
    description: "Rank in top 100 researchers",
    icon: "🛡️",
  },
  {
    id: "3",
    title: "High Impact",
    status: "Earned",
    description: "Total earnings exceed $10,000",
    icon: "🛡️",
  },
  {
    id: "4",
    title: "Speed Demon",
    status: "Earned",
    description: "First to report a vulnerability",
    icon: "🛡️",
  },
  {
    id: "5",
    title: "Collaboration Master",
    status: "In Progress",
    description: "Identified multiple security flaws",
    progress: 40,
    icon: "🛡️",
  },
];

export type BadgeStatus = "Earned" | "In Progress";
export type WithdrawalStatus = "Pending" | "Completed";

export interface Badge {
  id: string;
  title: string;
  status: BadgeStatus;
  description: string;
  progress?: number; // For in-progress badges (0-100)
  icon: string;
}

export interface WithdrawalRecord {
  id: string;
  date: string;
  project: string;
  to: string; // wallet address
  amount: number;
  status: WithdrawalStatus;
}
export interface BadgeCardProps {
  badge: Badge;
}

export interface WithdrawalTableProps {
  withdrawals: WithdrawalRecord[];
}
export const withdrawalData: WithdrawalRecord[] = [
  {
    id: "1",
    date: "2024-01-20",
    project: "Smart contract audit",
    to: "0x6B8e6d5B3A4F3E9bF7dC4D6aB2bF4D6B3A4D7cF3",
    amount: 2456.78,
    status: "Pending",
  },
  {
    id: "2",
    date: "2024-02-15",
    project: "Website redesign",
    to: "0x6B8e6d5B3A4F3E9bF7dC4D6aB2bF4D6B3A4D7cF3",
    amount: 1123.45,
    status: "Pending",
  },
  {
    id: "3",
    date: "2024-04-05",
    project: "Data analysis report",
    to: "0x6B8e6d5B3A4F3E9bF7dC4D6aB2bF4D6B3A4D7cF3",
    amount: 1200.0,
    status: "Completed",
  },
  {
    id: "4",
    date: "2024-06-18",
    project: "SEO optimization",
    to: "0x6B8e6d5B3A4F3E9bF7dC4D6aB2bF4D6B3A4D7cF3",
    amount: 3450.0,
    status: "Completed",
  },
  {
    id: "5",
    date: "2024-09-25",
    project: "Content creation",
    to: "0x6B8e6d5B3A4F3E9bF7dC4D6aB2bF4D6B3A4D7cF3",
    amount: 4500.0,
    status: "Pending",
  },
];