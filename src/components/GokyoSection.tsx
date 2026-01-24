import { useState } from "react";
import { gokyoData } from "@/data/judoData";
import { cn } from "@/lib/utils";

const GokyoSection = () => {
  const [activeGroup, setActiveGroup] = useState<keyof typeof gokyoData>("ikkyo");

  const groups = Object.entries(gokyoData);
  const currentGroup = gokyoData[activeGroup];

  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">投</span>
        Gokyo no Waza - 五教
      </h2>

      <div className="card-judo mb-8">
        <p className="text-sm text-foreground/70">
          O Go-Kyo (Cinco Ensinos) foi estabelecido por Jigoro Kano em 1895 e revisado em 1920 (Shin-Go-Kyo). 
          Contém 40 técnicas fundamentais de projeção em 5 grupos de 8 técnicas cada.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {groups.map(([key, group]) => (
          <button
            key={key}
            onClick={() => setActiveGroup(key as keyof typeof gokyoData)}
            className={cn(
              "px-4 py-2.5 rounded-xl text-sm font-medium transition-all border",
              activeGroup === key
                ? "bg-gradient-to-br from-secondary/60 to-secondary/40 border-primary text-primary"
                : "bg-card border-primary/20 text-muted-foreground hover:border-primary/40 hover:text-foreground"
            )}
          >
            {group.name}
          </button>
        ))}
      </div>

      {/* Techniques Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentGroup.techniques.map((technique) => (
          <div key={technique.num} className="technique-card">
            <div className="flex items-start justify-between mb-2">
              <span className="w-7 h-7 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center">
                {technique.num}
              </span>
              <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                {technique.group}
              </span>
            </div>
            <h4 className="font-semibold text-white text-sm mb-1">{technique.name}</h4>
            <p className="text-2xl font-serif text-primary mb-2">{technique.kanji}</p>
            <p className="text-xs text-muted-foreground">{technique.translation}</p>
          </div>
        ))}
      </div>

      {/* Group Legend */}
      <div className="mt-8 p-5 bg-card rounded-xl border border-primary/20">
        <h4 className="text-sm font-semibold text-primary mb-4">Categorias de Técnicas</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { name: "Te-waza", desc: "Técnicas de mão/braço" },
            { name: "Koshi-waza", desc: "Técnicas de quadril" },
            { name: "Ashi-waza", desc: "Técnicas de perna/pé" },
            { name: "Ma-sutemi", desc: "Sacrifício para trás" },
            { name: "Yoko-sutemi", desc: "Sacrifício lateral" },
          ].map((cat, index) => (
            <div key={index} className="p-3 bg-muted/50 rounded-lg">
              <p className="text-sm font-medium text-primary">{cat.name}</p>
              <p className="text-xs text-muted-foreground">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GokyoSection;
