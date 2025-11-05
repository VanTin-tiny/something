"use client";
import React, { createContext, useContext, useState } from "react";

interface FormData {
    name: string;
    email: string;
    sdt: string;
    diaChi: string;
}

interface Registrant {
    name: string;
    diaChi: string;
    registeredAt: string;
}

interface RegistrationContextProps {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    registrants: Registrant[];
    addRegistrant: (data: FormData) => void;
}

const RegistrationContext = createContext<RegistrationContextProps | null>(null);

export const RegistrationProvider = ({ children }: { children: React.ReactNode }) => {
    const [formData, setFormData] = useState<FormData>({ name: "", email: "", sdt: "", diaChi: "" });
    const [registrants, setRegistrants] = useState<Registrant[]>([
        { name: "Võ Văn Tín", diaChi: "Quang Nam", registeredAt: "2024-10-15" },
        { name: "Nguyễn Trung Kiên", diaChi: "Quảng Nam", registeredAt: "2024-10-16" },
        { name: "Nguyễn Lương Thiện", diaChi: "Quảng Nam", registeredAt: "2024-10-18" },
        { name: "Lê Nhật Triều", diaChi: "Quảng Nam", registeredAt: "2024-10-18" },
        { name: "Lê Đức Bảo", diaChi: "Quảng Nam", registeredAt: "2024-10-18" },

    ]);

    const addRegistrant = (data: FormData) => {
        const newRegistrant = {
            name: data.name,
            email: data.email,
            sdt: data.sdt,
            diaChi: data.diaChi,
            registeredAt: new Date().toISOString().split("T")[0],
        };
        setRegistrants([...registrants, newRegistrant]);
    };

    return (
        <RegistrationContext.Provider value={{ formData, setFormData, registrants, addRegistrant }}>
            {children}
        </RegistrationContext.Provider>
    );
};

export const useRegistration = () => {
    const ctx = useContext(RegistrationContext);
    if (!ctx) throw new Error("useRegistration must be used inside RegistrationProvider");
    return ctx;
};
