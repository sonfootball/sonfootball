export function ProfileLoading() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="animate-pulse">
        {/* Header skeleton */}
        <div className="h-8 bg-gray-200 rounded mb-8 w-1/3"></div>

        {/* User info section skeleton */}
        <div className="border-b pb-6 mb-6">
          <div className="h-6 bg-gray-200 rounded mb-4 w-1/4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              <div className="h-5 bg-gray-200 rounded w-2/3"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              <div className="h-5 bg-gray-200 rounded w-2/3"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              <div className="h-5 bg-gray-200 rounded w-2/3"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              <div className="h-5 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        </div>

        {/* Account actions section skeleton */}
        <div className="border-b pb-6 mb-6">
          <div className="h-6 bg-gray-200 rounded mb-4 w-1/4"></div>
          <div className="space-y-3">
            <div className="h-10 bg-gray-200 rounded w-32"></div>
            <div className="h-10 bg-gray-200 rounded w-32"></div>
            <div className="h-10 bg-gray-200 rounded w-32"></div>
          </div>
        </div>

        {/* Sign out section skeleton */}
        <div>
          <div className="h-6 bg-gray-200 rounded mb-4 w-1/4"></div>
          <div className="h-10 bg-gray-200 rounded w-24"></div>
        </div>
      </div>
    </div>
  );
}
