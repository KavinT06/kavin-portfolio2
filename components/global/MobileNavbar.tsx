import { useEffect, useState } from "react";

import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { routes } from "@/data/global";

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollOffset = -100;
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  function handleNavClick() {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <nav>
      <div
        className={`w-full justify-between flex items-center ${isMenuRendered && 'bg-bg'} p-5`}
        style={{ zIndex: 101 }}
      >
        <li className="list-none">
          <Link href="/">
            <img
              className="rounded-full"
              src="/static/misc/profile.jpg"
              width="45"
              height="45"
              alt="Kavin"
            />
          </Link>
        </li>
        <button
          className="burger visible md:hidden"
          aria-label="Toggle menu"
          type="button"
          onClick={toggleMenu}
        >
          <MenuIcon data-hide={isMenuOpen} />
          <CrossIcon data-hide={!isMenuOpen} />
        </button>
      </div>
      {isMenuMounted && (
        <ul
          className={`menu flex flex-col absolute bg-bg
            ${isMenuRendered && "menuRendered"}`}
        >
          {routes.map((item, index) => {
            const isAnchor = item.path.startsWith("#");
            const target = isAnchor ? item.path.slice(1) : item.path;
            return (
              <li
                key={item.title}
                className="border-b border-gray-900 text-gray-100 text-sm font-semibold"
                style={{ transitionDelay: `${150 + index * 25}ms` }}
              >
                {isAnchor ? (
                  <ScrollLink
                    to={target}
                    spy={true}
                    smooth={true}
                    offset={scrollOffset}
                    duration={500}
                    className="flex w-auto pb-4 cursor-pointer"
                    onClick={handleNavClick}
                  >
                    {item.title}
                  </ScrollLink>
                ) : (
                  <Link href={item.path}>
                    <a className="flex w-auto pb-4" onClick={handleNavClick}>
                      {item.title}
                    </a>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}

type DelayedRenderOptions = {
  enterDelay?: number;
  exitDelay?: number;
};

function useDelayedRender(isRendered: boolean, options: DelayedRenderOptions) {
  const enterDelay = options?.enterDelay ?? 0;
  const exitDelay = options?.exitDelay ?? 0;
  const [mounted, setMounted] = useState(isRendered);
  const [rendered, setRendered] = useState(isRendered);

  useEffect(() => {
    let mountTimeout: ReturnType<typeof setTimeout> | undefined;
    let renderTimeout: ReturnType<typeof setTimeout> | undefined;

    if (isRendered) {
      setMounted(true);
      renderTimeout = setTimeout(() => setRendered(true), enterDelay);
    } else {
      setRendered(false);
      mountTimeout = setTimeout(() => setMounted(false), exitDelay);
    }

    return () => {
      if (renderTimeout) {
        clearTimeout(renderTimeout);
      }
      if (mountTimeout) {
        clearTimeout(mountTimeout);
      }
    };
  }, [isRendered, enterDelay, exitDelay]);

  return { mounted, rendered };
}

function MenuIcon(props) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props) {
  return (
    <svg
      className="h-5 w-5 absolute text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
