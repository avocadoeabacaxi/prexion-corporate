# Arquitetura de conteúdo — novo site PreXion

## Objetivo

Transformar o conteúdo fragmentado do site anterior em uma jornada institucional e comercial de alto padrão, alinhada ao PreXion Elite. O visitante deve compreender rapidamente quem é a PreXion, qual família de produto atende sua necessidade, quais diferenciais técnicos sustentam a marca e como solicitar uma demonstração ou suporte.

## Navegação global

| Item | Rota | Função |
| --- | --- | --- |
| Home | `/` | Manifesto, prova de engenharia, portfólio e conversão. |
| Products | `/products` | Catálogo organizado por família e modalidade. |
| About | `/about` | História, presença global, Alliage e “Making IT Visible”. |
| Education & Support | `/support` | Treinamento, suporte remoto, eventos e materiais. |
| Contact | `/contact` | Demonstração, especialista, telefone e localização. |
| Product Detail | `/products/:slug` | Página profunda e reutilizável para cada produto. |

## Home

**Hero:** “See beyond the image.” Abertura cinematográfica com equipamento em escala e mensagem curta sobre precisão diagnóstica. CTAs: “Explore imaging systems” e “Request a demo”.

**Proof strip:** 2007, origem tecnológica; engenharia global; CBCT, PAN, CEPH e intraoral; educação e suporte direto.

**Manifesto:** “Built across borders. Focused on one outcome: clarity.” Síntese da trajetória Japão, Vale do Silício, Brasil e atuação global.

**Portfolio chapters:** Elite, Excelsior e Evolve com imagens oficiais, categoria, frase de posicionamento e link para catálogo.

**Technology:** Dual Focal Spot, Ultra HD, PMC, MAR e workflow digital. Cada item será apresentado como evidência, com métrica, unidade ou benefício clínico.

**Clinical disciplines:** Endodontics, Implantology, Orthodontics, Periodontics e Maxillofacial Surgery.

**Education and support:** Treinamento, vídeos, suporte remoto e equipe técnica própria.

**Final CTA:** “Precision belongs in every decision.” Solicitação de demonstração e contato com especialista.

## Products

O catálogo será dividido em **Extraoral Imaging** e **Intraoral Workflow**. Filtros simples permitirão visualizar CBCT, PAN/CEPH, scanners, sensores e raios X. Cada produto terá imagem oficial, família, modalidade, FOV ou métrica principal, breve posicionamento e CTA “View system”.

| Família | Produtos |
| --- | --- |
| Elite | PreXion Elite 3-in-1 |
| Excelsior | Excelsior MID, Excelsior MAX, Excelsior ENDO |
| Evolve | Evolve 2D, Evolve 3D, Evolve Scan, Evolve Intraoral Sensor, Evolve X-Ray |

## Product Detail

O template terá hero de produto, dados principais, “Why this system”, campos de visão ou especificações, recursos de software, aplicações clínicas, comparação contextual e CTA. O primeiro conteúdo detalhado será o PreXion Elite; os demais produtos reutilizarão o template com informações verificadas do site anterior.

## About

Headline: “One vision. Three continents of innovation.” A narrativa será estruturada em 2007 (origem), desenvolvimento nos EUA, aquisição pela Alliage em 2025, fabricação no Brasil e presença global. O manifesto “Making IT Visible” fecha a página como princípio de design e engenharia.

## Education & Support

Ambiente mais funcional e claro. Quatro portas de entrada: Remote Support, Training Videos, Events & Education e Product Documentation. O conteúdo reforça suporte prestado por técnicos treinados pela PreXion e educação clínica contínua.

## Contact

Formulário estático com validação no cliente e confirmação visual. Como o projeto é frontend-only, o envio será apresentado como fluxo demonstrativo e o contato imediato utilizará telefone e e-mail. Dados preservados do site anterior: 855-PREXION, suporte (650) 212-0314 e endereço 2077 Gateway Place, Suite 120, San Jose, CA 95110.

## Regras de conteúdo

Todo texto será em inglês, com frases curtas e tom confiante. Especificações técnicas serão usadas somente quando verificadas. Não serão inventados prêmios, avaliações, depoimentos ou números de mercado. Depoimentos existentes não serão reproduzidos no primeiro lançamento para evitar depender de validação adicional.

## Expansão para migração integral

A auditoria integral identificou 67 URLs públicas. O novo site passará a operar com duas camadas complementares: **páginas canônicas modernas**, que reorganizam o conteúdo para navegação atual, e **páginas legadas preservadas no novo design**, que mantêm o conteúdo específico de cada URL antiga e apontam para o destino canônico correspondente.

| Grupo | Rotas canônicas | Tratamento das URLs antigas |
| --- | --- | --- |
| Marca | `/about`, `/careers`, `/careers/apply` | História, manifesto, vagas e candidatura preservados em páginas próprias ou no template legado. |
| Produtos | `/product`, `/product/:slug` | Todo o catálogo e toda importação de produto passam pela rota canônica singular `/product`; `/products` existe apenas como compatibilidade e redireciona para ela. Produtos atuais têm páginas detalhadas; produtos legados, campanhas e comparativos permanecem acessíveis em suas rotas antigas. |
| Aplicações | `/applications-by-specialty` | Endodontia, implantodontia, prótese e periodontia ganham uma página editorial dedicada. |
| Educação e suporte | `/support`, `/support/remote`, `/support/training` | Suporte remoto, vídeos e compromisso educacional preservados em rotas próprias. |
| Recursos | `/resources`, `/roi-calculator` | E-books, brochures, downloads e cálculo de retorno ficam centralizados, sem remover as landing pages de origem. |
| Comercial | `/contact`, `/product-specialists`, `/distributors` | Demonstração, representantes, distribuidores e contatos mantêm caminhos diretos. |
| Notícias e eventos | `/news`, `/events` | Eventos e publicações são consolidados em hubs, mantendo cada artigo em sua URL antiga. |
| Legal | `/privacy-policy`, `/accessibility-statement` | Conteúdo legal integral em páginas próprias. |
| Índice completo | `/site-map` | Busca e listagem de todas as URLs migradas, agrupadas por tipo e com indicação de destino canônico. |

## Modelo de página legada preservada

Cada URL sem uma página canônica específica será renderizada por um template editorial comum. Esse template exibirá o título original, classificação, origem, imagens disponíveis, blocos de conteúdo deduplicados, links, downloads e chamadas para ação. Quando houver consolidação, uma faixa indicará a página canônica correspondente sem ocultar o conteúdo histórico.

## Modelo de governança do conteúdo

O inventário bruto e o mapa de migração ficam separados da interface em arquivos estruturados. Isso permite atualização centralizada de textos, rotas, downloads e metadados sem editar componentes visuais. A implementação utiliza `legacyPages.ts` como registro completo de conteúdo e `migration_map.csv` como matriz de controle e conferência.
