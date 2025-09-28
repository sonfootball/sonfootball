import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CategoryCard } from "@/components/CategoryCard";
import { BrandCard } from "@/components/BrandCard";
import { getCategories, getBrands } from "@sonfootball/supabase/server";

export default async function Home() {
  const [categories, brands] = await Promise.all([
    getCategories(),
    getBrands(),
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HeroSection />

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Danh mục sản phẩm
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Thương hiệu</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {brands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </section>

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
