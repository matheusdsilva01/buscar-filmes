import { Loader, Star } from "lucide-react";

export const Skeleton = () => {
  return (
    <div className="bg-black-bright text-white flex flex-col md:flex-row cursor-pointer rounded-lg shadow-slate-700 shadow-[0_0_2px]">
      <div className="w-56 h-[336px] bg-slate-200 animate-pulse md:h-48 mx-auto md:w-32 md:max-w-[128px] object-cover rounded-l-[5px] flex">
        <Loader size={32} className="m-auto text-gray-500" />
      </div>
      <div className="ml-2 py-3 flex-1">
        <div className="h-4 animate-pulse bg-linear-to-r rounded-sm to-slate-500 from-gray-600 mb-2 max-w-2xl w-full"></div>
        <div className="flex animate-pulse">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              fill="currentColor"
              key={index}
              className="w-3 h-3 text-yellow-400"
            />
          ))}
          {Array.from({ length: 10 - 5 }).map((_, index) => (
            <Star key={index} className="w-3 h-3 text-white" />
          ))}
        </div>
        <div>
          <div className="h-2.5 animate-pulse rounded-full bg-linear-to-r to-slate-500 from-gray-600 w-48 mb-4"></div>
          <div className="h-2 animate-pulse rounded-full bg-linear-to-r to-slate-500 from-gray-600 max-w-[360px] mb-2.5"></div>
          <div className="h-2 animate-pulse rounded-full bg-linear-to-r to-slate-500 from-gray-600 mb-2.5 max-w-[460px]"></div>
          <div className="h-2 animate-pulse rounded-full bg-linear-to-r to-slate-500 from-gray-600 max-w-[330px] mb-2.5"></div>
          <div className="h-2 animate-pulse rounded-full bg-linear-to-r to-slate-500 from-gray-600 max-w-[300px] mb-2.5"></div>
          <div className="h-2 animate-pulse rounded-full bg-linear-to-r to-slate-500 from-gray-600 max-w-[360px]"></div>
        </div>
      </div>
    </div>
  );
};
