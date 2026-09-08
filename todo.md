# Migração integral do site PreXion

## Inventário

- [x] Obter todos os sitemaps públicos do domínio `prexion.com`.
- [x] Consolidar URLs canônicas e remover duplicatas técnicas.
- [x] Classificar páginas por tipo: institucional, produto, vendas, suporte, educação, evento, artigo, legal e recurso.
- [x] Registrar links externos, PDFs, vídeos, formulários e ativos relevantes de cada página.

## Extração e correspondência

- [x] Extrair título, hierarquia, texto, metadados, CTAs, contatos e mídia de cada URL.
- [x] Identificar conteúdo duplicado, desatualizado ou contraditório sem eliminá-lo silenciosamente.
- [x] Criar tabela completa de origem, destino, status e observações para cada URL.
- [x] Definir templates reutilizáveis para produtos, eventos, artigos e páginas institucionais.

> Cobertura confirmada: 67 URLs públicas, 1.540 blocos estruturados de conteúdo, 27 referências de download e 313 referências de links externos registradas para implementação.

## Implementação

- [x] Criar rotas equivalentes para todas as páginas relevantes.
- [x] Migrar todos os produtos e respectivas especificações verificadas.
- [x] Migrar educação, suporte, eventos, blog, materiais, vendas, contato e páginas legais.
- [x] Preservar downloads e links externos válidos.
- [x] Integrar busca e navegação suficientes para localizar todo o conteúdo migrado.

## Validação

- [x] Auditar a página `/support/training` atual e a página de treinamento do site antigo.
- [x] Recuperar todos os links oficiais de vídeo e identificar o assunto de cada aula.
- [x] Criar uma videoteca com player incorporado, categorias, títulos e descrições explicativas.
- [x] Validar reprodução e seleção de vídeos no desktop e no celular.
- [x] Fazer toda mudança de rota interna abrir no topo da nova página.
- [x] Tornar imagem, título, descrição e seta de cada produto parte de um único card clicável.
- [x] Ocultar o PreXion Elite do catálogo, destaques, contagens, links, índice e rotas públicas.
- [x] Validar cliques em imagens, cards e navegação no desktop e no celular.
- [x] Tornar `/product` a rota canônica obrigatória para catálogo e importação de produtos.
- [x] Atualizar todos os links, CTAs e destinos canônicos de produto para `/product` ou `/product/:slug`.
- [x] Manter `/products` apenas como compatibilidade, encaminhando o usuário para `/product`.
- [x] Conferir cobertura URL por URL entre inventário e novo site.
- [x] Verificar links internos, externos e downloads.
- [x] Validar desktop e mobile nas principais famílias de página.
- [x] Executar tipagem e build de produção.
- [x] Documentar qualquer URL excluída, redirecionada ou consolidada com justificativa.

> Auditoria final: 67 de 67 URLs estão registradas e renderizáveis, com 1.540 blocos de conteúdo, 27 referências de download e 313 referências externas. Foram espelhados 138 ativos de mídia. Seis PDFs antigos permanecem preservados por link e com conteúdo identificado, pois o servidor legado não permitiu o espelhamento binário direto; nenhum caminho de página foi removido.
