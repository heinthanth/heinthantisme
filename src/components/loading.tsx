import "./loading.module.sass";

const Loading = () => (
  <div className="select-none fixed w-full h-full bg-white flex items-center justify-center z-50">
    <div className="flex font-sourceCodePro w-[250px] h-[250px] items-center justify-center relative">
      <div className="ring-2 ring-black w-full h-full absolute top-0 left-0 animate-spin [animation-duration:3s]"></div>
      <div className="ring-2 ring-black w-full h-full absolute top-0 left-0 animate-spin [animation-duration:6s]"></div>
      <div className="animate-pulse [animation-duration:3s]">$H3iN-&gt;isLoading();</div>
    </div>
  </div>
);

export default Loading;
