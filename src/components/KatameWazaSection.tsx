import { katameData } from "@/data/judoData";

const KatameWazaSection = () => {
  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">固</span>
        Katame-Waza - Técnicas de Domínio
      </h2>

      <div className="card-judo mb-8">
        <p className="text-sm text-foreground/70">
          Katame-Waza são técnicas de controle divididas em 3 categorias: Osae-Komi-Waza (imobilizações), 
          Shime-Waza (estrangulamentos) e Kansetsu-Waza (chaves de articulação).
        </p>
      </div>

      {Object.entries(katameData).map(([key, category]) => (
        <div key={key} className="mb-10">
          <h3 className="text-lg font-semibold text-white flex items-center gap-3 mb-5">
            <span className="text-2xl font-serif text-primary">{category.title.split(' ')[0]}</span>
            {category.title.split(' ').slice(1).join(' ')}
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {category.techniques.map((technique, index) => (
              <div key={index} className="card-judo text-center hover:scale-[1.02] transition-transform">
                <h4 className="font-semibold text-white text-sm mb-2">{technique.name}</h4>
                <p className="text-2xl font-serif text-primary mb-2">{technique.kanji}</p>
                <p className="text-xs text-muted-foreground">{technique.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Prohibited Techniques */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5 mt-10">
        <span>⛔</span> Kinshi-Waza (Técnicas Proibidas)
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { name: "Ashi-Garami", kanji: "足緘", desc: "Chave de perna - proibida em competição" },
          { name: "Kani-Basami", kanji: "蟹挟", desc: "Tesoura - alta chance de lesão" },
          { name: "Kawazu-Gake", kanji: "河津掛", desc: "Gancho Kawazu - muito perigoso" },
          { name: "Do-Jime", kanji: "胴絞", desc: "Estrangulamento do tronco" },
          { name: "Daki-Age", kanji: "抱上", desc: "Levantar e jogar o oponente" },
        ].map((technique, index) => (
          <div 
            key={index} 
            className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-center"
          >
            <h4 className="font-semibold text-red-400 text-sm mb-1">{technique.name}</h4>
            <p className="text-xl font-serif text-red-400/80 mb-2">{technique.kanji}</p>
            <p className="text-xs text-foreground/60">{technique.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KatameWazaSection;
