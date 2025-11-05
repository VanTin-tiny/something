"use client";
import { useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";
import OceanWavesBackground from "@/components/OceanWavesBackground";

export default function ConfirmationPage() {
    const router = useRouter();
    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative">
            <OceanWavesBackground />

            <div className="relative z-10 text-center">
                <CheckCircle className="w-20 h-20 text-green-500 mb-6 mx-auto drop-shadow-lg" />
                <h1 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">Đăng ký thành công!</h1>
                <p className="text-white mb-8 text-center drop-shadow-md">
                    Cảm ơn bạn đã đăng ký tham gia Da Nang Sea Festival 2025 🎉
                </p>
                <div className="flex gap-4 justify-center">
                    <button
                        onClick={() => router.push("/")}
                        className="px-6 py-3 bg-white/90 backdrop-blur rounded-lg hover:bg-white transition-all shadow-lg"
                    >
                        Về trang chủ
                    </button>
                    <button
                        onClick={() => router.push("/list")}
                        className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all shadow-lg"
                    >
                        Xem danh sách
                    </button>
                </div>
            </div>
        </div>
    );
}