const NAV_ITEMS = [
  { label: "Project", href: "#project" },
  { label: "Architecture", href: "#architecture" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const STACK = ["NEXT.JS", "REACT", "TYPESCRIPT", "POSTGRESQL", "PRISMA"];

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
  "Manage orders and customer relationships",
  "Track sales and business performance",
  "Secure multi tenant architecture",
  "Role based access control",
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
    items: ["PostgreSQL", "Prisma ORM"],
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
  "Prisma ORM",
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

function OrdersPreview() {
  const orders = [
    ["#1024", "Maria Santos", "₱1,250", "Completed", "May 24"],
    ["#1023", "Juan Dela Cruz", "₱850", "Completed", "May 24"],
    ["#1022", "Ana Reyes", "₱560", "Preparing", "May 23"],
    ["#1021", "Pedro Garcia", "₱1,120", "Pending", "May 23"],
    ["#1020", "Lisa Manalo", "₱620", "Completed", "May 22"],
  ];

  return (
    <div className="relative">
      <div className="absolute inset-0 translate-x-3 translate-y-3 border-2 border-black bg-[#ff6b4a]" />

      <div className="relative border-2 border-black bg-[#fffdf8]">
        <div className="grid grid-cols-[90px_1fr] sm:grid-cols-[120px_1fr]">
          <aside className="border-r-2 border-black bg-black p-3 text-white">
            <p className="mb-6 text-xs font-black">
              Paninda
              <span className="text-[#d8ff31]">Hub</span>
            </p>

            {[
              "Dashboard",
              "Orders",
              "Customers",
              "Products",
              "Analytics",
              "Payments",
            ].map((item) => (
              <div
                key={item}
                className={`mb-1 px-2 py-2 font-mono text-[8px] ${
                  item === "Orders"
                    ? "bg-[#8b5cf6] font-black"
                    : "text-neutral-300"
                }`}
              >
                {item}
              </div>
            ))}
          </aside>

          <div className="min-w-0 p-4">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-black">Orders</h3>

              <button className="border-2 border-black bg-[#8b5cf6] px-3 py-2 font-mono text-[8px] font-black shadow-[3px_3px_0_#000]">
                + NEW ORDER
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px] border-collapse font-mono text-[8px]">
                <thead>
                  <tr className="border-y-2 border-black text-left">
                    <th className="p-2">ORDER</th>
                    <th className="p-2">CUSTOMER</th>
                    <th className="p-2">TOTAL</th>
                    <th className="p-2">STATUS</th>
                    <th className="p-2">DATE</th>
                  </tr>
                </thead>

                <tbody>
                  {orders.map(([id, customer, total, status, date]) => (
                    <tr key={id} className="border-b border-black/30">
                      <td className="p-2 font-black">{id}</td>
                      <td className="p-2">{customer}</td>
                      <td className="p-2">{total}</td>
                      <td className="p-2">
                        <span
                          className={`border border-black px-2 py-1 ${
                            status === "Completed"
                              ? "bg-[#b8f7a7]"
                              : status === "Preparing"
                                ? "bg-[#ffe760]"
                                : "bg-[#ffad65]"
                          }`}
                        >
                          {status}
                        </span>
                      </td>
                      <td className="p-2">{date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
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
              J.
            </span>

            <span className="text-xl font-black uppercase">John</span>
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
          <p className="mb-5 font-mono text-xs font-black uppercase text-[#7045e8]">
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
        <div className="border-2 border-black bg-[#fffdf8]">
          <SectionNumber number="01">Featured Project</SectionNumber>

          <div className="grid gap-12 p-6 lg:grid-cols-[0.7fr_1.3fr] lg:p-10">
            <div className="flex flex-col justify-center">
              <p className="font-mono text-xs font-black uppercase text-[#7045e8]">
                SaaS Platform
              </p>

              <h2 className="mt-3 text-5xl font-black uppercase sm:text-6xl">
                PanindaHub
              </h2>

              <p className="mt-3 text-lg font-semibold">
                SaaS platform for small food businesses
              </p>

              <p className="mt-6 max-w-lg font-mono text-xs leading-6">
                PanindaHub helps small food businesses manage orders, customers,
                menus, payments and analytics from a single centralized
                dashboard.
              </p>

              <ul className="mt-7 space-y-3">
                {PROJECT_FEATURES.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 font-mono text-xs font-bold"
                  >
                    <span className="text-[#7045e8]">■</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap gap-4">
                <BrutalButton href="#" variant="orange">
                  Live Demo ↗
                </BrutalButton>

                <BrutalButton href="#architecture" variant="white">
                  Case Study
                </BrutalButton>

                <BrutalButton href="https://github.com/" variant="black">
                  GitHub ↗
                </BrutalButton>
              </div>
            </div>

            <OrdersPreview />
          </div>
        </div>
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
                <li>■ Database access is handled through Prisma.</li>
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

                <div className="relative flex aspect-square items-center justify-center border-2 border-black bg-[#c4a7ff] text-7xl">
                  👨‍💻
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
                    ✉ john.dev@example.com
                  </a>

                  <div className="border-2 border-black bg-[#fffdf8] px-4 py-3 font-mono text-xs shadow-[3px_3px_0_#000]">
                    ◉ Philippines
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <BrutalButton href="https://github.com/" variant="white">
                    GH
                  </BrutalButton>

                  <BrutalButton href="#" variant="white">
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
          <p>© 2026 John. All rights reserved.</p>

          <p>
            Built with Next.js + Tailwind CSS{" "}
            <span className="text-[#d8ff31]">♥</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
