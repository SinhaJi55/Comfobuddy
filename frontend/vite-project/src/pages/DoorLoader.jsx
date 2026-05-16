import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DoorLoader = () => {
  const [hideLoader, setHideLoader] = useState(false);
  const [doorOpen, setDoorOpen] = useState(false);
  const [knocked, setKnocked] = useState(false);

  useEffect(() => {
    const knock = setTimeout(() => setKnocked(true), 700);
    const open = setTimeout(() => setDoorOpen(true), 2200);
    const hide = setTimeout(() => setHideLoader(true), 5000);

    return () => {
      clearTimeout(knock);
      clearTimeout(open);
      clearTimeout(hide);
    };
  }, []);

  return (
    <AnimatePresence>
      {!hideLoader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999999,
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:
              "radial-gradient(circle at center, #fff9f4 0%, #fff4ea 45%, #fffdfb 100%)",
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          {/* BACKGROUND DOTS */}
          <svg
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              opacity: 0.45,
            }}
          >
            <defs>
              <pattern
                id="dots"
                x="0"
                y="0"
                width="38"
                height="38"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="19" cy="19" r="3" fill="#ffbb82" />
              </pattern>
            </defs>

            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>

          {/* FLOATING STARS */}
          {[
            ["10%", "15%"],
            ["84%", "14%"],
            ["13%", "74%"],
            ["90%", "72%"],
            ["20%", "88%"],
            ["76%", "86%"],
          ].map((item, i) => (
            <motion.div
              key={i}
              animate={{
                rotate: [0, 15, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5 + i,
              }}
              style={{
                position: "absolute",
                left: item[0],
                top: item[1],
                color: "#ff922b",
                fontSize: 28,
                opacity: 0.8,
              }}
            >
              ✦
            </motion.div>
          ))}

          {/* TITLE */}
          <div
            style={{
              position: "absolute",
              top: "8%",
              textAlign: "center",
              zIndex: 10,
            }}
          >
            <motion.h1
              initial={{ y: -25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              style={{
                margin: 0,
                fontSize: "clamp(40px,7vw,86px)",
                fontWeight: 900,
                color: "#171717",
                letterSpacing: "-2px",
                textShadow: "0 8px 0 rgba(255,170,90,0.35)",
              }}
            >
              KNOCK
              <span
                style={{
                  color: "#ff7a00",
                  margin: "0 14px",
                }}
              >
                •
              </span>
              KNOCK
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              style={{
                width: 420,
                maxWidth: "80vw",
                height: 5,
                margin: "18px auto 0",
                borderRadius: 999,
                background:
                  "linear-gradient(to right,#ff7a00,#ffb347,#ff7a00)",
                transformOrigin: "center",
              }}
            />
          </div>

          {/* CENTER AREA */}
          <div
            style={{
              position: "relative",
              zIndex: 10,
            }}
          >
            {/* FLOOR LIGHT */}
            <motion.div
              animate={{
                scale: doorOpen ? 1.25 : 1,
                opacity: doorOpen ? 0.5 : 0.7,
              }}
              transition={{ duration: 0.6 }}
              style={{
                position: "absolute",
                bottom: -35,
                left: "50%",
                transform: "translateX(-50%)",
                width: 300,
                height: 45,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,150,0,0.5), transparent 70%)",
                filter: "blur(12px)",
              }}
            />

            {/* DOOR FRAME */}
            <div
              style={{
                width: 260,
                height: 390,
                position: "relative",
                perspective: "1600px",
              }}
            >
              {/* FRAME */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg,#b86a20 0%,#8c4c12 100%)",
                  border: "7px solid #5a2d0b",
                  borderRadius: 6,
                  boxShadow:
                    "0 15px 30px rgba(0,0,0,0.25), inset 0 0 8px rgba(255,255,255,0.15)",
                  overflow: "hidden",
                }}
              >
                {/* INNER LIGHT */}
                <motion.div
                  animate={{
                    opacity: doorOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(circle,#fff3d8 0%, rgba(255,255,255,0) 75%)",
                  }}
                />
              </div>

              {/* DOOR */}
              <motion.div
                animate={doorOpen ? { rotateY: -105 } : { rotateY: 0 }}
                transition={{
                  duration: 1.5,
                  ease: [0.7, 0, 0.2, 1],
                }}
                style={{
                  position: "absolute",
                  inset: 0,
                  transformOrigin: "left center",
                  background:
                    "linear-gradient(145deg,#d98a32 0%,#a95c1d 45%,#7b3f10 100%)",
                  border: "6px solid #68350d",
                  borderRadius: 4,
                  boxSizing: "border-box",
                  boxShadow:
                    "inset -8px 0 12px rgba(0,0,0,0.25), inset 8px 0 10px rgba(255,255,255,0.12)",
                }}
              >
                {/* WOOD GRAIN */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.02) 2px, transparent 4px, transparent 8px)",
                    mixBlendMode: "soft-light",
                    opacity: 0.5,
                  }}
                />

                {/* TOP PANEL */}
                <div
                  style={{
                    position: "absolute",
                    top: 28,
                    left: 28,
                    right: 28,
                    height: 165,
                    border: "5px solid #743c10",
                    background:
                      "linear-gradient(145deg,#be7126,#d98b37,#9d5317)",
                    boxShadow:
                      "inset 0 0 15px rgba(255,255,255,0.08), inset 0 -10px 18px rgba(0,0,0,0.18)",
                  }}
                >
                  {/* REFLECTION */}
                  <div
                    style={{
                      position: "absolute",
                      top: 15,
                      left: 18,
                      width: 90,
                      height: 180,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(to right, rgba(255,255,255,0.16), transparent)",
                      transform: "rotate(18deg)",
                      filter: "blur(2px)",
                    }}
                  />
                </div>

                {/* BOTTOM PANEL */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 35,
                    left: 38,
                    right: 38,
                    height: 95,
                    border: "5px solid #743c10",
                    background:
                      "linear-gradient(145deg,#be7126,#d98b37,#9d5317)",
                    boxShadow:
                      "inset 0 0 15px rgba(255,255,255,0.08), inset 0 -10px 18px rgba(0,0,0,0.18)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 8,
                      left: 18,
                      width: 70,
                      height: 100,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(to right, rgba(255,255,255,0.12), transparent)",
                      transform: "rotate(20deg)",
                      filter: "blur(2px)",
                    }}
                  />
                </div>

                {/* HANDLE */}
                <div
                  style={{
                    position: "absolute",
                    right: 22,
                    top: "52%",
                    transform: "translateY(-50%)",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <div
                    style={{
                      width: 30,
                      height: 7,
                      borderRadius: 10,
                      background:
                        "linear-gradient(180deg,#e8e8e8,#bfbfbf)",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                    }}
                  />

                  <div
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(180deg,#f5f5f5,#bbbbbb)",
                      border: "2px solid #9e9e9e",
                    }}
                  />
                </div>

                {/* KEY LOCK */}
                <div
                  style={{
                    position: "absolute",
                    right: 24,
                    top: "60%",
                    width: 18,
                    height: 22,
                    borderRadius: 12,
                    background:
                      "linear-gradient(180deg,#f2f2f2,#bdbdbd)",
                    border: "2px solid #979797",
                  }}
                >
                  <div
                    style={{
                      width: 4,
                      height: 7,
                      borderRadius: 4,
                      background: "#555",
                      margin: "7px auto",
                    }}
                  />
                </div>
              </motion.div>
            </div>

            {/* REALISTIC HAND */}
            <motion.div
              initial={{
                opacity: 0,
                x: 55,
              }}
              animate={
                knocked && !doorOpen
                  ? {
                      opacity: 1,
                      x: [55, 20, 55, 18, 55],
                    }
                  : doorOpen
                  ? {
                      opacity: 0,
                      x: 120,
                    }
                  : {}
              }
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              style={{
                position: "absolute",
                right: -10,
                top: "36%",
                zIndex: 50,
                fontSize: 82,
                filter:
                  "drop-shadow(0 5px 6px rgba(0,0,0,0.18))",
              }}
            >
              ✊🏻
            </motion.div>
          </div>

          {/* BOTTOM */}
          <div
            style={{
              position: "absolute",
              bottom: "8%",
              textAlign: "center",
              zIndex: 10,
            }}
          >
            <motion.p
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
              }}
              style={{
                margin: 0,
                fontSize: 14,
                fontWeight: 800,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#ff7a00",
              }}
            >
              Opening Your Dream Room Experience...
            </motion.p>

            {/* PROGRESS BAR */}
            <div
              style={{
                marginTop: 18,
                width: 360,
                maxWidth: "82vw",
                height: 20,
                background: "#fff2e2",
                borderRadius: 999,
                border: "2px solid #696969",
                overflow: "hidden",
                boxShadow:
                  "inset 0 3px 5px rgba(0,0,0,0.08)",
              }}
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                }}
                style={{
                  height: "100%",
                  borderRadius: 999,
                  background:
                    "linear-gradient(to right,#ff8b00,#ffb84d,#ff8b00)",
                  boxShadow:
                    "0 0 12px rgba(255,140,0,0.45)",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DoorLoader;