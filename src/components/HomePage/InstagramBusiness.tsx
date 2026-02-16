import { Card, CardContent } from "@mui/material";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

import businessImage from "../../../public/Images/businessImage.png";

export default function InstagramBusines() {
  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Heading */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
            <span className="text-[#155DFC]">Instagram Business</span> in
            Minutes
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Watch our quick video guide to set up and update your account
            effortlessly.
          </p>
        </div>

        {/* Video Section */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <video
            className="w-full h-62.5 sm:h-100 lg:h-125 object-cover"
            controls
            poster="https://images.unsplash.com/photo-1587614382346-4ec70e388b28"
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
          </video>

          {/* Play Overlay (Optional Styling Layer) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-black/50 p-6 rounded-full">
              <FaPlay className="text-white text-3xl" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-4 gap-6 items-stretch">
          {/* Big Gradient Card */}
          <Card
            sx={{
              background: "linear-gradient(90deg, #0A0A0A, #155DFC)",
              borderRadius: "16px",
              height: {
                xs: 135,
                md: 180,
              },
              display: "flex",
            }}
            className="md:col-span-2"
          >
            <CardContent
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 4,
              }}
            >
              <h2 className="text-xl lg:text-2xl font-semibold max-w-sm  text-white">
                Stop wasting hours on content – Let AI Handle It!
              </h2>
            </CardContent>
          </Card>

          {/* Stat Cards */}
          <Card
            sx={{
              background: "#FFC7C9",
              borderRadius: "16px",
              display: "flex",
              height: {
                xs: 135,
                md: 180,
              },
            }}
          >
            <CardContent className="flex flex-col justify-center items-center p-10 w-full text-center">
              <h3 className="text-2xl lg:text-3xl font-bold">1M+</h3>
              <p className="text-sm text-gray-700 mt-2">Post Generated</p>
            </CardContent>
          </Card>

          <Card
            sx={{
              background: "#FFEDD4",
              borderRadius: "16px",
              display: "flex",
              height: {
                xs: 135,
                md: 180,
              },
            }}
          >
            <CardContent className="flex flex-col justify-center items-center p-10 w-full text-center">
              <h3 className="text-2xl lg:text-3xl font-bold">35K+</h3>
              <p className="text-sm text-gray-700 mt-2">Happy Users</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <div className="md:col-span-2 h-32.5 lg:h-45 relative rounded-2xl overflow-hidden shadow-md flex items-center justify-center">
            <Image
              src={businessImage}
              alt="Analytics"
              fill
              className="object-fit"
              sizes="(max-width: 1024px) 100vw, 66vw"
              priority
              quality={100}
            />
          </div>

          <Card
            sx={{
              background: "#D9E5FF",
              borderRadius: "16px",
              display: "flex",
              height: {
                xs: 130,
                md: 180,
              },
            }}
            className="flex"
          >
            <CardContent className="flex flex-col justify-center items-center p-10 w-full text-center">
              <h3 className="text-2xl lg:text-3xl font-bold">35K+</h3>
              <p className="text-sm text-gray-700 mt-2">Happy Users</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
