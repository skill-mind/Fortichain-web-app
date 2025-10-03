import type { Project, User, Report, Finding } from "./types";

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
