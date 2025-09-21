import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Có lỗi xảy ra</h1>
        <p className="text-gray-600 mb-6">
          Đã xảy ra lỗi trong quá trình xác thực. Vui lòng thử lại.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Về trang chủ
        </Link>
      </div>
    </div>
  );
}
