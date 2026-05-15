import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DoorLoader = () => {
  const [hideLoader, setHideLoader] = useState(false);
  const [doorOpen, setDoorOpen] = useState(false);
  const [knocked, setKnocked] = useState(false);

  useEffect(() => {
    const k = setTimeout(() => setKnocked(true), 600);
    const d = setTimeout(() => setDoorOpen(true), 2000);
    const h = setTimeout(() => setHideLoader(true), 4500);
    return () => { clearTimeout(k); clearTimeout(d); clearTimeout(h); };
  }, []);

  return (
    <AnimatePresence>
      {!hideLoader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#ffffff",
            fontFamily: "'Fredoka One', 'Nunito', sans-serif",
            overflow: "hidden",
          }}
        >
          {/* Soft radial bg */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at center, #fff4ee 0%, #ffffff 70%)",
          }} />

          {/* Polka dot pattern */}
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.35 }}>
            <defs>
              <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="3" fill="#FF6B00" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>

          {/* Floating stars */}
          {[
            { x: "12%", y: "18%", size: 22, delay: 0 },
            { x: "85%", y: "14%", size: 16, delay: 0.3 },
            { x: "8%", y: "72%", size: 18, delay: 0.6 },
            { x: "90%", y: "68%", size: 20, delay: 0.2 },
            { x: "50%", y: "8%", size: 14, delay: 0.5 },
            { x: "75%", y: "85%", size: 16, delay: 0.4 },
            { x: "22%", y: "88%", size: 12, delay: 0.7 },
          ].map((s, i) => (
            <motion.div
              key={i}
              animate={{ rotate: [0, 360], scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 3 + i * 0.4, delay: s.delay, ease: "linear" }}
              style={{
                position: "absolute",
                left: s.x,
                top: s.y,
                fontSize: s.size,
                color: "#FF6B00",
                opacity: 0.5,
                lineHeight: 1,
              }}
            >
              ✦
            </motion.div>
          ))}

          {/* KNOCK KNOCK text */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            style={{ position: "absolute", top: "10%", textAlign: "center", zIndex: 2 }}
          >
            <motion.h1
              animate={knocked ? { y: [0, -6, 0, -4, 0] } : {}}
              transition={{ duration: 0.5, delay: 0 }}
              style={{
                fontSize: "clamp(38px, 8vw, 80px)",
                fontWeight: 900,
                color: "#1a1a1a",
                margin: 0,
                letterSpacing: "-0.01em",
                lineHeight: 1,
                textShadow: "4px 4px 0px rgba(255,107,0,0.2)",
                fontFamily: "'Fredoka One', cursive",
              }}
            >
              KNOCK
              <span style={{ color: "#FF6B00", margin: "0 12px" }}>•</span>
              KNOCK
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{
                height: 5,
                background: "linear-gradient(to right, #FF6B00, #FF9A00, #FF6B00)",
                borderRadius: 99,
                marginTop: 10,
                transformOrigin: "center",
              }}
            />
          </motion.div>

          {/* Main scene */}
          <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", zIndex: 2 }}>

            {/* Ground shadow */}
            <motion.div
              animate={{ scaleX: doorOpen ? 1.15 : 1, opacity: doorOpen ? 0.5 : 0.7 }}
              transition={{ duration: 0.8 }}
              style={{
                position: "absolute",
                bottom: -18,
                width: 240,
                height: 20,
                background: "radial-gradient(ellipse, rgba(255,107,0,0.35) 0%, transparent 75%)",
                borderRadius: "50%",
                filter: "blur(4px)",
              }}
            />

            {/* CARTOON DOOR */}
            <div style={{ perspective: "1800px", position: "relative" }}>

              {/* Door frame / wall */}
              <div style={{
                position: "relative",
                width: 240,
                height: 340,
                borderRadius: "50px 50px 8px 8px",
                background: "#FF6B00",
                border: "5px solid #1a1a1a",
                boxShadow: "6px 8px 0px #1a1a1a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}>
                {/* Brick pattern inside frame */}
                <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.12 }}>
                  <defs>
                    <pattern id="bricks" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="38" height="18" rx="2" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
                      <rect x="20" y="10" width="38" height="18" rx="2" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#bricks)" />
                </svg>

                {/* Inside glow when door opens */}
                <motion.div
                  animate={doorOpen ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "radial-gradient(ellipse at center, #fff9f0 0%, #ffe0b0 60%, transparent 100%)",
                    zIndex: 1,
                  }}
                />

                {/* Star burst inside */}
                <motion.div
                  animate={doorOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  style={{
                    position: "absolute",
                    zIndex: 2,
                    fontSize: 64,
                    filter: "drop-shadow(0 0 8px rgba(255,150,0,0.8))",
                  }}
                >
                  ✨
                </motion.div>

                {/* THE DOOR PANEL */}
                <motion.div
                  initial={{ rotateY: 0 }}
                  animate={doorOpen ? { rotateY: -100 } : { rotateY: 0 }}
                  transition={{ duration: 1.6, ease: [0.68, -0.1, 0.27, 1.1] }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    transformOrigin: "left center",
                    zIndex: 5,
                    borderRadius: "44px 44px 3px 3px",
                    background: "#ffffff",
                    border: "4px solid #1a1a1a",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 16,
                    gap: 12,
                  }}
                >
                  {/* Door top window */}
                  <div style={{
                    width: "80%",
                    height: 80,
                    borderRadius: 60,
                    border: "4px solid #1a1a1a",
                    background: "linear-gradient(135deg, #ffe0b2, #ffcc80)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "inset 2px 2px 0 rgba(255,255,255,0.6)",
                    position: "relative",
                    overflow: "hidden",
                  }}>
                    {/* Window shine */}
                    <div style={{
                      position: "absolute",
                      top: 8, left: 14,
                      width: 18, height: 32,
                      borderRadius: 99,
                      background: "rgba(255,255,255,0.55)",
                      transform: "rotate(-20deg)",
                    }} />
                    <div style={{ fontSize: 32, zIndex: 1 }}>🏠</div>
                  </div>

                  {/* Door panels row */}
                  <div style={{ display: "flex", gap: 10, width: "85%" }}>
                    {[0, 1].map((i) => (
                      <div key={i} style={{
                        flex: 1,
                        height: 70,
                        borderRadius: 12,
                        border: "3.5px solid #1a1a1a",
                        background: "linear-gradient(160deg, #fff8f0, #ffe8cc)",
                        boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.8), 2px 2px 0 #1a1a1a",
                        position: "relative",
                        overflow: "hidden",
                      }}>
                        <div style={{
                          position: "absolute", inset: 5,
                          borderRadius: 8,
                          border: "2px dashed rgba(255,107,0,0.3)",
                        }} />
                      </div>
                    ))}
                  </div>

                  {/* Bottom panel */}
                  <div style={{
                    width: "85%",
                    flex: 1,
                    borderRadius: 12,
                    border: "3.5px solid #1a1a1a",
                    background: "linear-gradient(160deg, #fff8f0, #ffe8cc)",
                    boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.8), 2px 2px 0 #1a1a1a",
                    position: "relative",
                    overflow: "hidden",
                  }}>
                    <div style={{
                      position: "absolute", inset: 6,
                      borderRadius: 8,
                      border: "2px dashed rgba(255,107,0,0.3)",
                    }} />
                  </div>

                  {/* Door handle */}
                  <motion.div
                    animate={knocked ? { x: [0, 4, -2, 4, 0] } : {}}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    style={{
                      position: "absolute",
                      right: 22,
                      top: "55%",
                      transform: "translateY(-50%)",
                    }}
                  >
                    <div style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: "radial-gradient(circle at 35% 30%, #ffe066, #e6a100)",
                      border: "3px solid #1a1a1a",
                      boxShadow: "2px 2px 0 #1a1a1a",
                    }} />
                  </motion.div>

                  {/* Mail slot */}
                  <div style={{
                    position: "absolute",
                    bottom: 52,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 60,
                    height: 10,
                    borderRadius: 4,
                    border: "3px solid #1a1a1a",
                    background: "#1a1a1a",
                  }} />

                  {/* Door number */}
                  <div style={{
                    position: "absolute",
                    bottom: 20,
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: 15,
                    fontWeight: 900,
                    color: "#FF6B00",
                    fontFamily: "'Fredoka One', cursive",
                    background: "white",
                    border: "2.5px solid #1a1a1a",
                    borderRadius: 6,
                    padding: "1px 8px",
                    whiteSpace: "nowrap",
                  }}>
                    #01
                  </div>
                </motion.div>
              </div>

              {/* Door step */}
              <div style={{
                width: 270,
                height: 18,
                background: "#FF6B00",
                border: "4px solid #1a1a1a",
                borderTop: "none",
                borderRadius: "0 0 12px 12px",
                boxShadow: "4px 6px 0 #1a1a1a",
                marginTop: -1,
              }} />
            </div>

            {/* Knocking hand */}
            <motion.div
              initial={{ x: 80, y: -160, opacity: 0, rotate: -30 }}
              animate={knocked && !doorOpen
                ? {
                    x: [80, 40, 70, 35, 75],
                    y: [-160, -180, -160, -178, -160],
                    opacity: [0, 1, 1, 1, 1],
                    rotate: [-30, -20, -30, -20, -30],
                  }
                : doorOpen
                ? { opacity: 0, x: 120, transition: { duration: 0.3 } }
                : { opacity: 0 }
              }
              transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
              style={{
                position: "absolute",
                fontSize: 40,
                filter: "drop-shadow(2px 2px 0 rgba(0,0,0,0.15))",
                zIndex: 10,
                pointerEvents: "none",
              }}
            >
              ✊
            </motion.div>

            {/* KNOCK speech bubbles */}
            {knocked && !doorOpen && (
              <>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  style={{
                    position: "absolute",
                    top: -200,
                    right: -30,
                    background: "#ffffff",
                    border: "3px solid #1a1a1a",
                    borderRadius: 16,
                    padding: "6px 14px",
                    fontWeight: 900,
                    fontSize: 18,
                    color: "#1a1a1a",
                    boxShadow: "3px 3px 0 #1a1a1a",
                    whiteSpace: "nowrap",
                    zIndex: 20,
                  }}
                >
                  Knock!
                  <div style={{
                    position: "absolute",
                    bottom: -12,
                    left: 16,
                    width: 0, height: 0,
                    borderLeft: "8px solid transparent",
                    borderRight: "8px solid transparent",
                    borderTop: "12px solid #1a1a1a",
                  }} />
                  <div style={{
                    position: "absolute",
                    bottom: -9,
                    left: 18,
                    width: 0, height: 0,
                    borderLeft: "6px solid transparent",
                    borderRight: "6px solid transparent",
                    borderTop: "10px solid #ffffff",
                  }} />
                </motion.div>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  style={{
                    position: "absolute",
                    top: -235,
                    right: -60,
                    background: "#FF6B00",
                    border: "3px solid #1a1a1a",
                    borderRadius: 16,
                    padding: "6px 14px",
                    fontWeight: 900,
                    fontSize: 18,
                    color: "#ffffff",
                    boxShadow: "3px 3px 0 #1a1a1a",
                    whiteSpace: "nowrap",
                    zIndex: 20,
                  }}
                >
                  Knock!!
                  <div style={{
                    position: "absolute",
                    bottom: -12,
                    left: 20,
                    width: 0, height: 0,
                    borderLeft: "8px solid transparent",
                    borderRight: "8px solid transparent",
                    borderTop: "12px solid #1a1a1a",
                  }} />
                  <div style={{
                    position: "absolute",
                    bottom: -9,
                    left: 22,
                    width: 0, height: 0,
                    borderLeft: "6px solid transparent",
                    borderRight: "6px solid transparent",
                    borderTop: "10px solid #FF6B00",
                  }} />
                </motion.div>
              </>
            )}

            {/* Welcome text after door opens */}
            <AnimatePresence>
              {doorOpen && (
                <motion.div
                  initial={{ scale: 0.5, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6, ease: "backOut" }}
                  style={{
                    position: "absolute",
                    top: -80,
                    background: "#1a1a1a",
                    border: "3px solid #1a1a1a",
                    borderRadius: 20,
                    padding: "10px 22px",
                    fontWeight: 900,
                    fontSize: 22,
                    color: "#ffffff",
                    boxShadow: "4px 4px 0 #FF6B00",
                    whiteSpace: "nowrap",
                    zIndex: 20,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span>🎉</span>
                  <span>Welcome in!</span>
                  <span>🎉</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom tagline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
              position: "absolute",
              bottom: "8%",
              textAlign: "center",
              zIndex: 2,
            }}
          >
            <motion.p
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              style={{
                fontSize: 13,
                letterSpacing: "0.22em",
                color: "#FF6B00",
                textTransform: "uppercase",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                margin: 0,
              }}
            >
              Opening Your Dream Room Experience...
            </motion.p>
            <div style={{
              marginTop: 12,
              width: 200,
              height: 8,
              background: "#ffe0c2",
              borderRadius: 99,
              overflow: "hidden",
              border: "2px solid #1a1a1a",
              margin: "12px auto 0",
            }}>
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.6, duration: 3.5, ease: "easeInOut" }}
                style={{
                  height: "100%",
                  background: "linear-gradient(to right, #FF6B00, #FF9A00)",
                  borderRadius: 99,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DoorLoader;