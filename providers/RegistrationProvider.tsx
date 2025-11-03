"use client";
import React, { createContext, useContext, useState } from "react";

interface FormData {
    name: string;
    email: string;
}

interface Registrant {
    id: number;
    name: string;
    email: string;
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
    const [formData, setFormData] = useState<FormData>({ name: "", email: "" });
    const [registrants, setRegistrants] = useState<Registrant[]>([
        { id: 1, name: "Nguyễn Văn A", email: "vana@email.com", registeredAt: "2024-10-15" },
        { id: 2, name: "Trần Thị B", email: "thib@email.com", registeredAt: "2024-10-16" },
        { id: 3, name: "Lê Hoàng C", email: "hoangc@email.com", registeredAt: "2024-10-18" },
    ]);

    const addRegistrant = (data: FormData) => {
        const newRegistrant = {
            id: registrants.length + 1,
            name: data.name,
            email: data.email,
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
