import ExpandableIcon from "@/components/expandableicon";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 min-h-screen flex flex-col min-w-1/12 justify-start">
      <ExpandableIcon
        initialText="jw"
        fullText="jared.woelfel"
        link="mailto:jared.woelfel@outlook.com"
        className="bg-orange-300 hover:bg-orange-400 hover:scale-105"
      />
      <ExpandableIcon
        initialText="in"
        fullText="linkedin"
        link="https://www.linkedin.com/in/jared-woelfel-5361a3177/"
        className="bg-indigo-300 hover:bg-indigo-400 hover:scale-105"
      />
      <ExpandableIcon
        initialText="gh"
        fullText="github"
        link="https://github.com/jwafle"
        className="bg-purple-300 hover:bg-purple-400 hover:scale-105"
      />
      <ExpandableIcon
        initialText="X"
        fullText="X (f.k.a twitter)"
        link="https://twitter.com/jnwafle"
        className="bg-slate-950 text-white hover:scale-105 hover:bg-black"
      />
    </div>
  );
}

export default Sidebar