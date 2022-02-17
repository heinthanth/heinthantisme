import { AnimatePresence, motion } from "framer-motion";
import css from "./preloader.module.sass";

const isLightHouse = process.env.NEXT_PUBLIC_LIGHTHOUSE === "true";

const PreLoader = ({ visible }: { visible: boolean }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: isLightHouse ? 0 : 1, duration: 0.4 }}
        className={css.preloader}
      >
        <div className="font-sourceCodePro animate-pulse">$H3iN-&gt;isLoading();</div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default PreLoader;
