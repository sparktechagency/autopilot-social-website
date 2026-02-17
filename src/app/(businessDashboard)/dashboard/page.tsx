"use client";

import ActivityFeed from "@/components/BusinessDashboard/ActivityFeed";
import Charts from "@/components/BusinessDashboard/Charts";
import ContentList from "@/components/BusinessDashboard/ContentList";
import PromoBanner from "@/components/BusinessDashboard/PromoBanner";
import StatCard from "@/components/BusinessDashboard/StatCard";
import TaskSection from "@/components/BusinessDashboard/TaskSection";
import {
  Users,
  TrendingUp,
  CheckCircle,
  Video,
  FileText,
  CheckSquare,
  UserPlus,
  Activity,
  Eye,
  PlayCircle,
} from "lucide-react";

export default function DashboardOverview() {
  return (
    <div className="flex flex-col gap-8 pb-10">
      {/* 1. Header */}
      <div className="mb-2">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#000000] font-sans">
          Hello, Tomas!
        </h1>
      </div>

      {/* 2. Today Stats */}
      <section>
        <h2 className="text-base sm:text-lg font-bold text-[#0A0A0A] mb-3">Today</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <StatCard
            icon={Users}
            iconColor="#DB0083 "
            circleColor="#FCDFF6"
            label="Reviews Replied"
            value="1,468"
          />
          <StatCard
            icon={TrendingUp}
            iconColor="#00A63E"
            circleColor="#DCFCE7 "
            label="Engagement Progress"
            value="8.9%"
          />
          <StatCard
            icon={CheckCircle}
            iconColor="#E7000B"
            circleColor="#B1C9FF "
            label="Approvals Pending"
            value="7"
          />
        </div>
      </section>

      {/* 3. This Week Stats */}
      <section>
        <h2 className="text-base sm:text-lg font-bold text-[#0A0A0A] mb-3">This Week</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <StatCard
            icon={Video}
            iconColor="#FF040D"
            circleColor="#FFC8CA"
            label="Shorts Scheduled"
            value="1,468"
          />
          <StatCard
            icon={FileText}
            iconColor="#F9BF01"
            circleColor="#FFF6D8 "
            label="Posts Scheduled"
            value="8.9%"
          />
          <StatCard
            icon={CheckSquare}
            iconColor="#21B2C2"
            circleColor="#C4F9FF "
            label="Task Completed"
            value="7"
          />
        </div>
      </section>

      {/* 4. Growth Metrics Stats */}
      <section>
        <h2 className="text-base sm:text-lg font-bold text-[#0A0A0A] mb-3">
          Growth Metrics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <StatCard
            icon={UserPlus}
            iconColor="#8200DB"
            circleColor="#D4BCFF"
            label="Total Followers"
            value="1,468"
          />
          <StatCard
            icon={Activity}
            iconColor="#0A0A0A"
            circleColor="#DDDDDD "
            label="Engagement Progress"
            value="8.9%"
          />
          <StatCard
            icon={PlayCircle}
            iconColor="#833711"
            circleColor="#E3D1C8"
            label="This Week's Content"
            value="7"
          />
        </div>
      </section>

      {/* 5. Charts */}
      <section className="h-auto min-h-[300px] sm:min-h-[350px] lg:h-96">
        <Charts />
      </section>

      {/* 6. Content & Activity */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ContentList
            items={[
              {
                id: "1",
                thumbnail: "/Images/contentImage.png",
                title: "5 Tips for Growing Your Business",
                platform: "Tiktok",
                views: "15.0K",
                likes: "1.2K",
                comments: "20",
                engagement: "5.7%",
              },
              {
                id: "2",
                thumbnail: "/Images/contentImage.png",
                title: "Client Success Story - How Sarah Grew 300%",
                platform: "Instagram",
                views: "8.9K",
                likes: "542",
                comments: "12",
                engagement: "4.8%",
              },
              {
                id: "3",
                thumbnail: "/Images/contentImage.png",
                title: "Behind the Scenes: A Day in the Life",
                platform: "Youtube",
                views: "45.0K",
                likes: "1.8K",
                comments: "156",
                engagement: "8.2%",
              },
              {
                id: "4",
                thumbnail: "/Images/contentImage.png",
                title: "Quick Tip Tuesday - Social Media Mistake",
                platform: "Linkedin",
                views: "12.0K",
                likes: "892",
                comments: "45",
                engagement: "6.1%",
              },
            ]}
          />
        </div>
        <div className="lg:col-span-1">
          <ActivityFeed />
        </div>
      </section>

      {/* 7. Today's Progress Bar */}
      <section className="bg-white p-4 sm:p-6 rounded-3xl shadow-sm border border-gray-100">
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-3 gap-2">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900">
                Today&apos;s Progress of Engagement
              </h3>
              <p className="text-xs text-gray-500">
                Your daily engagement goal
              </p>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-xl sm:text-2xl font-bold text-blue-600">8/25</span>
              <p className="text-xs text-gray-400">Interactions</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
            <div className="bg-blue-600 h-full rounded-full w-[32%]"></div>
          </div>
          <p className="text-right text-xs text-gray-400 mt-2">
            32% complete • 17 remaining
          </p>
        </div>
      </section>

      {/* 8. Winning Patterns */}
      <section className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          Winning Patterns
        </h3>
        <p className="text-xs text-gray-500 mb-6">
          These patterns have been identified from your top-performing content
          and will be used to optimize future posts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#effef1] p-4 rounded-xl border border-[#bbf7d0]">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs text-gray-500 uppercase">Hook Type</span>
              <span className="bg-white px-2 py-0.5 rounded text-[10px] font-bold shadow-sm">
                2 posts
              </span>
            </div>
            <h4 className="font-bold text-gray-900">
              &quot;How to&quot; tutorials
            </h4>
            <p className="text-xs text-green-600 font-medium mt-1">
              Avg. Engagement: 9.2%
            </p>
          </div>

          <div className="bg-[#effef1] p-4 rounded-xl border border-[#bbf7d0]">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs text-gray-500 uppercase">Template</span>
              <span className="bg-white px-2 py-0.5 rounded text-[10px] font-bold shadow-sm">
                1 post
              </span>
            </div>
            <h4 className="font-bold text-gray-900">
              Problem → Solution format
            </h4>
            <p className="text-xs text-green-600 font-medium mt-1">
              Avg. Engagement: 8.5%
            </p>
          </div>

          <div className="bg-[#effef1] p-4 rounded-xl border border-[#bbf7d0]">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs text-gray-500 uppercase">CTA Style</span>
              <span className="bg-white px-2 py-0.5 rounded text-[10px] font-bold shadow-sm">
                3 posts
              </span>
            </div>
            <h4 className="font-bold text-gray-900">Question-based CTAs</h4>
            <p className="text-xs text-green-600 font-medium mt-1">
              Avg. Engagement: 9.8%
            </p>
          </div>

          <div className="bg-[#effef1] p-4 rounded-xl border border-[#bbf7d0]">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs text-gray-500 uppercase">
                Topic Cluster
              </span>
              <span className="bg-white px-2 py-0.5 rounded text-[10px] font-bold shadow-sm">
                2 posts
              </span>
            </div>
            <h4 className="font-bold text-gray-900">Growth & Scaling</h4>
            <p className="text-xs text-green-600 font-medium mt-1">
              Avg. Engagement: 9.1%
            </p>
          </div>
        </div>
      </section>

      {/* 9. Tasks */}
      <TaskSection />

      {/* 10. Promo Banner */}
      <PromoBanner />
    </div>
  );
}
