export type Project = {
  title: string;
  genre: string;
  role: string;
  blurb: string;
  tech: string[];
  metrics: string;
};

export const projects: Project[] = [
  {
    title: "Echo Rift",
    genre: "Sci-Fi Action RPG",
    role: "Lead Gameplay Programmer",
    blurb: "Designed a modular combat system with dynamic enemy adaptation and seamless co-op sync.",
    tech: ["Unreal Engine 5", "C++", "Behavior Trees", "EOS"],
    metrics: "+24% avg session duration after combat update"
  },
  {
    title: "Skyline Drifters",
    genre: "Arcade Racing",
    role: "Technical Designer",
    blurb: "Built a data-driven track event pipeline enabling rapid iteration for live ops racing seasons.",
    tech: ["Unity", "C#", "Addressables", "Jenkins"],
    metrics: "Shipped 12 seasonal events in 6 months"
  },
  {
    title: "Crypt Grove",
    genre: "Survival Horror",
    role: "Systems Engineer",
    blurb: "Implemented atmospheric AI perception and adaptive audio triggers to amplify stealth tension.",
    tech: ["Godot", "GDScript", "FMOD", "Blender"],
    metrics: "Cut encounter bugs by 38% through test harnesses"
  }
];

export const skills = [
  { label: "Gameplay Programming", value: 92 },
  { label: "AI Systems", value: 84 },
  { label: "Shader / VFX Logic", value: 78 },
  { label: "Optimization", value: 88 },
  { label: "Multiplayer Networking", value: 80 }
];

export const timeline = [
  {
    period: "2024 - Present",
    title: "Senior Game Developer - Nova Forge Studio",
    detail: "Leading gameplay architecture for cross-platform action titles and mentoring 5 engineers."
  },
  {
    period: "2021 - 2024",
    title: "Gameplay Engineer - Pixel Arc Labs",
    detail: "Owned combat, camera, and enemy behavior systems for two shipped games."
  },
  {
    period: "2019 - 2021",
    title: "Indie Developer",
    detail: "Released 3 prototypes, won 2 game jam awards, and built a niche community on itch.io."
  }
];

export const testimonials = [
  {
    quote: "Fast execution, clean systems thinking, and excellent communication with design and art.",
    person: "Ari Chen",
    role: "Game Director, Nova Forge"
  },
  {
    quote: "Turned an unstable prototype into a shippable feature set without losing creative ambition.",
    person: "Mila Rodriguez",
    role: "Producer, Pixel Arc Labs"
  }
];
