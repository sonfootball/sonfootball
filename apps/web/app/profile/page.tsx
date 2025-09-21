import { Header } from "@/components/Header";
import { UserInfo } from "@/components/UserInfo";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <UserInfo />
      </main>
    </div>
  );
}
