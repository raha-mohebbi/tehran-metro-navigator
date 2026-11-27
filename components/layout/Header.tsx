import { TrainFront } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
            <TrainFront size={22} />
          </div>

          <div>
            <h1 className="text-lg font-bold text-gray-900">
              Tehran Metro
            </h1>
            <p className="text-xs text-gray-500">
              Smart Journey Planner
            </p>
          </div>
        </div>

        <span className="hidden text-sm text-gray-500 sm:block">
          مسیریاب هوشمند مترو تهران
        </span>
      </div>
    </header>
  );
};

export default Header;