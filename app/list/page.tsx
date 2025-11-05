"use client";
import { useRegistration } from "@/providers/RegistrationProvider";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import OceanWavesBackground from "@/components/OceanWavesBackground";

export default function RegistrantsList() {
    const { registrants } = useRegistration();
    const router = useRouter();

    return (
        <div className="min-h-screen p-8 ">
            <OceanWavesBackground />
            <button onClick={() => router.push("/")} className="flex items-center text-purple-600 hover:underline mb-6">
                <ArrowLeft className="w-5 h-5 mr-1" /> Quay lại
            </button>
            <h1 className="text-3xl font-bold text-center mb-6 text-purple-700">Danh sách người đăng ký</h1>
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6">
                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr className="bg-purple-100 text-left">
                            <th className="px-4 py-2">Họ và tên</th>
                            <th className="px-4 py-2">Địa chỉ</th>
                            <th className="px-4 py-2">Ngày đăng ký</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registrants.map((r, index) => (
                            <tr key={`${r.name}-${index}`} className="border-t hover:bg-purple-50">
                                <td className="px-4 py-2">{r.name}</td>
                                <td className="px-4 py-2">{r.diaChi}</td>
                                <td className="px-4 py-2">{r.registeredAt}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
}
