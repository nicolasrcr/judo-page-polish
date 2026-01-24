import { sections } from "@/data/judoData";

interface ComingSoonSectionProps {
  section: string;
  onNavigate: (section: string) => void;
}

const ComingSoonSection = ({ section, onNavigate }: ComingSoonSectionProps) => {
  const sectionInfo = sections.find(s => s.id === section);
  
  return (
    <div className="animate-fade-in">
      <h2 className="section-title">
        <span className="section-title-icon">{sectionInfo?.icon || '📖'}</span>
        {sectionInfo?.label || 'Seção'}
      </h2>

      <div className="card-judo text-center py-16">
        <span className="text-6xl mb-6 block">{sectionInfo?.icon || '🥋'}</span>
        <h3 className="text-2xl font-semibold text-white mb-4">
          Conteúdo em Desenvolvimento
        </h3>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Esta seção está sendo preparada com todo o conteúdo sobre {sectionInfo?.label?.toLowerCase()}.
          Volte em breve para acessar todo o material de estudo.
        </p>
        <button 
          onClick={() => onNavigate('home')}
          className="btn-gold"
        >
          ← Voltar ao Início
        </button>
      </div>

      {/* Quick Navigation */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-primary mb-5">Seções Disponíveis</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {['historia', 'principios', 'etiqueta', 'gokyo', 'katameWaza', 'regras'].map((id) => {
            const s = sections.find(sec => sec.id === id);
            return (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className="p-4 bg-card border border-primary/20 rounded-xl text-left hover:border-primary/50 transition-colors group"
              >
                <span className="text-2xl font-serif text-primary block mb-2">{s?.icon}</span>
                <span className="text-sm text-foreground group-hover:text-primary transition-colors">{s?.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ComingSoonSection;
