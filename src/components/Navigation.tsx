import { sections } from "@/data/judoData";
import { cn } from "@/lib/utils";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  return (
    <nav className="sticky top-[76px] z-40 bg-card/95 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-2 overflow-x-auto py-3 scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onNavigate(section.id)}
              className={cn(
                "nav-btn flex-shrink-0",
                activeSection === section.id && "active"
              )}
            >
              <span className="text-base font-serif">{section.icon}</span>
              {/* Mobile: show both Portuguese and Japanese */}
              <span className="sm:hidden flex flex-col items-start leading-tight">
                <span className="text-[10px]">{section.label}</span>
                <span className="text-[9px] text-primary/70">{section.labelJp}</span>
              </span>
              {/* Desktop: show only Portuguese */}
              <span className="hidden sm:inline">{section.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
