import "./globals.css";
import { RegistrationProvider } from "../providers/RegistrationProvider";

export const metadata = {
  title: "Event Registration App",
  description: "Trang đăng ký sự kiện Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="antialiased">
        <RegistrationProvider>{children}</RegistrationProvider>
      </body>
    </html>
  );
}
