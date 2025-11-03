"use client";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <Sparkles className="w-8 h-8 text-purple-600" />
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Festival 2025
                </span>
            </div>
            {/* <Link
                href="/register"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
                Đăng ký ngay
            </Link> */}
        </div>
    );
}
