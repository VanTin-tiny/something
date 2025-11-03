"use client";
import { useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";

export default function ConfirmationPage() {
    const router = useRouter();
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
            <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Đăng ký thành công!</h1>
            <p className="text-gray-600 mb-8 text-center">Cảm ơn bạn đã đăng ký tham gia TechConf 2025 🎉</p>
            <div className="flex gap-4">
                <button onClick={() => router.push("/")} className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300">
                    Về trang chủ
                </button>
                <button onClick={() => router.push("/list")} className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                    Xem danh sách
                </button>
            </div>
        </div>
    );
}
