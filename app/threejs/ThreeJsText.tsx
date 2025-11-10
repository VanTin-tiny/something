'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const ThreeJs = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const textMeshesRef = useRef<THREE.Mesh[]>([]);

    const words = ['Đời', 'là', 'bể', 'khổ'];
    const colors = [0xff6b6b, 0x4ecdc4, 0xffe66d, 0x95e1d3];

    useEffect(() => {
        const currentMount = mountRef.current;
        if (!currentMount) return;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x1a1a2e);
        sceneRef.current = scene;

        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 15;
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        currentMount.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const pointLight1 = new THREE.PointLight(0xffffff, 2);
        pointLight1.position.set(10, 10, 10);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0xff00ff, 1.5);
        pointLight2.position.set(-10, -10, 5);
        scene.add(pointLight2);

        const pointLight3 = new THREE.PointLight(0x00ffff, 1.5);
        pointLight3.position.set(0, 10, -5);
        scene.add(pointLight3);

        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 1000;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 50;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.05,
            color: 0xffffff,
            transparent: true,
            opacity: 0.6
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        let animationId: number;
        const animate = () => {
            animationId = requestAnimationFrame(animate);

            particlesMesh.rotation.y += 0.001;
            particlesMesh.rotation.x += 0.0005;

            textMeshesRef.current.forEach((mesh, index) => {
                if (mesh) {
                    mesh.rotation.y += 0.01;
                    mesh.rotation.x = Math.sin(Date.now() * 0.001 + index) * 0.1;
                    mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;

                    const glow = mesh.children[0];
                    if (glow && glow instanceof THREE.Mesh) {
                        glow.material.opacity = 0.3 + Math.sin(Date.now() * 0.002 + index) * 0.2;
                    }
                }
            });

            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
            if (currentMount && renderer.domElement) {
                currentMount.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    const createTextMesh = (text: string, position: { x: number; y: number; z: number }, color: number) => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (!context) return null;

        canvas.width = 512;
        canvas.height = 256;

        context.shadowColor = 'rgba(0, 0, 0, 0.8)';
        context.shadowBlur = 30;
        context.shadowOffsetX = 5;
        context.shadowOffsetY = 5;

        const gradient = context.createLinearGradient(0, 0, 512, 256);
        gradient.addColorStop(0, `#${color.toString(16).padStart(6, '0')}`);
        gradient.addColorStop(0.5, '#ffffff');
        gradient.addColorStop(1, `#${color.toString(16).padStart(6, '0')}`);

        context.fillStyle = gradient;
        context.font = 'Bold 180px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';

        context.strokeStyle = '#000000';
        context.lineWidth = 8;
        context.strokeText(text, 256, 128);
        context.fillText(text, 256, 128);

        const texture = new THREE.CanvasTexture(canvas);

        const geometry = new THREE.BoxGeometry(8, 4, 0.5);

        const materials = [
            new THREE.MeshStandardMaterial({ color: color, metalness: 0.3, roughness: 0.4 }), // right
            new THREE.MeshStandardMaterial({ color: color, metalness: 0.3, roughness: 0.4 }), // left
            new THREE.MeshStandardMaterial({ color: color, metalness: 0.3, roughness: 0.4 }), // top
            new THREE.MeshStandardMaterial({ color: color, metalness: 0.3, roughness: 0.4 }), // bottom
            new THREE.MeshStandardMaterial({ map: texture, transparent: true, emissive: color, emissiveIntensity: 0.3 }), // front
            new THREE.MeshStandardMaterial({ map: texture, transparent: true, emissive: color, emissiveIntensity: 0.3 }), // back
        ];

        const mesh = new THREE.Mesh(geometry, materials);
        mesh.position.set(position.x, position.y, position.z);
        mesh.scale.set(0, 0, 0);

        const glowGeometry = new THREE.PlaneGeometry(9, 5);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.3,
            side: THREE.DoubleSide
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        glow.position.z = -0.3;
        mesh.add(glow);

        return mesh;
    };

    const handleClick = () => {
        if (currentIndex >= words.length || isAnimating) return;

        setIsAnimating(true);
        const scene = sceneRef.current;
        if (!scene) return;

        const word = words[currentIndex];
        const color = colors[currentIndex];

        const spacing = 9;
        const totalWidth = (words.length - 1) * spacing;
        const startX = -totalWidth / 2;
        const x = startX + currentIndex * spacing;
        const y = 0;
        const z = 0;

        const textMesh = createTextMesh(word, { x, y, z }, color);
        if (!textMesh) return;

        scene.add(textMesh);
        textMeshesRef.current[currentIndex] = textMesh;

        const startTime = Date.now();
        const duration = 1000;

        const animateEntrance = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const bounceScale = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            textMesh.scale.set(bounceScale, bounceScale, bounceScale);

            textMesh.rotation.z = (1 - progress) * Math.PI * 4;
            textMesh.position.z = (1 - progress) * 10;

            if (progress < 1) {
                requestAnimationFrame(animateEntrance);
            } else {
                setIsAnimating(false);
                setCurrentIndex(currentIndex + 1);
            }
        };

        animateEntrance();
    };

    const handleReset = () => {
        textMeshesRef.current.forEach(mesh => {
            if (mesh && sceneRef.current) {
                sceneRef.current.remove(mesh);
                mesh.geometry.dispose();

                if (Array.isArray(mesh.material)) {
                    mesh.material.forEach(mat => mat.dispose());
                } else {
                    mesh.material.dispose();
                }

                if (mesh.children.length > 0) {
                    const glow = mesh.children[0];
                    if (glow instanceof THREE.Mesh) {
                        glow.geometry.dispose();
                        if (Array.isArray(glow.material)) {
                            glow.material.forEach(mat => mat.dispose());
                        } else {
                            glow.material.dispose();
                        }
                    }
                }
            }
        });
        textMeshesRef.current = [];
        setCurrentIndex(0);
        setIsAnimating(false);
    };

    return (
        <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
            <div ref={mountRef} style={{ width: '100%', height: '100%' }} />

            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                pointerEvents: 'none',
                zIndex: currentIndex === 0 ? 10 : -1,
                opacity: currentIndex === 0 ? 1 : 0,
                transition: 'opacity 0.5s'
            }}>
                <div style={{
                    fontSize: '48px',
                    color: '#fff',
                    fontWeight: 'bold',
                    textShadow: '0 0 20px rgba(255,255,255,0.5)',
                    marginBottom: '20px'
                }}>
                    👆 Click để bắt đầu hành trình
                </div>
                <div style={{
                    fontSize: '24px',
                    color: '#4ecdc4',
                    fontStyle: 'italic'
                }}>
                    Một câu nói đầy triết lý đang chờ bạn...
                </div>
            </div>

            <div style={{
                position: 'absolute',
                bottom: '40px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '20px',
                zIndex: 10
            }}>
                <button
                    onClick={handleClick}
                    disabled={currentIndex >= words.length || isAnimating}
                    style={{
                        padding: '15px 40px',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        background: currentIndex >= words.length
                            ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                            : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50px',
                        cursor: currentIndex >= words.length || isAnimating ? 'not-allowed' : 'pointer',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                        transition: 'all 0.3s',
                        opacity: currentIndex >= words.length || isAnimating ? 0.5 : 1,
                        transform: 'scale(1)',
                    }}
                    onMouseEnter={(e) => {
                        if (currentIndex < words.length && !isAnimating) {
                            (e.target as HTMLButtonElement).style.transform = 'scale(1.1)';
                            (e.target as HTMLButtonElement).style.boxShadow = '0 15px 40px rgba(245,87,108,0.5)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        (e.target as HTMLButtonElement).style.transform = 'scale(1)';
                        (e.target as HTMLButtonElement).style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
                    }}
                >
                    {currentIndex >= words.length ? '🎉 Hoàn thành!' : `Tiếp theo (${currentIndex + 1}/${words.length})`}
                </button>

                {currentIndex > 0 && (
                    <button
                        onClick={handleReset}
                        style={{
                            padding: '15px 40px',
                            fontSize: '20px',
                            fontWeight: 'bold',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                            transition: 'all 0.3s',
                        }}
                        onMouseEnter={(e) => {
                            (e.target as HTMLButtonElement).style.transform = 'scale(1.1)';
                            (e.target as HTMLButtonElement).style.boxShadow = '0 15px 40px rgba(102,126,234,0.5)';
                        }}
                        onMouseLeave={(e) => {
                            (e.target as HTMLButtonElement).style.transform = 'scale(1)';
                            (e.target as HTMLButtonElement).style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
                        }}
                    >
                        🔄 Làm lại
                    </button>
                )}
            </div>

            <div style={{
                position: 'absolute',
                top: '30px',
                left: '50%',
                transform: 'translateX(-50%)',
                color: '#fff',
                fontSize: '18px',
                fontWeight: 'bold',
                textShadow: '0 0 10px rgba(0,0,0,0.5)',
                padding: '10px 30px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '30px',
                backdropFilter: 'blur(10px)',
            }}>
                {currentIndex === 0 && '✨ Hành trình bắt đầu...'}
                {currentIndex > 0 && currentIndex < words.length && `📖 Đang khám phá... (${currentIndex}/${words.length})`}
                {currentIndex === words.length && '🎊 Chân lý đã được tiết lộ!'}
            </div>
        </div>
    );
};
export default ThreeJs;
