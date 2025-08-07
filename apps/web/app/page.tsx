"use client";

import { Header } from "@/components/Header";
import { useCategories } from "@/hooks/useData";
import { useBrands } from "@/hooks/useData";
import { Button } from "@/components/ui/button";

export default function Home() {
  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useCategories();
  const { brands, loading: brandsLoading, error: brandsError } = useBrands();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">SonFootball</h1>
          <p className="text-xl text-gray-600 mb-8">
            Giày đá bóng chính hãng - Nơi mua giày đá bóng uy tín nhất Việt Nam
          </p>
          <div className="flex justify-center space-x-4">
            <Button webVariant="hero" asChild>
              <a href="/products">Xem sản phẩm</a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="/categories">Danh mục</a>
            </Button>
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Danh mục sản phẩm
          </h2>
          {categoriesLoading ? (
            <div className="text-center py-8">
              <div className="text-gray-500">Đang tải danh mục...</div>
            </div>
          ) : categoriesError ? (
            <div className="text-center py-8">
              <div className="text-red-500">Lỗi: {categoriesError}</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  {category.description && (
                    <p className="text-gray-600 text-sm mb-4">
                      {category.description}
                    </p>
                  )}
                  <Button variant="link" asChild>
                    <a href={`/categories/${category.slug}`}>Xem sản phẩm →</a>
                  </Button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Brands Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Thương hiệu</h2>
          {brandsLoading ? (
            <div className="text-center py-8">
              <div className="text-gray-500">Đang tải thương hiệu...</div>
            </div>
          ) : brandsError ? (
            <div className="text-center py-8">
              <div className="text-red-500">Lỗi: {brandsError}</div>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {brands.map((brand) => (
                <div
                  key={brand.id}
                  className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow text-center"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {brand.name}
                  </h3>
                  {brand.description && (
                    <p className="text-gray-600 text-xs mb-3">
                      {brand.description}
                    </p>
                  )}
                  <Button variant="link" size="sm" asChild>
                    <a href={`/brands/${brand.slug}`}>Xem sản phẩm</a>
                  </Button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Features Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Tại sao chọn SonFootball?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Chính hãng 100%
              </h3>
              <p className="text-gray-600 text-sm">
                Tất cả sản phẩm đều là hàng chính hãng, có giấy tờ bảo hành đầy
                đủ
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Giao hàng toàn quốc
              </h3>
              <p className="text-gray-600 text-sm">
                Giao hàng nhanh chóng, an toàn đến tất cả tỉnh thành Việt Nam
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Giá tốt nhất
              </h3>
              <p className="text-gray-600 text-sm">
                Cam kết giá tốt nhất thị trường với nhiều ưu đãi hấp dẫn
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">SonFootball</h3>
            <p className="text-gray-400 mb-4">
              Giày đá bóng chính hãng - Nơi mua giày đá bóng uy tín nhất Việt
              Nam
            </p>
            <div className="text-sm text-gray-400">
              © 2025 SonFootball. Tất cả quyền được bảo lưu.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
