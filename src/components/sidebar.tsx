import ExpandableIcon from "@/components/expandableicon";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 min-h-screen flex flex-col min-w-1/12 justify-start">
      <ExpandableIcon
        initialText="jw"
        fullText="jared.woelfel"
        link="mailto:jared.woelfel@outlook.com"
        className="bg-orange-500"
      />
      <ExpandableIcon
        initialText="in"
        fullText="linkedin"
        link="https://www.linkedin.com/in/jared-woelfel-5361a3177/"
        className="bg-indigo-400"
      />
      <ExpandableIcon
        initialText="gh"
        fullText="github"
        link="https://github.com/jwafle"
        className="bg-purple-400"
      />
      <ExpandableIcon
        initialText="X"
        fullText="X (f.k.a twitter)"
        link="https://twitter.com/jnwafle"
        className="bg-slate-950 text-white"
      />
    </div>
  );
}

export default Sidebar