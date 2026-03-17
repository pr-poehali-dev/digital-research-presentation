import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const ACCENT = "#C8A96E";
const BORDER = "rgba(200,169,110,0.2)";
const CARD = "rgba(255,255,255,0.04)";
const DARK = "#0F1923";

function SH({ num, title }: { num: string; title: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, paddingBottom: 14, borderBottom: `1px solid ${BORDER}`, marginBottom: 0, flexShrink: 0 }}>
      <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: ACCENT, letterSpacing: "0.2em" }}>{num} /</span>
      <h2 style={{ fontFamily: "'Oswald',sans-serif", fontSize: "clamp(1rem,2.4vw,1.5rem)", color: "#F0EDE8", letterSpacing: "0.05em", fontWeight: 500, margin: 0 }}>{title}</h2>
    </div>
  );
}

function Dot({ color = ACCENT }: { color?: string }) {
  return <div style={{ width: 5, height: 5, borderRadius: "50%", background: color, flexShrink: 0, marginTop: 5 }} />;
}

function Card({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, ...style }}>{children}</div>;
}

function Tag({ text }: { text: string }) {
  return (
    <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 9, color: ACCENT, textTransform: "uppercase" as const, letterSpacing: "0.12em", display: "block", marginBottom: 8 }}>
      {text}
    </span>
  );
}

// ── SLIDES ──────────────────────────────────────────────────────────────────

function S0() {
  return (
    <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(200,169,110,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(200,169,110,.04) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
      <div style={{ position: "absolute", top: "12%", left: "10%", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle,rgba(200,169,110,.12) 0%,transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "8%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle,rgba(200,169,110,.07) 0%,transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: 680 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 28 }}>
          <div style={{ width: 36, height: 1, background: ACCENT }} />
          <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: ACCENT, letterSpacing: "0.22em", textTransform: "uppercase" }}>Центр «Точка роста» · 2024–2025</span>
          <div style={{ width: 36, height: 1, background: ACCENT }} />
        </div>
        <h1 style={{ fontFamily: "'Cormorant',serif", fontSize: "clamp(1.7rem,3.8vw,3rem)", fontWeight: 600, color: "#F0EDE8", lineHeight: 1.22, margin: "0 0 1.5rem" }}>
          Развитие исследовательских навыков подростков<br />через интеграцию цифровых технологий и математики
        </h1>
        <div style={{ width: 72, height: 2, background: `linear-gradient(90deg,transparent,${ACCENT},transparent)`, margin: "0 auto 1.5rem" }} />
        <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 14, color: "rgba(240,237,232,.5)", margin: "0 0 2rem", lineHeight: 1.6 }}>в учебном процессе центра «Точка роста»</p>
        <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 13, color: "rgba(240,237,232,.35)", fontStyle: "italic", margin: "0 0 6px" }}>[ФИО учителя] · [Должность] · [Школа] · [Населённый пункт]</p>
        <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: "rgba(200,169,110,.4)", letterSpacing: "0.15em" }}>2024 — 2025 ГОД</p>
      </div>
    </div>
  );
}

function S1() {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", padding: "2rem 2.5rem", overflow: "hidden", gap: 16 }}>
      <SH num="01" title="Актуальность и цель" />
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, minHeight: 0 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { icon: "AlertCircle", label: "Проблема", text: "Традиционная система образования не успевает за темпом технологических изменений. Подростки не видят практического применения теоретических знаний." },
            { icon: "Users", label: "Целевая группа", text: "Учащиеся 7-х классов (12–14 лет) — ключевой период формирования исследовательского интереса и критического мышления." },
          ].map((item, i) => (
            <Card key={i} style={{ padding: "1.1rem 1.3rem", flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <Icon name={item.icon as "AlertCircle"} size={13} style={{ color: ACCENT }} />
                <Tag text={item.label} />
              </div>
              <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 13, color: "rgba(240,237,232,.7)", lineHeight: 1.65, margin: 0 }}>{item.text}</p>
            </Card>
          ))}
        </div>
        <Card style={{ padding: "1.4rem 1.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <Icon name="Target" size={13} style={{ color: ACCENT }} />
              <Tag text="Цель проекта" />
            </div>
            <p style={{ fontFamily: "'Cormorant',serif", fontSize: "clamp(.9rem,1.7vw,1.2rem)", color: "#F0EDE8", lineHeight: 1.5, fontStyle: "italic", margin: 0 }}>
              «Создание условий для эффективного освоения учащимися методов исследовательской деятельности с применением цифровых технологий»
            </p>
          </div>
          <div style={{ marginTop: 16, paddingTop: 14, borderTop: `1px solid ${BORDER}` }}>
            {[
              { icon: "Calendar", text: "Учебный год 2024–2025" },
              { icon: "Clock", text: "34 занятия по 45 минут" },
              { icon: "BookOpen", text: "Математика + цифровые технологии" },
            ].map((r, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <Icon name={r.icon as "Calendar"} size={12} style={{ color: ACCENT, flexShrink: 0 }} />
                <span style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 12, color: "rgba(240,237,232,.52)" }}>{r.text}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

function S2() {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", padding: "2rem 2.5rem", overflow: "hidden", gap: 16 }}>
      <SH num="02" title="Основные задачи" />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14, justifyContent: "center" }}>
        <div style={{ background: "rgba(200,169,110,.07)", border: "1px solid rgba(200,169,110,.3)", borderRadius: 14, padding: "1.2rem 1.6rem", display: "flex", alignItems: "flex-start", gap: 18 }}>
          <span style={{ fontFamily: "'Cormorant',serif", fontSize: 40, color: ACCENT, lineHeight: 1, flexShrink: 0, marginTop: -4 }}>→</span>
          <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 15, color: "#F0EDE8", lineHeight: 1.62, margin: 0 }}>
            Освоение современной молодёжью основ цифровизации и её применимости в исследовании реальной действительности
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {[
            { icon: "TrendingUp", title: "Устойчивый интерес", desc: "Формирование интереса к математическим дисциплинам и применению цифровых технологий в учёбе и жизни" },
            { icon: "Compass",    title: "Самостоятельность",  desc: "Развитие навыков постановки целей, планирования и проведения самостоятельных исследований" },
          ].map((s, i) => (
            <Card key={i} style={{ padding: "1.1rem 1.3rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <Icon name={s.icon as "TrendingUp"} size={13} style={{ color: ACCENT }} />
                <Tag text={s.title} />
              </div>
              <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 13, color: "rgba(240,237,232,.62)", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function S3() {
  const tools = ["GeoGebra","Microsoft Excel","Desmos","Python","Wolfram Alpha","Google Таблицы","Scratch","Яндекс Учебник","РЭШ","Kahoot"];
  const steps = [
    { icon: "Database",   label: "Сбор",          desc: "Наблюдения, опросы" },
    { icon: "Cpu",        label: "Обработка",     desc: "Анализ данных" },
    { icon: "LineChart",  label: "Интерпретация", desc: "Закономерности" },
    { icon: "FileText",   label: "Представление", desc: "Отчёты, проекты" },
  ];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", padding: "2rem 2.5rem", overflow: "hidden", gap: 16 }}>
      <SH num="03" title="Методология и инструменты" />
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "3fr 2fr", gap: 14, minHeight: 0 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Card style={{ padding: "1.1rem" }}>
            <Tag text="Принцип работы с данными" />
            <div style={{ display: "flex", alignItems: "stretch", gap: 6 }}>
              {steps.map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, flex: 1 }}>
                  <div style={{ flex: 1, background: "rgba(200,169,110,.05)", border: `1px solid ${BORDER}`, borderRadius: 10, padding: "0.65rem 0.4rem", textAlign: "center" }}>
                    <Icon name={s.icon as "Database"} size={15} style={{ color: ACCENT, margin: "0 auto 3px" }} />
                    <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 8, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.07em", margin: "0 0 2px" }}>{s.label}</p>
                    <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 10, color: "rgba(240,237,232,.4)", lineHeight: 1.3, margin: 0 }}>{s.desc}</p>
                  </div>
                  {i < steps.length - 1 && <Icon name="ChevronRight" size={11} style={{ color: "rgba(200,169,110,.3)", flexShrink: 0 }} />}
                </div>
              ))}
            </div>
          </Card>
          <Card style={{ padding: "1.1rem", flex: 1 }}>
            <Tag text="Примеры заданий" />
            {[
              "Построение математических моделей реальных явлений (погода, демография, финансы)",
              "Анализ статистических данных с визуализацией в GeoGebra",
              "Интерактивные графики по результатам собственных опросов учащихся",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 10 }}>
                <Dot />
                <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 12.5, color: "rgba(240,237,232,.65)", lineHeight: 1.55, margin: 0 }}>{item}</p>
              </div>
            ))}
          </Card>
        </div>
        <Card style={{ padding: "1.1rem" }}>
          <Tag text="Цифровые платформы" />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {tools.map(t => (
              <span key={t} style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: "rgba(240,237,232,.58)", background: "rgba(255,255,255,.04)", border: "1px solid rgba(200,169,110,.14)", borderRadius: 6, padding: "3px 8px" }}>{t}</span>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

function S4() {
  const stages = [
    { num: "I",   title: "Изучение основ",   color: ACCENT,    items: ["Знакомство с ключевыми понятиями","Постановка исследовательских задач","Освоение цифровых инструментов"] },
    { num: "II",  title: "Практика",         color: "#81C784", items: ["Практические задания с реальными данными","Построение математических моделей","Командная и индивидуальная работа"] },
    { num: "III", title: "Итоговые проекты", color: "#64B5F6", items: ["Оформление исследовательских отчётов","Подготовка проектов к защите","Публичное представление результатов"] },
  ];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", padding: "2rem 2.5rem", overflow: "hidden", gap: 16 }}>
      <SH num="04" title="Этапы реализации" />
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
        {stages.map((s, i) => (
          <div key={i} style={{ background: CARD, border: `1px solid ${s.color}40`, borderRadius: 16, padding: "1.5rem", display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: "'Cormorant',serif", fontSize: 48, color: s.color, opacity: .2, lineHeight: 1, marginBottom: 4 }}>{s.num}</div>
            <p style={{ fontFamily: "'Oswald',sans-serif", fontSize: 16, color: "#F0EDE8", letterSpacing: "0.04em", marginBottom: 10 }}>{s.title}</p>
            <div style={{ width: 26, height: 2, background: s.color, marginBottom: 14, opacity: .7 }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
              {s.items.map((item, j) => (
                <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <Dot color={s.color} />
                  <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 12.5, color: "rgba(240,237,232,.65)", lineHeight: 1.55, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function S5() {
  const eq = [
    { icon: "Monitor",      label: "Компьютерный класс", desc: "20 рабочих станций с ПО" },
    { icon: "Tablet",       label: "Планшеты",           desc: "Для полевых исследований" },
    { icon: "Printer",      label: "МФУ",                desc: "Печать и сканирование" },
    { icon: "Wifi",         label: "Интернет",           desc: "Высокоскоростной доступ" },
    { icon: "FlaskConical", label: "Лаборатория",        desc: "Приборы и реактивы" },
    { icon: "Projector",    label: "Проектор",           desc: "Интерактивная доска" },
  ];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", padding: "2rem 2.5rem", overflow: "hidden", gap: 16 }}>
      <SH num="05" title="Ресурсы и оборудование" />
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, minHeight: 0 }}>
        <Card style={{ padding: "1.3rem" }}>
          <Tag text="Техническое оснащение" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {eq.map((e, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "0.65rem 0.8rem", borderRadius: 10, background: "rgba(255,255,255,.03)" }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: "rgba(200,169,110,.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name={e.icon as "Monitor"} size={13} style={{ color: ACCENT }} />
                </div>
                <div>
                  <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 11.5, color: "#F0EDE8", fontWeight: 500, margin: 0 }}>{e.label}</p>
                  <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 8.5, color: "rgba(240,237,232,.32)", margin: 0 }}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card style={{ padding: "1.3rem" }}>
          <Tag text="Фото кабинета «Точка роста»" />
          <div style={{ background: "rgba(255,255,255,.02)", border: "1px dashed rgba(200,169,110,.18)", borderRadius: 12, aspectRatio: "16/9", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <Icon name="ImagePlus" size={24} style={{ color: "rgba(200,169,110,.25)" }} />
            <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 9, color: "rgba(240,237,232,.2)", textAlign: "center", margin: 0 }}>Добавьте фотографию<br />вашего кабинета</p>
          </div>
        </Card>
      </div>
    </div>
  );
}

function S6() {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", padding: "2rem 2.5rem", overflow: "hidden", gap: 16 }}>
      <SH num="06" title="Пример успешного проекта" />
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16, minHeight: 0 }}>
        <Card style={{ padding: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "rgba(200,169,110,.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="Star" size={15} style={{ color: ACCENT }} />
            </div>
            <div>
              <p style={{ fontFamily: "'Oswald',sans-serif", fontSize: 15, color: "#F0EDE8", letterSpacing: "0.04em", margin: 0 }}>[Название проекта учащегося]</p>
              <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 9, color: "rgba(200,169,110,.5)", margin: 0 }}>[ФИО ученика] · 7 класс · 2024–2025</p>
            </div>
          </div>
          <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 13, color: "rgba(240,237,232,.6)", lineHeight: 1.65, margin: "0 0 16px" }}>
            Опишите суть проекта: что исследовал ученик, какие данные собирал, какие инструменты использовал. Это место для вашего лучшего и конкретного примера.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
            {["Постановка задачи","Методы исследования","Ключевой вывод"].map((label, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,.03)", borderRadius: 10, padding: "0.7rem", textAlign: "center" }}>
                <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 8, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 4px" }}>{label}</p>
                <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 11, color: "rgba(240,237,232,.28)", margin: 0 }}>Заполните</p>
              </div>
            ))}
          </div>
        </Card>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Card style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <Icon name="Image" size={22} style={{ color: "rgba(200,169,110,.2)" }} />
            <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 8, color: "rgba(240,237,232,.17)", textAlign: "center", margin: 0 }}>Фото / схема<br />эксперимента</p>
          </Card>
          <Card style={{ padding: "1rem" }}>
            <Tag text="Результат" />
            <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 11.5, color: "rgba(240,237,232,.42)", lineHeight: 1.5, margin: 0 }}>Главный итог и достижение проекта</p>
          </Card>
        </div>
      </div>
    </div>
  );
}

function S7() {
  const metrics = [
    { val: "↑ 34%", label: "Успеваемость по математике",      color: "#81C784" },
    { val: "87%",   label: "Рост интереса к точным наукам",   color: ACCENT },
    { val: "12",    label: "Призовых мест на олимпиадах",     color: "#CE93D8" },
    { val: "120+",  label: "Учащихся прошли программу",       color: "#64B5F6" },
  ];
  const fb = [
    { role: "Ученица",              text: "Теперь я понимаю, зачем нужна математика — мы строили настоящие модели погоды!" },
    { role: "Родитель",             text: "Дочь стала сама искать задачи и решать их с помощью программ. Это невероятно!" },
    { role: "Победитель олимпиады", text: "Цифровые инструменты помогли мне выиграть районную олимпиаду по математике." },
  ];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", padding: "2rem 2.5rem", overflow: "hidden", gap: 16 }}>
      <SH num="07" title="Оценка эффективности" />
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, minHeight: 0 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            {metrics.map((m, i) => (
              <div key={i} style={{ background: CARD, border: "1px solid rgba(200,169,110,.14)", borderRadius: 12, padding: "0.9rem", textAlign: "center" }}>
                <p style={{ fontFamily: "'Cormorant',serif", fontSize: 32, fontWeight: 600, color: m.color, lineHeight: 1, margin: 0 }}>{m.val}</p>
                <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 8, color: "rgba(240,237,232,.43)", marginTop: 4, lineHeight: 1.4, margin: "4px 0 0" }}>{m.label}</p>
              </div>
            ))}
          </div>
          <Card style={{ padding: "1rem", flex: 1 }}>
            <Tag text="Итоги контрольных срезов" />
            <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 12.5, color: "rgba(240,237,232,.52)", lineHeight: 1.62, margin: 0 }}>
              Добавьте конкретные данные до и после программы: средний балл, количество участников, динамику показателей.
            </p>
          </Card>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 9, color: ACCENT, letterSpacing: "0.15em", textTransform: "uppercase", margin: 0 }}>Обратная связь</p>
          {fb.map((f, i) => (
            <Card key={i} style={{ padding: "0.85rem 1.1rem", flex: 1 }}>
              <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 8, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 5px" }}>{f.role}</p>
              <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 12.5, color: "rgba(240,237,232,.66)", lineHeight: 1.55, fontStyle: "italic", margin: 0 }}>«{f.text}»</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function S8() {
  const items = [
    { icon: "Zap",     title: "Практическая значимость", desc: "Ученики видят, как теория применяется в реальных задачах — это меняет мотивацию к учёбе" },
    { icon: "Network", title: "Межпредметные связи",     desc: "Математика, информатика и науки образуют единую исследовательскую систему" },
    { icon: "Award",   title: "Мотивация через успех",   desc: "Реальные проекты формируют чувство значимости работы и желание двигаться дальше" },
    { icon: "Brain",   title: "Критическое мышление",    desc: "Исследования развивают умение ставить гипотезы и проверять их на данных" },
    { icon: "Users",   title: "Командная работа",        desc: "Совместные проекты учат коммуникации, распределению ролей, ответственности" },
    { icon: "Repeat",  title: "Цифровая грамотность",   desc: "Освоение профессиональных инструментов даёт конкурентное преимущество" },
  ];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", padding: "2rem 2.5rem", overflow: "hidden", gap: 16 }}>
      <SH num="08" title="Преимущества подхода" />
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
        {items.map((item, i) => (
          <Card key={i} style={{ padding: "1.1rem 1.2rem" }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "rgba(200,169,110,.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
              <Icon name={item.icon as "Zap"} size={15} style={{ color: ACCENT }} />
            </div>
            <p style={{ fontFamily: "'Oswald',sans-serif", fontSize: 13, color: "#F0EDE8", letterSpacing: "0.04em", margin: "0 0 6px" }}>{item.title}</p>
            <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 12, color: "rgba(240,237,232,.56)", lineHeight: 1.55, margin: 0 }}>{item.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

function S9() {
  const plans = [
    { icon: "GitBranch", title: "Масштабирование",   desc: "Распространение проекта на параллельные классы и другие учреждения района" },
    { icon: "Folder",    title: "Портфолио учащихся", desc: "Каждый проект становится частью цифрового портфолио для поступления и конкурсов" },
    { icon: "Handshake", title: "Партнёрства",        desc: "Сотрудничество с родителями, специалистами, учёными и университетами" },
    { icon: "Globe",     title: "Цифровая среда",     desc: "Единая онлайн-платформа для хранения и представления исследовательских работ" },
  ];
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", padding: "2rem 2.5rem", overflow: "hidden", gap: 16 }}>
      <SH num="09" title="Дальнейшее развитие" />
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignContent: "center" }}>
        {plans.map((p, i) => (
          <Card key={i} style={{ padding: "1.3rem 1.5rem", display: "flex", gap: 14, alignItems: "flex-start" }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(200,169,110,.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon name={p.icon as "GitBranch"} size={17} style={{ color: ACCENT }} />
            </div>
            <div>
              <p style={{ fontFamily: "'Oswald',sans-serif", fontSize: 14, color: "#F0EDE8", letterSpacing: "0.04em", margin: "0 0 5px" }}>{p.title}</p>
              <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 12.5, color: "rgba(240,237,232,.56)", lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function S10() {
  return (
    <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(200,169,110,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(200,169,110,.04) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
      <div style={{ position: "absolute", top: "18%", left: "18%", right: "18%", bottom: "18%", borderRadius: "50%", background: "radial-gradient(circle,rgba(200,169,110,.07) 0%,transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "relative" }}>
        <div style={{ fontFamily: "'Cormorant',serif", fontSize: "clamp(3rem,7vw,5.5rem)", color: ACCENT, opacity: .1, lineHeight: 1, marginBottom: "-1rem" }}>✦</div>
        <h2 style={{ fontFamily: "'Cormorant',serif", fontSize: "clamp(1.7rem,4vw,3rem)", fontWeight: 600, color: "#F0EDE8", lineHeight: 1.22, margin: "0 0 1.25rem" }}>Спасибо за внимание!</h2>
        <div style={{ width: 64, height: 2, background: `linear-gradient(90deg,transparent,${ACCENT},transparent)`, margin: "0 auto 1.75rem" }} />
        <p style={{ fontFamily: "'IBM Plex Sans',sans-serif", fontSize: 14, color: "rgba(240,237,232,.46)", margin: "0 0 6px" }}>[ФИО учителя] · [Должность]</p>
        <p style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: "rgba(200,169,110,.4)", margin: 0 }}>[Школа] · [Населённый пункт] · [Контакт]</p>
      </div>
    </div>
  );
}

const SLIDES = [S0,S1,S2,S3,S4,S5,S6,S7,S8,S9,S10];
const LABELS = ["Титул","Актуальность","Задачи","Методология","Этапы","Ресурсы","Пример","Оценка","Преимущества","Развитие","Финал"];

// ── MAIN ─────────────────────────────────────────────────────────────────────

export default function Index() {
  const [cur, setCur] = useState(0);
  const [dir, setDir] = useState<1|-1>(1);
  const [anim, setAnim] = useState(false);
  const total = SLIDES.length;

  const go = useCallback((idx: number) => {
    if (anim || idx === cur || idx < 0 || idx >= total) return;
    setDir(idx > cur ? 1 : -1);
    setAnim(true);
    setTimeout(() => { setCur(idx); setAnim(false); }, 220);
  }, [anim, cur, total]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (["ArrowRight","ArrowDown"," "].includes(e.key)) { e.preventDefault(); go(cur + 1); }
      if (["ArrowLeft","ArrowUp"].includes(e.key)) { e.preventDefault(); go(cur - 1); }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [go, cur]);

  const SlideEl = SLIDES[cur];

  return (
    <div style={{ background: DARK, height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* TOP */}
      <div style={{ background: "rgba(15,25,35,.96)", borderBottom: `1px solid ${BORDER}`, padding: "0 1.25rem", height: 42, display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: ACCENT }} />
          <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 9, color: "rgba(200,169,110,.55)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Точка роста · Презентация</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
          {LABELS.map((lbl, i) => (
            <button key={i} onClick={() => go(i)} title={lbl}
              style={{ width: 26, height: 26, borderRadius: 6, border: "none", cursor: "pointer", background: cur === i ? "rgba(200,169,110,.14)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .15s" }}>
              <div style={{ width: cur === i ? 12 : 4, height: 4, borderRadius: 2, background: cur === i ? ACCENT : "rgba(200,169,110,.22)", transition: "all .2s" }} />
            </button>
          ))}
        </div>
        <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: "rgba(200,169,110,.4)" }}>{cur + 1} / {total}</span>
      </div>

      {/* SLIDE */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          opacity: anim ? 0 : 1,
          transform: anim ? `translateY(${dir > 0 ? 16 : -16}px)` : "translateY(0)",
          transition: "opacity .22s ease, transform .22s ease",
        }}>
          <SlideEl />
        </div>
      </div>

      {/* BOTTOM */}
      <div style={{ background: "rgba(15,25,35,.96)", borderTop: `1px solid ${BORDER}`, padding: "0 1.25rem", height: 48, display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
        <button onClick={() => go(cur - 1)} disabled={cur === 0}
          style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 14px", borderRadius: 8, border: `1px solid ${BORDER}`, background: "transparent", cursor: cur === 0 ? "not-allowed" : "pointer", opacity: cur === 0 ? 0.3 : 1, transition: "opacity .15s" }}>
          <Icon name="ChevronLeft" size={15} style={{ color: ACCENT }} />
          <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: "rgba(240,237,232,.65)" }}>Назад</span>
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          {Array.from({ length: total }).map((_, i) => (
            <button key={i} onClick={() => go(i)}
              style={{ width: i === cur ? 18 : 5, height: 5, borderRadius: 3, border: "none", cursor: "pointer", background: i === cur ? ACCENT : "rgba(200,169,110,.2)", transition: "all .25s", padding: 0 }} />
          ))}
        </div>

        <button onClick={() => go(cur + 1)} disabled={cur === total - 1}
          style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 14px", borderRadius: 8, border: `1px solid rgba(200,169,110,.4)`, background: cur === total - 1 ? "transparent" : "rgba(200,169,110,.1)", cursor: cur === total - 1 ? "not-allowed" : "pointer", opacity: cur === total - 1 ? 0.3 : 1, transition: "opacity .15s" }}>
          <span style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, color: ACCENT }}>Далее</span>
          <Icon name="ChevronRight" size={15} style={{ color: ACCENT }} />
        </button>
      </div>
    </div>
  );
}
