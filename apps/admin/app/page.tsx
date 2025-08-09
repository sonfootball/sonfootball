import { Button } from "@sonfootball/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bảng điều khiển - SonFootball Admin",
  description:
    "Quản lý sản phẩm, đơn hàng và khách hàng của SonFootball. Theo dõi doanh thu và báo cáo chi tiết.",
  robots: "noindex, nofollow",
};

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-900">
              SonFootball Admin
            </h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">Admin Dashboard</span>
              <Button variant="outline" size="sm">
                Đăng xuất
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Bảng điều khiển
          </h2>
          <p className="text-gray-600">
            Quản lý sản phẩm, đơn hàng và khách hàng của SonFootball
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mb-8 flex flex-wrap gap-4">
          <Button size="lg">➕ Thêm sản phẩm mới</Button>
          <Button variant="secondary" size="lg">
            📊 Xem báo cáo
          </Button>
          <Button variant="outline" size="lg">
            ⚙️ Cài đặt
          </Button>
          <Button variant="ghost" size="lg">
            📚 Hướng dẫn
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Sản phẩm
            </h3>
            <p className="text-3xl font-bold text-blue-600">0</p>
            <p className="text-sm text-gray-600">Tổng số sản phẩm</p>
            <Button variant="link" size="sm" className="mt-2 p-0 h-auto">
              Xem tất cả →
            </Button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Đơn hàng
            </h3>
            <p className="text-3xl font-bold text-green-600">0</p>
            <p className="text-sm text-gray-600">Đơn hàng mới</p>
            <Button variant="link" size="sm" className="mt-2 p-0 h-auto">
              Xem tất cả →
            </Button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Khách hàng
            </h3>
            <p className="text-3xl font-bold text-purple-600">0</p>
            <p className="text-sm text-gray-600">Khách hàng đăng ký</p>
            <Button variant="link" size="sm" className="mt-2 p-0 h-auto">
              Xem tất cả →
            </Button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Doanh thu
            </h3>
            <p className="text-3xl font-bold text-orange-600">0đ</p>
            <p className="text-sm text-gray-600">Tháng này</p>
            <Button variant="link" size="sm" className="mt-2 p-0 h-auto">
              Xem chi tiết →
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Quản lý nhanh
            </h3>
            <div className="space-y-3">
              <Button className="w-full justify-start">
                📦 Quản lý sản phẩm
              </Button>
              <Button className="w-full justify-start">
                📋 Quản lý đơn hàng
              </Button>
              <Button className="w-full justify-start">
                👥 Quản lý khách hàng
              </Button>
              <Button className="w-full justify-start">
                📊 Báo cáo doanh thu
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Cài đặt hệ thống
            </h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                ⚙️ Cài đặt chung
              </Button>
              <Button variant="outline" className="w-full justify-start">
                💳 Cài đặt thanh toán
              </Button>
              <Button variant="outline" className="w-full justify-start">
                🚚 Cài đặt vận chuyển
              </Button>
              <Button variant="outline" className="w-full justify-start">
                📧 Cài đặt email
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Button Examples */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Tất cả các loại Button từ packages/ui
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Button variant="default" size="sm">
                Default
              </Button>
              <Button variant="default" size="default">
                Default
              </Button>
              <Button variant="default" size="lg">
                Default
              </Button>
            </div>
            <div className="space-y-2">
              <Button variant="secondary" size="sm">
                Secondary
              </Button>
              <Button variant="secondary" size="default">
                Secondary
              </Button>
              <Button variant="secondary" size="lg">
                Secondary
              </Button>
            </div>
            <div className="space-y-2">
              <Button variant="outline" size="sm">
                Outline
              </Button>
              <Button variant="outline" size="default">
                Outline
              </Button>
              <Button variant="outline" size="lg">
                Outline
              </Button>
            </div>
            <div className="space-y-2">
              <Button variant="ghost" size="sm">
                Ghost
              </Button>
              <Button variant="ghost" size="default">
                Ghost
              </Button>
              <Button variant="ghost" size="lg">
                Ghost
              </Button>
            </div>
            <div className="space-y-2">
              <Button variant="link" size="sm">
                Link
              </Button>
              <Button variant="link" size="default">
                Link
              </Button>
              <Button variant="link" size="lg">
                Link
              </Button>
            </div>
            <div className="space-y-2">
              <Button variant="destructive" size="sm">
                Destructive
              </Button>
              <Button variant="destructive" size="default">
                Destructive
              </Button>
              <Button variant="destructive" size="lg">
                Destructive
              </Button>
            </div>
            <div className="space-y-2">
              <Button variant="default" size="icon">
                🔍
              </Button>
              <Button variant="secondary" size="icon">
                ⚙️
              </Button>
              <Button variant="outline" size="icon">
                📝
              </Button>
            </div>
            <div className="space-y-2">
              <Button variant="ghost" size="icon">
                ❌
              </Button>
              <Button variant="destructive" size="icon">
                🗑️
              </Button>
              <Button variant="link" size="icon">
                🔗
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
