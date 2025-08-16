export type UploadProjectProps = {
    projectName: string;
    description: string;
    projectType: string;
    deadline: Date;
    repoUrl: string;
    contractAddress: string;
    amount: number;
    tokenType: string;
  };

export interface SubmitReportProps {
  setFormData: React.Dispatch<React.SetStateAction<UploadProjectProps>>;
}