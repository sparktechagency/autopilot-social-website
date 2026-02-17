import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  date: string;
  followers: number;
}

const data: DataPoint[] = [
  { date: "Jan 20", followers: 40 },
  { date: "Jan 21", followers: 420 },
  { date: "Jan 22", followers: 740 },
  { date: "Jan 23", followers: 190 },
  { date: "Jan 24", followers: 1020 },
  { date: "Jan 25", followers: 1480 },
  { date: "Jan 26", followers: 760 },
  { date: "Jan 27", followers: 1190 },
];

export default function FollowersGrowthChart() {
  return (
    <div
      style={{
        background: "#fff",
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
        Followers Growth
      </h2>

      <ResponsiveContainer width="100%" height={260}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 8, left: -14, bottom: 0 }}
        >
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.38} />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="4 4" stroke="rgba(0,0,0,0.07)" />

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
            ticks={[0, 400, 800, 1200, 1600]}
            width={40}
          />

          <Tooltip
            contentStyle={{
              borderRadius: 10,
              border: "1px solid rgba(59,130,246,0.2)",
              boxShadow: "0 4px 20px rgba(59,130,246,0.12)",
              fontSize: 12,
            }}
            itemStyle={{ color: "#2563eb", fontWeight: 600 }}
            labelStyle={{ color: "#94a3b8", fontSize: 11, marginBottom: 4 }}
            cursor={{
              stroke: "rgba(59,130,246,0.35)",
              strokeWidth: 1.5,
              strokeDasharray: "4 3",
            }}
          />

          <Area
            type="monotone"
            dataKey="followers"
            stroke="#3b82f6"
            strokeWidth={2.5}
            fill="url(#grad)"
            dot={false}
            activeDot={{
              r: 6,
              fill: "#2563eb",
              stroke: "#fff",
              strokeWidth: 2.5,
            }}
            animationDuration={1400}
            animationEasing="ease-out"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
