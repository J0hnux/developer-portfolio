import Image from "next/image";

const NAV_ITEMS = [
  { label: "Project", href: "#project" },
  { label: "Architecture", href: "#architecture" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const STACK = ["NEXT.JS", "REACT", "TYPESCRIPT", "POSTGRESQL"];

const HIGHLIGHTS = [
  {
    symbol: "⚡",
    title: "Production Ready",
    description: "Deployed and used by real businesses.",
  },
  {
    symbol: "▰",
    title: "Full Stack",
    description: "From UI to database and everything in between.",
  },
  {
    symbol: "</>",
    title: "Scalable Architecture",
    description: "Built with maintainability and growth in mind.",
  },
  {
    symbol: "▣",
    title: "Responsive Design",
    description: "Works seamlessly across different screen sizes.",
  },
];

const PROJECT_FEATURES = [
  "Online ordering and menu publishing",
  "Sales and order management",
  "Business analytics and live order tracking",
  "Administrative tools for small businesses",
];

const PROJECT_STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL",
];

const PROJECT_FACTS = [
  ["Product", "SaaS"],
  ["Audience", "Filipino SMEs"],
  ["Role", "Full Stack"],
  ["Status", "Built & Deployed"],
];

const TECH_STACK = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Next.js Server Actions", "Route Handlers", "Node.js"],
  },
  {
    title: "Database",
    items: ["PostgreSQL"],
  },
  {
    title: "Infrastructure",
    items: ["Vercel", "GitHub"],
  },
];

const ARCHITECTURE_ITEMS = [
  "Browser",
  "Next.js",
  "Authentication",
  "Server",
  "Business Logic",
  "PostgreSQL",
];

function BrutalButton({
  children,
  href,
  variant = "purple",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "purple" | "orange" | "black" | "white";
}) {
  const variants = {
    purple: "bg-[#8b5cf6] text-black",
    orange: "bg-[#ff6b4a] text-black",
    black: "bg-black text-white",
    white: "bg-[#fffdf8] text-black",
  };

  return (
    <a
      href={href}
      className={`
        inline-flex items-center justify-center
        border-2 border-black
        px-5 py-3
        font-mono text-xs font-black uppercase tracking-wide
        shadow-[5px_5px_0_#000]
        transition
        hover:translate-x-[2px]
        hover:translate-y-[2px]
        hover:shadow-[3px_3px_0_#000]
        ${variants[variant]}
      `}
    >
      {children}
    </a>
  );
}

function SectionNumber({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-stretch border-b-2 border-black">
      <div className="flex w-14 shrink-0 items-center justify-center border-r-2 border-black bg-[#8b5cf6] p-3 font-mono text-lg font-black">
        {number}
      </div>

      <div className="flex items-center px-5 py-3 font-mono text-sm font-black uppercase">
        {children}
      </div>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border-2 border-black bg-[#fffdf8] px-3 py-2 font-mono text-[10px] font-black shadow-[3px_3px_0_#d8ff31]">
      {children}
    </span>
  );
}

function DashboardPreview() {
  const orders = [
    {
      id: "#1024",
      customer: "Maria Santos",
      total: "₱1,250",
      status: "Completed",
    },
    {
      id: "#1023",
      customer: "Juan Dela Cruz",
      total: "₱850",
      status: "Completed",
    },
    {
      id: "#1022",
      customer: "Ana Reyes",
      total: "₱560",
      status: "Preparing",
    },
    {
      id: "#1021",
      customer: "Pedro Garcia",
      total: "₱1,120",
      status: "Pending",
    },
  ];

  return (
    <div className="relative">
      <div className="absolute inset-0 translate-x-3 translate-y-3 border-2 border-black bg-[#8b5cf6]" />

      <div className="relative overflow-hidden border-2 border-black bg-[#fffdf8]">
        <div className="flex h-9 items-center gap-2 border-b-2 border-black px-3">
          <span className="h-3 w-3 rounded-full border-2 border-black bg-[#ff6b4a]" />
          <span className="h-3 w-3 rounded-full border-2 border-black bg-[#d8ff31]" />
          <span className="h-3 w-3 rounded-full border-2 border-black bg-[#7de2d1]" />

          <span className="ml-auto font-mono text-[9px] font-black uppercase">
            panindahub.app
          </span>
        </div>

        <div className="grid min-h-[390px] grid-cols-[90px_1fr] sm:grid-cols-[120px_1fr]">
          <aside className="border-r-2 border-black bg-black p-3 text-white">
            <p className="mb-6 font-black">
              Paninda
              <span className="text-[#d8ff31]">Hub</span>
            </p>

            <div className="space-y-2 font-mono text-[8px] sm:text-[10px]">
              {[
                "Dashboard",
                "Orders",
                "Customers",
                "Products",
                "Analytics",
                "Payments",
              ].map((item, index) => (
                <div
                  key={item}
                  className={
                    index === 0
                      ? "bg-[#8b5cf6] px-2 py-2 font-black"
                      : "px-2 py-2 text-neutral-300"
                  }
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>

          <main className="min-w-0 p-3 sm:p-5">
            <h3 className="mb-5 text-xl font-black">Dashboard</h3>

            <div className="grid gap-2 sm:grid-cols-3">
              {[
                ["Total Revenue", "₱182,450"],
                ["Total Orders", "1,248"],
                ["Customers", "324"],
              ].map(([label, value]) => (
                <div key={label} className="border-2 border-black p-3">
                  <p className="font-mono text-[7px] font-black uppercase sm:text-[9px]">
                    {label}
                  </p>

                  <p className="mt-2 text-base font-black sm:text-lg">
                    {value}
                  </p>

                  <p className="mt-2 font-mono text-[7px] text-green-700">
                    ▲ 12.5% this month
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-3 grid gap-3 lg:grid-cols-[1.5fr_1fr]">
              <div className="border-2 border-black p-3">
                <div className="flex justify-between">
                  <p className="font-mono text-[9px] font-black uppercase">
                    Sales Overview
                  </p>

                  <p className="font-mono text-[8px]">This Week</p>
                </div>

                <div className="mt-6 flex h-36 items-end gap-1 sm:gap-2">
                  {[25, 45, 35, 70, 52, 80, 61, 90, 68, 82, 65, 96].map(
                    (height, index) => (
                      <div
                        key={index}
                        style={{ height: `${height}%` }}
                        className="flex-1 border-2 border-black bg-[#8b5cf6]"
                      />
                    ),
                  )}
                </div>
              </div>

              <div className="hidden border-2 border-black p-3 lg:block">
                <p className="mb-4 font-mono text-[9px] font-black uppercase">
                  Recent Orders
                </p>

                <div className="space-y-3">
                  {orders.slice(0, 3).map((order) => (
                    <div
                      key={order.id}
                      className="border-b border-black pb-2 font-mono text-[8px]"
                    >
                      <div className="flex justify-between font-black">
                        <span>{order.id}</span>
                        <span>{order.total}</span>
                      </div>

                      <p className="mt-1">{order.customer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function CommercePreview() {
  const bars = [22, 31, 27, 43, 38, 55, 48, 67, 63, 82, 74, 92];

  return (
    <div className="relative w-full rounded-[28px]">
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#20241f] shadow-2xl">
        <div className="flex h-11 items-center bg-[#20241f] px-5">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-[#ff6b6b]" />
            <span className="h-3 w-3 rounded-full bg-[#f6c945]" />
            <span className="h-3 w-3 rounded-full bg-[#36c98f]" />
          </div>

          <p className="ml-5 truncate text-[10px] text-[#87938c]">
            app.panindahub.ph/dashboard
          </p>
        </div>

        <div className="grid grid-cols-[11%_89%] bg-[#f6f3ec]">
          <aside className="flex flex-col items-center bg-[#252922] py-[10%]">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f15a2b] text-xs font-black text-white sm:h-10 sm:w-10 sm:text-sm">
              P
            </div>

            <div className="mt-[20%] flex aspect-square w-8 items-center justify-center rounded-md bg-white text-[#252922] sm:w-10">
              <HomeIcon className="h-4 w-4" />
            </div>

            <div className="mt-[22%] flex flex-col items-center gap-5 text-[#768078] sm:gap-8">
              {[0, 1, 2, 3, 4].map((item) => (
                <TinySidebarIcon key={item} />
              ))}
            </div>
          </aside>

          <div className="min-w-0 bg-[#f6f3ec] p-3 sm:p-6">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[6px] font-medium uppercase tracking-[0.15em] text-[#aaa39a] sm:text-[9px]">
                  Overview
                </p>
                <h3 className="mt-1 font-serif text-base font-medium tracking-tight text-[#171a16] sm:mt-2 sm:text-3xl">
                  Magandang umaga, Clark <span aria-hidden="true">👋</span>
                </h3>
              </div>

              <span className="shrink-0 rounded-lg bg-[#ef5b2b] px-2 py-1.5 text-[6px] font-semibold text-white sm:px-4 sm:py-2 sm:text-[9px]">
                + Publish menu
              </span>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-1.5 sm:mt-6 sm:gap-3">
              <PanindaMetric
                label="Revenue"
                value="₱8,330"
                footer="+12.4%"
                positive
              />
              <PanindaMetric
                label="Paid orders"
                value="42"
                footer="+5 today"
                positive
              />
              <PanindaMetric label="Pending" value="6" footer="₱1,140" />
            </div>

            <div className="mt-2 rounded-lg border border-[#ddd8cf] bg-white p-2.5 sm:mt-4 sm:rounded-2xl sm:p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[5px] uppercase tracking-[0.18em] text-[#a19a91] sm:text-[8px]">
                    Sales Performance
                  </p>
                  <p className="mt-1 font-serif text-xs font-semibold text-[#171a16] sm:mt-3 sm:text-2xl">
                    ₱126,840
                  </p>
                </div>
                <span className="text-[5px] font-medium text-emerald-600 sm:text-[8px]">
                  +18.2%
                </span>
              </div>

              <div className="mt-3 flex h-14 items-end gap-1 sm:mt-7 sm:h-28 sm:gap-2">
                {bars.map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t bg-gradient-to-t from-[#ff6900] to-[#ffb15e]"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-2 rounded-lg border border-[#ddd8cf] bg-white p-2.5 sm:mt-4 sm:rounded-2xl sm:p-5">
              <p className="text-[5px] uppercase tracking-[0.18em] text-[#aaa39a] sm:text-[8px]">
                Live Orders
              </p>
              <div className="mt-2 space-y-1.5 sm:mt-4 sm:space-y-3">
                <PanindaOrder
                  name="Maria Santos"
                  status="Preparing"
                  price="₱310"
                />
                <PanindaOrder name="Jose Reyes" status="Paid" price="₱280" />
                <PanindaOrder name="Ana Cruz" status="Ready" price="₱450" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -left-2 rounded-xl border border-[#e5e0d7] bg-white px-3 py-2.5 shadow-xl sm:-bottom-8 sm:-left-5 sm:rounded-2xl sm:px-5 sm:py-4">
        <p className="text-[6px] text-[#9a948b] sm:text-[8px]">
          Tomorrow&apos;s confirmed
        </p>
        <p className="mt-0.5 font-serif text-sm font-bold text-[#171a16] sm:mt-1 sm:text-2xl">
          51 orders
        </p>
        <p className="mt-1 text-[5px] font-semibold text-emerald-600 sm:mt-2 sm:text-[7px]">
          Production list ready ✓
        </p>
      </div>
    </div>
  );
}

function PanindaMetric({
  label,
  value,
  footer,
  positive = false,
}: {
  label: string;
  value: string;
  footer: string;
  positive?: boolean;
}) {
  return (
    <div className="rounded-lg border border-[#ded9d0] bg-white px-2 py-2 sm:rounded-2xl sm:px-5 sm:py-5">
      <p className="truncate text-[5px] text-[#a49d94] sm:text-[8px]">
        {label}
      </p>
      <p className="mt-1 font-serif text-[9px] font-bold text-[#171a16] sm:mt-3 sm:text-xl">
        {value}
      </p>
      <p
        className={`mt-1 text-[5px] sm:mt-3 sm:text-[7px] ${positive ? "text-emerald-600" : "text-[#ef5b2b]"}`}
      >
        {footer}
      </p>
    </div>
  );
}

function PanindaOrder({
  name,
  status,
  price,
}: {
  name: string;
  status: string;
  price: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-[#eeeae3] pb-1 last:border-b-0 sm:pb-2">
      <p className="truncate text-[5px] text-[#514c45] sm:text-[8px]">
        {name}
        <span className="text-[#aaa39a]"> · {status}</span>
      </p>
      <span className="ml-2 text-[5px] font-semibold text-[#171a16] sm:text-[8px]">
        {price}
      </span>
    </div>
  );
}

function HomeIcon({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 11.5 12 5l8 6.5" />
      <path d="M6.5 10.5V20h11v-9.5" />
    </svg>
  );
}

function TinySidebarIcon() {
  return (
    <span
      className="grid h-3 w-3 grid-cols-2 gap-[2px] opacity-70"
      aria-hidden="true"
    >
      <span className="rounded-[1px] bg-current" />
      <span className="rounded-[1px] bg-current" />
      <span className="rounded-[1px] bg-current" />
      <span className="rounded-[1px] bg-current" />
    </span>
  );
}

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.64-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.95a9.3 9.3 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.89 0 1.36-.01 2.46-.01 2.8 0 .27.18.59.69.49A10.23 10.23 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function FeatureCard({
  number,
  title,
  description,
  accent,
}: {
  number: string;
  title: string;
  description: string;
  accent: string;
}) {
  return (
    <article className="border-2 border-black bg-[#fffdf8] p-5 shadow-[6px_6px_0_#000]">
      <div
        className={`mb-8 flex h-10 w-10 items-center justify-center border-2 border-black font-mono text-xs font-black ${accent}`}
      >
        {number}
      </div>

      <h3 className="text-lg font-black uppercase">{title}</h3>

      <p className="mt-3 max-w-sm font-mono text-xs leading-5">{description}</p>

      <span className="mt-5 inline-block border border-black bg-[#b8f7a7] px-2 py-1 font-mono text-[9px] font-black">
        SOLVED
      </span>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f1e8] text-black">
      {/* Navigation */}
      <header className="border-b-2 border-black bg-[#fffdf8]">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-5 px-5 py-5 lg:px-10">
          <a href="#" className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center border-2 border-black bg-[#d8ff31] font-mono text-xl font-black shadow-[3px_3px_0_#000]">
              JC.
            </span>

            <span className="text-xl font-black uppercase">John </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-mono text-xs font-black uppercase hover:underline ${
                  index === 0
                    ? "border-2 border-black bg-[#d8ff31] px-4 py-3 shadow-[3px_3px_0_#000]"
                    : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <BrutalButton href="https://github.com/" variant="black">
            GitHub ↗
          </BrutalButton>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-[1500px] gap-14 px-5 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:px-10 lg:py-24">
        <div className="flex flex-col justify-center">
          <p className="font-mono text-sm font-black uppercase tracking-[0.12em] text-black">
            Hi, I&apos;m John Clark Doliente.
          </p>

          <p className="mb-5 mt-2 font-mono text-xs font-black uppercase text-[#7045e8]">
            Full Stack Developer
          </p>

          <h1 className="max-w-2xl text-[clamp(3rem,7vw,6.5rem)] font-black uppercase leading-[0.9] tracking-[-0.05em]">
            I build software that solves real business problems.
          </h1>

          <p className="mt-7 max-w-xl font-mono text-sm leading-6">
            I design, build and ship full stack web applications with modern
            technologies, maintainable architecture and thoughtful user
            experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {STACK.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-5">
            <BrutalButton href="#project">View My Work →</BrutalButton>

            <BrutalButton href="https://github.com/" variant="white">
              View on GitHub ↗
            </BrutalButton>
          </div>
        </div>

        <DashboardPreview />
      </section>

      {/* Highlight strip */}
      <section className="border-y-2 border-black bg-[#d8ff31]">
        <div className="mx-auto grid max-w-[1500px] sm:grid-cols-2 xl:grid-cols-4">
          {HIGHLIGHTS.map((item) => (
            <article
              key={item.title}
              className="flex gap-4 border-b-2 border-black p-6 last:border-b-0 sm:[&:nth-child(odd)]:border-r-2 xl:border-b-0 xl:border-r-2 xl:last:border-r-0"
            >
              <span className="text-4xl font-black">{item.symbol}</span>

              <div>
                <h2 className="font-mono text-xs font-black uppercase">
                  {item.title}
                </h2>

                <p className="mt-2 font-mono text-[10px] leading-4">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Project */}
      <section
        id="project"
        className="mx-auto max-w-[1500px] px-5 py-16 lg:px-10"
      >
        <div className="mb-12 flex flex-col gap-5 lg:mb-16 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="border-2 border-black bg-[#8b5cf6] px-3 py-2 font-mono text-xs font-black shadow-[3px_3px_0_#000]">
                01
              </span>
              <span className="font-mono text-xs font-black uppercase tracking-[0.18em]">
                Work
              </span>
            </div>

            <h2 className="text-[clamp(2.8rem,10vw,6rem)] font-black uppercase leading-[0.88] tracking-[-0.05em]">
              Selected
              <br />
              <span className="text-[#7045e8]">Project</span>
            </h2>
          </div>

          <p className="max-w-full font-mono text-sm leading-6 lg:max-w-[330px]">
            A product I&apos;ve built, with the engineering decisions and real
            application UI shown alongside the result.
          </p>
        </div>

        <article className="border-2 border-black bg-[#fffdf8] shadow-[10px_10px_0_#000]">
          <SectionNumber number="01">Featured Project</SectionNumber>

          <div className="grid gap-12 p-6 lg:grid-cols-[0.72fr_1.28fr] lg:p-10">
            <div className="min-w-0 flex flex-col justify-center">
              <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-[#7045e8]">
                SaaS Commerce Platform
              </p>

              <h3 className="mt-4 whitespace-nowrap text-[clamp(2.25rem,8vw,4rem)] font-black uppercase leading-[0.88] tracking-[-0.05em]">
                PanindaHub
              </h3>

              <p className="mt-5 max-w-xl font-mono text-sm leading-6">
                A SaaS commerce and business management platform built for
                Filipino small businesses. It combines online ordering, sales
                tracking, order management, analytics, and administrative tools
                into one platform.
              </p>

              <ul className="mt-7 space-y-3">
                {PROJECT_FEATURES.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 font-mono text-xs font-bold"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1 h-2.5 w-2.5 shrink-0 border border-black bg-[#8b5cf6]"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {PROJECT_STACK.map((technology) => (
                  <Tag key={technology}>{technology}</Tag>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <BrutalButton href="#" variant="orange">
                  Live Site ↗
                </BrutalButton>

                <BrutalButton href="https://github.com/" variant="black">
                  <span className="flex items-center gap-3">
                    <GithubIcon /> Source
                  </span>
                </BrutalButton>
              </div>
            </div>

            <div className="relative min-w-0 self-center pb-8 pl-3 pr-3 pt-3 sm:pl-5 sm:pr-5">
              <div
                aria-hidden="true"
                className="absolute bottom-4 left-7 right-0 top-7 border-2 border-black bg-[#ff6b4a]"
              />
              <div className="relative border-2 border-black bg-[#fffdf8] p-3 shadow-[6px_6px_0_#000] sm:p-5">
                <CommercePreview />
              </div>
            </div>
          </div>

          <div className="grid border-t-2 border-black sm:grid-cols-4">
            {PROJECT_FACTS.map(([label, value], index) => (
              <div
                key={label}
                className={`p-5 ${
                  index < PROJECT_FACTS.length - 1
                    ? "border-b-2 border-black sm:border-b-0 sm:border-r-2"
                    : ""
                }`}
              >
                <p className="font-mono text-[9px] font-black uppercase tracking-[0.15em] text-[#7045e8]">
                  {label}
                </p>
                <p className="mt-2 font-mono text-xs font-black uppercase">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* Architecture and tech */}
      <section
        id="architecture"
        className="mx-auto max-w-[1500px] px-5 pb-16 lg:px-10"
      >
        <div className="grid border-2 border-black bg-[#fffdf8] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="border-b-2 border-black lg:border-b-0 lg:border-r-2">
            <SectionNumber number="02">Architecture</SectionNumber>

            <div className="p-6 lg:p-10">
              <div className="flex flex-wrap items-center gap-3">
                {ARCHITECTURE_ITEMS.map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="min-w-[110px] border-2 border-black bg-[#fffdf8] px-4 py-4 text-center font-mono text-[10px] font-black uppercase shadow-[3px_3px_0_#000]">
                      {item}
                    </div>

                    {index < ARCHITECTURE_ITEMS.length - 1 && (
                      <span className="font-black">→</span>
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-9 max-w-2xl font-mono text-xs leading-5">
                The application follows a maintainable full stack architecture
                with clear responsibility boundaries between the interface,
                authentication, business logic and persistence layers.
              </p>

              <ul className="mt-5 space-y-2 font-mono text-[10px] font-bold">
                <li>■ Authentication protects server resources.</li>
                <li>■ Business rules execute on the server.</li>
                <li>■ Application data is persisted in PostgreSQL.</li>
                <li>■ Tenant scoped data prevents cross business access.</li>
              </ul>
            </div>
          </div>

          <div>
            <SectionNumber number="03">Tech Stack</SectionNumber>

            <div className="grid gap-5 p-6 sm:grid-cols-2 lg:p-10">
              {TECH_STACK.map((stack) => (
                <article
                  key={stack.title}
                  className="border-2 border-black bg-[#fffdf8] shadow-[5px_5px_0_#000]"
                >
                  <h3 className="border-b-2 border-black bg-[#c4a7ff] px-4 py-3 font-mono text-xs font-black uppercase">
                    {stack.title}
                  </h3>

                  <ul className="space-y-2 p-4 font-mono text-xs">
                    {stack.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problems solved */}
      <section className="mx-auto max-w-[1500px] px-5 pb-16 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <FeatureCard
            number="01"
            title="Multi Tenancy"
            description="Designed business level data isolation so organizations only have access to their own resources."
            accent="bg-[#c4a7ff]"
          />

          <FeatureCard
            number="02"
            title="Authentication"
            description="Implemented authentication and server side authorization for protected application resources."
            accent="bg-[#d8ff31]"
          />

          <FeatureCard
            number="03"
            title="Database Design"
            description="Modeled relationships across businesses, users, products, customers, payments and orders."
            accent="bg-[#ff6b4a]"
          />
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto max-w-[1500px] px-5 pb-16 lg:px-10"
      >
        <div className="grid border-2 border-black bg-[#fffdf8] lg:grid-cols-2">
          <div className="border-b-2 border-black lg:border-b-0 lg:border-r-2">
            <SectionNumber number="04">About Me</SectionNumber>

            <div className="grid gap-8 p-6 sm:grid-cols-[160px_1fr] lg:p-10">
              <div className="relative">
                <div className="absolute inset-0 translate-x-3 translate-y-3 border-2 border-black bg-[#8b5cf6]" />

                <div className="relative aspect-square overflow-hidden border-2 border-black bg-[#c4a7ff]">
                  <Image
                    src="/profile.jpg"
                    alt="Portrait of John"
                    fill
                    sizes="160px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black">
                  I enjoy building products from start to finish.
                </h2>

                <p className="mt-5 font-mono text-xs leading-6">
                  I enjoy turning ideas into real applications that solve
                  problems and create measurable value.
                </p>

                <p className="mt-4 font-mono text-xs leading-6">
                  My focus is understanding the complete application flow from
                  frontend interaction to server logic and database operations.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Tag>PROBLEM SOLVER</Tag>
                  <Tag>DETAIL ORIENTED</Tag>
                  <Tag>FULL STACK</Tag>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div id="contact">
            <SectionNumber number="05">Let{"'"}s Work Together</SectionNumber>

            <div className="grid gap-8 p-6 sm:grid-cols-[1fr_180px] lg:p-10">
              <div>
                <p className="font-mono text-xs font-black uppercase text-[#7045e8]">
                  Have a project in mind?
                </p>

                <h2 className="mt-3 text-4xl font-black">
                  Let{"'"}s build something great.
                </h2>

                <div className="mt-8 space-y-3">
                  <a
                    href="mailto:john.dev@example.com"
                    className="block border-2 border-black bg-[#fffdf8] px-4 py-3 font-mono text-xs shadow-[3px_3px_0_#000]"
                  >
                    ✉ jc24.doliente@gmail.com
                  </a>

                  <div className="border-2 border-black bg-[#fffdf8] px-4 py-3 font-mono text-xs shadow-[3px_3px_0_#000]">
                    ◉ Philippines
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <BrutalButton
                    href="https://github.com/J0hnux"
                    variant="white"
                  >
                    GH
                  </BrutalButton>

                  <BrutalButton
                    href="https://www.linkedin.com/in/jclark007/"
                    variant="white"
                  >
                    IN
                  </BrutalButton>
                </div>
              </div>

              <div className="flex min-h-52 flex-col justify-between border-2 border-black bg-[#ff6b4a] p-5 shadow-[7px_7px_0_#000]">
                <p className="text-4xl font-black uppercase leading-none">
                  Good
                  <br />
                  code.
                  <br />
                  Real
                  <br />
                  impact.
                </p>

                <span className="text-4xl font-black">_</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-black bg-black text-white">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-4 px-5 py-6 font-mono text-[10px] font-black uppercase sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© 2026 John Clark. All rights reserved.</p>

          <p>
            Built with Next.js + Tailwind CSS{" "}
            <span className="text-[#d8ff31]">♥</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
