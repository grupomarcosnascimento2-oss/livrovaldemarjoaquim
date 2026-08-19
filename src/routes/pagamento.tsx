import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/pagamento")({
  head: () => ({
    meta: [
      { title: "Pagamento — Da Roça ao Serviço no Altar" },
      {
        name: "description",
        content:
          "Efetive a aquisição antecipada do livro 'Da Roça ao Serviço no Altar' via Pix.",
      },
    ],
  }),
  component: Pagamento,
});

const PIX_KEY = "livropapaivaldemarjoaquim@gmail.com";
const PRECO = "R$ 39,90";

function Pagamento() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(PIX_KEY);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Falha silenciosa: o usuário ainda pode selecionar e copiar manualmente.
    }
  }

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
              Valor do exemplar
            </p>
            <p className="mt-3 font-display text-5xl text-wood">{PRECO}</p>

            <p className="mt-8 text-sm tracking-[0.28em] text-gold-deep uppercase">
              Pague com Pix
            </p>
            <div className="mt-4 flex flex-col items-stretch gap-3 sm:flex-row">
              <div className="flex-1 truncate rounded-md border border-gold/40 bg-background px-4 py-3 text-left text-base text-ink/85">
                {PIX_KEY}
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className="btn-gold btn-gold-hover shrink-0 whitespace-nowrap"
              >
                {copied ? "Copiado!" : "Copiar Pix"}
              </button>
            </div>

            <div className="mt-10 space-y-3 text-left text-base leading-relaxed text-muted-foreground">
              <p className="font-display text-lg text-wood">Como pagar:</p>
              <ol className="list-decimal space-y-2 pl-5">
                <li>Copie a chave Pix acima.</li>
                <li>Abra o aplicativo do seu banco.</li>
                <li>
                  Escolha a opção Pix e cole a chave copiada no campo
                  correspondente.
                </li>
                <li>
                  Confira o valor de <strong className="text-wood">{PRECO}</strong>{" "}
                  e confirme o pagamento.
                </li>
              </ol>
            </div>
          </div>
        </Reveal>

        <Reveal delay={260}>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Após confirmar o pagamento, você já garantiu seu exemplar. Nos
            vemos no lançamento!
          </p>
          <p className="mt-4 text-center">
            <Link to="/" className="text-sm text-gold-deep underline underline-offset-4">
              Voltar para a página do livro
            </Link>
          </p>
        </Reveal>
      </div>
    </main>
  );
}
