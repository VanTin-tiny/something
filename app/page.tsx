"use client";
import Navbar from "@/components/Navbar";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://moc247.com/wp-content/uploads/2023/12/hinh-anh-bien-dep_1-2048x1366.jpg')",
      }}
    >
      {/* Overlay làm mờ để nội dung dễ đọc */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm -z-10"></div>

      <Navbar />
      <header className="text-center py-20">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
          Festival Biển Đà Nẵng 2025
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Hòa mình vào không gian sôi động của biển cả, nơi hội tụ âm nhạc, ẩm thực, văn hóa và thể thao biển. Cùng nhau tận hưởng mùa hè rực rỡ và khám phá vẻ đẹp bất tận của Đà Nẵng.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <div className="flex items-center gap-2 text-gray-700">
            <Calendar className="w-5 h-5 text-purple-500" /> 12-14/12/2025
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin className="w-5 h-5 text-purple-500" /> Đà Nẵng
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/register"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Đăng ký ngay
          </Link>
        </div>
      </header>
    </main>
  );
}
