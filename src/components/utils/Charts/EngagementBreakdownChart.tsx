import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  date: string;
  likes: number;
  comments: number;
  shares: number;
}

const data: DataPoint[] = [
  { date: "Jan 20", likes: 160, comments: 22, shares: 105 },
  { date: "Jan 21", likes: 180, comments: 45, shares: 75 },
  { date: "Jan 22", likes: 162, comments: 38, shares: 65 },
  { date: "Jan 23", likes: 230, comments: 55, shares: 85 },
  { date: "Jan 24", likes: 185, comments: 42, shares: 70 },
  { date: "Jan 25", likes: 230, comments: 38, shares: 88 },
  { date: "Jan 26", likes: 248, comments: 95, shares: 92 },
  { date: "Jan 27", likes: 175, comments: 115, shares: 70 },
];

export default function EngagementBreakdownChart() {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 20,
        padding: "28px 28px 22px 18px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.05)",
        width: "100%",
        maxWidth: 600,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: 15,
          fontWeight: 700,
          color: "#111827",
          margin: "0 0 20px 10px",
        }}
      >
        Engagement Breakdown
      </h2>

      <ResponsiveContainer width="100%" height={280}>
        <BarChart
          data={data}
          margin={{ top: 4, right: 8, left: -14, bottom: 0 }}
          barCategoryGap="28%"
          barGap={2}
        >
          <CartesianGrid
            strokeDasharray="4 4"
            stroke="rgba(0,0,0,0.07)"
            vertical={false}
          />

          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: "#94a3b8" }}
            dy={8}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: "#94a3b8" }}
            ticks={[0, 80, 160, 240, 320]}
            width={38}
          />

          <Tooltip
            contentStyle={{
              borderRadius: 10,
              border: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              fontSize: 12,
            }}
            labelStyle={{ color: "#94a3b8", fontSize: 11, marginBottom: 4 }}
            cursor={{ fill: "rgba(0,0,0,0.03)" }}
          />

          <Legend
            verticalAlign="top"
            align="right"
            iconType="square"
            iconSize={10}
            wrapperStyle={{ fontSize: 11, color: "#64748b", paddingBottom: 12 }}
          />

          <Bar
            dataKey="likes"
            fill="#7c6ff7"
            radius={[3, 3, 0, 0]}
            maxBarSize={18}
            animationDuration={1200}
          />
          <Bar
            dataKey="comments"
            fill="#22c55e"
            radius={[3, 3, 0, 0]}
            maxBarSize={18}
            animationDuration={1300}
          />
          <Bar
            dataKey="shares"
            fill="#f97316"
            radius={[3, 3, 0, 0]}
            maxBarSize={18}
            animationDuration={1400}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
