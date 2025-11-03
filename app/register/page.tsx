"use client";
import { useRouter } from "next/navigation";
import { useRegistration } from "@/providers/RegistrationProvider";
import { ArrowLeft } from "lucide-react";

export default function RegisterPage() {
    const { formData, setFormData, addRegistrant } = useRegistration();
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.name && formData.email) {
            addRegistrant(formData);
            router.push("/confirmation");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
                <button onClick={() => router.push("/")} className="mb-4 flex items-center text-purple-600 hover:underline">
                    <ArrowLeft className="w-5 h-5 mr-1" /> Quay lại
                </button>
                <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">Đăng ký tham gia sự kiện</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Họ và tên"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                    >
                        Xác nhận đăng ký
                    </button>
                </form>
            </div>
        </div>
    );
}
