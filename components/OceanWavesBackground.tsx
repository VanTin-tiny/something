export default function OceanWavesBackground() {
    return (
        <>
            <style jsx>{`
                .ocean-background {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(to bottom, #87CEEB 0%, #5FB8E0 30%, #3BA7D4 60%, #1E9FC8 100%);
                    z-index: -1;
                    overflow: hidden;
                    pointer-events: none; 
                }

                .ocean {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                }

    

                .wave {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 200%;
                    height: 100%;
                    background-repeat: repeat-x;
                    animation-iteration-count: infinite;
                    animation-timing-function: linear;
                }

                .wave1 {
                    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,60 C150,90 350,0 600,60 C850,120 1050,30 1200,60 L1200,120 L0,120 Z" fill="%23006d8f" fill-opacity="0.3"/></svg>');
                    background-size: 50% 100%;
                    animation-name: wave-animation;
                    animation-duration: 25s;
                    z-index: 3;
                    opacity: 0.7;
                }

                .wave2 {
                    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,120 L0,120 Z" fill="%230085a8" fill-opacity="0.4"/></svg>');
                    background-size: 50% 100%;
                    animation-name: wave-animation-reverse;
                    animation-duration: 20s;
                    z-index: 2;
                    opacity: 0.5;
                }

                .wave3 {
                    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,50 C250,100 450,20 600,50 C750,80 950,10 1200,50 L1200,120 L0,120 Z" fill="%2300a8cc" fill-opacity="0.5"/></svg>');
                    background-size: 50% 100%;
                    animation-name: wave-animation;
                    animation-duration: 15s;
                    z-index: 1;
                    opacity: 0.3;
                }

                .wave4 {
                    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,70 C300,110 500,30 600,70 C700,110 900,30 1200,70 L1200,120 L0,120 Z" fill="%2300c9e6" fill-opacity="0.6"/></svg>');
                    background-size: 50% 100%;
                    animation-name: wave-animation-reverse;
                    animation-duration: 30s;
                    z-index: 4;
                    opacity: 0.8;
                }

                @keyframes wave-animation {
                    0% {
                        transform: translateX(0) translateZ(0) scaleY(1);
                    }
                    50% {
                        transform: translateX(-25%) translateZ(0) scaleY(0.95);
                    }
                    100% {
                        transform: translateX(-50%) translateZ(0) scaleY(1);
                    }
                }

                @keyframes wave-animation-reverse {
                    0% {
                        transform: translateX(-50%) translateZ(0) scaleY(1);
                    }
                    50% {
                        transform: translateX(-25%) translateZ(0) scaleY(1.05);
                    }
                    100% {
                        transform: translateX(0) translateZ(0) scaleY(1);
                    }
                }

                .foam {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 3px;
                    background: rgba(255, 255, 255, 0.6);
                    box-shadow: 0 -2px 10px rgba(255, 255, 255, 0.4);
                    animation: foam-shimmer 3s ease-in-out infinite;
                    z-index: 5;
                }

                @keyframes foam-shimmer {
                    0%, 100% {
                        opacity: 0.6;
                    }
                    50% {
                        opacity: 1;
                    }
                }

                .sparkle {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-image: 
                        radial-gradient(2px 2px at 20% 30%, white, transparent),
                        radial-gradient(2px 2px at 60% 70%, white, transparent),
                        radial-gradient(1px 1px at 50% 50%, white, transparent),
                        radial-gradient(1px 1px at 80% 10%, white, transparent),
                        radial-gradient(2px 2px at 90% 60%, white, transparent);
                    background-size: 200% 200%;
                    animation: sparkle-move 8s ease-in-out infinite;
                    opacity: 0.4;
                    z-index: 6;
                }

                @keyframes sparkle-move {
                    0%, 100% {
                        background-position: 0% 0%;
                        opacity: 0.3;
                    }
                    50% {
                        background-position: 100% 100%;
                        opacity: 0.6;
                    }
                }
            `}</style>

            <div className="ocean-background">
                <div className="ocean">
                    <div className="wave wave1"></div>
                    <div className="wave wave2"></div>
                    <div className="wave wave3"></div>
                    <div className="wave wave4"></div>
                    <div className="foam"></div>
                    <div className="sparkle"></div>
                </div>
            </div>
        </>
    );
}