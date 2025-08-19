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
    name: "Smart contract audit",
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
    name: "Funding Function audit",
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
