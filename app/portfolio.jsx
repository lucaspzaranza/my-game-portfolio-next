"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import portfolioData from "../src/data/data.json";

const { aboutMe, myProjectsData } = portfolioData;

const cartridgeImages = [
  "super-bomberman-4-cartridge.png", "roleta-cartridge.png", "flappy-bird-cartridge.png",
  "catch-game-cartridge.png", "slot-machine-cartridge.png", "match-game-cartridge.png",
  "virtual-keyboard-cartridge.png", "penosas-strike-cartridge.png", "math-factory-cartridge.png",
  "doom-of-the-penosas-cartridge.png", "snake-cartridge.png", "diep.io-cartridge.png",
  "super-bomberman-4-cartridge.png", "rg-cartridge.png", "emotionmeter-cartridge.png",
  "insta-cartridge.png", "mesh-cartridge.png", "cursive-cartridge.png", "puzzle-cartridge.png",
  "fantasy-cartridge.png", "supermarket-cartridge.png", "runner-cartridge.png", "limpa-copo.png",
  "love-quizz.png",
];

const copy = {
  pt: {
    nav: ["Início", "Sobre", "Projetos", "Experiência", "Contato"],
    menuPrompt: "SELECIONE UMA OPÇÃO",
    menuHint: "USE ↑ ↓ E ENTER PARA NAVEGAR",
    backToMenu: "VOLTAR AO MENU PRINCIPAL",
    musicOn: "MÚSICA: ON", musicOff: "MÚSICA: OFF", musicVolume: "VOLUME DA MÚSICA",
    eyebrow: "DESENVOLVEDOR UNITY · C#",
    headline: "Lucas Zaranza",
    intro: "Desenvolvedor de jogos com mais de 10 anos criando experiências em Unity — de protótipos multiplayer a jogos publicados e projetos WebGL.",
    projectsCta: "VER PROJETOS", aboutCta: "MINHA HISTÓRIA", status: "DISPONÍVEL PARA O PRÓXIMO PROJETO",
    xp: "10+ ANOS", xpLabel: "CRIANDO JOGOS", shipped: "24", shippedLabel: "PROJETOS NO PORTFÓLIO",
    aboutEyebrow: "PLAYER PROFILE", aboutTitle: "Oi, eu sou Lucas.", aboutText: "Minha paixão começou com Super Mario e Mega Man X. Aos 14 anos, descobri que podia criar meus próprios jogos no RPG Maker 2003. Em 2013, comecei a aprender Unity e C# — e desde então sigo construindo mundos, mecânicas e ferramentas para jogadores.",
    skills: ["Unity & C#", "Gameplay 2D", "Mirror Multiplayer", "WebGL & Android", "Pixel art", "Roblox / Lua"],
    career: "TRILHA DE CARREIRA", careerTitle: "Experiência em jogo", projectsEyebrow: "SAVE SELECT", projectsTitle: "Projetos selecionados", projectHint: "Escolha um cartucho para ver os detalhes.", all: "TODOS", game: "DESTAQUES", webgl: "JOGÁVEIS", more: "ABRIR DETALHES", details: "DETALHES DO PROJETO", year: "ANO", repo: "CÓDIGO-FONTE", demo: "JOGAR DEMO", video: "VER GAMEPLAY", close: "FECHAR",
    contactEyebrow: "PLAYER 1 READY", contactTitle: "Vamos criar algo legal?", contactText: "Estou aberto a conversas sobre jogos, ferramentas e experiências interativas.", email: "MANDAR E-MAIL", linkedin: "LINKEDIN", github: "GITHUB", whatsapp: "WHATSAPP", footer: "Feito com carinho e alguns continues.", themeLabel: "TEMA", jrpg: "JRPG", turbo: "TURBO 3000",
    experience: [
      { dates: "2025 — 2026", role: "Fullstack Developer", company: "Botbot", detail: "Interfaces com React, Next.js e Tailwind; integração de robôs e recursos conectados a hardware com ROS." },
      { dates: "2022 — 2024", role: "Unity Developer · Freelance", company: "Jogos para web e eventos", detail: "Oito jogos educativos WebGL, além de experiências para campanhas e eventos, com suporte a mobile e desktop." },
      { dates: "2022 — 2023", role: "Mid Unity3D Game Developer", company: "Kokku", detail: "Desenvolvimento de jogos multiplataforma em Unity/C# e experiências Roblox com Lua, em times ágeis multidisciplinares." },
      { dates: "2014 — 2021", role: "Independent Game Developer", company: "Projetos autorais", detail: "Jogos para eventos, Penosas Strike no Google Play, teclado virtual reutilizável e protótipo multiplayer com Mirror." },
    ],
  },
  en: {
    nav: ["Home", "About", "Projects", "Experience", "Contact"],
    menuPrompt: "SELECT AN OPTION",
    menuHint: "USE ↑ ↓ AND ENTER TO NAVIGATE",
    backToMenu: "BACK TO MAIN MENU",
    musicOn: "MUSIC: ON", musicOff: "MUSIC: OFF", musicVolume: "MUSIC VOLUME",
    eyebrow: "UNITY GAME DEVELOPER · C#",
    headline: "Lucas Zaranza",
    intro: "Game developer with 10+ years creating Unity experiences — from multiplayer prototypes to published games and WebGL projects.",
    projectsCta: "VIEW PROJECTS", aboutCta: "MY STORY", status: "OPEN TO THE NEXT PROJECT",
    xp: "10+ YEARS", xpLabel: "MAKING GAMES", shipped: "24", shippedLabel: "PORTFOLIO PROJECTS",
    aboutEyebrow: "PLAYER PROFILE", aboutTitle: "Hey, I'm Lucas.", aboutText: "It started with Super Mario and Mega Man X. At 14, I discovered I could build my own games in RPG Maker 2003. In 2013, I started learning Unity and C# — and I've been building worlds, mechanics, and tools for players ever since.",
    skills: ["Unity & C#", "2D gameplay", "Mirror multiplayer", "WebGL & Android", "Pixel art", "Roblox / Lua"],
    career: "CAREER MODE", careerTitle: "Experience log", projectsEyebrow: "SAVE SELECT", projectsTitle: "Selected projects", projectHint: "Select a cartridge to see the details.", all: "ALL", game: "FEATURED", webgl: "PLAYABLE", more: "OPEN DETAILS", details: "PROJECT DETAILS", year: "YEAR", repo: "SOURCE CODE", demo: "PLAY DEMO", video: "WATCH GAMEPLAY", close: "CLOSE",
    contactEyebrow: "PLAYER 1 READY", contactTitle: "Let's build something fun.", contactText: "I'm open to conversations about games, tools, and interactive experiences.", email: "SEND AN EMAIL", linkedin: "LINKEDIN", github: "GITHUB", whatsapp: "WHATSAPP", footer: "Made with care and a few continues.", themeLabel: "THEME", jrpg: "JRPG", turbo: "TURBO 3000",
    experience: [
      { dates: "2025 — 2026", role: "Fullstack Developer", company: "Botbot", detail: "Built React, Next.js, and Tailwind interfaces and integrated robots and hardware-connected features with ROS." },
      { dates: "2022 — 2024", role: "Unity Developer · Freelance", company: "Web and event games", detail: "Built eight WebGL educational games, plus campaign and event experiences, supporting mobile and desktop." },
      { dates: "2022 — 2023", role: "Mid Unity3D Game Developer", company: "Kokku", detail: "Built cross-platform games in Unity/C# and Roblox experiences with Lua in multidisciplinary Agile teams." },
      { dates: "2014 — 2021", role: "Independent Game Developer", company: "Personal projects", detail: "Event games, Penosas Strike on Google Play, a reusable virtual keyboard, and a Mirror multiplayer prototype." },
    ],
  },
};

const careerSkills = ["Unity3D", "C#", "Mirror", "WebGL", "Android", "Roblox · Lua", "Next.js", "Tailwind CSS"];
const menuViews = ["about", "projects", "experience", "contact"];

function PixelButton({ children, href, onClick, secondary = false, ...props }) {
  const className = `pixel-button ${secondary ? "pixel-button-secondary" : ""}`;
  return href ? <a className={className} href={href} {...props}>{children}</a> : <button className={className} onClick={onClick} {...props}>{children}</button>;
}

export default function Portfolio() {
  const [lang, setLang] = useState("pt");
  const [theme, setTheme] = useState("turbo");
  const [view, setView] = useState("menu");
  const [menuIndex, setMenuIndex] = useState(0);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [musicVolume, setMusicVolume] = useState(0.25);
  const audioRef = useRef(null);
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const t = copy[lang];
  const projects = myProjectsData.data;
  const shownProjects = useMemo(() => filter === "all" ? projects : filter === "webgl" ? projects.filter((project) => project.links.demo) : projects.filter((project) => [8, 10, 13, 22, 23, 24].includes(project.id)), [filter, projects]);
  const about = aboutMe[lang];
  const menuItems = useMemo(() => menuViews.map((screen, index) => ({ screen, label: t.nav[index + 1] })), [t.nav]);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (musicPlaying) {
      audio.pause();
      setMusicPlaying(false);
      return;
    }
    audio.volume = musicVolume;
    try {
      await audio.play();
      setMusicPlaying(true);
    } catch {
      setMusicPlaying(false);
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = musicVolume;
  }, [musicVolume]);

  useEffect(() => {
    const handleKeyboard = (event) => {
      if (selected) {
        if (event.key === "Escape") setSelected(null);
        return;
      }
      if (view !== "menu") {
        if (event.key === "Escape") setView("menu");
        return;
      }
      const target = event.target;
      const isMenuOption = target instanceof HTMLElement && target.closest(".menu-option");
      const pageHasFocus = target === document.body || target === document.documentElement;
      if (!isMenuOption && !pageHasFocus) return;
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setMenuIndex((index) => {
          const next = (index + 1) % menuItems.length;
          if (isMenuOption) window.requestAnimationFrame(() => document.querySelectorAll(".menu-option")[next]?.focus());
          return next;
        });
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setMenuIndex((index) => {
          const next = (index - 1 + menuItems.length) % menuItems.length;
          if (isMenuOption) window.requestAnimationFrame(() => document.querySelectorAll(".menu-option")[next]?.focus());
          return next;
        });
      } else if (event.key === "Enter") {
        event.preventDefault();
        setView(menuItems[menuIndex].screen);
      }
    };
    window.addEventListener("keydown", handleKeyboard);
    return () => window.removeEventListener("keydown", handleKeyboard);
  }, [menuIndex, menuItems, selected, view]);

  return (
    <main className="portfolio-shell" data-theme={theme}>
      <div className="scanlines" aria-hidden="true" />
      <header className="topbar mx-auto flex w-full items-center justify-between">
        <button className="brand" onClick={() => setView("menu")} aria-label="Lucas Zaranza — main menu"><span className="brand-mark">LZ</span><span>LUCAS ZARANZA<span className="brand-sub">GAME DEVELOPER</span></span></button>
        {view !== "menu" && <nav className="desktop-nav" aria-label="Portfolio screens">{menuItems.map((item) => <button key={item.screen} className={view === item.screen ? "active" : ""} aria-current={view === item.screen ? "page" : undefined} onClick={() => setView(item.screen)}>{item.label}</button>)}</nav>}
        <div className="top-controls">
          <button className="language-toggle" onClick={() => setLang(lang === "pt" ? "en" : "pt")} aria-label="Change language"><span className={lang === "pt" ? "active" : ""}>PT</span><span className="toggle-slash">/</span><span className={lang === "en" ? "active" : ""}>EN</span></button>
          <div className="music-controls"><button className="music-toggle" type="button" onClick={toggleMusic} aria-pressed={musicPlaying} aria-label={musicPlaying ? t.musicOn : t.musicOff}><span aria-hidden="true">♪</span> {musicPlaying ? t.musicOn : t.musicOff}</button><label className="volume-control"><span className="sr-only">{t.musicVolume}</span><input type="range" min="0" max="1" step="0.05" value={musicVolume} onChange={(event) => setMusicVolume(Number(event.target.value))} aria-label={t.musicVolume} /></label></div>
          <label className="theme-picker"><span>{t.themeLabel}</span><select value={theme} onChange={(event) => setTheme(event.target.value)} aria-label={t.themeLabel}><option value="turbo">{t.turbo}</option><option value="jrpg">{t.jrpg}</option></select></label>
        </div>
      </header>

      <audio ref={audioRef} src="/Top%20Gear%203000%20%28SNES%29%20Music%20-%20Title.mp3" loop preload="none" />

      {view === "menu" && <section id="home" className="hero-section title-screen section-wrap">
        <div className="hero-copy">
          <div className="online-pill"><span className="status-dot" />{t.status}</div>
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.headline}</h1>
          <div className="hero-stats"><div><strong>{t.xp}</strong><span>{t.xpLabel}</span></div><div><strong>{t.shipped}</strong><span>{t.shippedLabel}</span></div><div><strong>BR</strong><span>FORTALEZA · REMOTE</span></div></div>
          <div className="main-menu panel-pixel"><p className="menu-heading">{t.menuPrompt}</p><div className="menu-options" role="menu">{menuItems.map((item, index) => <button key={item.screen} role="menuitem" className={menuIndex === index ? "menu-option selected" : "menu-option"} onMouseEnter={() => setMenuIndex(index)} onFocus={() => setMenuIndex(index)} onClick={() => setView(item.screen)}><span className="menu-arrow" aria-hidden="true">{menuIndex === index ? "▶▶" : ""}</span><span>{item.label}</span><span className="menu-enter" aria-hidden="true">↵</span></button>)}</div><p className="menu-hint">{t.menuHint}</p></div>
        </div>
      </section>}

      {view === "about" && <div className="game-screen section-wrap"><button className="return-menu" onClick={() => setView("menu")}>← {t.backToMenu}</button><section id="about" className="about-section">
        <div className="section-heading"><p className="eyebrow">{t.aboutEyebrow}</p><h2>{t.aboutTitle}</h2></div>
        <div className="about-card panel-pixel">
          <div className="portrait-frame"><Image src="/portfolio/me.png" alt="Lucas Zaranza" width={960} height={1280} priority className="portrait"/><span className="portrait-tag">LV. 10+</span></div>
          <div className="about-copy"><p>{t.aboutText}</p><p className="about-long">{about.paragraphs[2]}</p><div className="skill-list">{t.skills.map((skill) => <span key={skill} className="skill-chip">{skill}</span>)}</div><div className="skills-ribbon">{careerSkills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
        </div>
      </section></div>}

      {view === "projects" && <div className="game-screen section-wrap"><button className="return-menu" onClick={() => setView("menu")}>← {t.backToMenu}</button><section id="projects" className="projects-section">
        <div className="section-heading section-heading-row"><div><p className="eyebrow">{t.projectsEyebrow}</p><h2>{t.projectsTitle}</h2><p className="section-subtitle">{t.projectHint}</p></div><div className="project-filters" role="group" aria-label="Filter projects">{[["all", t.all], ["featured", t.game], ["webgl", t.webgl]].map(([value, label]) => <button key={value} className={filter === value ? "filter-button active" : "filter-button"} onClick={() => setFilter(value)}>{label}</button>)}</div></div>
        <div className="project-grid grid gap-4 md:grid-cols-2 lg:grid-cols-3">{shownProjects.map((project) => {
          const originalIndex = projects.findIndex((item) => item.id === project.id);
          return <button className="project-card" key={project.id} onClick={() => setSelected(project)} aria-label={`${t.more}: ${project.texts.name[lang]}`}>
            <span className="project-card-top"><span>GAME {String(project.id).padStart(2, "0")}</span><span>{project.year}</span></span>
            <span className="cartridge-window"><Image src={`/portfolio/cartridges/${cartridgeImages[originalIndex]}`} alt="" fill sizes="(max-width: 640px) 90vw, (max-width: 1000px) 42vw, 28vw" className="cartridge-image"/></span>
            <span className="project-card-bottom"><span className="project-name">{project.texts.name[lang]}</span><span className="project-arrow">↗</span></span>
          </button>;
        })}</div>
      </section></div>}

      {view === "experience" && <div className="game-screen section-wrap"><button className="return-menu" onClick={() => setView("menu")}>← {t.backToMenu}</button><section id="experience" className="experience-section">
        <div className="section-heading"><p className="eyebrow">{t.career}</p><h2>{t.careerTitle}</h2></div>
        <div className="timeline">{t.experience.map((item) => <article className="timeline-entry" key={item.dates + item.company}><div className="timeline-date">{item.dates}</div><div className="timeline-content panel-pixel"><h3>{item.role}</h3><p className="timeline-company">{item.company}</p><p>{item.detail}</p></div></article>)}</div>
      </section></div>}

      {view === "contact" && <div className="game-screen section-wrap"><button className="return-menu" onClick={() => setView("menu")}>← {t.backToMenu}</button><section id="contact" className="contact-section"><div className="contact-panel panel-pixel"><div><p className="eyebrow">{t.contactEyebrow}</p><h2>{t.contactTitle}</h2><p>{t.contactText}</p></div><div className="contact-links"><PixelButton href="mailto:lucaszaranza@gmail.com">{t.email}</PixelButton><a href="https://www.linkedin.com/in/lucas-zaranza-74157a60/" target="_blank" rel="noreferrer">{t.linkedin} ↗</a><a href="https://github.com/lucaspzaranza" target="_blank" rel="noreferrer">{t.github} ↗</a><a href="https://wa.me/5585991753445" target="_blank" rel="noreferrer">{t.whatsapp} ↗</a></div></div></section></div>}

      <footer className="site-footer"><span>© {new Date().getFullYear()} LUCAS ZARANZA</span><span>{t.footer}</span><button onClick={() => setView("menu")}>{t.nav[0]} ↑</button></footer>

      {selected && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}><section className="project-modal panel-pixel" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" onClick={() => setSelected(null)} aria-label={t.close}>×</button><p className="eyebrow">{t.details} · {t.year} {selected.year}</p><h2 id="modal-title">{selected.texts.name[lang]}</h2><div className="modal-image"><Image src={`/portfolio/cartridges/${cartridgeImages[projects.findIndex((item) => item.id === selected.id)]}`} alt="" fill sizes="(max-width: 700px) 90vw, 640px" className="cartridge-image"/></div><div className="modal-description">{selected.texts.description[lang].map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div><div className="modal-actions">{selected.links.demo && <PixelButton href={selected.links.demo} target="_blank" rel="noreferrer">{t.demo} ↗</PixelButton>}{selected.links.youtube && <PixelButton href={selected.links.youtube} target="_blank" rel="noreferrer" secondary>{t.video} ↗</PixelButton>}{selected.links.repo && <PixelButton href={selected.links.repo} target="_blank" rel="noreferrer" secondary>{t.repo} ↗</PixelButton>}</div><button className="close-text" onClick={() => setSelected(null)}>{t.close} ×</button></section></div>}
    </main>
  );
}
