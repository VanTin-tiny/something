"use client";
import Navbar from "@/components/Navbar";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <main
        className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage:
            "url('https://moc247.com/wp-content/uploads/2023/12/hinh-anh-bien-dep_1-2048x1366.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm -z-10"></div>

        {/* Animated Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Sun */}
          <div className="absolute top-12 right-20 w-20 h-20 rounded-full bg-gradient-radial from-[#FFE5B4] to-[#FFD98E] shadow-[0_0_40px_rgba(255,229,180,0.6)] animate-pulse-slow" />

          {/* Clouds */}
          <div className="absolute top-20 -left-24 w-24 h-10 bg-white/85 rounded-full animate-cloud-float">
            <div className="absolute -top-6 left-2 w-12 h-12 bg-white/85 rounded-full" />
            <div className="absolute -top-5 right-2 w-14 h-10 bg-white/85 rounded-full" />
          </div>
          <div className="absolute top-36 -left-36 w-28 h-11 bg-white/85 rounded-full animate-cloud-float-slow">
            <div className="absolute -top-7 left-3 w-14 h-14 bg-white/85 rounded-full" />
            <div className="absolute -top-6 right-3 w-16 h-11 bg-white/85 rounded-full" />
          </div>

          {/* Palm Trees */}
          <svg className="absolute top-0 left-0 w-32 h-48 opacity-80" viewBox="0 0 100 150">
            <rect x="45" y="80" width="10" height="70" fill="#8B4513" />
            <path d="M50 80 Q20 60 10 50 Q30 55 50 60" fill="#2D5016" />
            <path d="M50 80 Q80 60 90 50 Q70 55 50 60" fill="#2D5016" />
            <path d="M50 75 Q35 50 30 35 Q45 45 50 55" fill="#3A6B35" />
            <path d="M50 75 Q65 50 70 35 Q55 45 50 55" fill="#3A6B35" />
          </svg>

          <svg className="absolute top-0 right-0 w-40 h-56 opacity-80" viewBox="0 0 100 150">
            <rect x="45" y="80" width="10" height="70" fill="#8B4513" />
            <path d="M50 80 Q20 60 10 50 Q30 55 50 60" fill="#2D5016" />
            <path d="M50 80 Q80 60 90 50 Q70 55 50 60" fill="#2D5016" />
            <path d="M50 75 Q35 50 30 35 Q45 45 50 55" fill="#3A6B35" />
            <path d="M50 75 Q65 50 70 35 Q55 45 50 55" fill="#3A6B35" />
          </svg>

          {/* Animated People */}
          <div className="absolute top-[55%] -left-16 animate-walk-beach">
            <svg viewBox="0 0 24 24" className="w-12 h-12 drop-shadow-lg" fill="#FF6B6B">
              <circle cx="12" cy="5" r="3" />
              <path d="M12 9c-2 0-3.5 1-3.5 2.5V14l-2 8h3l1.5-6 1.5 6h3l-2-8v-2.5C15.5 10 14 9 12 9z" />
            </svg>
          </div>

          <div className="absolute top-[58%] -left-16 animate-walk-beach-slow">
            <svg viewBox="0 0 24 24" className="w-12 h-12 drop-shadow-lg" fill="#4ECDC4">
              <circle cx="12" cy="5" r="3" />
              <path d="M12 9c-2 0-3.5 1-3.5 2.5V14l-2 8h3l1.5-6 1.5 6h3l-2-8v-2.5C15.5 10 14 9 12 9z" />
            </svg>
          </div>

          <div className="absolute top-[62%] -left-16 animate-walk-beach-slower">
            <svg viewBox="0 0 24 24" className="w-12 h-12 drop-shadow-lg" fill="#FFE66D">
              <circle cx="12" cy="5" r="3" />
              <path d="M12 9c-2 0-3.5 1-3.5 2.5V14l-2 8h3l1.5-6 1.5 6h3l-2-8v-2.5C15.5 10 14 9 12 9z" />
            </svg>
          </div>

          {/* Surfer */}
          <div className="absolute top-[68%] -left-24 animate-surf">
            <svg width="80" height="60" viewBox="0 0 80 60" className="drop-shadow-lg">
              <ellipse cx="40" cy="45" rx="35" ry="8" fill="#26B5A8" opacity="0.6" />
              <rect x="10" y="40" width="60" height="4" rx="2" fill="#FF6B6B" />
              <circle cx="40" cy="25" r="6" fill="#FFE66D" />
              <path d="M40 32c-4 0-7 2-7 5v5l7 10 7-10v-5c0-3-3-5-7-5z" fill="#4ECDC4" />
            </svg>
          </div>

          {/* Beach Umbrellas */}
          <svg className="absolute bottom-[25%] right-[20%] drop-shadow-lg" width="60" height="80" viewBox="0 0 60 80">
            <path d="M30 20 Q10 25 10 35 L30 30 L50 35 Q50 25 30 20 Z" fill="#FF6B6B" />
            <path d="M30 20 Q20 23 15 35" fill="none" stroke="#CC5555" strokeWidth="1" />
            <path d="M30 20 Q40 23 45 35" fill="none" stroke="#CC5555" strokeWidth="1" />
            <rect x="28" y="30" width="4" height="45" fill="#8B4513" />
          </svg>

          <svg className="absolute bottom-[25%] left-[15%] drop-shadow-lg" width="60" height="80" viewBox="0 0 60 80">
            <path d="M30 20 Q10 25 10 35 L30 30 L50 35 Q50 25 30 20 Z" fill="#4ECDC4" />
            <path d="M30 20 Q20 23 15 35" fill="none" stroke="#3DAAA3" strokeWidth="1" />
            <path d="M30 20 Q40 23 45 35" fill="none" stroke="#3DAAA3" strokeWidth="1" />
            <rect x="28" y="30" width="4" height="45" fill="#8B4513" />
          </svg>

          {/* Volleyball */}
          <div className="absolute top-[45%] left-[35%] animate-bounce-ball">
            <svg width="40" height="40" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="18" fill="#FFF" stroke="#000" strokeWidth="2" />
              <path d="M20 2 Q25 20 20 38" fill="none" stroke="#000" strokeWidth="2" />
              <path d="M38 20 Q20 15 2 20" fill="none" stroke="#000" strokeWidth="2" />
              <path d="M35 10 Q25 20 15 30" fill="none" stroke="#000" strokeWidth="2" />
            </svg>
          </div>

          {/* Waves */}
          <div className="absolute bottom-0 w-full h-24 opacity-30">
            <svg className="absolute bottom-0 w-full h-full animate-wave" viewBox="0 0 1200 100" preserveAspectRatio="none">
              <path d="M0,50 Q300,0 600,50 T1200,50 L1200,100 L0,100 Z" fill="#26B5A8" />
            </svg>
            <svg className="absolute -bottom-2 w-full h-full animate-wave-reverse" viewBox="0 0 1200 100" preserveAspectRatio="none">
              <path d="M0,70 Q300,20 600,70 T1200,70 L1200,100 L0,100 Z" fill="#1F9B8F" />
            </svg>
          </div>
        </div>

        <Navbar />

        <header className="text-center py-20 relative z-10">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
            Da Nang Sea Festival 2025
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
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes cloud-float {
          from { transform: translateX(0); }
          to { transform: translateX(calc(100vw + 200px)); }
        }
        @keyframes cloud-float-slow {
          from { transform: translateX(0); }
          to { transform: translateX(calc(100vw + 200px)); }
        }
        @keyframes walk-beach {
          0% { left: -64px; transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { left: calc(100vw + 64px); transform: translateY(0); }
        }
        @keyframes walk-beach-slow {
          0% { left: -64px; transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { left: calc(100vw + 64px); transform: translateY(0); }
        }
        @keyframes walk-beach-slower {
          0% { left: -64px; transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { left: calc(100vw + 64px); transform: translateY(0); }
        }
        @keyframes surf {
          0% { left: -100px; transform: rotate(-5deg); }
          50% { left: 50%; transform: rotate(5deg); }
          100% { left: calc(100vw + 100px); transform: rotate(-5deg); }
        }
        @keyframes bounce-ball {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes wave-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-cloud-float { animation: cloud-float 20s linear infinite; }
        .animate-cloud-float-slow { animation: cloud-float-slow 25s linear infinite; animation-delay: -5s; }
        .animate-walk-beach { animation: walk-beach 18s linear infinite; }
        .animate-walk-beach-slow { animation: walk-beach-slow 22s linear infinite; animation-delay: -8s; }
        .animate-walk-beach-slower { animation: walk-beach-slower 20s linear infinite; animation-delay: -15s; }
        .animate-surf { animation: surf 20s ease-in-out infinite; }
        .animate-bounce-ball { animation: bounce-ball 2s ease-in-out infinite; }
        .animate-wave { animation: wave 8s linear infinite; }
        .animate-wave-reverse { animation: wave-reverse 6s linear infinite; }
        .animate-fade-in { animation: fadeIn 0.8s ease-out; }
        .animate-fade-in-delay { animation: fadeIn 1s ease-out 0.3s backwards; }
        .animate-slide-up { animation: slideUp 0.8s ease-out; }
        .animate-slide-up-delay { animation: slideUp 0.8s ease-out 0.2s backwards; }
        .animate-bounce-slow { animation: bounceSlow 2s ease-in-out infinite; }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </div>

  )
}







