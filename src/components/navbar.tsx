import Link from "next/link";
import cx from "classnames";
import css from "./navbar.module.sass";
import { NavbarRoutes } from "../misc/routes";
import { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Navbar = () => {
  const { pathname } = useRouter();
  // prettier-ignore
  const initIndex = NavbarRoutes.findIndex(({ uri }) =>
    uri === "/" ? pathname === uri : pathname.includes(uri));
  const currentRouteIndex = initIndex === -1 ? 0 : initIndex;
  const [indicatorIndex, setIndicatorIndex] = useState(currentRouteIndex);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navbarExpanded, setNavbarExpanded] = useState(navbarOpen);

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
      window.scrollY <= 20
        ? navbar?.classList.remove("bg-white", "shadow-sm")
        : navbar?.classList.add("bg-white", "shadow-sm");
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
      <nav
        id="hh-navbar"
        className={cx("flex items-center select-none overflow-hidden", css.navbar)}
        data-expanded={navbarOpen}
      >
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
      <div className={cx("bg-white fixed w-full h-full z-10", css.over)}></div>
    </Fragment>
  );
};

export default Navbar;
