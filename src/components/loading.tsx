import { motion } from "framer-motion";
import "./loading.module.sass";

const Loading = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="select-none fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-50"
  >
    <div className="flex font-sourceCodePro w-[200px] h-[200px] items-center justify-center relative">
      <div className="animate-pulse [animation-duration:3s]">$H3iN-&gt;isLoading();</div>
    </div>
  </motion.div>
);

export default Loading;
