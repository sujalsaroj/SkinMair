import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import hero1 from "./assets/sunscreen_hero.png";
import { motion } from "framer-motion";
import oily from "./assets/oily_skin.png";
import combination from "./assets/combination_skin.png";
import dry from "./assets/dry_sking.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import SmoothScroll from "./SmoothScroll";

function App() {
  const title = "Tailored for Every Skin Type";
  const items = [
    "Dermatologist-tested ingredients",
    "Lightweight & non-greasy formulas",
    "Made for Indian climate & skin types",
    "Visible improvement in acne marks & pigmentation",
    "High-quality skincare at pocket-friendly prices",
  ];

  return (
    <>
      <SmoothScroll />
      <div>
        <nav className="fixed top-0 left-0 w-full z-50 flex flex-wrap md:flex-nowrap justify-between items-center bg-gradient-to-r from-gray-100 to-gray-300 px-4 md:px-6 py-3 shadow-md ">
          <h2 className="text-2xl md:text-3xl font-bold ml-2 md:ml-10">
            SkinMair
          </h2>
          <ul className="flex flex-wrap md:flex-nowrap gap-4 md:gap-12 text-lg md:text-xl mr-2 md:mr-20 mt-2 md:mt-0">
            <li className="hover:text-gray-700 cursor-pointer">Home</li>
            <li className="hover:text-gray-700 cursor-pointer">Contact us</li>
            <li className="hover:text-gray-700 cursor-pointer">About</li>
            <li className="hover:text-gray-700 cursor-pointer">FAQ</li>
          </ul>
        </nav>

        <main>
          <div className="flex flex-col md:flex-row max-w-full h-auto bg-gray-100">
            <div className="flex flex-col p-8 md:p-36 md:pl-24">
              <h1 className="text-2xl sm:text-3xl font-bold pb-2">
                Your Skin. Our Care
              </h1>
              <h2 className="text-lg sm:text-xl font-medium pb-2">
                Premium, gentle and dermatologist-approved skincare products —
                specially made for Indian skin.
              </h2>
              <p className="text-sm sm:text-base">
                SkinMair brings you simple, effective aur pocket-friendly
                skincare. Hamare products harsh nahi,
                <span className="block">
                  skin-friendly formulations se banaye gaye hain — acne,
                  pigmentation, marks aur daily glow ke liye perfect.
                </span>
              </p>
            </div>
            <div className="flex justify-center md:mt-20 mt-8">
              <motion.img
                src={hero1}
                alt="sunscreen"
                className="h-64 sm:h-96 object-cover z-30"
                whileInView={{ scale: [0.8, 1.5], rotate: [0, 10] }}
                transition={{
                  delay: 0.2,
                }}
              />
            </div>
          </div>
          <div
            className="max-w-full h-150 bg-gradient-to-r from-gray-100 to-white 
           "
          >
            <motion.div
              initial={{ x: 1200, y: 10, rotate: 11, opacity: 0 }}
              whileInView={{
                x: 1180,
                y: 120,
                scale: 1.3,
                opacity: [0, 1, 1, 0], // opacity down at end
                rotate: 14,
              }}
              transition={{
                duration: 3, // total animation time
                times: [0.2, 0.2, 0.7, 1], // kab kab opacity change ho
              }}
              className="drop h-6 w-4 rounded-4xl bg-amber-400 flex absolut right-20 "
            />
            <motion.div
              initial={{
                x: 0,
                fontSize: "28px",
                color: "#f59e0b",
              }} // start from right side
              whileInView={{
                x: -250,
                fontSize: "40px",
                color: "#000000",
              }} // finally move to center
              transition={{
                delay: 1.6 + title.length * 0.1, // wait until letters finish
                duration: 1,
                ease: "easeOut",
              }}
            >
              <div className="flex justify-center w-full">
                {title.split("").map((letter, i, arr) => (
                  <motion.span
                    key={i}
                    initial={{
                      opacity: 0,
                      x: 250,
                      y: 50,
                      rotate: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: [100, 120, 100],
                      rotate: [0, 8, 0],
                    }}
                    transition={{
                      delay: 1.5 + (arr.length - i) * 0.1,
                      duration: 0.4,
                    }}
                    style={{
                      color: "inherit",
                    }}
                    className=" text-amber-500 font-semibold"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <div className="flex justify-between items-end h-80 w-full px-10 mt-50 overflow-hidden">
              <motion.div>
                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 8,
                  }}
                  className="text-2xl font-semibold flex justify-center"
                >
                  Oily skin
                </motion.h1>
                <motion.img
                  initial={{ y: 150, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 5 }}
                  className="w-96"
                  src={oily}
                  alt="oily"
                />
              </motion.div>

              {/* Combination */}
              <motion.div>
                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 8,
                  }}
                  className="text-2xl font-semibold flex justify-center"
                >
                  Combination skin
                </motion.h1>
                <motion.img
                  initial={{ y: 150, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.8, ease: "easeOut", delay: 5 }} // thoda delay
                  className="w-72"
                  src={combination}
                  alt="combination"
                />
              </motion.div>

              {/* Dry */}
              <motion.div>
                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 8,
                  }}
                  className="text-2xl font-semibold flex justify-center"
                >
                  Dry skin
                </motion.h1>
                <motion.img
                  initial={{ y: 150, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 2.1, ease: "easeOut", delay: 5 }} // thoda aur delay
                  className="w-60"
                  src={dry}
                  alt="dry"
                />
              </motion.div>
            </div>
          </div>
          <div className="max-w-full h-auto bg-gradient-to-r from-gray-100 to-gray-100 flex items-center p-20">
            <div className="flex flex-col gap-6 max-w-full pl-24">
              <h2 className="text-3xl font-bold">Why Choose SkinMair?</h2>

              <p className="text-lg">
                Because your skin deserves products that are simple, safe, and
                actually work.
              </p>

              <ul className="text-lg pl-5 space-y-4 ">
                {items.map((text, i) => (
                  <motion.li
                    key={i}
                    initial={{
                      x: 0,
                      scale: 0.2,
                      borderRadius: "50%",
                      backgroundColor: "#F9FAFB",
                      padding: "6px 14px",
                    }}
                    whileInView={{
                      x: 300,
                      scale: 1,
                      borderRadius: "8px",
                      backgroundColor: "#9CA3AF",
                      border: "3px solid gray",
                    }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.12,
                      ease: "easeOut",
                    }}
                  >
                    {text}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </main>
        <div className="about bg-gray-100 py-20 px-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-10"
          ></motion.h1>

          <div className="max-w-5xl mx-auto space-y-8 text-lg leading-8">
            <motion.p
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-gray-700"
            >
              At SkinMair, we believe skincare should be simple, science-backed,
              and suitable for every skin type — especially Indian skin that
              faces heat, humidity, pollution, and dust every day.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-gray-700"
            >
              Our products are crafted with dermatologist-approved ingredients,
              lightweight textures, and gentle formulations that deliver visible
              results without irritation. Whether you have oily, dry, sensitive,
              or combination skin, SkinMair brings a solution for your daily
              skin concerns.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-gray-700"
            >
              From acne and pigmentation to sun protection and glow enhancement,
              every SkinMair product combines the power of global ingredients
              with the needs of Indian skin — giving you confidence that lasts
              all day.
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-2xl font-semibold text-center mt-16"
            >
              Our Promise
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
              {[
                "Dermatologist-tested formulations",
                "Made for Indian climate and skin types",
                "High-quality skincare at pocket-friendly prices",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  className="bg-white shadow-lg rounded-xl p-6 text-center border"
                >
                  <p className="font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="about h-auto bg-gray-100 pb-20 pt-10">
          <motion.h1
            className="flex justify-center items-center text-3xl font-semibold mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            Contact Us
          </motion.h1>

          <div className="contactDetail flex justify-center items-center">
            <motion.form
              className="flex flex-col w-120 border-2 rounded-2xl bg-gray-100 border-gray-600 h-auto p-7"
              initial={{ opacity: 0, scale: 0.8, y: 60 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <motion.label
                className="font-semibold pb-1"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Email
              </motion.label>

              <motion.input
                className="border w-96 rounded p-2 bg-white"
                type="email"
                placeholder="Enter Your Gmail"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              />

              <motion.label
                className="font-semibold pb-1 pt-3"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Message
              </motion.label>

              <motion.textarea
                className="border w-96 h-32 rounded p-2 bg-white"
                placeholder="Type your message"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />

              <motion.button
                className="mt-4 h-9 w-24 rounded-lg bg-gray-500 text-white font-semibold mx-auto"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.1 }}
              >
                Send
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
      <footer>
        <div
          className="max-w-full bg-gray-300 h-80 flex justify-around p-5
        "
        >
          <div className="w-80 ">
            <motion.h1
              initial={{
                x: 20,
              }}
              whileInView={{
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="text-2xl  mb-3 font-semibold"
            >
              SkinMair
            </motion.h1>
            <motion.p
              initial={{
                x: 20,
              }}
              whileInView={{
                x: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
            >
              Every product is formulated using globally trusted ingredients,
              clinically tested
            </motion.p>
            <motion.h3
              initial={{
                x: 20,
              }}
              whileInView={{
                x: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.8,
              }}
              className="font-bold mt-2"
            >
              Science Meets Skin. You Meet Confidence.
            </motion.h3>
          </div>
          <div className="quick">
            <motion.h1
              initial={{
                y: -10,
              }}
              whileInView={{
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="text-xl  mb-3 font-semibold"
            >
              QUICK LINKS
            </motion.h1>
            <motion.ul
              initial={{
                y: 20,
              }}
              whileInView={{
                y: 0,
              }}
              transition={{
                duration: 1.5,
              }}
              className="space-y-2 flex flex-col justify-center items-center "
            >
              <li>Home</li>
              <li>About </li>
              <li>Contact us</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
            </motion.ul>
          </div>
          <div className="available">
            <motion.h1
              initial={{
                y: -10,
              }}
              whileInView={{
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="text-xl  mb-3 font-semibold"
            >
              ALSO AVAILABLE ON
            </motion.h1>
            <motion.ul
              initial={{
                y: 20,
              }}
              whileInView={{
                y: 0,
              }}
              transition={{
                duration: 1.5,
              }}
              className="space-y-2 flex flex-col justify-center items-center"
            >
              <li>Amazon</li>
              <li>Flipkart</li>
              <li>Zepto</li>
              <li>Blinkit</li>
              <li>Myntra</li>
            </motion.ul>
          </div>
          <div className="touch flex flex-col   items-center">
            <motion.h1
              initial={{
                y: 20,
              }}
              whileInView={{
                y: 0,
              }}
              transition={{
                duration: 1.5,
              }}
              className="text-xl mb-4 font-semibold"
            >
              GET IN TOUCH
            </motion.h1>
            <motion.div
              initial={{
                y: 10,
              }}
              whileInView={{
                y: 0,
              }}
              transition={{
                duration: 1.5,
              }}
              className="socail flex gap-3 "
            >
              <a href="" className="h-3 w-3 ">
                <FaInstagram />
              </a>
              <a href="">
                <FaFacebook />
              </a>
              <a href="">
                <FaLinkedin />
              </a>
              <a href="">
                <FaYoutube />
              </a>
            </motion.div>
            <motion.h2
              initial={{
                x: 20,
              }}
              whileInView={{
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className=" text-xl mt-4 mb-2"
            >
              ADDRESS
            </motion.h2>
            <motion.address
              initial={{
                x: 20,
              }}
              whileInView={{
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
              className="w-72"
            >
              581, 2nd Floor, 1st Main, 6th Sector, HSR Layout, Bengaluru,
              Karnataka - 560102
            </motion.address>
            <motion.h2
              initial={{
                x: 20,
              }}
              whileInView={{
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="text-xl mt-3 mb-2"
            >
              EMAIL
            </motion.h2>
            <motion.p
              initial={{
                x: 20,
              }}
              whileInView={{
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
            >
              WeCare@SkinMair.com
            </motion.p>
          </div>
        </div>
        <hr className="border-gray-800 border-1" />
        <div className="h-10 bg-gray-300 items-center flex justify-center font-semibold">
          © SkinMair {new Date().getFullYear()} — All Rights Reserved.
        </div>
      </footer>
    </>
  );
}

export default App;
