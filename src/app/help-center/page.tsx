import Image from "next/image";
import logo from "../../../public/Logo (2).svg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
export default function Help() {
  return (
    <>
      <Nav />
      <section className="grid gap-6 px-6 my-36">
        <div className="text-center mt-14">
          <h1 className="text-[32px]">How Can We Help You</h1>
          <p className="text-gray-text text-18">
            Tell us more about your needs so we can help you
          </p>
        </div>

        <div className="bg-dark-gray p-6 rounded-[8px] w-[95%] sm:max-w-2xl mx-auto grid gap-6">
          <Input
            placeholder="Enter your name"
            className="w-full px-6  py-7 rounded-full border border-dark-border-gray"
          />
          <Input
            placeholder="Enter your email address"
            className="w-full px-6  py-7 rounded-full border border-dark-border-gray"
          />
          <Textarea
            className="border border-dark-border-gray min-h-[400px] pt-3"
            placeholder="Enter your message..."
          />
          <button
            type="button"
            className="sm:min-w-[258px] mx-auto min-h-50 p-0.5 group
         bg-sky-blue-border
         hover:bg-sky-blue-border
     rounded-full group w-full sm:w-fit"
          >
            <span
              className="px-6 py-3
             from-sky-from to-sky-to
             bg-gradient-to-r
         flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-full w-full"
            >
              Submit
            </span>
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
