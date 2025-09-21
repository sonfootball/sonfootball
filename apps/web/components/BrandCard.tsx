import { Button } from "@/components/ui/button";
import type { Brand } from "@sonfootball/supabase/types";

interface BrandCardProps {
  brand: Brand;
}

export function BrandCard({ brand }: BrandCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow text-center">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{brand.name}</h3>
      {brand.description && (
        <p className="text-gray-600 text-xs mb-3">{brand.description}</p>
      )}
      <Button variant="link" size="sm" asChild>
        <a href={`/brands/${brand.slug}`}>Xem sản phẩm</a>
      </Button>
    </div>
  );
}
