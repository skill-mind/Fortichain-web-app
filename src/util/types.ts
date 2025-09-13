export type UploadProjectProps = {
  projectName: string;
  description: string;
  projectType: string;
  deadline: Date | null;
  repoUrl: string;
  contractAddress: string;
  amount: number | null;
  priority: string;
};

export interface SubmitReportProps {
  setFormData: React.Dispatch<React.SetStateAction<UploadProjectProps>>;
}

export type ProjectStatus = "audited" | "in-progress";
export type Priority = "low" | "medium" | "high";
export type SeverityLevel = "low" | "medium" | "high";

export interface User {
  id: string;
  name: string;
  avatar: string;
  address: string;
  reputation: number;
  totalAudits: number;
  validationsMade: number;
}

export interface Finding {
  id: string;
  title: string;
  description: string;
  severity: SeverityLevel;
  category: string;
  recommendation: string;
}

export interface Report {
  id: string;
  userId: string;
  projectId: string;
  type: "researcher" | "validator";
  findings: Finding[];
  summary: string;
  methodology: string;
  keyObservations: string[];
  recommendations: string[];
  rating: number;
  submittedAt: string;
  expanded: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  priority: Priority;
  deadline: string;
  bountyAmount: number;
  contractAddress: string;
  githubRepo: string;
  certificate?: string;
  researcher?: User;
  validator?: User;
  researcherReport?: Report;
  validatorReport?: Report;
  createdAt: string;
}
