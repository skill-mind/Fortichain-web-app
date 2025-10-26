export type UploadProjectProps = {
  projectName: string;
  description: string;
  projectType: string;
  deadline: Date | null;
  repoUrl: string;
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

// export interface Finding {
//   id: string;
//   title: string;
//   description: string;
//   severity: SeverityLevel;
//   category: string;
//   recommendation: string;
// }

// export interface Report {
//   id: string;
//   userId: string;
//   projectId: string;
//   type: "researcher" | "validator";
//   findings: Finding[];
//   summary: string;
//   methodology: string;
//   keyObservations: string[];
//   recommendations: string[];
//   rating: number;
//   submittedAt: string;
//   expanded: boolean;
// }

// export interface Project {
//   id: string;
//   title: string;
//   description: string;
//   status: ProjectStatus;
//   priority: Priority;
//   deadline: string;
//   bountyAmount: number;
//   contractAddress: string;
//   githubRepo: string;
//   certificate?: string;
//   researcher?: User;
//   validator?: User;
//   researcherReport?: Report;
//   validatorReport?: Report;
//   createdAt: string;
// }

export function truncateString(str: string, maxLength = 50) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  }
  return str;
}

// Assigned Validator Type
type AssignedValidator = {
  approval_rate: string;
  available_amount_to_withdraw: string;
  avatar_url: string | null;
  created_at: string;
  email: string | null;
  github_id: number;
  github_profile_url: string;
  id: string;
  kyc_approved: boolean;
  kyc_uri: string | null;
  number_project_validated: number;
  pass_work: string[];
  reports_approved_count: number;
  reports_submitted_count: number;
  reputation: number;
  reputation_score: number;
  status: string;
  successful_validations: number;
  total_amount_withdrawn: string;
  total_bounty_won: string;
  total_validations: number;
  updated_at: string;
  username: string;
  validator_data_uri: string | null;
  wallet_address: string;
};

// Project Type
type Project = {
  assigned_validator_id: string;
  created_at: number;
  deadline: number;
  description: string;
  id: number;
  is_active: boolean;
  is_completed: boolean;
  name: string;
  priority: string;
  project_id: string;
  project_owner: string;
  project_type: string;
  repository_url: string;
  researchers_paid: boolean;
  total_amount: string;
  updated_at: number;
  validator_assigned: boolean;
  validator_paid: boolean;
};

// Researcher Report Type
type ResearcherReport = {
  blockchain_tx_hash: string | null;
  category: string;
  created_at: string;
  description: string;
  id: string;
  potential_risk: string;
  project_id: number;
  recommendation: string;
  researcher_id: string;
  researcher_wallet_address: string;
  resolution_date: string | null;
  reward_amount: string;
  reward_token: string;
  severity: string;
  status: string;
  submission_date: string;
  title: string;
  updated_at: string;
  validation_status: string;
  validator_report_id: string | null;
};

// Statistics Type
type Statistics = {
  approval_rate: number;
  approved_reports: number;
  pending_reports: number;
  rejected_reports: number;
  remaining_budget: string;
  total_paid: string;
  total_reports: number;
  total_validations: number;
  total_votes: number;
};

// Validation Vote Type
type ValidationVote = {
  created_at: string;
  id: string;
  is_valid: boolean;
  project_id: number;
  reason: string;
  report_id: string;
  validation_id: string;
  voted_at: string;
  voter_address: string;
  voter_id: string;
  voting_share_allocated: string;
};

// Validator Validation Type
type ValidatorValidation = {
  category_confirmation: string;
  created_at: string;
  id: string;
  is_valid: boolean;
  reason: string;
  report_id: string;
  severity_level_confirmation: string;
  updated_at: string;
  validated_at: string;
  validation_status: string;
  validator_address: string;
  validator_id: string;
};

// Project Data Type (combining all fields)
type ProjectData = {
  status: string;
  message: string;
  data: {
    approved_researchers: string; // Empty array in the example, adjust type as needed
    assigned_validator: AssignedValidator;
    project: Project;
    researcher_reports: ResearcherReport[];
    statistics: Statistics;
    validation_votes: ValidationVote[];
    validator_reports: string; // Empty array in the example, adjust type as needed
    validator_validations: ValidatorValidation[];
  };
};

// Complete API Response Type
type ProjectDetailsResponse = {
  status: string;
  message: string;
  data: ProjectData;
};

export interface Researcher {
  available_amount_to_withdraw: string;
  avatar_url: string | null;
  created_at: string;
  email: string | null;
  github_id: number;
  id: string;
  is_active: boolean;
  reports_approved_count: number;
  reports_submitted_count: number;
  reputation: number;
  reputation_score: number;
  status: string;
  successful_reports: number;
  total_amount_withdrawn: string;
  total_bounty_won: string;
  total_projects_worked_on: number;
  total_reports: number;
  updated_at: string;
  username: string;
  vulnerability_count: number;
  wallet_address: string;
}
interface ResearchersResponse {
  status: "success" | "error";
  message: string;
  data: Researcher[];
}

export interface Validator {
  approval_rate: string;
  available_amount_to_withdraw: string;
  avatar_url: string | null;
  created_at: string;
  email: string | null;
  github_id: number;
  github_profile_url: string;
  id: string;
  kyc_approved: boolean;
  kyc_uri: string | null;
  number_project_validated: number;
  pass_work: string[];
  reports_approved_count: number;
  reports_submitted_count: number;
  reputation: number;
  reputation_score: number;
  status: string;
  successful_validations: number;
  total_amount_withdrawn: string;
  total_bounty_won: string;
  total_validations: number;
  updated_at: string;
  username: string;
  validator_data_uri: string | null;
  wallet_address: string;
}

// API response type
interface ValidatorsResponse {
  status: "success" | "error";
  message: string;
  data: Validator[];
}

// Export all types
export type {
  AssignedValidator,
  Project,
  ResearcherReport,
  Statistics,
  ValidationVote,
  ValidatorValidation,
  ProjectData,
  ProjectDetailsResponse,
  ResearchersResponse,
  ValidatorsResponse,
};
