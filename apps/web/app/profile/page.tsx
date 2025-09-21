import { Suspense } from "react";
import { Header } from "@/components/Header";
import { UserProfileServer } from "@/components/UserProfileServer";
import { ProfileLoading } from "@/components/ProfileLoading";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Suspense fallback={<ProfileLoading />}>
          <UserProfileServer />
        </Suspense>
      </main>
    </div>
  );
}
