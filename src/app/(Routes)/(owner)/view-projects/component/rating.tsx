import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function AuditRating() {
  return (
    <form className="bg-dark-gray grid gap-6 p-6 ">
      <h3>My Rating</h3>
      <div className="grid gap-4">
        <label htmlFor="rate">Rate researcher report using the scale 1 - 10</label>
        <div className="flex flex-wrap justify-between items-center">
          {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).map((num) => {
            return (
              <button
                className="relative p-1 bg-dark-border-gray rounded-full"
                type="button"
                key={num}
                >
                    <Input id="rate" type="radio" className="w-ful h-full opacity top-0 left-0 absolute"/>
                <span className="bg-dark-gray-pop rounded-full w-12 h-12 grid place-content-center">
                  {num}
                </span>
              </button>
            );
          })}
        </div>
        <span className="text-sm text-gray-text">
          On our 10-point rating scale, 1 represents the 10% score and 10
          represents 100% the highest possible rating.
        </span>
        <div className="grid gap-4">
          <label htmlFor="note">Additional Feedback</label>
          <Textarea
            id="note"
            className="border-dark-border-gray min-h-56 pl-7"
            placeholder="Provide additional feedback here"
          />
        </div>
        <div className="flex sm:flex-row flex-col justify-between items-center gap-6 my-2">
          <button
            className="w-full min-h-50 p-0.5 group             
            hover:from-sky-blue-border hover:to-sky-blue-border
            bg-gradient-to-r group to-[#312F2F] from-[#212121]
        rounded-full group"
            type="button"
          >
            <span
              className="px-6 py-3
                group-hover:from-sky-from group-hover:to-sky-to
                group-hover:bg-gradient-to-r bg-[#1C1C1C]
            flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-full w-full"
            >
              Cancel
            </span>
          </button>

          <button
            className="w-full min-h-50 p-0.5 group             
            from-sky-blue-border to-sky-blue-border
            bg-gradient-to-r group hover:to-[#312F2F] hover:from-[#212121]
        rounded-full group"
            type="submit"
          >
            <span
              className="px-6 py-3
                from-sky-from to-sky-to
                 bg-gradient-to-r group-hover:bg-[#1C1C1C]
            flex items-center gap-2.5 p-2 justify-center cursor-pointer  rounded-full h-full w-full"
            >
              Submit Rating
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}
