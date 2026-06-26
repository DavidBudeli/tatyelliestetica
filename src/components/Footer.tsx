import { assets, navItems, siteConfig, whatsappUrl } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-tatyelli-green-dark pb-24 pt-12 text-white/75">
      <div className="container-page grid gap-9 md:grid-cols-[1.35fr_1fr_0.8fr]">
        <div>
          <a href="#inicio" aria-label="Estética Tatyelli Cristina" className="inline-flex">
            <img src={assets.logoLight} alt="Estética Tatyelli Cristina" className="h-16 w-auto max-w-[230px] object-contain" />
          </a>
          <p className="mt-5 max-w-md text-sm leading-6 text-white/70">
            Os procedimentos são indicados após avaliação individual. Resultados podem variar de pessoa para pessoa.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.12em] text-tatyelli-gold-soft">Contato</h2>
          <div className="mt-4 grid gap-2 text-sm">
            <a href={`mailto:${siteConfig.email}`} className="w-fit hover:text-tatyelli-gold-soft">
              {siteConfig.email}
            </a>
            <a href={whatsappUrl("Olá, Tatyelli! Vim pelo site e gostaria de falar com a clínica.")} className="w-fit hover:text-tatyelli-gold-soft">
              WhatsApp: {siteConfig.whatsappFormatted}
            </a>
            <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="w-fit hover:text-tatyelli-gold-soft">
              {siteConfig.instagram}
            </a>
            <a href={siteConfig.professionalInstagramUrl} target="_blank" rel="noreferrer" className="w-fit hover:text-tatyelli-gold-soft">
              {siteConfig.professionalInstagram}
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.12em] text-tatyelli-gold-soft">Navegação</h2>
          <div className="mt-4 grid gap-2 text-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="w-fit hover:text-tatyelli-gold-soft">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container-page mt-9 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-5 text-sm text-white/65">
        <span>© {new Date().getFullYear()} Estética Tatyelli Cristina.</span>
        <span>
          Desenvolvido por{" "}
          <a href="https://hyperag.com.br/pt-BR" target="_blank" rel="noreferrer" className="text-tatyelli-gold-soft hover:text-white">
            HyperAG
          </a>
        </span>
      </div>
    </footer>
  );
}
