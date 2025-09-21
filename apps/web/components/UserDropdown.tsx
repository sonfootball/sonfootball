import { UserDropdownContent } from "./UserDropdownContent";

export function UserDropdown() {
  return (
    <div className="relative">
      <button
        className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-sm font-medium hover:bg-gray-400 transition-colors"
        aria-label="User menu"
      >
        👤
      </button>
      <UserDropdownContent />
    </div>
  );
}
