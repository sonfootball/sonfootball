import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
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
  );
}
