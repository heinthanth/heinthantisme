import Link from "next/link";
import cx from "classnames";
import css from "./navbar.module.sass";
import { NavbarRoutes } from "../misc/routes";
import { useEffect, useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useRouter } from "next/router";

const Navbar = () => {
  const { asPath } = useRouter();
  const p = asPath.split(/[?#]/)[0];
  // prettier-ignore
  const initIndex = NavbarRoutes.findIndex(({ uri }) =>
    uri === "/" ? p === uri : p.includes(uri));
  const currentRouteIndex = initIndex === -1 ? 0 : initIndex;
  const [indicatorIndex, setIndicatorIndex] = useState(currentRouteIndex);
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    const elem = document.body;
    navbarOpen
      ? elem?.classList.add("overflow-hidden", "md:overflow-auto")
      : elem?.classList.remove("overflow-hidden", "md:overflow-auto");
  }, [navbarOpen]);

  useEffect(() => {
    setNavbarOpen(false);
  }, [asPath]);

  return (
    <nav
      className={cx(
        "flex items-center select-none w-full md:h-[80px] bg-white shadow-sm fixed overflow-hidden",
        css.navbar,
        navbarOpen ? "h-full" : "h-[80px]"
      )}
      data-expanded={navbarOpen}
    >
      <div className="container h-full md:h-[unset] flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center justify-between min-h-[80px] md:min-h-[unset] md:h-[unset]">
          <Link href="/">
            <a className={css.logo}>
              <span>HIIIiN</span>
              <small className={cx(css.logoExtra, "text-xs")}>&apos;s space</small>
            </a>
          </Link>
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex w-[24px] h-[32px] items-center space-x-2 focus:outline-none md:hidden"
            aria-label="Toggle Navigation bar"
            aria-controls="main-navbar"
            aria-expanded={navbarOpen}
          >
            <div className="w-6 flex items-center justify-center relative">
              <span
                className={cx(
                  "transform transition w-full h-[2px] bg-current absolute",
                  navbarOpen ? "translate-y-0 rotate-45" : "-translate-y-2"
                )}
              ></span>
              <span
                className={cx(
                  "transform transition w-full h-[2px] bg-current absolute",
                  navbarOpen ? "opacity-0 translate-x-3" : "opacity-100"
                )}
              ></span>
              <span
                className={cx(
                  "transform transition w-full h-[2px] bg-current absolute",
                  navbarOpen ? "translate-y-0 -rotate-45" : "translate-y-2"
                )}
              ></span>
            </div>
          </button>
        </div>
        <div
          className={cx("flex items-center md:grow overflow-hidden", css.navMenu)}
          id="main-navbar"
        >
          <AnimateSharedLayout>
            <ul className="md:ml-auto overflow-hidden flex flex-col md:flex-row">
              {NavbarRoutes.map((route, index) => {
                const isCurrentRoute = currentRouteIndex === index;
                const shouldShowIndicator = indicatorIndex === index;
                return (
                  <li key={index} className="mb-3 md:mb-0">
                    <Link href={route.uri}>
                      <a
                        onMouseEnter={() => setIndicatorIndex(index)}
                        onMouseLeave={() => setIndicatorIndex(currentRouteIndex)}
                        className={cx("p-2 pr-3 pl-0 md:pl-3", css.navLink)}
                        aria-label={route.ariaLabel}
                        aria-current={isCurrentRoute ? "page" : "false"}
                      >
                        <span className={shouldShowIndicator ? "text-black" : "text-neutral-600"}>
                          {route.label}
                        </span>
                        {shouldShowIndicator && (
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
          </AnimateSharedLayout>
        </div>
        <div
          className={cx(
            "py-6 md:hidden h-[80px] overflow-hidden",
            css.contactMail,
            navbarOpen ? "opacity-100" : "opacity-0 md:opacity-100"
          )}
        >
          <a href="mailto:contact@heinthantis.me">contact@heinthantis.me</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
