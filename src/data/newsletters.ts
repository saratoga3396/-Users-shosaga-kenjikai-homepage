export type Newsletter = {
  issue: string;
  season: string;
  year: string;
  url: string;
  isNew?: boolean;
};

export const newsletters: Newsletter[] = [
  { issue: "広報49号", year: "2025", season: "夏", url: "#", isNew: true },
  { issue: "広報48号", year: "2025", season: "春", url: "#" },
  { issue: "広報47号", year: "2025", season: "冬", url: "#" },
  { issue: "広報46号", year: "2024", season: "秋", url: "#" },
  { issue: "広報45号", year: "2024", season: "夏", url: "#" },
  { issue: "広報44号", year: "2024", season: "春", url: "#" },
  { issue: "広報43号", year: "2024", season: "冬", url: "#" },
  { issue: "広報42号", year: "2023", season: "秋", url: "#" },
  { issue: "広報41号", year: "2023", season: "夏", url: "#" },
  { issue: "広報40号", year: "2023", season: "春", url: "#" },
];
