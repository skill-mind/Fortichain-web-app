"use client";
import { Router } from "@/provider/route-provider";
import { useContext } from "react";

export default function LauchAppNav() {
  const { setter, route } = useContext(Router);
  console.log(route);
  return (
    <>
      <nav className="bg-dark-gray mx-auto min-w-[850px] hidden xl:block  p-1 rounded-full mt-7 ">
        <ul className="flex justify-between items-center gap-3">
          <li
            className="w-full min-h-50 p-0.5 group             
              hover:from-sky-blue-border hover:to-sky-blue-border
              bg-gradient-to-r group text-base
          rounded-full group"
            onClick={() => {
              setter((prev) => {
                return { ...prev, route: "owner" };
              });
            }}
          >
            <span
              className="px-6 py-3
                  group-hover:from-sky-from group-hover:to-sky-to
                  group-hover:bg-gradient-to-r 
              flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-full w-full"
            >
              Project Owner
            </span>
          </li>
          <span className="w-0.5 min-h-10 bg-dark-border-gray " />
          <li
            className="w-full min-h-50 p-0.5 group             
              hover:from-sky-blue-border hover:to-sky-blue-border
              bg-gradient-to-r group text-base
          rounded-full group"
            onClick={() => {
              setter((prev) => {
                return { ...prev, route: "researcher" };
              });
            }}
          >
            <span
              className="px-6 py-3
                  group-hover:from-sky-from group-hover:to-sky-to
                  group-hover:bg-gradient-to-r 
              flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-full w-full"
            >
              Security Researcher
            </span>
          </li>
          <span className="w-0.5 min-h-10 bg-dark-border-gray " />
          <li
            className="w-full min-h-50 p-0.5 group             
              hover:from-sky-blue-border hover:to-sky-blue-border
              bg-gradient-to-r group text-base
          rounded-full group"
            onClick={() => {
              setter((prev) => {
                return { ...prev, route: "validator" };
              });
            }}
          >
            <span
              className="px-6 py-3
                  group-hover:from-sky-from group-hover:to-sky-to
                  group-hover:bg-gradient-to-r 
              flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-full w-full"
            >
              Validator
            </span>
          </li>
          <span className="w-0.5 min-h-10 bg-dark-border-gray " />
          <li
            className={`min-w-157 min-h-50 p-0.5 group ${
              true ? "bg-sky-blue-border" : "hover:bg-sky-blue-border"
            } rounded-full group mx-1`}
          >
            <span
              className={`px-6 py-3 ${
                true
                  ? " bg-gradient-to-r from-sky-from to-sky-to"
                  : "group-hover:from-sky-from group-hover:to-sky-to bg-gradient-to-r"
              }   flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-full w-full`}
            >
              Launch App
            </span>
          </li>
        </ul>
      </nav>
      <nav className="w-full grid gap-3 xl:hidden">
        <ul className=" flex flex-col sm:flex-row justify-between p-4 sm:p-1 rounded-[12px] sm:rounded-full gap-2 items-stretch w-full">
          <li
            className="bg-dark-gray w-full min-h-50 p-0.5 group             
              hover:from-sky-blue-border hover:to-sky-blue-border
              bg-gradient-to-r group text-base
          rounded-sm group"
            onClick={() => {
              setter((prev) => {
                return { ...prev, route: "owner" };
              });
            }}
          >
            <span
              className="px-6 py-3
                  group-hover:from-sky-from group-hover:to-sky-to
                  group-hover:bg-gradient-to-r
              flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-sm h-full w-full"
            >
              Project Owner
            </span>
          </li>
          <span className="w-0.5 min-h-10 bg-dark-border-gray hidden sm:block" />
          <li
            className="bg-dark-gray w-full min-h-50 p-0.5 group             
              hover:from-sky-blue-border hover:to-sky-blue-border
              bg-gradient-to-r group text-base
          rounded-sm group"
            onClick={() => {
              setter((prev) => {
                return { ...prev, route: "researcher" };
              });
            }}
          >
            <span
              className="px-6 py-3
                  group-hover:from-sky-from group-hover:to-sky-to
                  group-hover:bg-gradient-to-r 
              flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-sm h-full w-full"
            >
              Security Researcher
            </span>
          </li>
        </ul>
        <ul className="flex flex-col sm:flex-row justify-between p-4 sm:p-1 rounded-[12px] sm:rounded-full gap-2 items-stretch w-full">
          <li
            className="bg-dark-gray w-full min-h-50 p-0.5 group             
              hover:from-sky-blue-border hover:to-sky-blue-border
              bg-gradient-to-r group text-base
          rounded-sm group"
            onClick={() => {
              setter((prev) => {
                return { ...prev, route: "validator" };
              });
            }}
          >
            <span
              className="px-6 py-3
                  group-hover:from-sky-from group-hover:to-sky-to
                  group-hover:bg-gradient-to-r
              flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-sm h-full w-full"
            >
              Validator
            </span>
          </li>
          <span className="w-0.5 min-h-10 bg-dark-border-gray hidden sm:block" />
          <li
            className="bg-dark-gray w-full min-h-50 p-0.5 group             
              hover:from-sky-blue-border hover:to-sky-blue-border
              bg-gradient-to-r group text-base
          rounded-sm group"
          >
            <span
              className="px-6 py-3
                  group-hover:from-sky-from group-hover:to-sky-to
                  group-hover:bg-gradient-to-r 
              flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-sm h-full w-full"
            >
              Lauch App
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
}
