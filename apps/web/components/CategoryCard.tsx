import { Button } from "@/components/ui/button";
import type { Category } from "@sonfootball/supabase/types";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {category.name}
      </h3>
      {category.description && (
        <p className="text-gray-600 text-sm mb-4">{category.description}</p>
      )}
      <Button variant="link" asChild>
        <a href={`/categories/${category.slug}`}>Xem sản phẩm →</a>
      </Button>
    </div>
  );
}
