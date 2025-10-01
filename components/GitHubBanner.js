"use client";

import React, { useState, useEffect } from "react";

export default function GitHubBanner() {
  // Load Google Fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&family=JetBrains+Mono:wght@400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const [particles, setParticles] = useState([]);
  const [typingText, setTypingText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "Building amazing things with code 💻",
    "Think. Code. fix. Repeat 🚀",
    "Always learning, always growing 🌱",
  ];

  // Generate particles
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        size: Math.random() * 5 + 2,
        left: Math.random() * 100,
        delay: Math.random() * 20,
        duration: Math.random() * 10 + 15
      });
    }
    setParticles(newParticles);
  }, []);

  // Typing effect
  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[textIndex];
      if (isDeleting) {
        setTypingText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setTypingText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <div className="banner">
      <div className="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="content">
        <div className="greeting">Hi there👋🏻, I&apos;m</div>
        <div className="name">mohamed ourhouch</div>
        <div className="title">software developer</div>
        <div className="typing-effect">{typingText}</div>

        <div className="social-links">
          <a href="https://github.com/ourhouchmohamed97" target="_blank" rel="noopener noreferrer">
            <div className="social-link">
              <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/mohamed-ourhouch-616799293/" target="_blank" rel="noopener noreferrer">
            <div className="social-link">
              <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
          </a>
          <a href="https://www.instagram.com/ourhouch_mohamed/" target="_blank" rel="noopener noreferrer">
            <div className="social-link">
              <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
          </a>
        </div>
      </div>
      <style jsx>{`
        .banner {
          width: 100vw;
          height: 100vh;
          background: linear-gradient(45deg, #433f33, #513218, #84582b, #6d6245, #cd8c3b, #eca131, #f3c959);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          background: rgba(243, 201, 89, 0.4);
          border-radius: 50%;
          animation: float 20s infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }

        .content {
          position: relative;
          z-index: 10;
          text-align: center;
          color: white;
          padding: 40px;
        }

        .greeting {
          font-size: 2.5rem;
          font-weight: 300;
          margin-bottom: 20px;
          opacity: 0;
          animation: fadeInUp 1s ease forwards;
          letter-spacing: 0.5px;
        }

        .name {
          font-size: 5rem;
          font-weight: 900;
          margin-bottom: 20px;
          opacity: 0;
          animation: fadeInUp 1s ease 0.3s forwards;
          text-shadow: 0 0 30px rgba(243, 201, 89, 0.6);
          letter-spacing: -2px;
        }

        .title {
          font-size: 2rem;
          font-weight: 400;
          margin-bottom: 30px;
          opacity: 0;
          animation: fadeInUp 1s ease 0.6s forwards;
          letter-spacing: 1px;
        }

        .typing-effect {
          font-size: 1.5rem;
          font-weight: 400;
          font-family: 'JetBrains Mono', monospace;
          border-right: 3px solid white;
          padding-right: 5px;
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
          opacity: 0;
          animation: fadeInUp 1s ease 0.9s forwards, blink 0.7s step-end infinite;
          min-height: 2rem;
          letter-spacing: 0.5px;
        }

        .social-links {
          margin-top: 40px;
          display: flex;
          gap: 30px;
          justify-content: center;
          opacity: 0;
          animation: fadeInUp 1s ease 1.2s forwards;
        }

        .social-link {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(243, 201, 89, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          cursor: pointer;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(236, 161, 49, 0.5);
        }

        .social-link:hover {
          background: rgba(236, 161, 49, 0.6);
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 10px 30px rgba(243, 201, 89, 0.4);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blink {
          from, to {
            border-color: transparent;
          }
          50% {
            border-color: white;
          }
        }

        .wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100px;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' fill='rgba(255,255,255,0.1)'/%3E%3C/svg%3E");
          background-size: cover;
          opacity: 0.5;
          animation: wave 10s linear infinite;
        }

        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .stats {
          display: flex;
          gap: 40px;
          justify-content: center;
          margin-top: 40px;
          opacity: 0;
          animation: fadeInUp 1s ease 1.5s forwards;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          display: block;
        }

        .stat-label {
          font-size: 1rem;
          opacity: 0.8;
          margin-top: 5px;
        }

        @media (max-width: 768px) {
          .name {
            font-size: 3rem;
          }
          .greeting {
            font-size: 1.5rem;
          }
          .title {
            font-size: 1.5rem;
          }
          .typing-effect {
            font-size: 1rem;
          }
          .stats {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
}
