# Direção de design — PreXion Corporate

## Referência principal

O site https://prexionelite.com/ é a especificação visual de referência. A nova experiência institucional deve parecer parte do mesmo sistema de marca: tecnológica, cinematográfica, precisa e premium, porém ampliada para representar toda a PreXion e seu portfólio global. A fidelidade está na linguagem de composição, no ritmo narrativo e na atmosfera; o conteúdo será reorganizado para melhorar descoberta, comparação de produtos e conversão.

## Abordagem escolhida: Precision in Motion

### Movimento de design

**Minimalismo tecnológico cinematográfico**, influenciado por lançamentos de equipamentos médicos premium, editoriais automotivos e interfaces de instrumentação científica.

### Princípios centrais

1. O produto é o protagonista visual e deve aparecer em escala arquitetônica, com luz controlada e fundos de baixa interferência.
2. Informação técnica deve ser apresentada como evidência visual: números grandes, rótulos pequenos e conteúdo progressivo.
3. A página deve alternar tensão e respiro por meio de blocos escuros densos e áreas claras editoriais.
4. Cada interação deve transmitir precisão mecânica, sem animações decorativas ou excessivamente lentas.

### Filosofia de cor

O preto profundo e o grafite comunicam precisão, concentração e engenharia; o branco frio cria contraste clínico; o **azul espectral PreXion** identifica tecnologia, inovação e clareza diagnóstica. O azul não será um preenchimento genérico: será usado como linha de varredura, foco, sublinhado e dado ativo.

### Paradigma de layout

Estrutura editorial assimétrica em capítulos verticais. Imagens de produto extrapolam colunas e cruzam limites de seção. Textos ficam deslocados do centro, com números e rótulos ocupando margens. A navegação de produtos usa uma faixa horizontal condensada, enquanto páginas internas alternam painéis 60/40 e composições diagonais discretas.

### Elementos de assinatura

- Linhas finas de varredura e retículas inspiradas em diagnóstico por imagem.
- Grandes índices numéricos e unidades técnicas em azul espectral.
- Máscaras de luz radial e reflexos suaves que revelam o equipamento gradualmente.

### Filosofia de interação

Interações devem parecer respostas de um instrumento de precisão: imediatas, silenciosas e previsíveis. Hover revela especificações ou desloca a luz; filtros respondem sem salto; accordions abrem com movimento curto; botões comprimem levemente ao clique.

### Animação

Entradas entre 180 e 280 ms, com `cubic-bezier(0.23, 1, 0.32, 1)`. Elementos em grupo entram com stagger de 50 ms. Imagens usam pequenos deslocamentos verticais e mudança de opacidade, nunca zoom a partir de zero. Parallax leve somente em hero e macrofotografias. Todas as transições não essenciais respeitam `prefers-reduced-motion`.

### Sistema tipográfico

**Manrope** para títulos, números e navegação; **Source Sans 3** para textos longos, especificações e formulários. Títulos usam contraste entre peso 700 e segmentos em itálico 400. Rótulos editoriais aparecem em caixa alta, com tracking amplo. Corpo entre 17 e 19 px em desktop, com largura de leitura controlada.

### Essência da marca

PreXion transforma engenharia global em clareza diagnóstica para profissionais que não aceitam incerteza. Personalidade: **precisa, visionária, confiável**.

### Voz da marca

Headlines são curtas e provocativas; CTAs são objetivos; microcopy elimina jargão desnecessário sem diluir rigor técnico. Exemplos: **“See beyond the image.”** e **“Find the system built for your diagnostic ambition.”**

### Wordmark e logo

O wordmark oficial PreXion será preservado quando houver ativo adequado. Como símbolo de interface e favicon, será usado um arco de varredura abstrato formado por duas lâminas curvas em movimento, sem texto, remetendo simultaneamente a feixe de imagem, sorriso e órbita.

### Cor proprietária

**PreXion Spectral Blue — `#13A9E8`**. Deve aparecer em pontos de precisão, estados ativos e dados-chave, nunca como gradiente roxo ou preenchimento dominante.

## Aplicação por página

| Página | Papel visual |
| --- | --- |
| Home | Filme-manifesto da marca, portfólio em capítulos e prova de engenharia. |
| Products | Catálogo editorial com categorias, comparação clara e caminho para cada família. |
| Product Detail | Produto em escala, métricas, campos de visão, software e aplicações clínicas. |
| About | Linha do tempo global e manifesto “Making IT Visible”. |
| Education & Support | Ambiente mais claro e funcional, mantendo retículas e azul técnico. |
| Contact | Conversão direta, alto contraste e múltiplos canais de contato. |

## Style Decisions

- O azul espectral `#13A9E8` não será usado como superfície dominante. Ele fica reservado a números, linhas de varredura, estados ativos, sublinhados e dados diagnósticos.
- A ênfase azul em itálico será usada apenas em frases decisivas; outras seções poderão ser lideradas por números, especificações ou afirmações curtas sem repetir a mesma fórmula.
- Cada página principal deverá conter pelo menos um motivo visível de instrumentação diagnóstica, como linha de varredura, retícula, marca de calibração, índice marginal, diagrama de FOV ou anotação técnica.
