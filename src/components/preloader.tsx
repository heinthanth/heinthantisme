import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useEffect, useState } from "react";
import css from "./preloader.module.sass";
import cx from "classnames";

const PreLoader = ({ visible }: { visible: boolean }) => {
  const [shouldShow, setShouldShow] = useState(visible);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    if (visible) setShouldShow(true), setShouldAnimate(true);
    const elem = document.querySelector("#preloader-slider");

    // prettier-ignore
    const waitForEnd = () =>
      new Promise((resolve) => !visible && resolve(true))
        .then(() => setShouldAnimate(false))
        .then(() => setShouldShow(false));

    elem?.addEventListener("animationiteration", waitForEnd);
    return () => elem?.removeEventListener("animationiteration", waitForEnd);
  }, [visible]);

  return (
    <AnimatePresence>
      {shouldShow && (
        <Fragment>
          <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="select-none will-change-transform fixed top-0 right-0 w-full h-full bg-white flex items-center justify-center z-50 shadow-sm"
          >
            <div
              id="preloader-slider"
              className={cx(css.progress, shouldAnimate && css.animatedProgress)}
            ></div>
          </motion.div>
          <div className={cx(css.color, shouldAnimate ? css.animatedColor : css.prepareLeave)}>
            $H3iN-&gt;isLoading();
          </div>
        </Fragment>
      )}
    </AnimatePresence>
  );
};

export default PreLoader;
