"use client";

import { Button } from "@sonfootball/ui/button";
import { useAuth } from "@/hooks/useAuth";

export function Header() {
  const { user, loading, signInWithGoogle, signInWithFacebook, signOut } =
    useAuth();

  const handleGoogleSignIn = async () => {
    const { error } = await signInWithGoogle();
    if (error) {
      console.error("Google sign in error:", error);
    }
  };

  const handleFacebookSignIn = async () => {
    const { error } = await signInWithFacebook();
    if (error) {
      console.error("Facebook sign in error:", error);
    }
  };

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">SonFootball</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Trang chủ
            </a>
            <a
              href="/products"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Sản phẩm
            </a>
            <a
              href="/categories"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Danh mục
            </a>
            <a
              href="/brands"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Thương hiệu
            </a>
            <a
              href="/blog"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Blog
            </a>
          </nav>

          {/* Auth buttons */}
          <div className="flex items-center space-x-4">
            {loading ? (
              <div className="text-gray-500">Loading...</div>
            ) : user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">
                  Xin chào, {user.user_metadata?.full_name || user.email}
                </span>
                <a
                  href="/profile"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Hồ sơ
                </a>
                <Button onClick={handleSignOut} variant="outline" size="sm">
                  Đăng xuất
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button
                  onClick={handleGoogleSignIn}
                  variant="outline"
                  size="sm"
                >
                  Google
                </Button>
                <Button
                  onClick={handleFacebookSignIn}
                  variant="outline"
                  size="sm"
                >
                  Facebook
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
