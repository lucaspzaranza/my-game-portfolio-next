"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { ui } from "./ui-classes";
import portfolioData from "../src/data/data.json";

const { aboutMe, myProjectsData } = portfolioData;

const noCartridgeImages = [
  "bomberman.webp", "roleta.webp", "flappy-bird.webp",
  "catch-game.webp", "slot-machine.webp", "jogo-da-memoria.webp",
  "virtual-keyboard.webp", "penosas-strike.webp", "math-factory.webp",
  "doom-of-the-penosas.webp", "snake.webp", "diep.io.webp",
  "bomberman.webp", "rg.webp", "emo-bears.webp",
  "zaza-kahlo.webp", "mesh-game.webp", "letra-a.webp", "cat-puzzle.webp",
  "fantasy-or-reality.webp", "super-market-game.webp", "robo-runner.webp",
  "limpa-copo.webp", "love-quiz.webp",
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
    contactEyebrow: "PLAYER 1 READY", contactTitle: "Vamos criar algo legal?", contactText: "Estou aberto a conversas sobre jogos, ferramentas e experiências interativas.", email: "E-MAIL", linkedin: "LINKEDIN", github: "GITHUB", whatsapp: "WHATSAPP", footer: "Feito com carinho e alguns continues.", themeLabel: "TEMA", jrpg: "JRPG", turbo: "TOP GEAR 3000",
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
    contactEyebrow: "PLAYER 1 READY", contactTitle: "Let's build something fun.", contactText: "I'm open to conversations about games, tools, and interactive experiences.", email: "SEND AN EMAIL", linkedin: "LINKEDIN", github: "GITHUB", whatsapp: "WHATSAPP", footer: "Made with care and a few continues.", themeLabel: "THEME", jrpg: "JRPG", turbo: "TOP GEAR 3000",
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

// Per-theme assets. Layout stays identical; only music and icons change.
const themeAssets = {
  turbo: {
    music: "/top-gear-3000-theme.mp3",
    menuCursor: "/fast-forward.png",
    menuIcon: "/alien.png",
    projectIcon: "/joystick.png",
    demoIcon: "/atari-joystick.png",
  },
  jrpg: {
    // Drop your own track at public/portfolio/jrpg/ (e.g. Theme of Love, Main Theme).
    music: "/portfolio/jrpg/theme.mp3",
    menuCursor: "/portfolio/jrpg/arrow.png",
    menuIcon: "/portfolio/jrpg/crystal.png",
    projectIcon: "/portfolio/jrpg/treasure-chest.png",
    demoIcon: "/portfolio/jrpg/sword.png",
  },
};

function PixelButton({ children, href, onClick, secondary = false, ...props }) {
  const className = `${ui.pixelButton} ${secondary ? "" : ""}`;
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
  const assets = themeAssets[theme];
  const projects = myProjectsData.data;
  const shownProjects = useMemo(() => filter === "all" ? projects : filter === "webgl" ? projects.filter((project) => project.links.demo) : projects.filter((project) => [3, 8, 10, 13, 22, 23, 24].includes(project.id)), [filter, projects]);
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
    const audio = audioRef.current;
    if (!audio) return;
    const wasPlaying = !audio.paused;
    audio.src = themeAssets[theme].music;
    if (wasPlaying) {
      audio.play().catch(() => setMusicPlaying(false));
    }
  }, [theme]);

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
    <main className={ui.shell} data-theme={theme}>
      <div
        aria-hidden="true"
        className="scanlines pointer-events-none absolute inset-0 z-[1] opacity-[0.08] [.portfolio-shell[data-theme=jrpg]_&]:opacity-[0.06] [background:repeating-linear-gradient(0deg,transparent_0_3px,rgba(0,0,0,0.2)_4px)] [mask-image:linear-gradient(180deg,#000,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="twinkle-stars pointer-events-none absolute inset-0 z-[1] overflow-hidden jrpg:hidden"
      >
        <span className="absolute left-[22%] top-[18%] size-[2px] animate-star-twinkle bg-[#fff4d1] opacity-[0.28] shadow-[0_0_5px_1px_rgba(255,221,164,0.45)] [animation-delay:-1.4s] motion-reduce:animate-none motion-reduce:opacity-[0.72]" />
        <span className="absolute left-[77%] top-[32%] size-[2px] animate-star-twinkle bg-[#fff4d1] opacity-[0.28] shadow-[0_0_5px_1px_rgba(255,221,164,0.45)] [animation-delay:-2.6s] motion-reduce:animate-none motion-reduce:opacity-[0.72]" />
        <span className="absolute left-[41%] top-[57%] size-[2px] animate-star-twinkle bg-[#fff4d1] opacity-[0.28] shadow-[0_0_5px_1px_rgba(255,221,164,0.45)] [animation-delay:-0.8s] motion-reduce:animate-none motion-reduce:opacity-[0.72]" />
        <span className="absolute left-[89%] top-[73%] size-[2px] animate-star-twinkle bg-[#fff4d1] opacity-[0.28] shadow-[0_0_5px_1px_rgba(255,221,164,0.45)] [animation-delay:-3.1s] motion-reduce:animate-none motion-reduce:opacity-[0.72]" />
        <span className="absolute left-[11%] top-[88%] size-[2px] animate-star-twinkle bg-[#fff4d1] opacity-[0.28] shadow-[0_0_5px_1px_rgba(255,221,164,0.45)] [animation-delay:-2s] motion-reduce:animate-none motion-reduce:opacity-[0.72]" />
      </div>
      <header className={ui.topbar}>
        <button className={ui.brand} onClick={() => setView("menu")} aria-label="Lucas Zaranza — main menu"><span className={ui.brandMark}>LZ</span><span>LUCAS ZARANZA<span className={ui.brandSub}>GAME DEVELOPER</span></span></button>
        {view !== "menu" && <nav className={ui.desktopNav} aria-label="Portfolio screens">{menuItems.map((item) => <button key={item.screen} className={`${ui.navItem} ${view === item.screen ? "text-[var(--accent)]" : ""}`} aria-current={view === item.screen ? "page" : undefined} onClick={() => setView(item.screen)}>{item.label}</button>)}</nav>}
        <div className={ui.topControls}>
          <button className={ui.languageToggle} onClick={() => setLang(lang === "pt" ? "en" : "pt")} aria-label="Change language"><span className={lang === "pt" ? "text-[var(--accent)]" : ""}>PT</span><span className="px-[5px] text-[var(--line)]">/</span><span className={lang === "en" ? "text-[var(--accent)]" : ""}>EN</span></button>
          <div className={ui.musicControls}><button className={ui.musicToggle} type="button" onClick={toggleMusic} aria-pressed={musicPlaying} aria-label={musicPlaying ? t.musicOn : t.musicOff}><span aria-hidden="true">♪</span> {musicPlaying ? t.musicOn : t.musicOff}</button><label className={ui.volumeControl}><span className="sr-only">{t.musicVolume}</span><input type="range" min="0" max="1" step="0.05" value={musicVolume} onChange={(event) => setMusicVolume(Number(event.target.value))} aria-label={t.musicVolume} /></label></div>
          <label className={ui.themePicker}><span>{t.themeLabel}</span><select className={ui.themeSelect} value={theme} onChange={(event) => setTheme(event.target.value)} aria-label={t.themeLabel}><option value="turbo">{t.turbo}</option><option value="jrpg">{t.jrpg}</option></select></label>
        </div>
      </header>

      <audio ref={audioRef} loop preload="none" />

      {view === "menu" && <section id="home" className={`${ui.titleSection} ${ui.sectionWrap}`}>
        <div className={ui.heroCopy}>
          <div className={ui.statusPill}><span className={ui.statusDot} />{t.status}</div>
          <p className={ui.eyebrow}>{t.eyebrow}</p>
          <h1 className={ui.heroTitle}>{t.headline}</h1>
          <div className={ui.heroStats}><div className={ui.stat}><strong className={ui.statValue}>{t.xp}</strong><span className={ui.statLabel}>{t.xpLabel}</span></div><div className={ui.stat}><strong className={ui.statValue}>{t.shipped}</strong><span className={ui.statLabel}>{t.shippedLabel}</span></div><div className={ui.stat}><strong className={ui.statValue}>BR</strong><span className={ui.statLabel}>FORTALEZA · REMOTE</span></div></div>
          <div className={`${ui.panel} ${ui.mainMenu}`}>
            <p className={ui.menuHeading}>{t.menuPrompt}</p>
            <div className={ui.menuOptions} role="menu">
              {menuItems.map((item, index) => <button key={item.screen} role="menuitem" className={`${ui.menuOption} ${menuIndex === index ? ui.menuSelected : ""}`} onMouseEnter={() => setMenuIndex(index)} onFocus={() => setMenuIndex(index)} onClick={() => setView(item.screen)}>
              <span className={ui.menuArrow} aria-hidden="true">
                <Image src={assets.menuCursor} className={`${menuIndex === index? 'block' : 'hidden'} jrpg:size-8 jrpg:[image-rendering:pixelated]`} width={16} height={16} unoptimized alt=""/>
              </span>
              <span>{item.label}</span>
              <Image src={assets.menuIcon} width={16} height={16} unoptimized alt="" className="size-4 object-contain jrpg:!size-8 jrpg:[image-rendering:pixelated]"/>
              </button>)}
            </div>
            <p className={ui.menuHint}>{t.menuHint}</p>
          </div>
        </div>
      </section>}

      {view === "about" && <div className={`${ui.gameScreen} ${ui.sectionWrap}`}><button className={ui.returnMenu} onClick={() => setView("menu")}>← {t.backToMenu}</button><section id="about" className={ui.section}>
        <div className={ui.sectionHeading}><p className={ui.eyebrow}>{t.aboutEyebrow}</p><h2 className={ui.sectionTitle}>{t.aboutTitle}</h2></div>
        <div className={`${ui.panel} ${ui.aboutCard}`}>
          <div className={ui.portraitFrame}><Image src="/portfolio/me.png" unoptimized alt="Lucas Zaranza" width={960} height={1280} priority className={ui.portrait}/><span className={ui.portraitTag}>LV. 10+</span></div>
          <div className={ui.aboutCopy}><p className={ui.paragraph}>{t.aboutText}</p><p className={ui.paragraph}>{about.paragraphs[2]}</p><div className={ui.skills}>{t.skills.map((skill) => <span key={skill} className={ui.skillChip}>{skill}</span>)}</div><div className={ui.skillsRibbon}>{careerSkills.map((skill) => <span key={skill} className="before:mr-1 before:text-[var(--hot)] before:content-['▸']">{skill}</span>)}</div></div>
        </div>
      </section></div>}

      {view === "projects" && <div className={`${ui.gameScreen} ${ui.sectionWrap}`}><button className={ui.returnMenu} onClick={() => setView("menu")}>← {t.backToMenu}</button><section id="projects" className={ui.section}>
        <div className={`${ui.sectionHeading} ${ui.sectionHeadingRow}`}><div><p className={ui.eyebrow}>{t.projectsEyebrow}</p><h2 className={ui.sectionTitle}>{t.projectsTitle}</h2><p className={ui.sectionSubtitle}>{t.projectHint}</p></div><div className={ui.filters} role="group" aria-label="Filter projects">{[["all", t.all], ["featured", t.game], ["webgl", t.webgl]].map(([value, label]) => <button key={value} className={`${ui.filterButton} ${filter === value ? ui.filterActive : ""}`} onClick={() => setFilter(value)}>{label}</button>)}</div></div>
        <div className={`${ui.projectGrid} md:grid-cols-2 lg:grid-cols-3`}>{shownProjects.map((project) => {
          const originalIndex = projects.findIndex((item) => item.id === project.id);
          return <button className={ui.projectCard} key={project.id} onClick={() => setSelected(project)} aria-label={`${t.more}: ${project.texts.name[lang]}`}>
            <span className={ui.projectTop}><span>GAME {String(project.id).padStart(2, "0")}</span><span>{project.year}</span></span>
            <span className={ui.cartridgeFrame}><Image unoptimized src={`/portfolio/no-cartridge-webp/${noCartridgeImages[originalIndex]}`} alt="" fill className={ui.cartridgeImage}/></span>
            <span className={ui.projectBottom}><span className={ui.projectName}>{project.texts.name[lang]}</span><Image src={assets.projectIcon} width={32} height={32} unoptimized alt="" className="size-8 object-contain jrpg:size-11 jrpg:[image-rendering:pixelated]"/></span>
          </button>;
        })}</div>
      </section></div>}

      {view === "experience" && <div className={`${ui.gameScreen} ${ui.sectionWrap}`}><button className={ui.returnMenu} onClick={() => setView("menu")}>← {t.backToMenu}</button><section id="experience" className={ui.section}>
        <div className={ui.sectionHeading}><p className={ui.eyebrow}>{t.career}</p><h2 className={ui.sectionTitle}>{t.careerTitle}</h2></div>
        <div className={ui.timeline}>{t.experience.map((item) => <article className={ui.timelineEntry} key={item.dates + item.company}><div className={ui.timelineDate}>{item.dates}</div><div className={`${ui.panel} ${ui.timelineContent}`}><h3 className={ui.timelineRole}>{item.role}</h3><p className={ui.timelineCompany}>{item.company}</p><p className={ui.timelineDetail}>{item.detail}</p></div></article>)}</div>
      </section></div>}

      {view === "contact" && <div className={`${ui.gameScreen} ${ui.sectionWrap}`}><button className={ui.returnMenu} onClick={() => setView("menu")}>← {t.backToMenu}</button><section id="contact" className={ui.contactSection}><div className={`${ui.panel} ${ui.contactPanel}`}><div><p className="m-0 mb-[14px] text-[8px] text-[var(--accent)]">{t.contactEyebrow}</p><h2 className={ui.contactTitle}>{t.contactTitle}</h2><p className={ui.contactText}>{t.contactText}</p></div><div className={ui.contactLinks}><a className={ui.contactLink} href="mailto:lucaszaranza@gmail.com">{t.email}</a><a className={ui.contactLink} href="https://www.linkedin.com/in/lucaszaranza" target="_blank" rel="noreferrer">{t.linkedin}</a><a className={ui.contactLink} href="https://github.com/lucaspzaranza" target="_blank" rel="noreferrer">{t.github}</a><a className={ui.contactLink} href="https://wa.me/5585991753445" target="_blank" rel="noreferrer">{t.whatsapp}</a></div></div></section></div>}

      <footer className={ui.footer}><span>© {new Date().getFullYear()} LUCAS ZARANZA</span><span className={ui.footerSecond}>{t.footer}</span><button className="border-0 bg-transparent text-[var(--accent)]" onClick={() => setView("menu")}>{t.nav[0]} ↑</button></footer>

      {selected && 
        <div className={ui.modalBackdrop} role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
          <section className={`${ui.panel} ${ui.modal}`} role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button className={ui.modalClose} onClick={() => setSelected(null)} aria-label={t.close}>×</button>
            <p className={ui.modalEyebrow}>{t.details} · {t.year} {selected.year}</p>
            <h2 className={ui.modalTitle} id="modal-title">{selected.texts.name[lang]}</h2>
            <div className={ui.modalImage}><Image src={`/portfolio/no-cartridge-webp/${noCartridgeImages[projects.findIndex((item) => item.id === selected.id)]}`} alt="" fill sizes="(max-width: 700px) 90vw, 640px" className={ui.cartridgeImage}/></div>
            <div className={ui.modalDescription}>
              {selected.texts.description[lang].map((paragraph, index) => <p key={index} className={ui.modalParagraph}>{paragraph}</p>)}
            </div>
            <div className={ui.modalActions}>
              {selected.links.demo && 
                <PixelButton href={selected.links.demo} target="_blank" rel="noreferrer">
                  <Image src={assets.demoIcon} width={32} height={32} unoptimized alt="" className="jrpg:size-9 jrpg:[image-rendering:auto]"/>{t.demo}</PixelButton>}
                {selected.links.youtube && 
                <PixelButton href={selected.links.youtube} target="_blank" rel="noreferrer">
                  <Image src="/youtube.png" width={24} height={24} unoptimized alt="" className="jrpg:size-9 jrpg:[image-rendering:auto]"/>{t.video}</PixelButton>}
                {selected.links.repo && 
                <PixelButton href={selected.links.repo} target="_blank" rel="noreferrer">
                  <Image src="/github.png" width={24} height={24} unoptimized alt="" className="jrpg:size-9 jrpg:[image-rendering:auto]"/>{t.repo}</PixelButton>}
            </div>
            {/* <button className="close-text" onClick={() => setSelected(null)}>{t.close} X</button> */}
          </section>
        </div>}
    </main>
  );
}
