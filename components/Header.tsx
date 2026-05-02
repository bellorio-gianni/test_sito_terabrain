"use client";

import { useEffect, useState } from "react";
import menuItems from "@/content/menu.json";

type MenuLink = {
  label: string;
  url: string;
};

type DropdownItem = {
  label: string;
  type: "dropdown";
  links: MenuLink[];
};

type MegaColumn = {
  title: string;
  links: MenuLink[];
};

type MegaItem = {
  label: string;
  type: "mega";
  columns: MegaColumn[];
};

type LinkItem = MenuLink & {
  type?: "link";
};

type MenuItem = LinkItem | DropdownItem | MegaItem;

const menu = menuItems as MenuItem[];
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function siteHref(url: string) {
  if (url === "/") {
    return `${basePath}/`;
  }

  if (url.startsWith("/")) {
    return `${basePath}${url}`;
  }

  return url;
}

function isDropdown(item: MenuItem): item is DropdownItem {
  return item.type === "dropdown";
}

function isMega(item: MenuItem): item is MegaItem {
  return item.type === "mega";
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const [loginStatus, setLoginStatus] = useState<string | null>(null);

  useEffect(() => {
    document.body.classList.toggle("nav-lock", mobileOpen);

    return () => document.body.classList.remove("nav-lock");
  }, [mobileOpen]);

  useEffect(() => {
    document.body.classList.toggle("login-lock", loginOpen);

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setLoginOpen(false);
      }
    }

    if (loginOpen) {
      document.addEventListener("keydown", closeOnEscape);
    }

    return () => {
      document.body.classList.remove("login-lock");
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [loginOpen]);

  function openLogin() {
    setMobileOpen(false);
    setLoginStatus(null);
    setLoginOpen(true);
  }

  function closeLogin() {
    setLoginOpen(false);
    setLoginStatus(null);
  }

  useEffect(() => {
    function handleLoginTrigger(event: MouseEvent) {
      const target = event.target as HTMLElement | null;

      if (target?.closest("[data-open-login]")) {
        event.preventDefault();
        openLogin();
      }
    }

    document.addEventListener("click", handleLoginTrigger);

    return () => document.removeEventListener("click", handleLoginTrigger);
  });

  return (
    <header className="site-header">
      <a className="brand" href={siteHref("/")} aria-label="TeraBrain home">
        <img className="brand-logo" src={siteHref("/terabrain-logo.jpg")} alt="" aria-hidden="true" />
        <span>TERABRAIN</span>
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        {menu.map((item) => {
          if (isMega(item)) {
            return (
              <div className="nav-item" key={item.label}>
                <button className="nav-trigger" type="button">
                  {item.label}
                  <span aria-hidden="true">+</span>
                </button>
                <div className="mega-panel">
                  <div className="mega-inner">
                    {item.columns.map((column) => (
                      <section className="mega-column" key={column.title}>
                        <h2>{column.title}</h2>
                        {column.links.map((link) => (
                          <a href={siteHref(link.url)} key={link.url}>
                            {link.label}
                          </a>
                        ))}
                      </section>
                    ))}
                  </div>
                </div>
              </div>
            );
          }

          if (isDropdown(item)) {
            return (
              <div className="nav-item" key={item.label}>
                <button className="nav-trigger" type="button">
                  {item.label}
                  <span aria-hidden="true">+</span>
                </button>
                <div className="dropdown-panel">
                  {item.links.map((link) => (
                    <a href={siteHref(link.url)} key={link.url}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <a className="nav-link" href={siteHref(item.url)} key={item.url}>
              {item.label}
            </a>
          );
        })}
      </nav>

      <a className="header-cta" href={siteHref("/contatti")}>
        Parla con noi
      </a>

      <button className="login-trigger" onClick={openLogin} type="button">
        Login
      </button>

      <button
        aria-controls="mobile-navigation"
        aria-expanded={mobileOpen}
        aria-label="Open navigation"
        className="menu-toggle"
        onClick={() => setMobileOpen((open) => !open)}
        type="button"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <div className={mobileOpen ? "mobile-nav open" : "mobile-nav"} id="mobile-navigation">
        <div className="mobile-nav-scroll">
          {menu.map((item) => {
            const isOpen = expanded === item.label;

            if (isMega(item)) {
              return (
                <section className="mobile-group" key={item.label}>
                  <button
                    aria-expanded={isOpen}
                    className="mobile-group-trigger"
                    onClick={() => setExpanded(isOpen ? null : item.label)}
                    type="button"
                  >
                    {item.label}
                    <span aria-hidden="true">{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen ? (
                    <div className="mobile-group-panel">
                      {item.columns.map((column) => (
                        <div className="mobile-column" key={column.title}>
                          <h2>{column.title}</h2>
                          {column.links.map((link) => (
                            <a href={siteHref(link.url)} key={link.url} onClick={() => setMobileOpen(false)}>
                              {link.label}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </section>
              );
            }

            if (isDropdown(item)) {
              return (
                <section className="mobile-group" key={item.label}>
                  <button
                    aria-expanded={isOpen}
                    className="mobile-group-trigger"
                    onClick={() => setExpanded(isOpen ? null : item.label)}
                    type="button"
                  >
                    {item.label}
                    <span aria-hidden="true">{isOpen ? "-" : "+"}</span>
                  </button>
                  {isOpen ? (
                    <div className="mobile-group-panel">
                      {item.links.map((link) => (
                        <a href={siteHref(link.url)} key={link.url} onClick={() => setMobileOpen(false)}>
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </section>
              );
            }

            return (
              <a className="mobile-direct-link" href={siteHref(item.url)} key={item.url} onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            );
          })}
          <button className="mobile-login-trigger" onClick={openLogin} type="button">
            Login
          </button>
        </div>
      </div>

      {loginOpen ? (
        <div className="login-overlay" aria-modal="true" role="dialog" aria-labelledby="login-title">
          <button className="login-backdrop" aria-label="Chiudi login" onClick={closeLogin} type="button" />
          <section className="login-dialog">
            <div className="login-dialog-head">
              <div>
                <p>Area riservata</p>
                <h2 id="login-title">Login TeraBrain</h2>
              </div>
              <button className="login-close" aria-label="Chiudi popup login" onClick={closeLogin} type="button">
                ×
              </button>
            </div>

            <form
              className="login-form"
              onSubmit={(event) => {
                event.preventDefault();
                setLoginStatus("Login demo: credenziali acquisite localmente, nessun invio al server.");
              }}
            >
              <label>
                <span>Username</span>
                <input autoComplete="username" name="username" placeholder="nome.utente" required type="text" />
              </label>
              <label>
                <span>Password</span>
                <input autoComplete="current-password" name="password" placeholder="••••••••" required type="password" />
              </label>
              <button className="login-submit" type="submit">
                Accedi
              </button>
              {loginStatus ? <p className="login-status">{loginStatus}</p> : null}
            </form>
          </section>
        </div>
      ) : null}
    </header>
  );
}
