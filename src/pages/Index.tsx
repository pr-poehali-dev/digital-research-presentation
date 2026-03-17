import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { id: "hero", label: "Главная" },
  { id: "relevance", label: "Актуальность" },
  { id: "tasks", label: "Задачи" },
  { id: "advantages", label: "Преимущества" },
  { id: "equipment", label: "Оборудование" },
  { id: "results", label: "Результаты" },
];

const TASKS = [
  {
    num: "01",
    title: "Цифровизация знаний",
    desc: "Освоение современных цифровых инструментов для исследовательской деятельности: GeoGebra, Excel, онлайн-платформы анализа данных",
    sub: ["Сбор и обработка данных", "Визуализация результатов", "Цифровые отчёты"],
  },
  {
    num: "02",
    title: "Математическое моделирование",
    desc: "Построение математических моделей реальных процессов и явлений на основе собранных данных",
    sub: ["Постановка гипотез", "Верификация моделей", "Интерпретация выводов"],
  },
  {
    num: "03",
    title: "Самостоятельные исследования",
    desc: "Развитие навыков автономной постановки целей и проведения полноценных научных исследований",
    sub: ["Планирование эксперимента", "Оформление проекта", "Публичная защита"],
  },
];

const ADVANTAGES = [
  { icon: "Cpu", val: "87%", label: "рост интереса к точным наукам", color: "#4FC3F7" },
  { icon: "TrendingUp", val: "+34%", label: "улучшение успеваемости по математике", color: "#81C784" },
  { icon: "Users", val: "120+", label: "учащихся прошли программу", color: "#FFB74D" },
  { icon: "Award", val: "12", label: "призовых мест на олимпиадах", color: "#CE93D8" },
];

const EQUIPMENT = [
  {
    name: "Компьютерный класс",
    desc: "20 рабочих станций с профессиональным программным обеспечением",
    img: "https://cdn.poehali.dev/projects/6dac793f-6b1f-4cdd-bdfd-94aae5294296/files/62d711b6-a7c6-45b8-a00a-8ea3453f11a6.jpg",
  },
  {
    name: "Исследовательская лаборатория",
    desc: "Приборы и оборудование для научных экспериментов и проектной работы",
    img: "https://cdn.poehali.dev/projects/6dac793f-6b1f-4cdd-bdfd-94aae5294296/files/94c428b4-ca50-4a71-bc73-dc4249068396.jpg",
  },
];

const FEEDBACK = [
  { name: "Алина К., 8 класс", text: "Теперь я понимаю, зачем нужна математика — мы строили настоящие модели погоды!", role: "Ученица" },
  { name: "Марина Петрова", text: "Дочь стала сама искать задачи и решать их с помощью программ. Это невероятно!", role: "Родитель" },
  { name: "Иван Соколов", text: "Цифровые инструменты помогли мне выиграть районную олимпиаду по математике.", role: "Ученик, победитель олимпиады" },
];

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1400;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setVal(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{val}{suffix}</span>;
}

function BarChart() {
  const data = [
    { label: "2022", before: 42, after: 58 },
    { label: "2023", before: 48, after: 71 },
    { label: "2024", before: 51, after: 84 },
    { label: "2025", before: 53, after: 91 },
  ];
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setAnimated(true); observer.disconnect(); }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className="w-full">
      <div className="flex gap-4 mb-4 text-xs font-mono">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm" style={{ background: "#1E3A5F" }} />
          <span className="text-slate-400">До внедрения</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm" style={{ background: "#4FC3F7" }} />
          <span className="text-slate-400">После внедрения</span>
        </div>
      </div>
      <div className="flex items-end gap-3 h-40">
        {data.map((d, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full flex gap-1 items-end h-32">
              <div
                className="flex-1 rounded-sm transition-all duration-1000 ease-out"
                style={{
                  height: animated ? `${d.before}%` : "0%",
                  background: "#1E3A5F",
                  transitionDelay: `${i * 120}ms`,
                }}
              />
              <div
                className="flex-1 rounded-sm transition-all duration-1000 ease-out"
                style={{
                  height: animated ? `${d.after}%` : "0%",
                  background: "#4FC3F7",
                  transitionDelay: `${i * 120 + 60}ms`,
                }}
              />
            </div>
            <span className="text-xs font-mono text-slate-500">{d.label}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-3 font-mono">
        % учащихся, демонстрирующих интерес к исследовательской деятельности
      </p>
    </div>
  );
}

function RadarChart() {
  const skills = [
    { label: "Анализ данных", before: 35, after: 82 },
    { label: "Математика", before: 48, after: 79 },
    { label: "Цифр. инструменты", before: 22, after: 88 },
    { label: "Самостоятельность", before: 41, after: 75 },
    { label: "Коммуникация", before: 55, after: 83 },
    { label: "Критич. мышление", before: 38, after: 77 },
  ];
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setTimeout(() => setAnimated(true), 200); observer.disconnect(); }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const cx = 120, cy = 120, r = 85;
  const n = skills.length;
  const toXY = (i: number, pct: number) => {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    return { x: cx + (r * pct / 100) * Math.cos(angle), y: cy + (r * pct / 100) * Math.sin(angle) };
  };
  const polygon = (vals: number[]) =>
    vals.map((v, i) => { const p = toXY(i, v); return `${p.x},${p.y}`; }).join(" ");

  return (
    <div ref={ref} className="flex flex-col items-center w-full">
      <svg width="240" height="240" viewBox="0 0 240 240">
        {[20, 40, 60, 80, 100].map((lvl) => (
          <polygon key={lvl} points={polygon(Array(n).fill(lvl))} fill="none" stroke="#1E3A5F" strokeWidth="1" />
        ))}
        {skills.map((_, i) => {
          const end = toXY(i, 100);
          return <line key={i} x1={cx} y1={cy} x2={end.x} y2={end.y} stroke="#1E3A5F" strokeWidth="1" />;
        })}
        <polygon
          points={polygon(animated ? skills.map((s) => s.before) : Array(n).fill(0))}
          fill="rgba(30,58,95,0.6)"
          stroke="#2563EB"
          strokeWidth="1.5"
          style={{ transition: "all 1.2s ease-out" }}
        />
        <polygon
          points={polygon(animated ? skills.map((s) => s.after) : Array(n).fill(0))}
          fill="rgba(79,195,247,0.18)"
          stroke="#4FC3F7"
          strokeWidth="2"
          style={{ transition: "all 1.2s ease-out 0.3s" }}
        />
        {skills.map((s, i) => {
          const pos = toXY(i, 118);
          return (
            <text
              key={i}
              x={pos.x}
              y={pos.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="7.5"
              fill="#94a3b8"
              fontFamily="IBM Plex Mono"
            >
              {s.label}
            </text>
          );
        })}
      </svg>
      <div className="flex gap-5 text-xs font-mono mt-1">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-0.5 bg-blue-700" />
          <span className="text-slate-400">До программы</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-0.5" style={{ background: "#4FC3F7" }} />
          <span className="text-slate-400">После программы</span>
        </div>
      </div>
    </div>
  );
}

function useScrollSpy() {
  const [active, setActive] = useState("hero");
  useEffect(() => {
    const handler = () => {
      for (const item of [...NAV_ITEMS].reverse()) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(item.id);
          return;
        }
      }
      setActive("hero");
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return active;
}

export default function Index() {
  const active = useScrollSpy();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ background: "#05081C", color: "#E2E8F0", fontFamily: "'IBM Plex Sans', sans-serif" }}>
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{ background: "rgba(5,8,28,0.93)", backdropFilter: "blur(12px)", borderColor: "#0F1A36" }}
      >
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#4FC3F7" }} />
            <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: "13px", letterSpacing: "0.15em", color: "#CBD5E1", textTransform: "uppercase" }}>
              Точка роста
            </span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-3 py-1.5 rounded transition-all text-xs"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  color: active === item.id ? "#4FC3F7" : "#94a3b8",
                  background: active === item.id ? "rgba(79,195,247,0.1)" : "transparent",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button className="md:hidden" style={{ color: "#94a3b8" }} onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>
        {menuOpen && (
          <div
            className="md:hidden border-t px-4 pb-4 pt-2 flex flex-col gap-1"
            style={{ borderColor: "#0F1A36", background: "rgba(5,8,28,0.98)" }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left px-3 py-2 text-sm rounded"
                style={{ fontFamily: "'IBM Plex Mono', monospace", color: active === item.id ? "#4FC3F7" : "#94a3b8" }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(37,99,235,0.12) 0%, transparent 70%)" }}
          />
          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#4FC3F7" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 pt-24 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6"
                style={{ borderColor: "#4FC3F7", color: "#4FC3F7", background: "rgba(79,195,247,0.08)", fontSize: "11px", fontFamily: "'IBM Plex Mono', monospace" }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#4FC3F7" }} />
                Центр «Точка роста» · 2024–2025
              </div>
              <h1
                className="leading-tight mb-6"
                style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "#E2E8F0" }}
              >
                Развитие<br />
                <span style={{ color: "#4FC3F7" }}>исследовательских</span><br />
                навыков подростков
              </h1>
              <p className="mb-8" style={{ color: "#94a3b8", fontSize: "1.1rem", lineHeight: "1.7" }}>
                Интеграция цифровых технологий и математики в учебном процессе для учащихся 7-х классов
              </p>
              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={() => scrollTo("relevance")}
                  className="px-6 py-3 rounded transition-all hover:opacity-90 active:scale-95"
                  style={{ background: "#4FC3F7", color: "#05081C", fontFamily: "'Oswald', sans-serif", fontSize: "14px", letterSpacing: "0.08em" }}
                >
                  Смотреть презентацию
                </button>
                <button
                  onClick={() => scrollTo("results")}
                  className="px-6 py-3 rounded border transition-all"
                  style={{ borderColor: "#1E3A5F", color: "#E2E8F0", fontFamily: "'Oswald', sans-serif", fontSize: "14px", letterSpacing: "0.08em" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  Результаты →
                </button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{ background: "radial-gradient(circle, rgba(79,195,247,0.12) 0%, transparent 70%)" }}
              />
              <div className="grid grid-cols-2 gap-3">
                {ADVANTAGES.map((a, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-5 border"
                    style={{ background: "#0A1128", borderColor: "#0F1A36" }}
                  >
                    <div className="text-2xl mb-1" style={{ color: a.color, fontFamily: "'Oswald', sans-serif" }}>
                      <AnimatedNumber target={parseInt(a.val.replace(/\D/g, ""))} suffix={a.val.replace(/\d/g, "")} />
                    </div>
                    <p style={{ color: "#64748b", fontSize: "11px", fontFamily: "'IBM Plex Mono', monospace", lineHeight: 1.4 }}>
                      {a.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
            <Icon name="ChevronDown" size={20} style={{ color: "#1E3A5F" }} />
          </div>
        </div>
      </section>

      {/* RELEVANCE */}
      <section id="relevance" className="py-24 border-t" style={{ borderColor: "#0F1A36" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "#4FC3F7" }}>01 /</span>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#E2E8F0" }}>
              Актуальность проекта
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-2xl p-8 border" style={{ background: "#0A1128", borderColor: "#0F1A36" }}>
              <h3 className="text-xl mb-4" style={{ fontFamily: "'Oswald', sans-serif", color: "#CBD5E1" }}>Почему это важно?</h3>
              <p className="leading-relaxed mb-6" style={{ color: "#94a3b8", lineHeight: "1.75" }}>
                В эпоху цифровой трансформации способность анализировать данные и проводить самостоятельные
                исследования становится базовым навыком для успешной карьеры. Традиционная система образования
                не всегда успевает за темпом технологических изменений — центр «Точка роста» восполняет этот пробел.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: "Target", title: "Целевая группа", desc: "Учащиеся 7-х классов (12–14 лет) — период формирования исследовательского интереса" },
                  { icon: "BookOpen", title: "Предметная область", desc: "Математика и цифровые технологии в рамках программы центра «Точка роста»" },
                  { icon: "Clock", title: "Длительность", desc: "Учебный год 2024–2025, 34 занятия по 45 минут" },
                  { icon: "MapPin", title: "Место реализации", desc: "Кабинет «Точка роста», оснащённый современным оборудованием" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.03)" }}>
                    <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" style={{ background: "rgba(79,195,247,0.1)" }}>
                      <Icon name={item.icon as "Target"} size={16} style={{ color: "#4FC3F7" }} />
                    </div>
                    <div>
                      <p className="text-sm mb-0.5" style={{ fontFamily: "'Oswald', sans-serif", color: "#CBD5E1" }}>{item.title}</p>
                      <p style={{ color: "#64748b", fontSize: "11px", fontFamily: "'IBM Plex Mono', monospace", lineHeight: 1.45 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-8 border" style={{ background: "#0A1128", borderColor: "#0F1A36" }}>
              <h3 className="text-xl mb-6" style={{ fontFamily: "'Oswald', sans-serif", color: "#CBD5E1" }}>Динамика показателей</h3>
              <BarChart />
            </div>
          </div>
        </div>
      </section>

      {/* TASKS */}
      <section id="tasks" className="py-24 border-t" style={{ borderColor: "#0F1A36" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "#4FC3F7" }}>02 /</span>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#E2E8F0" }}>
              Основные задачи
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TASKS.map((task, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 border group transition-all duration-300"
                style={{ background: "#0A1128", borderColor: "#0F1A36" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(79,195,247,0.3)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#0F1A36")}
              >
                <div
                  className="text-5xl font-bold mb-4"
                  style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#4FC3F7", opacity: 0.2 }}
                >
                  {task.num}
                </div>
                <h3 className="text-xl mb-3" style={{ fontFamily: "'Oswald', sans-serif", color: "#E2E8F0" }}>{task.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#94a3b8", lineHeight: "1.65" }}>{task.desc}</p>
                <div className="space-y-2">
                  {task.sub.map((s, j) => (
                    <div key={j} className="flex items-center gap-2" style={{ fontSize: "11px", fontFamily: "'IBM Plex Mono', monospace", color: "#64748b" }}>
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#4FC3F7" }} />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-24 border-t" style={{ borderColor: "#0F1A36" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "#4FC3F7" }}>03 /</span>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#E2E8F0" }}>
              Преимущества подхода
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="mb-8 text-lg leading-relaxed" style={{ color: "#94a3b8", lineHeight: "1.75" }}>
                Интеграция цифровых технологий в обучение создаёт синергетический эффект: ученики видят
                практическое применение теории, а исследовательская деятельность становится естественной частью учёбы.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "Zap", title: "Мгновенная обратная связь", desc: "Цифровые инструменты позволяют сразу видеть результат эксперимента" },
                  { icon: "Network", title: "Межпредметные связи", desc: "Математика, информатика и естественные науки объединяются в единую систему" },
                  { icon: "Trophy", title: "Мотивация через достижение", desc: "Реальные исследовательские проекты создают ощущение значимости работы" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-4 rounded-xl border transition-all"
                    style={{ background: "#0A1128", borderColor: "#0F1A36" }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(79,195,247,0.2)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#0F1A36")}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(79,195,247,0.1)" }}>
                      <Icon name={item.icon as "Zap"} size={20} style={{ color: "#4FC3F7" }} />
                    </div>
                    <div>
                      <p className="text-sm mb-1" style={{ fontFamily: "'Oswald', sans-serif", color: "#CBD5E1" }}>{item.title}</p>
                      <p style={{ fontSize: "12px", fontFamily: "'IBM Plex Mono', monospace", color: "#64748b" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-8 border" style={{ background: "#0A1128", borderColor: "#0F1A36" }}>
              <h3 className="text-xl mb-1" style={{ fontFamily: "'Oswald', sans-serif", color: "#CBD5E1" }}>Развитие компетенций</h3>
              <p style={{ fontSize: "11px", fontFamily: "'IBM Plex Mono', monospace", color: "#64748b", marginBottom: "1.5rem" }}>
                Сравнительный анализ до и после программы
              </p>
              <RadarChart />
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPMENT */}
      <section id="equipment" className="py-24 border-t" style={{ borderColor: "#0F1A36" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "#4FC3F7" }}>04 /</span>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#E2E8F0" }}>
              Оборудование центра
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {EQUIPMENT.map((eq, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border" style={{ borderColor: "#0F1A36" }}>
                <div className="h-56 overflow-hidden">
                  <img
                    src={eq.img}
                    alt={eq.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6" style={{ background: "#0A1128" }}>
                  <h3 className="text-xl mb-2" style={{ fontFamily: "'Oswald', sans-serif", color: "#E2E8F0" }}>{eq.name}</h3>
                  <p style={{ color: "#64748b", fontSize: "12px", fontFamily: "'IBM Plex Mono', monospace" }}>{eq.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl p-6 border" style={{ background: "#0A1128", borderColor: "#0F1A36" }}>
            <h3 className="text-lg mb-4" style={{ fontFamily: "'Oswald', sans-serif", color: "#CBD5E1" }}>
              Программное обеспечение и платформы
            </h3>
            <div className="flex flex-wrap gap-2">
              {["GeoGebra", "Microsoft Excel", "Python", "Scratch", "Яндекс Учебник", "РЭШ", "Wolfram Alpha", "Desmos", "Google Таблицы", "Kahoot"].map(
                (tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full border"
                    style={{ borderColor: "#0F1A36", color: "#94a3b8", background: "rgba(255,255,255,0.04)", fontSize: "11px", fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    {tool}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="py-24 border-t" style={{ borderColor: "#0F1A36" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "#4FC3F7" }}>05 /</span>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#E2E8F0" }}>
              Оценка результатов
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {ADVANTAGES.map((a, i) => (
              <div key={i} className="rounded-2xl p-6 border text-center" style={{ background: "#0A1128", borderColor: "#0F1A36" }}>
                <div className="w-10 h-10 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: `${a.color}22` }}>
                  <Icon name={a.icon as "Cpu"} size={20} style={{ color: a.color }} />
                </div>
                <div className="text-3xl mb-2" style={{ fontFamily: "'Oswald', sans-serif", color: a.color }}>
                  <AnimatedNumber target={parseInt(a.val.replace(/\D/g, ""))} suffix={a.val.replace(/\d/g, "")} />
                </div>
                <p style={{ fontSize: "11px", fontFamily: "'IBM Plex Mono', monospace", color: "#64748b", lineHeight: 1.4 }}>{a.label}</p>
              </div>
            ))}
          </div>
          <h3 className="text-2xl mb-6" style={{ fontFamily: "'Oswald', sans-serif", color: "#CBD5E1" }}>Отзывы участников</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {FEEDBACK.map((fb, i) => (
              <div key={i} className="rounded-2xl p-6 border" style={{ background: "#0A1128", borderColor: "#0F1A36" }}>
                <div className="text-3xl mb-4" style={{ color: "#4FC3F7", fontFamily: "'Oswald', sans-serif", lineHeight: 1 }}>"</div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#94a3b8", lineHeight: "1.7", fontStyle: "italic" }}>
                  {fb.text}
                </p>
                <div className="border-t pt-4" style={{ borderColor: "#0F1A36" }}>
                  <p className="text-sm" style={{ fontFamily: "'Oswald', sans-serif", color: "#CBD5E1" }}>{fb.name}</p>
                  <p style={{ fontSize: "11px", fontFamily: "'IBM Plex Mono', monospace", color: "#64748b" }}>{fb.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-10" style={{ borderColor: "#0F1A36" }}>
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-lg" style={{ fontFamily: "'Oswald', sans-serif", color: "#CBD5E1", letterSpacing: "0.05em" }}>
              Центр «Точка роста»
            </p>
            <p style={{ fontSize: "11px", fontFamily: "'IBM Plex Mono', monospace", color: "#334155" }}>
              Развитие исследовательских навыков подростков · 2024–2025
            </p>
          </div>
          <div className="flex items-center gap-2" style={{ fontSize: "11px", fontFamily: "'IBM Plex Mono', monospace", color: "#1E3A5F" }}>
            <Icon name="GraduationCap" size={14} style={{ color: "#1E3A5F" }} />
            <span>Интеграция цифровых технологий в образование</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
