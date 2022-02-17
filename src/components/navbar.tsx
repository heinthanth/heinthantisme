import Link from "next/link";
import cx from "classnames";
import css from "./navbar.module.sass";
import { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import heroBanner from "../assets/images/home-page/banner.png";
import heroBannerWebp from "../assets/images/home-page/banner.png?webp";

const NavbarRoutes: {
  uri: string;
  label: ReactNode;
  ariaLabel?: string;
}[] = [
  { uri: "/", ariaLabel: "Go to website Home Page", label: "INDEX ZERO" },
  { uri: "/about", ariaLabel: "Read more about Hein Thant", label: "WHO I AM" },
  { uri: "/creations", ariaLabel: "Explore Hein Thant's creations", label: "CREATIONS" },
  { uri: "/articles", ariaLabel: "Read articles From Hein Thant", label: "ARTICLES" },
  { uri: "/contact", ariaLabel: "Get in touch with Hein Thant", label: "CONTACT ME" },
]; // navigation routes

const Navbar = () => {
  const { pathname } = useRouter();
  // prettier-ignore
  const initIndex = NavbarRoutes.findIndex(({ uri }) =>
    uri === "/" ? pathname === uri : pathname.includes(uri));
  const [currentRouteIndex, setCurrentRouteIndex] = useState(initIndex === -1 ? 0 : initIndex);
  const [indicatorIndex, setIndicatorIndex] = useState(currentRouteIndex);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navbarExpanded, setNavbarExpanded] = useState(navbarOpen);

  useEffect(() => {
    // prettier-ignore
    const currentIndex = NavbarRoutes.findIndex(({ uri }) =>
      uri === "/" ? pathname === uri : pathname.includes(uri));
    setCurrentRouteIndex(currentIndex);
  }, [pathname]);

  useEffect(() => {
    const elem = document.body;
    navbarOpen
      ? elem?.classList.add("overflow-hidden", "lg:overflow-auto")
      : elem?.classList.remove("overflow-hidden", "lg:overflow-auto");
  }, [navbarOpen]);

  useEffect(() => setNavbarOpen(false), [pathname]);
  useEffect(() => setNavbarExpanded(navbarOpen), [navbarOpen]);

  useEffect(() => {
    const navbar = document.querySelector("#hh-navbar");
    const scrollListener = () =>
      window.scrollY <= 10
        ? navbar?.classList.remove(css.goFront)
        : navbar?.classList.add(css.goFront);
    // prettier-ignore
    const resizeListener = () => window.innerWidth >= 768
        ? (setNavbarOpen(false), setNavbarExpanded(true)) : setNavbarExpanded(false);
    // initial state
    resizeListener();
    scrollListener();
    window.addEventListener("resize", resizeListener);
    window.addEventListener("scroll", scrollListener);

    // prettier-ignore
    return () => (
      window.removeEventListener("resize", resizeListener),
      window.removeEventListener("scroll", scrollListener));
  }, []);

  return (
    <Fragment>
      <nav id="hh-navbar" className={cx("select-none", css.navbar)} data-expanded={navbarOpen}>
        <div className="container h-full lg:h-[unset] flex flex-col lg:flex-row lg:items-center justify-between">
          <div className="flex items-center justify-between min-h-[80px] lg:min-h-[unset] lg:h-[unset]">
            <Link href="/">
              <a className={css.logo}>
                <span>HIIIiN</span>
                <small className={cx(css.logoExtra, "text-xs")}>&apos;s space</small>
              </a>
            </Link>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className={css.toggleButton}
              aria-label="Toggle Navigation bar"
              aria-controls="main-navbar"
              aria-expanded={navbarExpanded}
              data-expanded={navbarOpen}
            >
              <div className="w-6 flex items-center justify-center relative">
                <span className="transform transition w-full h-[2px] bg-current absolute" />
                <span className="transform transition w-full h-[2px] bg-current absolute" />
                <span className="transform transition w-full h-[2px] bg-current absolute" />
              </div>
            </button>
          </div>
          <div
            className={cx("flex items-center lg:grow overflow-hidden", css.navMenu)}
            id="main-navbar"
          >
            <ul className="lg:ml-auto overflow-hidden flex flex-col lg:flex-row">
              {NavbarRoutes.map((route, index) => {
                const isCurrentRoute = currentRouteIndex === index;
                const shouldShowIndicator = indicatorIndex === index;
                return (
                  <li key={index} className="mb-3 lg:mb-0">
                    <Link href={route.uri}>
                      <a
                        onMouseEnter={() => setIndicatorIndex(index)}
                        onMouseLeave={() => setIndicatorIndex(currentRouteIndex)}
                        className={cx("p-2 pr-3 pl-0 lg:pl-3", css.navLink)}
                        aria-label={route.ariaLabel}
                        aria-current={isCurrentRoute ? "page" : "false"}
                      >
                        <span className={shouldShowIndicator ? "text-black" : "text-neutral-600"}>
                          {route.label}
                        </span>
                        {pathname !== "/404" && shouldShowIndicator && (
                          <motion.span
                            layoutId="navLinkIndicator"
                            className={css.routeIndicator}
                          ></motion.span>
                        )}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={cx("py-6 lg:hidden h-[80px] overflow-hidden", css.contactMail)}>
            <a href="mailto:contact@heinthantis.me">contact@heinthantis.me</a>
          </div>
        </div>
      </nav>
      <div className={cx("bg-white fixed w-full h-full z-10 navbar_over", css.over)}>
        {/* prettier-ignore */}
        <style jsx>
          {`.navbar_over { --bg: url(${heroBanner}); --bg-webp: url(${heroBannerWebp}); }`}
        </style>
      </div>
    </Fragment>
  );
};

export default Navbar;
