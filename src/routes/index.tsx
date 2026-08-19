import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import bookCover from "@/assets/book-cover.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Da Roça ao Serviço no Altar — Pré-lançamento" },
      {
        name: "description",
        content:
          "Pré-lançamento do livro sobre a vida de Valdemar Joaquim, Ministro Extraordinário da Comunhão Eucarística, escrito por seu filho Marcos Nascimento.",
      },
      { property: "og:title", content: "Da Roça ao Serviço no Altar" },
      {
        property: "og:description",
        content:
          "Uma história simples. Uma vida de fé. Um legado que permanece. Participe do pré-lançamento.",
      },
      { property: "og:type", content: "book" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// Substituir pelo número real de contato quando disponível.
const WHATSAPP =
  "https://wa.me/?text=" +
  encodeURIComponent(
    'Olá! Quero reservar meu exemplar do livro "Da Roça ao Serviço no Altar".',
  );

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3 text-gold">
      <span className="h-px w-14 rule-gold" aria-hidden />
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 2v20M6 8h12"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
      <span className="h-px w-14 rule-gold" aria-hidden />
    </div>
  );
}

const journey = [
  {
    tag: "Da Roça",
    place: "São João do Piauí",
    text: "Onde nasceram os primeiros valores: trabalho, simplicidade, coragem e perseverança.",
  },
  {
    tag: "Para Brasília",
    place: "Uma viagem de 40 dias",
    text: "Um jovem deixando sua terra em busca de uma nova vida.",
  },
  {
    tag: "Exército",
    place: "Disciplina e reconhecimento",
    text: "O menino da roça tornou-se soldado e descobriu que dedicação e zelo poderiam abrir caminhos inesperados.",
  },
  {
    tag: "Família",
    place: "Maria José, Marcos, Mauriceia e Tiago",
    text: "Uma família construída com amor, trabalho, presença e fé.",
  },
  {
    tag: "O Chamado",
    place: "Ministro Extraordinário da Comunhão Eucarística",
    text: "Um novo capítulo de serviço à Igreja.",
  },
  {
    tag: "Caldas Novas",
    place: "Uma missão que continuou",
    text: "Na Igreja Matriz Nossa Senhora das Dores e no Santuário Nossa Senhora de Salette, Valdemar continuou servindo com o mesmo zelo.",
  },
];

function Index() {
  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section className="surface-light relative px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-xs tracking-[0.42em] text-gold-deep uppercase">
              Pré-lançamento
            </p>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl">
              <span className="text-gold-gradient">Da Roça ao</span>
              <br />
              <span className="text-gold-gradient">Serviço no Altar</span>
            </h1>
            <div className="mx-auto mt-8 max-w-md">
              <p className="font-display text-2xl leading-relaxed text-wood md:text-3xl">
                Uma história simples.
                <br />
                Uma vida de fé.
                <br />
                Um legado que permanece.
              </p>
              <p className="mt-7 text-base leading-relaxed text-muted-foreground">
                A história de{" "}
                <strong className="font-semibold text-wood">
                  Valdemar Joaquim
                </strong>
                , contada por seu filho Marcos Nascimento, para guardar em
                palavras uma vida marcada pela simplicidade, pelo trabalho, pela
                família, pela fé e pelo serviço à Igreja.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200} className="mt-12 flex justify-center">
            <div className="relative">
              <div
                className="absolute -inset-10 rounded-full opacity-70 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.85 0.13 84 / 0.55), transparent 65%)",
                }}
                aria-hidden
              />
              <img
                src={bookCover}
                width={1024}
                height={1536}
                alt="Capa do livro Da Roça ao Serviço no Altar, de Marcos Nascimento"
                className="relative w-[320px] rounded-r-md md:w-[420px]"
                style={{
                  transform: "perspective(1400px) rotateY(-13deg)",
                }}
              />
            </div>
          </Reveal>

          <Reveal delay={280} className="mt-12 flex justify-center">
            <a href="#reserva" className="btn-gold btn-gold-hover">
              Quero participar do pré-lançamento
            </a>
          </Reveal>
        </div>
      </section>

      {/* JORNADA */}
      <section className="bg-secondary px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-center font-display text-4xl md:text-5xl">
              Este livro nasceu de uma história real
            </h2>
            <p className="mt-5 text-center font-display text-2xl text-wood">
              Uma vida simples. Uma grande caminhada.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="mx-auto mt-10 max-w-2xl space-y-5 text-center text-lg leading-[1.9] text-muted-foreground">
              <p>
                Algumas histórias merecem ser contadas.
                <br />
                Outras precisam ser preservadas.
              </p>
              <p>
                A vida de{" "}
                <strong className="font-semibold text-gold-deep">
                  Valdemar Joaquim
                </strong>{" "}
                foi construída longe dos holofotes.
              </p>
              <p>Começou na simplicidade da roça, no interior do Piauí.</p>
            </div>
          </Reveal>
          <ol className="mt-16 space-y-10 border-l border-gold/40 pl-8 md:pl-12">
            {journey.map((step, i) => (
              <li key={step.tag}>
                <Reveal delay={i * 80}>
                  <span
                    className="absolute -ml-[2.55rem] mt-2 block h-3 w-3 rounded-full bg-gold md:-ml-[3.55rem]"
                    aria-hidden
                  />
                  <h3 className="text-xs tracking-[0.32em] text-gold-deep uppercase">
                    {step.tag}
                  </h3>
                  <p className="mt-2 font-display text-2xl text-wood">
                    {step.place}
                  </p>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FRASE CENTRAL */}
      <section className="surface-dark px-6 py-24 md:py-28">
        <Reveal>
          <p className="mx-auto max-w-3xl text-center font-display text-3xl leading-snug md:text-5xl">
            <span className="text-gold-gradient">
              “Uma vida simples pode deixar um legado extraordinário.”
            </span>
          </p>
        </Reveal>
      </section>

      {/* DENTRO DO LIVRO */}
      <section className="bg-background px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-center font-display text-4xl md:text-5xl">
              Mais do que uma biografia
            </h2>
            <p className="mt-8 text-center text-lg leading-[1.9] text-muted-foreground">
              Este livro reúne lembranças, acontecimentos e testemunhos de uma
              vida que foi muito maior do que as palavras conseguem explicar.
            </p>
            <div className="mx-auto mt-8 max-w-2xl space-y-5 text-center text-lg leading-[1.9] text-muted-foreground">
              <p>
                E é justamente por isso que este livro foi escrito. Para que a
                história de Valdemar não fique apenas na memória daqueles que
                conviveram com ele.
              </p>
              <p>
                Para que ela possa atravessar o tempo. Para que seus filhos,
                seus netos e as próximas gerações possam conhecer o homem que
                ele foi.
              </p>
              <p>
                E para que todos aqueles que um dia cruzaram seu caminho
                possam guardar essa lembrança em um lugar especial.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LEGADO */}
      <section className="surface-light px-6 py-28 md:py-40">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Ornament />
            <h2 className="mt-10 font-display text-3xl leading-snug md:text-5xl">
              O que permanece quando uma vida simples deixa um grande legado?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-14 space-y-6 text-lg leading-[2] text-ink/80">
              <p>Talvez não sejam os bens.</p>
              <p>Talvez não sejam os títulos.</p>
              <p>
                Talvez não sejam as conquistas que o mundo costuma medir.
              </p>
              <p className="font-display text-2xl text-gold-deep">
                Talvez sejam as pessoas que foram tocadas.
              </p>
              <p>Os exemplos que permaneceram.</p>
              <p>As lembranças que continuam vivas.</p>
              <p>Os gestos que alguém nunca esqueceu.</p>
              <p>
                E é justamente por isso que este livro está sendo escrito. Para
                que a história de Valdemar não fique apenas na memória daqueles
                que conviveram com ele.
              </p>
              <p>
                Para que ela possa atravessar o tempo. Para que seus filhos,
                seus netos e as próximas gerações possam conhecer o homem que
                ele foi.
              </p>
              <p>
                E para que todos aqueles que um dia cruzaram seu caminho possam
                guardar essa lembrança em um lugar especial.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRÉ-LANÇAMENTO */}
      <section id="reserva" className="surface-dark px-6 py-28 md:py-36">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs tracking-[0.42em] text-gold-soft uppercase">
              Pré-lançamento
            </p>
            <h2 className="mt-6 font-display text-4xl leading-snug md:text-5xl">
              <span className="text-gold-gradient">
                Faça parte deste momento
              </span>
            </h2>
            <div className="mx-auto mt-10 max-w-xl space-y-5 text-lg leading-[1.9] text-cream/80">
              <p>
                Este é o pré-lançamento de uma história muito especial para
                nossa família.
              </p>
              <p>
                Antes que o livro chegue oficialmente às mãos dos leitores,
                quero convidar especialmente você que conheceu meu pai,
                conviveu com ele ou fez parte de algum momento de sua
                caminhada.
              </p>
              <p>
                Participar deste pré-lançamento é mais do que reservar um
                livro. É dizer:
              </p>
              <p className="font-display text-2xl text-gold-soft">
                “Eu quero fazer parte da preservação dessa história.”
              </p>
              <p>
                É ajudar a transformar lembranças em páginas. É guardar um
                pedaço dessa caminhada. É receber em suas mãos uma homenagem
                feita com amor.
              </p>
            </div>
            <div className="mt-14">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold btn-gold-hover"
              >
                Quero reservar meu exemplar
              </a>
              <p className="mt-5 text-sm text-cream/60">
                Pré-lançamento — reserve seu exemplar e faça parte deste
                momento especial.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CARTA DO AUTOR */}
      <section className="bg-background px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="text-center font-display text-4xl md:text-5xl">
              Uma mensagem de Marcos Nascimento
            </h2>
            <div
              className="mt-12 rounded-lg border border-border px-7 py-12 md:px-14"
              style={{
                background:
                  "linear-gradient(180deg, oklch(0.985 0.014 88), oklch(0.955 0.024 84))",
              }}
            >
              <div className="space-y-5 text-lg leading-[1.95] text-ink/85">
                <p>
                  Este livro nasceu de uma necessidade muito simples: não deixar
                  a história do meu pai se perder no tempo.
                </p>
                <p>Convivi com Valdemar durante toda a minha vida.</p>
                <p>
                  Conheci seus gestos, seu jeito de servir, sua dedicação à
                  família e sua fé.
                </p>
                <p>
                  Mas, ao reunir essas lembranças para escrever este livro,
                  percebi algo ainda maior: a história do meu pai não pertence
                  somente à nossa família.
                </p>
                <p>
                  Ela também pertence às pessoas que caminharam com ele. Àqueles
                  que receberam sua ajuda. Àqueles que rezaram ao seu lado.
                  Àqueles que o encontraram na Igreja. Àqueles que simplesmente
                  tiveram a oportunidade de conhecê-lo.
                </p>
                <p>Por isso, este livro é uma homenagem.</p>
                <p>Mas também é um convite.</p>
                <p>
                  Um convite para lembrar. Para agradecer. Para sorrir. E, quem
                  sabe, para se emocionar novamente com a lembrança de um homem
                  que viveu uma vida simples, mas deixou marcas profundas.
                </p>
                <p>
                  Se você conheceu meu pai, espero que ao ler estas páginas você
                  reencontre um pouco dele.
                </p>
              </div>
              <p className="mt-10 text-muted-foreground">Com carinho,</p>
              <p className="mt-1 font-display text-3xl text-gold-deep">
                Marcos Nascimento
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SEGUNDA PAUSA + FINAL */}
      <section className="surface-dark px-6 py-28 md:py-36">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="font-display text-2xl text-gold-soft">
              Feche os olhos por alguns segundos...
            </p>
            <p className="mt-4 text-cream/70">
              e deixe a lembrança chegar devagar.
            </p>
            <div className="mt-12">
              <Ornament />
            </div>
            <h2 className="mt-10 font-display text-3xl leading-snug md:text-5xl">
              <span className="text-gold-gradient">
                Algumas histórias terminam.
              </span>
              <br />
              <span className="text-gold-gradient">
                Outras continuam vivendo em nós.
              </span>
            </h2>
            <div className="mt-12 space-y-4 text-lg leading-[1.9] text-cream/80">
              <p>A história de Valdemar continua.</p>
              <p>Continua nas lembranças.</p>
              <p>Continua nos filhos.</p>
              <p>Continua na família.</p>
              <p>Continua nas pessoas que ele ajudou.</p>
              <p>Continua na Igreja onde serviu.</p>
              <p>
                Continua nas mãos que um dia receberam a Eucaristia através
                dele.
              </p>
              <p className="pt-4 font-display text-2xl text-gold-soft">
                E agora... continua também neste livro.
              </p>
            </div>
            <div className="mt-14">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold btn-gold-hover"
              >
                Eu quero fazer parte desta história
              </a>
              <p className="mt-5 text-sm text-cream/60">
                Participe do pré-lançamento de “Da Roça ao Serviço no Altar”.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-background px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl tracking-wide text-gold-deep">
            Da Roça ao Serviço no Altar
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            A vida simples de Valdemar Joaquim, um Ministro Extraordinário da
            Comunhão Eucarística que Tocou Nossos Corações
          </p>
          <p className="mt-4 text-sm tracking-[0.22em] text-wood uppercase">
            Marcos Nascimento
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-quiet"
            >
              Falar pelo WhatsApp
            </a>
            <a href="#reserva" className="btn-quiet">
              Reservar meu exemplar
            </a>
          </div>
          <div className="mx-auto mt-10 h-px w-40 rule-gold" />
          <p className="mt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Marcos Nascimento. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
