import { beltSystem } from "@/data/judoData";

const BeltSystemSection = () => {
  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">礼</span>
        Sistema de Graduação
      </h2>

      {/* Kyu (Student) Belts */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5">
          🎓 Faixas Kyu (Estudantes)
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {beltSystem.kyu.map((belt, index) => (
            <div key={index} className="card-judo text-center p-4 hover:-translate-y-1 transition-transform">
              <div 
                className="w-full h-6 rounded-lg mb-3 shadow-md"
                style={{ background: belt.color }}
              />
              <h4 className="font-semibold text-white text-sm">{belt.name}</h4>
              <p className="text-xs text-muted-foreground mt-1">{belt.rank}</p>
              <p className="text-xs text-green-400 mt-1">{belt.age}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dan (Master) Belts */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5">
          🥋 Faixas Dan (Mestres)
        </h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {beltSystem.dan.map((belt, index) => (
            <div key={index} className="card-judo text-center p-5 hover:-translate-y-1 transition-transform">
              <div 
                className="w-full h-6 rounded-lg mb-3 shadow-md"
                style={{ background: belt.color }}
              />
              <h4 className="font-semibold text-white">{belt.name}</h4>
              <p className="text-sm text-muted-foreground mt-1">{belt.rank}</p>
              <p className="text-xs text-primary mt-1">{belt.age}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hierarchy */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5 mt-10">
        👥 Hierarquia no Dojô
      </h3>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/15 to-gold-dark/15 border-2 border-primary/40 text-center hover:-translate-y-1 transition-transform">
          <span className="text-4xl font-serif text-primary">先輩</span>
          <h4 className="text-lg font-semibold text-white mt-3 mb-2">Senpai</h4>
          <p className="text-sm text-foreground/70 leading-relaxed">
            Aluno mais experiente. Responsável por orientar e auxiliar os Kohai. 
            Serve de exemplo de conduta e dedicação.
          </p>
        </div>
        <div className="p-6 rounded-2xl bg-gradient-to-br from-secondary/20 to-judo-red-dark/20 border-2 border-secondary/40 text-center hover:-translate-y-1 transition-transform">
          <span className="text-4xl font-serif text-red-400">後輩</span>
          <h4 className="text-lg font-semibold text-white mt-3 mb-2">Kohai</h4>
          <p className="text-sm text-foreground/70 leading-relaxed">
            Aluno menos experiente. Deve respeitar e aprender com os Senpai. 
            Demonstra humildade e vontade de aprender.
          </p>
        </div>
      </div>

      {/* Dojo Layout */}
      <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-5 mt-10">
        🏛️ Estrutura do Dojô
      </h3>
      <div className="card-judo p-6">
        <div className="grid grid-cols-3 gap-2 mb-6 text-center text-sm font-medium">
          <div className="col-span-3 p-5 rounded-lg bg-gradient-to-br from-secondary/40 to-judo-red-dark/40 border-2 border-primary text-primary">
            KAMIZA (Lugar de Honra)
          </div>
          <div className="p-4 rounded-lg bg-blue-500/20 border border-blue-500/40 text-blue-400">
            JOSEKI (Convidados)
          </div>
          <div className="p-10 rounded-lg bg-green-500/15 border border-dashed border-green-500/40 text-green-400">
            EMBUJO (Área de Prática)
          </div>
          <div className="p-4 rounded-lg bg-purple-500/20 border border-purple-500/40 text-purple-400">
            SHIMOSEKI (Auxiliares)
          </div>
          <div className="col-span-3 p-4 rounded-lg bg-white/5 border border-white/20 text-foreground/60">
            SHIMOZA (Entrada / Alunos)
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { color: "bg-primary", label: "Kamiza: Altar/foto do fundador" },
            { color: "bg-blue-500", label: "Joseki: Visitantes e juízes" },
            { color: "bg-green-500", label: "Embujo: Área de treino" },
            { color: "bg-purple-500", label: "Shimoseki: Instrutores auxiliares" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2 p-2 bg-black/20 rounded-lg">
              <div className={`w-3 h-3 rounded-full ${item.color}`} />
              <span className="text-xs text-foreground/70">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeltSystemSection;
