import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

type TipoEntrega = "retirada" | "correio";

const ENTREGAS: Record<
  TipoEntrega,
  { titulo: string; preco: string; linkPagamento: string }
> = {
  retirada: {
    titulo: "Retirar no dia do lançamento",
    preco: "R$ 39,90",
    linkPagamento: "https://mpago.li/19a7Nmt",
  },
  correio: {
    titulo: "Receber em casa pelos Correios",
    preco: "R$ 59,90",
    linkPagamento: "https://mpago.la/2cGPjKd",
  },
};

export const Route = createFileRoute("/pagamento")({
  validateSearch: (
    search: Record<string, unknown>,
  ): { entrega: TipoEntrega } => ({
    entrega: search.entrega === "correio" ? "correio" : "retirada",
  }),
  head: () => ({
    meta: [
      { title: "Pagamento — Da Roça ao Serviço no Altar" },
      {
        name: "description",
        content:
          "Efetive a aquisição antecipada do livro 'Da Roça ao Serviço no Altar'.",
      },
    ],
  }),
  component: Pagamento,
});

function Pagamento() {
  const { entrega } = Route.useSearch();
  const opcao = ENTREGAS[entrega];

  return (
    <main className="surface-light min-h-screen px-6 py-20 md:py-28">
      <div className="mx-auto max-w-xl">
        <Reveal>
          <p className="text-center text-xs tracking-[0.42em] text-gold-deep uppercase">
            Aquisição antecipada
          </p>
          <h1 className="mt-6 text-center font-display text-4xl leading-snug md:text-5xl">
            <span className="text-gold-gradient">Da Roça ao</span>
            <br />
            <span className="text-gold-gradient">Serviço no Altar</span>
          </h1>
          <p className="mt-6 text-center text-lg leading-relaxed text-muted-foreground">
            Garanta agora seu exemplar antes do lançamento oficial e faça
            parte deste momento especial.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 rounded-2xl border border-gold/35 bg-card px-6 py-8 text-center md:px-10">
            <p className="text-xs tracking-[0.32em] text-gold-deep uppercase">
              Lançamento oficial
            </p>
            <p className="mt-3 font-display text-2xl text-wood">
              26 de setembro de 2026, às 20h30
            </p>
            <p className="mt-1 text-muted-foreground">
              Salão da Paróquia Perpétuo Socorro — Taguatinga Centro
            </p>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-8 rounded-2xl border border-gold/35 bg-card px-6 py-10 text-center md:px-10">
            <p className="text-xs tracking-[0.32em] text-gold-deep uppercase">
              {opcao.titulo}
            </p>
            <p className="mt-3 font-display text-5xl text-wood">
              {opcao.preco}
            </p>
            {entrega === "correio" && (
              <p className="mt-2 text-sm font-semibold text-gold-deep">
                Frete grátis
              </p>
            )}

            <div className="mt-10">
              <a
                href={opcao.linkPagamento}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold btn-gold-hover inline-flex items-center gap-2"
              >
                Pagar com Mercado Pago
              </a>
              <p className="mt-5 text-sm text-muted-foreground">
                Você será direcionado para um ambiente seguro do Mercado Pago,
                onde pode pagar via Pix, cartão ou outras formas disponíveis.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={260}>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Após confirmar o pagamento, você já garantiu seu exemplar. Nos
            vemos no lançamento!
          </p>
          <p className="mt-4 text-center">
            <Link
              to="/"
              className="text-sm text-gold-deep underline underline-offset-4"
            >
              Voltar para a página do livro
            </Link>
          </p>
        </Reveal>
      </div>
    </main>
  );
}
