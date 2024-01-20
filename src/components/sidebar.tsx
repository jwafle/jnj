import ExpandableIcon from "@/components/expandableicon";
import ThemeToggle from "@/components/themetoggle";

function Sidebar(props: any) {
  return (
    <div className="fixed left-0 top-0 min-h-screen flex flex-col min-w-1/12 justify-start">
      <ExpandableIcon
        initialText="jw"
        fullText="jared.woelfel"
        className="bg-orange-300 hover:bg-orange-400 border-2 border-orange-400 hover:scale-105"
      />
      <ExpandableIcon
        initialText="in"
        fullText="linkedin"
        className="bg-indigo-300 hover:bg-indigo-400 border-2 border-indigo-400 hover:scale-105"
      />
      <ExpandableIcon
        initialText="gh"
        fullText="github"
        className="bg-purple-300 hover:bg-purple-400 border-2 border-purple-400 hover:scale-105"
      />
      <ExpandableIcon
        initialText="X"
        fullText="X (f.k.a twitter)"
        className="bg-slate-950 text-white border-2 border-black hover:scale-105 hover:bg-black"
      />
      <ThemeToggle />
    </div>
  );
}

export default Sidebar