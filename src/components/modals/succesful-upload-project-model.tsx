import { CheckMark } from "@/icons/github";
import Link from "next/link";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";
import { ClipLoader } from "react-spinners";

type SetIsError = (isSubmitting: boolean) => void;
export default function SuccessModal({
  handler,
  isSubmitting,
  setIsError,
  isError,
}: {
  handler: () => void;
  isSubmitting: boolean;
  setIsError: SetIsError;
  isError: boolean;
}) {
  return (
    <>
      <div
        className="bg-main-bg/75 fixed top-0 h-screen w-full"
        onClick={() => {
          handler();
          setIsError(false);
        }}
      ></div>
      <div className="w-sm rounded-[8px] mx-auto fixed top-50 sm:top-1/4 left-1/2 -translate-x-[50%]">
        {!isError && (
          <div className="bg-[url(../../public/Hero.svg)] bg-center bg-contain h-56 w-full">
            <div className="flex justify-center items-center h-full">
              {isSubmitting ? (
                <ClipLoader size={50} color="#2A67A4" loading={true} />
              ) : (
                <CheckMark />
              )}
            </div>
          </div>
        )}
        {!isSubmitting && (
          <div className="p-6 text-center space-y-4 bg-dark-gray border border-t-0 border-dark-border-gray rounded-b-[8px]">
            <h3 className="text-base">{isError ? "Error" : "Success"}</h3>
            <p className="text-gray-text text-sm">
              {isError
                ? "Error uplaoding project"
                : "Your Project was uploaded successfully. You can view all project under view projects"}
            </p>

            <button
              className="w-full min-h-14 p-0.5 group      
          hover:from-sky-blue-border hover:to-sky-blue-border
          bg-gradient-to-r group to-[#312F2F] from-[#212121]
      rounded-full group"
              type="button"
              onClick={() => {
                handler();
                redirect("/view-projects");
                setIsError(false);
              }}
            >
              <span
                className="px-6 py-7 capitalize text-sm
              group-hover:from-sky-from group-hover:to-sky-to
              group-hover:bg-gradient-to-r bg-[#1C1C1C]
          flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-10 w-full"
              >
                view projects
              </span>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
