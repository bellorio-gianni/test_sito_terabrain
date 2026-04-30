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

function isDropdown(item: MenuItem): item is DropdownItem {
  return item.type === "dropdown";
}

function isMega(item: MenuItem): item is MegaItem {
  return item.type === "mega";
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    document.body.classList.toggle("nav-lock", mobileOpen);

    return () => document.body.classList.remove("nav-lock");
  }, [mobileOpen]);

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="TeraBrain home">
        <span className="brand-mark" aria-hidden="true">
          T
        </span>
        <span>TeraBrain</span>
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
                          <a href={link.url} key={link.url}>
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
                    <a href={link.url} key={link.url}>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <a className="nav-link" href={item.url} key={item.url}>
              {item.label}
            </a>
          );
        })}
      </nav>

      <a className="header-cta" href="/contatti">
        Parla con noi
      </a>

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
                            <a href={link.url} key={link.url} onClick={() => setMobileOpen(false)}>
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
                        <a href={link.url} key={link.url} onClick={() => setMobileOpen(false)}>
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </section>
              );
            }

            return (
              <a className="mobile-direct-link" href={item.url} key={item.url} onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}
