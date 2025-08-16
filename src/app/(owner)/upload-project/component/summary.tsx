import { UploadProjectProps } from "@/util/types";

export default function Summary({ deadline, amount, contractAddress, description, projectName, projectType, repoUrl, tokenType }: UploadProjectProps) {
    const date = `${new Date(deadline).getDate()}-${new Date(
      deadline
    ).getMonth() + 1}-${new Date(deadline).getFullYear()}`;

  return (
    <section className="grid gap-5">
      <div className="flex sm:flex-row flex-col justify-between items-start ">
        <div className="grid gap-2">
          <h2>Project Name</h2>
          <p className="text-gray-text">{projectName}</p>
        </div>
        <aside className="bg-dark-gray-pop rounded-[8px] max-w-56 py-3 px-6 flex gap-1">
          <span className="text-gray-text border-r border-gray-text pr-2">
            Bounty amount
          </span>
          <span className="">${amount}</span>
        </aside>
      </div>
      <div className="grid gap-2">
        <h2>Description</h2>
        <p className="text-gray-text">{description}</p>
      </div>
      <div className="flex justify-between items-start">
        <div className="grid gap-2 w-1/2">
          <h2>Project Type</h2>
          <p className="text-gray-text">{projectType}</p>
        </div>
        <div className="grid gap-2 w-1/2">
          <h2>Smart contract</h2>
          <p className="text-gray-text">{date}</p>
        </div>
      </div>
      <div className="flex justify-between sm:flex-row flex-col items-start gap-2">
        <div className="grid gap-2 w-1/2">
          <h2>Repository URL</h2>
          <p className="text-gray-text">{repoUrl}</p>
        </div>
        <div className="grid gap-2 w-1/2">
          <h2>Contract Address</h2>
          <p className="text-gray-text break-all">{contractAddress}</p>
        </div>
      </div>
      <div className="flex justify-between sm:flex-row flex-col items-start gap-2">
        <div className="grid gap-2 w-1/2">
          <h2>Token Type</h2>
          <p className="text-gray-text">{tokenType}</p>
        </div>
      
      </div>
    </section>
  );
}