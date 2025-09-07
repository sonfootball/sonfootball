"use client";

import { useAuth } from "@sonfootball/supabase";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  const { user, loading, signOut } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="text-gray-500">Đang tải...</div>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Vui lòng đăng nhập
            </h1>
            <p className="text-gray-600">
              Bạn cần đăng nhập để xem trang cá nhân.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Thông tin cá nhân
          </h1>

          <div className="space-y-6">
            {/* User Info */}
            <div className="border-b pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Thông tin cơ bản
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tên đầy đủ
                  </label>
                  <p className="text-gray-900">
                    {user.user_metadata?.full_name || "Chưa cập nhật"}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <p className="text-gray-900">{user.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ID người dùng
                  </label>
                  <p className="text-gray-900 text-sm font-mono">{user.id}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ngày tạo tài khoản
                  </label>
                  <p className="text-gray-900">
                    {new Date(user.created_at).toLocaleDateString("vi-VN")}
                  </p>
                </div>
              </div>
            </div>

            {/* Account Actions */}
            <div className="border-b pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Quản lý tài khoản
              </h2>
              <div className="space-y-3">
                <Button variant="outline" className="w-full md:w-auto">
                  Cập nhật thông tin
                </Button>
                <Button variant="outline" className="w-full md:w-auto">
                  Đổi mật khẩu
                </Button>
                <Button variant="outline" className="w-full md:w-auto">
                  Lịch sử đơn hàng
                </Button>
              </div>
            </div>

            {/* Sign Out */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Đăng xuất
              </h2>
              <Button
                onClick={signOut}
                variant="destructive"
                className="w-full md:w-auto"
              >
                Đăng xuất
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
