# @sonfootball/supabase

A shared Supabase package for the SonFootball e-commerce platform, providing centralized database access, authentication, and data management for both web and admin applications.

## Features

- 🔐 **Authentication & Authorization**: Complete auth system with role-based access control
- 🛍️ **E-commerce Data Management**: Products, categories, brands, orders, and variants
- 🤖 **AI Chatbot Support**: Product embeddings for intelligent search and recommendations
- 🎣 **React Hooks**: Pre-built hooks for data fetching and state management
- 🔒 **Security**: Row Level Security (RLS) policies and server-side validation
- 📱 **Cross-Platform**: Works in both web and admin applications
- 🎯 **Type Safety**: Full TypeScript support with generated types

## Quick Start

### Installation

The package is already included in the monorepo. For external projects:

```bash
npm install @sonfootball/supabase
```

### Environment Setup

Create a `.env.local` file in your application:

```env
NEXT_PUBLIC_SUPABASE_URL="your-supabase-project-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"  # For admin operations
```

### Basic Usage

```typescript
import { useAuth, useProducts, products } from "@sonfootball/supabase";

// React hook for authentication
function MyComponent() {
  const { user, loading, signInWithGoogle } = useAuth();
  const { products, loading: productsLoading } = useProducts({ isActive: true });

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {user ? (
        <div>Welcome, {user.email}!</div>
      ) : (
        <button onClick={signInWithGoogle}>Sign In</button>
      )}
      
      {products.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}

// Server-side usage
async function serverFunction() {
  const allProducts = await products.getAll({ isActive: true });
  return allProducts;
}
```

## API Reference

### Core Exports

#### `supabase`
The main Supabase client instance with full TypeScript support.

```typescript
import { supabase } from "@sonfootball/supabase";

// Direct database access
const { data, error } = await supabase
  .from("products")
  .select("*")
  .eq("is_active", true);
```

#### `createServiceRoleClient()`
Creates a service role client for admin operations (server-side only).

```typescript
import { createServiceRoleClient } from "@sonfootball/supabase";

const adminClient = createServiceRoleClient();
```

### Authentication

#### `auth`
Client-side authentication functions.

```typescript
import { auth } from "@sonfootball/supabase";

// Sign in with email/password
await auth.signInWithPassword(email, password);

// Sign in with OAuth
await auth.signInWithOAuth("google");

// Sign out
await auth.signOut();

// Get current session
const { data: { session } } = await auth.getSession();
```

#### `serverAuth`
Server-side authentication helpers for Next.js.

```typescript
import { serverAuth } from "@sonfootball/supabase";

// For Server Components
const supabase = serverAuth.createServerComponentClient();

// For Server Actions
const supabase = serverAuth.createServerActionClient();

// For Route Handlers
const supabase = serverAuth.createRouteHandlerClient();
```

#### `profiles`
User profile management.

```typescript
import { profiles } from "@sonfootball/supabase";

// Get user profile
const profile = await profiles.getById(userId);

// Update profile
await profiles.update(userId, { full_name: "New Name" });

// Create profile
await profiles.create({ id: userId, email: "user@example.com" });
```

#### `requireAuth()` & `requireRole()`
Server-side authentication middleware.

```typescript
import { requireAuth, requireRole } from "@sonfootball/supabase";

// Require any authenticated user
const session = await requireAuth();

// Require specific roles
const { session, profile } = await requireRole(["admin", "staff"]);
```

### Data Management

#### `products`
Product management with full CRUD operations.

```typescript
import { products } from "@sonfootball/supabase";

// Get all active products
const activeProducts = await products.getAll({ isActive: true });

// Get product by ID
const product = await products.getById(productId);

// Get product by slug
const product = await products.getBySlug("nike-mercurial");

// Create product
const newProduct = await products.create({
  name: "Nike Mercurial",
  slug: "nike-mercurial",
  price: 199.99,
  // ... other fields
});

// Update product
await products.update(productId, { price: 179.99 });

// Search products
const searchResults = await products.search("mercurial");
```

#### `categories`
Category management with hierarchical support.

```typescript
import { categories } from "@sonfootball/supabase";

// Get all active categories
const activeCategories = await categories.getAll({ isActive: true });

// Get category tree (with children)
const categoryTree = await categories.getTree();

// Get subcategories
const subcategories = await categories.getSubcategories(parentId);

// Get category path (breadcrumb)
const path = await categories.getPath(categoryId);
```

#### `brands`
Brand management.

```typescript
import { brands } from "@sonfootball/supabase";

// Get all active brands
const activeBrands = await brands.getAll({ isActive: true });

// Search brands
const searchResults = await brands.search("nike");

// Get brands with product count
const brandsWithCount = await brands.getWithProductCount();
```

#### `orders` & `orderItems`
Order management.

```typescript
import { orders, orderItems } from "@sonfootball/supabase";

// Get user orders
const userOrders = await orders.getUserOrders(userId);

// Get order with items
const { order, items } = await orders.getWithItems(orderId);

// Create order
const newOrder = await orders.create({
  user_id: userId,
  total_amount: 299.99,
  // ... other fields
});

// Update order status
await orders.updateStatus(orderId, "processing");
```

### React Hooks

#### `useAuth()`
Authentication state management.

```typescript
import { useAuth } from "@sonfootball/supabase";

function AuthComponent() {
  const { user, loading, signInWithGoogle, signOut } = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {user ? (
        <button onClick={signOut}>Sign Out</button>
      ) : (
        <button onClick={signInWithGoogle}>Sign In</button>
      )}
    </div>
  );
}
```

#### `useProducts()`
Product data fetching with filtering.

```typescript
import { useProducts } from "@sonfootball/supabase";

function ProductList() {
  const { products, loading, error } = useProducts({
    isActive: true,
    categoryId: "some-category-id",
    limit: 20,
    search: "mercurial"
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
```

#### `useCategories()`, `useBrands()`
Category and brand data fetching.

```typescript
import { useCategories, useBrands } from "@sonfootball/supabase";

function Navigation() {
  const { categories } = useCategories({ isActive: true });
  const { brands } = useBrands({ isActive: true });

  return (
    <nav>
      {categories.map(category => (
        <CategoryLink key={category.id} category={category} />
      ))}
      {brands.map(brand => (
        <BrandLink key={brand.id} brand={brand} />
      ))}
    </nav>
  );
}
```

#### `useProductSearch()`, `useBrandSearch()`
Debounced search hooks.

```typescript
import { useProductSearch } from "@sonfootball/supabase";

function SearchComponent() {
  const [query, setQuery] = useState("");
  const { searchResults, loading } = useProductSearch(query, 5);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
      />
      {loading && <div>Searching...</div>}
      {searchResults.map(product => (
        <SearchResult key={product.id} product={product} />
      ))}
    </div>
  );
}
```

### AI Chatbot Support

#### `productEmbeddings`
Product embeddings for AI-powered search and recommendations.

```typescript
import { productEmbeddings } from "@sonfootball/supabase";

// Create embedding for product
await productEmbeddings.create({
  product_id: productId,
  content: "Nike Mercurial Vapor 15 Elite - Professional football boot",
  embedding: [0.1, 0.2, 0.3, ...] // 1536-dimensional vector
});

// Search similar products
const similarProducts = await productEmbeddings.searchSimilar(
  queryEmbedding,
  5
);
```

## Database Schema

The package includes a complete database schema with:

- **Profiles**: User profiles with role-based access
- **Categories**: Hierarchical product categories
- **Brands**: Product brands
- **Products**: Main product information
- **Product Variants**: Size, color, and stock information
- **Orders**: Customer orders
- **Order Items**: Individual items in orders
- **Product Embeddings**: Vector embeddings for AI search

Run the schema file in your Supabase SQL Editor:

```sql
-- Copy and paste the contents of src/schema.sql
```

## Security

The package implements comprehensive security measures:

- **Row Level Security (RLS)**: Database-level access control
- **Role-based Authorization**: Customer, staff, and admin roles
- **Server-side Validation**: All mutations validated server-side
- **Type Safety**: Full TypeScript support prevents runtime errors

## Error Handling

All functions include proper error handling:

```typescript
import { products } from "@sonfootball/supabase";

try {
  const product = await products.getById("invalid-id");
  if (!product) {
    console.log("Product not found");
  }
} catch (error) {
  console.error("Database error:", error);
}
```

## Performance

The package is optimized for performance:

- **Indexed Queries**: Database indexes on frequently queried fields
- **Pagination**: Built-in support for large datasets
- **Caching**: React hooks include caching strategies
- **Debounced Search**: Search hooks include debouncing

## Contributing

When adding new features to the package:

1. **Add Types**: Update `src/types.ts` with new database types
2. **Add Functions**: Create domain-specific functions in separate files
3. **Add Hooks**: Create React hooks for client-side usage
4. **Update Exports**: Add new exports to `src/index.ts`
5. **Add Tests**: Include unit tests for new functionality
6. **Update Schema**: Add any new tables to `src/schema.sql`

## Migration

See the main `MIGRATION_GUIDE.md` for detailed migration instructions from the old Supabase implementation.

## Support

For issues and questions:

1. Check the TypeScript errors for import issues
2. Verify environment variables are set correctly
3. Ensure the Supabase project has the correct schema
4. Review the package exports in `src/index.ts`
