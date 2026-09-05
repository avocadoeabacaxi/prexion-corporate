/**
 * Design philosophy: Precision in Motion — complete legacy content registry preserving every public PreXion URL.
 */

export type LegacyBlock = { kind: "heading" | "paragraph" | "list" | "quote"; text: string };
export type LegacyPage = {
  sourceUrl: string; route: string; canonicalTarget: string; title: string; type: string; relevance: string; summary: string;
  blocks: LegacyBlock[]; callsToAction: string; downloads: string[]; externalLinks: string[];
  links: Array<{ label: string; url: string }>; images: Array<{ alt: string; url: string }>; migrationAction: string; notes: string;
};

export const legacyPages: Record<string, LegacyPage> = {
  "/": {
    "sourceUrl": "https://www.prexion.com/",
    "route": "/",
    "canonicalTarget": "/",
    "title": "Home",
    "type": "institutional",
    "relevance": "high",
    "summary": "Dental Imaging Technology Moving You Forward Com a aquisição da PreXion pela Alliage em 2025, a marca passou a fazer parte de um dos maiores grupos globais em tecnologia de saúde odontológica. A fabricação ocorre no Brasil, unindo tecnologia brasileira e excelência industrial. A empresa foi fundada no Japão em 2007 spin-off da TeraRecon com foco em P&D de tecnologias avançadas para imagens médicas e odontológicas, desenvolvendo sistemas de Tomografia Computadorizada de Feixe Cônico CBCT . What Sets Us Apart? - Top-Quality 3D Imaging: Oferece imagens 3D claras e precisas com baixos níveis de radiação e preço acessível. - Unmatched Commitment to Education: Cursos práticos exclusivos ministrados por líderes de opi",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "LEARN_MORE - - - - - - - - - - - - - - - - - - - - - - TRUSTED TECHNOLOGY GLOBAL STRENGTH THE QUALITY THE WORLD ALREADY TRUSTS POWERED BY A STRONG GLOBAL NETWORK A High-Tech Scanner with an Ergonomic Design With a focus on lightness, precision, and fluidity, the EVOLVE Scan weighs just 119g and scans a complete arch in just 59 seconds, making it one of the fastest on the market. It features autoclavable tips with a durability of up to 250 cycles, a single, detachable USB cable, a heat-free anti-fog system, and artificial intelligence (FLOW AI), providing an intuitive and efficient digital experience. EXPLORE ALL IMAGING PRODUCTS GET A CONTACT HERE GET A CONTACT HERE GET FULL SPECIFICATIONS WITH THE PRODUCT - - - - - - - - - - - - - - - - - - - - - - EVOLVE X-RAY HAND HELD Dental X-Rays WELCOME TO THE NEW ERA OF EXTRAORAL PRECISION | SAFETY | MOBILITY GET A CONTACT HERE Update Your Technology in 2026 with the PreXion Excelsior Endo Precision The PreXion Excelsior Endo scanner is the evolution of our original flagship product designed for dentists who demand the highest diagnostic clarity and detail. EXPLORE THIS PRODUCT Your Total Dental Imaging Solutions Provider Our newly launched Evolve Intraoral Sensor is the ultimate evolution of your imaging capabilities. This precision intraoral dental digital imaging sensor offers high-definition images, providing you with the precision you need for accurate and safer diagnoses. Stay ahead in the dental field with seamless connectivity that optimizes your intraoral radiography workflow and efficiently manages patient images. EXPLORE ALL IMAGING PRODUCTS Dental Imaging Technology Moving You Forward With Alliage’s acquisition of PreXion in 2025, the brand became part of one of the largest global groups in dental health technology. Currently, PreXion’s manufacturing takes place in Brazil, combining Brazilian technology, industrial excellence, and a solid global innovation and distribution structure. This new phase further strengthens the company’s international presence, expanding its investment capacity in research, development, and advanced solutions for diagnostic imaging worldwide. Founded in Japan in 2007 as a spin-off of TeraRecon, PreXion built its trajectory focusing on research and development of advanced technologies for medical and dental imaging. Since then, the company has developed and distributed Cone Beam Computed Tomography systems for the dental market in the United States and various countries around the world. With its expertise in diagnostic imaging and guided by an entrepreneurial spirit and a continuous pursuit of excellence, PreXion maintains its commitment to technological evolution to expand global diagnostic capabilities, translating its corporate philosophy: “Making IT Visible”. Learn More About Us Dental Imaging Technology Moving You Forward With Alliage’s acquisition of PreXion in 2025, the brand became part of one of the largest global groups in dental health technology. Currently, PreXion’s manufacturing takes place in Brazil, combining Brazilian technology, industrial excellence, and a solid global innovation and distribution structure. This new phase further strengthens the company’s international presence, expanding its investment capacity in research, development, and advanced solutions for diagnostic imaging worldwide. Founded in Japan in 2007 as a spin-off of TeraRecon, PreXion built its trajectory focusing on research and development of advanced technologies for medical and dental imaging. Since then, the company has developed and distributed Cone Beam Computed Tomography systems for the dental market in the United States and various countries around the world. With its expertise in diagnostic imaging and guided by an entrepreneurial spirit and a continuous pursuit of excellence, PreXion maintains its commitment to technological evolution to expand global diagnostic capabilities, translating its corporate philosophy: “Making IT Visible”. Learn More About Us What Sets Us Apart? Top-Quality 3D Imaging Diagnostically, 3D imaging is a must-have in the clinical settings of today’s world. PreXion offers the clearest, most precise image in the industry at an incredible price point. The clarity of the image is unparalleled by competing solutions and the precision is unrivaled. Only PreXion offers high imaging with low radiation levels. Unmatched Commitment to Education PreXion has cultivated a tight-knit circle of key opinion leaders made up of specialty physicians that precisely understand the PreXion technology and resulting clinical outcomes ﬁrsthand. These doctors offer PreXion customers exclusive hands-on courses nationwide. Educational videos are also available online, making it easy for PreXion customers and their teams to continuously access the information they need. Excellent Service PreXion is deeply committed to listening to the customer’s voice. The PreXion mission is to always be passionate about answering support calls and delivering excellent customer care. It is PreXion’s vision to build trust across the industry by providing each customer the ideal treatment, precisely tending to each and every inquiry. VIEW ALL EDUCATION & SUPPORT What Sets Us Apart? Top-Quality 3D Imaging Diagnostically, 3D imaging is a must-have in the clinical settings of today’s world. PreXion offers the clearest, most precise image in the industry at an incredible price point. The clarity of the image is unparalleled by competing solutions and the precision is unrivaled. Only PreXion offers high imaging with low radiation levels. Unmatched Commitment to Education PreXion has cultivated a tight-knit circle of key opinion leaders made up of specialty physicians that precisely understand the PreXion technology and resulting clinical outcomes ﬁrsthand. These doctors offer PreXion customers exclusive hands-on courses nationwide. Educational videos are also available online, making it easy for PreXion customers and their teams to continuously access the information they need. Excellent Service PreXion is deeply committed to listening to the customer’s voice. The PreXion mission is to always be passionate about answering support calls and delivering excellent customer care. It is PreXion’s vision to build trust across the industry by providing each customer the ideal treatment, precisely tending to each and every inquiry. VIEW ALL EDUCATION & SUPPORT DOWNLOAD OUR LATEST DATA-DRIVEN EBOOK: The Complete Data-Driven Guide to How Your Peers Earn ROI from 3D CBCT Scan Imaging Technology DOWNLOAD NOW Our Partners What is the Industry Saying? What is the Industry Saying? “After looking at the different CBCT units available in the marketplace, we chose PreXion based on the PreXion specifications, low radiation, and state of the art imaging. We are excited to be able to better diagnose periodontal disease and treatment plan for implants. In addition, we were very pleased by the training provided by PreXion which has been vital to help us learn how to use our CBCT to the fullest.” – DR. RICHARD NEWHART, PERIODONTIST Experience True Clarity & Precision Schedule a demo today. REQUEST A DEMO"
      },
      {
        "kind": "heading",
        "text": "Dental Imaging Technology Moving You Forward"
      },
      {
        "kind": "paragraph",
        "text": "With Alliage’s acquisition of PreXion in 2025, the brand became part of one of the largest global groups in dental health technology. Currently, PreXion’s manufacturing takes place in Brazil, combining Brazilian technology, industrial excellence, and a solid global innovation and distribution structure. This new phase further strengthens the company’s international presence, expanding its investment capacity in research, development, and advanced solutions for diagnostic imaging worldwide."
      },
      {
        "kind": "paragraph",
        "text": "Founded in Japan in 2007 as a spin-off of TeraRecon, PreXion built its trajectory focusing on research and development of advanced technologies for medical and dental imaging. Since then, the company has developed and distributed Cone Beam Computed Tomography systems for the dental market in the United States and various countries around the world. With its expertise in diagnostic imaging and guided by an entrepreneurial spirit and a continuous pursuit of excellence, PreXion maintains its commitment to technological evolution to expand global diagnostic capabilities, translating its corporate philosophy: “Making IT Visible”."
      },
      {
        "kind": "heading",
        "text": "What Sets Us Apart?"
      },
      {
        "kind": "paragraph",
        "text": "Diagnostically, 3D imaging is a must-have in the clinical settings of today’s world. PreXion offers the clearest, most precise image in the industry at an incredible price point. The clarity of the image is unparalleled by competing solutions and the precision is unrivaled. Only PreXion offers high imaging with low radiation levels."
      },
      {
        "kind": "paragraph",
        "text": "PreXion has cultivated a tight-knit circle of key opinion leaders made up of specialty physicians that precisely understand the PreXion technology and resulting clinical outcomes ﬁrsthand. These doctors offer PreXion customers exclusive hands-on courses nationwide. Educational videos are also available online, making it easy for PreXion customers and their teams to continuously access the information they need."
      },
      {
        "kind": "paragraph",
        "text": "PreXion is deeply committed to listening to the customer’s voice. The PreXion mission is to always be passionate about answering support calls and delivering excellent customer care. It is PreXion’s vision to build trust across the industry by providing each customer the ideal treatment, precisely tending to each and every inquiry."
      },
      {
        "kind": "heading",
        "text": "The Complete Data-Driven Guide to How Your Peers Earn ROI from 3D CBCT Scan Imaging Technology"
      },
      {
        "kind": "heading",
        "text": "Our Partners"
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“After looking at the different CBCT units available in the marketplace, we chose PreXion based on the PreXion specifications, low radiation, and state of the art imaging. We are excited to be able to better diagnose periodontal disease and treatment plan for implants. In addition, we were very pleased by the training provided by PreXion which has been vital to help us learn how to use our CBCT to the fullest.”"
      },
      {
        "kind": "heading",
        "text": "Experience True Clarity & Precision"
      },
      {
        "kind": "heading",
        "text": "Schedule a demo today."
      }
    ],
    "callsToAction": "- [Learn More About Us](https://www.prexion.com/why-prexion/) - [VIEW ALL EDUCATION & SUPPORT](https://www.prexion.com/education-and-support/) - [DOWNLOAD NOW](https://www.prexion.com/download-how-your-peers-earn-roi-from-3d-cbct-scan-imaging-technology/) - [REQUEST A DEMO](https://www.prexion.com/request-a-demo/) - Contact Us: 855-PREXION - Client Support: (650) 212-0314 - Address: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [
      "https://alliage-global.com/wp-content/uploads/2025/09/PRESS-RELEASE-ENGLISH.pdf"
    ],
    "externalLinks": [
      "https://aidagroup.org/education/",
      "https://cbctreaders.com/",
      "https://dentalemr.com/",
      "https://join.sleepgroupsolutions.com/",
      "https://midwestimplantinstitute.com/",
      "https://www.3ddx.com/",
      "https://www.ada.org/",
      "https://www.catapulteducation.com/",
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.radiodontics.com/",
      "https://www.smilesource.com/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "LEARN_MORE",
        "url": "https://alliage-global.com/wp-content/uploads/2025/09/PRESS-RELEASE-ENGLISH.pdf"
      },
      {
        "label": "EXPLORE ALL IMAGING PRODUCTS",
        "url": "https://www.prexion.com/evolve-scan-intraoral-scanner/"
      },
      {
        "label": "GET A CONTACT HERE",
        "url": "http://go.www.prexionbr.com.br/prexion_care_us"
      },
      {
        "label": "GET A CONTACT HERE",
        "url": "https://go.www.prexionbr.com.br/prexion_care_us"
      },
      {
        "label": "GET FULL SPECIFICATIONS WITH THE PRODUCT",
        "url": "https://www.prexion.com/evolve-x-ray-hand-held-dental-x-rays/"
      },
      {
        "label": "GET A CONTACT HERE",
        "url": "https://go.www.prexionbr.com.br/prexion_care_us"
      },
      {
        "label": "EXPLORE THIS PRODUCT",
        "url": "https://www.prexion.com/prexion-excelsior-endo/"
      },
      {
        "label": "EXPLORE ALL IMAGING PRODUCTS",
        "url": "https://www.prexion.com/prexion-3d-intraoral-sensor/"
      },
      {
        "label": "Learn More About Us",
        "url": "https://www.prexion.com/why-prexion/"
      },
      {
        "label": "Learn More About Us",
        "url": "https://www.prexion.com/why-prexion/"
      },
      {
        "label": "VIEW ALL EDUCATION & SUPPORT",
        "url": "https://www.prexion.com/education-and-support/"
      },
      {
        "label": "VIEW ALL EDUCATION & SUPPORT",
        "url": "https://www.prexion.com/education-and-support/"
      },
      {
        "label": "3D CBCT",
        "url": "https://www.prexion.com/prexion-excelsior-max-lfov/"
      },
      {
        "label": "DOWNLOAD NOW",
        "url": "https://www.prexion.com/download-how-your-peers-earn-roi-from-3d-cbct-scan-imaging-technology/"
      },
      {
        "label": "https://dentalemr.com/",
        "url": "https://dentalemr.com/"
      },
      {
        "label": "https://www.ada.org/",
        "url": "https://www.ada.org/"
      },
      {
        "label": "https://aidagroup.org/education/",
        "url": "https://aidagroup.org/education/"
      },
      {
        "label": "https://midwestimplantinstitute.com/",
        "url": "https://midwestimplantinstitute.com/"
      },
      {
        "label": "https://www.catapulteducation.com/",
        "url": "https://www.catapulteducation.com/"
      },
      {
        "label": "https://www.smilesource.com/",
        "url": "https://www.smilesource.com/"
      },
      {
        "label": "https://join.sleepgroupsolutions.com/",
        "url": "https://join.sleepgroupsolutions.com/"
      },
      {
        "label": "https://www.3ddx.com/",
        "url": "https://www.3ddx.com/"
      },
      {
        "label": "https://www.radiodontics.com/",
        "url": "https://www.radiodontics.com/"
      },
      {
        "label": "https://cbctreaders.com/",
        "url": "https://cbctreaders.com/"
      },
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      }
    ],
    "images": [
      {
        "alt": "PreXion CBCT Timeline",
        "url": "/manus-storage/1ebc9b97e93b-banner_linha_do_tempo_133d1735.jpg"
      },
      {
        "alt": "PreXion CBCT Timeline",
        "url": "/manus-storage/1ebc9b97e93b-banner_linha_do_tempo_133d1735.jpg"
      },
      {
        "alt": "PreXion dental 3d imaging technology",
        "url": "/manus-storage/ffbc42a5be65-Top-Quality-Imaging_14f01d0a.png"
      },
      {
        "alt": "PreXion cbct education",
        "url": "/manus-storage/292679a61c1c-Commitment-To-Education_fd153722.png"
      },
      {
        "alt": "PreXion CBCT support team",
        "url": "/manus-storage/161aed3dfa72-PRE-Support_ce1e3978.jpg"
      },
      {
        "alt": "PreXion dental 3d imaging technology",
        "url": "/manus-storage/ffbc42a5be65-Top-Quality-Imaging_14f01d0a.png"
      },
      {
        "alt": "PreXion cbct education",
        "url": "/manus-storage/292679a61c1c-Commitment-To-Education_fd153722.png"
      },
      {
        "alt": "PreXion CBCT support team",
        "url": "/manus-storage/161aed3dfa72-PRE-Support_ce1e3978.jpg"
      },
      {
        "alt": "Home",
        "url": "/manus-storage/0c013d67418d-PRE-Q4-eBook_e57dad13.jpg"
      },
      {
        "alt": "Home",
        "url": "/manus-storage/9cf29c46a5da-dental-emr_800dd17e.png"
      },
      {
        "alt": "midwest implant institute",
        "url": "/manus-storage/8869e4954713-Midwest-Implant-Institute_4467be72.png"
      },
      {
        "alt": "catapult education",
        "url": "/manus-storage/06e7db90e11b-Catapult-Education_ef27e33c.png"
      }
    ],
    "migrationAction": "create",
    "notes": "A página apresenta conteúdo duplicado no HTML extraído (blocos \"Dental Imaging Technology Moving You Forward\" e \"What Sets Us Apart?\"). Trata-se da homepage institucional principal da PreXion, contendo informações sobre a história da empresa, aquisição pela Alliage, diferenciais, depoimentos e links para produtos e suporte. Não há arquivos para download direto, apenas um link para uma landing page de e-book."
  },
  "/aae-annual-meteting-2026-salt-lake-city-ut": {
    "sourceUrl": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/",
    "route": "/aae-annual-meteting-2026-salt-lake-city-ut",
    "canonicalTarget": "/aae-annual-meteting-2026-salt-lake-city-ut",
    "title": "AAE Annual Meteting 2026 – Salt Lake City – UT",
    "type": "article",
    "relevance": "low",
    "summary": "AAE Annual Meteting 2026 – Salt Lake City – UT Artigo publicado em 23 de abril de 2026 relatando a participação da PreXion no AAE Annual Meeting 2026 16 e 17 de abril, Salt Lake City . O evento reuniu profissionais de endodontia. A PreXion foi representada pelo distribuidor Luman Dental, destacando os produtos PreXion Excelsior Endo Scanner e PreXion Evolve 3D SFOV . Stay on the Cutting Edge of Dentistry Chamada para assinatura de newsletter ou atualizações Subscribe today . Footer Informações de contato, telefones, endereço San Jose, CA e links de navegação para produtos e políticas.",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "The American Association of Endodontists annually hosts one of the most important global meetings in specialized dentistry: the AAE Annual Meeting 2026. Held on April 16th and 17th, 2026, in Salt Lake City, the event brought together thousands of endodontists, researchers, and companies in the sector to discuss technical, scientific, and technological advancements focused on endodontic diagnosis and treatment. Throughout the program, participants had access to lectures by international experts, clinical sessions, practical training, and a large trade show where innovations and trends in the field were presented. More than just a congress, the meeting functions as a strategic hub for professional development, networking, and the launch of solutions that directly influence the direction of endodontics globally. PreXion was present through our distributor Luman Dental, which presented the PreXion Excelsior Endo Scanner and the PreXion Evolve 3D (SFOV), two products from our portfolio that highlight PreXion as an innovative and high-quality technology in the imaging and diagnostics market."
      },
      {
        "kind": "paragraph",
        "text": "The American Association of Endodontists annually hosts one of the most important global meetings in specialized dentistry: the AAE Annual Meeting 2026. Held on April 16th and 17th, 2026, in Salt Lake City, the event brought together thousands of endodontists, researchers, and companies in the sector to discuss technical, scientific, and technological advancements focused on endodontic diagnosis and treatment."
      },
      {
        "kind": "paragraph",
        "text": "Throughout the program, participants had access to lectures by international experts, clinical sessions, practical training, and a large trade show where innovations and trends in the field were presented. More than just a congress, the meeting functions as a strategic hub for professional development, networking, and the launch of solutions that directly influence the direction of endodontics globally."
      },
      {
        "kind": "paragraph",
        "text": "PreXion was present through our distributor Luman Dental, which presented the PreXion Excelsior Endo Scanner and the PreXion Evolve 3D (SFOV), two products from our portfolio that highlight PreXion as an innovative and high-quality technology in the imaging and diagnostics market."
      }
    ],
    "callsToAction": "- Subscribe today - Contact Us: tel:855PREXION - Client Support: tel:6502120314 - Share This Story (Facebook, LinkedIn, Email)",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.prexion.com%2Faae-annual-meteting-2026-salt-lake-city-ut%2F",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.prexion.com%2Faae-annual-meteting-2026-salt-lake-city-ut%2F",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [],
    "images": [
      {
        "alt": "AAE Annual Meteting 2026 – Salt Lake City – UT",
        "url": "/manus-storage/4986b93ba21b-FOTO_AEE_ABRIL_26-2-225x300_dd81b35e.jpg"
      },
      {
        "alt": "AAE Annual Meteting 2026 – Salt Lake City – UT",
        "url": "/manus-storage/ef91f960c398-FOTO_AEE_ABRIL_26-1-225x300_6216c4c6.jpg"
      }
    ],
    "migrationAction": "redirect",
    "notes": "Artigo de notícia sobre evento pontual com erro de digitação no título da URL e da página (\"Meteting\"). Possui baixo valor perene. O ideal é redirecionar para uma página agregadora de notícias ou eventos. Elementos de rodapé aparentemente duplicados na extração."
  },
  "/accessibility-statement": {
    "sourceUrl": "https://www.prexion.com/accessibility-statement/",
    "route": "/accessibility-statement",
    "canonicalTarget": "/accessibility-statement",
    "title": "Accessibility Statement",
    "type": "legal",
    "relevance": "medium",
    "summary": "Accessibility Statement PreXion Inc. seeks to improve the accessibility of our website content. Below are recommendations to help improve your experience on our website. Helpful links: - Comprehensive Web Accessibility Initiative WAI tips - Social Security Administration tips - Speech recognition software Should you be deaf or hard of hearing, there are additional accessibility features available to you: - Closed captioning in YouTube - Volume controls: Your computer, tablet and mobile device all have volume control features, and the service you use to watch or listen to videos or audio clips also have volume controls. It is recommended to adjust both volume controls to optimize your experience. If the recommen",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "PREXION Accessibility Statement PreXion Inc. ( https://www.prexion.com ) seeks to improve the accessibility of our website content. Below are recommendations to help improve your experience on our website. Helpful links: Comprehensive Web Accessibility Initiative (WAI) tips: https://www.w3.org/WAI/resources/ Social Security Administration tips: https://www.ssa.gov/accessibility/ Speech recognition software: http://www.nuance.com/dragon/index.htm Should you be deaf or hard of hearing, there are additional accessibility features available to you: Closed captioning in YouTube: https://support.google.com/youtube/answer/100078?hl=en Volume controls: Your computer, tablet and mobile device all have volume control features, and the service you use to watch or listen to videos or audio clips also have volume controls. It is recommended to adjust both volume controls to optimize your experience. If the recommendations above do not meet your needs, please contact us at (651) 212-0300 for assistance in accessing PreXion’s website content."
      },
      {
        "kind": "heading",
        "text": "Accessibility Statement"
      },
      {
        "kind": "paragraph",
        "text": "PreXion Inc. ( https://www.prexion.com ) seeks to improve the accessibility of our website content. Below are recommendations to help improve your experience on our website."
      },
      {
        "kind": "paragraph",
        "text": "Comprehensive Web Accessibility Initiative (WAI) tips: https://www.w3.org/WAI/resources/"
      },
      {
        "kind": "paragraph",
        "text": "Social Security Administration tips: https://www.ssa.gov/accessibility/"
      },
      {
        "kind": "paragraph",
        "text": "Speech recognition software: http://www.nuance.com/dragon/index.htm"
      },
      {
        "kind": "paragraph",
        "text": "Should you be deaf or hard of hearing, there are additional accessibility features available to you:"
      },
      {
        "kind": "paragraph",
        "text": "Closed captioning in YouTube: https://support.google.com/youtube/answer/100078?hl=en"
      },
      {
        "kind": "paragraph",
        "text": "Volume controls: Your computer, tablet and mobile device all have volume control features, and the service you use to watch or listen to videos or audio clips also have volume controls. It is recommended to adjust both volume controls to optimize your experience."
      },
      {
        "kind": "paragraph",
        "text": "If the recommendations above do not meet your needs, please contact us at (651) 212-0300 for assistance in accessing PreXion’s website content."
      }
    ],
    "callsToAction": "- Call us at [(651) 212-0300](tel:6512120300) for assistance - Contact Us: [855-PREXION](tel:855PREXION) - Client Support: [(650) 212-0314](tel:6502120314) - Address: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "http://www.nuance.com/dragon/index.htm",
      "https://support.google.com/youtube/answer/100078?hl=en",
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.ssa.gov/accessibility/",
      "https://www.w3.org/WAI/resources/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "https://www.prexion.com",
        "url": "https://www.prexion.com"
      },
      {
        "label": "https://www.ssa.gov/accessibility/",
        "url": "https://www.ssa.gov/accessibility/"
      },
      {
        "label": "https://support.google.com/youtube/answer/100078?hl=en",
        "url": "https://support.google.com/youtube/answer/100078?hl=en"
      },
      {
        "label": "(651) 212-0300",
        "url": "tel:6512120300"
      }
    ],
    "images": [],
    "migrationAction": "create",
    "notes": "Página legal padrão de declaração de acessibilidade. Conteúdo duplicado no rodapé (links de exploração e contato repetidos). Não possui imagens no conteúdo principal, apenas texto e links externos úteis para acessibilidade. Pode ser migrada criando uma página própria."
  },
  "/aeedc-dubai-event": {
    "sourceUrl": "https://www.prexion.com/aeedc-dubai-event/",
    "route": "/aeedc-dubai-event",
    "canonicalTarget": "/aeedc-dubai-event",
    "title": "AEEDC Dubai 2026",
    "type": "event",
    "relevance": "medium",
    "summary": "AEEDC Dubai 2026 The article announces PreXion's participation in the AEEDC Dubai 2026 event held from January 19th to 21st. The event was an opportunity to present innovations and the complete portfolio of solutions in diagnostic imaging and dental equipment, including the launch of the Prexion brand for these markets. Share This Story, Choose Your Platform! Links to share the story on Facebook, LinkedIn, and Email. Stay on the Cutting Edge of Dentistry. Subscribe today. Call to action to subscribe for updates. Contact Information and Footer Contains contact numbers 855-PREXION, 650 212-0314 , address 2077 Gateway Place, Suite 120, San Jose, CA 95110 , social media links, and internal navigation links Evolve 3",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "In January, we participated in an important international event in the healthcare sector, reinforcing our global presence and our commitment to expansion in strategic markets. This meeting was held at the AEEDC DUBAI 2026 from January 19th to 21st, and provided significant opportunities for networking with partners and distributors."
      },
      {
        "kind": "paragraph",
        "text": "During the trade show, we presented our latest innovations and complete portfolio of solutions in diagnostic imaging and dental equipment, including the launch of the Prexion brand for these markets."
      }
    ],
    "callsToAction": "- Subscribe today - Contact Us: [855-PREXION](tel:855PREXION) - Client Support: [(650) 212-0314](tel:6502120314) - Address: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.prexion.com%2Faeedc-dubai-event%2F&t=AEEDC%20Dubai%202026",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.prexion.com%2Faeedc-dubai-event%2F&title=AEEDC%20Dubai%202026&summary=In%20January%2C%20we%20participated%20in%20an%20important%20international%20event%20in%20the%20healthcare%20sector%2C%20reinforcing%20our%20global%20presence%20and%20our%20commitment%20to%20expansion%20in%20strategic%20markets.%20This%20meeting%20was%20held%20at%20the%20AEEDC%20DUBAI%202026%20from%20January%2019th%20to%2021st%2C%20and%20provided%20significant%20opportunities%20for%20networking%20with%20partners%20and%20distributors.During%20the%20trade%20show%2C%20we%20presented%20our",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [],
    "images": [],
    "migrationAction": "consolidate",
    "notes": "Página de evento noticiando a participação da PreXion na AEEDC Dubai 2026. O conteúdo é curto e tem caráter de notícia/press release. O rodapé está duplicado no conteúdo extraído. Recomendada a consolidação na seção de notícias ou blog."
  },
  "/all-reps-subscribe": {
    "sourceUrl": "https://www.prexion.com/all-reps-subscribe/",
    "route": "/all-reps-subscribe",
    "canonicalTarget": "/all-reps-subscribe",
    "title": "All Reps Subscribe Page (LP)",
    "type": "landing-page",
    "relevance": "medium",
    "summary": "Stay on the Cutting Edge of Dentistry. Subscribe today to gain access to our full library of data-driven eBooks and insights. What Sets Us Apart? Top-Quality 3D Imaging Diagnostically, 3D imaging is a must-have in the clinical settings of today’s world. PreXion offers the clearest, most precise image in the industry at an incredible price point. The clarity of the image is unparalleled by competing solutions and the precision is unrivaled. Only PreXion offers high imaging with low radiation levels. Unmatched Commitment to Education PreXion has cultivated a tight-knit circle of key opinion leaders made up of specialty physicians that precisely understand the PreXion technology and resulting clinical outcomes ﬁrs",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Stay on the Cutting Edge of Dentistry. Subscribe today to gain access to our full library of data-driven eBooks and insights. What Sets Us Apart? Top-Quality 3D Imaging Diagnostically, 3D imaging is a must-have in the clinical settings of today’s world. PreXion offers the clearest, most precise image in the industry at an incredible price point. The clarity of the image is unparalleled by competing solutions and the precision is unrivaled. Only PreXion offers high imaging with low radiation levels. Unmatched Commitment to Education PreXion has cultivated a tight-knit circle of key opinion leaders made up of specialty physicians that precisely understand the PreXion technology and resulting clinical outcomes ﬁrsthand. These doctors offer PreXion customers exclusive hands-on courses nationwide. Educational videos are also available online, making it easy for PreXion customers and their teams to continuously access the information they need. Excellent Service PreXion is deeply committed to listening to the customer’s voice. The PreXion mission is to always be passionate about answering support calls and delivering excellent customer care. It is PreXion’s vision to build trust across the industry by providing each customer the ideal treatment, precisely tending to each and every inquiry. VIEW ALL EDUCATION & SUPPORT Discover what CBCT can make possible for your practice. For many clinicians and practice owners, an investment in CBCT technology from PreXion can become profitable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to finance a product. CALCULATE YOUR SAVINGS What is the Industry Saying? What is the Industry Saying? “With the PreXion CBCT, I now have the ability to comprehensively diagnose, plan, and treat every patient with confidence and accuracy. This technology directly impacts everything from sinus lifts, implant placement, bone grafting, surgical extractions, and more. This is absolutely the most valuable diagnostic tool in my practice.” – DR. ROBERT WALINCHUS Experience True Clarity & Precision Schedule a demo today. REQUEST A DEMO"
      },
      {
        "kind": "heading",
        "text": "Stay on the Cutting Edge of Dentistry."
      },
      {
        "kind": "heading",
        "text": "Subscribe today to gain access to our full library of data-driven eBooks and insights."
      },
      {
        "kind": "heading",
        "text": "What Sets Us Apart?"
      },
      {
        "kind": "paragraph",
        "text": "Diagnostically, 3D imaging is a must-have in the clinical settings of today’s world. PreXion offers the clearest, most precise image in the industry at an incredible price point. The clarity of the image is unparalleled by competing solutions and the precision is unrivaled. Only PreXion offers high imaging with low radiation levels."
      },
      {
        "kind": "paragraph",
        "text": "PreXion has cultivated a tight-knit circle of key opinion leaders made up of specialty physicians that precisely understand the PreXion technology and resulting clinical outcomes ﬁrsthand. These doctors offer PreXion customers exclusive hands-on courses nationwide. Educational videos are also available online, making it easy for PreXion customers and their teams to continuously access the information they need."
      },
      {
        "kind": "paragraph",
        "text": "PreXion is deeply committed to listening to the customer’s voice. The PreXion mission is to always be passionate about answering support calls and delivering excellent customer care. It is PreXion’s vision to build trust across the industry by providing each customer the ideal treatment, precisely tending to each and every inquiry."
      },
      {
        "kind": "heading",
        "text": "Discover what CBCT can make possible for your practice."
      },
      {
        "kind": "paragraph",
        "text": "For many clinicians and practice owners, an investment in CBCT technology from PreXion can become profitable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to finance a product."
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“With the PreXion CBCT, I now have the ability to comprehensively diagnose, plan, and treat every patient with confidence and accuracy. This technology directly impacts everything from sinus lifts, implant placement, bone grafting, surgical extractions, and more. This is absolutely the most valuable diagnostic tool in my practice.”"
      },
      {
        "kind": "heading",
        "text": "Experience True Clarity & Precision"
      },
      {
        "kind": "heading",
        "text": "Schedule a demo today."
      }
    ],
    "callsToAction": "- Subscribe today to gain access to our full library of data-driven eBooks and insights. - [VIEW ALL EDUCATION & SUPPORT](https://www.prexion.com/education-and-support/) - [CALCULATE YOUR SAVINGS](https://www.prexion.com/roi-calculator/) - [REQUEST A DEMO](https://www.prexion.com/request-a-demo/) - Contact Us: [855-PREXION](tel:855PREXION) - Client Support: [(650) 212-0314](tel:6502120314) - Address: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "VIEW ALL EDUCATION & SUPPORT",
        "url": "https://www.prexion.com/education-and-support/"
      },
      {
        "label": "CALCULATE YOUR SAVINGS",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      }
    ],
    "images": [
      {
        "alt": "prexion dental imaging technologies",
        "url": "/manus-storage/3f6dc3e528c1-PRE-eBook-Q1-2023_6fb7bb66.jpg"
      },
      {
        "alt": "All Reps Subscribe Page (LP)",
        "url": "/manus-storage/1a4815528572-PRE-eBook-Q3-2023_6bcb7da1.jpg"
      },
      {
        "alt": "All Reps Subscribe Page (LP)",
        "url": "/manus-storage/ffbc42a5be65-Top-Quality-Imaging_14f01d0a.png"
      },
      {
        "alt": "All Reps Subscribe Page (LP)",
        "url": "/manus-storage/292679a61c1c-Commitment-To-Education_fd153722.png"
      },
      {
        "alt": "All Reps Subscribe Page (LP)",
        "url": "/manus-storage/161aed3dfa72-PRE-Support_ce1e3978.jpg"
      }
    ],
    "migrationAction": "consolidate",
    "notes": "Página de landing para assinatura de representantes com conteúdo repetitivo no rodapé e sem formulário visível no texto extraído. Pode ser consolidada em uma página genérica de assinatura ou recursos no novo site. O formulário provavelmente depende de script de terceiros não capturado na extração."
  },
  "/applications-by-specialty": {
    "sourceUrl": "https://www.prexion.com/applications-by-specialty/",
    "route": "/applications-by-specialty",
    "canonicalTarget": "/product",
    "title": "Applications By Specialty",
    "type": "product",
    "relevance": "high",
    "summary": "APPLICATIONS BY SPECIALTY PreXion’s Versatility of Applications Destaca a versatilidade das aplicações dos modelos CBCT da PreXion, que oferecem qualidade de imagem superior para diversas especialidades odontológicas. Endodontics A tecnologia captura imagens fatiadas que formam representações 3D claras da anatomia do paciente, superiores aos métodos 2D. Ajuda a reduzir taxas de retratamento e auxilia no diagnóstico de fraturas radiculares verticais, pontas de raízes retidas, radiolucência apical, patologia periapical, trauma dentoalveolar e reabsorção. Implant Dentistry Simplifica a reorientação nos três planos de referência, permitindo alinhamento adequado de implantes. Benefícios incluem medições na proporção",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "APPLICATIONS BY SPECIALTY PreXion’s Versatility of Applications Among the many benefits of PreXion CBCT is the versatility of models’ applications. As part of our mission to Make IT Visible, we take great pride in producing technology that elevates dentistry developing superior image quality to serve many specialties. Below are just a few of the fields currently being empowered by PreXion 3D imaging. REQUEST A DEMO Endodontics One of the greatest benefits of PreXion technology is the abundance of information provided by our scans. The cone beam captures a substantial number of sliced images, compiling them into more thorough 3D images. These provide a much clearer representation of the patient’s anatomy compared to conventional 2D X-ray methods. This can help reduce or eliminate endodontic retreatment rates by having more complete information. This more thorough picture can also assist in determining the exact locations of potential second mesial-buccal canals prior to surgeries, allowing at least a moderate simplification of a complex process. Our powerful imaging technology also helps simplify clinical diagnoses across the board, including: Vertical root fracture Retained root tips Apical radiolucency Periapical pathology Dentoalveolar trauma Resorption (internal & external) REQUEST A DEMO Implant Dentistry The 3D imaging capabilities have many benefits, including simplified reorientation. Due to the isotropic nature of the volumetric data set, the accompanying software allows users to reorient in all three reference planes, meaning that the implant can be properly aligned into the patient’s bone using the optimal size for integration. CBCT imaging and software also improve reformatting and display ability. According to a clinical article published by Implant Dentistry U.S., “A CBCT image can be reformatted to panoramic, cephalometric, or bilateral multiplanar projections of the temporomandibular joint. These images, in turn, can be annotated, assessed, and measured for diagnostic and treatment planning purposes.” Below is a list of additional benefits and applications, allowing clinicians to: Make measurements with an exact 1:1 ratio absent of superimposed structures or magnification Assess detailed bone quality and quantity and quickly determine if grafting is required Eliminate contingency treatment plans and surprises during implant surgery due to the ability to view hard and soft tissue structures, including the inferior alveolar nerve Lessen surgical trauma or exploratory surgery for patients as a result of more accurate pre-surgical measurements Create an optimal surgical guide fit Improve implant site selection and more easily predict prosthetic outcomes Increase production through improved case acceptance to quickly recoup costs and realize profits faster REQUEST A DEMO Prosthodontics PreXion CBCT scanners greatly improve treatment planning, allowing the specialist to visualize next steps in fully realized detail. According to a study published in the International Journal of Contemporary Medical Research (IJCMR), “CBCT provides a unique imaging option for various treatment needs of a prosthodontist. It can prove to be beneficial in various aspects of prosthodontic practice [e.g.,] from imaging of the temporomandibular joint for accurate movement simulation, to denture therapy. CBCT could play an important role in reduction of hectic routine for the clinician.” Below are a few of the more granular applications of our technology in prosthodontics, which allow clinicians to: Easily export DICOM scans to third-party CAD/CAM software for complete treatment planning Integrate with all DICOM compliant third-party implant surgical planning software based on preference Plan complex implant cases (i.e. all on “4”) more precisely with superior image clarity and resolution Streamline implant case workflow in your practice REQUEST A DEMO Periodontics PreXion technology provides unmatched imaging clarity due to its departure from traditional imaging methodology. Unlike conventional CT scans, CBCT creates a fully 3-dimensional image by capturing hundreds of image “slices” of the patient and reconstructing them into a fully movable 3D rendering. Not only does it provide a groundbreaking level of clarity, but it also requires shorter scan times with less radiation exposure and yields an image that functions much more as a patient education tool than does a traditional static, 2D image. In addition, the contrast between bone and soft tissue optimizes diagnostic capability and periodontal treatment planning. Our technology has extensive applications in periodontology, such as: Furcation involvement Soft tissue assessment Periodontal ligament space Alveolar bone defects Regenerative periodontal therapy Bone grafts What is the Industry Saying? What is the Industry Saying? “WIth PreXion’s image quality, software capability, and customer support I can’t imagine anyone not using the PREXION CBCT who has an implant practice. The peace of mind and confidence this brings to every care - from the most simple to the most complex - is priceless.” – DR. BERNEE DUNSON Experience True Clarity & Precision Schedule a demo today. REQUEST A DEMO"
      },
      {
        "kind": "heading",
        "text": "APPLICATIONS BY SPECIALTY"
      },
      {
        "kind": "heading",
        "text": "PreXion’s Versatility of Applications"
      },
      {
        "kind": "paragraph",
        "text": "Among the many benefits of PreXion CBCT is the versatility of models’ applications. As part of our mission to Make IT Visible, we take great pride in producing technology that elevates dentistry developing superior image quality to serve many specialties. Below are just a few of the fields currently being empowered by PreXion 3D imaging."
      },
      {
        "kind": "heading",
        "text": "Endodontics"
      },
      {
        "kind": "paragraph",
        "text": "One of the greatest benefits of PreXion technology is the abundance of information provided by our scans. The cone beam captures a substantial number of sliced images, compiling them into more thorough 3D images. These provide a much clearer representation of the patient’s anatomy compared to conventional 2D X-ray methods. This can help reduce or eliminate endodontic retreatment rates by having more complete information. This more thorough picture can also assist in determining the exact locations of potential second mesial-buccal canals prior to surgeries, allowing at least a moderate simplification of a complex process."
      },
      {
        "kind": "paragraph",
        "text": "Our powerful imaging technology also helps simplify clinical diagnoses across the board, including:"
      },
      {
        "kind": "list",
        "text": "Vertical root fracture"
      },
      {
        "kind": "list",
        "text": "Retained root tips"
      },
      {
        "kind": "list",
        "text": "Apical radiolucency"
      },
      {
        "kind": "list",
        "text": "Periapical pathology"
      },
      {
        "kind": "list",
        "text": "Dentoalveolar trauma"
      },
      {
        "kind": "list",
        "text": "Resorption (internal & external)"
      },
      {
        "kind": "heading",
        "text": "Implant Dentistry"
      },
      {
        "kind": "paragraph",
        "text": "The 3D imaging capabilities have many benefits, including simplified reorientation. Due to the isotropic nature of the volumetric data set, the accompanying software allows users to reorient in all three reference planes, meaning that the implant can be properly aligned into the patient’s bone using the optimal size for integration. CBCT imaging and software also improve reformatting and display ability. According to a clinical article published by Implant Dentistry U.S., “A CBCT image can be reformatted to panoramic, cephalometric, or bilateral multiplanar projections of the temporomandibular joint. These images, in turn, can be annotated, assessed, and measured for diagnostic and treatment planning purposes.”"
      },
      {
        "kind": "paragraph",
        "text": "Below is a list of additional benefits and applications, allowing clinicians to:"
      },
      {
        "kind": "list",
        "text": "Make measurements with an exact 1:1 ratio absent of superimposed structures or magnification"
      },
      {
        "kind": "list",
        "text": "Assess detailed bone quality and quantity and quickly determine if grafting is required"
      },
      {
        "kind": "list",
        "text": "Eliminate contingency treatment plans and surprises during implant surgery due to the ability to view hard and soft tissue structures, including the inferior alveolar nerve"
      },
      {
        "kind": "list",
        "text": "Lessen surgical trauma or exploratory surgery for patients as a result of more accurate pre-surgical measurements"
      },
      {
        "kind": "list",
        "text": "Create an optimal surgical guide fit"
      },
      {
        "kind": "list",
        "text": "Improve implant site selection and more easily predict prosthetic outcomes"
      },
      {
        "kind": "list",
        "text": "Increase production through improved case acceptance to quickly recoup costs and realize profits faster"
      },
      {
        "kind": "heading",
        "text": "Prosthodontics"
      },
      {
        "kind": "paragraph",
        "text": "PreXion CBCT scanners greatly improve treatment planning, allowing the specialist to visualize next steps in fully realized detail. According to a study published in the International Journal of Contemporary Medical Research (IJCMR), “CBCT provides a unique imaging option for various treatment needs of a prosthodontist. It can prove to be beneficial in various aspects of prosthodontic practice [e.g.,] from imaging of the temporomandibular joint for accurate movement simulation, to denture therapy. CBCT could play an important role in reduction of hectic routine for the clinician.”"
      },
      {
        "kind": "paragraph",
        "text": "Below are a few of the more granular applications of our technology in prosthodontics, which allow clinicians to:"
      },
      {
        "kind": "list",
        "text": "Easily export DICOM scans to third-party CAD/CAM software for complete treatment planning"
      },
      {
        "kind": "list",
        "text": "Integrate with all DICOM compliant third-party implant surgical planning software based on preference"
      },
      {
        "kind": "list",
        "text": "Plan complex implant cases (i.e. all on “4”) more precisely with superior image clarity and resolution"
      },
      {
        "kind": "list",
        "text": "Streamline implant case workflow in your practice"
      },
      {
        "kind": "heading",
        "text": "Periodontics"
      },
      {
        "kind": "paragraph",
        "text": "PreXion technology provides unmatched imaging clarity due to its departure from traditional imaging methodology. Unlike conventional CT scans, CBCT creates a fully 3-dimensional image by capturing hundreds of image “slices” of the patient and reconstructing them into a fully movable 3D rendering. Not only does it provide a groundbreaking level of clarity, but it also requires shorter scan times with less radiation exposure and yields an image that functions much more as a patient education tool than does a traditional static, 2D image. In addition, the contrast between bone and soft tissue optimizes diagnostic capability and periodontal treatment planning."
      },
      {
        "kind": "paragraph",
        "text": "Our technology has extensive applications in periodontology, such as:"
      },
      {
        "kind": "list",
        "text": "Furcation involvement"
      },
      {
        "kind": "list",
        "text": "Soft tissue assessment"
      },
      {
        "kind": "list",
        "text": "Periodontal ligament space"
      },
      {
        "kind": "list",
        "text": "Alveolar bone defects"
      },
      {
        "kind": "list",
        "text": "Regenerative periodontal therapy"
      },
      {
        "kind": "list",
        "text": "Bone grafts"
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“WIth PreXion’s image quality, software capability, and customer support I can’t imagine anyone not using the PREXION CBCT who has an implant practice. The peace of mind and confidence this brings to every care - from the most simple to the most complex - is priceless.”"
      },
      {
        "kind": "heading",
        "text": "Experience True Clarity & Precision"
      },
      {
        "kind": "heading",
        "text": "Schedule a demo today."
      }
    ],
    "callsToAction": "- REQUEST A DEMO - Schedule a demo today. - Contact Us: 855-PREXION (tel:855PREXION) - Client Support: (650) 212-0314 (tel:6502120314)",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      },
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      },
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      },
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      },
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      }
    ],
    "images": [
      {
        "alt": "before prexion",
        "url": "/manus-storage/4c8eac92aa2c-endo7_70cf9c15.jpg"
      },
      {
        "alt": "after prexion",
        "url": "/manus-storage/f34c85370eb9-endo8_5041c1df.jpg"
      },
      {
        "alt": "prexion image using cbct",
        "url": "/manus-storage/23885adedc0c-endo1_eadfa3b0.jpg"
      },
      {
        "alt": "mouth scan",
        "url": "/manus-storage/f5e55eb15684-endo2_c3dae7ac.jpg"
      },
      {
        "alt": "scan example",
        "url": "/manus-storage/c6a1a838c9f5-endo4_5783901c.jpg"
      },
      {
        "alt": "imaging technology",
        "url": "/manus-storage/c4586a0e2ee0-endo6_b3ebfb4d.jpg"
      },
      {
        "alt": "implant scan before",
        "url": "/manus-storage/b6019828dd6c-implant7_4514d97b.jpg"
      },
      {
        "alt": "implant scan",
        "url": "/manus-storage/fb270afa2696-implant8_e258229f.jpg"
      },
      {
        "alt": "implant scan example",
        "url": "/manus-storage/60bfa20c6895-implant9_b98b7734.jpg"
      },
      {
        "alt": "cbct imaging detail",
        "url": "/manus-storage/a509a1f7e914-implant13-300x300-1_42dc093b.jpg"
      },
      {
        "alt": "vivid scan images",
        "url": "/manus-storage/0395074b3002-implant3-300x300-1_5418ca44.jpg"
      },
      {
        "alt": "3d implant scan",
        "url": "/manus-storage/e3124ef69dd1-implant5_47a47e81.jpg"
      }
    ],
    "migrationAction": "create",
    "notes": "Conteúdo altamente relevante e detalhado sobre as aplicações dos equipamentos em diferentes especialidades odontológicas. O texto está bem estruturado e não apresenta sinais de obsolescência. Recomenda-se criar uma página dedicada no novo site mantendo a mesma estrutura de informações. O rodapé aparece duplicado na extração devido à estrutura do template."
  },
  "/apply-job": {
    "sourceUrl": "https://www.prexion.com/apply-job/",
    "route": "/apply-job",
    "canonicalTarget": "/careers/apply",
    "title": "Apply for this Job",
    "type": "landing-page",
    "relevance": "medium",
    "summary": "Apply for this Job Now Fill out the form below to be contacted about this job opening. Apply Job Formulário de candidatura solicitando Job Title, Name, Email, Phone, Resume Max. file size: 512 MB e CAPTCHA. What is the Industry Saying? Testimonial de DR. RICHARD NEWHART, PERIODONTIST, elogiando as unidades CBCT da PreXion por suas especificações, baixa radiação, imagem de última geração e treinamento fornecido.",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Apply for this Job Now Fill out the form below to be contacted about this job opening. Apply Job URL This field is for validation purposes and should be left unchanged. Job Tittle (Required) Please describe the job title you are interested in here. Name (Required) First Last Email (Required) Phone (Required) Resume Max. file size: 512 MB. Please attach your resume. CAPTCHA What is the Industry Saying? What is the Industry Saying? “After looking at the different CBCT units available in the marketplace, we chose PreXion based on the PreXion specifications, low radiation, and state of the art imaging. We are excited to be able to better diagnose periodontal disease and treatment plan for implants. In addition, we were very pleased by the training provided by PreXion which has been vital to help us learn how to use our CBCT to the fullest.” – DR. RICHARD NEWHART, PERIODONTIST"
      },
      {
        "kind": "heading",
        "text": "Apply for this Job Now"
      },
      {
        "kind": "heading",
        "text": "Fill out the form below to be contacted about this job opening."
      },
      {
        "kind": "heading",
        "text": "Apply Job"
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“After looking at the different CBCT units available in the marketplace, we chose PreXion based on the PreXion specifications, low radiation, and state of the art imaging. We are excited to be able to better diagnose periodontal disease and treatment plan for implants. In addition, we were very pleased by the training provided by PreXion which has been vital to help us learn how to use our CBCT to the fullest.”"
      }
    ],
    "callsToAction": "- Formulário de candidatura (Apply Job) com campos: Job Title, Name, Email, Phone, Resume, CAPTCHA - Contact Us: 855-PREXION - Client Support: (650) 212-0314",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [],
    "images": [],
    "migrationAction": "consolidate",
    "notes": "Página genérica de candidatura a vagas, contém um formulário básico. Recomenda-se consolidar em uma página central de carreiras ou usar um sistema ATS (Applicant Tracking System) dedicado. O rodapé parece estar duplicado no conteúdo extraído."
  },
  "/careers-at-prexion": {
    "sourceUrl": "https://www.prexion.com/careers-at-prexion/",
    "route": "/careers-at-prexion",
    "canonicalTarget": "/careers",
    "title": "Careers at PreXion",
    "type": "institutional",
    "relevance": "high",
    "summary": "CAREERS AT PREXION Why Work for PreXion? PreXion is experiencing market share growth in the U.S. and is looking for passionate, qualified people to join their team. Mentions a \"prexion cbct history timeline\" likely an image or graphic . Open Positions Job Description: Territory Sales Manager – USA - Position Title: Territory Sales Manager - Department: Sales - Location: United States Field-Based - Employment Type: Full-Time - Reports To: Director of Sales / VP of Sales Position Overview Responsible for driving new business, managing strategic accounts, conducting product demonstrations, and supporting clinicians. Requires travel and strong consultative selling skills in a competitive market. Key Responsibilitie",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "CAREERS AT PREXION Why Work for PreXion? PreXion’s continuing U.S. market share growth has created a number of exciting career opportunities. We are always looking for passionate, qualified people to join our team. Learn More About Us JOIN OUR TEAM Open Positions Job Description: Territory Sales Manager – (USA) Position Title: Territory Sales Manager Department: Sales Location: United States (Field-Based) Employment Type: Full-Time Reports To: Director of Sales / VP of Sales ____________________________________________________________________________________________________________________________________________________________________________________ Position Overview This role is responsible for driving new business, managing strategic accounts, conducting product demonstrations, and supporting clinicians throughout the buying and post-installation process. The position requires travel, strong consultative selling skills, and the ability to influence decision-makers in a highly competitive market. ____________________________________________________________________________________________________________________________________________________________________________________ Key Responsibilities Sales & Business Development Achieve and exceed monthly, quarterly, and annual sales targets. Develop and execute territory sales strategies to expand market share. Identify, qualify, and close new opportunities with general dentists, orthodontists, oral surgeons, endodontists, and DSOs. Maintain an active pipeline using CRM tools and deliver accurate forecasts. Execute product demonstrations, onsite evaluations, and clinical/technical presentations. Customer Engagement & Relationship Management Build and sustain long-term relationships with dental professionals, office managers, and clinical teams. Engage regularly with KOLs, industry consultants, and distributors to strengthen brand presence. Provide pre-sale and post-sale support, ensuring high customer satisfaction. Attend and support regional and national dental trade shows, conferences, and training events. Product Expertise & Training Maintain expert knowledge of Dental Imaging Products, hardware, software, imaging workflows, and clinical applications. Educate customers on best practices for Dental Imaging Products, utilization and integration into their diagnostic and treatment workflows. Collaborate with product specialists, clinical trainers, and technical teams during installation and onboarding. Market Intelligence Monitor competitor activities, market trends, and emerging technologies. Provide actionable feedback to marketing, product management, and leadership teams. Contribute to the development of sales tools, promotional materials, and market positioning strategies. ____________________________________________________________________________________________________________________________________________________________________________________ Required Qualifications Minimum 3–5 years experience in dental equipment, imaging systems, capital equipment, or medical devices. Proven success on dental digital imaging business, or related high-value dental technologies. Strong understanding of dental practice workflows and diagnostic imaging. Demonstrated ability to close complex sales cycles with multiple stakeholders. Excellent communication, negotiation, and presentation skills. Proficiency with CRM platforms and digital sales tools. Valid driver’s license and willingness to travel regionally/nationally (50–70%). ____________________________________________________________________________________________________________________________________________________________________________________ Key Competencies Existing network across DSOs, dental groups, and specialist practices. Experience conducting clinical demonstrations or training. Prior experience collaborating with distributors or dealer networks. Background in radiology, dental imaging software, or 3D imaging preferred. Consultative selling approach Technical and clinical aptitude High sense of ownership and accountability Strategic territory management Strong problem-solving and decision-making skills Customer-centric mindset and excellent follow-through APPLY NOW Explore Open Positions Apply Today VIEW OPEN POSITIONS"
      },
      {
        "kind": "heading",
        "text": "CAREERS AT PREXION"
      },
      {
        "kind": "heading",
        "text": "Why Work for PreXion?"
      },
      {
        "kind": "heading",
        "text": "PreXion’s continuing U.S. market share growth has created a number of exciting career opportunities. We are always looking for passionate, qualified people to join our team."
      },
      {
        "kind": "heading",
        "text": "JOIN OUR TEAM"
      },
      {
        "kind": "heading",
        "text": "Open Positions"
      },
      {
        "kind": "heading",
        "text": "Job Description: Territory Sales Manager – (USA)"
      },
      {
        "kind": "paragraph",
        "text": "Position Title: Territory Sales Manager Department: Sales Location: United States (Field-Based) Employment Type: Full-Time Reports To: Director of Sales / VP of Sales"
      },
      {
        "kind": "paragraph",
        "text": "____________________________________________________________________________________________________________________________________________________________________________________"
      },
      {
        "kind": "paragraph",
        "text": "Position Overview"
      },
      {
        "kind": "paragraph",
        "text": "This role is responsible for driving new business, managing strategic accounts, conducting product demonstrations, and supporting clinicians throughout the buying and post-installation process. The position requires travel, strong consultative selling skills, and the ability to influence decision-makers in a highly competitive market."
      },
      {
        "kind": "paragraph",
        "text": "Key Responsibilities"
      },
      {
        "kind": "paragraph",
        "text": "Sales & Business Development"
      },
      {
        "kind": "list",
        "text": "Achieve and exceed monthly, quarterly, and annual sales targets."
      },
      {
        "kind": "list",
        "text": "Develop and execute territory sales strategies to expand market share."
      },
      {
        "kind": "list",
        "text": "Identify, qualify, and close new opportunities with general dentists, orthodontists, oral surgeons, endodontists, and DSOs."
      },
      {
        "kind": "list",
        "text": "Maintain an active pipeline using CRM tools and deliver accurate forecasts."
      },
      {
        "kind": "list",
        "text": "Execute product demonstrations, onsite evaluations, and clinical/technical presentations."
      },
      {
        "kind": "paragraph",
        "text": "Customer Engagement & Relationship Management"
      },
      {
        "kind": "list",
        "text": "Build and sustain long-term relationships with dental professionals, office managers, and clinical teams."
      },
      {
        "kind": "list",
        "text": "Engage regularly with KOLs, industry consultants, and distributors to strengthen brand presence."
      },
      {
        "kind": "list",
        "text": "Provide pre-sale and post-sale support, ensuring high customer satisfaction."
      },
      {
        "kind": "list",
        "text": "Attend and support regional and national dental trade shows, conferences, and training events."
      },
      {
        "kind": "paragraph",
        "text": "Product Expertise & Training"
      },
      {
        "kind": "list",
        "text": "Maintain expert knowledge of Dental Imaging Products, hardware, software, imaging workflows, and clinical applications."
      },
      {
        "kind": "list",
        "text": "Educate customers on best practices for Dental Imaging Products, utilization and integration into their diagnostic and treatment workflows."
      },
      {
        "kind": "list",
        "text": "Collaborate with product specialists, clinical trainers, and technical teams during installation and onboarding."
      },
      {
        "kind": "paragraph",
        "text": "Market Intelligence"
      },
      {
        "kind": "list",
        "text": "Monitor competitor activities, market trends, and emerging technologies."
      },
      {
        "kind": "list",
        "text": "Provide actionable feedback to marketing, product management, and leadership teams."
      },
      {
        "kind": "list",
        "text": "Contribute to the development of sales tools, promotional materials, and market positioning strategies."
      },
      {
        "kind": "paragraph",
        "text": "Required Qualifications"
      },
      {
        "kind": "list",
        "text": "Minimum 3–5 years experience in dental equipment, imaging systems, capital equipment, or medical devices."
      },
      {
        "kind": "list",
        "text": "Proven success on dental digital imaging business, or related high-value dental technologies."
      },
      {
        "kind": "list",
        "text": "Strong understanding of dental practice workflows and diagnostic imaging."
      },
      {
        "kind": "list",
        "text": "Demonstrated ability to close complex sales cycles with multiple stakeholders."
      },
      {
        "kind": "list",
        "text": "Excellent communication, negotiation, and presentation skills."
      },
      {
        "kind": "list",
        "text": "Proficiency with CRM platforms and digital sales tools."
      },
      {
        "kind": "list",
        "text": "Valid driver’s license and willingness to travel regionally/nationally (50–70%)."
      },
      {
        "kind": "paragraph",
        "text": "Key Competencies"
      },
      {
        "kind": "list",
        "text": "Existing network across DSOs, dental groups, and specialist practices."
      },
      {
        "kind": "list",
        "text": "Experience conducting clinical demonstrations or training."
      },
      {
        "kind": "list",
        "text": "Prior experience collaborating with distributors or dealer networks."
      },
      {
        "kind": "list",
        "text": "Background in radiology, dental imaging software, or 3D imaging preferred."
      },
      {
        "kind": "list",
        "text": "Consultative selling approach"
      },
      {
        "kind": "list",
        "text": "Technical and clinical aptitude"
      },
      {
        "kind": "list",
        "text": "High sense of ownership and accountability"
      },
      {
        "kind": "list",
        "text": "Strategic territory management"
      },
      {
        "kind": "list",
        "text": "Strong problem-solving and decision-making skills"
      },
      {
        "kind": "list",
        "text": "Customer-centric mindset and excellent follow-through"
      },
      {
        "kind": "heading",
        "text": "Explore Open Positions"
      },
      {
        "kind": "heading",
        "text": "Apply Today"
      }
    ],
    "callsToAction": "- [Learn More About Us](https://www.prexion.com/why-prexion/) - [APPLY NOW](https://www.prexion.com/apply-job/) - [VIEW OPEN POSITIONS](https://careers.jobscore.com/careers/prexioninc) - Contact Us: [855-PREXION](tel:855PREXION) - Client Support: [(650) 212-0314](tel:6502120314) - Address: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://careers.jobscore.com/careers/prexioninc",
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "Learn More About Us",
        "url": "https://www.prexion.com/why-prexion/"
      },
      {
        "label": "APPLY NOW",
        "url": "https://www.prexion.com/apply-job/"
      },
      {
        "label": "VIEW OPEN POSITIONS",
        "url": "https://careers.jobscore.com/careers/prexioninc"
      }
    ],
    "images": [
      {
        "alt": "prexion cbct history timeline",
        "url": "/manus-storage/1ebc9b97e93b-banner_linha_do_tempo_133d1735.jpg"
      }
    ],
    "migrationAction": "create",
    "notes": "Página de carreiras com descrição de vaga detalhada (Territory Sales Manager). Há duplicação do rodapé com links e contatos no final da página. A página lista uma vaga específica, o que pode requerer atualizações frequentes se migrada estaticamente; recomenda-se integração com plataforma de vagas ou página dinâmica no novo site. O link para \"VIEW OPEN POSITIONS\" leva para um portal externo (jobscore.com)."
  },
  "/catapult": {
    "sourceUrl": "https://www.prexion.com/catapult/",
    "route": "/catapult",
    "canonicalTarget": "/catapult",
    "title": "Catapult (LP)",
    "type": "landing-page",
    "relevance": "medium",
    "summary": "Preferred 3D Imaging CBCT Partner Catapult GrowTM announces a partnership with PreXion, highlighting PreXion's top-quality 3D imaging, commitment to education, and excellent service. Includes a testimonial from Dr. Lou Graham praising PreXion's advanced research. PreXion’s Revolutionary Imaging PreXion3D Explorer Describes the PreXion3D Explorer as offering precise 3D dental imaging, large image detail, low radiation, and reliable diagnostics. Provides links to software features, finding a specialist, and a product brochure. PreXion3D Excelsior Describes the PreXion3D Excelsior CBCT Scanner as the evolution of their flagship product, designed for high diagnostic clarity. Uses include implant placement, bone qua",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Preferred 3D Imaging (CBCT) Partner Catapult GrowTM is excited to announce its latest partnership with PreXion, a CBCT imaging manufacturer delivering clarity and precision at every customer touch point, from product research and 3D imaging solutions to education and support. PreXion is best known by customers for: Top-Quality 3D Imaging Unmatched Commitment to Education Excellent Service and Continuing Customer Support “Congratulations to Prexion for their advanced continued research into bringing this next stage CBCT to the dental market.” – Dr. Lou Graham “Congratulations to Prexion for their advanced continued research into bringing this next stage CBCT to the dental market.” – Dr. Lou Graham PreXion’s Revolutionary Imaging PreXion3D Explorer The powerful system components of the PreXion3D Explorer enable an extraordinary combination of the most precise 3D dental imaging, large image detail, lowest radiation exposure, reliable diagnostics and digital planning for all indications in modern dentistry. » Software Features and Clinical Applications » Find a PreXion3D Explorer Product Specialist Near You » Download the Explorer PRO Product Brochure PreXion3D Excelsior The PreXion3D Excelsior CBCT Scanner is the evolution of our original flagship product designed for dentists who demand the highest diagnostic clarity and detail. Uses include, but are not limited to: implant placement, bone quality studies, pathology, periodontics, and endodontics. » Software Features and Clinical Applications » Find a PreXion3D Excelsior Product Specialist Near You » Download the Excelsior Product Brochure Related Courses The Flaws in Financing Utilizing Modern Technology to Maximize Patient Acceptance & Practice Productivity AUGUST 15, 2023 DR. SAM SHAMARDI FREE ENROLL NOW 3D CBCT The Clinical and Financial Basis for Incorporating This Technology into Your Practice MULTIPLE SPEAKERS FREE ENROLL NOW Dental Sleep Medicine and General Dentistry Is your Office in Compliance with the ADA’s Policy Statement of 2017? EUGENE SANTUCCI, DDS FREE ENROLL NOW What Customers are Saying “With its versatility and precision, our PreXion CBCT has revolutionized my approach to comprehensive patient care. From TMD to airway management and full mouth rehabilitation, PreXion has taken our practice to the next level.” – Dr. Jeff Horowitz “With PreXion’s image quality, software capability and customer support, I can’t imagine anyone not using the PreXion CBCT who has an implant practice. The peace of mind and confidence this brings to every case – from the simplest to the most complex – is priceless.” – Dr. Bernee Dunson “With the PreXion CBCT, I now have the ability to comprehensively diagnose, plan and treat every patient with confidence and accuracy. This technology directly impacts everything from sinus lifts, implant placement, bone grafting, surgical extractions and more. This is absolutely the most valuable diagnostic tool in my practice.” – Dr. Robert Walinchus Rebate Exclusively for Catapult Grow Members Get up to $3,000 Catapult Education credit or a $2,250 cash rebate when you buy a PreXion unit.* * Rebate for Catapult Grow members to be used as credit for future Catapult Education Courses or paid via check in the quarter following installation. Rebate will be applied before sales tax as listed: on PreXion CBCT purchases valued at less than $55,000, rebate is $1,000 credit or $750 cash; on PreXion CBCT purchases valued between $55,000 and $69,999, rebate is $2,000 credit or $1,500 cash; and, for PreXion CBCT purchases valued more than $70,000, rebate is $3,000 credit or $2,250 cash. CBCT Interpretation Report Offer Exclusively for Catapult Grow Members 3 free case interpretations by Radiodontics. Valid for 60 days from installation date. 7 cases additional case interpretation can be purchased from Radiodontics at an exclusive discounted bundle price of only $250.00 ($35.71 each). Valid for 180 days (6 months) from installation date. Rebate Exclusively for Catapult Grow Members Get up to $3,000 Catapult Education credit or a $2,250 cash rebate when you buy a PreXion unit.* * Rebate for Catapult Grow members to be used as credit for future Catapult Education Courses or paid via check in the quarter following installation. Rebate will be applied before sales tax as listed: on PreXion CBCT purchases valued at less than $55,000, rebate is $1,000 credit or $750 cash; on PreXion CBCT purchases valued between $55,000 and $69,999, rebate is $2,000 credit or $1,500 cash; and, for PreXion CBCT purchases valued more than $70,000, rebate is $3,000 credit or $2,250 cash. CBCT Interpretation Report Offer Exclusively for Catapult Grow Members 3 free case interpretations by Radiodontics. Valid for 60 days from installation date. 7 cases additional case interpretation can be purchased from Radiodontics at an exclusive discounted bundle price of only $250.00 ($35.71 each). Valid for 180 days (6 months) from installation date. Increase Clarity and Precision in Your Practice! Yes, I want to connect with a representative with PreXion so I can get access to: ✅ A demonstration of PreXion’s easy-to-use 3D Viewer Software to show ease of diagnosis and visualization of treatment options ✅ An understanding of how PreXion builds trust by tending to every inquiry and delivering excellent customer care at every touch ✅ More insights about how PreXion’s technology provides the clearest, most precise CBCT imaging in the industry at an incredible price point ACCESS OUR ROI CALCULATOR “There are few items in my practice that elicit the level of wow factor as my PreXion CBCT. It is my choice because it’s user-friendly, priced right and gives the best images in the industry. It has reenergized my staff and it’s another exciting tool in my arsenal that makes my life easier at the office. I could not practice without it!” – Dr. Sam Halabo “There are few items in my practice that elicit the level of wow factor as my PreXion CBCT. It is my choice because it’s user-friendly, priced right and gives the best images in the industry. It has reenergized my staff and it’s another exciting tool in my arsenal that makes my life easier at the office. I could not practice without it!” – Dr. Sam Halabo"
      },
      {
        "kind": "heading",
        "text": "Preferred 3D Imaging (CBCT) Partner"
      },
      {
        "kind": "paragraph",
        "text": "Catapult GrowTM is excited to announce its latest partnership with PreXion, a CBCT imaging manufacturer delivering clarity and precision at every customer touch point, from product research and 3D imaging solutions to education and support. PreXion is best known by customers for:"
      },
      {
        "kind": "list",
        "text": "Top-Quality 3D Imaging"
      },
      {
        "kind": "list",
        "text": "Unmatched Commitment to Education"
      },
      {
        "kind": "list",
        "text": "Excellent Service and Continuing Customer Support"
      },
      {
        "kind": "heading",
        "text": "“Congratulations to Prexion for their advanced continued research into bringing this next stage CBCT to the dental market.”"
      },
      {
        "kind": "heading",
        "text": "PreXion’s Revolutionary Imaging"
      },
      {
        "kind": "heading",
        "text": "PreXion3D Explorer"
      },
      {
        "kind": "paragraph",
        "text": "The powerful system components of the PreXion3D Explorer enable an extraordinary combination of the most precise 3D dental imaging, large image detail, lowest radiation exposure, reliable diagnostics and digital planning for all indications in modern dentistry."
      },
      {
        "kind": "paragraph",
        "text": "» Software Features and Clinical Applications"
      },
      {
        "kind": "paragraph",
        "text": "» Find a PreXion3D Explorer Product Specialist Near You"
      },
      {
        "kind": "paragraph",
        "text": "» Download the Explorer PRO Product Brochure"
      },
      {
        "kind": "heading",
        "text": "PreXion3D Excelsior"
      },
      {
        "kind": "paragraph",
        "text": "The PreXion3D Excelsior CBCT Scanner is the evolution of our original flagship product designed for dentists who demand the highest diagnostic clarity and detail. Uses include, but are not limited to: implant placement, bone quality studies, pathology, periodontics, and endodontics."
      },
      {
        "kind": "paragraph",
        "text": "» Find a PreXion3D Excelsior Product Specialist Near You"
      },
      {
        "kind": "paragraph",
        "text": "» Download the Excelsior Product Brochure"
      },
      {
        "kind": "heading",
        "text": "Related Courses"
      },
      {
        "kind": "heading",
        "text": "The Flaws in Financing"
      },
      {
        "kind": "paragraph",
        "text": "Utilizing Modern Technology to Maximize Patient Acceptance & Practice Productivity"
      },
      {
        "kind": "paragraph",
        "text": "AUGUST 15, 2023 DR. SAM SHAMARDI FREE"
      },
      {
        "kind": "heading",
        "text": "3D CBCT"
      },
      {
        "kind": "paragraph",
        "text": "The Clinical and Financial Basis for Incorporating This Technology into Your Practice"
      },
      {
        "kind": "paragraph",
        "text": "MULTIPLE SPEAKERS FREE"
      },
      {
        "kind": "heading",
        "text": "Dental Sleep Medicine and General Dentistry"
      },
      {
        "kind": "paragraph",
        "text": "Is your Office in Compliance with the ADA’s Policy Statement of 2017?"
      },
      {
        "kind": "paragraph",
        "text": "EUGENE SANTUCCI, DDS FREE"
      },
      {
        "kind": "heading",
        "text": "What Customers are Saying"
      },
      {
        "kind": "paragraph",
        "text": "“With its versatility and precision, our PreXion CBCT has revolutionized my approach to comprehensive patient care. From TMD to airway management and full mouth rehabilitation, PreXion has taken our practice to the next level.”"
      },
      {
        "kind": "paragraph",
        "text": "– Dr. Jeff Horowitz"
      },
      {
        "kind": "paragraph",
        "text": "“With PreXion’s image quality, software capability and customer support, I can’t imagine anyone not using the PreXion CBCT who has an implant practice. The peace of mind and confidence this brings to every case – from the simplest to the most complex – is priceless.”"
      },
      {
        "kind": "paragraph",
        "text": "– Dr. Bernee Dunson"
      },
      {
        "kind": "paragraph",
        "text": "“With the PreXion CBCT, I now have the ability to comprehensively diagnose, plan and treat every patient with confidence and accuracy. This technology directly impacts everything from sinus lifts, implant placement, bone grafting, surgical extractions and more. This is absolutely the most valuable diagnostic tool in my practice.”"
      },
      {
        "kind": "paragraph",
        "text": "– Dr. Robert Walinchus"
      },
      {
        "kind": "heading",
        "text": "Rebate Exclusively for Catapult Grow Members"
      },
      {
        "kind": "heading",
        "text": "Get up to $3,000 Catapult Education credit or a $2,250 cash rebate when you buy a PreXion unit.*"
      },
      {
        "kind": "paragraph",
        "text": "* Rebate for Catapult Grow members to be used as credit for future Catapult Education Courses or paid via check in the quarter following installation. Rebate will be applied before sales tax as listed: on PreXion CBCT purchases valued at less than $55,000, rebate is $1,000 credit or $750 cash; on PreXion CBCT purchases valued between $55,000 and $69,999, rebate is $2,000 credit or $1,500 cash; and, for PreXion CBCT purchases valued more than $70,000, rebate is $3,000 credit or $2,250 cash."
      },
      {
        "kind": "heading",
        "text": "CBCT Interpretation Report Offer Exclusively for Catapult Grow Members"
      },
      {
        "kind": "heading",
        "text": "3 free case interpretations by Radiodontics. Valid for 60 days from installation date."
      },
      {
        "kind": "paragraph",
        "text": "7 cases additional case interpretation can be purchased from Radiodontics at an exclusive discounted bundle price of only $250.00 ($35.71 each). Valid for 180 days (6 months) from installation date."
      },
      {
        "kind": "heading",
        "text": "Increase Clarity and Precision in Your Practice!"
      },
      {
        "kind": "heading",
        "text": "Yes, I want to connect with a representative with PreXion so I can get access to:"
      },
      {
        "kind": "paragraph",
        "text": "✅ A demonstration of PreXion’s easy-to-use 3D Viewer Software to show ease of diagnosis and visualization of treatment options"
      },
      {
        "kind": "paragraph",
        "text": "✅ An understanding of how PreXion builds trust by tending to every inquiry and delivering excellent customer care at every touch"
      },
      {
        "kind": "paragraph",
        "text": "✅ More insights about how PreXion’s technology provides the clearest, most precise CBCT imaging in the industry at an incredible price point"
      },
      {
        "kind": "heading",
        "text": "“There are few items in my practice that elicit the level of wow factor as my PreXion CBCT. It is my choice because it’s user-friendly, priced right and gives the best images in the industry. It has reenergized my staff and it’s another exciting tool in my arsenal that makes my life easier at the office. I could not practice without it!”"
      }
    ],
    "callsToAction": "- \"Find a PreXion3D Explorer Product Specialist Near You\" (https://www.prexion.com/product-specialists/) - \"Download the Explorer PRO Product Brochure\" (https://www.prexion.com/wp-content/uploads/2023/09/PreXion-ExplorerPRO-ProductBrochure-2023.pdf) - \"Find a PreXion3D Excelsior Product Specialist Near You\" (https://www.prexion.com/product-specialists/) - \"Download the Excelsior Product Brochure\" (https://www.prexion.com/wp-content/uploads/2023/09/PreXion-Excelsior-ProductBrochure-2023.pdf) - \"ENROLL NOW\" (The Flaws in Financing) (https://www.catapulteducation.com/course/financing-flaws) - \"ENROLL NOW\" (3D CBCT) (https://www.catapulteducation.com/course/cbct-technology) - \"ENROLL NOW\" (Dental Sleep Medicine and General Dentistry) (https://www.catapulteducation.com/course/sleep-medicine) - \"ACCESS OUR ROI CALCULATOR\" (https://www.prexion.com/roi-calculator/) - Contact Us: 855-PREXION - Client Support: (650) 212-0314 - Address: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [
      "https://www.prexion.com/wp-content/uploads/2023/09/PreXion-Excelsior-ProductBrochure-2023.pdf",
      "https://www.prexion.com/wp-content/uploads/2023/09/PreXion-ExplorerPRO-ProductBrochure-2023.pdf"
    ],
    "externalLinks": [
      "https://www.catapulteducation.com/course/cbct-technology",
      "https://www.catapulteducation.com/course/financing-flaws",
      "https://www.catapulteducation.com/course/sleep-medicine",
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "Software Features and Clinical Applications",
        "url": "https://www.prexion.com/prexion-3d-explorer-pro/"
      },
      {
        "label": "Find a PreXion3D Explorer Product Specialist Near You",
        "url": "https://www.prexion.com/product-specialists/"
      },
      {
        "label": "Download the Explorer PRO Product Brochure",
        "url": "https://www.prexion.com/wp-content/uploads/2023/09/PreXion-ExplorerPRO-ProductBrochure-2023.pdf"
      },
      {
        "label": "Software Features and Clinical Applications",
        "url": "https://www.prexion.com/prexion-3d-excelsior-cbct-scanner/"
      },
      {
        "label": "Find a PreXion3D Excelsior Product Specialist Near You",
        "url": "https://www.prexion.com/product-specialists/"
      },
      {
        "label": "Download the Excelsior Product Brochure",
        "url": "https://www.prexion.com/wp-content/uploads/2023/09/PreXion-Excelsior-ProductBrochure-2023.pdf"
      },
      {
        "label": "ENROLL NOW",
        "url": "https://www.catapulteducation.com/course/financing-flaws"
      },
      {
        "label": "ENROLL NOW",
        "url": "https://www.catapulteducation.com/course/cbct-technology"
      },
      {
        "label": "ENROLL NOW",
        "url": "https://www.catapulteducation.com/course/sleep-medicine"
      },
      {
        "label": "ACCESS OUR ROI CALCULATOR",
        "url": "https://www.prexion.com/roi-calculator/"
      }
    ],
    "images": [
      {
        "alt": "top quality 3d imaging",
        "url": "/manus-storage/9b6d37e850ff-PRE-Xray-Photo_f3ea9cd8.png"
      },
      {
        "alt": "dr lou graham",
        "url": "/manus-storage/36a1e0338aa8-LOU-Graham_43274360.png"
      },
      {
        "alt": "Catapult (LP)",
        "url": "/manus-storage/36a1e0338aa8-LOU-Graham_43274360.png"
      },
      {
        "alt": "PreXion3D Explorer",
        "url": "/manus-storage/e26e2fd690d8-PRE-Explorer-Pro-1_33160a67.jpg"
      },
      {
        "alt": "PreXion3D Excelsior",
        "url": "/manus-storage/e26e2fd690d8-PRE-Explorer-Pro-1_33160a67.jpg"
      },
      {
        "alt": "dr jeff horowitz",
        "url": "/manus-storage/1b65e28296d5-Horowitz_9fbcaedb.jpeg"
      },
      {
        "alt": "dr bernee dunson",
        "url": "/manus-storage/12d13688325f-Dunson_36bd4127.jpeg"
      },
      {
        "alt": "dr robert walinchus",
        "url": "/manus-storage/8858ea00e671-Walinachus_6d70095a.jpeg"
      },
      {
        "alt": "special offer",
        "url": "/manus-storage/a5f941f5e1b3-special-offer_eb813ca6.png"
      },
      {
        "alt": "Catapult (LP)",
        "url": "/manus-storage/a5f941f5e1b3-special-offer_eb813ca6.png"
      },
      {
        "alt": "dr sam halabo",
        "url": "/manus-storage/b743f0fb86e8-Halabo-Sam_2020_24015c50.jpeg"
      },
      {
        "alt": "Catapult (LP)",
        "url": "/manus-storage/b743f0fb86e8-Halabo-Sam_2020_24015c50.jpeg"
      }
    ],
    "migrationAction": "redirect",
    "notes": "A página é uma landing page de parceria com a Catapult Grow, oferecendo descontos exclusivos para membros na compra de equipamentos CBCT da PreXion. Há duplicação de texto nos depoimentos do Dr. Lou Graham e Dr. Sam Halabo, além da duplicação dos blocos de ofertas de descontos (Rebate Exclusively for Catapult Grow Members) e relatórios de interpretação (CBCT Interpretation Report Offer Exclusively for Catapult Grow Members). O conteúdo foca em campanhas específicas, sendo recomendado redirecionar para uma página consolidada de parcerias ou ofertas no novo site."
  },
  "/category/blog": {
    "sourceUrl": "https://www.prexion.com/category/blog/",
    "route": "/category/blog",
    "canonicalTarget": "/news",
    "title": "Blog",
    "type": "article",
    "relevance": "medium",
    "summary": "Blog Lista de 5 itens recentes do blog, focados principalmente em eventos odontológicos de 2026: - The Art and Science of Dentistry 2026 – Anaheim – CA - AAE Annual Meteting 2026 – Salt Lake City – UT - Chicago Mindwinter - AEEDC Dubai 2026 - Saudi International Dental Conference SIDC",
    "blocks": [
      {
        "kind": "heading",
        "text": "Blog"
      },
      {
        "kind": "paragraph",
        "text": "Lista de 5 itens recentes do blog, focados principalmente em eventos odontológicos de 2026:"
      },
      {
        "kind": "paragraph",
        "text": "The Art and Science of Dentistry 2026 – Anaheim – CA"
      },
      {
        "kind": "paragraph",
        "text": "AAE Annual Meteting 2026 – Salt Lake City – UT"
      },
      {
        "kind": "paragraph",
        "text": "Chicago Mindwinter"
      },
      {
        "kind": "paragraph",
        "text": "AEEDC Dubai 2026"
      },
      {
        "kind": "paragraph",
        "text": "Saudi International Dental Conference (SIDC)"
      }
    ],
    "callsToAction": "- Contact Us: [855-PREXION](tel:855PREXION) - Client Support: [(650) 212-0314](tel:6502120314) - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [],
    "images": [],
    "migrationAction": "redirect",
    "notes": "A página atua como uma listagem de artigos/eventos do blog, mas os links atuais são focados em eventos de 2026. O rodapé está duplicado no código. É recomendado redirecionar para uma nova página centralizadora de blog ou eventos."
  },
  "/cbct-scanner-options": {
    "sourceUrl": "https://www.prexion.com/cbct-scanner-options/",
    "route": "/cbct-scanner-options",
    "canonicalTarget": "/product",
    "title": "Combo (LP)",
    "type": "product",
    "relevance": "high",
    "summary": "Leading 3D Cone Beam CT Imaging Solutions PreXion delivers clarity and precision from product research to education and support. Why choose a PreXion3D CBCT Scanner ? PreXion has been committed to revolutionizing dental and medical imaging since 2007. Led by Yasutoyo Imada, the company expanded from Japan to the US and now serves thousands of customers across 50 states and seven countries. Clinical Applications - Implant placement surgery - Endodontics - Periodontics - Orthodontics - Oral-maxillofacial surgery - TMJ treatment - Pathology - Impacted and supernumerary teeth - DICOM export for implant surgical guides & CAD/CAM - Integration - Airway analysis PreXion3D Explorer PRO The Explorer PRO provides a 360˚ ",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Leading 3D Cone Beam CT Imaging Solutions PreXion delivers clarity and precision at every customer touchpoint, from product research and 3D imaging solutions to education and support. REQUEST A DEMO Leading 3D Cone Beam CT Imaging Solutions PreXion delivers clarity and precision at every customer touchpoint, from product research and 3D imaging solutions to education and support. REQUEST A DEMO Why choose a PreXion3D CBCT Scanner ? Since its incorporation in Japan in 2007, PreXion has been committed to revolutionizing dental and medical imaging. President & CEO Yasutoyo Imada has over 30 years of experience in both imaging and dental equipment manufacturing. After that, it began its expansion into the United States market with the distribution of its U.S.-exclusive PreXion3D Excelsior model. PreXion’s distribution has been rapidly expanding, serving thousands of customers across seven countries and in all 50 states. Clinical Applications Implant placement surgery Endodontics Periodontics Orthodontics Oral-maxillofacial surgery TMJ treatment Pathology Impacted and supernumerary teeth DICOM export for implant surgical guides & CAD/CAM Integration Airway analysis REQUEST A DEMO PreXion3D Explorer PRO The PreXion3D Explorer PRO is poised to revolutionize dental imaging with its unmatched clarity and boundless capabilities. The PreXion3D Explorer PRO provides an accurate 360˚ panoramic perspective from 523 to 1,024 projected views. In addition to the 3D analysis function for image detail sizes of 5x5cm, 10x10cm, 15x10cm and 15x16cm, the device features “True” and “Reconstructed” panorama modes. It impresses with its ease of operation, comprehensive planning programs and imaging software across all dental indication areas. Key Features Innovative built-in ceph arm design frees over 2 feet of space 0.3×0.3mm focal spot – the smallest in the industry Multiple fields of view (FOV) ranging from 5×5 to 15×16. Low dose, HD and endo CT modes with scan times of 20 seconds or lower 14-second pano and 16-second ceph scan times REQUEST A DEMO Field of View Increase Your Diagnostic and Treatment Accuracy with Optimal FOV Size The PreXion3D Explorer PRO provides an accurate 360˚ panoramic perspective from 523 to 1,024 projected views. In addition to the 3D analysis function for image detail sizes of 5x5cm, 10x10cm, 15x10cm and 15x16cm, the device features “True” and “Reconstructed” panorama modes. It impresses with its ease of operation, comprehensive planning programs and imaging software across all dental indication areas. 5x5cm 10x5cm 10x8cm 15x8cm 15x13cm PreXion3D Excelsior The PreXion3D Excelsior CBCT scanner is the evolution of our original flagship product designed for dentists who demand the highest diagnostic clarity and detail. Key Features Load multiple patient scans on a single screen Quickly capture animated 3D video clips for patient education, case acceptance and lecture presentations Automatically save 3D image reports to MS Word templates and attach them to a patient’s practice management record Work on cases from home or a satellite office without long connectivity delays Use our extensive library or customize your own REQUEST A DEMO 16 YEARS OF EXPERIENCE CLEAREST IMAGES CLINICAL ADVISORY BOARD DISTRIBUTING PARTNERS CUSTOMER SUPPORT Imaging Technology Moving You Forward PreXion Corporation is a Japanese company specializing in medical imaging research and development. Since our company was founded in 2007 as a spin-off from TeraRecon, Inc., we have been developing and distributing dental cone beam CT scanners in the US and abroad. With our advanced accumulated imaging technologies, we succeeded in developing the world’s first photoacoustic imaging system using NIR-LED as a light source. We are committed to continuously developing new technologies to contribute to human health throughout the world. We accomplish this through our company philosophy of “Make IT Visible” coupled with our entrepreneurial spirit. REQUEST A DEMO What is the Industry Saying? What is the Industry Saying? “Over 5 years ago, I bought my second CBCT and it was a PreXion. Over these past 5 years, the training and service have been second to none and if you’re investing in such a piece of equipment, it is essential both of these criteria be 100%. Add the great images and easy software interface, my entire multi-specialty users just love our unit. This company walks the walk for its clients and continues to set the bar for anyone interested in purchasing a CBCT.” – LOU GRAHAM DDS FAGD, USA Request a Free Demo Fill out the form below and a member of our team will contact you shortly to arrange a free demo of the PreXion3D Excelsior. X/Twitter This field is for validation purposes and should be left unchanged. Name (Required) First Last Email (Required) Phone (Required) ZIP Code (Required) ZIP / Postal Code CAPTCHA"
      },
      {
        "kind": "heading",
        "text": "Leading 3D Cone Beam CT Imaging Solutions"
      },
      {
        "kind": "heading",
        "text": "Why choose a PreXion3D CBCT Scanner ?"
      },
      {
        "kind": "paragraph",
        "text": "Since its incorporation in Japan in 2007, PreXion has been committed to revolutionizing dental and medical imaging. President & CEO Yasutoyo Imada has over 30 years of experience in both imaging and dental equipment manufacturing. After that, it began its expansion into the United States market with the distribution of its U.S.-exclusive PreXion3D Excelsior model. PreXion’s distribution has been rapidly expanding, serving thousands of customers across seven countries and in all 50 states."
      },
      {
        "kind": "heading",
        "text": "Clinical Applications"
      },
      {
        "kind": "list",
        "text": "Implant placement surgery"
      },
      {
        "kind": "list",
        "text": "Endodontics"
      },
      {
        "kind": "list",
        "text": "Periodontics"
      },
      {
        "kind": "list",
        "text": "Orthodontics"
      },
      {
        "kind": "list",
        "text": "Oral-maxillofacial surgery"
      },
      {
        "kind": "list",
        "text": "TMJ treatment"
      },
      {
        "kind": "list",
        "text": "Pathology"
      },
      {
        "kind": "list",
        "text": "Impacted and supernumerary teeth"
      },
      {
        "kind": "list",
        "text": "DICOM export for implant surgical guides & CAD/CAM"
      },
      {
        "kind": "list",
        "text": "Integration"
      },
      {
        "kind": "list",
        "text": "Airway analysis"
      },
      {
        "kind": "heading",
        "text": "PreXion3D Explorer PRO"
      },
      {
        "kind": "heading",
        "text": "The PreXion3D Explorer PRO is poised to revolutionize dental imaging with its unmatched clarity and boundless capabilities."
      },
      {
        "kind": "paragraph",
        "text": "The PreXion3D Explorer PRO provides an accurate 360˚ panoramic perspective from 523 to 1,024 projected views. In addition to the 3D analysis function for image detail sizes of 5x5cm, 10x10cm, 15x10cm and 15x16cm, the device features “True” and “Reconstructed” panorama modes. It impresses with its ease of operation, comprehensive planning programs and imaging software across all dental indication areas."
      },
      {
        "kind": "paragraph",
        "text": "Key Features"
      },
      {
        "kind": "list",
        "text": "Innovative built-in ceph arm design frees over 2 feet of space"
      },
      {
        "kind": "list",
        "text": "0.3×0.3mm focal spot – the smallest in the industry"
      },
      {
        "kind": "list",
        "text": "Multiple fields of view (FOV) ranging from 5×5 to 15×16."
      },
      {
        "kind": "list",
        "text": "Low dose, HD and endo CT modes with scan times of 20 seconds or lower"
      },
      {
        "kind": "list",
        "text": "14-second pano and 16-second ceph scan times"
      },
      {
        "kind": "heading",
        "text": "Field of View"
      },
      {
        "kind": "heading",
        "text": "Increase Your Diagnostic and Treatment Accuracy with Optimal FOV Size"
      },
      {
        "kind": "paragraph",
        "text": "5x5cm"
      },
      {
        "kind": "paragraph",
        "text": "10x5cm"
      },
      {
        "kind": "paragraph",
        "text": "10x8cm"
      },
      {
        "kind": "paragraph",
        "text": "15x8cm"
      },
      {
        "kind": "paragraph",
        "text": "15x13cm"
      },
      {
        "kind": "heading",
        "text": "PreXion3D Excelsior"
      },
      {
        "kind": "heading",
        "text": "The PreXion3D Excelsior CBCT scanner is the evolution of our original flagship product designed for dentists who demand the highest diagnostic clarity and detail."
      },
      {
        "kind": "list",
        "text": "Load multiple patient scans on a single screen"
      },
      {
        "kind": "list",
        "text": "Quickly capture animated 3D video clips for patient education, case acceptance and lecture presentations"
      },
      {
        "kind": "list",
        "text": "Automatically save 3D image reports to MS Word templates and attach them to a patient’s practice management record"
      },
      {
        "kind": "list",
        "text": "Work on cases from home or a satellite office without long connectivity delays"
      },
      {
        "kind": "list",
        "text": "Use our extensive library or customize your own"
      },
      {
        "kind": "paragraph",
        "text": "CLEAREST IMAGES"
      },
      {
        "kind": "paragraph",
        "text": "CLINICAL ADVISORY BOARD"
      },
      {
        "kind": "heading",
        "text": "Imaging Technology Moving You Forward"
      },
      {
        "kind": "paragraph",
        "text": "PreXion Corporation is a Japanese company specializing in medical imaging research and development. Since our company was founded in 2007 as a spin-off from TeraRecon, Inc., we have been developing and distributing dental cone beam CT scanners in the US and abroad. With our advanced accumulated imaging technologies, we succeeded in developing the world’s first photoacoustic imaging system using NIR-LED as a light source. We are committed to continuously developing new technologies to contribute to human health throughout the world. We accomplish this through our company philosophy of “Make IT Visible” coupled with our entrepreneurial spirit."
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“Over 5 years ago, I bought my second CBCT and it was a PreXion. Over these past 5 years, the training and service have been second to none and if you’re investing in such a piece of equipment, it is essential both of these criteria be 100%. Add the great images and easy software interface, my entire multi-specialty users just love our unit. This company walks the walk for its clients and continues to set the bar for anyone interested in purchasing a CBCT.”"
      },
      {
        "kind": "heading",
        "text": "Request a Free Demo"
      }
    ],
    "callsToAction": "- REQUEST A DEMO (botão repetido várias vezes) - Formulário \"Request a Free Demo\" com campos: Name, Email, Phone, ZIP Code - Telefone Contact Us: 855-PREXION - Telefone Client Support: (650) 212-0314 - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "Leading 3D Cone Beam CT Imaging Solutions",
        "url": "https://www.prexion.com/"
      },
      {
        "label": "PreXion3D CBCT Scanner",
        "url": "https://www.prexion.com/"
      },
      {
        "label": "PreXion3D Explorer PRO",
        "url": "https://www.prexion.com/prexion-3d-explorer-pro/"
      },
      {
        "label": "YouTube video player 1",
        "url": "https://www.youtube.com/embed/nLfv7zA-Gek?wmode=transparent&autoplay=0"
      },
      {
        "label": "PreXion3D Excelsior",
        "url": "https://www.prexion.com/prexion-3d-excelsior-cbct-scanner/"
      },
      {
        "label": "YouTube video player 2",
        "url": "https://www.youtube.com/embed/7_Ca2Eay0A8?wmode=transparent&autoplay=0"
      },
      {
        "label": "PreXion",
        "url": "https://www.prexion.com/"
      }
    ],
    "images": [
      {
        "alt": "after prexion",
        "url": "/manus-storage/f34c85370eb9-endo8_5041c1df.jpg"
      },
      {
        "alt": "before prexion",
        "url": "/manus-storage/4c8eac92aa2c-endo7_70cf9c15.jpg"
      },
      {
        "alt": "Combo (LP)",
        "url": "/manus-storage/73fb195eea77-5e00dd37-5x5_109f09f000000000000028_894e2423.png"
      },
      {
        "alt": "Combo (LP)",
        "url": "/manus-storage/a05658fdf116-b7ed37e0-10x5_109g09g000000000000028_89e8c08c.png"
      },
      {
        "alt": "Combo (LP)",
        "url": "/manus-storage/307cd34097d0-df099c25-10x8_109c09c000000000000028_eb42b0dc.png"
      },
      {
        "alt": "Combo (LP)",
        "url": "/manus-storage/5e8a2efda78d-0bd7dcfd-15x8_10bj09d000000000000028_22ec2c26.png"
      },
      {
        "alt": "Combo (LP)",
        "url": "/manus-storage/09ee3d8cf68b-b407d543-15x13_109a09a000000000000028_067f4047.png"
      },
      {
        "alt": "PreXion 16 years of experience",
        "url": "/manus-storage/d91ef2eea9c3-987951ae-icon-1_1000000000000000000028_e65e16ea.png"
      },
      {
        "alt": "PreXion clearest images",
        "url": "/manus-storage/8fd6b650cec1-58e85faf-icon-2_1000000000000000000028_071373a9.png"
      },
      {
        "alt": "PreXion clinical advisory board",
        "url": "/manus-storage/86d8784597be-98f2607b-icon-3_1000000000000000000028_b5102b10.png"
      },
      {
        "alt": "PreXion distributing partners",
        "url": "/manus-storage/aed2559e66fb-fbdf7669-icon-4_1000000000000000000028_604e2fb3.png"
      },
      {
        "alt": "PreXion customer support",
        "url": "/manus-storage/bc77b47ee755-63dacb4d-icon-5_1000000000000000000028_f68001fe.png"
      }
    ],
    "migrationAction": "consolidate",
    "notes": "Página principal de produtos CBCT da PreXion. Apresenta os modelos Explorer PRO e Excelsior, suas aplicações clínicas e campos de visão. Contém formulário de contato para demo. É recomendável consolidar as informações gerais em uma nova página de listagem de produtos ou redirecionar para uma rota unificada de scanners no novo site. Não foram encontrados downloads em PDF/ZIP na extração textual. O cabeçalho/hero section e o rodapé parecem estar duplicados no texto extraído."
  },
  "/chicago-mindwinter-dental": {
    "sourceUrl": "https://www.prexion.com/chicago-mindwinter-dental/",
    "route": "/chicago-mindwinter-dental",
    "canonicalTarget": "/chicago-mindwinter-dental",
    "title": "Chicago Mindwinter",
    "type": "event",
    "relevance": "medium",
    "summary": "Chicago Mindwinter Data: March 17, 2026. A empresa participou de um importante evento internacional do setor de saúde, o Chicago Dental Society – Mindwinter Meeting, de 19 a 21 de fevereiro. O evento proporcionou oportunidades de networking com parceiros e distribuidores, além de fortalecer a presença institucional e ampliar o entendimento das tendências e oportunidades no mercado internacional. Stay on the Cutting Edge of Dentistry. Subscribe today. Seção para inscrição em newsletter. Footer Contact Us & Explore Informações de contato, suporte ao cliente, endereço e links para produtos e serviços da empresa.",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "In February, we participated in an important international event in the healthcare sector, reinforcing our global presence and our commitment to expansion in strategic markets. This meeting was held at the Chicago Dental Society – Mindwinter Meeting, from February 19th to 21st, and provided significant opportunities for networking with partners and distributors, as well as strengthening our institutional presence and broadening our understanding of trends and opportunities in the international market."
      }
    ],
    "callsToAction": "- Inscrever-se (Subscribe today) - Contact Us: [855-PREXION](tel:855PREXION) - Client Support: [(650) 212-0314](tel:6502120314) - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110 - Live Chat",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.prexion.com%2Fchicago-mindwinter-dental%2F&t=Chicago%20Mindwinter",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.prexion.com%2Fchicago-mindwinter-dental%2F&title=Chicago%20Mindwinter&summary=In%20February%2C%20we%20participated%20in%20an%20important%20international%20event%20in%20the%20healthcare%20sector%2C%20reinforcing%20our%20global%20presence%20and%20our%20commitment%20to%20expansion%20in%20strategic%20markets.%20This%20meeting%20was%20held%20at%20the%20Chicago%20Dental%20Society%20-%20Mindwinter%20Meeting%2C%20from%20February%2019th%20to%2021st%2C%20and%20provided%20significant%20opportunities%20for%20networking%20with%20partners%20and%20distributors%2C%20as%20well%20as",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [],
    "images": [],
    "migrationAction": "consolidate",
    "notes": "A página é uma notícia/post sobre a participação em um evento (Chicago Dental Society – Mindwinter Meeting) ocorrido em fevereiro. Conteúdo de blog/notícia padrão. O rodapé aparece duplicado no texto extraído. Pode ser migrada para uma seção de notícias ou eventos do novo site."
  },
  "/contact": {
    "sourceUrl": "https://www.prexion.com/contact/",
    "route": "/contact",
    "canonicalTarget": "/contact",
    "title": "Contact Us",
    "type": "institutional",
    "relevance": "high",
    "summary": "Contact Us Discover how our dental solutions can support your practice. Whether you are an existing customer, would like to learn more about our products, or want to schedule a demo, our team is ready to help. For unrelated inquiries, please call: 650 212-0300. PreXion Contact prexion headquarters Working Hours Open: Mon-Fri 6:00 AM-5:00 PM Closed: Sat-Sun and Public Holidays Our Location 2077 Gateway Place, Suite 120, San Jose, CA 95110 What is the Industry Saying? Testimonial from DR. LE O'LEARY about using PreXion CBCT in endodontic practice.",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Discover how our dental solutions can support your practice. Whether you are an existing customer, would like to learn more about our products, or want to schedule a demo, our team is ready to help. For unrelated inquiries, please call: (650) 212-0300 PreXion Contact Working Hours — Open — Mon-Fri 6:00 AM-5:00 PM — Closed — Sat-Sun and Public Holidays Our Location 2077 Gateway Place, Suite 120 San Jose, CA 95110 What is the Industry Saying? What is the Industry Saying? “I have used CBCT in my endodontic practice for over a decade. When it came time for me to upgrade my system, I chose the PreXion CBCT . The PreXion image is the absolute best I’ve seen, and would encourage everyone to elevate their practice by incorporating this technology!” – DR. LE O’LEARY"
      },
      {
        "kind": "paragraph",
        "text": "Discover how our dental solutions can support your practice. Whether you are an existing customer, would like to learn more about our products, or want to schedule a demo, our team is ready to help."
      },
      {
        "kind": "heading",
        "text": "PreXion Contact"
      },
      {
        "kind": "paragraph",
        "text": "— Open —"
      },
      {
        "kind": "paragraph",
        "text": "Mon-Fri 6:00 AM-5:00 PM"
      },
      {
        "kind": "paragraph",
        "text": "— Closed —"
      },
      {
        "kind": "paragraph",
        "text": "Sat-Sun and Public Holidays"
      },
      {
        "kind": "paragraph",
        "text": "2077 Gateway Place, Suite 120"
      },
      {
        "kind": "paragraph",
        "text": "San Jose, CA 95110"
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“I have used CBCT in my endodontic practice for over a decade. When it came time for me to upgrade my system, I chose the PreXion CBCT . The PreXion image is the absolute best I’ve seen, and would encourage everyone to elevate their practice by incorporating this technology!”"
      }
    ],
    "callsToAction": "- Schedule a demo (implied in text) - Call for unrelated inquiries: [(650) 212-0300](tel:6502120300) - Contact Us: [855-PREXION](tel:855PREXION) - Client Support: [(650) 212-0314](tel:6502120314) - Address: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "(650) 212-0300",
        "url": "tel:6502120300"
      },
      {
        "label": "PreXion CBCT",
        "url": "https://www.prexion.com/"
      }
    ],
    "images": [
      {
        "alt": "prexion headquarters",
        "url": "/manus-storage/fd6994406e3b-22006-prexion-eua-externo-3-300x225_6154926a.jpeg"
      }
    ],
    "migrationAction": "create",
    "notes": "A página contém informações de contato cruciais, horários de funcionamento e endereço da sede. O conteúdo do rodapé está duplicado no markdown extraído. A página deve ser migrada e mantida como o principal ponto de contato."
  },
  "/discover-the-evolve-2d-pan": {
    "sourceUrl": "https://www.prexion.com/discover-the-evolve-2d-pan/",
    "route": "/discover-the-evolve-2d-pan",
    "canonicalTarget": "/product/evolve-2d",
    "title": "Evolve 2D (PAN) (LP)",
    "type": "landing-page",
    "relevance": "high",
    "summary": "PreXion Evolve 2D PAN O PreXion Evolve 2D PAN destaca-se pela facilidade de uso e qualidade de imagem. Possui filtros aprimorados, capacidade multislice 41 fatias panorâmicas e algoritmos de reconstrução para nitidez e contraste. Upgradeable 2D to 3D CBCT Repete o texto anterior sobre a facilidade de uso, filtros, 41 fatias panorâmicas e algoritmos de reconstrução do PreXion Evolve 2D PAN . Get a Complimentary Demo Incentiva o agendamento de uma demonstração com um especialista para entender como a imagem precisa melhora o diagnóstico, planejamento de tratamento, aceitação do paciente e aumento de receita. Menciona a comparação entre scanners 2D e 3D CBCT. Panoramic - 5 adaptive filters - Enhanced Ortho CEPH Ar",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "PreXion Evolve 2D (PAN) The user friendliness and image quality of PreXion Evolve 2D (PAN) sets it apart. Its enhanced filters adjust images to suit your requirements, and its multislice capability allows easy navigation through 41 panoramic slices, enabling precise visualization of desired structures. Moreover, the reconstruction algorithms ensure exceptional sharpness and contrast in every scan based on user preference. Upgradeable 2D to 3D CBCT The user friendliness and image quality of PreXion Evolve 2D (PAN) sets it apart. Its enhanced filters adjust images to suit your requirements, and its multislice capability allows easy navigation through 41 panoramic slices, enabling precise visualization of desired structures. Moreover, the reconstruction algorithms ensure exceptional sharpness and contrast in every scan based on user preference. Get a Complimentary Demo Ready to increase production now? Yes, I want to schedule a demo with a PreXion 2D cone beam specialist so I can get: A clear understanding of how precise imaging gives way to improved diagnostic capabilities, easier treatment planning, quicker patient treatment acceptance and increased revenue Clarity on how to angle and zoom in on problem areas to help patients visualize their case and treatment A comparison of the attributes of various 2D and 3D CBCT scanners and how each stacks up in increasing practice production Panoramic 5 adaptive filters Enhanced Ortho CEPH Arm: Adding the Ceph arm boosts Evolve 2D (PAN)’s diagnostic potential for cephalometric exams. Its specialized Ceph sensor, creates high- quality images of hard and soft tissue. Collimation mechanisms and rapid scanning techniques minimize X-ray exposure. Scan Time: Standard Mode: 4.1 – 16.5s Fast Mode: 2.5 – 10s Lateral Ceph AP/PA Frontal Ceph Request a Demo What is the Industry Saying? What is the Industry Saying? “Over 5 years ago, I bought my second CBCT and it was a PreXion. Over these past 5 years, the training and service have been second to none and if you’re investing in such a piece of equipment, it is essential both of these criteria be 100%. Add the great images and easy software interface, my entire multi-specialty users just love our unit. This company walks the walk for its clients and continues to set the bar for anyone interested in purchasing a CBCT.” – Lou Graham DDS FAGD, USA"
      },
      {
        "kind": "heading",
        "text": "PreXion Evolve 2D (PAN)"
      },
      {
        "kind": "paragraph",
        "text": "The user friendliness and image quality of PreXion Evolve 2D (PAN) sets it apart. Its enhanced filters adjust images to suit your requirements, and its multislice capability allows easy navigation through 41 panoramic slices, enabling precise visualization of desired structures. Moreover, the reconstruction algorithms ensure exceptional sharpness and contrast in every scan based on user preference."
      },
      {
        "kind": "heading",
        "text": "Upgradeable 2D to 3D CBCT"
      },
      {
        "kind": "heading",
        "text": "Get a Complimentary Demo"
      },
      {
        "kind": "heading",
        "text": "Ready to increase production now?"
      },
      {
        "kind": "paragraph",
        "text": "Yes, I want to schedule a demo with a PreXion 2D cone beam specialist so I can get:"
      },
      {
        "kind": "list",
        "text": "A clear understanding of how precise imaging gives way to improved diagnostic capabilities, easier treatment planning, quicker patient treatment acceptance and increased revenue"
      },
      {
        "kind": "list",
        "text": "Clarity on how to angle and zoom in on problem areas to help patients visualize their case and treatment"
      },
      {
        "kind": "list",
        "text": "A comparison of the attributes of various 2D and 3D CBCT scanners and how each stacks up in increasing practice production"
      },
      {
        "kind": "paragraph",
        "text": "Panoramic"
      },
      {
        "kind": "paragraph",
        "text": "5 adaptive filters"
      },
      {
        "kind": "paragraph",
        "text": "Enhanced Ortho"
      },
      {
        "kind": "heading",
        "text": "CEPH Arm:"
      },
      {
        "kind": "paragraph",
        "text": "Adding the Ceph arm boosts Evolve 2D (PAN)’s diagnostic potential for cephalometric exams. Its specialized Ceph sensor, creates high- quality images of hard and soft tissue. Collimation mechanisms and rapid scanning techniques minimize X-ray exposure."
      },
      {
        "kind": "heading",
        "text": "Scan Time:"
      },
      {
        "kind": "paragraph",
        "text": "Standard Mode: 4.1 – 16.5s Fast Mode: 2.5 – 10s"
      },
      {
        "kind": "paragraph",
        "text": "Lateral Ceph"
      },
      {
        "kind": "paragraph",
        "text": "AP/PA Frontal Ceph"
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“Over 5 years ago, I bought my second CBCT and it was a PreXion. Over these past 5 years, the training and service have been second to none and if you’re investing in such a piece of equipment, it is essential both of these criteria be 100%. Add the great images and easy software interface, my entire multi-specialty users just love our unit. This company walks the walk for its clients and continues to set the bar for anyone interested in purchasing a CBCT.”"
      }
    ],
    "callsToAction": "- Get a Complimentary Demo (formulário/botão) - Request a Demo - Live Chat - Telefones: 855-PREXION, (650) 212-0314 - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [],
    "images": [
      {
        "alt": "Evolve 2D (PAN) (LP)",
        "url": "/manus-storage/dd0ef149cb98-NEW-Panoramic_189f74a7.jpg"
      },
      {
        "alt": "Evolve 2D (PAN) (LP)",
        "url": "/manus-storage/ebe36ba14a0f-NEW-5-adaptive-filters_5cf1cdce.png"
      },
      {
        "alt": "Evolve 2D (PAN) (LP)",
        "url": "/manus-storage/fec4fba1bb7a-NEW-Enhanced-Ortho_9630d7c6.jpg"
      },
      {
        "alt": "Evolve 2D (PAN) (LP)",
        "url": "/manus-storage/7c49d335d9b0-NEW-Lateral-Ceph_a22dbc41.jpg"
      },
      {
        "alt": "Evolve 2D (PAN) (LP)",
        "url": "/manus-storage/16322faf57b3-NEW-Maxillary-Sinus-Ceph_b1707549.jpg"
      }
    ],
    "migrationAction": "redirect",
    "notes": "Página do tipo landing page (LP) focada no produto PreXion Evolve 2D (PAN). O conteúdo principal apresenta o produto, suas características (filtros, 41 fatias panorâmicas, capacidade de atualização para 3D) e incentiva o agendamento de uma demonstração. O rodapé aparece duplicado na extração. O texto menciona depoimento de cliente. Recomenda-se redirecionar para a página principal do produto no novo site, caso esta LP não seja mais necessária como página independente, ou consolidá-la."
  },
  "/discover-the-expedition-cbct-scanner": {
    "sourceUrl": "https://www.prexion.com/discover-the-expedition-cbct-scanner/",
    "route": "/discover-the-expedition-cbct-scanner",
    "canonicalTarget": "/product",
    "title": "Expedition CBCT Scanner (LP)",
    "type": "product",
    "relevance": "high",
    "summary": "PreXion Expedition CBCT Scanner The PreXion Expedition CBCT Scanner is designed and manufactured in Japan to deliver high image quality. It combines a high-quality X-ray generator developed in-house with various imaging technologies. The software has been used for over 15 years in clinical procedures. The product is backed by responsive customer support and strict quality control standards. Calculate Your ROI Now! A call to action encouraging users to use the ROI calculator tool to compare net income from a PreXion investment to financing expenses. Get a Complimentary Demo An invitation to schedule a demo with a specialist to understand how precise imaging improves diagnostic capabilities, treatment planning, p",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "PreXion Expedition CBCT Scanner In designing and manufacturing PreXion Expedition CBCT Scanner, our team was in pursuit of delivering even higher image quality. This product combines a high-quality X-ray generator, the key component for X-ray irradiation, with a variety of imaging technologies. This is more vivid, more accurate, more reliable diagnostic imaging technology crafted in Japan and recognized around the world. Responsive customer support and strict quality control standards are the defining characteristics of our in-house product development. Every aspect of the PreXion Expedition CBCT Scanner, from our rigid quality control standards and manufacturing to our comprehensive customer support, is developed in Japan. Our software has been used for more than 15 years in clinical procedures, and we have developed our x-ray generator, a central component of a cone beam CT, in-house. Calculate Your Savings PreXion Expedition CBCT Scanner In designing and manufacturing PreXion Expedition CBCT Scanner, our team was in pursuit of delivering even higher image quality. This product combines a high-quality X-ray generator, the key component for X-ray irradiation, with a variety of imaging technologies. This is more vivid, more accurate, more reliable diagnostic imaging technology crafted in Japan and recognized around the world. Responsive customer support and strict quality control standards are the defining characteristics of our in-house product development. Every aspect of the PreXion Expedition CBCT Scanner, from our rigid quality control standards and manufacturing to our comprehensive customer support, is developed in Japan. Our software has been used for more than 15 years in clinical procedures, and we have developed our X-ray generator, a central component of a cone beam CT, in-house. Calculate Your ROI Now! Are you interested in PreXion3D CBCT? Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to finance a product. Go to ROI calculator now! Get a Complimentary Demo Ready to increase production now? Yes, I want to schedule a demo with a PreXion 3D cone beam specialist so I can get: A clear understanding of how precise imaging gives way to improved diagnostic capabilities, easier treatment planning, quicker patient treatment acceptance and increased revenue Clarity on how to angle and zoom in on problem areas to help patients visualize their case and treatment A comparison of the attributes of various 3D CBCT scanners and how each stacks up in increasing practice production Calculate Your ROI Now! Are you interested in PreXion3D CBCT? Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to finance a product. Go to ROI calculator now! Get a Complimentary Demo Ready to increase production now? Yes, I want to schedule a demo with a PreXion 3D cone beam specialist so I can get: A clear understanding of how precise imaging gives way to improved diagnostic capabilities, easier treatment planning, quicker patient treatment acceptance and increased revenue Clarity on how to angle and zoom in on problem areas to help patients visualize their case and treatment A comparison of the attributes of various 3D CBCT scanners and how each stacks up in increasing practice production Cone Beam CT Benefits in Daily Practice Practitioners can make diagnoses and provide treatment with more precision by viewing pathology that could not be recognized with conventional 2D images, such as the spatial structure of teeth and jawbone as well as the location of nerves. Cone beam CT allows for low dosage without compromising on precise, clear image quality. This not only ensures accurate diagnosis, but also reduces the patient concern. Easy-to-understand icons and intuitive operation during imaging allow for stress-free diagnosis and better patient understanding. In Pursuit of High Image Quality Superior imaging quality is produced by combining a high-quality X-ray generator, the key component for X-ray irradiation, with a variety of imaging technologies. PreXion has added new IGZO technology to capture an even higher quality image than previous models. With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side. Cone Beam CT Benefits in Daily Practice Practitioners can make diagnoses and provide treatment with more precision by viewing pathology that could not be recognized with conventional 2D images, such as the spatial structure of teeth and jawbone as well as the location of nerves. Cone beam CT allows for low dosage without compromising on precise, clear image quality. This not only ensures accurate diagnosis, but also reduces the patient concern. Easy-to-understand icons and intuitive operation during imaging allow for stress-free diagnosis and better patient understanding. In Pursuit of High Image Quality Superior imaging quality is produced by combining a high-quality X-ray generator, the key component for X-ray irradiation, with a variety of imaging technologies. PreXion has added new IGZO technology to capture an even higher quality image than previous models. Calculate Your Savings New IGZO Flat Panel Detector IGZO is an acronym for indium (In), gallium (Ga), zinc (Zn) and oxide (O), the metals that are included in the sensor. This new technology uses more of the current to capture the image, producing visibly clearer images with less noise, while also reducing energy consumption. IGZO display technology is being used in curved gaming monitors and in automobile and smartphone displays. 360° Rotation PreXion Expedition CBCT Scanner makes higher resolution images possible by obtaining information content from the entire circumference with 360° scanning with no image rendering necessary. 110k High X-ray Tube Voltage The high X-ray tube voltage of 110kV allows PreXion Expedition CBCT Scanner to deliver optimal image quality for all kinds of tissue while decreasing image artifacts. X-Ray Tube Focal Spot 0.3 × 0.3mm The focal spot is the part of the X-ray tube where electrons strike a target and emit X-rays. PreXion Expedition CBCT Scanner features a 0.3mm X-ray tube focal spot, among the smallest in the industry. Voxel Size Minimum: 0.06mm, Maximum: 0.3mm PreXion Expedition CBCT Scanner uses voxel sizes of 0.06 / 0.08 / 0.1 / 0.12 / 0.15 / 0.2 / 0.3mm. It displays 3D images with high resolution and high image quality. This is smaller than nearly every competitor. 16-bit Grayscale While many dental CT scanners have 14-bits (16,384 gradations), PreXion Expedition CBCT Scanner has a high gradation of 16-bits (65,536 gradations), enabling it to produce even smoother, higher resolution images. Expedition CBCT Model is Ceph Upgradeable Making Low Radiation Exposure a Reality PreXion Expedition CBCT Scanner is equipped with features such as pulse irradiation that emits X-rays intermittently and a low-dose mode, which can deliver high image quality while minimizing radiation exposure making more precise examinations possible. Calculate your savings New Fields of View (FOV) PreXion Expedition CBCT Scanner is equipped with CT image acquisition capabilities applicable for all clinical situations at 5x5cm, 8x8cm, 12.5x10cm, and 15x15cm (optional), covering endodontic to full mouth treatment. PreXion3D Expedition uses a 360° rotation to generate high resolution images for all FOVs. The new 12.5x10cm FOV provides 2cm of additional height to capture the lower sinuses for optimal clinical diagnosis. New Modern Design PreXion has updated the model design and panel manufacturing to provide even greater durability and build quality with a sleek, modern design. What is the Industry Saying? What is the Industry Saying? “Over 5 years ago, I bought my second CBCT and it was a PreXion. Over these past 5 years, the training and service have been second to none and if you’re investing in such a piece of equipment, it is essential both of these criteria be 100%. Add the great images and easy software interface, my entire multi-specialty users just love our unit. This company walks the walk for its clients and continues to set the bar for anyone interested in purchasing a CBCT.” – Lou Graham DDS FAGD, USA"
      },
      {
        "kind": "heading",
        "text": "PreXion Expedition CBCT Scanner"
      },
      {
        "kind": "paragraph",
        "text": "In designing and manufacturing PreXion Expedition CBCT Scanner, our team was in pursuit of delivering even higher image quality. This product combines a high-quality X-ray generator, the key component for X-ray irradiation, with a variety of imaging technologies."
      },
      {
        "kind": "paragraph",
        "text": "This is more vivid, more accurate, more reliable diagnostic imaging technology crafted in Japan and recognized around the world."
      },
      {
        "kind": "paragraph",
        "text": "Responsive customer support and strict quality control standards are the defining characteristics of our in-house product development. Every aspect of the PreXion Expedition CBCT Scanner, from our rigid quality control standards and manufacturing to our comprehensive customer support, is developed in Japan. Our software has been used for more than 15 years in clinical procedures, and we have developed our x-ray generator, a central component of a cone beam CT, in-house."
      },
      {
        "kind": "heading",
        "text": "Calculate Your ROI Now!"
      },
      {
        "kind": "heading",
        "text": "Are you interested in PreXion3D CBCT?"
      },
      {
        "kind": "paragraph",
        "text": "Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to finance a product."
      },
      {
        "kind": "heading",
        "text": "Get a Complimentary Demo"
      },
      {
        "kind": "heading",
        "text": "Ready to increase production now?"
      },
      {
        "kind": "paragraph",
        "text": "Yes, I want to schedule a demo with a PreXion 3D cone beam specialist so I can get:"
      },
      {
        "kind": "list",
        "text": "A clear understanding of how precise imaging gives way to improved diagnostic capabilities, easier treatment planning, quicker patient treatment acceptance and increased revenue"
      },
      {
        "kind": "list",
        "text": "Clarity on how to angle and zoom in on problem areas to help patients visualize their case and treatment"
      },
      {
        "kind": "list",
        "text": "A comparison of the attributes of various 3D CBCT scanners and how each stacks up in increasing practice production"
      },
      {
        "kind": "heading",
        "text": "Cone Beam CT Benefits in Daily Practice"
      },
      {
        "kind": "list",
        "text": "Practitioners can make diagnoses and provide treatment with more precision by viewing pathology that could not be recognized with conventional 2D images, such as the spatial structure of teeth and jawbone as well as the location of nerves."
      },
      {
        "kind": "list",
        "text": "Cone beam CT allows for low dosage without compromising on precise, clear image quality. This not only ensures accurate diagnosis, but also reduces the patient concern."
      },
      {
        "kind": "list",
        "text": "Easy-to-understand icons and intuitive operation during imaging allow for stress-free diagnosis and better patient understanding."
      },
      {
        "kind": "heading",
        "text": "In Pursuit of High Image Quality"
      },
      {
        "kind": "paragraph",
        "text": "Superior imaging quality is produced by combining a high-quality X-ray generator, the key component for X-ray irradiation, with a variety of imaging technologies. PreXion has added new IGZO technology to capture an even higher quality image than previous models."
      },
      {
        "kind": "paragraph",
        "text": "With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side."
      },
      {
        "kind": "heading",
        "text": "New IGZO Flat Panel Detector"
      },
      {
        "kind": "paragraph",
        "text": "IGZO is an acronym for indium (In), gallium (Ga), zinc (Zn) and oxide (O), the metals that are included in the sensor. This new technology uses more of the current to capture the image, producing visibly clearer images with less noise, while also reducing energy consumption. IGZO display technology is being used in curved gaming monitors and in automobile and smartphone displays."
      },
      {
        "kind": "paragraph",
        "text": "360° Rotation"
      },
      {
        "kind": "paragraph",
        "text": "PreXion Expedition CBCT Scanner makes higher resolution images possible by obtaining information content from the entire circumference with 360° scanning with no image rendering necessary."
      },
      {
        "kind": "heading",
        "text": "110k High X-ray Tube Voltage"
      },
      {
        "kind": "paragraph",
        "text": "The high X-ray tube voltage of 110kV allows PreXion Expedition CBCT Scanner to deliver optimal image quality for all kinds of tissue while decreasing image artifacts."
      },
      {
        "kind": "heading",
        "text": "X-Ray Tube Focal Spot 0.3 × 0.3mm"
      },
      {
        "kind": "paragraph",
        "text": "The focal spot is the part of the X-ray tube where electrons strike a target and emit X-rays. PreXion Expedition CBCT Scanner features a 0.3mm X-ray tube focal spot, among the smallest in the industry."
      },
      {
        "kind": "heading",
        "text": "Voxel Size Minimum: 0.06mm, Maximum: 0.3mm"
      },
      {
        "kind": "paragraph",
        "text": "PreXion Expedition CBCT Scanner uses voxel sizes of 0.06 / 0.08 / 0.1 / 0.12 / 0.15 / 0.2 / 0.3mm. It displays 3D images with high resolution and high image quality. This is smaller than nearly every competitor."
      },
      {
        "kind": "heading",
        "text": "16-bit Grayscale"
      },
      {
        "kind": "paragraph",
        "text": "While many dental CT scanners have 14-bits (16,384 gradations), PreXion Expedition CBCT Scanner has a high gradation of 16-bits (65,536 gradations), enabling it to produce even smoother, higher resolution images."
      },
      {
        "kind": "paragraph",
        "text": "Expedition CBCT Model is Ceph Upgradeable"
      },
      {
        "kind": "heading",
        "text": "Making Low Radiation Exposure a Reality"
      },
      {
        "kind": "paragraph",
        "text": "PreXion Expedition CBCT Scanner is equipped with CT image acquisition capabilities applicable for all clinical situations at 5x5cm, 8x8cm, 12.5x10cm, and 15x15cm (optional), covering endodontic to full mouth treatment. PreXion3D Expedition uses a 360° rotation to generate high resolution images for all FOVs. The new 12.5x10cm FOV provides 2cm of additional height to capture the lower sinuses for optimal clinical diagnosis."
      },
      {
        "kind": "paragraph",
        "text": "PreXion has updated the model design and panel manufacturing to provide even greater durability and build quality with a sleek, modern design."
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“Over 5 years ago, I bought my second CBCT and it was a PreXion. Over these past 5 years, the training and service have been second to none and if you’re investing in such a piece of equipment, it is essential both of these criteria be 100%. Add the great images and easy software interface, my entire multi-specialty users just love our unit. This company walks the walk for its clients and continues to set the bar for anyone interested in purchasing a CBCT.”"
      }
    ],
    "callsToAction": "- Calculate Your Savings - [Go to ROI calculator now!](https://www.prexion.com/roi-calculator/) - Get a Complimentary Demo (Schedule a demo with a PreXion 3D cone beam specialist) - Contact Us: [855-PREXION](tel:855PREXION) - Client Support: [(650) 212-0314](tel:6502120314) - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "Go to ROI calculator now!",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "Go to ROI calculator now!",
        "url": "https://www.prexion.com/roi-calculator/"
      }
    ],
    "images": [
      {
        "alt": "Expedition CBCT Scanner (LP)",
        "url": "/manus-storage/9dbbe26071e9-PreXion_Expedition_with_ceph_107aeb5f.png"
      }
    ],
    "migrationAction": "create",
    "notes": "Página de produto relevante com informações detalhadas sobre o Expedition CBCT Scanner. O conteúdo parece atualizado, mas há duplicações visíveis no texto extraído (ex: seções 'PreXion Expedition CBCT Scanner', 'Calculate Your ROI Now!', 'Get a Complimentary Demo' e blocos de benefícios/qualidade de imagem aparecem duplicados), o que pode ser um problema de renderização da página antiga ou estruturação do HTML. A página não possui formulários embutidos diretamente visíveis no texto, apenas chamadas para ação. Não há downloads de folhetos em PDF. Deve ser criada uma página de produto dedicada no novo site com as especificações técnicas (IGZO, 110kV, focal spot 0.3mm, etc)."
  },
  "/discover-the-explorer-ex-cbct-scanner": {
    "sourceUrl": "https://www.prexion.com/discover-the-explorer-ex-cbct-scanner/",
    "route": "/discover-the-explorer-ex-cbct-scanner",
    "canonicalTarget": "/discover-the-explorer-ex-cbct-scanner",
    "title": "Explorer EX CBCT Scanner (LP)",
    "type": "landing-page",
    "relevance": "high",
    "summary": "Explorer EX CBCT Scanner LP Página de agradecimento ou landing page oferecendo o scanner CBCT Explorer EX com grande FOV e alta precisão por um valor $10.000 menor. Recursos e Downloads - eBook : Study Shows Emerging Cone-Beam Computed Tomography CBCT and Imaging Systems Allow Dentistry and Specialty Practices to Be More Profitable More Quickly Compared to Standard 2D Imaging Technology - Brochura : PreXion Explorer EX CBCT specifications brochure. Oferta de Conexão Chamada para conectar-se com a PreXion e garantir o desconto de $10.000, oferecendo: - Clareza sobre retorno de investimento. - Maior aceitação de casos por parte dos pacientes. - Demonstração presencial gratuita do PreXion Explorer EX CBCT. What is",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Thanks for your interest in high-precision large-FOV CBCT at $10,000 less. We look forward to connecting with you when the timing is right. Thanks for your interest in high-precision large-FOV CBCT at $10,000 less. We look forward to connecting with you when the timing is right. Here’s a link to our latest data-driven eBook, Study Shows Emerging Cone-Beam Computed Tomography (CBCT) and Imaging Systems Allow Dentistry and Specialty Practices to Be More Profitable More Quickly Compared to Standard 2D Imaging Technology GET ACCESS NOW Get the PreXion Explorer EX CBCT specifications brochure. DOWNLOAD NOW Get started with PreXion now and save $10,000. Yes, I want to connect with PreXion today so I can get: Clarity on how to earn a healthy return on investment and save $10,000 on large-FOV CBCT. A viewpoint on how to further offer patients the knowledge and confidence needed to increase practice-wide case acceptance. A complimentary in-person demo of the PreXion Explorer EX CBCT. What is the Industry Saying? What is the Industry Saying? “We chose PreXion based on the PreXion specifications, low radiation, and state of the art imaging. We are excited to be able to better diagnose periodontal disease and treatment plan for implants. In addition, we were very pleased by the training provided by PreXion which has been vital to help us learn how to use our CBCT to the fullest.” – DR. RICHARD NEWHART, PERIODONTIST “With the PreXion CBCT, I now have the ability to comprehensively diagnose, plan, and treat every patient with confidence and accuracy. This technology directly impacts everything from sinus lifts, implant placement, bone grafting, surgical extractions, and more. This is absolutely the most valuable diagnostic tool in my practice.” – DR. ROBERT WALINCHUS “The ability to visualize the bone/root relationship is mission critical for our practice to better service our patients. The PreXion CBCT clearly shows the limitations of orthodontic tooth movement. I can’t imagine practicing without it!” – DR. JEFFREY C. MILLER PreXion delivers precision imaging solutions to dentistry and specialty practices across the United States and is best known for top-quality imaging solutions, an unmatched commitment to education and excellent service. Learn more at www.prexion.com ."
      },
      {
        "kind": "heading",
        "text": "Thanks for your interest in high-precision large-FOV CBCT at $10,000 less."
      },
      {
        "kind": "heading",
        "text": "We look forward to connecting with you when the timing is right."
      },
      {
        "kind": "heading",
        "text": "Here’s a link to our latest data-driven eBook, Study Shows Emerging Cone-Beam Computed Tomography (CBCT) and Imaging Systems Allow Dentistry and Specialty Practices to Be More Profitable More Quickly Compared to Standard 2D Imaging Technology"
      },
      {
        "kind": "heading",
        "text": "Get the PreXion Explorer EX CBCT specifications brochure."
      },
      {
        "kind": "heading",
        "text": "Get started with PreXion now and save $10,000."
      },
      {
        "kind": "paragraph",
        "text": "Yes, I want to connect with PreXion today so I can get:"
      },
      {
        "kind": "list",
        "text": "Clarity on how to earn a healthy return on investment and save $10,000 on large-FOV CBCT."
      },
      {
        "kind": "list",
        "text": "A viewpoint on how to further offer patients the knowledge and confidence needed to increase practice-wide case acceptance."
      },
      {
        "kind": "list",
        "text": "A complimentary in-person demo of the PreXion Explorer EX CBCT."
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“We chose PreXion based on the PreXion specifications, low radiation, and state of the art imaging. We are excited to be able to better diagnose periodontal disease and treatment plan for implants. In addition, we were very pleased by the training provided by PreXion which has been vital to help us learn how to use our CBCT to the fullest.”"
      },
      {
        "kind": "paragraph",
        "text": "– DR. RICHARD NEWHART, PERIODONTIST"
      },
      {
        "kind": "paragraph",
        "text": "“With the PreXion CBCT, I now have the ability to comprehensively diagnose, plan, and treat every patient with confidence and accuracy. This technology directly impacts everything from sinus lifts, implant placement, bone grafting, surgical extractions, and more. This is absolutely the most valuable diagnostic tool in my practice.”"
      },
      {
        "kind": "paragraph",
        "text": "– DR. ROBERT WALINCHUS"
      },
      {
        "kind": "paragraph",
        "text": "“The ability to visualize the bone/root relationship is mission critical for our practice to better service our patients. The PreXion CBCT clearly shows the limitations of orthodontic tooth movement. I can’t imagine practicing without it!”"
      },
      {
        "kind": "paragraph",
        "text": "– DR. JEFFREY C. MILLER"
      },
      {
        "kind": "paragraph",
        "text": "PreXion delivers precision imaging solutions to dentistry and specialty practices across the United States and is best known for top-quality imaging solutions, an unmatched commitment to education and excellent service. Learn more at www.prexion.com ."
      }
    ],
    "callsToAction": "- Telefone: [855-PREXION](tel:855PREXION) - Suporte: [(650) 212-0314](tel:6502120314) - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110 - Ação: GET ACCESS NOW (eBook) - Ação: DOWNLOAD NOW (brochure) - Ação: Yes, I want to connect with PreXion today",
    "downloads": [
      "https://www.prexion.com/wp-content/uploads/2024/02/PRE-Explorer-EX-ProductBrochure-SinglePages-NoCeph.pdf",
      "https://www.prexion.com/wp-content/uploads/2024/03/PreXion-BeMoreProfitableMoreQuickly.pdf"
    ],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "GET ACCESS NOW",
        "url": "https://www.prexion.com/wp-content/uploads/2024/03/PreXion-BeMoreProfitableMoreQuickly.pdf"
      },
      {
        "label": "DOWNLOAD NOW",
        "url": "https://www.prexion.com/wp-content/uploads/2024/02/PRE-Explorer-EX-ProductBrochure-SinglePages-NoCeph.pdf"
      },
      {
        "label": "www.prexion.com",
        "url": "http://www.prexion.com"
      }
    ],
    "images": [
      {
        "alt": "Explorer EX CBCT Scanner (LP)",
        "url": "/manus-storage/710d64e2ffa6-PRE-Step-1_bd0991c7.png"
      },
      {
        "alt": "Explorer EX CBCT Scanner (LP)",
        "url": "/manus-storage/96d2408c671b-PRE-eBook-Q1-2024-Cover_40e3db31.jpg"
      },
      {
        "alt": "Explorer EX CBCT Scanner (LP)",
        "url": "/manus-storage/a021ec338669-PRE-Step-2_f3f01303.png"
      },
      {
        "alt": "Explorer EX CBCT Scanner (LP)",
        "url": "/manus-storage/3c7c2a93b31b-Brochure-Cover_422a9da3.jpg"
      },
      {
        "alt": "Explorer EX CBCT Scanner (LP)",
        "url": "/manus-storage/e8e59e98a1b7-PRE-Step-3_bcd65032.png"
      }
    ],
    "migrationAction": "consolidate",
    "notes": "A página é uma landing page voltada para conversão do produto Explorer EX CBCT, oferecendo um desconto de $10.000. Contém links para download de um eBook e uma brochura. A estrutura apresenta duplicação do bloco de rodapé/contato no conteúdo extraído. Como é uma página focada no produto, pode ser consolidada na página principal do Explorer EX."
  },
  "/discover-the-prexion-3d-intraoral-sensor": {
    "sourceUrl": "https://www.prexion.com/discover-the-prexion-3d-intraoral-sensor/",
    "route": "/discover-the-prexion-3d-intraoral-sensor",
    "canonicalTarget": "/product/evolve-sensor",
    "title": "Prexion 3D Intraoral Sensor (LP)",
    "type": "landing-page",
    "relevance": "high",
    "summary": "Evolve Intraoral Sensor O Evolve Intraoral Sensor é um sensor de imagem digital intraoral de precisão que oferece imagens de alta definição para diagnósticos precisos e seguros. Ele otimiza o fluxo de trabalho de radiografia intraoral e gerencia eficientemente as imagens dos pacientes. Nota: Este bloco aparece duplicado no topo da página . Get started with imaging at a manageable price point. Ready to increase production and save now? Chamada para agendar uma demonstração com um especialista em imagem para explorar a adição da tecnologia de sensor intraoral na clínica. Why the Evolve Intraoral Sensor? Apresenta o Evolve IOS como um scanner intraoral portátil e ergonômico, pesando apenas 150 gramas. Possui inter",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Evolve Intraoral Sensor Our newly launched Evolve Intraoral Sensor is the ultimate evolution of your imaging capabilities. This precision intraoral dental digital imaging sensor, offers high-definition images, providing you with the precision you need for accurate and safer diagnoses. Stay ahead in the dental field with seamless connectivity that optimizes your intraoral radiography workflow and efficiently manages patient images. Evolve Intraoral Sensor Our newly launched Evolve Intraoral Sensor is the ultimate evolution of your imaging capabilities. This precision intraoral dental digital imaging sensor, offers high-definition images, providing you with the precision you need for accurate and safer diagnoses. Stay ahead in the dental field with seamless connectivity that optimizes your intraoral radiography workflow and efficiently manages patient images. Get started with imaging at a manageable price point. Ready to increase production and save now? Yes, I want to schedule a demo with an imaging specialist to explore adding intraoral sensor technology to my practice. Why the Evolve Intraoral Sensor? Introducing the Evolve IOS, a portable and ergonomic intraoral scanner. Weighing only 150 grams, it emerges as one of the market’s lightest options. The technology’s user-friendly interface enhances workflow simplicity, efficiency and productivity. With the Evolve IOS, you can conduct precise and agile scans for various applications, including study models, orthodontic aligners, prostheses, myorelaxant plaques and more. Product Features Compatibility The Evolve Sensor is compatible with any available X-ray equipment on the market. Easy Cable Replacement The Evolve Sensor uses a USB 2.0 cable that is easy to replace (3 meters long), and has an internal silicone protection system that makes it more resistant and robust than other products. Save Money Stop wasting money on film and chemicals. The Evolve Sensor is the most cost-effective solution. Save Time While the analogue system takes about five minutes to capture and develop an image, with the Evolve Sensor it takes about 5 seconds. Sharper Images Capture high-definition images in real time. With 25 (theoretical) line pairs and advanced image processing features, you get sharp images for the best diagnosis. Cesium Lodide Technology The Evolve Sensor is based on Cesium Lodide technology found in high-definition CT scanners –for images with high diagnostic power. Software Features Organized Images Register your patients, capture and organize all the images in seconds. With the Evolve Sensor you can quickly find, access and share images. Unlimited Licenses The Evolve Sensor software includes unlimited licenses and can be installed on multiple computers*. Save the images in a folder on the network and access them from anywhere. Share Images and Diagnostics Save images in various formats, such as TFIF, BITMAP, PNG, DCIOM and JPG. Generate PDF reports and instantly share them with your colleagues who following up on the treatment, or your clients, via email. Impress Your Patients The Evolve Sensor takes your practice into the future. Impress your patients by demonstrating the treatment to be done in detail and compare the pre- and post-procedure images. Full Featured The Evolve Sensor software offers a wide range of user-friendly tools such as: rotation, zoom, brightness, contrast and gamma adjustment, positive/negative color adjustment, high-relief, text insertion, arrows, circles, area selection and cropping, angle and segment measurement, a report/diagnostic bar, odontogram, and full-screen image comparison. Request a Demo Computer Configuration (Minimum Requirements) Operating system: Windows 7or superior CPU: Intel Core i3 3.0 GHz or superior RAM: 4GB DDR2 SDRAM HDD: 500 GB or larger PCI; NCI; Video; USB Connector: X2 USB 2.0 Monitor Resolution: 1024 × 768 What is the Industry Saying? What is the Industry Saying? “When we began looking at cone beam systems, medical CT scans were our gold standard. After several months of evaluating various systems, the PreXion 3D CBCT was the only one that provided us with the same high-quality images as a medical CT, with much less radiation. That truly was the deciding factor in our purchase decision.” – EDWARD S. KATZ, DDS"
      },
      {
        "kind": "heading",
        "text": "Evolve Intraoral Sensor"
      },
      {
        "kind": "paragraph",
        "text": "Our newly launched Evolve Intraoral Sensor is the ultimate evolution of your imaging capabilities. This precision intraoral dental digital imaging sensor, offers high-definition images, providing you with the precision you need for accurate and safer diagnoses. Stay ahead in the dental field with seamless connectivity that optimizes your intraoral radiography workflow and efficiently manages patient images."
      },
      {
        "kind": "heading",
        "text": "Get started with imaging at a manageable price point."
      },
      {
        "kind": "heading",
        "text": "Ready to increase production and save now?"
      },
      {
        "kind": "paragraph",
        "text": "Yes, I want to schedule a demo with an imaging specialist to explore adding intraoral sensor technology to my practice."
      },
      {
        "kind": "heading",
        "text": "Why the Evolve Intraoral Sensor?"
      },
      {
        "kind": "paragraph",
        "text": "Introducing the Evolve IOS, a portable and ergonomic intraoral scanner. Weighing only 150 grams, it emerges as one of the market’s lightest options. The technology’s user-friendly interface enhances workflow simplicity, efficiency and productivity. With the Evolve IOS, you can conduct precise and agile scans for various applications, including study models, orthodontic aligners, prostheses, myorelaxant plaques and more."
      },
      {
        "kind": "heading",
        "text": "Product Features"
      },
      {
        "kind": "paragraph",
        "text": "Compatibility"
      },
      {
        "kind": "paragraph",
        "text": "The Evolve Sensor is compatible with any available X-ray equipment on the market."
      },
      {
        "kind": "paragraph",
        "text": "Easy Cable Replacement"
      },
      {
        "kind": "paragraph",
        "text": "The Evolve Sensor uses a USB 2.0 cable that is easy to replace (3 meters long), and has an internal silicone protection system that makes it more resistant and robust than other products."
      },
      {
        "kind": "paragraph",
        "text": "Save Money"
      },
      {
        "kind": "paragraph",
        "text": "Stop wasting money on film and chemicals. The Evolve Sensor is the most cost-effective solution."
      },
      {
        "kind": "paragraph",
        "text": "Save Time"
      },
      {
        "kind": "paragraph",
        "text": "While the analogue system takes about five minutes to capture and develop an image, with the Evolve Sensor it takes about 5 seconds."
      },
      {
        "kind": "paragraph",
        "text": "Sharper Images"
      },
      {
        "kind": "paragraph",
        "text": "Capture high-definition images in real time. With 25 (theoretical) line pairs and advanced image processing features, you get sharp images for the best diagnosis."
      },
      {
        "kind": "paragraph",
        "text": "Cesium Lodide Technology"
      },
      {
        "kind": "paragraph",
        "text": "The Evolve Sensor is based on Cesium Lodide technology found in high-definition CT scanners –for images with high diagnostic power."
      },
      {
        "kind": "heading",
        "text": "Software Features"
      },
      {
        "kind": "paragraph",
        "text": "Organized Images"
      },
      {
        "kind": "paragraph",
        "text": "Register your patients, capture and organize all the images in seconds. With the Evolve Sensor you can quickly find, access and share images."
      },
      {
        "kind": "paragraph",
        "text": "Unlimited Licenses"
      },
      {
        "kind": "paragraph",
        "text": "The Evolve Sensor software includes unlimited licenses and can be installed on multiple computers*. Save the images in a folder on the network and access them from anywhere."
      },
      {
        "kind": "paragraph",
        "text": "Share Images and Diagnostics"
      },
      {
        "kind": "paragraph",
        "text": "Save images in various formats, such as TFIF, BITMAP, PNG, DCIOM and JPG. Generate PDF reports and instantly share them with your colleagues who following up on the treatment, or your clients, via email."
      },
      {
        "kind": "paragraph",
        "text": "Impress Your Patients"
      },
      {
        "kind": "paragraph",
        "text": "The Evolve Sensor takes your practice into the future. Impress your patients by demonstrating the treatment to be done in detail and compare the pre- and post-procedure images."
      },
      {
        "kind": "paragraph",
        "text": "Full Featured"
      },
      {
        "kind": "paragraph",
        "text": "The Evolve Sensor software offers a wide range of user-friendly tools such as: rotation, zoom, brightness, contrast and gamma adjustment, positive/negative color adjustment, high-relief, text insertion, arrows, circles, area selection and cropping, angle and segment measurement, a report/diagnostic bar, odontogram, and full-screen image comparison."
      },
      {
        "kind": "heading",
        "text": "Computer Configuration (Minimum Requirements)"
      },
      {
        "kind": "paragraph",
        "text": "Operating system: Windows 7or superior"
      },
      {
        "kind": "paragraph",
        "text": "CPU: Intel Core i3 3.0 GHz or superior"
      },
      {
        "kind": "paragraph",
        "text": "RAM: 4GB DDR2 SDRAM"
      },
      {
        "kind": "paragraph",
        "text": "HDD: 500 GB or larger"
      },
      {
        "kind": "paragraph",
        "text": "PCI; NCI; Video;"
      },
      {
        "kind": "paragraph",
        "text": "USB Connector: X2 USB 2.0"
      },
      {
        "kind": "paragraph",
        "text": "Monitor Resolution: 1024 × 768"
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“When we began looking at cone beam systems, medical CT scans were our gold standard. After several months of evaluating various systems, the PreXion 3D CBCT was the only one that provided us with the same high-quality images as a medical CT, with much less radiation. That truly was the deciding factor in our purchase decision.”"
      }
    ],
    "callsToAction": "- Request a Demo - Yes, I want to schedule a demo with an imaging specialist to explore adding intraoral sensor technology to my practice. - Contact Us: [855-PREXION](tel:855PREXION) - Client Support: [(650) 212-0314](tel:6502120314) - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.dentalcare.com/en-us/ce-courses/ce559/overview-of-intraoral-image-receptors",
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "intraoral radiography",
        "url": "https://www.dentalcare.com/en-us/ce-courses/ce559/overview-of-intraoral-image-receptors"
      }
    ],
    "images": [],
    "migrationAction": "create",
    "notes": "A página apresenta duplicação no texto introdutório (\"Evolve Intraoral Sensor\") e no rodapé (\"EXPLORE:\"). Há um erro de digitação em \"Cesium Lodide\" (deveria ser Cesium Iodide). Como é uma landing page de produto (Evolve Intraoral Sensor), o conteúdo é relevante e deve ser migrado para uma página de produto dedicada no novo site."
  },
  "/distributor-locations": {
    "sourceUrl": "https://www.prexion.com/distributor-locations/",
    "route": "/distributor-locations",
    "canonicalTarget": "/distributors",
    "title": "Distributor Locations",
    "type": "sales",
    "relevance": "medium",
    "summary": "DISTRIBUTOR LOCATIONS Find a Distributor National coverage through trusted dental industry distribution partnerships. Contact us to find the right dealer for your needs. Practicing dental professionals only. Others should reach out to PreXion directly by calling 650 212-0300. Experience True Clarity & Precision Schedule a demo today.",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "DISTRIBUTOR LOCATIONS Find a Distributor National coverage through trusted dental industry distribution partnerships. Contact us to find the right dealer for your needs. Practicing dental professionals only. Others should reach out to PreXion directly by calling (650) 212-0300 . Experience True Clarity & Precision Schedule a demo today. REQUEST A DEMO"
      },
      {
        "kind": "heading",
        "text": "DISTRIBUTOR LOCATIONS"
      },
      {
        "kind": "heading",
        "text": "Find a Distributor"
      },
      {
        "kind": "heading",
        "text": "National coverage through trusted dental industry distribution partnerships."
      },
      {
        "kind": "paragraph",
        "text": "Practicing dental professionals only. Others should reach out to PreXion directly by calling (650) 212-0300 ."
      },
      {
        "kind": "heading",
        "text": "Experience True Clarity & Precision"
      },
      {
        "kind": "heading",
        "text": "Schedule a demo today."
      }
    ],
    "callsToAction": "- Call (650) 212-0300 - Request a demo (https://www.prexion.com/request-a-demo/) - Contact Us: 855-PREXION - Client Support: (650) 212-0314",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "(650) 212-0300",
        "url": "tel:6502120300"
      },
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      }
    ],
    "images": [],
    "migrationAction": "consolidate",
    "notes": "Página muito simples sem lista real de distribuidores, apenas orientando a entrar em contato por telefone. Recomenda-se consolidar na página de contato geral."
  },
  "/download-be-more-profitable-more-quickly": {
    "sourceUrl": "https://www.prexion.com/download-be-more-profitable-more-quickly/",
    "route": "/download-be-more-profitable-more-quickly",
    "canonicalTarget": "/download-be-more-profitable-more-quickly",
    "title": "Download – Be More Profitable More Quickly",
    "type": "landing-page",
    "relevance": "medium",
    "summary": "DATA-DRIVEN EBOOK Study Shows Emerging Cone-Beam Computed Tomography CBCT and Imaging Systems Allow Dentistry and Specialty Practices to Be More Profitable More Quickly Compared to Standard 2D Imaging Technology PreXion recently surveyed dentists and dental specialists across the United States to determine current perceptions on cost analysis from investment to return on Cone-Beam Computed Tomography CBCT and imaging systems as well as emerging ways to increase profitability on such investments in a shorter time. Given economic pressures on practices today such as rising costs of supplies and increased competition, it’s not surprising that the lower-initial-investment options like the intraoral digital imaging ",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "DATA-DRIVEN EBOOK Study Shows Emerging Cone-Beam Computed Tomography (CBCT) and Imaging Systems Allow Dentistry and Specialty Practices to Be More Profitable More Quickly Compared to Standard 2D Imaging Technology PreXion recently surveyed dentists and dental specialists across the United States to determine current perceptions on cost analysis from investment to return on Cone-Beam Computed Tomography (CBCT) and imaging systems as well as emerging ways to increase profitability on such investments in a shorter time. Given economic pressures on practices today such as rising costs of supplies and increased competition, it’s not surprising that the lower-initial-investment options like the intraoral digital imaging sensor and standard intraoral scanner ranked at higher importance to your peers than the standard 3D CBCT system. Indeed, in today’s market there are more low-cost entry points to advanced imaging for the modern practice. If you are considering upgrading your practice’s CBCT and imaging systems, you will want to be equipped with all the latest insights into how best to earn a return on your investments. In this eBook, we will cover data from your peers in dentistry and specialty practice on these topics: Common Myths about CBCT Imaging in Dentistry and Specialty Practices The 2D Advantage: Your Peers’ Insights on Using 2D Panoramic Imaging The 3D Advantage: Your Peers’ Insights on Using 3D CBCT Imaging The Intraoral Sensor Advantage: Your Peers’ Insights on Using an Intraoral Digital Imaging Sensor Increasing Profitability More Quickly with Emerging Cone-Beam Computed Tomography (CBCT) and Imaging Systems Conclusion: How Could CBCT Imaging Companies Be More Helpful to the Dental Profession Overall? PreXion recently surveyed dentists and dental specialists across the United States to determine current perceptions on cost analysis from investment to return on Cone-Beam Computed Tomography (CBCT) and imaging systems as well as emerging ways to increase profitability on such investments in a shorter time. Given economic pressures on practices today such as rising costs of supplies and increased competition, it’s not surprising that the lower-initial-investment options like the intraoral digital imaging sensor and standard intraoral scanner ranked at higher importance to your peers than the standard 3D CBCT system. Indeed, in today’s market there are more low-cost entry points to advanced imaging for the modern practice. If you are considering upgrading your practice’s CBCT and imaging systems, you will want to be equipped with all the latest insights into how best to earn a return on your investments. In this eBook, we will cover data from your peers in dentistry and specialty practice on these topics: Common Myths about CBCT Imaging in Dentistry and Specialty Practices The 2D Advantage: Your Peers’ Insights on Using 2D Panoramic Imaging The 3D Advantage: Your Peers’ Insights on Using 3D CBCT Imaging The Intraoral Sensor Advantage: Your Peers’ Insights on Using an Intraoral Digital Imaging Sensor Increasing Profitability More Quickly with Emerging Cone-Beam Computed Tomography (CBCT) and Imaging Systems Conclusion: How Could CBCT Imaging Companies Be More Helpful to the Dental Profession Overall? Download the Full eBook"
      },
      {
        "kind": "heading",
        "text": "Study Shows Emerging Cone-Beam Computed Tomography (CBCT) and Imaging Systems Allow Dentistry and Specialty Practices to Be More Profitable More Quickly Compared to Standard 2D Imaging Technology"
      },
      {
        "kind": "paragraph",
        "text": "PreXion recently surveyed dentists and dental specialists across the United States to determine current perceptions on cost analysis from investment to return on Cone-Beam Computed Tomography (CBCT) and imaging systems as well as emerging ways to increase profitability on such investments in a shorter time."
      },
      {
        "kind": "paragraph",
        "text": "Given economic pressures on practices today such as rising costs of supplies and increased competition, it’s not surprising that the lower-initial-investment options like the intraoral digital imaging sensor and standard intraoral scanner ranked at higher importance to your peers than the standard 3D CBCT system. Indeed, in today’s market there are more low-cost entry points to advanced imaging for the modern practice."
      },
      {
        "kind": "paragraph",
        "text": "If you are considering upgrading your practice’s CBCT and imaging systems, you will want to be equipped with all the latest insights into how best to earn a return on your investments. In this eBook, we will cover data from your peers in dentistry and specialty practice on these topics:"
      },
      {
        "kind": "list",
        "text": "Common Myths about CBCT Imaging in Dentistry and Specialty Practices"
      },
      {
        "kind": "list",
        "text": "The 2D Advantage: Your Peers’ Insights on Using 2D Panoramic Imaging"
      },
      {
        "kind": "list",
        "text": "The 3D Advantage: Your Peers’ Insights on Using 3D CBCT Imaging"
      },
      {
        "kind": "list",
        "text": "The Intraoral Sensor Advantage: Your Peers’ Insights on Using an Intraoral Digital Imaging Sensor"
      },
      {
        "kind": "list",
        "text": "Increasing Profitability More Quickly with Emerging Cone-Beam Computed Tomography (CBCT) and Imaging Systems"
      },
      {
        "kind": "list",
        "text": "Conclusion: How Could CBCT Imaging Companies Be More Helpful to the Dental Profession Overall?"
      },
      {
        "kind": "heading",
        "text": "Download the Full eBook"
      }
    ],
    "callsToAction": "- Download the Full eBook - Contact Us: 855-PREXION - Client Support: (650) 212-0314",
    "downloads": [],
    "externalLinks": [
      "https://careers.jobscore.com/careers/prexioninc",
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [],
    "images": [
      {
        "alt": "Download – Be More Profitable More Quickly",
        "url": "/manus-storage/96d2408c671b-PRE-eBook-Q1-2024-Cover_40e3db31.jpg"
      },
      {
        "alt": "Download – Be More Profitable More Quickly",
        "url": "/manus-storage/96d2408c671b-PRE-eBook-Q1-2024-Cover_40e3db31.jpg"
      }
    ],
    "migrationAction": "consolidate",
    "notes": "A página apresenta o conteúdo duplicado (o texto sobre o eBook é repetido duas vezes) e o rodapé também está duplicado. Não há um link real para o download do eBook, sugerindo que um formulário pode estar faltando ou quebrado na extração de texto. É uma landing page para download de eBook. Recomenda-se consolidar em uma nova página de recursos ou consertar o formulário de download."
  },
  "/download-dental-professionals-insights-on-precision-imaging-excellence": {
    "sourceUrl": "https://www.prexion.com/download-dental-professionals-insights-on-precision-imaging-excellence/",
    "route": "/download-dental-professionals-insights-on-precision-imaging-excellence",
    "canonicalTarget": "/download-dental-professionals-insights-on-precision-imaging-excellence",
    "title": "Download – Dental Professionals’ Insights on Precision Imaging Excellence",
    "type": "landing-page",
    "relevance": "medium",
    "summary": "Dental Professionals’ Insights on Precision Imaging Excellence Página de landing Data-Driven eBook baseada em uma pesquisa da PreXion com dentistas e especialistas sobre o significado de \"precision imaging excellence\". A pesquisa incluiu dentistas gerais, ortodontistas, endodontistas, cirurgiões orais, etc., de práticas solo 50% , multi-location 42% e DSO 8% . O eBook cobre: - Definição de “Precision Imaging Excellence” - Importância de um lineup completo de recursos 2D/3D - Opiniões de colegas sobre a importância - Pontos fortes e fracos de várias tecnologias de imagem - Vantagens de liderar uma prática com excelência em imagem - Tipos de soluções de imagem dental Download the Full eBook Seção que contém o for",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "DATA-DRIVEN EBOOK Dental Professionals’ Insights on Precision Imaging Excellence PreXion recently surveyed dentists and dental specialists across the nation to gather insights on what “precision imaging excellence” means in dentistry. The respondent pool included primarily general dentists as well as orthodontists, endodontists, oral surgeons, prosthodontists, pedodontists, dental hygienists and dental assistants. While 50% of participants worked in solo practices, 42% served in multi-location practices, and 8% hailed from DSO-supported practices. Drawing on the resulting data from the study, this eBook covers: “Precision Imaging Excellence” Defined Insights on the Importance of a Full Lineup of 2D/3D Features Your Peers on the Importance of Precision Imaging Excellence Strengths and Weaknesses of Various Imaging Technologies According to Your Peers Insights on the Advantages of Leading a Practice Offering Precision Imaging Excellence Insights on Types of Dental Imaging Solutions Fill out the form below to download the full eBook. PreXion recently surveyed dentists and dental specialists across the nation to gather insights on what “precision imaging excellence” means in dentistry. The respondent pool included primarily general dentists as well as orthodontists, endodontists, oral surgeons, prosthodontists, pedodontists, dental hygienists and dental assistants. While 50% of participants worked in solo practices, 42% served in multi-location practices, and 8% hailed from DSO-supported practices. Drawing on the resulting data from the study, this eBook covers: “Precision Imaging Excellence” Defined Insights on the Importance of a Full Lineup of 2D/3D Features Your Peers on the Importance of Precision Imaging Excellence Strengths and Weaknesses of Various Imaging Technologies According to Your Peers Insights on the Advantages of Leading a Practice Offering Precision Imaging Excellence Insights on Types of Dental Imaging Solutions Fill out the form below to download the full eBook. Download the Full eBook"
      },
      {
        "kind": "heading",
        "text": "Dental Professionals’ Insights on Precision Imaging Excellence"
      },
      {
        "kind": "paragraph",
        "text": "PreXion recently surveyed dentists and dental specialists across the nation to gather insights on what “precision imaging excellence” means in dentistry."
      },
      {
        "kind": "paragraph",
        "text": "The respondent pool included primarily general dentists as well as orthodontists, endodontists, oral surgeons, prosthodontists, pedodontists, dental hygienists and dental assistants. While 50% of participants worked in solo practices, 42% served in multi-location practices, and 8% hailed from DSO-supported practices."
      },
      {
        "kind": "paragraph",
        "text": "Drawing on the resulting data from the study, this eBook covers:"
      },
      {
        "kind": "list",
        "text": "“Precision Imaging Excellence” Defined"
      },
      {
        "kind": "list",
        "text": "Insights on the Importance of a Full Lineup of 2D/3D Features"
      },
      {
        "kind": "list",
        "text": "Your Peers on the Importance of Precision Imaging Excellence"
      },
      {
        "kind": "list",
        "text": "Strengths and Weaknesses of Various Imaging Technologies According to Your Peers"
      },
      {
        "kind": "list",
        "text": "Insights on the Advantages of Leading a Practice Offering Precision Imaging Excellence"
      },
      {
        "kind": "list",
        "text": "Insights on Types of Dental Imaging Solutions"
      },
      {
        "kind": "paragraph",
        "text": "Fill out the form below to download the full eBook."
      },
      {
        "kind": "heading",
        "text": "Download the Full eBook"
      }
    ],
    "callsToAction": "- Formulário: \"Fill out the form below to download the full eBook\" - Telefone: 855-PREXION - Telefone de Suporte: (650) 212-0314 - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [],
    "images": [
      {
        "alt": "Download – Dental Professionals’ Insights on Precision Imaging Excellence",
        "url": "/manus-storage/e11216173a71-Prexion-Dental-Professionals-Insights-onPrecision-Imaging-Excellence-eBook-Cover_9d7f147d.jpg"
      },
      {
        "alt": "Download – Dental Professionals’ Insights on Precision Imaging Excellence",
        "url": "/manus-storage/e11216173a71-Prexion-Dental-Professionals-Insights-onPrecision-Imaging-Excellence-eBook-Cover_9d7f147d.jpg"
      }
    ],
    "migrationAction": "redirect",
    "notes": "Página de landing para download de eBook sobre \"Precision Imaging Excellence\". O texto principal está duplicado na extração. Há menção a um formulário (\"Fill out the form below\"), mas o link direto para o PDF não está exposto na página (provavelmente é enviado por e-mail ou redirecionado após o preenchimento). Recomenda-se redirecionar para a nova central de recursos ou manter como landing page caso a campanha ainda seja ativa."
  },
  "/download-ebook-library": {
    "sourceUrl": "https://www.prexion.com/download-ebook-library/",
    "route": "/download-ebook-library",
    "canonicalTarget": "/resources",
    "title": "Download eBook Library (LP)",
    "type": "resource",
    "relevance": "medium",
    "summary": "eBooks: Deep Intel Based Upon Survey Data from Dentists and Dental Specialists Introdução à biblioteca de eBooks com base em dados de pesquisas realizadas com dentistas e especialistas em odontologia. Mitigating Practice Liability Exposure with Precision Treatment Planning and Diagnoses Resumo de um eBook focado no gerenciamento de responsabilidade da clínica através do planejamento preciso de tratamentos e diagnósticos. Destaca objetivos de aprendizado como aceitação de tratamento, diagnóstico preciso e superação de barreiras na implementação de tratamentos baseados em evidências. Overcoming the Rising Costs and Economic Challenges in Dentistry Resumo de um eBook focado nos desafios econômicos e aumento de cus",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "eBooks: Deep Intel Based Upon Survey Data from Dentists and Dental Specialists Mitigating Practice Liability Exposure with Precision Treatment Planning and Diagnoses PreXion recently surveyed dentists and dental specialists across the United States to determine how the industry is managing treatment planning and diagnostics as related to practice liability management. It’s no surprise that all your peers who participated in this study aligned on the fact that treatment planning is critical to achieving successful outcomes for patients. In this eBook, you also will uncover data from your peers in dentistry on practical ways to overcome these obstacles as well as education on these learning objectives: Achieving Reasonable Rates of Treatment Acceptance Building Confidence in Accurately Diagnosing Dental Conditions Navigating Patient-Doctor Disagreement in Treatment Planning Handling Patient Emergencies When Consent Is Not Possible Overcoming Barriers to Implementing Evidence-Based Treatment Planning Opportunities to Improve Treatment Planning, Diagnosing and Liability Management Get Your Ebook Overcoming the Rising Costs and Economic Challenges in Dentistry As of June 2022, prices of goods and services were up 9.1% from a year prior – the largest 12-month increase since 1981. As a result, overhead costs for dental practices skyrocketed while families tightened their belts and patient traffic decreased. According to a Delta Dental Institute survey, nearly half of adult Americans and 42% of dental and healthcare workers have delayed or canceled a dental appointment in the last two years based on concerns about rising prices. In this eBook, you will uncover data from your peers in dentistry on practical ways to overcome these obstacles as well as education on these learning objectives: Understand Inflation as Defined and Experienced by Dentists and Dental Specialists Today Learn the Factors Contributing to the Current Rate of Inflation Explore Inflation-related Challenges Specific to the Dental Industry and How to Overcome Those Challenges, including: Increasing Patient Flow at Minimum Cost Increasing Case Acceptance Rates Decreasing Overhead Expenses Attracting and Retaining Qualified Staff Overcoming Reduced Reimbursement Rates Get Your Ebook Even as patient flow slowly began to recover from the stark and sudden freeze precipitated by the initial rise of SARS-CoV-2, dentists faced continuing obstacles. To name a few, staffing difficulties worsened, PPE costs failed to return to normal levels and reimbursement rates remained low (an issue which far preceded the pandemic). As of June 2022, prices of goods and services were up 9.1% from a year prior – the largest 12-month increase since 1981. As a result, overhead costs for dental practices skyrocketed while families tightened their belts and patient traffic decreased. According to a Delta Dental Institute survey, nearly half of adult Americans and 42% of dental and healthcare workers have delayed or canceled a dental appointment in the last two years based on concerns about rising prices rather than COVID-19. The cost of dental care lags behind overall inflation hikes. According to Dental Tribune, “Data from the Consumer Price Index for August showed that the annual inflation rate for dental services was 4.7%. This figure is based on the price paid for dental services by patients and insurers and is well below the U.S. inflation rate for all items, which stands at 8.2%. In effect, this means that increases in the cost of running dental clinics are not being matched by increases in income.” Dental practices continue to operate with suppressed production dollar generation and dentists’ income as the result of the disproportionately low cost of care. Despite these challenges, dental professionals have reason to remain optimistic. In this text, the individual issues behind inflation and underearning are explored and offered solution with strategic action. Discover what CBCT can make possible for your practice. For many clinicians and practice owners, an investment in CBCT technology from PreXion can become profitable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to finance a product. CALCULATE YOUR SAVINGS What is the Industry Saying? What is the Industry Saying? “With the PreXion CBCT, I now have the ability to comprehensively diagnose, plan, and treat every patient with confidence and accuracy. This technology directly impacts everything from sinus lifts, implant placement, bone grafting, surgical extractions, and more. This is absolutely the most valuable diagnostic tool in my practice.” – DR. ROBERT WALINCHUS Experience True Clarity & Precision Schedule a demo today. REQUEST A DEMO"
      },
      {
        "kind": "heading",
        "text": "eBooks: Deep Intel Based Upon Survey Data from Dentists and Dental Specialists"
      },
      {
        "kind": "heading",
        "text": "Mitigating Practice Liability Exposure with Precision Treatment Planning and Diagnoses"
      },
      {
        "kind": "paragraph",
        "text": "PreXion recently surveyed dentists and dental specialists across the United States to determine how the industry is managing treatment planning and diagnostics as related to practice liability management. It’s no surprise that all your peers who participated in this study aligned on the fact that treatment planning is critical to achieving successful outcomes for patients."
      },
      {
        "kind": "paragraph",
        "text": "In this eBook, you also will uncover data from your peers in dentistry on practical ways to overcome these obstacles as well as education on these learning objectives:"
      },
      {
        "kind": "list",
        "text": "Achieving Reasonable Rates of Treatment Acceptance"
      },
      {
        "kind": "list",
        "text": "Building Confidence in Accurately Diagnosing Dental Conditions"
      },
      {
        "kind": "list",
        "text": "Navigating Patient-Doctor Disagreement in Treatment Planning"
      },
      {
        "kind": "list",
        "text": "Handling Patient Emergencies When Consent Is Not Possible"
      },
      {
        "kind": "list",
        "text": "Overcoming Barriers to Implementing Evidence-Based Treatment Planning"
      },
      {
        "kind": "list",
        "text": "Opportunities to Improve Treatment Planning, Diagnosing and Liability Management"
      },
      {
        "kind": "heading",
        "text": "Overcoming the Rising Costs and Economic Challenges in Dentistry"
      },
      {
        "kind": "paragraph",
        "text": "As of June 2022, prices of goods and services were up 9.1% from a year prior – the largest 12-month increase since 1981. As a result, overhead costs for dental practices skyrocketed while families tightened their belts and patient traffic decreased. According to a Delta Dental Institute survey, nearly half of adult Americans and 42% of dental and healthcare workers have delayed or canceled a dental appointment in the last two years based on concerns about rising prices."
      },
      {
        "kind": "paragraph",
        "text": "In this eBook, you will uncover data from your peers in dentistry on practical ways to overcome these obstacles as well as education on these learning objectives:"
      },
      {
        "kind": "paragraph",
        "text": "Understand Inflation as Defined and Experienced by Dentists and Dental Specialists Today"
      },
      {
        "kind": "paragraph",
        "text": "Learn the Factors Contributing to the Current Rate of Inflation"
      },
      {
        "kind": "paragraph",
        "text": "Explore Inflation-related Challenges Specific to the Dental Industry and How to Overcome Those Challenges, including:"
      },
      {
        "kind": "list",
        "text": "Increasing Patient Flow at Minimum Cost"
      },
      {
        "kind": "list",
        "text": "Increasing Case Acceptance Rates"
      },
      {
        "kind": "list",
        "text": "Decreasing Overhead Expenses"
      },
      {
        "kind": "list",
        "text": "Attracting and Retaining Qualified Staff"
      },
      {
        "kind": "list",
        "text": "Overcoming Reduced Reimbursement Rates"
      },
      {
        "kind": "paragraph",
        "text": "Even as patient flow slowly began to recover from the stark and sudden freeze precipitated by the initial rise of SARS-CoV-2, dentists faced continuing obstacles. To name a few, staffing difficulties worsened, PPE costs failed to return to normal levels and reimbursement rates remained low (an issue which far preceded the pandemic)."
      },
      {
        "kind": "paragraph",
        "text": "As of June 2022, prices of goods and services were up 9.1% from a year prior – the largest 12-month increase since 1981. As a result, overhead costs for dental practices skyrocketed while families tightened their belts and patient traffic decreased. According to a Delta Dental Institute survey, nearly half of adult Americans and 42% of dental and healthcare workers have delayed or canceled a dental appointment in the last two years based on concerns about rising prices rather than COVID-19."
      },
      {
        "kind": "paragraph",
        "text": "The cost of dental care lags behind overall inflation hikes. According to Dental Tribune, “Data from the Consumer Price Index for August showed that the annual inflation rate for dental services was 4.7%. This figure is based on the price paid for dental services by patients and insurers and is well below the U.S. inflation rate for all items, which stands at 8.2%. In effect, this means that increases in the cost of running dental clinics are not being matched by increases in income.” Dental practices continue to operate with suppressed production dollar generation and dentists’ income as the result of the disproportionately low cost of care."
      },
      {
        "kind": "paragraph",
        "text": "Despite these challenges, dental professionals have reason to remain optimistic. In this text, the individual issues behind inflation and underearning are explored and offered solution with strategic action."
      },
      {
        "kind": "heading",
        "text": "Discover what CBCT can make possible for your practice."
      },
      {
        "kind": "paragraph",
        "text": "For many clinicians and practice owners, an investment in CBCT technology from PreXion can become profitable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to finance a product."
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“With the PreXion CBCT, I now have the ability to comprehensively diagnose, plan, and treat every patient with confidence and accuracy. This technology directly impacts everything from sinus lifts, implant placement, bone grafting, surgical extractions, and more. This is absolutely the most valuable diagnostic tool in my practice.”"
      },
      {
        "kind": "heading",
        "text": "Experience True Clarity & Precision"
      },
      {
        "kind": "heading",
        "text": "Schedule a demo today."
      }
    ],
    "callsToAction": "- Get Your Ebook (Mitigating Practice Liability) - Get Your Ebook (Overcoming the Rising Costs) - CALCULATE YOUR SAVINGS - REQUEST A DEMO - Contact Us: 855-PREXION - Client Support: (650) 212-0314 - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "Get Your Ebook",
        "url": "https://www.prexion.com/success-mitigating-practice-liability-exposure-with-precision-treatment-planning-and-diagnoses/"
      },
      {
        "label": "Get Your Ebook",
        "url": "https://www.prexion.com/success-overcoming-the-rising-costs-and-economic-challenges-in-dentistry/"
      },
      {
        "label": "CALCULATE YOUR SAVINGS",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      }
    ],
    "images": [
      {
        "alt": "Download eBook Library (LP)",
        "url": "/manus-storage/1a4815528572-PRE-eBook-Q3-2023_6bcb7da1.jpg"
      },
      {
        "alt": "Download eBook Library (LP)",
        "url": "/manus-storage/3f6dc3e528c1-PRE-eBook-Q1-2023_6fb7bb66.jpg"
      },
      {
        "alt": "Download eBook Library (LP)",
        "url": "/manus-storage/3f6dc3e528c1-PRE-eBook-Q1-2023_6fb7bb66.jpg"
      }
    ],
    "migrationAction": "consolidate",
    "notes": "Página lista eBooks disponíveis. Contém dados de inflação de 2022 que estão um pouco desatualizados. Links para os eBooks apontam para páginas com prefixo \"success-\", sugerindo que esta página pode estar contornando o fluxo de captura de leads. Recomenda-se consolidar em uma nova central de recursos e revisar o fluxo de formulários."
  },
  "/download-how-your-peers-earn-roi-from-3d-cbct-scan-imaging-technology": {
    "sourceUrl": "https://www.prexion.com/download-how-your-peers-earn-roi-from-3d-cbct-scan-imaging-technology/",
    "route": "/download-how-your-peers-earn-roi-from-3d-cbct-scan-imaging-technology",
    "canonicalTarget": "/download-how-your-peers-earn-roi-from-3d-cbct-scan-imaging-technology",
    "title": "Download – How Your Peers Earn ROI from 3D CBCT Scan Imaging Technology",
    "type": "landing-page",
    "relevance": "high",
    "summary": "DATA-DRIVEN EBOOK The Complete Data-Driven Guide to How Your Peers Earn ROI from 3D CBCT Scan Imaging Technology PreXion surveyed over 100 dentists and specialists to gather insights on how they earn ROI on 3D CBCT imaging technology. The survey pool included General Dentists 66% , Oral Surgeons 16% , Orthodontists 12% , Endodontists 3% , Periodontists 2% , Prosthodontists 1% , and Pedodontists 1% . The eBook covers strategies, key factors driving ROI profitability, efficiency, productivity , methods to quantitatively and qualitatively measure ROI, and factors influencing the investment decision, such as higher interest rates and tax implications Section 179 . Download the Full eBook Section dedicated to provid",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "DATA-DRIVEN EBOOK The Complete Data-Driven Guide to How Your Peers Earn ROI from 3D CBCT Scan Imaging Technology PreXion recently surveyed more than one hundred dentists and dental specialists across the nation to gather insights on how they earn return on investment (ROI) on 3D CBCT imaging technology. The survey pool was comprised of 66% General Dentists, 16% Oral Surgeons, 12% Orthodontists, 3% Endodontists, 2% Periodontists, 1% Prosthodontists and 1% Pedodontists. 23% of respondents came from the Mid- Atlantic region of the United States, 16% from the Pacific, 15% from the South Atlantic, 15% from the East North Central, and 11% from the West South-Central regions. The remainder came from the Mountain, West North Central, New England and East Southwest regions. In this eBook, we detail strategies your peers shared, providing actionable insights and real-world examples to help you make great decisions about investing in 3D CBCT scan imaging technology with confidence you will earn a healthy return with enhanced diagnostic capability. This publication covers: The key factors that drive ROI for 3D CBCT scan imaging technology in dental practices Impact on your peers’ practice profitability, efficiency and productivity Strategies your peers use to maximize ROI from imaging technology How access to superior imaging technology re-energizes the dental team How to measure ROI for 3D CBCT scan imaging technology How your peers quantitatively measure ROI How your peers qualitatively measure ROI The importance of dental education for their teams in achieving ROI Factors that influenced your peers’ decision to invest in 3D CBCT scan imaging technology How your peers navigate higher interest rates Financial considerations The tax implication in Section 179: Depreciation PreXion recently surveyed more than one hundred dentists and dental specialists across the nation to gather insights on how they earn return on investment (ROI) on 3D CBCT imaging technology. The survey pool was comprised of 66% General Dentists, 16% Oral Surgeons, 12% Orthodontists, 3% Endodontists, 2% Periodontists, 1% Prosthodontists and 1% Pedodontists. 23% of respondents came from the Mid- Atlantic region of the United States, 16% from the Pacific, 15% from the South Atlantic, 15% from the East North Central, and 11% from the West South-Central regions. The remainder came from the Mountain, West North Central, New England and East Southwest regions. In this eBook, we detail strategies your peers shared, providing actionable insights and real-world examples to help you make great decisions about investing in 3D CBCT scan imaging technology with confidence you will earn a healthy return with enhanced diagnostic capability. This publication covers: The key factors that drive ROI for 3D CBCT scan imaging technology in dental practices Impact on your peers’ practice profitability, efficiency and productivity Strategies your peers use to maximize ROI from imaging technology How access to superior imaging technology re-energizes the dental team How to measure ROI for 3D CBCT scan imaging technology How your peers quantitatively measure ROI How your peers qualitatively measure ROI The importance of dental education for their teams in achieving ROI Factors that influenced your peers’ decision to invest in 3D CBCT scan imaging technology How your peers navigate higher interest rates Financial considerations The tax implication in Section 179: Depreciation Download the Full eBook"
      },
      {
        "kind": "heading",
        "text": "The Complete Data-Driven Guide to How Your Peers Earn ROI from 3D CBCT Scan Imaging Technology"
      },
      {
        "kind": "paragraph",
        "text": "PreXion recently surveyed more than one hundred dentists and dental specialists across the nation to gather insights on how they earn return on investment (ROI) on 3D CBCT imaging technology. The survey pool was comprised of 66% General Dentists, 16% Oral Surgeons, 12% Orthodontists, 3% Endodontists, 2% Periodontists, 1% Prosthodontists and 1% Pedodontists."
      },
      {
        "kind": "paragraph",
        "text": "23% of respondents came from the Mid- Atlantic region of the United States, 16% from the Pacific, 15% from the South Atlantic, 15% from the East North Central, and 11% from the West South-Central regions. The remainder came from the Mountain, West North Central, New England and East Southwest regions."
      },
      {
        "kind": "paragraph",
        "text": "In this eBook, we detail strategies your peers shared, providing actionable insights and real-world examples to help you make great decisions about investing in 3D CBCT scan imaging technology with confidence you will earn a healthy return with enhanced diagnostic capability."
      },
      {
        "kind": "paragraph",
        "text": "This publication covers:"
      },
      {
        "kind": "list",
        "text": "The key factors that drive ROI for 3D CBCT scan imaging technology in dental practices Impact on your peers’ practice profitability, efficiency and productivity Strategies your peers use to maximize ROI from imaging technology How access to superior imaging technology re-energizes the dental team"
      },
      {
        "kind": "list",
        "text": "Impact on your peers’ practice profitability, efficiency and productivity"
      },
      {
        "kind": "list",
        "text": "Strategies your peers use to maximize ROI from imaging technology"
      },
      {
        "kind": "list",
        "text": "How access to superior imaging technology re-energizes the dental team"
      },
      {
        "kind": "list",
        "text": "How to measure ROI for 3D CBCT scan imaging technology How your peers quantitatively measure ROI How your peers qualitatively measure ROI The importance of dental education for their teams in achieving ROI"
      },
      {
        "kind": "list",
        "text": "How your peers quantitatively measure ROI"
      },
      {
        "kind": "list",
        "text": "How your peers qualitatively measure ROI"
      },
      {
        "kind": "list",
        "text": "The importance of dental education for their teams in achieving ROI"
      },
      {
        "kind": "list",
        "text": "Factors that influenced your peers’ decision to invest in 3D CBCT scan imaging technology How your peers navigate higher interest rates Financial considerations The tax implication in Section 179: Depreciation"
      },
      {
        "kind": "list",
        "text": "How your peers navigate higher interest rates"
      },
      {
        "kind": "list",
        "text": "Financial considerations"
      },
      {
        "kind": "list",
        "text": "The tax implication in Section 179: Depreciation"
      },
      {
        "kind": "heading",
        "text": "Download the Full eBook"
      }
    ],
    "callsToAction": "- Download the Full eBook - Contact Us: [855-PREXION](tel:855PREXION) - Client Support: [(650) 212-0314](tel:6502120314)",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [],
    "images": [
      {
        "alt": "Download – How Your Peers Earn ROI from 3D CBCT Scan Imaging Technology",
        "url": "/manus-storage/0c013d67418d-PRE-Q4-eBook_e57dad13.jpg"
      },
      {
        "alt": "Download – How Your Peers Earn ROI from 3D CBCT Scan Imaging Technology",
        "url": "/manus-storage/0c013d67418d-PRE-Q4-eBook_e57dad13.jpg"
      }
    ],
    "migrationAction": "create",
    "notes": "Página de captura (landing page) para download de e-book. O texto principal está duplicado na própria página. Formulário de download não está visível no texto extraído, indicando possível renderização dinâmica ou necessidade de revisão do embed. Recomenda-se recriar a landing page com o formulário de captura integrado."
  },
  "/download-mitigating-practice-liability-exposure-with-precision-treatment-planning-and-diagnoses": {
    "sourceUrl": "https://www.prexion.com/download-mitigating-practice-liability-exposure-with-precision-treatment-planning-and-diagnoses/",
    "route": "/download-mitigating-practice-liability-exposure-with-precision-treatment-planning-and-diagnoses",
    "canonicalTarget": "/download-mitigating-practice-liability-exposure-with-precision-treatment-planning-and-diagnoses",
    "title": "Download – Mitigating Practice Liability Exposure with Precision Treatment Planning and Diagnoses",
    "type": "landing-page",
    "relevance": "medium",
    "summary": "Mitigating Practice Liability Exposure with Precision Treatment Planning and Diagnoses PreXion surveyed dentists across the US regarding treatment planning and diagnostics related to practice liability management. The study emphasizes that treatment planning is critical for successful patient outcomes. Factors Considered in Treatment Planning Respondents consider various factors when assessing risks and benefits: - 50% Patient’s overall health and oral health condition - 46% Alignment with the patient on treatment objectives - 46% Long-term prognosis of the proposed treatment - 38% Treatment complexity - 27% Patient compliance with past dental care - 23% Potential complications Learning Objectives The eBook pro",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "DATA-DRIVEN EBOOK Mitigating Practice Liability Exposure with Precision Treatment Planning and Diagnoses PreXion recently surveyed dentists and dental specialists across the United States to determine how the industry is managing treatment planning and diagnostics as related to practice liability management. It’s no surprise that all your peers who participated in this study aligned on the fact that treatment planning is critical to achieving successful outcomes for patients. When assessing the potential risks and benefits of a treatment plan, respondents considered these factors: 50% Patient’s overall health and oral health condition 46% Alignment with the patient on treatment objectives 38% Treatment complexity 46% Long-term prognosis of the proposed treatment 27% Patient compliance with past dental care 23% Potential complications In this eBook, you also will uncover data from your peers in dentistry on practical ways to overcome these obstacles as well as education on these learning objectives: Achieving Reasonable Rates of Treatment Acceptance Building Confidence in Accurately Diagnosing Dental Conditions Navigating Patient-Doctor Disagreement in Treatment Planning Handling Patient Emergencies When Consent Is Not Possible Overcoming Barriers to Implementing Evidence-Based Treatment Planning Opportunities to Improve Treatment Planning, Diagnosing and Liability Management PreXion recently surveyed dentists and dental specialists across the United States to determine how the industry is managing treatment planning and diagnostics as related to practice liability management. It’s no surprise that all your peers who participated in this study aligned on the fact that treatment planning is critical to achieving successful outcomes for patients. When assessing the potential risks and benefits of a treatment plan, respondents considered these factors: 50% Patient’s overall health and oral health condition 46% Alignment with the patient on treatment objectives 38% Treatment complexity 46% Long-term prognosis of the proposed treatment 27% Patient compliance with past dental care 23% Potential complications In this eBook, you also will uncover data from your peers in dentistry on practical ways to overcome these obstacles as well as education on these learning objectives: Achieving Reasonable Rates of Treatment Acceptance Building Confidence in Accurately Diagnosing Dental Conditions Navigating Patient-Doctor Disagreement in Treatment Planning Handling Patient Emergencies When Consent Is Not Possible Overcoming Barriers to Implementing Evidence-Based Treatment Planning Opportunities to Improve Treatment Planning, Diagnosing and Liability Management Download the Full eBook"
      },
      {
        "kind": "heading",
        "text": "Mitigating Practice Liability Exposure with Precision Treatment Planning and Diagnoses"
      },
      {
        "kind": "paragraph",
        "text": "PreXion recently surveyed dentists and dental specialists across the United States to determine how the industry is managing treatment planning and diagnostics as related to practice liability management. It’s no surprise that all your peers who participated in this study aligned on the fact that treatment planning is critical to achieving successful outcomes for patients."
      },
      {
        "kind": "paragraph",
        "text": "When assessing the potential risks and benefits of a treatment plan, respondents considered these factors:"
      },
      {
        "kind": "paragraph",
        "text": "50% Patient’s overall health and oral health condition"
      },
      {
        "kind": "paragraph",
        "text": "46% Alignment with the patient on treatment objectives"
      },
      {
        "kind": "paragraph",
        "text": "38% Treatment complexity"
      },
      {
        "kind": "paragraph",
        "text": "46% Long-term prognosis of the proposed treatment"
      },
      {
        "kind": "paragraph",
        "text": "27% Patient compliance with past dental care"
      },
      {
        "kind": "paragraph",
        "text": "23% Potential complications"
      },
      {
        "kind": "paragraph",
        "text": "In this eBook, you also will uncover data from your peers in dentistry on practical ways to overcome these obstacles as well as education on these learning objectives:"
      },
      {
        "kind": "list",
        "text": "Achieving Reasonable Rates of Treatment Acceptance"
      },
      {
        "kind": "list",
        "text": "Building Confidence in Accurately Diagnosing Dental Conditions"
      },
      {
        "kind": "list",
        "text": "Navigating Patient-Doctor Disagreement in Treatment Planning"
      },
      {
        "kind": "list",
        "text": "Handling Patient Emergencies When Consent Is Not Possible"
      },
      {
        "kind": "list",
        "text": "Overcoming Barriers to Implementing Evidence-Based Treatment Planning"
      },
      {
        "kind": "list",
        "text": "Opportunities to Improve Treatment Planning, Diagnosing and Liability Management"
      },
      {
        "kind": "heading",
        "text": "Download the Full eBook"
      }
    ],
    "callsToAction": "- [855-PREXION](tel:855PREXION) - [(650) 212-0314](tel:6502120314) - 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [],
    "images": [
      {
        "alt": "download the ebook",
        "url": "/manus-storage/1a4815528572-PRE-eBook-Q3-2023_6bcb7da1.jpg"
      },
      {
        "alt": "Download – Mitigating Practice Liability Exposure with Precision Treatment Planning and Diagnoses",
        "url": "/manus-storage/1a4815528572-PRE-eBook-Q3-2023_6bcb7da1.jpg"
      }
    ],
    "migrationAction": "consolidate",
    "notes": "A página apresenta o conteúdo de forma duplicada no corpo principal. É uma landing page para download de um eBook sobre mitigação de riscos de responsabilidade na prática odontológica. Recomenda-se consolidar com outras páginas de recursos/eBooks no novo site, possivelmente corrigindo a duplicação do texto. Não há link direto para o download do eBook no conteúdo extraído, sugerindo que um formulário possa estar ausente ou não renderizado."
  },
  "/download-overcoming-rising-costs-and-economic-challenges-in-dentistry": {
    "sourceUrl": "https://www.prexion.com/download-overcoming-rising-costs-and-economic-challenges-in-dentistry/",
    "route": "/download-overcoming-rising-costs-and-economic-challenges-in-dentistry",
    "canonicalTarget": "/download-overcoming-rising-costs-and-economic-challenges-in-dentistry",
    "title": "Download Overcoming Rising Costs and Economic Challenges in Dentistry",
    "type": "landing-page",
    "relevance": "medium",
    "summary": "Download Overcoming Rising Costs and Economic Challenges in Dentistry Overcoming the Rising Costs and Economic Challenges in Dentistry Este bloco descreve os desafios econômicos contínuos enfrentados pelos dentistas, como dificuldades de recrutamento, altos custos de EPIs e baixas taxas de reembolso, que foram exacerbados após o início da pandemia. Menciona que os custos operacionais dispararam enquanto o fluxo de pacientes diminuiu devido a preocupações com a inflação. O texto cita dados de 2022 sobre o aumento de preços e destaca que a inflação dos serviços odontológicos 4.7% ficou abaixo da inflação geral 8.2% , resultando em menor rentabilidade. O objetivo do eBook é oferecer soluções estratégicas para esse",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "DATA-DRIVEN EBOOK Overcoming the Rising Costs and Economic Challenges in Dentistry Even as patient flow slowly began to recover from the stark and sudden freeze precipitated by the initial rise of SARS-CoV-2, dentists faced continuing obstacles. To name a few, staffing difficulties worsened, PPE costs failed to return to normal levels and reimbursement rates remained low (an issue which far preceded the pandemic). As of June 2022, prices of goods and services were up 9.1% from a year prior – the largest 12-month increase since 1981. As a result, overhead costs for dental practices skyrocketed while families tightened their belts and patient traffic decreased. According to a Delta Dental Institute survey, nearly half of adult Americans and 42% of dental and healthcare workers have delayed or canceled a dental appointment in the last two years based on concerns about rising prices rather than COVID-19. The cost of dental care lags behind overall inflation hikes. According to Dental Tribune, “Data from the Consumer Price Index for August showed that the annual inflation rate for dental services was 4.7%. This figure is based on the price paid for dental services by patients and insurers and is well below the U.S. inflation rate for all items, which stands at 8.2%. In effect, this means that increases in the cost of running dental clinics are not being matched by increases in income.” Dental practices continue to operate with suppressed production dollar generation and dentists’ income as the result of the disproportionately low cost of care. Despite these challenges, dental professionals have reason to remain optimistic. In this text, the individual issues behind inflation and underearning are explored and offered solution with strategic action. Even as patient flow slowly began to recover from the stark and sudden freeze precipitated by the initial rise of SARS-CoV-2, dentists faced continuing obstacles. To name a few, staffing difficulties worsened, PPE costs failed to return to normal levels and reimbursement rates remained low (an issue which far preceded the pandemic). As of June 2022, prices of goods and services were up 9.1% from a year prior – the largest 12-month increase since 1981. As a result, overhead costs for dental practices skyrocketed while families tightened their belts and patient traffic decreased. According to a Delta Dental Institute survey, nearly half of adult Americans and 42% of dental and healthcare workers have delayed or canceled a dental appointment in the last two years based on concerns about rising prices rather than COVID-19. The cost of dental care lags behind overall inflation hikes. According to Dental Tribune, “Data from the Consumer Price Index for August showed that the annual inflation rate for dental services was 4.7%. This figure is based on the price paid for dental services by patients and insurers and is well below the U.S. inflation rate for all items, which stands at 8.2%. In effect, this means that increases in the cost of running dental clinics are not being matched by increases in income.” Dental practices continue to operate with suppressed production dollar generation and dentists’ income as the result of the disproportionately low cost of care. Despite these challenges, dental professionals have reason to remain optimistic. In this text, the individual issues behind inflation and underearning are explored and offered solution with strategic action. Download the Full eBook"
      },
      {
        "kind": "heading",
        "text": "Overcoming the Rising Costs and Economic Challenges in Dentistry"
      },
      {
        "kind": "paragraph",
        "text": "Even as patient flow slowly began to recover from the stark and sudden freeze precipitated by the initial rise of SARS-CoV-2, dentists faced continuing obstacles. To name a few, staffing difficulties worsened, PPE costs failed to return to normal levels and reimbursement rates remained low (an issue which far preceded the pandemic)."
      },
      {
        "kind": "paragraph",
        "text": "As of June 2022, prices of goods and services were up 9.1% from a year prior – the largest 12-month increase since 1981. As a result, overhead costs for dental practices skyrocketed while families tightened their belts and patient traffic decreased. According to a Delta Dental Institute survey, nearly half of adult Americans and 42% of dental and healthcare workers have delayed or canceled a dental appointment in the last two years based on concerns about rising prices rather than COVID-19."
      },
      {
        "kind": "paragraph",
        "text": "The cost of dental care lags behind overall inflation hikes. According to Dental Tribune, “Data from the Consumer Price Index for August showed that the annual inflation rate for dental services was 4.7%. This figure is based on the price paid for dental services by patients and insurers and is well below the U.S. inflation rate for all items, which stands at 8.2%. In effect, this means that increases in the cost of running dental clinics are not being matched by increases in income.” Dental practices continue to operate with suppressed production dollar generation and dentists’ income as the result of the disproportionately low cost of care."
      },
      {
        "kind": "paragraph",
        "text": "Despite these challenges, dental professionals have reason to remain optimistic. In this text, the individual issues behind inflation and underearning are explored and offered solution with strategic action."
      },
      {
        "kind": "heading",
        "text": "Download the Full eBook"
      }
    ],
    "callsToAction": "- Formulário para download de eBook (\"Download the Full eBook\") - Telefones de contato: 855-PREXION e (650) 212-0314 - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [],
    "images": [
      {
        "alt": "overcoming rising costs in dentistry",
        "url": "/manus-storage/3f6dc3e528c1-PRE-eBook-Q1-2023_6fb7bb66.jpg"
      },
      {
        "alt": "Download Overcoming Rising Costs and Economic Challenges in Dentistry",
        "url": "/manus-storage/3f6dc3e528c1-PRE-eBook-Q1-2023_6fb7bb66.jpg"
      }
    ],
    "migrationAction": "consolidate",
    "notes": "A página apresenta duplicação do conteúdo principal (o texto introdutório do eBook é repetido duas vezes na mesma página). Além disso, o rodapé (com links e contatos) também aparece duplicado no final. É uma landing page para download de eBook que deve ser consolidada na área de recursos do novo site, corrigindo as duplicações de texto."
  },
  "/downloadable-assets": {
    "sourceUrl": "https://www.prexion.com/downloadable-assets/",
    "route": "/downloadable-assets",
    "canonicalTarget": "/resources",
    "title": "Downloadable Assets",
    "type": "resource",
    "relevance": "high",
    "summary": "eBooks: Deep Intel Based Upon Survey Data from Dentists and Dental Specialists Apresenta um eBook baseado em pesquisa com mais de 100 dentistas e especialistas sobre como eles obtêm ROI com a tecnologia de imagem 3D CBCT. Detalha os dados demográficos dos entrevistados 66% clínicos gerais, 16% cirurgiões orais, etc. e sua distribuição regional nos EUA. O eBook cobre fatores que impulsionam o ROI, como medir o ROI quantitativa e qualitativamente e fatores que influenciaram a decisão de investimento taxas de juros, finanças, implicações fiscais . Dental Professionals’ Insights on Precision Imaging Excellence Descreve um eBook sobre o que significa \"excelência em imagem de precisão\" na odontologia, baseado em pesq",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "eBooks: Deep Intel Based Upon Survey Data from Dentists and Dental Specialists The Complete Data-Driven Guide to How Your Peers Earn ROI from 3D CBCT Scan Imaging Technology PreXion recently surveyed more than one hundred dentists and dental specialists across the nation to gather insights on how they earn return on investment (ROI) on 3D CBCT imaging technology. The survey pool was comprised of 66% General Dentists, 16% Oral Surgeons, 12% Orthodontists, 3% Endodontists, 2% Periodontists, 1% Prosthodontists and 1% Pedodontists. 23% of respondents came from the Mid- Atlantic region of the United States, 16% from the Pacific, 15% from the South Atlantic, 15% from the East North Central, and 11% from the West South-Central regions. The remainder came from the Mountain, West North Central, New England and East Southwest regions. In this eBook, we detail strategies your peers shared, providing actionable insights and real-world examples to help you make great decisions about investing in 3D CBCT scan imaging technology with confidence you will earn a healthy return with enhanced diagnostic capability. This publication covers: The key factors that drive ROI for 3D CBCT scan imaging technology in dental practices Impact on your peers’ practice profitability, efficiency and productivity Strategies your peers use to maximize ROI from imaging technology How access to superior imaging technology re-energizes the dental team How to measure ROI for 3D CBCT scan imaging technology How your peers quantitatively measure ROI How your peers qualitatively measure ROI The importance of dental education for their teams in achieving ROI Factors that influenced your peers’ decision to invest in 3D CBCT scan imaging technology How your peers navigate higher interest rates Financial considerations The tax implication in Section 179: Depreciation Get Your Ebook Dental Professionals’ Insights on Precision Imaging Excellence PreXion recently surveyed dentists and dental specialists across the nation to gather insights on what “precision imaging excellence” means in dentistry. The respondent pool included primarily general dentists as well as orthodontists, endodontists, oral surgeons, prosthodontists, pedodontists, dental hygienists and dental assistants. While 50% of participants worked in solo practices, 42% served in multi-location practices, and 8% hailed from DSO-supported practices. Drawing on the resulting data from the study, this eBook covers: “Precision Imaging Excellence” Defined Insights on the Importance of a Full Lineup of 2D/3D Features Your Peers on the Importance of Precision Imaging Excellence Strengths and Weaknesses of Various Imaging Technologies According to Your Peers Insights on the Advantages of Leading a Practice Offering Precision Imaging Excellence Insights on Types of Dental Imaging Solutions Get Your Ebook Study Shows Emerging Cone-Beam Computed Tomography (CBCT) and Imaging Systems Allow Dentistry and Specialty Practices to Be More Profitable More Quickly Compared to Standard 2D Imaging Technology PreXion recently surveyed dentists and dental specialists across the United States to determine current perceptions on cost analysis from investment to return on Cone-Beam Computed Tomography (CBCT) and imaging systems as well as emerging ways to increase profitability on such investments in a shorter time. Given economic pressures on practices today such as rising costs of supplies and increased competition, it’s not surprising that the lower-initial-investment options like the intraoral digital imaging sensor and standard intraoral scanner ranked at higher importance to your peers than the standard 3D CBCT system. Indeed, in today’s market there are more low-cost entry points to advanced imaging for the modern practice. In this eBook, we will cover data from your peers in dentistry and specialty practice on these topics: Common Myths about CBCT Imaging in Dentistry and Specialty Practices The 2D Advantage: Your Peers’ Insights on Using 2D Panoramic Imaging The 3D Advantage: Your Peers’ Insights on Using 3D CBCT Imaging The Intraoral Sensor Advantage: Your Peers’ Insights on Using an Intraoral Digital Imaging Sensor Increasing Profitability More Quickly with Emerging Cone-Beam Computed Tomography (CBCT) and Imaging Systems Conclusion: How Could CBCT Imaging Companies Be More Helpful to the Dental Profession Overall? Get Your Ebook Mitigating Practice Liability Exposure with Precision Treatment Planning and Diagnoses PreXion recently surveyed dentists and dental specialists across the United States to determine how the industry is managing treatment planning and diagnostics as related to practice liability management. It’s no surprise that all your peers who participated in this study aligned on the fact that treatment planning is critical to achieving successful outcomes for patients. In this eBook, you also will uncover data from your peers in dentistry on practical ways to overcome these obstacles as well as education on these learning objectives: Achieving Reasonable Rates of Treatment Acceptance Building Confidence in Accurately Diagnosing Dental Conditions Navigating Patient-Doctor Disagreement in Treatment Planning Handling Patient Emergencies When Consent Is Not Possible Overcoming Barriers to Implementing Evidence-Based Treatment Planning Opportunities to Improve Treatment Planning, Diagnosing and Liability Management Get Your Ebook Overcoming the Rising Costs and Economic Challenges in Dentistry As of June 2022, prices of goods and services were up 9.1% from a year prior – the largest 12-month increase since 1981. As a result, overhead costs for dental practices skyrocketed while families tightened their belts and patient traffic decreased. According to a Delta Dental Institute survey, nearly half of adult Americans and 42% of dental and healthcare workers have delayed or canceled a dental appointment in the last two years based on concerns about rising prices. In this eBook, you will uncover data from your peers in dentistry on practical ways to overcome these obstacles as well as education on these learning objectives: Understand Inflation as Defined and Experienced by Dentists and Dental Specialists Today Learn the Factors Contributing to the Current Rate of Inflation Explore Inflation-related Challenges Specific to the Dental Industry and How to Overcome Those Challenges, including: Increasing Patient Flow at Minimum Cost Increasing Case Acceptance Rates Decreasing Overhead Expenses Attracting and Retaining Qualified Staff Overcoming Reduced Reimbursement Rates Get Your Ebook What is the Industry Saying? What is the Industry Saying? “With the PreXion CBCT, I now have the ability to comprehensively diagnose, plan, and treat every patient with confidence and accuracy. This technology directly impacts everything from sinus lifts, implant placement, bone grafting, surgical extractions, and more. This is absolutely the most valuable diagnostic tool in my practice.” – DR. ROBERT WALINCHUS Experience True Clarity & Precision Schedule a demo today. REQUEST A DEMO"
      },
      {
        "kind": "heading",
        "text": "eBooks: Deep Intel Based Upon Survey Data from Dentists and Dental Specialists"
      },
      {
        "kind": "heading",
        "text": "The Complete Data-Driven Guide to How Your Peers Earn ROI from 3D CBCT Scan Imaging Technology"
      },
      {
        "kind": "paragraph",
        "text": "PreXion recently surveyed more than one hundred dentists and dental specialists across the nation to gather insights on how they earn return on investment (ROI) on 3D CBCT imaging technology. The survey pool was comprised of 66% General Dentists, 16% Oral Surgeons, 12% Orthodontists, 3% Endodontists, 2% Periodontists, 1% Prosthodontists and 1% Pedodontists."
      },
      {
        "kind": "paragraph",
        "text": "23% of respondents came from the Mid- Atlantic region of the United States, 16% from the Pacific, 15% from the South Atlantic, 15% from the East North Central, and 11% from the West South-Central regions. The remainder came from the Mountain, West North Central, New England and East Southwest regions."
      },
      {
        "kind": "paragraph",
        "text": "In this eBook, we detail strategies your peers shared, providing actionable insights and real-world examples to help you make great decisions about investing in 3D CBCT scan imaging technology with confidence you will earn a healthy return with enhanced diagnostic capability."
      },
      {
        "kind": "paragraph",
        "text": "This publication covers:"
      },
      {
        "kind": "list",
        "text": "The key factors that drive ROI for 3D CBCT scan imaging technology in dental practices Impact on your peers’ practice profitability, efficiency and productivity Strategies your peers use to maximize ROI from imaging technology How access to superior imaging technology re-energizes the dental team"
      },
      {
        "kind": "list",
        "text": "Impact on your peers’ practice profitability, efficiency and productivity"
      },
      {
        "kind": "list",
        "text": "Strategies your peers use to maximize ROI from imaging technology"
      },
      {
        "kind": "list",
        "text": "How access to superior imaging technology re-energizes the dental team"
      },
      {
        "kind": "list",
        "text": "How to measure ROI for 3D CBCT scan imaging technology How your peers quantitatively measure ROI How your peers qualitatively measure ROI The importance of dental education for their teams in achieving ROI"
      },
      {
        "kind": "list",
        "text": "How your peers quantitatively measure ROI"
      },
      {
        "kind": "list",
        "text": "How your peers qualitatively measure ROI"
      },
      {
        "kind": "list",
        "text": "The importance of dental education for their teams in achieving ROI"
      },
      {
        "kind": "list",
        "text": "Factors that influenced your peers’ decision to invest in 3D CBCT scan imaging technology How your peers navigate higher interest rates Financial considerations The tax implication in Section 179: Depreciation"
      },
      {
        "kind": "list",
        "text": "How your peers navigate higher interest rates"
      },
      {
        "kind": "list",
        "text": "Financial considerations"
      },
      {
        "kind": "list",
        "text": "The tax implication in Section 179: Depreciation"
      },
      {
        "kind": "heading",
        "text": "Dental Professionals’ Insights on Precision Imaging Excellence"
      },
      {
        "kind": "paragraph",
        "text": "PreXion recently surveyed dentists and dental specialists across the nation to gather insights on what “precision imaging excellence” means in dentistry."
      },
      {
        "kind": "paragraph",
        "text": "The respondent pool included primarily general dentists as well as orthodontists, endodontists, oral surgeons, prosthodontists, pedodontists, dental hygienists and dental assistants. While 50% of participants worked in solo practices, 42% served in multi-location practices, and 8% hailed from DSO-supported practices."
      },
      {
        "kind": "paragraph",
        "text": "Drawing on the resulting data from the study, this eBook covers:"
      },
      {
        "kind": "list",
        "text": "“Precision Imaging Excellence” Defined"
      },
      {
        "kind": "list",
        "text": "Insights on the Importance of a Full Lineup of 2D/3D Features"
      },
      {
        "kind": "list",
        "text": "Your Peers on the Importance of Precision Imaging Excellence"
      },
      {
        "kind": "list",
        "text": "Strengths and Weaknesses of Various Imaging Technologies According to Your Peers"
      },
      {
        "kind": "list",
        "text": "Insights on the Advantages of Leading a Practice Offering Precision Imaging Excellence"
      },
      {
        "kind": "list",
        "text": "Insights on Types of Dental Imaging Solutions"
      },
      {
        "kind": "heading",
        "text": "Study Shows Emerging Cone-Beam Computed Tomography (CBCT) and Imaging Systems Allow Dentistry and Specialty Practices to Be More Profitable More Quickly Compared to Standard 2D Imaging Technology"
      },
      {
        "kind": "paragraph",
        "text": "PreXion recently surveyed dentists and dental specialists across the United States to determine current perceptions on cost analysis from investment to return on Cone-Beam Computed Tomography (CBCT) and imaging systems as well as emerging ways to increase profitability on such investments in a shorter time."
      },
      {
        "kind": "paragraph",
        "text": "Given economic pressures on practices today such as rising costs of supplies and increased competition, it’s not surprising that the lower-initial-investment options like the intraoral digital imaging sensor and standard intraoral scanner ranked at higher importance to your peers than the standard 3D CBCT system. Indeed, in today’s market there are more low-cost entry points to advanced imaging for the modern practice."
      },
      {
        "kind": "paragraph",
        "text": "In this eBook, we will cover data from your peers in dentistry and specialty practice on these topics:"
      },
      {
        "kind": "list",
        "text": "Common Myths about CBCT Imaging in Dentistry and Specialty Practices"
      },
      {
        "kind": "list",
        "text": "The 2D Advantage: Your Peers’ Insights on Using 2D Panoramic Imaging"
      },
      {
        "kind": "list",
        "text": "The 3D Advantage: Your Peers’ Insights on Using 3D CBCT Imaging"
      },
      {
        "kind": "list",
        "text": "The Intraoral Sensor Advantage: Your Peers’ Insights on Using an Intraoral Digital Imaging Sensor"
      },
      {
        "kind": "list",
        "text": "Increasing Profitability More Quickly with Emerging Cone-Beam Computed Tomography (CBCT) and Imaging Systems"
      },
      {
        "kind": "list",
        "text": "Conclusion: How Could CBCT Imaging Companies Be More Helpful to the Dental Profession Overall?"
      },
      {
        "kind": "heading",
        "text": "Mitigating Practice Liability Exposure with Precision Treatment Planning and Diagnoses"
      },
      {
        "kind": "paragraph",
        "text": "PreXion recently surveyed dentists and dental specialists across the United States to determine how the industry is managing treatment planning and diagnostics as related to practice liability management. It’s no surprise that all your peers who participated in this study aligned on the fact that treatment planning is critical to achieving successful outcomes for patients."
      },
      {
        "kind": "paragraph",
        "text": "In this eBook, you also will uncover data from your peers in dentistry on practical ways to overcome these obstacles as well as education on these learning objectives:"
      },
      {
        "kind": "list",
        "text": "Achieving Reasonable Rates of Treatment Acceptance"
      },
      {
        "kind": "list",
        "text": "Building Confidence in Accurately Diagnosing Dental Conditions"
      },
      {
        "kind": "list",
        "text": "Navigating Patient-Doctor Disagreement in Treatment Planning"
      },
      {
        "kind": "list",
        "text": "Handling Patient Emergencies When Consent Is Not Possible"
      },
      {
        "kind": "list",
        "text": "Overcoming Barriers to Implementing Evidence-Based Treatment Planning"
      },
      {
        "kind": "list",
        "text": "Opportunities to Improve Treatment Planning, Diagnosing and Liability Management"
      },
      {
        "kind": "heading",
        "text": "Overcoming the Rising Costs and Economic Challenges in Dentistry"
      },
      {
        "kind": "paragraph",
        "text": "As of June 2022, prices of goods and services were up 9.1% from a year prior – the largest 12-month increase since 1981. As a result, overhead costs for dental practices skyrocketed while families tightened their belts and patient traffic decreased. According to a Delta Dental Institute survey, nearly half of adult Americans and 42% of dental and healthcare workers have delayed or canceled a dental appointment in the last two years based on concerns about rising prices."
      },
      {
        "kind": "paragraph",
        "text": "In this eBook, you will uncover data from your peers in dentistry on practical ways to overcome these obstacles as well as education on these learning objectives:"
      },
      {
        "kind": "paragraph",
        "text": "Understand Inflation as Defined and Experienced by Dentists and Dental Specialists Today"
      },
      {
        "kind": "paragraph",
        "text": "Learn the Factors Contributing to the Current Rate of Inflation"
      },
      {
        "kind": "paragraph",
        "text": "Explore Inflation-related Challenges Specific to the Dental Industry and How to Overcome Those Challenges, including:"
      },
      {
        "kind": "list",
        "text": "Increasing Patient Flow at Minimum Cost"
      },
      {
        "kind": "list",
        "text": "Increasing Case Acceptance Rates"
      },
      {
        "kind": "list",
        "text": "Decreasing Overhead Expenses"
      },
      {
        "kind": "list",
        "text": "Attracting and Retaining Qualified Staff"
      },
      {
        "kind": "list",
        "text": "Overcoming Reduced Reimbursement Rates"
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“With the PreXion CBCT, I now have the ability to comprehensively diagnose, plan, and treat every patient with confidence and accuracy. This technology directly impacts everything from sinus lifts, implant placement, bone grafting, surgical extractions, and more. This is absolutely the most valuable diagnostic tool in my practice.”"
      },
      {
        "kind": "heading",
        "text": "Experience True Clarity & Precision"
      },
      {
        "kind": "heading",
        "text": "Schedule a demo today."
      }
    ],
    "callsToAction": "- [Get Your Ebook](https://www.prexion.com/download-how-your-peers-earn-roi-from-3d-cbct-scan-imaging-technology/) - [Get Your Ebook](https://www.prexion.com/download-dental-professionals-insights-on-precision-imaging-excellence/) - [Get Your Ebook](https://www.prexion.com/download-be-more-profitable-more-quickly/) - [Get Your Ebook](https://www.prexion.com/download-mitigating-practice-liability-exposure-with-precision-treatment-planning-and-diagnoses/) - [Get Your Ebook](https://www.prexion.com/download-overcoming-rising-costs-and-economic-challenges-in-dentistry/) - [REQUEST A DEMO](https://www.prexion.com/request-a-demo/) - Telefone: 855-PREXION - Suporte: (650) 212-0314 - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "Get Your Ebook",
        "url": "https://www.prexion.com/download-how-your-peers-earn-roi-from-3d-cbct-scan-imaging-technology/"
      },
      {
        "label": "Get Your Ebook",
        "url": "https://www.prexion.com/download-dental-professionals-insights-on-precision-imaging-excellence/"
      },
      {
        "label": "Get Your Ebook",
        "url": "https://www.prexion.com/download-be-more-profitable-more-quickly/"
      },
      {
        "label": "Get Your Ebook",
        "url": "https://www.prexion.com/download-mitigating-practice-liability-exposure-with-precision-treatment-planning-and-diagnoses/"
      },
      {
        "label": "Get Your Ebook",
        "url": "https://www.prexion.com/download-overcoming-rising-costs-and-economic-challenges-in-dentistry/"
      },
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      }
    ],
    "images": [
      {
        "alt": "Downloadable Assets",
        "url": "/manus-storage/0c013d67418d-PRE-Q4-eBook_e57dad13.jpg"
      },
      {
        "alt": "Downloadable Assets",
        "url": "/manus-storage/e11216173a71-Prexion-Dental-Professionals-Insights-onPrecision-Imaging-Excellence-eBook-Cover_9d7f147d.jpg"
      },
      {
        "alt": "Downloadable Assets",
        "url": "/manus-storage/96d2408c671b-PRE-eBook-Q1-2024-Cover_40e3db31.jpg"
      },
      {
        "alt": "Downloadable Assets",
        "url": "/manus-storage/1a4815528572-PRE-eBook-Q3-2023_6bcb7da1.jpg"
      },
      {
        "alt": "Downloadable Assets",
        "url": "/manus-storage/3f6dc3e528c1-PRE-eBook-Q1-2023_6fb7bb66.jpg"
      }
    ],
    "migrationAction": "consolidate",
    "notes": "Página atua como um hub para eBooks, exigindo preenchimento de formulário nas landing pages de destino (não são links diretos para PDFs). O rodapé aparece duplicado na extração. O conteúdo é relevante para geração de leads e deve ser migrado para uma seção consolidada de recursos/educação no novo site."
  },
  "/education-and-support": {
    "sourceUrl": "https://www.prexion.com/education-and-support/",
    "route": "/education-and-support",
    "canonicalTarget": "/support",
    "title": "Education & Support",
    "type": "education",
    "relevance": "high",
    "summary": "DENTAL EDUCATION & SUPPORT An Unmatched Commitment to Dental Education PreXion commits to dental education and encourages connecting at upcoming events. Support with PreXion products PreXion's mission is to deliver excellent customer care and support. Remote support is available for any issues. Training Videos Offers training videos to make the most out of PreXion product software, including topics like \"The GP’s Guide to Cone Beam Everyday Use\" with Dr. Tony Tomaro, \"Integrating CBCT into Your Practice\" with Dr. Lou Graham, and \"How to Capture a 15×13 FOV Image\". Blog Posts Updates on the latest in dentistry, CBCT technology, and events, such as The Art and Science of Dentistry 2026 in Anaheim, CA, AAE Annual ",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "DENTAL EDUCATION & SUPPORT An Unmatched Commitment to Dental Education Connect with PreXion at one of these upcoming events: VIEW ALL EVENTS Need support with your PreXion products? Part of PreXion’s mission is to always be passionate about answering support calls and delivering excellent customer care. If you are experiencing an issue or require assistance, please do not hesitate to get in touch. GET REMOTE SUPPORT Need support with your PreXion products? Part of PreXion’s mission is to always be passionate about answering support calls and delivering excellent customer care. If you are experiencing an issue or require assistance, please do not hesitate to get in touch. GET REMOTE SUPPORT Make the most out of your PreXion product software. “The GP’s Guide to Cone Beam Everyday Use” with Dr. Tony Tomaro “Integrating CBCT into Your Practice” with Dr. Lou Graham How to Capture a 15×13 FOV Image VIEW ALL TRAINING VIDEOS Stay up to date on the latest in dentistry, CBCT technology and more. 3vdab 2026-05-21T20:29:18+00:00 The Art and Science of Dentistry 2026 – Anaheim – CA 3vdab 2026-05-21T20:29:18+00:00 May 21, 2026 | PreXion was present at one of the world’s largest dental events! We participated in the California Dental Association – The Art and Science of Dentistry event, held in Anaheim, California (USA), bringing together professionals from across [...] 3vdab 2026-04-23T20:00:42+00:00 AAE Annual Meteting 2026 – Salt Lake City – UT 3vdab 2026-04-23T20:00:42+00:00 April 23, 2026 | The American Association of Endodontists annually hosts one of the most important global meetings in specialized dentistry: the AAE Annual Meeting 2026. Held on April 16th and 17th, 2026, in Salt Lake City, the [...] 3vdab 2026-03-17T14:47:56+00:00 Chicago Mindwinter 3vdab 2026-03-17T14:47:56+00:00 March 17, 2026 | In February, we participated in an important international event in the healthcare sector, reinforcing our global presence and our commitment to expansion in strategic markets. This meeting was held at the Chicago Dental Society [...] VIEW ALL BLOG POSTS Stay up to date on the latest in dentistry, CBCT technology and more. 3vdab 2026-05-21T20:29:18+00:00 The Art and Science of Dentistry 2026 – Anaheim – CA 3vdab 2026-05-21T20:29:18+00:00 May 21, 2026 | PreXion was present at one of the world’s largest dental events! We participated in the California Dental Association – The Art and Science of Dentistry event, held in Anaheim, California (USA), bringing together professionals from across [...] 3vdab 2026-04-23T20:00:42+00:00 AAE Annual Meteting 2026 – Salt Lake City – UT 3vdab 2026-04-23T20:00:42+00:00 April 23, 2026 | The American Association of Endodontists annually hosts one of the most important global meetings in specialized dentistry: the AAE Annual Meeting 2026. Held on April 16th and 17th, 2026, in Salt Lake City, the [...] 3vdab 2026-03-17T14:47:56+00:00 Chicago Mindwinter 3vdab 2026-03-17T14:47:56+00:00 March 17, 2026 | In February, we participated in an important international event in the healthcare sector, reinforcing our global presence and our commitment to expansion in strategic markets. This meeting was held at the Chicago Dental Society [...] VIEW ALL BLOG POSTS Stay on the Cutting Edge of Dentistry. Subscribe today."
      },
      {
        "kind": "heading",
        "text": "DENTAL EDUCATION & SUPPORT"
      },
      {
        "kind": "heading",
        "text": "An Unmatched Commitment to Dental Education"
      },
      {
        "kind": "heading",
        "text": "Connect with PreXion at one of these upcoming events:"
      },
      {
        "kind": "heading",
        "text": "Need support with your PreXion products?"
      },
      {
        "kind": "paragraph",
        "text": "Part of PreXion’s mission is to always be passionate about answering support calls and delivering excellent customer care. If you are experiencing an issue or require assistance, please do not hesitate to get in touch."
      },
      {
        "kind": "heading",
        "text": "Make the most out of your PreXion product software."
      },
      {
        "kind": "paragraph",
        "text": "“The GP’s Guide to Cone Beam Everyday Use” with Dr. Tony Tomaro"
      },
      {
        "kind": "paragraph",
        "text": "“Integrating CBCT into Your Practice” with Dr. Lou Graham"
      },
      {
        "kind": "paragraph",
        "text": "How to Capture a 15×13 FOV Image"
      },
      {
        "kind": "heading",
        "text": "Stay up to date on the latest in dentistry, CBCT technology and more."
      },
      {
        "kind": "paragraph",
        "text": "3vdab 2026-05-21T20:29:18+00:00 May 21, 2026 |"
      },
      {
        "kind": "paragraph",
        "text": "PreXion was present at one of the world’s largest dental events! We participated in the California Dental Association – The Art and Science of Dentistry event, held in Anaheim, California (USA), bringing together professionals from across [...]"
      },
      {
        "kind": "paragraph",
        "text": "3vdab 2026-04-23T20:00:42+00:00 April 23, 2026 |"
      },
      {
        "kind": "paragraph",
        "text": "The American Association of Endodontists annually hosts one of the most important global meetings in specialized dentistry: the AAE Annual Meeting 2026. Held on April 16th and 17th, 2026, in Salt Lake City, the [...]"
      },
      {
        "kind": "paragraph",
        "text": "3vdab 2026-03-17T14:47:56+00:00 March 17, 2026 |"
      },
      {
        "kind": "paragraph",
        "text": "In February, we participated in an important international event in the healthcare sector, reinforcing our global presence and our commitment to expansion in strategic markets. This meeting was held at the Chicago Dental Society [...]"
      },
      {
        "kind": "heading",
        "text": "Stay on the Cutting Edge of Dentistry."
      },
      {
        "kind": "heading",
        "text": "Subscribe today."
      }
    ],
    "callsToAction": "- [VIEW ALL EVENTS](https://www.prexion.com/news-2/) - [GET REMOTE SUPPORT](https://www.prexion.com/remote-support/) - [VIEW ALL TRAINING VIDEOS](https://www.prexion.com/training-videos/) - [VIEW ALL BLOG POSTS](https://www.prexion.com/blog/) - Subscribe today. - Contact Us: 855-PREXION - Client Support: (650) 212-0314 - Address: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "VIEW ALL EVENTS",
        "url": "https://www.prexion.com/news-2/"
      },
      {
        "label": "GET REMOTE SUPPORT",
        "url": "https://www.prexion.com/remote-support/"
      },
      {
        "label": "GET REMOTE SUPPORT",
        "url": "https://www.prexion.com/remote-support/"
      },
      {
        "label": "YouTube video player 37",
        "url": "https://www.youtube.com/embed/ZVuf8g6McZ0?wmode=transparent&autoplay=0"
      },
      {
        "label": "YouTube video player 38",
        "url": "https://www.youtube.com/embed/D0k_uQR81YU?wmode=transparent&autoplay=0"
      },
      {
        "label": "YouTube video player 39",
        "url": "https://www.youtube.com/embed/I70n4B2QFsk?wmode=transparent&autoplay=0"
      },
      {
        "label": "VIEW ALL TRAINING VIDEOS",
        "url": "https://www.prexion.com/training-videos/"
      },
      {
        "label": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/",
        "url": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "The Art and Science of Dentistry 2026 – Anaheim – CA",
        "url": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/",
        "url": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "AAE Annual Meteting 2026 – Salt Lake City – UT",
        "url": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "https://www.prexion.com/chicago-mindwinter-dental/",
        "url": "https://www.prexion.com/chicago-mindwinter-dental/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "Chicago Mindwinter",
        "url": "https://www.prexion.com/chicago-mindwinter-dental/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "VIEW ALL BLOG POSTS",
        "url": "https://www.prexion.com/blog/"
      },
      {
        "label": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/",
        "url": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "The Art and Science of Dentistry 2026 – Anaheim – CA",
        "url": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/",
        "url": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "AAE Annual Meteting 2026 – Salt Lake City – UT",
        "url": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "https://www.prexion.com/chicago-mindwinter-dental/",
        "url": "https://www.prexion.com/chicago-mindwinter-dental/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "Chicago Mindwinter",
        "url": "https://www.prexion.com/chicago-mindwinter-dental/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "VIEW ALL BLOG POSTS",
        "url": "https://www.prexion.com/blog/"
      }
    ],
    "images": [
      {
        "alt": "Education & Support",
        "url": "/manus-storage/2733ad1c2f86-14-16-May-Arts-and-Science-California-e1779395147102-700x441_40cb21fd.jpeg"
      },
      {
        "alt": "Education & Support",
        "url": "/manus-storage/070f1aaad6a6-FOTO_AEE_ABRIL_26-11-700x441_50e35035.jpg"
      },
      {
        "alt": "Education & Support",
        "url": "/manus-storage/2a52a53739a2-chicago-22-700x441_69cdc724.jpg"
      },
      {
        "alt": "Education & Support",
        "url": "/manus-storage/2733ad1c2f86-14-16-May-Arts-and-Science-California-e1779395147102-700x441_40cb21fd.jpeg"
      },
      {
        "alt": "Education & Support",
        "url": "/manus-storage/070f1aaad6a6-FOTO_AEE_ABRIL_26-11-700x441_50e35035.jpg"
      },
      {
        "alt": "Education & Support",
        "url": "/manus-storage/2a52a53739a2-chicago-22-700x441_69cdc724.jpg"
      }
    ],
    "migrationAction": "preserve-resource",
    "notes": "A página contém conteúdo duplicado em sua estrutura, como os blocos \"Need support with your PreXion products?\" e as listas de blog posts que se repetem. É recomendável revisar a estruturação para remover as duplicações durante a migração. O conteúdo em si é muito útil e deve ser mantido."
  },
  "/evolve-2d-pan": {
    "sourceUrl": "https://www.prexion.com/evolve-2d-pan/",
    "route": "/evolve-2d-pan",
    "canonicalTarget": "/product/evolve-2d",
    "title": "Evolve 2D (PAN)",
    "type": "product",
    "relevance": "high",
    "summary": "PREXION EVOLVE 2D PAN 3D Upgradable at Any Time Apresenta o produto Evolve 2D PAN destacando que pode ser atualizado para 3D a qualquer momento. PreXion Evolve 2D PAN Destaca a facilidade de uso e a qualidade de imagem do PreXion Evolve 2D PAN . Menciona filtros aprimorados, capacidade multislice 41 cortes panorâmicos e algoritmos de reconstrução para nitidez e contraste. Especifica \"Panoramic\", \"5 adaptive filters\" e \"Enhanced Ortho\". CEPH Arm: Descreve a adição do braço Ceph para exames cefalométricos, com sensor especializado para tecidos duros e moles. Menciona mecanismos de colimação e técnicas de escaneamento rápido para minimizar a exposição ao raio-X. Especifica \"Lateral Ceph\" e \"AP/PA Frontal Ceph\". Di",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "PREXION EVOLVE 2D (PAN) 3D Upgradable at Any Time SCHEDULE A DEMO PreXion Evolve 2D (PAN) The user friendliness and image quality of PreXion Evolve 2D (PAN) sets it apart. Its enhanced filters adjust images to suit your requirements, and its multislice capability allows easy navigation through 41 panoramic slices, enabling precise visualization of desired structures. Moreover, the reconstruction algorithms ensure exceptional sharpness and contrast in every scan based on user preference. PreXion Evolve 2D (PAN) The user friendliness and image quality of PreXion Evolve 2D (PAN) sets it apart. Its enhanced filters adjust images to suit your requirements, and its multislice capability allows easy navigation through 41 panoramic slices, enabling precise visualization of desired structures. Moreover, the reconstruction algorithms ensure exceptional sharpness and contrast in every scan based on user preference. Panoramic 5 adaptive filters Enhanced Ortho CEPH Arm: Adding the Ceph arm boosts Evolve 2D (PAN)’s diagnostic potential for cephalometric exams. Its specialized Ceph sensor, creates high- quality images of hard and soft tissue. Collimation mechanisms and rapid scanning techniques minimize X-ray exposure. Lateral Ceph AP/PA Frontal Ceph Get Full Specifications with the Product Brochure SCHEDULE A DEMO Discover what a CBCT Scanner can make possible for your practice. For many clinicians and practice owners, an investment in CBCT technology from PreXion can become proﬁtable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to ﬁnance a product. CALCULATE YOUR SAVINGS Discover what CBCT can make possible for your practice. For many clinicians and practice owners, an investment in CBCT technology from PreXion can become proﬁtable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to ﬁnance a product. CALCULATE YOUR SAVINGS What is the Industry Saying? What is the Industry Saying? “Over 5 years ago, I bought my second CBCT and it was a PreXion. Over these past 5 years, the training and service have been second to none and if you’re investing in such a piece of equipment, it is essential both of these criteria be 100%. Add the great images and easy software interface, my entire multi-specialty users just love our unit. This company walks the walk for its clients and continues to set the bar for anyone interested in purchasing a CBCT.” – Lou Graham DDS FAGD, USA Experience True Clarity & Precision Schedule a demo today. SCHEDULE A DEMO"
      },
      {
        "kind": "heading",
        "text": "PREXION EVOLVE 2D (PAN)"
      },
      {
        "kind": "heading",
        "text": "3D Upgradable at Any Time"
      },
      {
        "kind": "paragraph",
        "text": "The user friendliness and image quality of PreXion Evolve 2D (PAN) sets it apart. Its enhanced filters adjust images to suit your requirements, and its multislice capability allows easy navigation through 41 panoramic slices, enabling precise visualization of desired structures. Moreover, the reconstruction algorithms ensure exceptional sharpness and contrast in every scan based on user preference."
      },
      {
        "kind": "paragraph",
        "text": "Panoramic"
      },
      {
        "kind": "paragraph",
        "text": "5 adaptive filters"
      },
      {
        "kind": "paragraph",
        "text": "Enhanced Ortho"
      },
      {
        "kind": "heading",
        "text": "CEPH Arm:"
      },
      {
        "kind": "paragraph",
        "text": "Adding the Ceph arm boosts Evolve 2D (PAN)’s diagnostic potential for cephalometric exams. Its specialized Ceph sensor, creates high- quality images of hard and soft tissue. Collimation mechanisms and rapid scanning techniques minimize X-ray exposure."
      },
      {
        "kind": "paragraph",
        "text": "Lateral Ceph"
      },
      {
        "kind": "paragraph",
        "text": "AP/PA Frontal Ceph"
      },
      {
        "kind": "heading",
        "text": "Discover what a CBCT Scanner can make possible for your practice."
      },
      {
        "kind": "paragraph",
        "text": "For many clinicians and practice owners, an investment in CBCT technology from PreXion can become proﬁtable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to ﬁnance a product."
      },
      {
        "kind": "heading",
        "text": "Discover what CBCT can make possible for your practice."
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“Over 5 years ago, I bought my second CBCT and it was a PreXion. Over these past 5 years, the training and service have been second to none and if you’re investing in such a piece of equipment, it is essential both of these criteria be 100%. Add the great images and easy software interface, my entire multi-specialty users just love our unit. This company walks the walk for its clients and continues to set the bar for anyone interested in purchasing a CBCT.”"
      },
      {
        "kind": "heading",
        "text": "Experience True Clarity & Precision"
      },
      {
        "kind": "heading",
        "text": "Schedule a demo today."
      }
    ],
    "callsToAction": "- [SCHEDULE A DEMO](https://www.prexion.com/request-a-demo/) - [CALCULATE YOUR SAVINGS](https://www.prexion.com/roi-calculator/) - [Get Full Specifications with the Product Brochure](https://s.assetway.com.br/jZUpa) - Contact Us: [855-PREXION](tel:855PREXION) - Client Support: [(650) 212-0314](tel:6502120314) - Address: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [
      "https://s.assetway.com.br/jZUpa"
    ],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "SCHEDULE A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      },
      {
        "label": "Get Full Specifications with the Product Brochure",
        "url": "https://s.assetway.com.br/jZUpa"
      },
      {
        "label": "SCHEDULE A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      },
      {
        "label": "ROI calculator tool",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "CALCULATE YOUR SAVINGS",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "CALCULATE YOUR SAVINGS",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "SCHEDULE A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      }
    ],
    "images": [
      {
        "alt": "Evolve 2D (PAN)",
        "url": "/manus-storage/dd0ef149cb98-NEW-Panoramic_189f74a7.jpg"
      },
      {
        "alt": "Evolve 2D (PAN)",
        "url": "/manus-storage/ebe36ba14a0f-NEW-5-adaptive-filters_5cf1cdce.png"
      },
      {
        "alt": "Evolve 2D (PAN)",
        "url": "/manus-storage/fec4fba1bb7a-NEW-Enhanced-Ortho_9630d7c6.jpg"
      },
      {
        "alt": "Evolve 2D (PAN)",
        "url": "/manus-storage/7c49d335d9b0-NEW-Lateral-Ceph_a22dbc41.jpg"
      },
      {
        "alt": "Evolve 2D (PAN)",
        "url": "/manus-storage/16322faf57b3-NEW-Maxillary-Sinus-Ceph_b1707549.jpg"
      }
    ],
    "migrationAction": "create",
    "notes": "A página apresenta o produto Evolve 2D (PAN), detalhando suas funcionalidades, como a capacidade multislice com 41 cortes panorâmicos e o braço CEPH. O conteúdo principal de descrição do produto está duplicado na página. Há links para o folheto do produto e chamadas para agendar uma demonstração e calcular o ROI. É recomendada a criação de uma página própria para este produto no novo site, consolidando o conteúdo e removendo as duplicações."
  },
  "/evolve-scan-intraoral-scanner": {
    "sourceUrl": "https://www.prexion.com/evolve-scan-intraoral-scanner/",
    "route": "/evolve-scan-intraoral-scanner",
    "canonicalTarget": "/product/evolve-scan",
    "title": "Evolve Scan",
    "type": "product",
    "relevance": "high",
    "summary": "EVOLVE SCAN INTRAORAL SCANNER A High-Tech Scanner with an Ergonomic Design Evolve Scan is Prexion’s new intraoral scanner, 100% produced in Brazil. Weighing 119g, it scans a complete arch in 59 seconds. It features autoclavable tips up to 250 cycles , a single detachable USB cable, a heat-free anti-fog system, and artificial intelligence FLOW AI . Welcome to the new era of intraoral scanning Eagle Scan Why Evolve Scan? Comparative Software features: - Before / After - STL / PLY - Quality Map - Focus in HD - Retention Analysis - Occlusion Map - Delimitations of preparation terms Specifications: - SCANNER TYPE: Handheld scanner that creates optic impressions for dental restorations - BASE DIMENSIONS: L x W x H: 3",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "EVOLVE SCAN INTRAORAL SCANNER A High-Tech Scanner with an Ergonomic Design SCHEDULE A DEMO Evolve Scan Intraoral Scanner Evolve Scan is Prexion’s new intraoral scanner, 100% produced in Brazil. With a focus on lightness, precision, and fluidity, the Evolve Scan weighs just 119g and scans a complete arch in just 59 seconds, making it one of the fastest on the market. It features autoclavable tips with a durability of up to 250 cycles, a single, detachable USB cable, a heat-free anti-fog system, and artificial intelligence (FLOW AI), providing an intuitive and efficient digital experience. It’s the ideal device for clinics looking to improve their workflows with greater agility, comfort, and predictability. It also allows dentists to present the treatment plan visually and clearly to patients, contributing to a safer, more reliable journey with a higher acceptance rate. Get Full Specifications with the Product SCHEDULE A DEMO Welcome to the new era of intraoral scanning Why Evolve Scan? Comparative Software Before After STL PLY Quality Map Focus in HD Retention Analysis Occlusion Map Delimitations of preparation terms Specifications: SCANNER TYPE Handheld scanner that creates optic impressions for dental restorations BASE DIMENSIONS L x W x H: 306 mm x 98 mm x 72 mm SCANNER DIMENSIONS L x W x H: 256 mm x 43 mm x 43 mm WEIGHT 119 g CABLE LENGTH 2 meters SCANNER TIPS Reusable up to 250 times, autoclavable (follow the instructions in the User Manual) HEATING ELEMENT Low-energy, heat-free defogging SENSOR TECHNOLOGY CMOS COLOR Yes, 24bits (8bits per channel) SCANNING FREQUENCY 30 FPS (Frames Per Second) FIELD OF VIEW 12 mm x 14 mm ILLUMINATION LED – HIGH POWER ELETRICAL INPUT 5V DC, 100-240V AC, 50-60Hz Software: EVOLVE IOS SOFTWARE LICENSE Free with Evolve Scan scanner system, no annual fee GENERATED ARCHIVES FORMAT STL, PLY, OBJ COMPATIBILITY WITH CAD/CAM SYSTEMS Open files, compatible with all open CAD/CAM systems on the market Scanning Process: DENTAL PREPARATION No need to use spray or powder SCANNING PRINCIPLE Continuous and accumulative scanning digitalization, with depth and colour data TOOTH-SENSOR DISTANCE O – 20 mm COMPUTER-SCANNER INTERFACE USB 3.0 cable Experience True Clarity & Precision Schedule a demo today. FIND A PRODUCT SPECIALIST"
      },
      {
        "kind": "heading",
        "text": "EVOLVE SCAN INTRAORAL SCANNER"
      },
      {
        "kind": "heading",
        "text": "A High-Tech Scanner with an Ergonomic Design"
      },
      {
        "kind": "paragraph",
        "text": "Evolve Scan is Prexion’s new intraoral scanner, 100% produced in Brazil."
      },
      {
        "kind": "paragraph",
        "text": "With a focus on lightness, precision, and fluidity, the Evolve Scan weighs just 119g and scans a complete arch in just 59 seconds, making it one of the fastest on the market. It features autoclavable tips with a durability of up to 250 cycles, a single, detachable USB cable, a heat-free anti-fog system, and artificial intelligence (FLOW AI), providing an intuitive and efficient digital experience."
      },
      {
        "kind": "paragraph",
        "text": "It’s the ideal device for clinics looking to improve their workflows with greater agility, comfort, and predictability. It also allows dentists to present the treatment plan visually and clearly to patients, contributing to a safer, more reliable journey with a higher acceptance rate."
      },
      {
        "kind": "heading",
        "text": "Welcome to the new era of intraoral scanning"
      },
      {
        "kind": "heading",
        "text": "Why Evolve Scan?"
      },
      {
        "kind": "heading",
        "text": "Before"
      },
      {
        "kind": "heading",
        "text": "After"
      },
      {
        "kind": "heading",
        "text": "STL"
      },
      {
        "kind": "heading",
        "text": "PLY"
      },
      {
        "kind": "paragraph",
        "text": "Quality Map"
      },
      {
        "kind": "paragraph",
        "text": "Focus in HD"
      },
      {
        "kind": "paragraph",
        "text": "Retention Analysis"
      },
      {
        "kind": "paragraph",
        "text": "Occlusion Map"
      },
      {
        "kind": "paragraph",
        "text": "Delimitations of preparation terms"
      },
      {
        "kind": "heading",
        "text": "Specifications:"
      },
      {
        "kind": "paragraph",
        "text": "SCANNER TYPE"
      },
      {
        "kind": "paragraph",
        "text": "BASE DIMENSIONS"
      },
      {
        "kind": "paragraph",
        "text": "L x W x H: 306 mm x 98 mm x 72 mm"
      },
      {
        "kind": "paragraph",
        "text": "SCANNER DIMENSIONS"
      },
      {
        "kind": "paragraph",
        "text": "L x W x H: 256 mm x 43 mm x 43 mm"
      },
      {
        "kind": "paragraph",
        "text": "WEIGHT"
      },
      {
        "kind": "paragraph",
        "text": "119 g"
      },
      {
        "kind": "paragraph",
        "text": "CABLE LENGTH"
      },
      {
        "kind": "paragraph",
        "text": "SCANNER TIPS"
      },
      {
        "kind": "paragraph",
        "text": "Reusable up to 250 times, autoclavable (follow the instructions in the User Manual)"
      },
      {
        "kind": "paragraph",
        "text": "HEATING ELEMENT"
      },
      {
        "kind": "paragraph",
        "text": "Low-energy, heat-free defogging"
      },
      {
        "kind": "paragraph",
        "text": "SENSOR TECHNOLOGY"
      },
      {
        "kind": "paragraph",
        "text": "COLOR"
      },
      {
        "kind": "paragraph",
        "text": "Yes, 24bits (8bits per channel)"
      },
      {
        "kind": "paragraph",
        "text": "SCANNING FREQUENCY"
      },
      {
        "kind": "paragraph",
        "text": "30 FPS (Frames Per Second)"
      },
      {
        "kind": "paragraph",
        "text": "FIELD OF VIEW"
      },
      {
        "kind": "paragraph",
        "text": "12 mm x 14 mm"
      },
      {
        "kind": "paragraph",
        "text": "ILLUMINATION"
      },
      {
        "kind": "paragraph",
        "text": "LED – HIGH POWER"
      },
      {
        "kind": "paragraph",
        "text": "ELETRICAL INPUT"
      },
      {
        "kind": "heading",
        "text": "Software:"
      },
      {
        "kind": "heading",
        "text": "Scanning Process:"
      },
      {
        "kind": "paragraph",
        "text": "DENTAL PREPARATION"
      },
      {
        "kind": "paragraph",
        "text": "No need to use spray or powder"
      },
      {
        "kind": "paragraph",
        "text": "SCANNING PRINCIPLE"
      },
      {
        "kind": "paragraph",
        "text": "Continuous and accumulative scanning digitalization, with depth and colour data"
      },
      {
        "kind": "paragraph",
        "text": "TOOTH-SENSOR DISTANCE"
      },
      {
        "kind": "heading",
        "text": "Experience True Clarity & Precision"
      },
      {
        "kind": "heading",
        "text": "Schedule a demo today."
      }
    ],
    "callsToAction": "- [SCHEDULE A DEMO](https://www.prexion.com/request-a-demo/) - [FIND A PRODUCT SPECIALIST](https://www.prexion.com/product-specialists/) - Telefone: 855-PREXION - Suporte ao Cliente: (650) 212-0314 - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "SCHEDULE A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      },
      {
        "label": "Get Full Specifications with the Product",
        "url": "https://www.prexion.com/evolve-scan-intraoral-scanner/#specifications"
      },
      {
        "label": "SCHEDULE A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      },
      {
        "label": "FIND A PRODUCT SPECIALIST",
        "url": "https://www.prexion.com/product-specialists/"
      }
    ],
    "images": [
      {
        "alt": "Evolve Scan",
        "url": "/manus-storage/206817a53d02-evolve-scan-1_675041a3.png"
      },
      {
        "alt": "Evolve Scan",
        "url": "/manus-storage/714b010972ff-evolve-scan-3_f17913a3.png"
      },
      {
        "alt": "Evolve Scan",
        "url": "/manus-storage/37044d32d1f8-eagle-scan-behind_b7078065.png"
      },
      {
        "alt": "Evolve Scan",
        "url": "/manus-storage/b3736f94e0e0-evolve-scan-2_89078884.png"
      },
      {
        "alt": "Eagle Scan",
        "url": "/manus-storage/923e8c99282f-eagle-scan-banner02_7b6750a3.png"
      },
      {
        "alt": "Evolve Scan",
        "url": "/manus-storage/98b30ec32da2-evolucao-out_1_d9c92194.jpg"
      },
      {
        "alt": "Evolve Scan",
        "url": "/manus-storage/08a781db9168-evolucao-out_2_e604c871.jpg"
      },
      {
        "alt": "Evolve Scan",
        "url": "/manus-storage/11a9f5de4f09-eagle-scan-biteSTL-2b_955c5783.png"
      },
      {
        "alt": "Evolve Scan",
        "url": "/manus-storage/de5df0d6e5b3-eagle-scan-bitePLY_670e3959.png"
      },
      {
        "alt": "Evolve Scan",
        "url": "/manus-storage/7a0716941335-eagle-scan-qualidade_712a8ffd.jpg"
      },
      {
        "alt": "eagle-scan-focus-in-HD",
        "url": "/manus-storage/2e00ca82c87e-eagle-scan-modoHD_5508ae50.jpg"
      },
      {
        "alt": "eagle-scan-retention-analysis",
        "url": "/manus-storage/761e646f59e7-eagle-scan-retencao_7cacfb63.jpg"
      }
    ],
    "migrationAction": "create",
    "notes": "Página de produto com informações completas e especificações técnicas sobre o Evolve Scan Intraoral Scanner. Há duplicação de informações no rodapé (links e contatos repetidos). O conteúdo parece atualizado e relevante, sem indícios de obsolescência. O texto cita \"Eagle Scan\" em um subtítulo, o que pode ser uma inconsistência ou um nome alternativo do produto/software que precisa ser verificado."
  },
  "/evolve-x-ray-hand-held-dental-x-rays": {
    "sourceUrl": "https://www.prexion.com/evolve-x-ray-hand-held-dental-x-rays/",
    "route": "/evolve-x-ray-hand-held-dental-x-rays",
    "canonicalTarget": "/product/evolve-xray",
    "title": "Evolve X-Ray: Hand Held Dental X-Rays",
    "type": "product",
    "relevance": "high",
    "summary": "EVOLVE X-RAY: HAND HELD DENTAL X-RAY One Device. Every Dental X-Ray You Need O equipamento Evolve X-Ray é projetado para radiografia intraoral com voltagem nominal de 60kVp, corrente de 2.5 mA e ponto focal de 0.4x0.4mm. O design minimiza vazamento de radiação através de um colimador de material radiopaco. Hand Held Dental X-Ray Repete informações sobre as especificações do equipamento 60kVp, 2.5 mA, 0.4x0.4mm e proteção contra radiação. Why Portable Dental X-Ray? / Why Hand Held Dental X-Ray? Destaca os benefícios do equipamento: portabilidade maior mobilidade , leveza e design compacto facilita manuseio e adaptabilidade preparado para uso com sensor digital, placa de fósforo e filme radiográfico . Discover wh",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "EVOLVE X-RAY: HAND HELD DENTAL X-RAY One Device. Every Dental X-Ray You Need REQUEST A DEMO Compact Design. Powerful Dental Imaging Portable dental X-ray equipment ensures clearer, quality radiographs. Evolve X-Ray is intended for intraoral radiography of the patient’s dentition for diagnostic purposes. It is an X-ray unit for dental use, with a nominal voltage of 60kVp, tube current of 2.5 mA and a focal spot of 0.4×0.4mm. With Evolve X-Ray, equipment leakage radiation is minimized by a radiopaque material collimator, avoiding unnecessary user exposure and directing radiation to the exam target. Get Full Specifications with the Product Hand Held Dental X-Ray Hand Held dental X-ray equipment ensures clearer, quality radiographs. Evolve X-Ray is intended for intraoral radiography of the patient’s dentition for diagnostic purposes. It is an X-ray unit for dental use, with a nominal voltage of 60kVp, tube current of 2.5 mA and a focal spot of 0.4×0.4mm. With Evolve X Ray, equipment leakage radiation is minimized by a radiopaque material collimator, avoiding unnecessary user exposure and directing radiation to the exam target. Get Full Specifications with the Product Why Portable Dental X-Ray? Portable: More mobility in calls. Light and Compact: Its lightness makes handling easy. Adaptable: Prepared for use in digital sensor, phosphor plate and radiographic film. Mobility: A product made to bring efficiency and sophistication everywhere Light and Compact: Its lightness facilitates handling, bringing practicality that increases day-to-day productivity. Perfect in execution: Prepared for use in intraoral sensor phosphor plate and radiographic film Why Hand Held Dental X-Ray? More mobility in calls. Light and Compact: Its lightness makes handling easy. Adaptable: Prepared for use in digital sensor, phosphor plate and radiographic film. Discover what a hand held dental x-ray can make possible for your practice. For many clinicians and practice owners, an investment in Evolve X Ray is intended for intraoral radiography of the patient’s dentition for diagnostic purposes. It is an X-ray unit for dental use, with a nominal voltage of 60kVp, tube current of 2.5 mA and a focal spot of 0.4×0.4mm. With Evolve X Ray, equipment leakage radiation is minimized by a radiopaque material collimator, avoiding unnecessary user exposure and directing radiation to the exam target. FIND A PRODUCT SPECIALIST REQUEST A DEMO Welcome to the new era of intraoral Precision Nominal voltage of 60kVp, tube current of 2.5 mA and a focal spot of 0.4×0.4mm. Mobility A product made to bring efficiency and sophistication everywhere. Safety With Evolve X-Ray, equipment leakage radiation is minimized by a radiopaque material collimator, avoiding unnecessary user exposure and directing radiation to the exam target. Discover what can make possible for your practice. For many clinicians and practice owners, an investment in technology from PreXion can become proﬁtable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to ﬁnance a product. CALCULATE YOUR SAVINGS Specifications: Target Angle 16° Ampoule Current 2,5 mA Heating and Cooling Curve See graph showing cylinder head cooling characteristics. Focus-to-skin distance 200 mm Focus-receptor distance 220 mm Reference Axis At the center of the positioning cone Maximum Energy Stored in 1 Hour 150 mAs Selectable Irradiation Time Range 0.01 to 1 second (With 0.01s steps) Work Factor 1 : 60 Permanent Filtration Glass: > 1.0 mm Al eq. @ 60kVp Plastic: > 0.05 mm Al eq. @ 60kVp Aluminum filter: > 1.0 mm Al @ 60kVp Total Filtration > 2,05 mm Al eq. @ 60kVp Model LBP6S1PAXR Nature of Radiation High Frequency Wave Motion Weight 48,5017 lbs Focal Point 0,4 x 0,4 mm Maximum Output Power 150 W (60kV x 2,5mA) Leakage Radiation < 0,2 mGy/h @ 60kV, 2.5 mA Operating temperature Charged: 0° to 40°C Discharged: -20° to 75°C Ampoule Voltage 60kV Charging Voltage 24 V Shear Voltage 16,5 V Maximum Operating Voltage (Intensity) 60 kVp (high frequency) Nominal Voltage 21,6V – 2.50Ah Type Rechargeable Li-ion Generator type High-frequency constant power generator Type of Radiation X-ray Characterization of an X-ray radiation emitter array Download Experience True Clarity & Precision Schedule a demo today. FIND A PRODUCT SPECIALIST"
      },
      {
        "kind": "heading",
        "text": "EVOLVE X-RAY: HAND HELD DENTAL X-RAY"
      },
      {
        "kind": "heading",
        "text": "One Device. Every Dental X-Ray You Need"
      },
      {
        "kind": "heading",
        "text": "Compact Design. Powerful Dental Imaging"
      },
      {
        "kind": "paragraph",
        "text": "Portable dental X-ray equipment ensures clearer, quality radiographs. Evolve X-Ray is intended for intraoral radiography of the patient’s dentition for diagnostic purposes. It is an X-ray unit for dental use, with a nominal voltage of 60kVp, tube current of 2.5 mA and a focal spot of 0.4×0.4mm. With Evolve X-Ray, equipment leakage radiation is minimized by a radiopaque material collimator, avoiding unnecessary user exposure and directing radiation to the exam target."
      },
      {
        "kind": "heading",
        "text": "Hand Held Dental X-Ray"
      },
      {
        "kind": "paragraph",
        "text": "Hand Held dental X-ray equipment ensures clearer, quality radiographs. Evolve X-Ray is intended for intraoral radiography of the patient’s dentition for diagnostic purposes. It is an X-ray unit for dental use, with a nominal voltage of 60kVp, tube current of 2.5 mA and a focal spot of 0.4×0.4mm. With Evolve X Ray, equipment leakage radiation is minimized by a radiopaque material collimator, avoiding unnecessary user exposure and directing radiation to the exam target."
      },
      {
        "kind": "heading",
        "text": "Why Portable Dental X-Ray?"
      },
      {
        "kind": "paragraph",
        "text": "Portable: More mobility in calls. Light and Compact: Its lightness makes handling easy. Adaptable: Prepared for use in digital sensor, phosphor plate and radiographic film."
      },
      {
        "kind": "heading",
        "text": "Mobility:"
      },
      {
        "kind": "paragraph",
        "text": "A product made to bring efficiency and sophistication everywhere"
      },
      {
        "kind": "heading",
        "text": "Light and Compact:"
      },
      {
        "kind": "paragraph",
        "text": "Its lightness facilitates handling, bringing practicality that increases day-to-day productivity."
      },
      {
        "kind": "heading",
        "text": "Perfect in execution:"
      },
      {
        "kind": "paragraph",
        "text": "Prepared for use in intraoral sensor phosphor plate and radiographic film"
      },
      {
        "kind": "heading",
        "text": "Why Hand Held Dental X-Ray?"
      },
      {
        "kind": "paragraph",
        "text": "More mobility in calls. Light and Compact: Its lightness makes handling easy. Adaptable: Prepared for use in digital sensor, phosphor plate and radiographic film."
      },
      {
        "kind": "heading",
        "text": "Discover what a hand held dental x-ray can make possible for your practice."
      },
      {
        "kind": "paragraph",
        "text": "For many clinicians and practice owners, an investment in Evolve X Ray is intended for intraoral radiography of the patient’s dentition for diagnostic purposes. It is an X-ray unit for dental use, with a nominal voltage of 60kVp, tube current of 2.5 mA and a focal spot of 0.4×0.4mm."
      },
      {
        "kind": "paragraph",
        "text": "With Evolve X Ray, equipment leakage radiation is minimized by a radiopaque material collimator, avoiding unnecessary user exposure and directing radiation to the exam target."
      },
      {
        "kind": "heading",
        "text": "Welcome to the new era of intraoral"
      },
      {
        "kind": "paragraph",
        "text": "Nominal voltage of 60kVp, tube current of 2.5 mA and a focal spot of 0.4×0.4mm."
      },
      {
        "kind": "heading",
        "text": "Discover what can make possible for your practice."
      },
      {
        "kind": "paragraph",
        "text": "For many clinicians and practice owners, an investment in technology from PreXion can become proﬁtable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to ﬁnance a product."
      },
      {
        "kind": "heading",
        "text": "Specifications:"
      },
      {
        "kind": "heading",
        "text": "Characterization of an X-ray radiation emitter array"
      },
      {
        "kind": "paragraph",
        "text": "Download"
      },
      {
        "kind": "heading",
        "text": "Experience True Clarity & Precision"
      },
      {
        "kind": "heading",
        "text": "Schedule a demo today."
      }
    ],
    "callsToAction": "- REQUEST A DEMO (https://www.prexion.com/request-a-demo/) - Get Full Specifications with the Product (https://dabiatlante.com.br/en/produtos/eagle-x-ray-portable-dental-x-rays/) - FIND A PRODUCT SPECIALIST (https://www.prexion.com/product-specialists/) - CALCULATE YOUR SAVINGS (https://www.prexion.com/roi-calculator/) - Download Characterization of an X-ray radiation emitter array - Telefone: 855-PREXION - Suporte ao Cliente: (650) 212-0314 - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [
      "/manus-storage/545c6f57b539-https___downloads.alliage-global.com_wp-content_uploads_2025_03_77000001845-Portatil-AXR65-S-74_1abcdf88.pdf"
    ],
    "externalLinks": [
      "https://dabiatlante.com.br/en/produtos/eagle-x-ray-portable-dental-x-rays/",
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      },
      {
        "label": "Get Full Specifications with the Product",
        "url": "https://dabiatlante.com.br/en/produtos/eagle-x-ray-portable-dental-x-rays/#info-tec"
      },
      {
        "label": "Get Full Specifications with the Product",
        "url": "https://www.prexion.com/evolve-x-ray-hand-held-dental-x-rays/"
      },
      {
        "label": "FIND A PRODUCT SPECIALIST",
        "url": "https://www.prexion.com/product-specialists/"
      },
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      },
      {
        "label": "ROI calculator",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "CALCULATE YOUR SAVINGS",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "See graph showing cylinder head cooling characteristics.",
        "url": "https://www.prexion.com/evolve-x-ray-hand-held-dental-x-rays/#grafic"
      },
      {
        "label": "Download",
        "url": "https://www.prexion.com/wp-content/uploads/2026/02/https___downloads.alliage-global.com_wp-content_uploads_2025_03_77000001845-Portatil-AXR65-S-74.pdf"
      },
      {
        "label": "FIND A PRODUCT SPECIALIST",
        "url": "https://www.prexion.com/product-specialists/"
      }
    ],
    "images": [
      {
        "alt": "Evolve X-Ray: Hand Held Dental X-Rays",
        "url": "/manus-storage/466e52dc650d-evolve-xray11_432d0533.png"
      },
      {
        "alt": "Eagle X-ray",
        "url": "/manus-storage/f2850c0247c6-evolve-xray33_1f0a843d.png"
      },
      {
        "alt": "Eagle X-ray",
        "url": "/manus-storage/eb2116be8a48-evolve-xray22_c9cc6e87.png"
      },
      {
        "alt": "Eagle X-ray",
        "url": "/manus-storage/466e52dc650d-evolve-xray11_432d0533.png"
      },
      {
        "alt": "Evolve X-Ray: Hand Held Dental X-Rays",
        "url": "/manus-storage/50022a10f632-graphic-x-ray-300x169_5f98f9b6.jpg"
      }
    ],
    "migrationAction": "consolidate",
    "notes": "A página contém duplicação de blocos de texto (ex: \"Hand Held Dental X-Ray\" repete informações do bloco anterior). Há menções ao \"Eagle X-ray\" que podem ser inconsistentes com o produto \"Evolve X-Ray\". O footer está duplicado. Recomenda-se consolidar em uma página de produto unificada e corrigir as inconsistências de nomenclatura."
  },
  "/explorer-ex-cbct-scanner-complimentary-demo": {
    "sourceUrl": "https://www.prexion.com/explorer-ex-cbct-scanner-complimentary-demo/",
    "route": "/explorer-ex-cbct-scanner-complimentary-demo",
    "canonicalTarget": "/explorer-ex-cbct-scanner-complimentary-demo",
    "title": "Explorer EX CBCT Scanner – Request a Demo (LP)",
    "type": "landing-page",
    "relevance": "high",
    "summary": "Explorer EX CBCT Scanner – Request a Demo Landing page offering a complimentary demo for the Explorer EX CBCT Scanner. Highlights include the lowest price ever for a large FOV CBCT, 4 Fields of View 5x5cm, 10x10cm, 15x10cm, 15x16cm , 0.03mm focal spot, and a 10-Year All Parts, 3-Year Labor Warranty. Get a Complimentary Demo Encourages scheduling a demo with a specialist to understand the benefits of precise imaging, how to visualize problem areas, and compare CBCT scanners. PreXion Explorer EX CBCT Scanner Highlights PreXion's 15+ years of experience in 3D X-ray diagnostics. Mentions in-person training, service, maintenance, and an extended warranty covering the entire device, including the lens. Why CBCT? Expl",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Lowest price ever for a large FOV CBCT! 4 Fields of View (FOV): 5x5cm, 10x10cm, 15x10cm and 15x16cm (single pass with no stitching) Smallest (.03mm) focal spot for outstanding image clarity A great option for airway/sleep diagnostics, TMD analysis, oral surgery and orthodontia 10-Year, All Parts, 3-Year Labor Warranty Limited time offer while supplies last. Lowest price ever for a large FOV CBCT! 4 Fields of View (FOV): 5x5cm, 10x10cm, 15x10cm and 15x16cm (single pass with no stitching) Smallest (.03mm) focal spot for outstanding image clarity A great option for airway/sleep diagnostics, TMD analysis, oral surgery and orthodontia 10-Year, All Parts, 3-Year Labor Warranty Limited time offer while supplies last. Get a Complimentary Demo Ready to increase production and save now? Yes, I want to schedule a demo with a PreXion 3D cone beam specialist so I can get: A clear understanding of how precise imaging gives way to improved diagnostic capabilities, easier treatment planning, quicker patient treatment acceptance and increased revenue Clarity on how to angle and zoom in on problem areas to help patients visualize their case and treatment A comparison of the attributes of various 3D CBCT scanners and how each stacks up in increasing practice production PreXion Explorer EX CBCT Scanner Few companies on the market are as specialized in three-dimensional X-ray diagnostics as PreXion. With more than 15 years of experience in software-supported 3D X-ray imaging, PreXion systems offer outstanding precision for safe diagnostics and planning in all areas of dentistry. Let PreXion empower you and your practice with in-person training, service and maintenance, while you achieve peace of mind with a full-service extended warranty which covers the entire device, lens included. Why CBCT? Why 3D instead of 2D? Three-dimensional CBCT imaging is decisively superior to conventional two-dimensional X-ray equipment, as the dental professional can spatially examine the oral conditions according to the most varied medical aspects. 3D imaging can also reduce the length of time that patients are exposed to radiation. In addition, the volume structure of the hard and soft tissues is incomparably better represented in 3D CBCT imaging than in 2D X-rays. Why a large FOV? With one of the largest fields of view (FOV) on the market (15 x 16cm), the PreXion Explorer EX CBCT can display all the important anatomical structures of the skull in great detail. The scan can be captured in only 10 seconds minimizing patient exposure and movement and maximizing image quality. The powerful imaging software helps to highlight and measure relevant areas. Large-area spatial image analysis helps to develop the best therapy options, particularly in oral and maxillofacial surgery, as well as ear, nose and throat medicine. See the profitability of CBCT technology from PreXion with our ROI calculator today. Get Full Specifications with the Product Brochure Why PreXion Explorer EX CBCT Scanner? The powerful system components of the PreXion Explorer EX CBCT enable an extraordinary combination of the most precise 3D imaging, large image detail, lowest radiation exposure, reliable diagnostics and digital planning for all indications in modern dentistry, including periodontology, endodontics, implantology, airway/sleep diagnostics, TMD treatment, orthodontics and maxillofacial surgery, among many others. Its patient management system is designed for secure and networked communication of patient data across multiple rooms within a practice and can be integrated into the existing infrastructure with ease. With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side. PreXion Explorer EX CBCT Scanner Few companies on the market are as specialized in three-dimensional X-ray diagnostics as PreXion. With more than 15 years of experience in software-supported 3D X-ray imaging, PreXion systems offer outstanding precision for safe diagnostics and planning in all areas of dentistry. Let PreXion empower you and your practice with in-person training, service and maintenance, while you achieve peace of mind with a full-service extended warranty which covers the entire device, lens included. Why CBCT? Why 3D instead of 2D? Three-dimensional CBCT imaging is decisively superior to conventional two-dimensional X-ray equipment, as the dental professional can spatially examine the oral conditions according to the most varied medical aspects. 3D imaging can also reduce the length of time that patients are exposed to radiation. In addition, the volume structure of the hard and soft tissues is incomparably better represented in 3D CBCT imaging than in 2D X-rays. Why a large FOV? With one of the largest fields of view (FOV) on the market (15 x 16cm), the PreXion Explorer EX CBCT can display all the important anatomical structures of the skull in great detail. The scan can be captured in only 10 seconds minimizing patient exposure and movement and maximizing image quality. The powerful imaging software helps to highlight and measure relevant areas. Large-area spatial image analysis helps to develop the best therapy options, particularly in oral and maxillofacial surgery, as well as ear, nose and throat medicine. See the profitability of CBCT technology from PreXion with our ROI calculator today. Get Full Specifications with the Product Brochure Why PreXion Explorer EX CBCT Scanner? The powerful system components of the PreXion Explorer EX CBCT enable an extraordinary combination of the most precise 3D imaging, large image detail, lowest radiation exposure, reliable diagnostics and digital planning for all indications in modern dentistry, including periodontology, endodontics, implantology, airway/sleep diagnostics, TMD treatment, orthodontics and maxillofacial surgery, among many others. Its patient management system is designed for secure and networked communication of patient data across multiple rooms within a practice and can be integrated into the existing infrastructure with ease. With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side. Highlights: Captures a large 15x16cm field of view scan in a single pass in only 10 seconds for better image quality and less patient exposure Accurate 360-degree gantry rotation 260-1,024 projected views Dedicated 2D (PAN) mode option Clearest detail with a 0.3mm focal spot & 0.07-0.3mm voxel size Key Features: 0.3×0.3mm focal spot – the smallest in the industry Multiple ﬁelds of view (FOV) ranging from 5×5cm to 15×16cm. Low dose, HD and Endo CT modes with scan times of 10, 18 and 20 seconds respectively 14-second pano Clinical Applications: Implant placement surgery Endodontics Periodontics Orthodontics Oral-maxillofacial surgery TMJ treatment Pathology Impacted and supernumerary teeth DICOM export for implant surgical guides & CAD/CAM integration Airway analysis Discover what a CBCT Scanner can make possible for your practice. For many clinicians and practice owners, an investment in CBCT technology from PreXion can become profitable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to finance a product. CALCULATE YOUR SAVINGS Software Features With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side. Multi-data Load multiple patient scans on a single screen. Synchronize pre- and post-operative scans and detect differences slice by slice. Patient Education and Presentation Quickly capture 3D animated video clips for patient education and lecture presentations. Increase case acceptance through better patient understanding. Collaborative Tools Automatically save 3D image reports to an MS Word template and attach to the patient’s practice management record. Collaborate with referring dentists by burning a patient disc with the sample viewer. Capture and email images quickly. Remote Access Work on cases from home or a satellite ofﬁce without long connectivity delays. Lead virtual treatment planning meetings remotely with PreXion3D. Thin Client Server PreXion3D CBCT systems do not require computer hardware upgrades. Their software does not slow down network bandwidth like other CBCT systems. Implant Library Use our extensive library or customize your own. Save Scenes Save your case workup as a scene or create multiple saved scenes with a single scan. 3D Templates Save time with over 20 pre-made 3D volume rendering templates or customize your own. Slab and Cutting Slab feature allows the clinician to see inside structures while rotating the 3D image. Cut away structures to see exactly what is pertinent to your case. Request a Demo Discover what CBCT can make possible for your practice. For many clinicians and practice owners, an investment in CBCT technology from PreXion can become proﬁtable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to ﬁnance a product. CALCULATE YOUR SAVINGS What is the Industry Saying? What is the Industry Saying? “Over 5 years ago, I bought my second CBCT and it was a PreXion. Over these past 5 years, the training and service have been second to none and if you’re investing in such a piece of equipment, it is essential both of these criteria be 100%. Add the great images and easy software interface, my entire multi-specialty users just love our unit. This company walks the walk for its clients and continues to set the bar for anyone interested in purchasing a CBCT.” – Lou Graham DDS FAGD, USA"
      },
      {
        "kind": "heading",
        "text": "Lowest price ever for a large FOV CBCT!"
      },
      {
        "kind": "list",
        "text": "4 Fields of View (FOV): 5x5cm, 10x10cm, 15x10cm and 15x16cm (single pass with no stitching)"
      },
      {
        "kind": "list",
        "text": "Smallest (.03mm) focal spot for outstanding image clarity"
      },
      {
        "kind": "list",
        "text": "A great option for airway/sleep diagnostics, TMD analysis, oral surgery and orthodontia"
      },
      {
        "kind": "paragraph",
        "text": "10-Year, All Parts, 3-Year Labor Warranty"
      },
      {
        "kind": "heading",
        "text": "Get a Complimentary Demo"
      },
      {
        "kind": "heading",
        "text": "Ready to increase production and save now?"
      },
      {
        "kind": "paragraph",
        "text": "Yes, I want to schedule a demo with a PreXion 3D cone beam specialist so I can get:"
      },
      {
        "kind": "list",
        "text": "A clear understanding of how precise imaging gives way to improved diagnostic capabilities, easier treatment planning, quicker patient treatment acceptance and increased revenue"
      },
      {
        "kind": "list",
        "text": "Clarity on how to angle and zoom in on problem areas to help patients visualize their case and treatment"
      },
      {
        "kind": "list",
        "text": "A comparison of the attributes of various 3D CBCT scanners and how each stacks up in increasing practice production"
      },
      {
        "kind": "heading",
        "text": "PreXion Explorer EX CBCT Scanner"
      },
      {
        "kind": "paragraph",
        "text": "Few companies on the market are as specialized in three-dimensional X-ray diagnostics as PreXion. With more than 15 years of experience in software-supported 3D X-ray imaging, PreXion systems offer outstanding precision for safe diagnostics and planning in all areas of dentistry."
      },
      {
        "kind": "paragraph",
        "text": "Let PreXion empower you and your practice with in-person training, service and maintenance, while you achieve peace of mind with a full-service extended warranty which covers the entire device, lens included."
      },
      {
        "kind": "heading",
        "text": "Why CBCT?"
      },
      {
        "kind": "paragraph",
        "text": "Why 3D instead of 2D? Three-dimensional CBCT imaging is decisively superior to conventional two-dimensional X-ray equipment, as the dental professional can spatially examine the oral conditions according to the most varied medical aspects. 3D imaging can also reduce the length of time that patients are exposed to radiation. In addition, the volume structure of the hard and soft tissues is incomparably better represented in 3D CBCT imaging than in 2D X-rays."
      },
      {
        "kind": "heading",
        "text": "Why a large FOV?"
      },
      {
        "kind": "paragraph",
        "text": "With one of the largest fields of view (FOV) on the market (15 x 16cm), the PreXion Explorer EX CBCT can display all the important anatomical structures of the skull in great detail. The scan can be captured in only 10 seconds minimizing patient exposure and movement and maximizing image quality. The powerful imaging software helps to highlight and measure relevant areas. Large-area spatial image analysis helps to develop the best therapy options, particularly in oral and maxillofacial surgery, as well as ear, nose and throat medicine."
      },
      {
        "kind": "paragraph",
        "text": "See the profitability of CBCT technology from PreXion with our ROI calculator today."
      },
      {
        "kind": "heading",
        "text": "Why PreXion Explorer EX CBCT Scanner?"
      },
      {
        "kind": "paragraph",
        "text": "The powerful system components of the PreXion Explorer EX CBCT enable an extraordinary combination of the most precise 3D imaging, large image detail, lowest radiation exposure, reliable diagnostics and digital planning for all indications in modern dentistry, including periodontology, endodontics, implantology, airway/sleep diagnostics, TMD treatment, orthodontics and maxillofacial surgery, among many others. Its patient management system is designed for secure and networked communication of patient data across multiple rooms within a practice and can be integrated into the existing infrastructure with ease. With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side."
      },
      {
        "kind": "heading",
        "text": "Highlights:"
      },
      {
        "kind": "list",
        "text": "Captures a large 15x16cm field of view scan in a single pass in only 10 seconds for better image quality and less patient exposure"
      },
      {
        "kind": "list",
        "text": "Accurate 360-degree gantry rotation"
      },
      {
        "kind": "list",
        "text": "260-1,024 projected views"
      },
      {
        "kind": "list",
        "text": "Dedicated 2D (PAN) mode option"
      },
      {
        "kind": "list",
        "text": "Clearest detail with a 0.3mm focal spot & 0.07-0.3mm voxel size"
      },
      {
        "kind": "heading",
        "text": "Key Features:"
      },
      {
        "kind": "list",
        "text": "0.3×0.3mm focal spot – the smallest in the industry"
      },
      {
        "kind": "list",
        "text": "Multiple ﬁelds of view (FOV) ranging from 5×5cm to 15×16cm."
      },
      {
        "kind": "list",
        "text": "Low dose, HD and Endo CT modes with scan times of 10, 18 and 20 seconds respectively"
      },
      {
        "kind": "list",
        "text": "14-second pano"
      },
      {
        "kind": "heading",
        "text": "Clinical Applications:"
      },
      {
        "kind": "list",
        "text": "Implant placement surgery"
      },
      {
        "kind": "list",
        "text": "Endodontics"
      },
      {
        "kind": "list",
        "text": "Periodontics"
      },
      {
        "kind": "list",
        "text": "Orthodontics"
      },
      {
        "kind": "list",
        "text": "Oral-maxillofacial surgery"
      },
      {
        "kind": "list",
        "text": "TMJ treatment"
      },
      {
        "kind": "list",
        "text": "Pathology"
      },
      {
        "kind": "list",
        "text": "Impacted and supernumerary teeth"
      },
      {
        "kind": "list",
        "text": "DICOM export for implant surgical guides & CAD/CAM integration"
      },
      {
        "kind": "list",
        "text": "Airway analysis"
      },
      {
        "kind": "heading",
        "text": "Discover what a CBCT Scanner can make possible for your practice."
      },
      {
        "kind": "paragraph",
        "text": "For many clinicians and practice owners, an investment in CBCT technology from PreXion can become profitable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to finance a product."
      },
      {
        "kind": "heading",
        "text": "Software Features"
      },
      {
        "kind": "heading",
        "text": "With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side."
      },
      {
        "kind": "paragraph",
        "text": "Load multiple patient scans on a single screen. Synchronize pre- and post-operative scans and detect differences slice by slice."
      },
      {
        "kind": "paragraph",
        "text": "Quickly capture 3D animated video clips for patient education and lecture presentations. Increase case acceptance through better patient understanding."
      },
      {
        "kind": "paragraph",
        "text": "Automatically save 3D image reports to an MS Word template and attach to the patient’s practice management record. Collaborate with referring dentists by burning a patient disc with the sample viewer. Capture and email images quickly."
      },
      {
        "kind": "paragraph",
        "text": "Work on cases from home or a satellite ofﬁce without long connectivity delays. Lead virtual treatment planning meetings remotely with PreXion3D."
      },
      {
        "kind": "paragraph",
        "text": "PreXion3D CBCT systems do not require computer hardware upgrades. Their software does not slow down network bandwidth like other CBCT systems."
      },
      {
        "kind": "paragraph",
        "text": "Use our extensive library or customize your own."
      },
      {
        "kind": "paragraph",
        "text": "Save your case workup as a scene or create multiple saved scenes with a single scan."
      },
      {
        "kind": "paragraph",
        "text": "Save time with over 20 pre-made 3D volume rendering templates or customize your own."
      },
      {
        "kind": "paragraph",
        "text": "Slab feature allows the clinician to see inside structures while rotating the 3D image. Cut away structures to see exactly what is pertinent to your case."
      },
      {
        "kind": "heading",
        "text": "Discover what CBCT can make possible for your practice."
      },
      {
        "kind": "paragraph",
        "text": "For many clinicians and practice owners, an investment in CBCT technology from PreXion can become proﬁtable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to ﬁnance a product."
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“Over 5 years ago, I bought my second CBCT and it was a PreXion. Over these past 5 years, the training and service have been second to none and if you’re investing in such a piece of equipment, it is essential both of these criteria be 100%. Add the great images and easy software interface, my entire multi-specialty users just love our unit. This company walks the walk for its clients and continues to set the bar for anyone interested in purchasing a CBCT.”"
      }
    ],
    "callsToAction": "- Request a Demo - Get a Complimentary Demo - Yes, I want to schedule a demo with a PreXion 3D cone beam specialist - CALCULATE YOUR SAVINGS - Contact Us: 855-PREXION - Client Support: (650) 212-0314",
    "downloads": [
      "https://www.prexion.com/wp-content/uploads/2024/02/PRE-Explorer-EX-ProductBrochure-SinglePages-NoCeph.pdf"
    ],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.fda.gov/radiation-emitting-products/medical-x-ray-imaging/dental-cone-beam-computed-tomography#:~:text=Cone%2Dbeam%20computed%20tomography%20systems,%2Dshaped%20X%2Dray%20beam",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct",
      "https://youtu.be/ekmUCulM9SU",
      "https://youtu.be/xJDO3jND690"
    ],
    "links": [
      {
        "label": "technology",
        "url": "https://www.fda.gov/radiation-emitting-products/medical-x-ray-imaging/dental-cone-beam-computed-tomography#:~:text=Cone%2Dbeam%20computed%20tomography%20systems,%2Dshaped%20X%2Dray%20beam."
      },
      {
        "label": "ROI calculator",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "Get Full Specifications with the Product Brochure",
        "url": "https://www.prexion.com/wp-content/uploads/2024/02/PRE-Explorer-EX-ProductBrochure-SinglePages-NoCeph.pdf"
      },
      {
        "label": "technology",
        "url": "https://www.fda.gov/radiation-emitting-products/medical-x-ray-imaging/dental-cone-beam-computed-tomography#:~:text=Cone%2Dbeam%20computed%20tomography%20systems,%2Dshaped%20X%2Dray%20beam."
      },
      {
        "label": "ROI calculator",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "Get Full Specifications with the Product Brochure",
        "url": "https://www.prexion.com/wp-content/uploads/2024/02/PRE-Explorer-EX-ProductBrochure-SinglePages-NoCeph.pdf"
      },
      {
        "label": "CALCULATE YOUR SAVINGS",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "multiple patient scans",
        "url": "https://youtu.be/ekmUCulM9SU"
      },
      {
        "label": "Capture",
        "url": "https://youtu.be/xJDO3jND690"
      },
      {
        "label": "CALCULATE YOUR SAVINGS",
        "url": "https://www.prexion.com/roi-calculator/"
      }
    ],
    "images": [
      {
        "alt": "Explorer EX CBCT Scanner – Request a Demo (LP)",
        "url": "/manus-storage/e16f4a52e819-PRE-Offer-Starburst_e1e38cc1.png"
      },
      {
        "alt": "Explorer EX CBCT Scanner – Request a Demo (LP)",
        "url": "/manus-storage/872e3f26015f-PRE-Explorer-EX_31b32cd6.jpg"
      }
    ],
    "migrationAction": "consolidate",
    "notes": "A página apresenta duplicação de conteúdo evidente no texto extraído, onde blocos inteiros (\"Why CBCT?\", \"Why a large FOV?\", \"Why PreXion Explorer EX CBCT Scanner?\") se repetem. É uma landing page focada em agendar demonstrações para o produto Explorer EX. Recomenda-se consolidar o conteúdo relevante na página principal do produto no novo site, removendo as duplicações e mantendo os CTAs e downloads."
  },
  "/explorer-ex-cbct-scanner-free-download": {
    "sourceUrl": "https://www.prexion.com/explorer-ex-cbct-scanner-free-download/",
    "route": "/explorer-ex-cbct-scanner-free-download",
    "canonicalTarget": "/explorer-ex-cbct-scanner-free-download",
    "title": "Explorer EX CBCT Scanner – Download Brochure (LP)",
    "type": "landing-page",
    "relevance": "high",
    "summary": "Explorer EX CBCT Scanner – Download Brochure LP Página para download da brochura do scanner Explorer EX CBCT. Destaca o preço baixo para um CBCT de grande FOV, 4 campos de visão 5x5cm a 15x16cm , ponto focal de 0.03mm e garantia de 10 anos para peças e 3 anos para mão de obra. Get the Full Specifications with The Product Brochure Instrução para preencher o formulário abaixo e baixar a brochura. PreXion Explorer EX CBCT Scanner Apresenta a PreXion como especialista em diagnóstico por raio-X 3D com mais de 15 anos de experiência. Menciona treinamento presencial, serviço, manutenção e garantia estendida completa. Why CBCT? Explica as vantagens da imagem 3D CBCT sobre o equipamento de raio-X 2D convencional, destac",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Lowest price ever for a large FOV CBCT! 4 Fields of View (FOV): 5x5cm, 10x10cm, 15x10cm and 15x16cm (single pass with no stitching) Smallest (.03mm) focal spot for outstanding image clarity A great option for airway/sleep diagnostics, TMD analysis, oral surgery and orthodontia 10-Year, All Parts, 3-Year Labor Warranty Limited time offer while supplies last. Lowest price ever for a large FOV CBCT! 4 Fields of View (FOV): 5x5cm, 10x10cm, 15x10cm and 15x16cm (single pass with no stitching) Smallest (.03mm) focal spot for outstanding image clarity A great option for airway/sleep diagnostics, TMD analysis, oral surgery and orthodontia 10-Year, All Parts, 3-Year Labor Warranty Limited time offer while supplies last. Get the Full Specifications with The Product Brochure Please fill out the form below to download the Explorer EX CBCT Scanner product brochure. PreXion Explorer EX CBCT Scanner Few companies on the market are as specialized in three-dimensional X-ray diagnostics as PreXion. With more than 15 years of experience in software-supported 3D X-ray imaging, PreXion systems offer outstanding precision for safe diagnostics and planning in all areas of dentistry. Let PreXion empower you and your practice with in-person training, service and maintenance, while you achieve peace of mind with a full-service extended warranty which covers the entire device, lens included. Why CBCT? Why 3D instead of 2D? Three-dimensional CBCT imaging is decisively superior to conventional two-dimensional X-ray equipment, as the dental professional can spatially examine the oral conditions according to the most varied medical aspects. 3D imaging can also reduce the length of time that patients are exposed to radiation. In addition, the volume structure of the hard and soft tissues is incomparably better represented in 3D CBCT imaging than in 2D X-rays. Why a large FOV? With one of the largest fields of view (FOV) on the market (15 x 16cm), the PreXion Explorer EX CBCT can display all the important anatomical structures of the skull in great detail. The scan can be captured in only 10 seconds minimizing patient exposure and movement and maximizing image quality. The powerful imaging software helps to highlight and measure relevant areas. Large-area spatial image analysis helps to develop the best therapy options, particularly in oral and maxillofacial surgery, as well as ear, nose and throat medicine. See the profitability of CBCT technology from PreXion with our ROI calculator today. Get Full Specifications with the Product Brochure Why PreXion Explorer EX CBCT Scanner? The powerful system components of the PreXion Explorer EX CBCT enable an extraordinary combination of the most precise 3D imaging, large image detail, lowest radiation exposure, reliable diagnostics and digital planning for all indications in modern dentistry, including periodontology, endodontics, implantology, airway/sleep diagnostics, TMD treatment, orthodontics and maxillofacial surgery, among many others. Its patient management system is designed for secure and networked communication of patient data across multiple rooms within a practice and can be integrated into the existing infrastructure with ease. With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side. PreXion Explorer EX CBCT Scanner Few companies on the market are as specialized in three-dimensional X-ray diagnostics as PreXion. With more than 15 years of experience in software-supported 3D X-ray imaging, PreXion systems offer outstanding precision for safe diagnostics and planning in all areas of dentistry. Let PreXion empower you and your practice with in-person training, service and maintenance, while you achieve peace of mind with a full-service extended warranty which covers the entire device, lens included. Why CBCT? Why 3D instead of 2D? Three-dimensional CBCT imaging is decisively superior to conventional two-dimensional X-ray equipment, as the dental professional can spatially examine the oral conditions according to the most varied medical aspects. 3D imaging can also reduce the length of time that patients are exposed to radiation. In addition, the volume structure of the hard and soft tissues is incomparably better represented in 3D CBCT imaging than in 2D X-rays. Why a large FOV? With one of the largest fields of view (FOV) on the market (15 x 16cm), the PreXion Explorer EX CBCT can display all the important anatomical structures of the skull in great detail. The scan can be captured in only 10 seconds minimizing patient exposure and movement and maximizing image quality. The powerful imaging software helps to highlight and measure relevant areas. Large-area spatial image analysis helps to develop the best therapy options, particularly in oral and maxillofacial surgery, as well as ear, nose and throat medicine. See the profitability of CBCT technology from PreXion with our ROI calculator today. Get Full Specifications with the Product Brochure Why PreXion Explorer EX CBCT Scanner? The powerful system components of the PreXion Explorer EX CBCT enable an extraordinary combination of the most precise 3D imaging, large image detail, lowest radiation exposure, reliable diagnostics and digital planning for all indications in modern dentistry, including periodontology, endodontics, implantology, airway/sleep diagnostics, TMD treatment, orthodontics and maxillofacial surgery, among many others. Its patient management system is designed for secure and networked communication of patient data across multiple rooms within a practice and can be integrated into the existing infrastructure with ease. With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side. Highlights: Captures a large 15x16cm field of view scan in a single pass in only 10 seconds for better image quality and less patient exposure Accurate 360-degree gantry rotation 260-1,024 projected views Dedicated 2D (PAN) mode option Clearest detail with a 0.3mm focal spot & 0.07-0.3mm voxel size Key Features: 0.3×0.3mm focal spot – the smallest in the industry Multiple ﬁelds of view (FOV) ranging from 5×5cm to 15×16cm. Low dose, HD and Endo CT modes with scan times of 10, 18 and 20 seconds respectively 14-second pano Clinical Applications: Implant placement surgery Endodontics Periodontics Orthodontics Oral-maxillofacial surgery TMJ treatment Pathology Impacted and supernumerary teeth DICOM export for implant surgical guides & CAD/CAM integration Airway analysis Software Features With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side. Multi-data Load multiple patient scans on a single screen. Synchronize pre- and post-operative scans and detect differences slice by slice. Patient Education and Presentation Quickly capture 3D animated video clips for patient education and lecture presentations. Increase case acceptance through better patient understanding. Collaborative Tools Automatically save 3D image reports to an MS Word template and attach to the patient’s practice management record. Collaborate with referring dentists by burning a patient disc with the sample viewer. Capture and email images quickly. Remote Access Work on cases from home or a satellite ofﬁce without long connectivity delays. Lead virtual treatment planning meetings remotely with PreXion3D. Thin Client Server PreXion3D CBCT systems do not require computer hardware upgrades. Their software does not slow down network bandwidth like other CBCT systems. Implant Library Use our extensive library or customize your own. Save Scenes Save your case workup as a scene or create multiple saved scenes with a single scan. 3D Templates Save time with over 20 pre-made 3D volume rendering templates or customize your own. Slab and Cutting Slab feature allows the clinician to see inside structures while rotating the 3D image. Cut away structures to see exactly what is pertinent to your case. Get Full Specifications with the Product Brochure What is the Industry Saying? What is the Industry Saying? “Over 5 years ago, I bought my second CBCT and it was a PreXion. Over these past 5 years, the training and service have been second to none and if you’re investing in such a piece of equipment, it is essential both of these criteria be 100%. Add the great images and easy software interface, my entire multi-specialty users just love our unit. This company walks the walk for its clients and continues to set the bar for anyone interested in purchasing a CBCT.” – Lou Graham DDS FAGD, USA"
      },
      {
        "kind": "heading",
        "text": "Lowest price ever for a large FOV CBCT!"
      },
      {
        "kind": "list",
        "text": "4 Fields of View (FOV): 5x5cm, 10x10cm, 15x10cm and 15x16cm (single pass with no stitching)"
      },
      {
        "kind": "list",
        "text": "Smallest (.03mm) focal spot for outstanding image clarity"
      },
      {
        "kind": "list",
        "text": "A great option for airway/sleep diagnostics, TMD analysis, oral surgery and orthodontia"
      },
      {
        "kind": "paragraph",
        "text": "10-Year, All Parts, 3-Year Labor Warranty"
      },
      {
        "kind": "heading",
        "text": "Get the Full Specifications with The Product Brochure"
      },
      {
        "kind": "heading",
        "text": "Please fill out the form below to download the Explorer EX CBCT Scanner product brochure."
      },
      {
        "kind": "heading",
        "text": "PreXion Explorer EX CBCT Scanner"
      },
      {
        "kind": "paragraph",
        "text": "Few companies on the market are as specialized in three-dimensional X-ray diagnostics as PreXion. With more than 15 years of experience in software-supported 3D X-ray imaging, PreXion systems offer outstanding precision for safe diagnostics and planning in all areas of dentistry."
      },
      {
        "kind": "paragraph",
        "text": "Let PreXion empower you and your practice with in-person training, service and maintenance, while you achieve peace of mind with a full-service extended warranty which covers the entire device, lens included."
      },
      {
        "kind": "heading",
        "text": "Why CBCT?"
      },
      {
        "kind": "paragraph",
        "text": "Why 3D instead of 2D? Three-dimensional CBCT imaging is decisively superior to conventional two-dimensional X-ray equipment, as the dental professional can spatially examine the oral conditions according to the most varied medical aspects. 3D imaging can also reduce the length of time that patients are exposed to radiation. In addition, the volume structure of the hard and soft tissues is incomparably better represented in 3D CBCT imaging than in 2D X-rays."
      },
      {
        "kind": "heading",
        "text": "Why a large FOV?"
      },
      {
        "kind": "paragraph",
        "text": "With one of the largest fields of view (FOV) on the market (15 x 16cm), the PreXion Explorer EX CBCT can display all the important anatomical structures of the skull in great detail. The scan can be captured in only 10 seconds minimizing patient exposure and movement and maximizing image quality. The powerful imaging software helps to highlight and measure relevant areas. Large-area spatial image analysis helps to develop the best therapy options, particularly in oral and maxillofacial surgery, as well as ear, nose and throat medicine."
      },
      {
        "kind": "paragraph",
        "text": "See the profitability of CBCT technology from PreXion with our ROI calculator today."
      },
      {
        "kind": "heading",
        "text": "Why PreXion Explorer EX CBCT Scanner?"
      },
      {
        "kind": "paragraph",
        "text": "The powerful system components of the PreXion Explorer EX CBCT enable an extraordinary combination of the most precise 3D imaging, large image detail, lowest radiation exposure, reliable diagnostics and digital planning for all indications in modern dentistry, including periodontology, endodontics, implantology, airway/sleep diagnostics, TMD treatment, orthodontics and maxillofacial surgery, among many others. Its patient management system is designed for secure and networked communication of patient data across multiple rooms within a practice and can be integrated into the existing infrastructure with ease. With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side."
      },
      {
        "kind": "heading",
        "text": "Highlights:"
      },
      {
        "kind": "list",
        "text": "Captures a large 15x16cm field of view scan in a single pass in only 10 seconds for better image quality and less patient exposure"
      },
      {
        "kind": "list",
        "text": "Accurate 360-degree gantry rotation"
      },
      {
        "kind": "list",
        "text": "260-1,024 projected views"
      },
      {
        "kind": "list",
        "text": "Dedicated 2D (PAN) mode option"
      },
      {
        "kind": "list",
        "text": "Clearest detail with a 0.3mm focal spot & 0.07-0.3mm voxel size"
      },
      {
        "kind": "heading",
        "text": "Key Features:"
      },
      {
        "kind": "list",
        "text": "0.3×0.3mm focal spot – the smallest in the industry"
      },
      {
        "kind": "list",
        "text": "Multiple ﬁelds of view (FOV) ranging from 5×5cm to 15×16cm."
      },
      {
        "kind": "list",
        "text": "Low dose, HD and Endo CT modes with scan times of 10, 18 and 20 seconds respectively"
      },
      {
        "kind": "list",
        "text": "14-second pano"
      },
      {
        "kind": "heading",
        "text": "Clinical Applications:"
      },
      {
        "kind": "list",
        "text": "Implant placement surgery"
      },
      {
        "kind": "list",
        "text": "Endodontics"
      },
      {
        "kind": "list",
        "text": "Periodontics"
      },
      {
        "kind": "list",
        "text": "Orthodontics"
      },
      {
        "kind": "list",
        "text": "Oral-maxillofacial surgery"
      },
      {
        "kind": "list",
        "text": "TMJ treatment"
      },
      {
        "kind": "list",
        "text": "Pathology"
      },
      {
        "kind": "list",
        "text": "Impacted and supernumerary teeth"
      },
      {
        "kind": "list",
        "text": "DICOM export for implant surgical guides & CAD/CAM integration"
      },
      {
        "kind": "list",
        "text": "Airway analysis"
      },
      {
        "kind": "heading",
        "text": "Software Features"
      },
      {
        "kind": "heading",
        "text": "With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side."
      },
      {
        "kind": "paragraph",
        "text": "Load multiple patient scans on a single screen. Synchronize pre- and post-operative scans and detect differences slice by slice."
      },
      {
        "kind": "paragraph",
        "text": "Quickly capture 3D animated video clips for patient education and lecture presentations. Increase case acceptance through better patient understanding."
      },
      {
        "kind": "paragraph",
        "text": "Automatically save 3D image reports to an MS Word template and attach to the patient’s practice management record. Collaborate with referring dentists by burning a patient disc with the sample viewer. Capture and email images quickly."
      },
      {
        "kind": "paragraph",
        "text": "Work on cases from home or a satellite ofﬁce without long connectivity delays. Lead virtual treatment planning meetings remotely with PreXion3D."
      },
      {
        "kind": "paragraph",
        "text": "PreXion3D CBCT systems do not require computer hardware upgrades. Their software does not slow down network bandwidth like other CBCT systems."
      },
      {
        "kind": "paragraph",
        "text": "Use our extensive library or customize your own."
      },
      {
        "kind": "paragraph",
        "text": "Save your case workup as a scene or create multiple saved scenes with a single scan."
      },
      {
        "kind": "paragraph",
        "text": "Save time with over 20 pre-made 3D volume rendering templates or customize your own."
      },
      {
        "kind": "paragraph",
        "text": "Slab feature allows the clinician to see inside structures while rotating the 3D image. Cut away structures to see exactly what is pertinent to your case."
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“Over 5 years ago, I bought my second CBCT and it was a PreXion. Over these past 5 years, the training and service have been second to none and if you’re investing in such a piece of equipment, it is essential both of these criteria be 100%. Add the great images and easy software interface, my entire multi-specialty users just love our unit. This company walks the walk for its clients and continues to set the bar for anyone interested in purchasing a CBCT.”"
      }
    ],
    "callsToAction": "- Preencher formulário para baixar brochura (não exibido no texto extraído, mas mencionado: \"Please fill out the form below to download the Explorer EX CBCT Scanner product brochure.\") - Contact Us: [855-PREXION](tel:855PREXION) - Client Support: [(650) 212-0314](tel:6502120314) - 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.fda.gov/radiation-emitting-products/medical-x-ray-imaging/dental-cone-beam-computed-tomography#:~:text=Cone%2Dbeam%20computed%20tomography%20systems,%2Dshaped%20X%2Dray%20beam",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct",
      "https://youtu.be/ekmUCulM9SU",
      "https://youtu.be/xJDO3jND690"
    ],
    "links": [
      {
        "label": "technology",
        "url": "https://www.fda.gov/radiation-emitting-products/medical-x-ray-imaging/dental-cone-beam-computed-tomography#:~:text=Cone%2Dbeam%20computed%20tomography%20systems,%2Dshaped%20X%2Dray%20beam."
      },
      {
        "label": "ROI calculator",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "technology",
        "url": "https://www.fda.gov/radiation-emitting-products/medical-x-ray-imaging/dental-cone-beam-computed-tomography#:~:text=Cone%2Dbeam%20computed%20tomography%20systems,%2Dshaped%20X%2Dray%20beam."
      },
      {
        "label": "ROI calculator",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "multiple patient scans",
        "url": "https://youtu.be/ekmUCulM9SU"
      },
      {
        "label": "Capture",
        "url": "https://youtu.be/xJDO3jND690"
      }
    ],
    "images": [
      {
        "alt": "Explorer EX CBCT Scanner – Download Brochure (LP)",
        "url": "/manus-storage/e16f4a52e819-PRE-Offer-Starburst_e1e38cc1.png"
      },
      {
        "alt": "Explorer EX CBCT Scanner – Download Brochure (LP)",
        "url": "/manus-storage/872e3f26015f-PRE-Explorer-EX_31b32cd6.jpg"
      }
    ],
    "migrationAction": "consolidate",
    "notes": "Página do tipo Landing Page (LP) para download de brochura do produto Explorer EX CBCT Scanner. O conteúdo apresenta muita duplicação de texto (ex: os blocos \"PreXion Explorer EX CBCT Scanner\", \"Why CBCT?\", \"Why a large FOV?\" e \"Why PreXion Explorer EX CBCT Scanner?\" aparecem duas vezes). O formulário de download não foi capturado na extração. Recomenda-se consolidar este conteúdo na página principal do produto no novo site, mantendo a oferta da brochura."
  },
  "/explorer-pro-2": {
    "sourceUrl": "https://www.prexion.com/explorer-pro-2/",
    "route": "/explorer-pro-2",
    "canonicalTarget": "/explorer-pro-2",
    "title": "PreXion 3D Explorer (LP)",
    "type": "landing-page",
    "relevance": "high",
    "summary": "Update Your Technology in 2023 with the PreXion3D Explorer PRO The world's first 3D CBCT with integrated ceph X-ray designed for dental excellence. Why choose the PreXion3D Explorer PRO? The system offers precise 3D imaging, large image detail, lowest radiation exposure, and reliable diagnostics for various dental indications. Features a patient management system for secure communication. Key Features - Built-in ceph arm frees over 2 feet of space - 0.3x0.3mm focal spot industry's smallest - Multiple FOVs from 5x5 to 15x16 - Low dose, HD and endo CT modes scan times 20s or lower - 14-second pano and 16-second ceph scan times Clinical Applications - Implant placement surgery, Endodontics, Periodontics, Orthodont",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Update Your Technology in 2023 with the PreXion3D Explorer PRO The world’s first 3D CBCT with integrated ceph X-ray is a game-changer in dental imaging designed to help you achieve dental excellence. REQUEST A DEMO Update Your Technology in 2023 with the PreXion3D Explorer PRO The world’s first 3D CBCT with integrated ceph X-ray is a game-changer in dental imaging designed to help you achieve dental excellence. REQUEST A DEMO Why choose the PreXion3D Explorer PRO? The powerful system components of the PreXion3D Explorer PRO enable an extraordinary combination of the most precise 3D imaging, large image detail, lowest radiation exposure, reliable diagnostics and digital planning for all indications in modern dentistry, including periodontology, endodontics, implantology, orthodontics, maxillofacial surgery and more. Its patient management system is designed for secure and networked communication of patient data across multiple rooms within a practice and can be integrated into the existing infrastructure with ease. Software Features The PreXion3D Explorer PRO is poised to revolutionize dental imaging with its unmatched clarity and boundless capabilities. Key Features Innovative built-in ceph arm design frees over 2 feet of space 0.3×0.3mm focal spot – the smallest in the industry Multiple fields of view (FOV) ranging from 5×5 to 15×16. Low dose, HD and endo CT modes with scan times of 20 seconds or lower 14-second pano and 16-second ceph scan times Clinical Applications Implant placement surgery Endodontics Periodontics Orthodontics Oral-maxillofacial surgery TMJ treatment Pathology Impacted and supernumerary teeth DICOM export for implant surgical guides & CAD/CAM Integration Airway analysis REQUEST A DEMO 16 YEARS OF EXPERIENCE CLEAREST IMAGES CLINICAL ADVISORY BOARD DISTRIBUTING PARTNERS CUSTOMER SUPPORT Field of View The PreXion3D Explorer PRO provides an accurate 360˚ panoramic perspective from 523 to 1,024 projected views. In addition to the 3D analysis function for image detail sizes of 5x5cm, 10x10cm, 15x10cm and 15x16cm, the device features “True” and “Reconstructed” panorama modes. It impresses with its ease of operation, comprehensive planning programs and imaging software across all dental indication areas. 5x5cm 10x10cm 15x10cm 15x16cm (single pass) REQUEST A DEMO Focal Spot The PreXion3D Explorer PRO utilizes the smallest focal spot in the industry at 0.3mm for all FOVs, and voxel sizes ranging from 0.07mm to 0.3mm in order to maintain image quality. The output in ultra-HD with a small voxel size enables a more detailed representation of even the finest structures. 5x5cm FOV 0.5mm Focal Spot 10x10cm FOV 0.3mm Focal Spot 5x5cm FOV 0.07mm Voxel Size 5x5cm FOV 0.1mm Voxel Size REQUEST A DEMO What is the Industry Saying? What is the Industry Saying? “Over 5 years ago, I bought my second CBCT and it was a PreXion. Over these past 5 years, the training and service have been second to none and if you’re investing in such a piece of equipment, it is essential both of these criteria be 100%. Add the great images and easy software interface, my entire multi-specialty users just love our unit. This company walks the walk for its clients and continues to set the bar for anyone interested in purchasing a CBCT.” – LOU GRAHAM DDS FAGD, USA Request a Free Demo Fill out the form below and a member of our team will contact you shortly to arrange a free demo of the PreXion3D Excelsior."
      },
      {
        "kind": "heading",
        "text": "Update Your Technology in 2023 with the PreXion3D Explorer PRO"
      },
      {
        "kind": "heading",
        "text": "The world’s first 3D CBCT with integrated ceph X-ray is a game-changer in dental imaging designed to help you achieve dental excellence."
      },
      {
        "kind": "heading",
        "text": "Why choose the PreXion3D Explorer PRO?"
      },
      {
        "kind": "paragraph",
        "text": "The powerful system components of the PreXion3D Explorer PRO enable an extraordinary combination of the most precise 3D imaging, large image detail, lowest radiation exposure, reliable diagnostics and digital planning for all indications in modern dentistry, including periodontology, endodontics, implantology, orthodontics, maxillofacial surgery and more. Its patient management system is designed for secure and networked communication of patient data across multiple rooms within a practice and can be integrated into the existing infrastructure with ease."
      },
      {
        "kind": "heading",
        "text": "Software Features"
      },
      {
        "kind": "paragraph",
        "text": "The PreXion3D Explorer PRO is poised to revolutionize dental imaging with its unmatched clarity and boundless capabilities."
      },
      {
        "kind": "list",
        "text": "Innovative built-in ceph arm design frees over 2 feet of space"
      },
      {
        "kind": "list",
        "text": "0.3×0.3mm focal spot – the smallest in the industry"
      },
      {
        "kind": "list",
        "text": "Multiple fields of view (FOV) ranging from 5×5 to 15×16."
      },
      {
        "kind": "list",
        "text": "Low dose, HD and endo CT modes with scan times of 20 seconds or lower"
      },
      {
        "kind": "list",
        "text": "14-second pano and 16-second ceph scan times"
      },
      {
        "kind": "list",
        "text": "Implant placement surgery"
      },
      {
        "kind": "list",
        "text": "Endodontics"
      },
      {
        "kind": "list",
        "text": "Periodontics"
      },
      {
        "kind": "list",
        "text": "Orthodontics"
      },
      {
        "kind": "list",
        "text": "Oral-maxillofacial surgery"
      },
      {
        "kind": "list",
        "text": "TMJ treatment"
      },
      {
        "kind": "list",
        "text": "Pathology"
      },
      {
        "kind": "list",
        "text": "Impacted and supernumerary teeth"
      },
      {
        "kind": "list",
        "text": "DICOM export for implant surgical guides & CAD/CAM"
      },
      {
        "kind": "list",
        "text": "Integration"
      },
      {
        "kind": "list",
        "text": "Airway analysis"
      },
      {
        "kind": "paragraph",
        "text": "CLEAREST IMAGES"
      },
      {
        "kind": "paragraph",
        "text": "CLINICAL ADVISORY BOARD"
      },
      {
        "kind": "heading",
        "text": "Field of View"
      },
      {
        "kind": "paragraph",
        "text": "The PreXion3D Explorer PRO provides an accurate 360˚ panoramic perspective from 523 to 1,024 projected views. In addition to the 3D analysis function for image detail sizes of 5x5cm, 10x10cm, 15x10cm and 15x16cm, the device features “True” and “Reconstructed” panorama modes. It impresses with its ease of operation, comprehensive planning programs and imaging software across all dental indication areas."
      },
      {
        "kind": "heading",
        "text": "Focal Spot"
      },
      {
        "kind": "paragraph",
        "text": "The PreXion3D Explorer PRO utilizes the smallest focal spot in the industry at 0.3mm for all FOVs, and voxel sizes ranging from 0.07mm to 0.3mm in order to maintain image quality. The output in ultra-HD with a small voxel size enables a more detailed representation of even the finest structures."
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“Over 5 years ago, I bought my second CBCT and it was a PreXion. Over these past 5 years, the training and service have been second to none and if you’re investing in such a piece of equipment, it is essential both of these criteria be 100%. Add the great images and easy software interface, my entire multi-specialty users just love our unit. This company walks the walk for its clients and continues to set the bar for anyone interested in purchasing a CBCT.”"
      },
      {
        "kind": "heading",
        "text": "Request a Free Demo"
      }
    ],
    "callsToAction": "- Request a Free Demo (Form/Button) - Contact Us: [855-PREXION](tel:855PREXION) - Client Support: [(650) 212-0314](tel:6502120314) - Address: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "YouTube video player 5",
        "url": "https://www.youtube.com/embed/nLfv7zA-Gek?wmode=transparent&autoplay=0"
      }
    ],
    "images": [
      {
        "alt": "PreXion 3D Explorer PRO technology",
        "url": "/manus-storage/3876ed2683e8-EXPLORER_PRO-1_a53011b5.png"
      },
      {
        "alt": "PreXion support",
        "url": "/manus-storage/d91ef2eea9c3-987951ae-icon-1_1000000000000000000028_e65e16ea.png"
      },
      {
        "alt": "PreXion clear images",
        "url": "/manus-storage/8fd6b650cec1-58e85faf-icon-2_1000000000000000000028_071373a9.png"
      },
      {
        "alt": "PreXion clinical advisory",
        "url": "/manus-storage/86d8784597be-98f2607b-icon-3_1000000000000000000028_b5102b10.png"
      },
      {
        "alt": "PreXion partners",
        "url": "/manus-storage/aed2559e66fb-fbdf7669-icon-4_1000000000000000000028_604e2fb3.png"
      },
      {
        "alt": "PreXion custom support",
        "url": "/manus-storage/bc77b47ee755-63dacb4d-icon-5_1000000000000000000028_f68001fe.png"
      },
      {
        "alt": "PreXion 5x5 cm images",
        "url": "/manus-storage/f62552587fee-PRE-5x5-1_2b0ec308.png"
      },
      {
        "alt": "PreXion 10x10cm images",
        "url": "/manus-storage/9c6116bfbd50-PRE-10x10-1_11113046.png"
      },
      {
        "alt": "PreXion `15x10cm images",
        "url": "/manus-storage/2a270823a1b5-PRE-15x10-1_af88cf3d.png"
      },
      {
        "alt": "PreXion 15x16cm images single pass",
        "url": "/manus-storage/f5fad58f4d0c-PRE-15x16-1_6b87a36d.jpg"
      },
      {
        "alt": "5x5cm FOV 0.5mm Focal Spot",
        "url": "/manus-storage/fe1548ae81b2-PRE-Focal-1_d823918c.jpg"
      },
      {
        "alt": "10x10cm FOV 0.3mm Focal Spot",
        "url": "/manus-storage/cd7356b71a8c-PRE-Focal-2_e75e24ad.jpg"
      }
    ],
    "migrationAction": "consolidate",
    "notes": "Landing page de campanha para o produto PreXion3D Explorer PRO com título de 2023. O texto da página menciona \"PreXion3D Excelsior\" no final, indicando uma possível inconsistência de cópia e cola. O produto em si é altamente relevante, mas a página como landing page datada de 2023 deve ser consolidada na página principal do produto."
  },
  "/imaging-products": {
    "sourceUrl": "https://www.prexion.com/imaging-products/",
    "route": "/imaging-products",
    "canonicalTarget": "/product",
    "title": "Imaging Products",
    "type": "product",
    "relevance": "high",
    "summary": "DENTAL IMAGING TECHNOLOGIES CBCT Precision at a Price Point for Every Practice PreXion Evolve 2D PAN Apresenta o equipamento Evolve 2D PAN , destacando a facilidade de uso, qualidade de imagem, filtros aprimorados e capacidade multislice 41 cortes panorâmicos para visualização precisa de estruturas. PreXion Evolve 3D SFOV CBCT, PAN and CEPH Apresenta o modelo Evolve CBCT, PAN e CEPH, focado em alta demanda e solução completa em um único produto. Disponível em 3D ou 2D atualizável. PreXion Excelsior MID MFOV Menciona que o scanner Excelsior Mid é a evolução do produto original, projetado para dentistas que exigem alta clareza diagnóstica e detalhes. PreXion Excelsior MAX LFOV Descreve o scanner Excelsior Max com",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "DENTAL IMAGING TECHNOLOGIES CBCT Precision at a Price Point for Every Practice PreXion Evolve 2D (PAN) The user friendliness and image quality of PreXion Evolve 2D (PAN) sets it apart. Its enhanced filters adjust images to suit your requirements, and its multislice capability allows easy navigation through 41 panoramic slices, enabling precise visualization of desired structures. Moreover, the reconstruction algorithms ensure exceptional sharpness and contrast in every scan based on user preference. EXPLORE ALL PRODUCT FEATURES PreXion Evolve 3D (SFOV) CBCT, PAN and CEPH With impressive technology and innovative algorithms, our newly launched Evolve CBCT, PAN and CEPH model is prepared for high flow demands and provides a complete solution in a single product. Available in 3D or upgradable 2D, this technology is intelligent, precise and has a performance that will impress the most demanding professionals. EXPLORE ALL PRODUCT FEATURES PreXion3D Excelsior MID (MFOV) The PreXion Excelsior Mid scanner is the evolution of our original flagship product designed for dentists who demand the highest diagnostic clarity and detail. EXPLORE ALL PRODUCT FEATURES PreXion Excelsior MAX (LFOV) The PreXion Excelsior Max scanner is the evolution of our original flagship product designed for dentists who demand the highest diagnostic clarity and detail. EXPLORE ALL PRODUCT FEATURES PreXion Excelsior ENDO Our flagship high resolution tomograph delivers cutting-edge image quality that allows you to visualize anatomy and pathology beyond traditional CBCT standards. This comes from its unique flat panel detector (FPD), which provides an industry-smallest, 0.2mm focal spot. Investing in the Excelsior ENDO mean offering patients superior diagnostics and setting a practice apart as a leader in dental imaging. EXPLORE ALL PRODUCT FEATURES PreXion Evolve Intraoral Scanner Evolve Scan is Prexion’s new intraoral scanner. With a focus on lightness, precision, and fluidity, i t’s the ideal device for clinics looking to improve their workflows with greater agility, comfort, and predictability. It also allows dentists to present the treatment plan visually and clearly to patients, contributing to a safer, more reliable journey with a higher acceptance rate. EXPLORE ALL PRODUCT FEATURES PreXion Evolve Intraoral Sensor Our newly launched Evolve Intraoral Digital Sensor is the ultimate evolution of your dental imaging capabilities. This precision intraoral dental digital imaging sensor, offers high-definition images, providing you with the precision you need for accurate and safer diagnoses. Stay ahead in the dental field with seamless connectivity that optimizes your intraoral radiography workflow and efficiently manages patient images. EXPLORE ALL PRODUCT FEATURES PreXion Hand Held Dental X-Ray Hand Held dental X-ray equipment ensures clearer, quality radiographs. Evolve X-Ray is intended for intraoral radiography of the patient’s dentition for diagnostic purposes. It is an X-ray unit for dental use, with a nominal voltage of 60kVp, tube current of 2.5 mA and a focal spot of 0.4×0.4mm. With Evolve X Ray, equipment leakage radiation is minimized by a radiopaque material collimator, avoiding unnecessary user exposure and directing radiation to the exam target. EXPLORE ALL PRODUCT FEATURES Discover what CBCT can make possible for your practice. For many clinicians and practice owners, an investment in CBCT technology from PreXion can become profitable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to finance a product. CALCULATE YOUR SAVINGS What Sets Us Apart? Top-Quality 3D Imaging Diagnostically, 3D imaging is a must-have in the clinical settings of today’s world. PreXion offers the clearest, most precise image in the industry at an incredible price point. The clarity of the image is unparalleled by competing solutions and the precision is unrivaled. Only PreXion offers high imaging with low radiation levels. Unmatched Commitment to Education PreXion has cultivated a tight-knit circle of key opinion leaders made up of specialty physicians that precisely understand the PreXion technology and resulting clinical outcomes ﬁrsthand. These doctors offer PreXion customers exclusive hands-on courses nationwide. Educational videos are also available online, making it easy for PreXion customers and their teams to continuously access the information they need. Excellent Service PreXion is deeply committed to listening to the customer’s voice. The PreXion mission is to always be passionate about answering support calls and delivering excellent customer care. It is PreXion’s vision to build trust across the industry by providing each customer the ideal treatment, precisely tending to each and every inquiry. LEARN MORE ABOUT US What is the Industry Saying? What is the Industry Saying? “With the PreXion CBCT , I now have the ability to comprehensively diagnose, plan, and treat every patient with confidence and accuracy. This technology directly impacts everything from sinus lifts, implant placement, bone grafting, surgical extractions, and more. This is absolutely the most valuable diagnostic tool in my practice.” – DR. ROBERT WALINCHUS Experience True Clarity & Precision Schedule a demo today. REQUEST A DEMO"
      },
      {
        "kind": "heading",
        "text": "DENTAL IMAGING TECHNOLOGIES"
      },
      {
        "kind": "heading",
        "text": "CBCT Precision at a Price Point for Every Practice"
      },
      {
        "kind": "heading",
        "text": "PreXion Evolve 2D (PAN)"
      },
      {
        "kind": "paragraph",
        "text": "The user friendliness and image quality of PreXion Evolve 2D (PAN) sets it apart. Its enhanced filters adjust images to suit your requirements, and its multislice capability allows easy navigation through 41 panoramic slices, enabling precise visualization of desired structures. Moreover, the reconstruction algorithms ensure exceptional sharpness and contrast in every scan based on user preference."
      },
      {
        "kind": "heading",
        "text": "PreXion Evolve 3D (SFOV) CBCT, PAN and CEPH"
      },
      {
        "kind": "paragraph",
        "text": "With impressive technology and innovative algorithms, our newly launched Evolve CBCT, PAN and CEPH model is prepared for high flow demands and provides a complete solution in a single product. Available in 3D or upgradable 2D, this technology is intelligent, precise and has a performance that will impress the most demanding professionals."
      },
      {
        "kind": "heading",
        "text": "PreXion3D Excelsior MID (MFOV)"
      },
      {
        "kind": "paragraph",
        "text": "The PreXion Excelsior Mid scanner is the evolution of our original flagship product designed for dentists who demand the highest diagnostic clarity and detail."
      },
      {
        "kind": "heading",
        "text": "PreXion Excelsior MAX (LFOV)"
      },
      {
        "kind": "paragraph",
        "text": "The PreXion Excelsior Max scanner is the evolution of our original flagship product designed for dentists who demand the highest diagnostic clarity and detail."
      },
      {
        "kind": "heading",
        "text": "PreXion Excelsior ENDO"
      },
      {
        "kind": "paragraph",
        "text": "Our flagship high resolution tomograph delivers cutting-edge image quality that allows you to visualize anatomy and pathology beyond traditional CBCT standards. This comes from its unique flat panel detector (FPD), which provides an industry-smallest, 0.2mm focal spot. Investing in the Excelsior ENDO mean offering patients superior diagnostics and setting a practice apart as a leader in dental imaging."
      },
      {
        "kind": "heading",
        "text": "PreXion Evolve Intraoral Scanner"
      },
      {
        "kind": "paragraph",
        "text": "Evolve Scan is Prexion’s new intraoral scanner."
      },
      {
        "kind": "paragraph",
        "text": "With a focus on lightness, precision, and fluidity, i t’s the ideal device for clinics looking to improve their workflows with greater agility, comfort, and predictability. It also allows dentists to present the treatment plan visually and clearly to patients, contributing to a safer, more reliable journey with a higher acceptance rate."
      },
      {
        "kind": "heading",
        "text": "PreXion Evolve Intraoral Sensor"
      },
      {
        "kind": "paragraph",
        "text": "Our newly launched Evolve Intraoral Digital Sensor is the ultimate evolution of your dental imaging capabilities. This precision intraoral dental digital imaging sensor, offers high-definition images, providing you with the precision you need for accurate and safer diagnoses. Stay ahead in the dental field with seamless connectivity that optimizes your intraoral radiography workflow and efficiently manages patient images."
      },
      {
        "kind": "heading",
        "text": "PreXion Hand Held Dental X-Ray"
      },
      {
        "kind": "paragraph",
        "text": "Hand Held dental X-ray equipment ensures clearer, quality radiographs. Evolve X-Ray is intended for intraoral radiography of the patient’s dentition for diagnostic purposes. It is an X-ray unit for dental use, with a nominal voltage of 60kVp, tube current of 2.5 mA and a focal spot of 0.4×0.4mm. With Evolve X Ray, equipment leakage radiation is minimized by a radiopaque material collimator, avoiding unnecessary user exposure and directing radiation to the exam target."
      },
      {
        "kind": "heading",
        "text": "Discover what CBCT can make possible for your practice."
      },
      {
        "kind": "paragraph",
        "text": "For many clinicians and practice owners, an investment in CBCT technology from PreXion can become profitable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to finance a product."
      },
      {
        "kind": "heading",
        "text": "What Sets Us Apart?"
      },
      {
        "kind": "paragraph",
        "text": "Diagnostically, 3D imaging is a must-have in the clinical settings of today’s world. PreXion offers the clearest, most precise image in the industry at an incredible price point. The clarity of the image is unparalleled by competing solutions and the precision is unrivaled. Only PreXion offers high imaging with low radiation levels."
      },
      {
        "kind": "paragraph",
        "text": "PreXion has cultivated a tight-knit circle of key opinion leaders made up of specialty physicians that precisely understand the PreXion technology and resulting clinical outcomes ﬁrsthand. These doctors offer PreXion customers exclusive hands-on courses nationwide. Educational videos are also available online, making it easy for PreXion customers and their teams to continuously access the information they need."
      },
      {
        "kind": "paragraph",
        "text": "PreXion is deeply committed to listening to the customer’s voice. The PreXion mission is to always be passionate about answering support calls and delivering excellent customer care. It is PreXion’s vision to build trust across the industry by providing each customer the ideal treatment, precisely tending to each and every inquiry."
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“With the PreXion CBCT , I now have the ability to comprehensively diagnose, plan, and treat every patient with confidence and accuracy. This technology directly impacts everything from sinus lifts, implant placement, bone grafting, surgical extractions, and more. This is absolutely the most valuable diagnostic tool in my practice.”"
      },
      {
        "kind": "heading",
        "text": "Experience True Clarity & Precision"
      },
      {
        "kind": "heading",
        "text": "Schedule a demo today."
      }
    ],
    "callsToAction": "- [EXPLORE ALL PRODUCT FEATURES (Evolve 2D PAN)](https://www.prexion.com/evolve-2d-pan/) - [EXPLORE ALL PRODUCT FEATURES (Evolve 3D)](https://www.prexion.com/prexion-3d-evolve/) - [EXPLORE ALL PRODUCT FEATURES (Excelsior MID)](https://www.prexion.com/prexion-excelsior-mid/) - [EXPLORE ALL PRODUCT FEATURES (Excelsior MAX)](https://www.prexion.com/prexion-excelsior-max-lfov/) - [EXPLORE ALL PRODUCT FEATURES (Excelsior ENDO)](https://www.prexion.com/prexion-excelsior-endo/) - [EXPLORE ALL PRODUCT FEATURES (Evolve Intraoral Scanner)](https://www.prexion.com/evolve-scan-intraoral-scanner/) - [EXPLORE ALL PRODUCT FEATURES (Evolve Intraoral Sensor)](https://www.prexion.com/prexion-3d-intraoral-sensor/) - [EXPLORE ALL PRODUCT FEATURES (Hand Held Dental X-Ray)](https://www.prexion.com/evolve-x-ray-hand-held-dental-x-rays/) - [CALCULATE YOUR SAVINGS](https://www.prexion.com/roi-calculator/) - [LEARN MORE ABOUT US](https://www.prexion.com/why-prexion/) - [REQUEST A DEMO](https://www.prexion.com/request-a-demo/) - Contact Us: [855-PREXION](tel:855PREXION) - Client Support: [(650) 212-0314](tel:6502120314) - Address: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "EXPLORE ALL PRODUCT FEATURES",
        "url": "https://www.prexion.com/evolve-2d-pan/"
      },
      {
        "label": "EXPLORE ALL PRODUCT FEATURES",
        "url": "https://www.prexion.com/prexion-3d-evolve/"
      },
      {
        "label": "EXPLORE ALL PRODUCT FEATURES",
        "url": "https://www.prexion.com/prexion-excelsior-mid/"
      },
      {
        "label": "EXPLORE ALL PRODUCT FEATURES",
        "url": "https://www.prexion.com/prexion-excelsior-max-lfov/"
      },
      {
        "label": "EXPLORE ALL PRODUCT FEATURES",
        "url": "https://www.prexion.com/prexion-excelsior-endo/"
      },
      {
        "label": "EXPLORE ALL PRODUCT FEATURES",
        "url": "https://www.prexion.com/evolve-scan-intraoral-scanner/"
      },
      {
        "label": "EXPLORE ALL PRODUCT FEATURES",
        "url": "https://www.prexion.com/prexion-3d-intraoral-sensor/"
      },
      {
        "label": "EXPLORE ALL PRODUCT FEATURES",
        "url": "https://www.prexion.com/evolve-x-ray-hand-held-dental-x-rays/"
      },
      {
        "label": "CALCULATE YOUR SAVINGS",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "LEARN MORE ABOUT US",
        "url": "https://www.prexion.com/why-prexion/"
      },
      {
        "label": "PreXion CBCT",
        "url": "https://www.prexion.com/"
      },
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      }
    ],
    "images": [
      {
        "alt": "prexion dental imaging technologies",
        "url": "/manus-storage/748c7cd2d916-2D-PANCEPH-2S_LATERAL-300x260_53ee64ee.png"
      },
      {
        "alt": "prexion dental imaging technologies",
        "url": "/manus-storage/5d24ac7a6bfe-evolve-3D-SFOV-300x232_00c01aa8.jpg"
      },
      {
        "alt": "PreXion3D Explorer",
        "url": "/manus-storage/4ae66f3b5e48-19855-EXCELSIOR-COM-TELE-mid-300x300_a65d5b87.png"
      },
      {
        "alt": "prexion dental imaging technologies",
        "url": "/manus-storage/b2994faf2fdb-19856-EXCELSIOR-COM-TELE-MAX-300x300_ba11b452.png"
      },
      {
        "alt": "prexion dental imaging technologies",
        "url": "/manus-storage/81b688b6e5da-19873-EXCELSIOR-ENDO-pose-03-300x300_8ec24a7d.png"
      },
      {
        "alt": "PreXion3D Excelsior CBCT Scan",
        "url": "/manus-storage/7a7bbea44b20-evolve-scan-300x232_320eb969.jpg"
      },
      {
        "alt": "Evolve Intraoral Sensor",
        "url": "/manus-storage/7267252e6f97-PRE-Evolve-2_0405b033.jpg"
      },
      {
        "alt": "Evolve Intraoral Sensor",
        "url": "/manus-storage/26e43c8fdcf5-evolve-x-ray-300x232_c46e2673.jpg"
      },
      {
        "alt": "clear dental imaging technologies",
        "url": "/manus-storage/ffbc42a5be65-Top-Quality-Imaging_14f01d0a.png"
      },
      {
        "alt": "education on dental imaging technologies",
        "url": "/manus-storage/292679a61c1c-Commitment-To-Education_fd153722.png"
      },
      {
        "alt": "dental imaging technologies support",
        "url": "/manus-storage/161aed3dfa72-PRE-Support_ce1e3978.jpg"
      }
    ],
    "migrationAction": "create",
    "notes": "Página principal de listagem de produtos (\"Imaging Products\"). Apresenta o portfólio atual da PreXion. Não há conteúdo obsoleto, mas o footer aparece duplicado no conteúdo extraído. Deve ser recriada como a página principal de produtos no novo site."
  },
  "/leading-imaging-solutions": {
    "sourceUrl": "https://www.prexion.com/leading-imaging-solutions/",
    "route": "/leading-imaging-solutions",
    "canonicalTarget": "/leading-imaging-solutions",
    "title": "Leading Imaging Solutions (LP)",
    "type": "landing-page",
    "relevance": "medium",
    "summary": "Leading 3D Cone Beam CT Imaging Solutions PreXion is committed to your success by focusing on low dose and advanced imaging technologies for accurate diagnoses and treatment. Why choose a PreXion3D CBCT Scanner? PreXion delivers clarity and precision at every customer touchpoint, from product research and 3D imaging solutions to education and support. Highlights include over 15 years of experience, clearest diagnostic CBCT images, smallest focal spot 0.3mm , fast remote access, and comprehensive warranty. Clinical Applications Lists applications such as implant placement surgery, endodontics, periodontics, orthodontics, oral-maxillofacial surgery, TMJ treatment, pathology, DICOM export, integration, and airway ",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Leading 3D Cone Beam CT Imaging Solutions PreXion is committed to your success by focusing on low dose and advanced imaging technologies for accurate diagnoses and treatment. REQUEST A DEMO Leading 3D Cone Beam CT Imaging Solutions PreXion is committed to your success by focusing on low dose and advanced imaging technologies for accurate diagnoses and treatment. REQUEST A DEMO Why choose a PreXion3D CBCT Scanner? PreXion delivers clarity and precision at every customer touchpoint, from product research and 3D imaging solutions to education and support. Over 15 years of experience in 3D DICOM image reconstruction processing and software visualization Noticeably the clearest diagnostic CBCT images available today Smallest CBCT focal spot (X-ray beam source) in the world at 0.3mm Medical CT, Ultrasound, MR and PET advanced imaging heritage from TeraRecon with over 10,000 placements in U.S. medical radiology centers Fastest remote access to 3D scans and dental in-office workflow Easy 3D animated Movie Maker & 3D patient case acceptance tools Most comprehensive CBCT equipment warranty in dentistry Direct support helps ensure quality and reliability PreXion3D Explorer PRO PreXion3D Excelsior Clinical Applications Implant placement surgery Endodontics Periodontics Orthodontics Oral-maxillofacial surgery TMJ treatment Pathology Impacted and supernumerary teeth DICOM export for implant surgical guides & CAD/CAM Integration Airway analysis REQUEST A DEMO 16 YEARS OF EXPERIENCE CLEAREST IMAGES CLINICAL ADVISORY BOARD DISTRIBUTING PARTNERS CUSTOMER SUPPORT What Sets Us Apart? Top-Quality 3D Imaging Diagnostically, 3D imaging is a must-have in the clinical settings of today’s world. PreXion offers the clearest, most precise image in the industry at an incredible price point. The clarity of the image is unparalleled by competing solutions and the precision is unrivaled. Only PreXion offers high imaging with low radiation levels. Unmatched Commitment to Education PreXion has cultivated a tight-knit circle of key opinion leaders made up of specialty physicians that precisely understand the PreXion technology and resulting clinical outcomes ﬁrsthand. These doctors offer PreXion customers exclusive hands-on courses nationwide. Educational videos are also available online, making it easy for PreXion customers and their teams to continuously access the information they need. Excellent Service PreXion is deeply committed to listening to the customer’s voice. The PreXion mission is to always be passionate about answering support calls and delivering excellent customer care. It is PreXion’s vision to build trust across the industry by providing each customer the ideal treatment, precisely tending to each and every inquiry. REQUEST A DEMO What is the Industry Saying? What is the Industry Saying? “Over 5 years ago, I bought my second CBCT and it was a PreXion. Over these past 5 years, the training and service have been second to none and if you’re investing in such a piece of equipment, it is essential both of these criteria be 100%. Add the great images and easy software interface, my entire multi-specialty users just love our unit. This company walks the walk for its clients and continues to set the bar for anyone interested in purchasing a CBCT.” – LOU GRAHAM DDS FAGD, USA Request a Free Demo Fill out the form below and a member of our team will contact you shortly to arrange a free demo of the PreXion3D Excelsior."
      },
      {
        "kind": "heading",
        "text": "Leading 3D Cone Beam CT Imaging Solutions"
      },
      {
        "kind": "heading",
        "text": "Why choose a PreXion3D CBCT Scanner?"
      },
      {
        "kind": "paragraph",
        "text": "PreXion delivers clarity and precision at every customer touchpoint, from product research and 3D imaging solutions to education and support."
      },
      {
        "kind": "list",
        "text": "Over 15 years of experience in 3D DICOM image reconstruction processing and software visualization"
      },
      {
        "kind": "list",
        "text": "Noticeably the clearest diagnostic CBCT images available today"
      },
      {
        "kind": "list",
        "text": "Smallest CBCT focal spot (X-ray beam source) in the world at 0.3mm"
      },
      {
        "kind": "list",
        "text": "Medical CT, Ultrasound, MR and PET advanced imaging heritage from TeraRecon with over 10,000 placements in U.S. medical radiology centers"
      },
      {
        "kind": "list",
        "text": "Fastest remote access to 3D scans and dental in-office workflow"
      },
      {
        "kind": "list",
        "text": "Easy 3D animated Movie Maker & 3D patient case acceptance tools"
      },
      {
        "kind": "list",
        "text": "Most comprehensive CBCT equipment warranty in dentistry"
      },
      {
        "kind": "list",
        "text": "Direct support helps ensure quality and reliability"
      },
      {
        "kind": "heading",
        "text": "Clinical Applications"
      },
      {
        "kind": "list",
        "text": "Implant placement surgery"
      },
      {
        "kind": "list",
        "text": "Endodontics"
      },
      {
        "kind": "list",
        "text": "Periodontics"
      },
      {
        "kind": "list",
        "text": "Orthodontics"
      },
      {
        "kind": "list",
        "text": "Oral-maxillofacial surgery"
      },
      {
        "kind": "list",
        "text": "TMJ treatment"
      },
      {
        "kind": "list",
        "text": "Pathology"
      },
      {
        "kind": "list",
        "text": "Impacted and supernumerary teeth"
      },
      {
        "kind": "list",
        "text": "DICOM export for implant surgical guides & CAD/CAM"
      },
      {
        "kind": "list",
        "text": "Integration"
      },
      {
        "kind": "list",
        "text": "Airway analysis"
      },
      {
        "kind": "paragraph",
        "text": "CLEAREST IMAGES"
      },
      {
        "kind": "paragraph",
        "text": "CLINICAL ADVISORY BOARD"
      },
      {
        "kind": "heading",
        "text": "What Sets Us Apart?"
      },
      {
        "kind": "paragraph",
        "text": "Diagnostically, 3D imaging is a must-have in the clinical settings of today’s world. PreXion offers the clearest, most precise image in the industry at an incredible price point. The clarity of the image is unparalleled by competing solutions and the precision is unrivaled. Only PreXion offers high imaging with low radiation levels."
      },
      {
        "kind": "paragraph",
        "text": "PreXion has cultivated a tight-knit circle of key opinion leaders made up of specialty physicians that precisely understand the PreXion technology and resulting clinical outcomes ﬁrsthand. These doctors offer PreXion customers exclusive hands-on courses nationwide. Educational videos are also available online, making it easy for PreXion customers and their teams to continuously access the information they need."
      },
      {
        "kind": "paragraph",
        "text": "PreXion is deeply committed to listening to the customer’s voice. The PreXion mission is to always be passionate about answering support calls and delivering excellent customer care. It is PreXion’s vision to build trust across the industry by providing each customer the ideal treatment, precisely tending to each and every inquiry."
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“Over 5 years ago, I bought my second CBCT and it was a PreXion. Over these past 5 years, the training and service have been second to none and if you’re investing in such a piece of equipment, it is essential both of these criteria be 100%. Add the great images and easy software interface, my entire multi-specialty users just love our unit. This company walks the walk for its clients and continues to set the bar for anyone interested in purchasing a CBCT.”"
      },
      {
        "kind": "heading",
        "text": "Request a Free Demo"
      }
    ],
    "callsToAction": "- Request a Demo (botões e formulário) - Telefone Contact Us: 855-PREXION - Telefone Client Support: (650) 212-0314 - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "YouTube video player 3",
        "url": "https://www.youtube.com/embed/nLfv7zA-Gek?wmode=transparent&autoplay=0"
      },
      {
        "label": "YouTube video player 4",
        "url": "https://www.youtube.com/embed/7_Ca2Eay0A8?wmode=transparent&autoplay=0"
      }
    ],
    "images": [
      {
        "alt": "implant scan",
        "url": "/manus-storage/fb270afa2696-implant8_e258229f.jpg"
      },
      {
        "alt": "implant scan before",
        "url": "/manus-storage/b6019828dd6c-implant7_4514d97b.jpg"
      },
      {
        "alt": "PreXion 16 years experience",
        "url": "/manus-storage/d91ef2eea9c3-987951ae-icon-1_1000000000000000000028_e65e16ea.png"
      },
      {
        "alt": "PreXion clearest image",
        "url": "/manus-storage/8fd6b650cec1-58e85faf-icon-2_1000000000000000000028_071373a9.png"
      },
      {
        "alt": "PreXion Clinical advisory board",
        "url": "/manus-storage/86d8784597be-98f2607b-icon-3_1000000000000000000028_b5102b10.png"
      },
      {
        "alt": "PreXion distributing partners",
        "url": "/manus-storage/aed2559e66fb-fbdf7669-icon-4_1000000000000000000028_604e2fb3.png"
      },
      {
        "alt": "PreXion customer support",
        "url": "/manus-storage/bc77b47ee755-63dacb4d-icon-5_1000000000000000000028_f68001fe.png"
      },
      {
        "alt": "Leading Imaging Solutions (LP)",
        "url": "/manus-storage/ffbc42a5be65-Top-Quality-Imaging_14f01d0a.png"
      },
      {
        "alt": "Leading Imaging Solutions (LP)",
        "url": "/manus-storage/292679a61c1c-Commitment-To-Education_fd153722.png"
      },
      {
        "alt": "Leading Imaging Solutions (LP)",
        "url": "/manus-storage/161aed3dfa72-PRE-Support_ce1e3978.jpg"
      }
    ],
    "migrationAction": "redirect",
    "notes": "A página é uma landing page focada em conversão (Request a Demo) e na apresentação geral das soluções 3D Cone Beam CT (Explorer PRO e Excelsior). Há blocos de conteúdo duplicados (ex: \"Leading 3D Cone Beam CT Imaging Solutions\" e \"What is the Industry Saying?\"). A página deve ser migrada ou redirecionada para a nova landing page correspondente no novo site. O rodapé também apresenta duplicação de links de navegação."
  },
  "/news-2": {
    "sourceUrl": "https://www.prexion.com/news-2/",
    "route": "/news-2",
    "canonicalTarget": "/news",
    "title": "News",
    "type": "article",
    "relevance": "medium",
    "summary": "NEWS Stay up to date on the latest in dentistry, CBCT technology and more. This section lists recent news articles and events related to PreXion: - The Art and Science of Dentistry 2026 – Anaheim – CA : PreXion participated in the California Dental Association event in May 2026. - AAE Annual Meteting 2026 – Salt Lake City – UT : PreXion attended the American Association of Endodontists annual meeting in April 2026. - Chicago Mindwinter : PreXion participated in the Chicago Dental Society Mindwinter Meeting in February 2026. - AEEDC Dubai 2026 : PreXion attended the AEEDC DUBAI event in January 2026. - Saudi International Dental Conference SIDC : Alliage participated in the SIDC in Riyadh in June 2024. Stay on t",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "NEWS Stay up to date on the latest in dentistry, CBCT technology and more. The Art and Science of Dentistry 2026 – Anaheim – CA Gallery The Art and Science of Dentistry 2026 – Anaheim – CA Blog The Art and Science of Dentistry 2026 – Anaheim – CA 3vdab 2026-05-21T20:29:18+00:00 May 21, 2026 | PreXion was present at one of the world’s largest dental events! We participated in the California Dental Association – The Art and Science of Dentistry event, held in Anaheim, California (USA), bringing together professionals from across the dental community in a complete experience focused on innovation, continuing education, and networking.During the [...] Read More AAE Annual Meteting 2026 – Salt Lake City – UT Gallery AAE Annual Meteting 2026 – Salt Lake City – UT Blog AAE Annual Meteting 2026 – Salt Lake City – UT 3vdab 2026-04-23T20:00:42+00:00 April 23, 2026 | The American Association of Endodontists annually hosts one of the most important global meetings in specialized dentistry: the AAE Annual Meeting 2026. Held on April 16th and 17th, 2026, in Salt Lake City, the event brought together thousands of endodontists, researchers, and companies in the sector to discuss technical, [...] Read More Chicago Mindwinter Gallery Chicago Mindwinter Blog Chicago Mindwinter 3vdab 2026-03-17T14:47:56+00:00 March 17, 2026 | In February, we participated in an important international event in the healthcare sector, reinforcing our global presence and our commitment to expansion in strategic markets. This meeting was held at the Chicago Dental Society - Mindwinter Meeting, from February 19th to 21st, and provided significant opportunities for networking with [...] Read More AEEDC Dubai 2026 Gallery AEEDC Dubai 2026 Blog AEEDC Dubai 2026 3vdab 2026-03-17T14:41:31+00:00 March 6, 2026 | In January, we participated in an important international event in the healthcare sector, reinforcing our global presence and our commitment to expansion in strategic markets. This meeting was held at the AEEDC DUBAI 2026 from January 19th to 21st, and provided significant opportunities for networking with partners and distributors.During the [...] Read More Saudi International Dental Conference (SIDC) Gallery Saudi International Dental Conference (SIDC) Blog Saudi International Dental Conference (SIDC) 3vdab 2026-03-06T17:58:31+00:00 June 4, 2024 | From left to right |: Dr. Khaled Ekram (Partner KOL); Rafael Ferrassini (General Manager Alliage International); Dr. Hossam Abouelenein (Territory Manager). Saudi International Dental Conference (SIDC) Alliage participated in the Saudi International Dental Conference (SIDC) in Riyadh, consolidating an important milestone in our growth in Saudi Arabia and across [...] Read More Stay on the Cutting Edge of Dentistry. Subscribe today."
      },
      {
        "kind": "heading",
        "text": "NEWS"
      },
      {
        "kind": "heading",
        "text": "Stay up to date on the latest in dentistry, CBCT technology and more."
      },
      {
        "kind": "list",
        "text": "The Art and Science of Dentistry 2026 – Anaheim – CA Gallery The Art and Science of Dentistry 2026 – Anaheim – CA Blog"
      },
      {
        "kind": "heading",
        "text": "The Art and Science of Dentistry 2026 – Anaheim – CA"
      },
      {
        "kind": "paragraph",
        "text": "3vdab 2026-05-21T20:29:18+00:00 May 21, 2026 |"
      },
      {
        "kind": "paragraph",
        "text": "PreXion was present at one of the world’s largest dental events! We participated in the California Dental Association – The Art and Science of Dentistry event, held in Anaheim, California (USA), bringing together professionals from across the dental community in a complete experience focused on innovation, continuing education, and networking.During the [...]"
      },
      {
        "kind": "list",
        "text": "AAE Annual Meteting 2026 – Salt Lake City – UT Gallery AAE Annual Meteting 2026 – Salt Lake City – UT Blog"
      },
      {
        "kind": "heading",
        "text": "AAE Annual Meteting 2026 – Salt Lake City – UT"
      },
      {
        "kind": "paragraph",
        "text": "3vdab 2026-04-23T20:00:42+00:00 April 23, 2026 |"
      },
      {
        "kind": "paragraph",
        "text": "The American Association of Endodontists annually hosts one of the most important global meetings in specialized dentistry: the AAE Annual Meeting 2026. Held on April 16th and 17th, 2026, in Salt Lake City, the event brought together thousands of endodontists, researchers, and companies in the sector to discuss technical, [...]"
      },
      {
        "kind": "list",
        "text": "Chicago Mindwinter Gallery Chicago Mindwinter Blog"
      },
      {
        "kind": "heading",
        "text": "Chicago Mindwinter"
      },
      {
        "kind": "paragraph",
        "text": "3vdab 2026-03-17T14:47:56+00:00 March 17, 2026 |"
      },
      {
        "kind": "paragraph",
        "text": "In February, we participated in an important international event in the healthcare sector, reinforcing our global presence and our commitment to expansion in strategic markets. This meeting was held at the Chicago Dental Society - Mindwinter Meeting, from February 19th to 21st, and provided significant opportunities for networking with [...]"
      },
      {
        "kind": "list",
        "text": "AEEDC Dubai 2026 Gallery AEEDC Dubai 2026 Blog"
      },
      {
        "kind": "heading",
        "text": "AEEDC Dubai 2026"
      },
      {
        "kind": "paragraph",
        "text": "3vdab 2026-03-17T14:41:31+00:00 March 6, 2026 |"
      },
      {
        "kind": "paragraph",
        "text": "In January, we participated in an important international event in the healthcare sector, reinforcing our global presence and our commitment to expansion in strategic markets. This meeting was held at the AEEDC DUBAI 2026 from January 19th to 21st, and provided significant opportunities for networking with partners and distributors.During the [...]"
      },
      {
        "kind": "list",
        "text": "Saudi International Dental Conference (SIDC) Gallery Saudi International Dental Conference (SIDC) Blog"
      },
      {
        "kind": "heading",
        "text": "Saudi International Dental Conference (SIDC)"
      },
      {
        "kind": "paragraph",
        "text": "3vdab 2026-03-06T17:58:31+00:00 June 4, 2024 |"
      },
      {
        "kind": "paragraph",
        "text": "From left to right |: Dr. Khaled Ekram (Partner KOL); Rafael Ferrassini (General Manager Alliage International); Dr. Hossam Abouelenein (Territory Manager). Saudi International Dental Conference (SIDC) Alliage participated in the Saudi International Dental Conference (SIDC) in Riyadh, consolidating an important milestone in our growth in Saudi Arabia and across [...]"
      },
      {
        "kind": "heading",
        "text": "Stay on the Cutting Edge of Dentistry."
      },
      {
        "kind": "heading",
        "text": "Subscribe today."
      }
    ],
    "callsToAction": "- Subscribe today. - Contact Us: [855-PREXION](tel:855PREXION) - Client Support: [(650) 212-0314](tel:6502120314) - Address: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "The Art and Science of Dentistry 2026 – Anaheim – CA",
        "url": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/"
      },
      {
        "label": "Gallery",
        "url": "https://www.prexion.com/wp-content/uploads/2026/05/14-16-May-Arts-and-Science-California-e1779395147102.jpeg"
      },
      {
        "label": "The Art and Science of Dentistry 2026 – Anaheim – CA",
        "url": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/"
      },
      {
        "label": "Blog",
        "url": "https://www.prexion.com/category/blog/"
      },
      {
        "label": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/",
        "url": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/"
      },
      {
        "label": "The Art and Science of Dentistry 2026 – Anaheim – CA",
        "url": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "Read More",
        "url": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/"
      },
      {
        "label": "AAE Annual Meteting 2026 – Salt Lake City – UT",
        "url": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/"
      },
      {
        "label": "Gallery",
        "url": "https://www.prexion.com/wp-content/uploads/2026/04/FOTO_AEE_ABRIL_26-11.jpg"
      },
      {
        "label": "AAE Annual Meteting 2026 – Salt Lake City – UT",
        "url": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/"
      },
      {
        "label": "Blog",
        "url": "https://www.prexion.com/category/blog/"
      },
      {
        "label": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/",
        "url": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/"
      },
      {
        "label": "AAE Annual Meteting 2026 – Salt Lake City – UT",
        "url": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "Read More",
        "url": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/"
      },
      {
        "label": "Chicago Mindwinter",
        "url": "https://www.prexion.com/chicago-mindwinter-dental/"
      },
      {
        "label": "Gallery",
        "url": "https://www.prexion.com/wp-content/uploads/2026/03/chicago-22.jpg"
      },
      {
        "label": "Chicago Mindwinter",
        "url": "https://www.prexion.com/chicago-mindwinter-dental/"
      },
      {
        "label": "Blog",
        "url": "https://www.prexion.com/category/blog/"
      },
      {
        "label": "https://www.prexion.com/chicago-mindwinter-dental/",
        "url": "https://www.prexion.com/chicago-mindwinter-dental/"
      },
      {
        "label": "Chicago Mindwinter",
        "url": "https://www.prexion.com/chicago-mindwinter-dental/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "Read More",
        "url": "https://www.prexion.com/chicago-mindwinter-dental/"
      },
      {
        "label": "AEEDC Dubai 2026",
        "url": "https://www.prexion.com/aeedc-dubai-event/"
      },
      {
        "label": "Gallery",
        "url": "https://www.prexion.com/wp-content/uploads/2026/03/chicago-conference.jpg"
      },
      {
        "label": "AEEDC Dubai 2026",
        "url": "https://www.prexion.com/aeedc-dubai-event/"
      },
      {
        "label": "Blog",
        "url": "https://www.prexion.com/category/blog/"
      },
      {
        "label": "https://www.prexion.com/aeedc-dubai-event/",
        "url": "https://www.prexion.com/aeedc-dubai-event/"
      },
      {
        "label": "AEEDC Dubai 2026",
        "url": "https://www.prexion.com/aeedc-dubai-event/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "Read More",
        "url": "https://www.prexion.com/aeedc-dubai-event/"
      },
      {
        "label": "Saudi International Dental Conference (SIDC)",
        "url": "https://www.prexion.com/saudi-international-dental-conference/"
      },
      {
        "label": "Gallery",
        "url": "https://www.prexion.com/wp-content/uploads/2026/03/Saudi-International-Dental-Conference-SIDC.png"
      },
      {
        "label": "Saudi International Dental Conference (SIDC)",
        "url": "https://www.prexion.com/saudi-international-dental-conference/"
      },
      {
        "label": "Blog",
        "url": "https://www.prexion.com/category/blog/"
      },
      {
        "label": "https://www.prexion.com/saudi-international-dental-conference/",
        "url": "https://www.prexion.com/saudi-international-dental-conference/"
      },
      {
        "label": "Saudi International Dental Conference (SIDC)",
        "url": "https://www.prexion.com/saudi-international-dental-conference/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "Read More",
        "url": "https://www.prexion.com/saudi-international-dental-conference/"
      }
    ],
    "images": [
      {
        "alt": "News",
        "url": "/manus-storage/add38f1e0740-14-16-May-Arts-and-Science-California-e1779395147102_f695c846.jpeg"
      },
      {
        "alt": "News",
        "url": "/manus-storage/eab64f5c1120-FOTO_AEE_ABRIL_26-11_69a5a4a0.jpg"
      },
      {
        "alt": "News",
        "url": "/manus-storage/3585976508a9-chicago-22_e35d8b55.jpg"
      },
      {
        "alt": "News",
        "url": "/manus-storage/3dabfd63b3b7-chicago-conference_ff740d27.jpg"
      },
      {
        "alt": "News",
        "url": "/manus-storage/a7092c0bbfca-Saudi-International-Dental-Conference-SIDC_9f692e64.png"
      }
    ],
    "migrationAction": "redirect",
    "notes": "A página \"news-2\" parece ser um arquivo ou categoria de notícias/blog. Recomenda-se consolidar ou redirecionar para a página principal de notícias/blog do novo site, evitando a URL \"news-2\". O footer apresenta informações duplicadas."
  },
  "/prexion-3d-evolve": {
    "sourceUrl": "https://www.prexion.com/prexion-3d-evolve/",
    "route": "/prexion-3d-evolve",
    "canonicalTarget": "/product/evolve-3d",
    "title": "PreXion 3D Evolve (SFOV)",
    "type": "product",
    "relevance": "high",
    "summary": "PREXION EVOLVE 3D SFOV SCANNER A Complete 3D Dental Imaging Solution in a Single Product Apresenta o scanner PreXion3D Evolve CBCT, PAN e CEPH. Destaca a tecnologia inovadora e algoritmos, disponível em 3D ou 2D atualizável, oferecendo uma solução completa em um único produto. Why Evolve CBCT, PAN and CEPH? Destaca a facilidade de uso e qualidade de imagem do PreXion 2D Evolve em comparação à concorrência. Menciona filtros aprimorados, capacidade multislice 41 fatias panorâmicas e algoritmos de reconstrução que garantem nitidez e contraste excepcionais. CEPH Arm A adição do braço CEPH aumenta o potencial diagnóstico para exames cefalométricos, criando imagens de alta qualidade de tecidos duros e moles, com meca",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "PREXION EVOLVE 3D (SFOV) SCANNER A Complete 3D Dental Imaging Solution in a Single Product SCHEDULE A DEMO The PreXion3D Evolve CBCT, PAN and CEPH With impressive technology and innovative algorithms, our newly launched Evolve CBCT Scanner, PAN and CEPH model is prepared for high flow demands and provides a complete solution in a single product. Available in 3D or upgradable 2D, this technology is intelligent, precise and has a performance that will impress the most demanding professionals. Get Full Specifications with the Product The PreXion Evolve 3D (SFOV) CBCT, PAN and CEPH With impressive technology and innovative algorithms, our newly launched Evolve CBCT, PAN and CEPH model is prepared for high flow demands and provides a complete solution in a single product. Available in 3D or upgradable 2D, this technology is intelligent, precise and has a performance that will impress the most demanding professionals. Get Full Specifications with the Product Brochure Why Evolve CBCT, PAN and CEPH? The user-friendliness and image quality of PreXion 2D Evolve set it apart from competing technology. Its enhanced filters adjust images to suit your requirements, and its multislice capability allows easy navigation through 41 panoramic slices, enabling precise visualization of desired structures. Moreover, the reconstruction algorithms ensure exceptional sharpness and contrast in every scan. Why Evolve CBCT, PAN and CEPH? The user-friendliness and image quality of PreXion 2D Evolve set it apart from competing technology. Its enhanced filters adjust images to suit your requirements, and its multislice capability allows easy navigation through 41 panoramic slices, enabling precise visualization of desired structures. Moreover, the reconstruction algorithms ensure exceptional sharpness and contrast in every scan. CEPH Arm: Adding the CEPH arm boosts the Prexion Evolve’s diagnostic potential for cephalometric exams. Its specialized CEPH sensor creates high-quality images of hard and soft tissue with equal excellence. Collimation mechanisms and rapid scanning techniques minimize X-ray exposure. Possible Configurations: PAN + CBCT (SFOV) PAN + CBCT + CEPH (SFOV) Get Full Specifications with the Product Discover what a CBCT Scanner can make possible for your practice. For many clinicians and practice owners, an investment in CBCT technology from PreXion can become proﬁtable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to ﬁnance a product. CALCULATE YOUR SAVINGS Field of View 5x5cm 9x6cm 9x9cm 3D Algorithms: Enhancing Your Work-Flow Efficiency and Diagnostic Accuracy UHD Mode for Endodontics PreXion Evolve has a resolution with Isotropic Voxel of 75μm to 250μm. Patient Motion Correction (PMC) The PreXion Evolve algorithm automatically corrects the image imperfections caused by patient micro-movements. This ensures high exam quality, avoiding repetitions and offering greater accuracy for making diagnoses. Metal Artifact Reduction (MAR) The PreXion Evolve line features three processing levels that can be chosen to correct gutta-percha deformities, implants and/or full arch prosthesis and metal restorations, in addition to automatic metal reduction. This tool also allows image reprocessing, for a better diagnosis, preventing the need to generate new exposure to the patient. Get Full Specifications with the Product SCHEDULE A DEMO 2D Algorithms Harnessing Intelligent Technology to Produce Stunning Panoramic Exam Images PreXion Evolve Smart Contrast An innovative algorithm, working in all parts of the image, to treat and improve the contrast of each area individually. This results in a homogenous and noise-free image – allowing clear visualization of details and better diagnosis. PreXion Evolve PreXion Evolve software features an innovative function that delivers a final image with greater detail and definition, especially in the region of incisors and canines, TMJ and root canals. Combination of Algorithms The combination of algorithms allows the reconstruction of an optimized panoramic image. PreXion Evolve technology brings the exceptional diagnostic quality to the most challenging cases. Get Full Specifications with the Product Discover what CBCT can make possible for your practice. For many clinicians and practice owners, an investment in CBCT technology from PreXion can become proﬁtable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to ﬁnance a product. CALCULATE YOUR SAVINGS What is the Industry Saying? What is the Industry Saying? “Over 5 years ago, I bought my second CBCT and it was a PreXion. Over these past 5 years, the training and service have been second to none and if you’re investing in such a piece of equipment, it is essential both of these criteria be 100%. Add the great images and easy software interface, my entire multi-specialty users just love our unit. This company walks the walk for its clients and continues to set the bar for anyone interested in purchasing a CBCT.” – Lou Graham DDS FAGD, USA Experience True Clarity & Precision Schedule a demo today. SCHEDULE A DEMO"
      },
      {
        "kind": "heading",
        "text": "PREXION EVOLVE 3D (SFOV) SCANNER"
      },
      {
        "kind": "heading",
        "text": "A Complete 3D Dental Imaging Solution in a Single Product"
      },
      {
        "kind": "heading",
        "text": "The PreXion3D Evolve CBCT, PAN and CEPH"
      },
      {
        "kind": "paragraph",
        "text": "With impressive technology and innovative algorithms, our newly launched Evolve CBCT Scanner, PAN and CEPH model is prepared for high flow demands and provides a complete solution in a single product. Available in 3D or upgradable 2D, this technology is intelligent, precise and has a performance that will impress the most demanding professionals."
      },
      {
        "kind": "heading",
        "text": "The PreXion Evolve 3D (SFOV) CBCT, PAN and CEPH"
      },
      {
        "kind": "paragraph",
        "text": "With impressive technology and innovative algorithms, our newly launched Evolve CBCT, PAN and CEPH model is prepared for high flow demands and provides a complete solution in a single product. Available in 3D or upgradable 2D, this technology is intelligent, precise and has a performance that will impress the most demanding professionals."
      },
      {
        "kind": "heading",
        "text": "Why Evolve CBCT, PAN and CEPH?"
      },
      {
        "kind": "paragraph",
        "text": "The user-friendliness and image quality of PreXion 2D Evolve set it apart from competing technology. Its enhanced filters adjust images to suit your requirements, and its multislice capability allows easy navigation through 41 panoramic slices, enabling precise visualization of desired structures. Moreover, the reconstruction algorithms ensure exceptional sharpness and contrast in every scan."
      },
      {
        "kind": "heading",
        "text": "CEPH Arm:"
      },
      {
        "kind": "paragraph",
        "text": "Adding the CEPH arm boosts the Prexion Evolve’s diagnostic potential for cephalometric exams. Its specialized CEPH sensor creates high-quality images of hard and soft tissue with equal excellence. Collimation mechanisms and rapid scanning techniques minimize X-ray exposure."
      },
      {
        "kind": "heading",
        "text": "Possible Configurations:"
      },
      {
        "kind": "paragraph",
        "text": "PAN + CBCT (SFOV) PAN + CBCT + CEPH (SFOV)"
      },
      {
        "kind": "heading",
        "text": "Discover what a CBCT Scanner can make possible for your practice."
      },
      {
        "kind": "paragraph",
        "text": "For many clinicians and practice owners, an investment in CBCT technology from PreXion can become proﬁtable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to ﬁnance a product."
      },
      {
        "kind": "heading",
        "text": "Field of View"
      },
      {
        "kind": "heading",
        "text": "5x5cm"
      },
      {
        "kind": "heading",
        "text": "9x6cm"
      },
      {
        "kind": "heading",
        "text": "9x9cm"
      },
      {
        "kind": "heading",
        "text": "3D Algorithms: Enhancing Your Work-Flow Efficiency and Diagnostic Accuracy"
      },
      {
        "kind": "paragraph",
        "text": "PreXion Evolve has a resolution with Isotropic Voxel of 75μm to 250μm."
      },
      {
        "kind": "paragraph",
        "text": "The PreXion Evolve algorithm automatically corrects the image imperfections caused by patient micro-movements. This ensures high exam quality, avoiding repetitions and offering greater accuracy for making diagnoses."
      },
      {
        "kind": "paragraph",
        "text": "The PreXion Evolve line features three processing levels that can be chosen to correct gutta-percha deformities, implants and/or full arch prosthesis and metal restorations, in addition to automatic metal reduction. This tool also allows image reprocessing, for a better diagnosis, preventing the need to generate new exposure to the patient."
      },
      {
        "kind": "heading",
        "text": "2D Algorithms Harnessing Intelligent Technology to Produce Stunning Panoramic Exam Images"
      },
      {
        "kind": "paragraph",
        "text": "An innovative algorithm, working in all parts of the image, to treat and improve the contrast of each area individually. This results in a homogenous and noise-free image – allowing clear visualization of details and better diagnosis."
      },
      {
        "kind": "paragraph",
        "text": "PreXion Evolve software features an innovative function that delivers a final image with greater detail and definition, especially in the region of incisors and canines, TMJ and root canals."
      },
      {
        "kind": "paragraph",
        "text": "The combination of algorithms allows the reconstruction of an optimized panoramic image. PreXion Evolve technology brings the exceptional diagnostic quality to the most challenging cases."
      },
      {
        "kind": "heading",
        "text": "Discover what CBCT can make possible for your practice."
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“Over 5 years ago, I bought my second CBCT and it was a PreXion. Over these past 5 years, the training and service have been second to none and if you’re investing in such a piece of equipment, it is essential both of these criteria be 100%. Add the great images and easy software interface, my entire multi-specialty users just love our unit. This company walks the walk for its clients and continues to set the bar for anyone interested in purchasing a CBCT.”"
      },
      {
        "kind": "heading",
        "text": "Experience True Clarity & Precision"
      },
      {
        "kind": "heading",
        "text": "Schedule a demo today."
      }
    ],
    "callsToAction": "- [SCHEDULE A DEMO](https://www.prexion.com/request-a-demo/) - [CALCULATE YOUR SAVINGS](https://www.prexion.com/roi-calculator/) - Telefone: 855-PREXION - Suporte: (650) 212-0314 - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [
      "/manus-storage/a94e153dfc5e-PreXion-Evolve-CBCT-Brochure_15822c3a.pdf",
      "https://s.assetway.com.br/jZUpa"
    ],
    "externalLinks": [
      "https://s.assetway.com.br/jZUpa",
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "SCHEDULE A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      },
      {
        "label": "Get Full Specifications with the Product",
        "url": "https://www.prexion.com/wp-content/uploads/2023/10/PreXion-Evolve-CBCT-Brochure.pdf"
      },
      {
        "label": "Get Full Specifications with the Product Brochure",
        "url": "https://s.assetway.com.br/jZUpa"
      },
      {
        "label": "PreXion 2D Evolve",
        "url": "https://www.prexion.com/evolve-2d-pan/"
      },
      {
        "label": "PreXion 2D Evolve",
        "url": "https://www.prexion.com/evolve-2d-pan/"
      },
      {
        "label": "Get Full Specifications with the Product",
        "url": "https://s.assetway.com.br/jZUpa"
      },
      {
        "label": "ROI calculator tool",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "CALCULATE YOUR SAVINGS",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "Get Full Specifications with the Product",
        "url": "https://s.assetway.com.br/jZUpa"
      },
      {
        "label": "SCHEDULE A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      },
      {
        "label": "Get Full Specifications with the Product",
        "url": "https://s.assetway.com.br/jZUpa"
      },
      {
        "label": "CALCULATE YOUR SAVINGS",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "SCHEDULE A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      }
    ],
    "images": [
      {
        "alt": "PreXion 3D Evolve (SFOV)",
        "url": "/manus-storage/34d825084965-EVOLVE-3D-SFOV-3EM1-300x169_8c3ca02a.png"
      },
      {
        "alt": "PreXion 3D Evolve (SFOV)",
        "url": "/manus-storage/f2e21c96a52c-evolve_3d_5x5_1-300x300_189b48b8.jpg"
      },
      {
        "alt": "PreXion 3D Evolve (SFOV)",
        "url": "/manus-storage/d62f9ea06d5d-evovle_3d_5x5_2-1-300x300_f638dd11.jpg"
      },
      {
        "alt": "PreXion 3D Evolve (SFOV)",
        "url": "/manus-storage/68291397df94-evolve_3d_9x6_1-300x300_bf5c9b10.jpg"
      },
      {
        "alt": "PreXion 3D Evolve (SFOV)",
        "url": "/manus-storage/90cb19fdccf0-evolve_9x6_2-300x300_917854ef.jpg"
      },
      {
        "alt": "PreXion 3D Evolve (SFOV)",
        "url": "/manus-storage/1defbd10dc54-evolve_3d_9x9_1-300x300_783e6101.jpg"
      },
      {
        "alt": "PreXion 3D Evolve (SFOV)",
        "url": "/manus-storage/473fd2531382-evolve_3d_9x9_2-300x300_286ac719.jpg"
      },
      {
        "alt": "Prexion cbct scanner imaging UHD mode",
        "url": "/manus-storage/056f76f88b06-UHD_8ebeb901.png"
      },
      {
        "alt": "Prexion 3d cbct scanner imaging PMC",
        "url": "/manus-storage/8b6355d78189-PMC_5781c0e0.png"
      },
      {
        "alt": "cbct scanner imaging without MAR",
        "url": "/manus-storage/e743bb1ba8c3-MAR_3748aadb.jpg"
      },
      {
        "alt": "full 3d imaging from Prexion cbct scanner",
        "url": "/manus-storage/bf501ec453b9-Evolve-2D_7eb540fb.jpg"
      }
    ],
    "migrationAction": "create",
    "notes": "Página de produto ativa com relevância alta. Foram notadas duplicações no texto (\"Why Evolve CBCT, PAN and CEPH?\" aparece duas vezes, assim como \"Discover what a CBCT Scanner can make possible for your practice.\" e \"What is the Industry Saying?\"). O link para o folheto do produto aponta para a própria PreXion e também para um serviço externo (assetway). O rodapé aparece duplicado na extração de texto."
  },
  "/prexion-3d-excelsior-cbct-scanner": {
    "sourceUrl": "https://www.prexion.com/prexion-3d-excelsior-cbct-scanner/",
    "route": "/prexion-3d-excelsior-cbct-scanner",
    "canonicalTarget": "/product",
    "title": "Excelsior CBCT Scanner",
    "type": "product",
    "relevance": "high",
    "summary": "EXCELSIOR CBCT SCANNER Experience the CBCT Designed for the Highest Diagnostic Clarity and Detail The PreXion3D Excelsior O PreXion3D Excelsior CBCT Scanner é a evolução do CBCT original projetado para dentistas que exigem alta clareza de diagnóstico e detalhes. É compatível com guias cirúrgicos de implantes de terceiros compatíveis com DICOM e programas de software de fusão CAD/DICOM. Ideal para implantodontia, endodontia e diagnósticos de rotina. Há duplicação deste texto na página original . Why the PreXion3D Excelsior CBCT Scanner? Os componentes do sistema permitem uma combinação de imagem 3D CBCT precisa, grandes detalhes de imagem, menor exposição à radiação e planejamento digital. O sistema de gerenciam",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "EXCELSIOR CBCT SCANNER Experience the CBCT Designed for the Highest Diagnostic Clarity and Detail The PreXion3D Excelsior The PreXion3D Excelsior CBCT Scanner is the evolution of our original CBCT designed for dentists who demand the highest diagnostic clarity and detail. It is compatible with aAfter several months of evaluating various systems, the PreXion 3D CBCT was the only one that provided us with the same high-quality images as a medical CT,ll DICOM compliant third-party implant surgical guides and CAD/ DICOM merging software programs. Excelsior is an excellent choice for clinicians performing implant dentistry, endodontic treatment and routine diagnostics. The PreXion3D Excelsior The PreXion3D Excelsior CBCT is the evolution of our original CBCT designed for dentists who demand the highest diagnostic clarity and detail. It is compatible with all DICOM compliant third-party implant surgical guides and CAD/DICOM merging software programs. Excelsior is an excellent choice for clinicians performing implant dentistry, endodontic treatment and routine diagnostics. Why the PreXion3D Excelsior CBCT Scanner? The powerful system components of the PreXion3D Excelsior enable an extraordinary combination of precise 3D CBCT imaging, large image detail, lowest radiation exposure, reliable diagnostics, and digital planning for all indications in modern dentistry. Its patient management system is designed for secure and networked communication of patient data across multiple rooms within a practice and can be integrated into the existing infrastructure with ease. This is accomplished via our thin client server technology. It means that expensive computer hardware or graphics card updates are not necessary before purchasing a PreXion CBCT . With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side. Increase case acceptance with enhanced insight and education using your 3D scans, increasing your opportunity to earn greater revenue with fewer patients. Get Full Specifications with the Product Brochure Get Full Specifications with the Product Brochure Why the PreXion3D Excelsior? The powerful system components of the PreXion3D Excelsior enable an extraordinary combination of precise 3D CBCT imaging, large image detail, lowest radiation exposure, reliable diagnostics, and digital planning for all indications in modern dentistry. Its patient management system is designed for secure and networked communication of patient data across multiple rooms within a practice and can be integrated into the existing infrastructure with ease. This is accomplished via our thin client server technology. It means that expensive computer hardware or graphics card updates are not necessary before purchasing a PreXion Excelsior CBCT scanner. With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side. Increase case acceptance with enhanced insight and education using your 3D scans, increasing your opportunity to earn greater revenue with fewer patients. Highlights: Accurate 360-degree gantry rotation 260-1,024 projected views Dedicated 2D pan mode option Clearest detail with 0.3mm focal spot & 0.08-0.2mm voxel Increase case acceptance through enhanced education Boost your ability to earn greater revenue with fewer patients Clinical Applications: Implant placement surgery Endodontics Periodontics Oral-maxillofacial surgery TMJ Pathology Impacted and supernumerary teeth DICOM export for implant surgical guides & CAD/CAM integration Airway analysis Discover what CBCT can make possible for your practice. For many clinicians and practice owners, an investment in CBCT technology from PreXion can become profitable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to finance a product. CALCULATE YOUR SAVINGS Software Features With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side. Multi-data Load multiple patient scans on a single screen. Synchronize pre- and post-operative scans and detect differences, slice-by-slice. Patient Education and Presentation Quickly capture 3D animated video clips for patient education, case acceptance and lecture presentations. Increase case acceptance through better patient understanding. Collaborative Tools Automatically save 3D image reports to MS Word template and attach to patient’s practice management record. Collaborate with referring dentists by burning a patient disc with sample viewer. Capture and email images quickly. Remote Access Work on cases from home or a satellite office without long connectivity delays. Lead virtual online treatment planning meetings remotely with PreXion3D. Thin Client Server PreXion3D CBCT scanners do not require computer hardware upgrades. It does not slow down network bandwidth like other CBCT scanners. Implant Library Use our extensive library or customize your own. Save Scenes Save your case workup as a scene or create multiple saved scenes with a single scan. 3D Templates Save time with over 20 pre-made 3D volume rendering templates or customize your own. Slab and Cutting Slab Feature allows the clinician to see inside structures while rotating the 3D image. Cut away structures to see exactly what is pertinent to your study. Get Full Specifications with the Product Brochure Discover what CBCT can make possible for your practice. For many clinicians and practice owners, an investment in CBCT technology from PreXion can become profitable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to finance a product. CALCULATE YOUR SAVINGS Scan Mode: Standard Mode 9.6 seconds Rapid Mode (Lower Dose) 5.2 seconds High-Definition Mode (HD) 12.8 seconds Ultra-High-Definition Mode (UHD- Endo) 17.9 seconds; 23.6 seconds Wide Mode 9.6 seconds CT-TMJ Mode 5.2 seconds x 2 CAD CAM Mode 17.9 seconds Panoramic Standard Mode 10 seconds Specifications: Device Type CBCT+2D Panoramic + Cephalometric (Optional) Field of View (DxH) 150mm X 80mm; 100mm X 80mm; 100mm x 50mm; 50mm x 50mm; 150mm x 130mm (Optional) CBCT Sensor CsI FPD 16 bits, Cephalo FPD 14bits X-ray Tube Voltage 60–110kV Focal Spot 0.3mm x 0.3mm Voxel Size 0.08–0.2mm Patient Position Standing; wheelchair accessible Included Computers Single Console & Viewer Computer (Network Client is available) What is the Industry Saying? What is the Industry Saying? “When we began looking at cone beam systems, medical CT scans were our gold standard. After several months of evaluating various systems, the PreXion 3D CBCT was the only one that provided us with the same high-quality images as a medical CT, with much less radiation. That truly was the deciding factor in our purchase decision.” – Edward S. Katz, DDS Experience True Clarity & Precision Schedule a demo today. REQUEST A DEMO"
      },
      {
        "kind": "heading",
        "text": "EXCELSIOR CBCT SCANNER"
      },
      {
        "kind": "heading",
        "text": "Experience the CBCT Designed for the Highest Diagnostic Clarity and Detail"
      },
      {
        "kind": "heading",
        "text": "The PreXion3D Excelsior"
      },
      {
        "kind": "paragraph",
        "text": "The PreXion3D Excelsior CBCT Scanner is the evolution of our original CBCT designed for dentists who demand the highest diagnostic clarity and detail. It is compatible with aAfter several months of evaluating various systems, the PreXion 3D CBCT was the only one that provided us with the same high-quality images as a medical CT,ll DICOM compliant third-party implant surgical guides and CAD/ DICOM merging software programs. Excelsior is an excellent choice for clinicians performing implant dentistry, endodontic treatment and routine diagnostics."
      },
      {
        "kind": "paragraph",
        "text": "The PreXion3D Excelsior CBCT is the evolution of our original CBCT designed for dentists who demand the highest diagnostic clarity and detail. It is compatible with all DICOM compliant third-party implant surgical guides and CAD/DICOM merging software programs. Excelsior is an excellent choice for clinicians performing implant dentistry, endodontic treatment and routine diagnostics."
      },
      {
        "kind": "heading",
        "text": "Why the PreXion3D Excelsior CBCT Scanner?"
      },
      {
        "kind": "paragraph",
        "text": "The powerful system components of the PreXion3D Excelsior enable an extraordinary combination of precise 3D CBCT imaging, large image detail, lowest radiation exposure, reliable diagnostics, and digital planning for all indications in modern dentistry."
      },
      {
        "kind": "paragraph",
        "text": "Its patient management system is designed for secure and networked communication of patient data across multiple rooms within a practice and can be integrated into the existing infrastructure with ease. This is accomplished via our thin client server technology. It means that expensive computer hardware or graphics card updates are not necessary before purchasing a PreXion CBCT . With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side. Increase case acceptance with enhanced insight and education using your 3D scans, increasing your opportunity to earn greater revenue with fewer patients."
      },
      {
        "kind": "heading",
        "text": "Why the PreXion3D Excelsior?"
      },
      {
        "kind": "paragraph",
        "text": "Its patient management system is designed for secure and networked communication of patient data across multiple rooms within a practice and can be integrated into the existing infrastructure with ease. This is accomplished via our thin client server technology. It means that expensive computer hardware or graphics card updates are not necessary before purchasing a PreXion Excelsior CBCT scanner. With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side. Increase case acceptance with enhanced insight and education using your 3D scans, increasing your opportunity to earn greater revenue with fewer patients."
      },
      {
        "kind": "heading",
        "text": "Highlights:"
      },
      {
        "kind": "list",
        "text": "Accurate 360-degree gantry rotation"
      },
      {
        "kind": "list",
        "text": "260-1,024 projected views"
      },
      {
        "kind": "list",
        "text": "Dedicated 2D pan mode option"
      },
      {
        "kind": "list",
        "text": "Clearest detail with 0.3mm focal spot & 0.08-0.2mm voxel"
      },
      {
        "kind": "list",
        "text": "Increase case acceptance through enhanced education"
      },
      {
        "kind": "list",
        "text": "Boost your ability to earn greater revenue with fewer patients"
      },
      {
        "kind": "heading",
        "text": "Clinical Applications:"
      },
      {
        "kind": "list",
        "text": "Implant placement surgery"
      },
      {
        "kind": "list",
        "text": "Endodontics"
      },
      {
        "kind": "list",
        "text": "Periodontics"
      },
      {
        "kind": "list",
        "text": "Oral-maxillofacial surgery"
      },
      {
        "kind": "list",
        "text": "TMJ"
      },
      {
        "kind": "list",
        "text": "Pathology"
      },
      {
        "kind": "list",
        "text": "Impacted and supernumerary teeth"
      },
      {
        "kind": "list",
        "text": "DICOM export for implant surgical guides & CAD/CAM integration"
      },
      {
        "kind": "list",
        "text": "Airway analysis"
      },
      {
        "kind": "heading",
        "text": "Discover what CBCT can make possible for your practice."
      },
      {
        "kind": "paragraph",
        "text": "For many clinicians and practice owners, an investment in CBCT technology from PreXion can become profitable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to finance a product."
      },
      {
        "kind": "heading",
        "text": "Software Features"
      },
      {
        "kind": "paragraph",
        "text": "With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side."
      },
      {
        "kind": "paragraph",
        "text": "Load multiple patient scans on a single screen. Synchronize pre- and post-operative scans and detect differences, slice-by-slice."
      },
      {
        "kind": "paragraph",
        "text": "Quickly capture 3D animated video clips for patient education, case acceptance and lecture presentations. Increase case acceptance through better patient understanding."
      },
      {
        "kind": "paragraph",
        "text": "Automatically save 3D image reports to MS Word template and attach to patient’s practice management record. Collaborate with referring dentists by burning a patient disc with sample viewer. Capture and email images quickly."
      },
      {
        "kind": "paragraph",
        "text": "Work on cases from home or a satellite office without long connectivity delays. Lead virtual online treatment planning meetings remotely with PreXion3D."
      },
      {
        "kind": "paragraph",
        "text": "PreXion3D CBCT scanners do not require computer hardware upgrades. It does not slow down network bandwidth like other CBCT scanners."
      },
      {
        "kind": "paragraph",
        "text": "Use our extensive library or customize your own."
      },
      {
        "kind": "paragraph",
        "text": "Save your case workup as a scene or create multiple saved scenes with a single scan."
      },
      {
        "kind": "paragraph",
        "text": "Save time with over 20 pre-made 3D volume rendering templates or customize your own."
      },
      {
        "kind": "paragraph",
        "text": "Slab Feature allows the clinician to see inside structures while rotating the 3D image. Cut away structures to see exactly what is pertinent to your study."
      },
      {
        "kind": "heading",
        "text": "Scan Mode:"
      },
      {
        "kind": "heading",
        "text": "Specifications:"
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“When we began looking at cone beam systems, medical CT scans were our gold standard. After several months of evaluating various systems, the PreXion 3D CBCT was the only one that provided us with the same high-quality images as a medical CT, with much less radiation. That truly was the deciding factor in our purchase decision.”"
      },
      {
        "kind": "heading",
        "text": "Experience True Clarity & Precision"
      },
      {
        "kind": "heading",
        "text": "Schedule a demo today."
      }
    ],
    "callsToAction": "- [Get Full Specifications with the Product Brochure](https://www.prexion.com/wp-content/uploads/2023/09/PreXion-Excelsior-ProductBrochure-2023.pdf) - [CALCULATE YOUR SAVINGS](https://www.prexion.com/roi-calculator/) - [REQUEST A DEMO](https://www.prexion.com/request-a-demo/) - Contact Us: 855-PREXION - Client Support: (650) 212-0314 - Address: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [
      "https://www.prexion.com/wp-content/uploads/2023/09/PreXion-Excelsior-ProductBrochure-2023.pdf"
    ],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4598380/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "DICOM",
        "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4598380/"
      },
      {
        "label": "YouTube video player 33",
        "url": "https://www.youtube.com/embed/7_Ca2Eay0A8?wmode=transparent&autoplay=0"
      },
      {
        "label": "3D CBCT",
        "url": "https://www.prexion.com/prexion-3d-excelsior-cbct-scanner/"
      },
      {
        "label": "PreXion CBCT",
        "url": "https://www.prexion.com/"
      },
      {
        "label": "Get Full Specifications with the Product Brochure",
        "url": "https://www.prexion.com/wp-content/uploads/2023/09/PreXion-Excelsior-ProductBrochure-2023.pdf"
      },
      {
        "label": "YouTube video player 34",
        "url": "https://www.youtube.com/embed/7_Ca2Eay0A8?wmode=transparent&autoplay=0"
      },
      {
        "label": "Get Full Specifications with the Product Brochure",
        "url": "https://www.prexion.com/wp-content/uploads/2023/09/PreXion-Excelsior-ProductBrochure-2023.pdf"
      },
      {
        "label": "ROI calculator tool",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "CALCULATE YOUR SAVINGS",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "Get Full Specifications with the Product Brochure",
        "url": "https://www.prexion.com/wp-content/uploads/2023/09/PreXion-Excelsior-ProductBrochure-2023.pdf"
      },
      {
        "label": "CALCULATE YOUR SAVINGS",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "3D CBCT",
        "url": "https://www.prexion.com/prexion-3d-excelsior-cbct-scanner/"
      },
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      }
    ],
    "images": [
      {
        "alt": "excelsior cbct scanner",
        "url": "/manus-storage/944da45c3b37-Excelsior-Transparent-300dpi-2-1_f5f8db42.png"
      },
      {
        "alt": "compare cbct",
        "url": "/manus-storage/141ed7c5cf10-Comparison-Chart_f004dfd7.png"
      }
    ],
    "migrationAction": "create",
    "notes": "Página de produto altamente relevante com duplicação de texto no início (repetição de parágrafos sobre a evolução do CBCT e o patient management system). Requer limpeza de texto duplicado durante a migração. O conteúdo técnico (tabelas de Scan Mode e Specifications) está claro e bem formatado, essencial para a nova página."
  },
  "/prexion-3d-excelsior": {
    "sourceUrl": "https://www.prexion.com/prexion-3d-excelsior/",
    "route": "/prexion-3d-excelsior",
    "canonicalTarget": "/prexion-3d-excelsior",
    "title": "PreXion 3D Excelsior (LP)",
    "type": "landing-page",
    "relevance": "high",
    "summary": "Update Your Technology in 2023 with the PreXion3D Excelsior The PreXion3D Excelsior CBCT scanner is described as the evolution of their original flagship product, designed for dentists requiring high diagnostic clarity and detail. Why choose the PreXion3D Excelsior? The system offers precise 3D imaging, large image detail, low radiation exposure, reliable diagnostics, and digital planning for various dental indications periodontology, endodontics, implantology, orthodontics, maxillofacial surgery . Its patient management system enables secure communication across multiple rooms and easy integration into existing infrastructure. Software Features - Multi-data: Load multiple patient scans on a single screen, sync",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Update Your Technology in 2023 with the PreXion3D Excelsior The PreXion3D Excelsior CBCT scanner is the evolution of our original flagship product designed for dentists who demand the highest diagnostic clarity and detail. REQUEST A DEMO Update Your Technology in 2023 with the PreXion3D Excelsior The PreXion3D Excelsior CBCT scanner is the evolution of our original flagship product designed for dentists who demand the highest diagnostic clarity and detail. REQUEST A DEMO Why choose the PreXion3D Excelsior? The powerful system components of the PreXion3D Excelsior enable an extraordinary combination of the most precise 3D imaging, large image detail, lowest radiation exposure, reliable diagnostics and digital planning for all indications in modern dentistry, including periodontology, endodontics, implantology, orthodontics, maxillofacial surgery and more. Its patient management system is designed for secure and networked communication of patient data across multiple rooms within a practice and can be integrated into the existing infrastructure with ease. Software Features With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side. Multi-data Load multiple patient scans on a single screen. Synchronize pre- and post-operative scans and detect differences, slice-by-slice. Patient Education and Presentation Quickly capture 3D animated video clips for patient education, case acceptance and lecture presentations. Increase case acceptance through better patient understanding. Collaborative Tools Automatically save 3D image reports to MS Word template and attach to patient’s practice management record. Collaborate with referring dentists by burning a patient disc with sample viewer. Capture and email images quickly. Remote Access Work on cases from home or a satellite office without long connectivity delays. Lead virtual online treatment planning meetings remotely with PreXion3D. Thin Client Server PreXion3D CBCT scanners do not require computer hardware upgrades. It does not slow down network bandwidth like other CBCT scanners. Implant Library Use our extensive library or customize your own. Save Scenes Save your case workup as a scene or create multiple saved scenes with a single scan. 3D Templates Save time with over 20 pre-made 3D volume rendering templates or customize your own. Slab and Cutting Slab Feature allows the clinician to see inside structures while rotating the 3D image. Cut away structures to see exactly what is pertinent to your study. REQUEST A DEMO 16 YEARS OF EXPERIENCE CLEAREST IMAGES CLINICAL ADVISORY BOARD DISTRIBUTING PARTNERS CUSTOMER SUPPORT Field of View The PreXion3D Explorer PRO provides an accurate 360˚ panoramic perspective from 523 to 1,024 projected views. In addition to the 3D analysis function for image detail sizes of 5x5cm, 10x10cm, 15x10cm and 15x16cm, the device features “True” and “Reconstructed” panorama modes. It impresses with its ease of operation, comprehensive planning programs and imaging software across all dental indication areas. 5x5cm 10x5cm 10x8cm 15x8cm 15x13cm REQUEST A DEMO What is the Industry Saying? What is the Industry Saying? “After looking at the different CBCT units available in the marketplace, we chose PreXion based on the PreXion specifications, low radiation, and state of the art imaging. We are excited to be able to better diagnose periodontal disease and treatment plan for implants. In addition, we were very pleased by the training provided by PreXion which has been vital to help us learn how to use our CBCT to the fullest.” – DR. RICHARD NEWHART, PERIODONTIST Request a Free Demo Fill out the form below and a member of our team will contact you shortly to arrange a free demo of the PreXion3D Excelsior. URL This field is for validation purposes and should be left unchanged. Name (Required) First Last Email (Required) Phone (Required) ZIP Code (Required) ZIP / Postal Code CAPTCHA"
      },
      {
        "kind": "heading",
        "text": "Update Your Technology in 2023 with the PreXion3D Excelsior"
      },
      {
        "kind": "heading",
        "text": "The PreXion3D Excelsior CBCT scanner is the evolution of our original flagship product designed for dentists who demand the highest diagnostic clarity and detail."
      },
      {
        "kind": "heading",
        "text": "Why choose the PreXion3D Excelsior?"
      },
      {
        "kind": "paragraph",
        "text": "The powerful system components of the PreXion3D Excelsior enable an extraordinary combination of the most precise 3D imaging, large image detail, lowest radiation exposure, reliable diagnostics and digital planning for all indications in modern dentistry, including periodontology, endodontics, implantology, orthodontics, maxillofacial surgery and more. Its patient management system is designed for secure and networked communication of patient data across multiple rooms within a practice and can be integrated into the existing infrastructure with ease."
      },
      {
        "kind": "heading",
        "text": "Software Features"
      },
      {
        "kind": "paragraph",
        "text": "With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side."
      },
      {
        "kind": "paragraph",
        "text": "Load multiple patient scans on a single screen. Synchronize pre- and post-operative scans and detect differences, slice-by-slice."
      },
      {
        "kind": "paragraph",
        "text": "Quickly capture 3D animated video clips for patient education, case acceptance and lecture presentations. Increase case acceptance through better patient understanding."
      },
      {
        "kind": "paragraph",
        "text": "Automatically save 3D image reports to MS Word template and attach to patient’s practice management record. Collaborate with referring dentists by burning a patient disc with sample viewer. Capture and email images quickly."
      },
      {
        "kind": "paragraph",
        "text": "Work on cases from home or a satellite office without long connectivity delays. Lead virtual online treatment planning meetings remotely with PreXion3D."
      },
      {
        "kind": "paragraph",
        "text": "PreXion3D CBCT scanners do not require computer hardware upgrades. It does not slow down network bandwidth like other CBCT scanners."
      },
      {
        "kind": "paragraph",
        "text": "Use our extensive library or customize your own."
      },
      {
        "kind": "paragraph",
        "text": "Save your case workup as a scene or create multiple saved scenes with a single scan."
      },
      {
        "kind": "paragraph",
        "text": "Save time with over 20 pre-made 3D volume rendering templates or customize your own."
      },
      {
        "kind": "paragraph",
        "text": "Slab Feature allows the clinician to see inside structures while rotating the 3D image. Cut away structures to see exactly what is pertinent to your study."
      },
      {
        "kind": "paragraph",
        "text": "CLEAREST IMAGES"
      },
      {
        "kind": "paragraph",
        "text": "CLINICAL ADVISORY BOARD"
      },
      {
        "kind": "heading",
        "text": "Field of View"
      },
      {
        "kind": "paragraph",
        "text": "The PreXion3D Explorer PRO provides an accurate 360˚ panoramic perspective from 523 to 1,024 projected views. In addition to the 3D analysis function for image detail sizes of 5x5cm, 10x10cm, 15x10cm and 15x16cm, the device features “True” and “Reconstructed” panorama modes. It impresses with its ease of operation, comprehensive planning programs and imaging software across all dental indication areas."
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“After looking at the different CBCT units available in the marketplace, we chose PreXion based on the PreXion specifications, low radiation, and state of the art imaging. We are excited to be able to better diagnose periodontal disease and treatment plan for implants. In addition, we were very pleased by the training provided by PreXion which has been vital to help us learn how to use our CBCT to the fullest.”"
      },
      {
        "kind": "heading",
        "text": "Request a Free Demo"
      }
    ],
    "callsToAction": "- REQUEST A DEMO - Request a Free Demo (Formulário) - Telefone: 855-PREXION - Suporte ao Cliente: (650) 212-0314 - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "YouTube video player 6",
        "url": "https://www.youtube.com/embed/7_Ca2Eay0A8?wmode=transparent&autoplay=0"
      }
    ],
    "images": [
      {
        "alt": "prexion excelsior",
        "url": "/manus-storage/944da45c3b37-Excelsior-Transparent-300dpi-2-1_f5f8db42.png"
      },
      {
        "alt": "PreXion 16 years of expierence",
        "url": "/manus-storage/d91ef2eea9c3-987951ae-icon-1_1000000000000000000028_e65e16ea.png"
      },
      {
        "alt": "PreXion clearest images",
        "url": "/manus-storage/8fd6b650cec1-58e85faf-icon-2_1000000000000000000028_071373a9.png"
      },
      {
        "alt": "PreXion clinical advisory board",
        "url": "/manus-storage/86d8784597be-98f2607b-icon-3_1000000000000000000028_b5102b10.png"
      },
      {
        "alt": "PreXion distributing partners",
        "url": "/manus-storage/aed2559e66fb-fbdf7669-icon-4_1000000000000000000028_604e2fb3.png"
      },
      {
        "alt": "PreXion customer support",
        "url": "/manus-storage/bc77b47ee755-63dacb4d-icon-5_1000000000000000000028_f68001fe.png"
      },
      {
        "alt": "5x5cm image",
        "url": "/manus-storage/73fb195eea77-5e00dd37-5x5_109f09f000000000000028_894e2423.png"
      },
      {
        "alt": "10x5cm image",
        "url": "/manus-storage/a05658fdf116-b7ed37e0-10x5_109g09g000000000000028_89e8c08c.png"
      },
      {
        "alt": "10x8cm image",
        "url": "/manus-storage/307cd34097d0-df099c25-10x8_109c09c000000000000028_eb42b0dc.png"
      },
      {
        "alt": "15x8cm image",
        "url": "/manus-storage/5e8a2efda78d-0bd7dcfd-15x8_10bj09d000000000000028_22ec2c26.png"
      },
      {
        "alt": "15x13cm image",
        "url": "/manus-storage/09ee3d8cf68b-b407d543-15x13_109a09a000000000000028_067f4047.png"
      }
    ],
    "migrationAction": "consolidate",
    "notes": "A página é uma landing page de campanha (LP) focada no PreXion3D Excelsior, promovendo a atualização de tecnologia para 2023. O conteúdo parece focado em uma campanha específica e menciona o ano de 2023, o que pode estar obsoleto. Há um erro notável no texto da seção \"Field of View\", onde o produto \"PreXion3D Explorer PRO\" é mencionado em vez do Excelsior, descrevendo campos de visão (5x5, 10x10, etc.) que podem não pertencer ao produto principal desta página. Recomenda-se consolidar o conteúdo relevante na página principal do produto Excelsior, caso exista, e corrigir as especificações. O rodapé e alguns cabeçalhos estão duplicados na extração."
  },
  "/prexion-3d-expedition": {
    "sourceUrl": "https://www.prexion.com/prexion-3d-expedition/",
    "route": "/prexion-3d-expedition",
    "canonicalTarget": "/product",
    "title": "Expedition CBCT Scanner",
    "type": "product",
    "relevance": "high",
    "summary": "PREXION EXPEDITION CBCT SCANNER Even Higher Image Quality The PreXion Expedition CBCT Scanner is designed to deliver higher image quality, combining a high-quality X-ray generator with various imaging technologies. It is crafted in Japan and emphasizes vivid, accurate, and reliable diagnostic imaging. Cone Beam CT Benefits in Daily Practice Cone beam CT allows practitioners to make precise diagnoses and treatments by viewing pathology beyond conventional 2D images, with low dosage and intuitive operation. In Pursuit of High Image Quality Superior imaging quality is achieved through a high-quality X-ray generator and new IGZO technology, producing clearer images with less noise. New IGZO Flat Panel Detector IGZO",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "PREXION EXPEDITION CBCT SCANNER Even Higher Image Quality PreXion Expedition CBCT Scanner In designing and manufacturing PreXion Expedition CBCT Scanner, our team was in pursuit of delivering even higher image quality. This product combines a high-quality X-ray generator, the key component for X-ray irradiation, with a variety of imaging technologies. This is more vivid, more accurate, more reliable diagnostic imaging technology crafted in Japan and recognized around the world. Responsive customer support and strict quality control standards are the defining characteristics of our in-house product development. Every aspect of the PreXion Expedition CBCT Scanner, from our rigid quality control standards and manufacturing to our comprehensive customer support, is developed in Japan. Our software has been used for more than 15 years in clinical procedures, and we have developed our x-ray generator, a central component of a cone beam CT, in-house. PreXion Expedition CBCT Scanner In designing and manufacturing PreXion Expedition CBCT Scanner, our team was in pursuit of delivering even higher image quality. This product combines a high-quality X-ray generator, the key component for X-ray irradiation, with a variety of imaging technologies. This is more vivid, more accurate, more reliable diagnostic imaging technology crafted in Japan and recognized around the world. Responsive customer support and strict quality control standards are the defining characteristics of our in-house product development. Every aspect of the PreXion Expedition CBCT Scanner , from our rigid quality control standards and manufacturing to our comprehensive customer support, is developed in Japan. Our software has been used for more than 15 years in clinical procedures, and we have developed our X-ray generator, a central component of a cone beam CT, in-house. Get Full Specifications with the Product Brochure Cone Beam CT Benefits in Daily Practice Practitioners can make diagnoses and provide treatment with more precision by viewing pathology that could not be recognized with conventional 2D images, such as the spatial structure of teeth and jawbone as well as the location of nerves. Cone beam CT allows for low dosage without compromising on precise, clear image quality. This not only ensures accurate diagnosis, but also reduces the patient concern. Easy-to-understand icons and intuitive operation during imaging allow for stress-free diagnosis and better patient understanding. Get Full Specifications with the Product Brochure In Pursuit of High Image Quality Superior imaging quality is produced by combining a high-quality X-ray generator, the key component for X-ray irradiation, with a variety of imaging technologies. PreXion has added new IGZO technology to capture an even higher quality image than previous models. With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side. Cone Beam CT Benefits in Daily Practice Practitioners can make diagnoses and provide treatment with more precision by viewing pathology that could not be recognized with conventional 2D images, such as the spatial structure of teeth and jawbone as well as the location of nerves. Cone beam CT allows for low dosage without compromising on precise, clear image quality. This not only ensures accurate diagnosis, but also reduces the patient concern. Easy-to-understand icons and intuitive operation during imaging allow for stress-free diagnosis and better patient understanding. In Pursuit of High Image Quality Superior imaging quality is produced by combining a high-quality X-ray generator, the key component for X-ray irradiation, with a variety of imaging technologies. PreXion has added new IGZO technology to capture an even higher quality image than previous models. Get Full Specifications with the Product Brochure New IGZO Flat Panel Detector IGZO is an acronym for indium (In), gallium (Ga), zinc (Zn) and oxide (O), the metals that are included in the sensor. This new technology uses more of the current to capture the image, producing visibly clearer images with less noise, while also reducing energy consumption. IGZO display technology is being used in curved gaming monitors and in automobile and smartphone displays. 360° Rotation PreXion Expedition CBCT Scanner makes higher resolution images possible by obtaining information content from the entire circumference with 360° scanning with no image rendering necessary. 110k High X-ray Tube Voltage The high X-ray tube voltage of 110kV allows PreXion Expedition CBCT Scanner to deliver optimal image quality for all kinds of tissue while decreasing image artifacts. X-Ray Tube Focal Spot 0.3 × 0.3mm The focal spot is the part of the X-ray tube where electrons strike a target and emit X-rays. PreXion Expedition CBCT Scanner features a 0.3mm X-ray tube focal spot, among the smallest in the industry. Voxel Size Minimum: 0.06mm, Maximum: 0.3mm PreXion Expedition CBCT Scanner uses voxel sizes of 0.06 / 0.08 / 0.1 / 0.12 / 0.15 / 0.2 / 0.3mm. It displays 3D images with high resolution and high image quality. This is smaller than nearly every competitor. 16-bit Grayscale While many dental CT scanners have 14-bits (16,384 gradations), PreXion Expedition CBCT Scanner has a high gradation of 16-bits (65,536 gradations), enabling it to produce even smoother, higher resolution images. Expedition CBCT Model is Ceph Upgradeable Discover what a CBCT Scanner can make possible for your practice. For many clinicians and practice owners, an investment in CBCT technology from PreXion can become proﬁtable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to ﬁnance a product. CALCULATE YOUR SAVINGS Making Low Radiation Exposure a Reality PreXion Expedition CBCT Scanner is equipped with features such as pulse irradiation that emits X-rays intermittently and a low-dose mode, which can deliver high image quality while minimizing radiation exposure making more precise examinations possible. Get Full Specifications with the Product Brochure New Fields of View (FOV) PreXion Expedition CBCT Scanner is equipped with CT image acquisition capabilities applicable for all clinical situations at 5x5cm, 8x8cm, 12.5x10cm, and 15x15cm (optional), covering endodontic to full mouth treatment. PreXion3D Expedition uses a 360° rotation to generate high resolution images for all FOVs. The new 12.5x10cm FOV provides 2cm of additional height to capture the lower sinuses for optimal clinical diagnosis. New Modern Design PreXion has updated the model design and panel manufacturing to provide even greater durability and build quality with a sleek, modern design. Discover what CBCT can make possible for your practice. For many clinicians and practice owners, an investment in CBCT technology from PreXion can become proﬁtable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to ﬁnance a product. CALCULATE YOUR SAVINGS What is the Industry Saying? What is the Industry Saying? “Over 5 years ago, I bought my second CBCT and it was a PreXion. Over these past 5 years, the training and service have been second to none and if you’re investing in such a piece of equipment, it is essential both of these criteria be 100%. Add the great images and easy software interface, my entire multi-specialty users just love our unit. This company walks the walk for its clients and continues to set the bar for anyone interested in purchasing a CBCT.” – Lou Graham DDS FAGD, USA Experience True Clarity & Precision Schedule a demo today. SCHEDULE A DEMO"
      },
      {
        "kind": "heading",
        "text": "PREXION EXPEDITION CBCT SCANNER"
      },
      {
        "kind": "heading",
        "text": "Even Higher Image Quality"
      },
      {
        "kind": "paragraph",
        "text": "In designing and manufacturing PreXion Expedition CBCT Scanner, our team was in pursuit of delivering even higher image quality. This product combines a high-quality X-ray generator, the key component for X-ray irradiation, with a variety of imaging technologies."
      },
      {
        "kind": "paragraph",
        "text": "This is more vivid, more accurate, more reliable diagnostic imaging technology crafted in Japan and recognized around the world."
      },
      {
        "kind": "paragraph",
        "text": "Responsive customer support and strict quality control standards are the defining characteristics of our in-house product development. Every aspect of the PreXion Expedition CBCT Scanner, from our rigid quality control standards and manufacturing to our comprehensive customer support, is developed in Japan. Our software has been used for more than 15 years in clinical procedures, and we have developed our x-ray generator, a central component of a cone beam CT, in-house."
      },
      {
        "kind": "heading",
        "text": "Cone Beam CT Benefits in Daily Practice"
      },
      {
        "kind": "list",
        "text": "Practitioners can make diagnoses and provide treatment with more precision by viewing pathology that could not be recognized with conventional 2D images, such as the spatial structure of teeth and jawbone as well as the location of nerves."
      },
      {
        "kind": "list",
        "text": "Cone beam CT allows for low dosage without compromising on precise, clear image quality. This not only ensures accurate diagnosis, but also reduces the patient concern."
      },
      {
        "kind": "list",
        "text": "Easy-to-understand icons and intuitive operation during imaging allow for stress-free diagnosis and better patient understanding."
      },
      {
        "kind": "heading",
        "text": "In Pursuit of High Image Quality"
      },
      {
        "kind": "paragraph",
        "text": "Superior imaging quality is produced by combining a high-quality X-ray generator, the key component for X-ray irradiation, with a variety of imaging technologies. PreXion has added new IGZO technology to capture an even higher quality image than previous models."
      },
      {
        "kind": "paragraph",
        "text": "With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side."
      },
      {
        "kind": "heading",
        "text": "New IGZO Flat Panel Detector"
      },
      {
        "kind": "paragraph",
        "text": "IGZO is an acronym for indium (In), gallium (Ga), zinc (Zn) and oxide (O), the metals that are included in the sensor. This new technology uses more of the current to capture the image, producing visibly clearer images with less noise, while also reducing energy consumption. IGZO display technology is being used in curved gaming monitors and in automobile and smartphone displays."
      },
      {
        "kind": "paragraph",
        "text": "360° Rotation"
      },
      {
        "kind": "paragraph",
        "text": "PreXion Expedition CBCT Scanner makes higher resolution images possible by obtaining information content from the entire circumference with 360° scanning with no image rendering necessary."
      },
      {
        "kind": "heading",
        "text": "110k High X-ray Tube Voltage"
      },
      {
        "kind": "paragraph",
        "text": "The high X-ray tube voltage of 110kV allows PreXion Expedition CBCT Scanner to deliver optimal image quality for all kinds of tissue while decreasing image artifacts."
      },
      {
        "kind": "heading",
        "text": "X-Ray Tube Focal Spot 0.3 × 0.3mm"
      },
      {
        "kind": "paragraph",
        "text": "The focal spot is the part of the X-ray tube where electrons strike a target and emit X-rays. PreXion Expedition CBCT Scanner features a 0.3mm X-ray tube focal spot, among the smallest in the industry."
      },
      {
        "kind": "heading",
        "text": "Voxel Size Minimum: 0.06mm, Maximum: 0.3mm"
      },
      {
        "kind": "paragraph",
        "text": "PreXion Expedition CBCT Scanner uses voxel sizes of 0.06 / 0.08 / 0.1 / 0.12 / 0.15 / 0.2 / 0.3mm. It displays 3D images with high resolution and high image quality. This is smaller than nearly every competitor."
      },
      {
        "kind": "heading",
        "text": "16-bit Grayscale"
      },
      {
        "kind": "paragraph",
        "text": "While many dental CT scanners have 14-bits (16,384 gradations), PreXion Expedition CBCT Scanner has a high gradation of 16-bits (65,536 gradations), enabling it to produce even smoother, higher resolution images."
      },
      {
        "kind": "paragraph",
        "text": "Expedition CBCT Model is Ceph Upgradeable"
      },
      {
        "kind": "heading",
        "text": "Discover what a CBCT Scanner can make possible for your practice."
      },
      {
        "kind": "paragraph",
        "text": "For many clinicians and practice owners, an investment in CBCT technology from PreXion can become proﬁtable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to ﬁnance a product."
      },
      {
        "kind": "heading",
        "text": "Making Low Radiation Exposure a Reality"
      },
      {
        "kind": "paragraph",
        "text": "PreXion Expedition CBCT Scanner is equipped with CT image acquisition capabilities applicable for all clinical situations at 5x5cm, 8x8cm, 12.5x10cm, and 15x15cm (optional), covering endodontic to full mouth treatment. PreXion3D Expedition uses a 360° rotation to generate high resolution images for all FOVs. The new 12.5x10cm FOV provides 2cm of additional height to capture the lower sinuses for optimal clinical diagnosis."
      },
      {
        "kind": "paragraph",
        "text": "PreXion has updated the model design and panel manufacturing to provide even greater durability and build quality with a sleek, modern design."
      },
      {
        "kind": "heading",
        "text": "Discover what CBCT can make possible for your practice."
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“Over 5 years ago, I bought my second CBCT and it was a PreXion. Over these past 5 years, the training and service have been second to none and if you’re investing in such a piece of equipment, it is essential both of these criteria be 100%. Add the great images and easy software interface, my entire multi-specialty users just love our unit. This company walks the walk for its clients and continues to set the bar for anyone interested in purchasing a CBCT.”"
      },
      {
        "kind": "heading",
        "text": "Experience True Clarity & Precision"
      },
      {
        "kind": "heading",
        "text": "Schedule a demo today."
      }
    ],
    "callsToAction": "- Get Full Specifications with the Product Brochure - CALCULATE YOUR SAVINGS - SCHEDULE A DEMO - Telefone: 855-PREXION - Suporte: (650) 212-0314 - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [
      "/manus-storage/1e0d7540a2c3-PreXion-Expedition-Model-Brochure_43778941.pdf",
      "/manus-storage/73eed30ae938-PreXion-Expedition-Model-Brochure_FINAL_1223_8619471b.pdf"
    ],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "CBCT Scanner",
        "url": "https://www.prexion.com/"
      },
      {
        "label": "Get Full Specifications with the Product Brochure",
        "url": "https://www.prexion.com/wp-content/uploads/2024/02/PreXion-Expedition-Model-Brochure_FINAL_1223.pdf"
      },
      {
        "label": "Cone beam CT",
        "url": "https://www.prexion.com/"
      },
      {
        "label": "Get Full Specifications with the Product Brochure",
        "url": "https://www.prexion.com/wp-content/uploads/2024/02/PreXion-Expedition-Model-Brochure_FINAL_1223.pdf"
      },
      {
        "label": "Cone beam CT",
        "url": "https://www.prexion.com/"
      },
      {
        "label": "Get Full Specifications with the Product Brochure",
        "url": "https://www.prexion.com/wp-content/uploads/2024/02/PreXion-Expedition-Model-Brochure.pdf"
      },
      {
        "label": "ROI calculator tool",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "CALCULATE YOUR SAVINGS",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "Get Full Specifications with the Product Brochure",
        "url": "https://www.prexion.com/wp-content/uploads/2024/02/PreXion-Expedition-Model-Brochure_FINAL_1223.pdf"
      },
      {
        "label": "CALCULATE YOUR SAVINGS",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "SCHEDULE A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      }
    ],
    "images": [
      {
        "alt": "Expedition CBCT Scanner",
        "url": "/manus-storage/9dbbe26071e9-PreXion_Expedition_with_ceph_107aeb5f.png"
      }
    ],
    "migrationAction": "preserve-resource",
    "notes": "A página apresenta duplicações de conteúdo, especialmente nos blocos \"PreXion Expedition CBCT Scanner\", \"Cone Beam CT Benefits in Daily Practice\" e \"In Pursuit of High Image Quality\", além do rodapé. O conteúdo em si é altamente relevante para o produto. Recomendada a preservação do conteúdo na nova estrutura do site, eliminando as duplicações."
  },
  "/prexion-3d-explorer-ex": {
    "sourceUrl": "https://www.prexion.com/prexion-3d-explorer-ex/",
    "route": "/prexion-3d-explorer-ex",
    "canonicalTarget": "/product",
    "title": "Explorer EX CBCT Scanner",
    "type": "product",
    "relevance": "high",
    "summary": "PREXION 3D EXPLORER EX CBCT SCANNER Advanced CBCT Imaging with a Precision Field of View Lowest price ever for a large FOV CBCT! Features include 4 Fields of View FOV : 5x5cm, 10x10cm, 15x10cm and 15x16cm single pass with no stitching , the smallest .03mm focal spot for outstanding image clarity, making it a great option for airway/sleep diagnostics, TMD analysis, oral surgery and orthodontia. Comes with a 10-Year, All Parts, 3-Year Labor Warranty. PreXion Explorer EX CBCT Scanner PreXion specializes in three-dimensional X-ray diagnostics with more than 15 years of experience. The systems offer outstanding precision for safe diagnostics and planning in dentistry. Includes in-person training, service, maintenanc",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "PREXION 3D EXPLORER EX CBCT SCANNER Advanced CBCT Imaging with a Precision Field of View Lowest price ever for a large FOV CBCT! 4 Fields of View (FOV): 5x5cm, 10x10cm, 15x10cm and 15x16cm (single pass with no stitching) Smallest (.03mm) focal spot for outstanding image clarity A great option for airway/sleep diagnostics, TMD analysis, oral surgery and orthodontia 10-Year, All Parts, 3-Year Labor Warranty Limited time offer while supplies last. Request a Demo Lowest price ever for a large FOV CBCT! 4 Fields of View (FOV): 5x5cm, 10x10cm, 15x10cm and 15x16cm (single pass with no stitching) Smallest (.03mm) focal spot for outstanding image clarity A great option for airway/sleep diagnostics, TMD analysis, oral surgery and orthodontia 10-Year, All Parts, 3-Year Labor Warranty Limited time offer while supplies last. Request a Demo PreXion Explorer EX CBCT Scanner Few companies on the market are as specialized in three-dimensional X-ray diagnostics as PreXion. With more than 15 years of experience in software-supported 3D X-ray imaging, PreXion systems offer outstanding precision for safe diagnostics and planning in all areas of dentistry. Let PreXion empower you and your practice with in-person training, service and maintenance, while you achieve peace of mind with a full-service extended warranty which covers the entire device, lens included. Why CBCT? Why 3D instead of 2D? Three-dimensional CBCT imaging is decisively superior to conventional two-dimensional X-ray equipment, as the dental professional can spatially examine the oral conditions according to the most varied medical aspects. 3D imaging can also reduce the length of time that patients are exposed to radiation. In addition, the volume structure of the hard and soft tissues is incomparably better represented in 3D CBCT imaging than in 2D X-rays. Why a large FOV? With one of the largest fields of view (FOV) on the market (15 x 16cm), the PreXion Explorer EX CBCT can display all the important anatomical structures of the skull in great detail. The scan can be captured in only 10 seconds minimizing patient exposure and movement and maximizing image quality. The powerful imaging software helps to highlight and measure relevant areas. Large-area spatial image analysis helps to develop the best therapy options, particularly in oral and maxillofacial surgery, as well as ear, nose and throat medicine. See the profitability of CBCT technology from PreXion with our ROI calculator today. Get Full Specifications with the Product Brochure Why PreXion Explorer EX CBCT Scanner? The powerful system components of the PreXion Explorer EX CBCT enable an extraordinary combination of the most precise 3D imaging, large image detail, lowest radiation exposure, reliable diagnostics and digital planning for all indications in modern dentistry, including periodontology, endodontics, implantology, airway/sleep diagnostics, TMD treatment, orthodontics and maxillofacial surgery, among many others. Its patient management system is designed for secure and networked communication of patient data across multiple rooms within a practice and can be integrated into the existing infrastructure with ease. With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side. PreXion Explorer EX CBCT Scanner Few companies on the market are as specialized in three-dimensional X-ray diagnostics as PreXion. With more than 15 years of experience in software-supported 3D X-ray imaging, PreXion systems offer outstanding precision for safe diagnostics and planning in all areas of dentistry. Let PreXion empower you and your practice with in-person training, service and maintenance, while you achieve peace of mind with a full-service extended warranty which covers the entire device, lens included. Why CBCT? Why 3D instead of 2D? Three-dimensional CBCT imaging is decisively superior to conventional two-dimensional X-ray equipment, as the dental professional can spatially examine the oral conditions according to the most varied medical aspects. 3D imaging can also reduce the length of time that patients are exposed to radiation. In addition, the volume structure of the hard and soft tissues is incomparably better represented in 3D CBCT imaging than in 2D X-rays. Why a large FOV? With one of the largest fields of view (FOV) on the market (15 x 16cm), the PreXion Explorer EX CBCT can display all the important anatomical structures of the skull in great detail. The scan can be captured in only 10 seconds minimizing patient exposure and movement and maximizing image quality. The powerful imaging software helps to highlight and measure relevant areas. Large-area spatial image analysis helps to develop the best therapy options, particularly in oral and maxillofacial surgery, as well as ear, nose and throat medicine. See the profitability of CBCT technology from PreXion with our ROI calculator today. Get Full Specifications with the Product Brochure Why PreXion Explorer EX CBCT Scanner? The powerful system components of the PreXion Explorer EX CBCT enable an extraordinary combination of the most precise 3D imaging, large image detail, lowest radiation exposure, reliable diagnostics and digital planning for all indications in modern dentistry, including periodontology, endodontics, implantology, airway/sleep diagnostics, TMD treatment, orthodontics and maxillofacial surgery, among many others. Its patient management system is designed for secure and networked communication of patient data across multiple rooms within a practice and can be integrated into the existing infrastructure with ease. With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side. Highlights: Captures a large 15x16cm field of view scan in a single pass in only 10 seconds for better image quality and less patient exposure Accurate 360-degree gantry rotation 260-1,024 projected views Dedicated 2D (PAN) mode option Clearest detail with a 0.3mm focal spot & 0.07-0.3mm voxel size Key Features: 0.3×0.3mm focal spot – the smallest in the industry Multiple ﬁelds of view (FOV) ranging from 5×5cm to 15×16cm. Low dose, HD and Endo CT modes with scan times of 10, 18 and 20 seconds respectively 14-second pano Clinical Applications: Implant placement surgery Endodontics Periodontics Orthodontics Oral-maxillofacial surgery TMJ treatment Pathology Impacted and supernumerary teeth DICOM export for implant surgical guides & CAD/CAM integration Airway analysis Discover what a CBCT Scanner can make possible for your practice. For many clinicians and practice owners, an investment in CBCT technology from PreXion can become profitable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to finance a product. CALCULATE YOUR SAVINGS Software Features With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side. Multi-data Load multiple patient scans on a single screen. Synchronize pre- and post-operative scans and detect differences slice by slice. Patient Education and Presentation Quickly capture 3D animated video clips for patient education and lecture presentations. Increase case acceptance through better patient understanding. Collaborative Tools Automatically save 3D image reports to an MS Word template and attach to the patient’s practice management record. Collaborate with referring dentists by burning a patient disc with the sample viewer. Capture and email images quickly. Remote Access Work on cases from home or a satellite ofﬁce without long connectivity delays. Lead virtual treatment planning meetings remotely with PreXion3D. Thin Client Server PreXion3D CBCT systems do not require computer hardware upgrades. Their software does not slow down network bandwidth like other CBCT systems. Implant Library Use our extensive library or customize your own. Save Scenes Save your case workup as a scene or create multiple saved scenes with a single scan. 3D Templates Save time with over 20 pre-made 3D volume rendering templates or customize your own. Slab and Cutting Slab feature allows the clinician to see inside structures while rotating the 3D image. Cut away structures to see exactly what is pertinent to your case. Get Full Specifications with the Product Brochure Discover what CBCT can make possible for your practice. For many clinicians and practice owners, an investment in CBCT technology from PreXion can become proﬁtable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to ﬁnance a product. CALCULATE YOUR SAVINGS What is the Industry Saying? What is the Industry Saying? “Over 5 years ago, I bought my second CBCT and it was a PreXion. Over these past 5 years, the training and service have been second to none and if you’re investing in such a piece of equipment, it is essential both of these criteria be 100%. Add the great images and easy software interface, my entire multi-specialty users just love our unit. This company walks the walk for its clients and continues to set the bar for anyone interested in purchasing a CBCT.” – Lou Graham DDS FAGD, USA Experience True Clarity & Precision Schedule a demo today. SCHEDULE A DEMO"
      },
      {
        "kind": "heading",
        "text": "PREXION 3D EXPLORER EX CBCT SCANNER"
      },
      {
        "kind": "heading",
        "text": "Advanced CBCT Imaging with a Precision Field of View"
      },
      {
        "kind": "heading",
        "text": "Lowest price ever for a large FOV CBCT!"
      },
      {
        "kind": "list",
        "text": "4 Fields of View (FOV): 5x5cm, 10x10cm, 15x10cm and 15x16cm (single pass with no stitching)"
      },
      {
        "kind": "list",
        "text": "Smallest (.03mm) focal spot for outstanding image clarity"
      },
      {
        "kind": "list",
        "text": "A great option for airway/sleep diagnostics, TMD analysis, oral surgery and orthodontia"
      },
      {
        "kind": "paragraph",
        "text": "10-Year, All Parts, 3-Year Labor Warranty"
      },
      {
        "kind": "heading",
        "text": "PreXion Explorer EX CBCT Scanner"
      },
      {
        "kind": "paragraph",
        "text": "Few companies on the market are as specialized in three-dimensional X-ray diagnostics as PreXion. With more than 15 years of experience in software-supported 3D X-ray imaging, PreXion systems offer outstanding precision for safe diagnostics and planning in all areas of dentistry."
      },
      {
        "kind": "paragraph",
        "text": "Let PreXion empower you and your practice with in-person training, service and maintenance, while you achieve peace of mind with a full-service extended warranty which covers the entire device, lens included."
      },
      {
        "kind": "heading",
        "text": "Why CBCT?"
      },
      {
        "kind": "paragraph",
        "text": "Why 3D instead of 2D? Three-dimensional CBCT imaging is decisively superior to conventional two-dimensional X-ray equipment, as the dental professional can spatially examine the oral conditions according to the most varied medical aspects. 3D imaging can also reduce the length of time that patients are exposed to radiation. In addition, the volume structure of the hard and soft tissues is incomparably better represented in 3D CBCT imaging than in 2D X-rays."
      },
      {
        "kind": "heading",
        "text": "Why a large FOV?"
      },
      {
        "kind": "paragraph",
        "text": "With one of the largest fields of view (FOV) on the market (15 x 16cm), the PreXion Explorer EX CBCT can display all the important anatomical structures of the skull in great detail. The scan can be captured in only 10 seconds minimizing patient exposure and movement and maximizing image quality. The powerful imaging software helps to highlight and measure relevant areas. Large-area spatial image analysis helps to develop the best therapy options, particularly in oral and maxillofacial surgery, as well as ear, nose and throat medicine."
      },
      {
        "kind": "paragraph",
        "text": "See the profitability of CBCT technology from PreXion with our ROI calculator today."
      },
      {
        "kind": "heading",
        "text": "Why PreXion Explorer EX CBCT Scanner?"
      },
      {
        "kind": "paragraph",
        "text": "The powerful system components of the PreXion Explorer EX CBCT enable an extraordinary combination of the most precise 3D imaging, large image detail, lowest radiation exposure, reliable diagnostics and digital planning for all indications in modern dentistry, including periodontology, endodontics, implantology, airway/sleep diagnostics, TMD treatment, orthodontics and maxillofacial surgery, among many others. Its patient management system is designed for secure and networked communication of patient data across multiple rooms within a practice and can be integrated into the existing infrastructure with ease. With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side."
      },
      {
        "kind": "heading",
        "text": "Highlights:"
      },
      {
        "kind": "list",
        "text": "Captures a large 15x16cm field of view scan in a single pass in only 10 seconds for better image quality and less patient exposure"
      },
      {
        "kind": "list",
        "text": "Accurate 360-degree gantry rotation"
      },
      {
        "kind": "list",
        "text": "260-1,024 projected views"
      },
      {
        "kind": "list",
        "text": "Dedicated 2D (PAN) mode option"
      },
      {
        "kind": "list",
        "text": "Clearest detail with a 0.3mm focal spot & 0.07-0.3mm voxel size"
      },
      {
        "kind": "heading",
        "text": "Key Features:"
      },
      {
        "kind": "list",
        "text": "0.3×0.3mm focal spot – the smallest in the industry"
      },
      {
        "kind": "list",
        "text": "Multiple ﬁelds of view (FOV) ranging from 5×5cm to 15×16cm."
      },
      {
        "kind": "list",
        "text": "Low dose, HD and Endo CT modes with scan times of 10, 18 and 20 seconds respectively"
      },
      {
        "kind": "list",
        "text": "14-second pano"
      },
      {
        "kind": "heading",
        "text": "Clinical Applications:"
      },
      {
        "kind": "list",
        "text": "Implant placement surgery"
      },
      {
        "kind": "list",
        "text": "Endodontics"
      },
      {
        "kind": "list",
        "text": "Periodontics"
      },
      {
        "kind": "list",
        "text": "Orthodontics"
      },
      {
        "kind": "list",
        "text": "Oral-maxillofacial surgery"
      },
      {
        "kind": "list",
        "text": "TMJ treatment"
      },
      {
        "kind": "list",
        "text": "Pathology"
      },
      {
        "kind": "list",
        "text": "Impacted and supernumerary teeth"
      },
      {
        "kind": "list",
        "text": "DICOM export for implant surgical guides & CAD/CAM integration"
      },
      {
        "kind": "list",
        "text": "Airway analysis"
      },
      {
        "kind": "heading",
        "text": "Discover what a CBCT Scanner can make possible for your practice."
      },
      {
        "kind": "paragraph",
        "text": "For many clinicians and practice owners, an investment in CBCT technology from PreXion can become profitable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to finance a product."
      },
      {
        "kind": "heading",
        "text": "Software Features"
      },
      {
        "kind": "heading",
        "text": "With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side."
      },
      {
        "kind": "paragraph",
        "text": "Load multiple patient scans on a single screen. Synchronize pre- and post-operative scans and detect differences slice by slice."
      },
      {
        "kind": "paragraph",
        "text": "Quickly capture 3D animated video clips for patient education and lecture presentations. Increase case acceptance through better patient understanding."
      },
      {
        "kind": "paragraph",
        "text": "Automatically save 3D image reports to an MS Word template and attach to the patient’s practice management record. Collaborate with referring dentists by burning a patient disc with the sample viewer. Capture and email images quickly."
      },
      {
        "kind": "paragraph",
        "text": "Work on cases from home or a satellite ofﬁce without long connectivity delays. Lead virtual treatment planning meetings remotely with PreXion3D."
      },
      {
        "kind": "paragraph",
        "text": "PreXion3D CBCT systems do not require computer hardware upgrades. Their software does not slow down network bandwidth like other CBCT systems."
      },
      {
        "kind": "paragraph",
        "text": "Use our extensive library or customize your own."
      },
      {
        "kind": "paragraph",
        "text": "Save your case workup as a scene or create multiple saved scenes with a single scan."
      },
      {
        "kind": "paragraph",
        "text": "Save time with over 20 pre-made 3D volume rendering templates or customize your own."
      },
      {
        "kind": "paragraph",
        "text": "Slab feature allows the clinician to see inside structures while rotating the 3D image. Cut away structures to see exactly what is pertinent to your case."
      },
      {
        "kind": "heading",
        "text": "Discover what CBCT can make possible for your practice."
      },
      {
        "kind": "paragraph",
        "text": "For many clinicians and practice owners, an investment in CBCT technology from PreXion can become proﬁtable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to ﬁnance a product."
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“Over 5 years ago, I bought my second CBCT and it was a PreXion. Over these past 5 years, the training and service have been second to none and if you’re investing in such a piece of equipment, it is essential both of these criteria be 100%. Add the great images and easy software interface, my entire multi-specialty users just love our unit. This company walks the walk for its clients and continues to set the bar for anyone interested in purchasing a CBCT.”"
      },
      {
        "kind": "heading",
        "text": "Experience True Clarity & Precision"
      },
      {
        "kind": "heading",
        "text": "Schedule a demo today."
      }
    ],
    "callsToAction": "- [Request a Demo](https://www.prexion.com/request-a-demo/) - [CALCULATE YOUR SAVINGS](https://www.prexion.com/roi-calculator/) - [SCHEDULE A DEMO](https://www.prexion.com/request-a-demo/) - Telefone: [855-PREXION](tel:855PREXION) - Suporte ao Cliente: [(650) 212-0314](tel:6502120314) - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [
      "https://www.prexion.com/wp-content/uploads/2024/02/PRE-Explorer-EX-ProductBrochure-SinglePages-NoCeph.pdf"
    ],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.fda.gov/radiation-emitting-products/medical-x-ray-imaging/dental-cone-beam-computed-tomography#:~:text=Cone%2Dbeam%20computed%20tomography%20systems,%2Dshaped%20X%2Dray%20beam",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct",
      "https://youtu.be/ekmUCulM9SU",
      "https://youtu.be/xJDO3jND690"
    ],
    "links": [
      {
        "label": "Request a Demo",
        "url": "https://www.prexion.com/request-a-demo/"
      },
      {
        "label": "Request a Demo",
        "url": "https://www.prexion.com/request-a-demo/"
      },
      {
        "label": "technology",
        "url": "https://www.fda.gov/radiation-emitting-products/medical-x-ray-imaging/dental-cone-beam-computed-tomography#:~:text=Cone%2Dbeam%20computed%20tomography%20systems,%2Dshaped%20X%2Dray%20beam."
      },
      {
        "label": "ROI calculator",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "Get Full Specifications with the Product Brochure",
        "url": "https://www.prexion.com/wp-content/uploads/2024/02/PRE-Explorer-EX-ProductBrochure-SinglePages-NoCeph.pdf"
      },
      {
        "label": "3D CBCT",
        "url": "https://www.prexion.com/prexion-3d-excelsior-cbct-scanner/"
      },
      {
        "label": "technology",
        "url": "https://www.fda.gov/radiation-emitting-products/medical-x-ray-imaging/dental-cone-beam-computed-tomography#:~:text=Cone%2Dbeam%20computed%20tomography%20systems,%2Dshaped%20X%2Dray%20beam."
      },
      {
        "label": "ROI calculator",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "Get Full Specifications with the Product Brochure",
        "url": "https://www.prexion.com/wp-content/uploads/2024/02/PRE-Explorer-EX-ProductBrochure-SinglePages-NoCeph.pdf"
      },
      {
        "label": "ROI calculator tool",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "CALCULATE YOUR SAVINGS",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "multiple patient scans",
        "url": "https://youtu.be/ekmUCulM9SU"
      },
      {
        "label": "Capture",
        "url": "https://youtu.be/xJDO3jND690"
      },
      {
        "label": "Get Full Specifications with the Product Brochure",
        "url": "https://www.prexion.com/wp-content/uploads/2024/02/PRE-Explorer-EX-ProductBrochure-SinglePages-NoCeph.pdf"
      },
      {
        "label": "ROI calculator tool",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "CALCULATE YOUR SAVINGS",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "SCHEDULE A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      }
    ],
    "images": [
      {
        "alt": "Explorer EX CBCT Scanner",
        "url": "/manus-storage/e16f4a52e819-PRE-Offer-Starburst_e1e38cc1.png"
      },
      {
        "alt": "Explorer EX CBCT Scanner",
        "url": "/manus-storage/872e3f26015f-PRE-Explorer-EX_31b32cd6.jpg"
      }
    ],
    "migrationAction": "create",
    "notes": "Página de produto contendo texto duplicado logo no início (\"Lowest price ever...\"). Recomenda-se criar uma página dedicada e unificada no novo site para o produto \"Explorer EX\", corrigindo as redundâncias e mantendo os CTAs, destaques técnicos e links para o folheto do produto."
  },
  "/prexion-3d-explorer-pro": {
    "sourceUrl": "https://www.prexion.com/prexion-3d-explorer-pro/",
    "route": "/prexion-3d-explorer-pro",
    "canonicalTarget": "/product",
    "title": "Explorer CBCT Scanner",
    "type": "product",
    "relevance": "high",
    "summary": "EXPLORER CBCT SCANNER The First 3D CBCT Scan with Integrated Ceph X-Ray The PreXion3D Explorer PRO Apresenta o primeiro scanner 3D CBCT do mundo com raio-X cefalométrico integrado, destacando sua resolução superior, versatilidade e tamanho compacto, projetado para excelência odontológica. Why the PreXion3D Explorer PRO? Destaca a combinação de imagens 3D precisas, grandes detalhes de imagem, baixa exposição à radiação, diagnósticos confiáveis e planejamento digital. O sistema de gerenciamento de pacientes permite comunicação em rede. Highlights: - Rotação do gantry de 360 graus. - 260-1.024 visualizações projetadas. - Opção de modo pan 2D dedicado. - Detalhe claro com ponto focal de 0,3 mm e voxel de 0,08-0,2 m",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "EXPLORER CBCT SCANNER The First 3D CBCT Scan with Integrated Ceph X-Ray The PreXion3D Explorer PRO Meet the world’s first 3D CBCT Scan with integrated ceph X-ray. With its superior resolution, unprecedented versatility and compact size, it is a game changer in dental imaging. The 3D Explorer PRO is designed to help you achieve true dental excellence. The PreXion3D Explorer PRO Meet the world’s first 3D CBCT with integrated ceph X-ray. With its superior resolution, unprecedented versatility and compact size, it is a game changer in dental imaging. The 3D Explorer PRO is designed to help you achieve true dental excellence. Why the PreXion3D Explorer PRO? The powerful system components of this model enable an extraordinary combination of the most precise 3D dental imaging, large image detail, low radiation exposure, reliable diagnostics and digital planning. Its patient management system is designed for secure and networked communication of patient data across multiple rooms within a practice and can be integrated into the existing infrastructure with ease. See the profitability of CBCT technology from PreXion with our ROI calculator today. Get Full Specifications with the Product Brochure Get Full Specifications with the Product Brochure Why the PreXion3D Explorer PRO? The powerful system components of this model enable an extraordinary combination of the most precise 3D dental imaging, large image detail, low radiation exposure, reliable diagnostics and digital planning. Its patient management system is designed for secure and networked communication of patient data across multiple rooms within a practice and can be integrated into the existing infrastructure with ease. See the profitability of CBCT technology from PreXion with our ROI calculator today. Highlights: Accurate 360-degree gantry rotation 260-1,024 projected views Dedicated 2D pan mode option Clearest detail with a 0.3mm focal spot & 0.08-0.2mm voxel Key Features: Innovative built-in ceph arm design freeing over 2 feet of space 0.3×0.3mm focal spot – the smallest in the industry • Multiple ﬁelds of view (FOV) ranging from 5×5 to 15×16. Low dose, HD and endo CT modes with scan times of 20 seconds or lower 14-second pano and 16-second ceph scan times Clinical Applications: Implant placement surgery Endodontics Periodontics Orthodontics Oral-maxillofacial surgery TMJ treatment Pathology Impacted and supernumerary teeth DICOM export for implant surgical guides & CAD/CAM integration Airway analysis Discover what CBCT can make possible for your practice. For many clinicians and practice owners, an investment in CBCT technology from PreXion can become profitable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to finance a product. CALCULATE YOUR SAVINGS Software Features With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side. Multi-data Load multiple patient scans on a single screen. Synchronize pre- and post-operative scans and detect differences slice by slice. Patient Education and Presentation Quickly capture 3D animated video clips for patient education and lecture presentations. Increase case acceptance through better patient understanding. Collaborative Tools Automatically save 3D image reports to an MS Word template and attach to the patient’s practice management record. Collaborate with referring dentists by burning a patient disc with the sample viewer. Capture and email images quickly. Remote Access Work on cases from home or a satellite ofﬁce without long connectivity delays. Lead virtual treatment planning meetings remotely with PreXion3D. Thin Client Server PreXion3D CBCT scanners do not require computer hardware upgrades. Their software does not slow down network bandwidth like other CBCT scanners . Implant Library Use our extensive library or customize your own. Save Scenes Save your case workup as a scene or create multiple saved scenes with a single scan. 3D Templates Save time with over 20 pre-made 3D volume rendering templates or customize your own. Slab and Cutting Slab feature allows the clinician to see inside structures while rotating the 3D image. Cut away structures to see exactly what is pertinent to your case. Get Full Specifications with the Product Brochure Discover what CBCT can make possible for your practice. For many clinicians and practice owners, an investment in CBCT technology from PreXion can become profitable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to finance a product. CALCULATE YOUR SAVINGS Field of View & Focal Spot The PreXion3D Explorer PRO utilizes the smallest focal spot in the industry at 0.3mm for all FOVs, and voxel sizes ranging from 0.07mm to 0.3mm in order to maintain image quality. The output in ultra-HD with a small voxel size enables a more detailed representation of even the finest structures. What is a focal spot? The focal spot, also called focus, is the area on the target of the X-ray tube which is struck by the electron stream and emits X-rays. The larger the focal spot’s area, the poorer the detail of the image. The PreXion3D EXPLORER PRO has a 0.3mm focal spot – the smallest in the industry. What is a voxel? A combination of the words “volumetric” and “pixel,” a voxel is a three-dimensional volume element shaped like an isometric cube. The PreXion3D EXPLORER PRO offers powerful imaging software with a voxel size of only 0.07mm, ensuring a detailed rendering. Scan Mode: Low Dose Mode (Standard) 10 seconds High-Definition Mode (HD) 18 seconds Endo Mode (Ultra High Definition) 20 seconds Panoramic Standard Mode 14 seconds Specifications: Device Type Cone Beam Computed Tomography System, Head/Neck Focal Spot 0.3 mm x 0.3 mm Tube Voltage 90–110 kV Tube Current 1–5.3 mA Total Filtration 2.7 mm AI Voxel Size 0.07 mm, 0.1 mm, 0.2 mm, 0.3 mm FOV Teeth: 5×5 cm Arch: 10×10 cm Full: 15×10 cm Face: 15×16 cm What is the Industry Saying? What is the Industry Saying? “Over 5 years ago, I bought my second CBCT and it was a PreXion. Over these past 5 years, the training and service have been second to none and if you’re investing in such a piece of equipment, it is essential both of these criteria be 100%. Add the great images and easy software interface, my entire multi-specialty users just love our unit. This company walks the walk for its clients and continues to set the bar for anyone interested in purchasing a CBCT.” – Lou Graham DDS FAGD, USA Experience True Clarity & Precision Schedule a demo today. REQUEST A DEMO"
      },
      {
        "kind": "heading",
        "text": "EXPLORER CBCT SCANNER"
      },
      {
        "kind": "heading",
        "text": "The First 3D CBCT Scan with Integrated Ceph X-Ray"
      },
      {
        "kind": "heading",
        "text": "The PreXion3D Explorer PRO"
      },
      {
        "kind": "paragraph",
        "text": "Meet the world’s first 3D CBCT Scan with integrated ceph X-ray. With its superior resolution, unprecedented versatility and compact size, it is a game changer in dental imaging. The 3D Explorer PRO is designed to help you achieve true dental excellence."
      },
      {
        "kind": "paragraph",
        "text": "Meet the world’s first 3D CBCT with integrated ceph X-ray. With its superior resolution, unprecedented versatility and compact size, it is a game changer in dental imaging. The 3D Explorer PRO is designed to help you achieve true dental excellence."
      },
      {
        "kind": "heading",
        "text": "Why the PreXion3D Explorer PRO?"
      },
      {
        "kind": "paragraph",
        "text": "The powerful system components of this model enable an extraordinary combination of the most precise 3D dental imaging, large image detail, low radiation exposure, reliable diagnostics and digital planning. Its patient management system is designed for secure and networked communication of patient data across multiple rooms within a practice and can be integrated into the existing infrastructure with ease. See the profitability of CBCT technology from PreXion with our ROI calculator today."
      },
      {
        "kind": "heading",
        "text": "Highlights:"
      },
      {
        "kind": "list",
        "text": "Accurate 360-degree gantry rotation"
      },
      {
        "kind": "list",
        "text": "260-1,024 projected views"
      },
      {
        "kind": "list",
        "text": "Dedicated 2D pan mode option"
      },
      {
        "kind": "list",
        "text": "Clearest detail with a 0.3mm focal spot & 0.08-0.2mm voxel"
      },
      {
        "kind": "heading",
        "text": "Key Features:"
      },
      {
        "kind": "list",
        "text": "Innovative built-in ceph arm design freeing over 2 feet of space"
      },
      {
        "kind": "list",
        "text": "0.3×0.3mm focal spot – the smallest in the industry • Multiple ﬁelds of view (FOV) ranging from 5×5 to 15×16."
      },
      {
        "kind": "list",
        "text": "Low dose, HD and endo CT modes with scan times of 20 seconds or lower"
      },
      {
        "kind": "list",
        "text": "14-second pano and 16-second ceph scan times"
      },
      {
        "kind": "heading",
        "text": "Clinical Applications:"
      },
      {
        "kind": "list",
        "text": "Implant placement surgery"
      },
      {
        "kind": "list",
        "text": "Endodontics"
      },
      {
        "kind": "list",
        "text": "Periodontics"
      },
      {
        "kind": "list",
        "text": "Orthodontics"
      },
      {
        "kind": "list",
        "text": "Oral-maxillofacial surgery"
      },
      {
        "kind": "list",
        "text": "TMJ treatment"
      },
      {
        "kind": "list",
        "text": "Pathology"
      },
      {
        "kind": "list",
        "text": "Impacted and supernumerary teeth"
      },
      {
        "kind": "list",
        "text": "DICOM export for implant surgical guides & CAD/CAM integration"
      },
      {
        "kind": "list",
        "text": "Airway analysis"
      },
      {
        "kind": "heading",
        "text": "Discover what CBCT can make possible for your practice."
      },
      {
        "kind": "paragraph",
        "text": "For many clinicians and practice owners, an investment in CBCT technology from PreXion can become profitable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to finance a product."
      },
      {
        "kind": "heading",
        "text": "Software Features"
      },
      {
        "kind": "paragraph",
        "text": "With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side."
      },
      {
        "kind": "paragraph",
        "text": "Load multiple patient scans on a single screen. Synchronize pre- and post-operative scans and detect differences slice by slice."
      },
      {
        "kind": "paragraph",
        "text": "Quickly capture 3D animated video clips for patient education and lecture presentations. Increase case acceptance through better patient understanding."
      },
      {
        "kind": "paragraph",
        "text": "Automatically save 3D image reports to an MS Word template and attach to the patient’s practice management record. Collaborate with referring dentists by burning a patient disc with the sample viewer. Capture and email images quickly."
      },
      {
        "kind": "paragraph",
        "text": "Work on cases from home or a satellite ofﬁce without long connectivity delays. Lead virtual treatment planning meetings remotely with PreXion3D."
      },
      {
        "kind": "paragraph",
        "text": "PreXion3D CBCT scanners do not require computer hardware upgrades. Their software does not slow down network bandwidth like other CBCT scanners ."
      },
      {
        "kind": "paragraph",
        "text": "Use our extensive library or customize your own."
      },
      {
        "kind": "paragraph",
        "text": "Save your case workup as a scene or create multiple saved scenes with a single scan."
      },
      {
        "kind": "paragraph",
        "text": "Save time with over 20 pre-made 3D volume rendering templates or customize your own."
      },
      {
        "kind": "paragraph",
        "text": "Slab feature allows the clinician to see inside structures while rotating the 3D image. Cut away structures to see exactly what is pertinent to your case."
      },
      {
        "kind": "heading",
        "text": "Field of View & Focal Spot"
      },
      {
        "kind": "paragraph",
        "text": "The PreXion3D Explorer PRO utilizes the smallest focal spot in the industry at 0.3mm for all FOVs, and voxel sizes ranging from 0.07mm to 0.3mm in order to maintain image quality. The output in ultra-HD with a small voxel size enables a more detailed representation of even the finest structures."
      },
      {
        "kind": "heading",
        "text": "What is a focal spot?"
      },
      {
        "kind": "paragraph",
        "text": "The focal spot, also called focus, is the area on the target of the X-ray tube which is struck by the electron stream and emits X-rays. The larger the focal spot’s area, the poorer the detail of the image. The PreXion3D EXPLORER PRO has a 0.3mm focal spot – the smallest in the industry."
      },
      {
        "kind": "heading",
        "text": "What is a voxel?"
      },
      {
        "kind": "paragraph",
        "text": "A combination of the words “volumetric” and “pixel,” a voxel is a three-dimensional volume element shaped like an isometric cube. The PreXion3D EXPLORER PRO offers powerful imaging software with a voxel size of only 0.07mm, ensuring a detailed rendering."
      },
      {
        "kind": "heading",
        "text": "Scan Mode:"
      },
      {
        "kind": "heading",
        "text": "Specifications:"
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“Over 5 years ago, I bought my second CBCT and it was a PreXion. Over these past 5 years, the training and service have been second to none and if you’re investing in such a piece of equipment, it is essential both of these criteria be 100%. Add the great images and easy software interface, my entire multi-specialty users just love our unit. This company walks the walk for its clients and continues to set the bar for anyone interested in purchasing a CBCT.”"
      },
      {
        "kind": "heading",
        "text": "Experience True Clarity & Precision"
      },
      {
        "kind": "heading",
        "text": "Schedule a demo today."
      }
    ],
    "callsToAction": "- [CALCULATE YOUR SAVINGS](https://www.prexion.com/roi-calculator/) - [REQUEST A DEMO](https://www.prexion.com/request-a-demo/) - Contact Us: [855-PREXION](tel:855PREXION) - Client Support: [(650) 212-0314](tel:6502120314) - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [
      "https://www.prexion.com/wp-content/uploads/2023/09/PreXion-ExplorerPRO-ProductBrochure-2023.pdf"
    ],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "YouTube video player 35",
        "url": "https://www.youtube.com/embed/nLfv7zA-Gek?wmode=transparent&autoplay=0"
      },
      {
        "label": "ROI calculator",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "Get Full Specifications with the Product Brochure",
        "url": "https://www.prexion.com/wp-content/uploads/2023/09/PreXion-ExplorerPRO-ProductBrochure-2023.pdf"
      },
      {
        "label": "YouTube video player 36",
        "url": "https://www.youtube.com/embed/nLfv7zA-Gek?wmode=transparent&autoplay=0"
      },
      {
        "label": "Get Full Specifications with the Product Brochure",
        "url": "https://www.prexion.com/wp-content/uploads/2023/09/PreXion-ExplorerPRO-ProductBrochure-2023.pdf"
      },
      {
        "label": "ROI calculator",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "ROI calculator tool",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "CALCULATE YOUR SAVINGS",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "CBCT scanners",
        "url": "https://www.prexion.com/"
      },
      {
        "label": "Get Full Specifications with the Product Brochure",
        "url": "https://www.prexion.com/wp-content/uploads/2023/09/PreXion-ExplorerPRO-ProductBrochure-2023.pdf"
      },
      {
        "label": "CALCULATE YOUR SAVINGS",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      }
    ],
    "images": [
      {
        "alt": "Prexion 3D CBCT Scanner",
        "url": "/manus-storage/3876ed2683e8-EXPLORER_PRO-1_a53011b5.png"
      },
      {
        "alt": "top of PreXion 3d CBCT",
        "url": "/manus-storage/b4cdfb5eee62-EXPLR_180950-N_0691cdd1.jpg"
      }
    ],
    "migrationAction": "create",
    "notes": "A página apresenta informações detalhadas sobre o produto Explorer PRO, incluindo especificações técnicas, características do software e um depoimento de cliente. Há repetição do link para a brochura e de seções como 'Why the PreXion3D Explorer PRO?'. O rodapé está duplicado no conteúdo extraído. Recomenda-se criar uma página própria no novo site, consolidando as informações e eliminando as redundâncias identificadas."
  },
  "/prexion-3d-intraoral-sensor": {
    "sourceUrl": "https://www.prexion.com/prexion-3d-intraoral-sensor/",
    "route": "/prexion-3d-intraoral-sensor",
    "canonicalTarget": "/product/evolve-sensor",
    "title": "Prexion 3D Intraoral Sensor",
    "type": "product",
    "relevance": "high",
    "summary": "PREXION 3D EVOLVE INTRAORAL SENSOR The Ultimate Evolution of Dental Imaging Capabilities Evolve Intraoral Sensor Apresenta o novo sensor intraoral Evolve como a evolução final das capacidades de imagem. Oferece imagens de alta definição para diagnósticos precisos e seguros, além de conectividade perfeita para otimizar o fluxo de trabalho de radiografia intraoral e o gerenciamento de imagens dos pacientes. Why the Evolve Intraoral Sensor? O sensor intraoral Evolve substitui filmes radiográficos, gerando imagens instantâneas, mais nítidas e de alta definição. É pequeno, confortável e permite economizar tempo e dinheiro. Inclui licenças de software ilimitadas, várias ferramentas de edição e compartilhamento de rel",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "PREXION 3D EVOLVE INTRAORAL SENSOR The Ultimate Evolution of Dental Imaging Capabilities SCHEDULE A DEMO Evolve Intraoral Sensor Our newly launched Evolve Intraoral Sensor is the ultimate evolution of your imaging capabilities. This precision intraoral dental digital imaging sensor, offers high-definition images, providing you with the precision you need for accurate and safer diagnoses. Stay ahead in the dental field with seamless connectivity that optimizes your intraoral radiography workflow and efficiently manages patient images. Get Full Specifications with the Product Brochure Evolve Intraoral Sensor Our newly launched Evolve Intraoral Sensor is the ultimate evolution of your imaging capabilities. This precision intraoral dental digital imaging sensor, offers high-definition images, providing you with the precision you need for accurate and safer diagnoses. Stay ahead in the dental field with seamless connectivity that optimizes your intraoral radiography workflow and efficiently manages patient images. Get Full Specifications with the Product SCHEDULE A DEMO Why the Evolve Intraoral Sensor? Introducing the Evolve Scan, a portable and ergonomic intraoral scanner. Weighing only 119 grams, it emerges as one of the market’s lightest options. The technology’s user-friendly interface enhances workflow simplicity, efficiency and productivity. With the Evolve Scan, you can conduct precise and agile scans for various applications, including study models, orthodontic aligners, prostheses, myorelaxant plaques and more. Why the Evolve Intraoral Sensor? The Evolve Intraoral Sensor is an equipment that replaces radiographic films and generates instant, sharper and high definition images. In addition to being small and comfortable for the patient, it also allows the surgeon-dentist to save time and money in their daily lives, generating complete and accurate diagnoses in a matter of seconds. It has unlimited software licenses, several editing tools and the possibility of sharing reports. Product Features Compatibility The Evolve Sensor is compatible with any available X-ray equipment on the market. Easy Cable Replacement The Evolve Sensor uses a USB 2.0 cable that is easy to replace (2.5 meters long), and has an internal silicone protection system that makes it more resistant and robust than other products. Save Money Stop wasting money on film and chemicals. The Evolve Sensor is the most cost-effective solution. Save Time While the analogue system takes about five minutes to capture and develop an image, with the Evolve Sensor it takes about 5 seconds. Sharper Images Capture high-definition images in real time. With 25 (theoretical) line pairs and advanced image processing features, you get sharp images for the best diagnosis. Cesium Iodide Technology The Evolve Sensor is based on Cesium Iodide technology found in high-definition CT scanners –for images with high diagnostic power. Software Features Organized Images Register your patients, capture and organize all the images in seconds. With the Evolve Sensor you can quickly find, access and share images. Unlimited Licenses The Evolve Sensor software includes unlimited licenses and can be installed on multiple computers*. Save the images in a folder on the network and access them from anywhere. Share Images and Diagnostics Save images in various formats, such as TIFF, BITMAP, PNG, DCIOM and JPG. Generate PDF reports and instantly share them with your colleagues who following up on the treatment, or your clients, via email. Impress Your Patients The Evolve Sensor takes your practice into the future. Impress your patients by demonstrating the treatment to be done in detail and compare the pre- and post-procedure images. Full Featured The Evolve Sensor software offers a wide range of user-friendly tools such as: rotation, zoom, brightness, contrast and gamma adjustment, positive/negative color adjustment, high-relief, text insertion, arrows, circles, area selection and cropping, angle and segment measurement, a report/diagnostic bar, odontogram, and full-screen image comparison. Get Full Specifications with the Product Brochure Computer Configuration (Minimum Requirements) Operating system: Windows 10 or superior CPU: Intel Core i3 3.0 GHz or superior RAM: 4GB DDR2 SDRAM minimum HDD: 500 GB or larger USB Connector: USB 2.0 Monitor Resolution: 1024 × 768 Discover what can make possible for your practice. For many clinicians and practice owners, an investment technology from PreXion can become proﬁtable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to ﬁnance a product. CALCULATE YOUR SAVINGS Discover what can make possible for your practice. For many clinicians and practice owners, an investment in technology from PreXion can become proﬁtable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to ﬁnance a product. CALCULATE YOUR SAVINGS Experience True Clarity & Precision Schedule a demo today. FIND A PRODUCT SPECIALIST"
      },
      {
        "kind": "heading",
        "text": "PREXION 3D EVOLVE INTRAORAL SENSOR"
      },
      {
        "kind": "heading",
        "text": "The Ultimate Evolution of Dental Imaging Capabilities"
      },
      {
        "kind": "heading",
        "text": "Evolve Intraoral Sensor"
      },
      {
        "kind": "paragraph",
        "text": "Our newly launched Evolve Intraoral Sensor is the ultimate evolution of your imaging capabilities. This precision intraoral dental digital imaging sensor, offers high-definition images, providing you with the precision you need for accurate and safer diagnoses. Stay ahead in the dental field with seamless connectivity that optimizes your intraoral radiography workflow and efficiently manages patient images."
      },
      {
        "kind": "heading",
        "text": "Why the Evolve Intraoral Sensor?"
      },
      {
        "kind": "paragraph",
        "text": "Introducing the Evolve Scan, a portable and ergonomic intraoral scanner. Weighing only 119 grams, it emerges as one of the market’s lightest options. The technology’s user-friendly interface enhances workflow simplicity, efficiency and productivity. With the Evolve Scan, you can conduct precise and agile scans for various applications, including study models, orthodontic aligners, prostheses, myorelaxant plaques and more."
      },
      {
        "kind": "paragraph",
        "text": "The Evolve Intraoral Sensor is an equipment that replaces radiographic films and generates instant, sharper and high definition images. In addition to being small and comfortable for the patient, it also allows the surgeon-dentist to save time and money in their daily lives, generating complete and accurate diagnoses in a matter of seconds. It has unlimited software licenses, several editing tools and the possibility of sharing reports."
      },
      {
        "kind": "heading",
        "text": "Product Features"
      },
      {
        "kind": "paragraph",
        "text": "Compatibility"
      },
      {
        "kind": "paragraph",
        "text": "The Evolve Sensor is compatible with any available X-ray equipment on the market."
      },
      {
        "kind": "paragraph",
        "text": "Easy Cable Replacement"
      },
      {
        "kind": "paragraph",
        "text": "The Evolve Sensor uses a USB 2.0 cable that is easy to replace (2.5 meters long), and has an internal silicone protection system that makes it more resistant and robust than other products."
      },
      {
        "kind": "paragraph",
        "text": "Save Money"
      },
      {
        "kind": "paragraph",
        "text": "Stop wasting money on film and chemicals. The Evolve Sensor is the most cost-effective solution."
      },
      {
        "kind": "paragraph",
        "text": "Save Time"
      },
      {
        "kind": "paragraph",
        "text": "While the analogue system takes about five minutes to capture and develop an image, with the Evolve Sensor it takes about 5 seconds."
      },
      {
        "kind": "paragraph",
        "text": "Sharper Images"
      },
      {
        "kind": "paragraph",
        "text": "Capture high-definition images in real time. With 25 (theoretical) line pairs and advanced image processing features, you get sharp images for the best diagnosis."
      },
      {
        "kind": "paragraph",
        "text": "Cesium Iodide Technology"
      },
      {
        "kind": "paragraph",
        "text": "The Evolve Sensor is based on Cesium Iodide technology found in high-definition CT scanners –for images with high diagnostic power."
      },
      {
        "kind": "heading",
        "text": "Software Features"
      },
      {
        "kind": "paragraph",
        "text": "Organized Images"
      },
      {
        "kind": "paragraph",
        "text": "Register your patients, capture and organize all the images in seconds. With the Evolve Sensor you can quickly find, access and share images."
      },
      {
        "kind": "paragraph",
        "text": "Unlimited Licenses"
      },
      {
        "kind": "paragraph",
        "text": "The Evolve Sensor software includes unlimited licenses and can be installed on multiple computers*. Save the images in a folder on the network and access them from anywhere."
      },
      {
        "kind": "paragraph",
        "text": "Share Images and Diagnostics"
      },
      {
        "kind": "paragraph",
        "text": "Save images in various formats, such as TIFF, BITMAP, PNG, DCIOM and JPG. Generate PDF reports and instantly share them with your colleagues who following up on the treatment, or your clients, via email."
      },
      {
        "kind": "paragraph",
        "text": "Impress Your Patients"
      },
      {
        "kind": "paragraph",
        "text": "The Evolve Sensor takes your practice into the future. Impress your patients by demonstrating the treatment to be done in detail and compare the pre- and post-procedure images."
      },
      {
        "kind": "paragraph",
        "text": "Full Featured"
      },
      {
        "kind": "paragraph",
        "text": "The Evolve Sensor software offers a wide range of user-friendly tools such as: rotation, zoom, brightness, contrast and gamma adjustment, positive/negative color adjustment, high-relief, text insertion, arrows, circles, area selection and cropping, angle and segment measurement, a report/diagnostic bar, odontogram, and full-screen image comparison."
      },
      {
        "kind": "heading",
        "text": "Computer Configuration (Minimum Requirements)"
      },
      {
        "kind": "paragraph",
        "text": "Operating system: Windows 10 or superior"
      },
      {
        "kind": "paragraph",
        "text": "CPU: Intel Core i3 3.0 GHz or superior"
      },
      {
        "kind": "paragraph",
        "text": "RAM: 4GB DDR2 SDRAM minimum"
      },
      {
        "kind": "paragraph",
        "text": "HDD: 500 GB or larger"
      },
      {
        "kind": "paragraph",
        "text": "USB Connector: USB 2.0"
      },
      {
        "kind": "paragraph",
        "text": "Monitor Resolution: 1024 × 768"
      },
      {
        "kind": "heading",
        "text": "Discover what can make possible for your practice."
      },
      {
        "kind": "paragraph",
        "text": "For many clinicians and practice owners, an investment technology from PreXion can become proﬁtable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to ﬁnance a product."
      },
      {
        "kind": "paragraph",
        "text": "For many clinicians and practice owners, an investment in technology from PreXion can become proﬁtable more quickly than anticipated. Use our ROI calculator tool to compare the net income from a PreXion investment to the net expenses required to ﬁnance a product."
      },
      {
        "kind": "heading",
        "text": "Experience True Clarity & Precision"
      },
      {
        "kind": "heading",
        "text": "Schedule a demo today."
      }
    ],
    "callsToAction": "- [SCHEDULE A DEMO](https://www.prexion.com/request-a-demo/) - [CALCULATE YOUR SAVINGS](https://www.prexion.com/roi-calculator/) - [FIND A PRODUCT SPECIALIST](https://www.prexion.com/product-specialists/) - Contact Us: 855-PREXION - Client Support: (650) 212-0314 - Address: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [
      "/manus-storage/904e355eb83a-Prexion-Evolve-Intraoral-Sensor-Sell-Sheet_review_05_2026_03_89a4b6df.pdf",
      "https://www.prexion.com/wp-content/uploads/2023/10/Prexion-Evolve-Intraoral-Sensor-Sell-Sheet_0923.pdf"
    ],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "SCHEDULE A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      },
      {
        "label": "Get Full Specifications with the Product Brochure",
        "url": "https://www.prexion.com/wp-content/uploads/2026/05/Prexion-Evolve-Intraoral-Sensor-Sell-Sheet_review_05_2026_03.pdf"
      },
      {
        "label": "Get Full Specifications with the Product",
        "url": "https://www.prexion.com/wp-content/uploads/2026/05/Prexion-Evolve-Intraoral-Sensor-Sell-Sheet_review_05_2026_03.pdf"
      },
      {
        "label": "SCHEDULE A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      },
      {
        "label": "Get Full Specifications with the Product Brochure",
        "url": "https://www.prexion.com/wp-content/uploads/2023/10/Prexion-Evolve-Intraoral-Sensor-Sell-Sheet_0923.pdf"
      },
      {
        "label": "ROI calculator tool",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "CALCULATE YOUR SAVINGS",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "CALCULATE YOUR SAVINGS",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "FIND A PRODUCT SPECIALIST",
        "url": "https://www.prexion.com/product-specialists/"
      }
    ],
    "images": [
      {
        "alt": "Prexion 3D Intraoral Sensor",
        "url": "/manus-storage/eba5f7ede8d2-19891-Prexion-Evolve-Digital-Sensor-T1-e-T2-slim-300x225_3d395ff5.png"
      }
    ],
    "migrationAction": "create",
    "notes": "A página possui conteúdo duplicado, como a seção introdutória sobre o \"Evolve Intraoral Sensor\" e o bloco \"Why the Evolve Intraoral Sensor?\" que fala incorretamente sobre um scanner (Evolve Scan). A seção do ROI Calculator e o rodapé também aparecem duplicados. Essas inconsistências devem ser corrigidas na migração. O conteúdo é altamente relevante e focado em vendas do produto."
  },
  "/prexion-care": {
    "sourceUrl": "https://www.prexion.com/prexion-care/",
    "route": "/prexion-care",
    "canonicalTarget": "/prexion-care",
    "title": "Prexion Care",
    "type": "support",
    "relevance": "medium",
    "summary": "PreXion Care Formulário para solicitar mais informações sobre o PreXion Care. Prexion Care Contact Formulário de contato contendo campos para Name, Email, Phone, ZIP code, City, State, etc., e CAPTCHA. What is the Industry Saying? Depoimento do Dr. Richard Newhart, Periodontista, elogiando as unidades CBCT da PreXion por suas especificações, baixa radiação, imagem de última geração e treinamento fornecido.",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "PreXion Care Fill out the form below to be contacted about more information. Prexion Care Contact X/Twitter This field is for validation purposes and should be left unchanged. Name (Required) First Last Email (Required) Phone (Required) ZIP code (Required) City State / Province / Region ZIP / Postal Code CAPTCHA What is the Industry Saying? What is the Industry Saying? “After looking at the different CBCT units available in the marketplace, we chose PreXion based on the PreXion specifications, low radiation, and state of the art imaging. We are excited to be able to better diagnose periodontal disease and treatment plan for implants. In addition, we were very pleased by the training provided by PreXion which has been vital to help us learn how to use our CBCT to the fullest.” – DR. RICHARD NEWHART, PERIODONTIST"
      },
      {
        "kind": "heading",
        "text": "PreXion Care"
      },
      {
        "kind": "heading",
        "text": "Fill out the form below to be contacted about more information."
      },
      {
        "kind": "heading",
        "text": "Prexion Care Contact"
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“After looking at the different CBCT units available in the marketplace, we chose PreXion based on the PreXion specifications, low radiation, and state of the art imaging. We are excited to be able to better diagnose periodontal disease and treatment plan for implants. In addition, we were very pleased by the training provided by PreXion which has been vital to help us learn how to use our CBCT to the fullest.”"
      }
    ],
    "callsToAction": "- Formulário \"Prexion Care Contact\" com campos Name, Email, Phone, ZIP code - Contact Us: 855-PREXION - Client Support: (650) 212-0314 - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [],
    "images": [],
    "migrationAction": "create",
    "notes": "Página de contato/suporte para o \"PreXion Care\". Possui um formulário de contato e um depoimento. O conteúdo principal é bem escasso, focando quase inteiramente no formulário. Pode ser consolidada em uma página geral de suporte ou contato, mas se for um programa específico (\"PreXion Care\"), merece página própria com mais detalhes sobre o que o programa oferece."
  },
  "/prexion-excelsior-endo": {
    "sourceUrl": "https://www.prexion.com/prexion-excelsior-endo/",
    "route": "/prexion-excelsior-endo",
    "canonicalTarget": "/product/excelsior-endo",
    "title": "PreXion Excelsior Endo",
    "type": "product",
    "relevance": "high",
    "summary": "PREXION EXCELSIOR ENDO SCANNER The Evolution of 3D Dental Imaging in a Technology Product O PreXion Excelsior Endo é o tomógrafo de alta resolução carro-chefe da empresa, oferecendo qualidade de imagem de ponta que permite visualizar anatomia e patologia além dos padrões tradicionais de CBCT. Ele possui um detector de painel plano FPD exclusivo, que fornece um ponto focal de 0,2 mm, o menor da indústria. O produto é voltado para dentistas que exigem a maior clareza diagnóstica e detalhes. Why choose the PreXion Excelsior Endo? O sistema combina a imagem 3D mais precisa, grandes detalhes de imagem, menor exposição à radiação, diagnósticos confiáveis e planejamento digital, otimizado especificamente para diagnóst",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "PREXION EXCELSIOR ENDO SCANNER The Evolution of 3D Dental Imaging in a Technology Product REQUEST A DEMO See What Others Can’t with the PreXion Excelsior Endo Our flagship high resolution tomograph delivers cutting-edge image quality that allows you to visualize anatomy and pathology beyond traditional CBCT standards. This comes from its unique flat panel detector (FPD), which provides an industry-smallest, 0.2mm focal spot. Investing in the Excelsior ENDO mean offering patients superior diagnostics and setting a practice apart as a leader in dental imaging. REQUEST A DEMO Update Your Technology in 2026 with the PreXion Excelsior Endo The PreXion Excelsior Endo scanner is the evolution of our original flagship product designed for dentists who demand the highest diagnostic clarity and detail. REQUEST A DEMO Why choose the PreXion Excelsior Endo? The powerful system components of the PreXion Excelsior Endo enable an extraordinary combination of the most precise 3D imaging, large image detail, lowest radiation exposure, reliable diagnostics and digital planning, which is optimized specifically for endodontic diagnostics and treatment with its flat panel detector (FPD) providing an industry-leading 02.mm focal spot. Its patient management system is designed for secure and networked communication of patient data across multiple rooms within a practice and can be integrated into the existing infrastructure with ease. Software Features With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side. 3D Implant Planning Our implant planning module allows users to mark the mandibular canal and position implant fixtures from an extensive library of real-size systems. Based on the simulation, clinicians can determine ideal implant dimensions, depth, and angulation. Compatible workflows also support the ordering of highly accurate surgical guides. Airway Volume Measure The segmentation tool allows users to obtain volumetric data by isolating structures based on density values. It can be used to segment airways, sinuses, the mandible, and teeth, automatically providing corresponding volume measurements. STL Conversion Convert DICOM data into STL files for seamless use in CAD/CAM workflows and 3D printing. This tool enables accurate model generation for planning, simulations, and additive manufacturing. Virtual Endoscopy By combining CPR (Curved Planar Reformat) with virtual view technology, the software enables virtual endoscopy. Users simply define a navigation path, and the system generates an internal airway view for detailed examination. DICOM Fusion The Fusion tool allows users to align and overlay multiple DICOMs for more accurate diagnostics and planning. This unified view enhances anatomical correlation and supports precise clinical decision-making. 3D Reports The reporting tool offers flexible templates that simplify clinical documentation, allowing users to create custom layouts and drag-and-drop images with ease. Reports can be saved locally or in the database in formats such as HTML, PPT, or PDF. REQUEST A DEMO Get Full Specifications with the Product Brochure 16 YEARS OF EXPERIENCE CLEAREST IMAGES CLINICAL ADVISORY BOARD DISTRIBUTING PARTNERS CUSTOMER SUPPORT Field of View 5x5cm 9x6cm 9x9cm 14x9cm 3D Algorithms: Enhancing Your Work-Flow Efficiency and Diagnostic Accuracy REQUEST A DEMO UHD Mode for Endodontics PreXion Excelsior ENDO has outstanding resolution with Isotropic Voxel size as low as 48um. Patient Motion Correction (PMC) The PreXion Excelsior ENDO algorithm automatically corrects the image imperfections caused by patient micro-movements. This ensures high exam quality, avoiding repetitions and offering greater accuracy for making diagnoses. Metal Artifact Reduction (MAR) The PreXion Excelsior ENDO line features three processing levels that can be chosen to correct gutta-percha deformities, implants and/or full arch prosthesis and metal restorations, in addition to automatic metal reduction. This tool also allows image reprocessing, for a better diagnosis, preventing the need to generate new exposure to the patient. Get Full Specifications with the Product Brochure What is the Industry Saying? What is the Industry Saying? “After looking at the different CBCT units available in the marketplace, we chose PreXion based on the PreXion specifications, low radiation, and state of the art imaging. We are excited to be able to better diagnose periodontal disease and treatment plan for implants. In addition, we were very pleased by the training provided by PreXion which has been vital to help us learn how to use our CBCT to the fullest.” – DR. RICHARD NEWHART, PERIODONTIST Request a Free Demo Fill out the form below and a member of our team will contact you shortly to arrange a free demo of the PreXion3D Excelsior."
      },
      {
        "kind": "heading",
        "text": "PREXION EXCELSIOR ENDO SCANNER"
      },
      {
        "kind": "heading",
        "text": "The Evolution of 3D Dental Imaging in a Technology Product"
      },
      {
        "kind": "heading",
        "text": "See What Others Can’t with the PreXion Excelsior Endo"
      },
      {
        "kind": "paragraph",
        "text": "Our flagship high resolution tomograph delivers cutting-edge image quality that allows you to visualize anatomy and pathology beyond traditional CBCT standards. This comes from its unique flat panel detector (FPD), which provides an industry-smallest, 0.2mm focal spot. Investing in the Excelsior ENDO mean offering patients superior diagnostics and setting a practice apart as a leader in dental imaging."
      },
      {
        "kind": "heading",
        "text": "Update Your Technology in 2026 with the PreXion Excelsior Endo"
      },
      {
        "kind": "heading",
        "text": "The PreXion Excelsior Endo scanner is the evolution of our original flagship product designed for dentists who demand the highest diagnostic clarity and detail."
      },
      {
        "kind": "heading",
        "text": "Why choose the PreXion Excelsior Endo?"
      },
      {
        "kind": "paragraph",
        "text": "The powerful system components of the PreXion Excelsior Endo enable an extraordinary combination of the most precise 3D imaging, large image detail, lowest radiation exposure, reliable diagnostics and digital planning, which is optimized specifically for endodontic diagnostics and treatment with its flat panel detector (FPD) providing an industry-leading 02.mm focal spot. Its patient management system is designed for secure and networked communication of patient data across multiple rooms within a practice and can be integrated into the existing infrastructure with ease."
      },
      {
        "kind": "heading",
        "text": "Software Features"
      },
      {
        "kind": "paragraph",
        "text": "With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side."
      },
      {
        "kind": "paragraph",
        "text": "Our implant planning module allows users to mark the mandibular canal and position implant fixtures from an extensive library of real-size systems. Based on the simulation, clinicians can determine ideal implant dimensions, depth, and angulation. Compatible workflows also support the ordering of highly accurate surgical guides."
      },
      {
        "kind": "paragraph",
        "text": "The segmentation tool allows users to obtain volumetric data by isolating structures based on density values. It can be used to segment airways, sinuses, the mandible, and teeth, automatically providing corresponding volume measurements."
      },
      {
        "kind": "paragraph",
        "text": "Convert DICOM data into STL files for seamless use in CAD/CAM workflows and 3D printing. This tool enables accurate model generation for planning, simulations, and additive manufacturing."
      },
      {
        "kind": "paragraph",
        "text": "By combining CPR (Curved Planar Reformat) with virtual view technology, the software enables virtual endoscopy. Users simply define a navigation path, and the system generates an internal airway view for detailed examination."
      },
      {
        "kind": "paragraph",
        "text": "The Fusion tool allows users to align and overlay multiple DICOMs for more accurate diagnostics and planning. This unified view enhances anatomical correlation and supports precise clinical decision-making."
      },
      {
        "kind": "paragraph",
        "text": "The reporting tool offers flexible templates that simplify clinical documentation, allowing users to create custom layouts and drag-and-drop images with ease. Reports can be saved locally or in the database in formats such as HTML, PPT, or PDF."
      },
      {
        "kind": "paragraph",
        "text": "CLEAREST IMAGES"
      },
      {
        "kind": "paragraph",
        "text": "CLINICAL ADVISORY BOARD"
      },
      {
        "kind": "heading",
        "text": "Field of View"
      },
      {
        "kind": "heading",
        "text": "3D Algorithms: Enhancing Your Work-Flow Efficiency and Diagnostic Accuracy"
      },
      {
        "kind": "paragraph",
        "text": "PreXion Excelsior ENDO has outstanding resolution with Isotropic Voxel size as low as 48um."
      },
      {
        "kind": "paragraph",
        "text": "The PreXion Excelsior ENDO algorithm automatically corrects the image imperfections caused by patient micro-movements. This ensures high exam quality, avoiding repetitions and offering greater accuracy for making diagnoses."
      },
      {
        "kind": "paragraph",
        "text": "The PreXion Excelsior ENDO line features three processing levels that can be chosen to correct gutta-percha deformities, implants and/or full arch prosthesis and metal restorations, in addition to automatic metal reduction. This tool also allows image reprocessing, for a better diagnosis, preventing the need to generate new exposure to the patient."
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“After looking at the different CBCT units available in the marketplace, we chose PreXion based on the PreXion specifications, low radiation, and state of the art imaging. We are excited to be able to better diagnose periodontal disease and treatment plan for implants. In addition, we were very pleased by the training provided by PreXion which has been vital to help us learn how to use our CBCT to the fullest.”"
      },
      {
        "kind": "heading",
        "text": "Request a Free Demo"
      }
    ],
    "callsToAction": "- [REQUEST A DEMO](https://www.prexion.com/request-a-demo/) - [Get Full Specifications with the Product Brochure](https://s.assetway.com.br/iKlNr) - Telefone de Contato: [855-PREXION](tel:855PREXION) - Suporte ao Cliente: [(650) 212-0314](tel:6502120314) - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110 - Formulário de contato para demo mencionado, mas não detalhado.",
    "downloads": [
      "https://s.assetway.com.br/iKlNr"
    ],
    "externalLinks": [
      "https://s.assetway.com.br/iKlNr",
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      },
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      },
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      },
      {
        "label": "Get Full Specifications with the Product Brochure",
        "url": "https://s.assetway.com.br/iKlNr"
      },
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      },
      {
        "label": "Get Full Specifications with the Product Brochure",
        "url": "https://s.assetway.com.br/iKlNr"
      }
    ],
    "images": [
      {
        "alt": "prexion excelsior",
        "url": "/manus-storage/c48b34ce4fd1-19873-EXCELSIOR-ENDO-pose-03_f725f485.png"
      },
      {
        "alt": "PreXion 16 years of expierence",
        "url": "/manus-storage/d91ef2eea9c3-987951ae-icon-1_1000000000000000000028_e65e16ea.png"
      },
      {
        "alt": "PreXion clearest images",
        "url": "/manus-storage/8fd6b650cec1-58e85faf-icon-2_1000000000000000000028_071373a9.png"
      },
      {
        "alt": "PreXion clinical advisory board",
        "url": "/manus-storage/86d8784597be-98f2607b-icon-3_1000000000000000000028_b5102b10.png"
      },
      {
        "alt": "PreXion distributing partners",
        "url": "/manus-storage/aed2559e66fb-fbdf7669-icon-4_1000000000000000000028_604e2fb3.png"
      },
      {
        "alt": "PreXion customer support",
        "url": "/manus-storage/bc77b47ee755-63dacb4d-icon-5_1000000000000000000028_f68001fe.png"
      },
      {
        "alt": "5x5cm image",
        "url": "/manus-storage/50e1cc3cd9fc-fov_5x5_1_8a0ff9d3.jpg"
      },
      {
        "alt": "PreXion Excelsior Endo",
        "url": "/manus-storage/8460425f5456-fov_5x5_2_46097e69.jpg"
      },
      {
        "alt": "10x5cm image",
        "url": "/manus-storage/88b37fde391b-fov_9x6_1_4f99951b.jpg"
      },
      {
        "alt": "PreXion Excelsior Endo",
        "url": "/manus-storage/aa93d06adee5-fov_9x6_2_33b84b19.jpg"
      },
      {
        "alt": "10x8cm image",
        "url": "/manus-storage/f0d71fc9fffa-fov_9x9_1_b4a19b0c.jpg"
      },
      {
        "alt": "PreXion Excelsior Endo",
        "url": "/manus-storage/9503537c02c8-fov_9x9_2_332d19b5.jpg"
      }
    ],
    "migrationAction": "create",
    "notes": "A página contém duplicação de links no rodapé (links para redes sociais e links úteis). Trata-se de uma página de produto com alta relevância, apresentando informações cruciais sobre o equipamento PreXion Excelsior Endo, incluindo especificações, recursos de software, campos de visão (FOV) e algoritmos 3D. A migração deve focar em criar uma página dedicada e otimizada no novo site."
  },
  "/prexion-excelsior-max-lfov": {
    "sourceUrl": "https://www.prexion.com/prexion-excelsior-max-lfov/",
    "route": "/prexion-excelsior-max-lfov",
    "canonicalTarget": "/product/excelsior-max",
    "title": "PreXion Excelsior Max (LFOV)",
    "type": "product",
    "relevance": "high",
    "summary": "PREXION EXCELSIOR MAX LFOV SCANNER The Evolution of 3D Dental Imaging in a Technology Product Apresenta o scanner PreXion Excelsior Max como a evolução do produto original da empresa, focado em alta clareza e detalhe diagnóstico para dentistas. Why choose the PreXion Excelsior Max? Destaca os componentes do sistema que oferecem precisão 3D, baixo nível de radiação, diagnósticos confiáveis e planejamento digital para diversas áreas da odontologia periodontia, endodontia, implantodontia, etc. . O sistema de gestão de pacientes permite comunicação em rede e fácil integração à infraestrutura da clínica. Software Features Lista de recursos de software incluídos: - 2D Reports: Anotações customizáveis e planejamento d",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "PREXION EXCELSIOR MAX (LFOV) SCANNER The Evolution of 3D Dental Imaging in a Technology Product REQUEST A DEMO Update Your Technology in 2026 with the PreXion Excelsior Max The PreXion Excelsior Max scanner is the evolution of our original flagship product designed for dentists who demand the highest diagnostic clarity and detail. REQUEST A DEMO Update Your Technology in 2026 with the PreXion Excelsior Max The PreXion Excelsior Max scanner is the evolution of our original flagship product designed for dentists who demand the highest diagnostic clarity and detail. REQUEST A DEMO Why choose the PreXion Excelsior Max? The powerful system components of the PreXion Excelsior Max enable an extraordinary combination of the most precise 3D imaging, large image detail, lowest radiation exposure, reliable diagnostics and digital planning for all indications in modern dentistry, including periodontology, endodontics, implantology, orthodontics, maxillofacial surgery and more. Its patient management system is designed for secure and networked communication of patient data across multiple rooms within a practice and can be integrated into the existing infrastructure with ease. Software Features With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side. 2D Reports Our 2D Reports feature for panoramic and cephalometric images allows customizable annotations with arrows, circles, and color highlights. It also enables precise implant planning directly on the panoramic view, improving clarity and documentation. 2D Manual and AI Assisted Cephalometry Our 2D Cephalometry feature allows clinicians to perform cephalometric tracing either manually or with automated landmark detection powered by AI. This accelerates workflows, improves accuracy, and ensures consistent measurements for orthodontic evaluation and treatment planning. 3D Implant Planning Our implant planning module allows users to mark the mandibular canal and position implant fixtures from an extensive library of real-size systems. Based on the simulation, clinicians can determine ideal implant dimensions, depth, and angulation. Compatible workflows also support the ordering of highly accurate surgical guides. Airway Volume Measure The segmentation tool allows users to obtain volumetric data by isolating structures based on density values. It can be used to segment airways, sinuses, the mandible, and teeth, automatically providing corresponding volume measurements. STL Conversion Convert DICOM data into STL files for seamless use in CAD/CAM workflows and 3D printing. This tool enables accurate model generation for planning, simulations, and additive manufacturing. Virtual Endoscopy By combining CPR (Curved Planar Reformat) with virtual view technology, the software enables virtual endoscopy. Users simply define a navigation path, and the system generates an internal airway view for detailed examination. DICOM Fusion Save time with over 20 pre-made 3D volume rendering templates or customize your own. 3D Reports The reporting tool offers flexible templates that simplify clinical documentation, allowing users to create custom layouts and drag-and-drop images with ease. Reports can be saved locally or in the database in formats such as HTML, PPT, or PDF. REQUEST A DEMO Get Full Specifications with the Product Brochure 16 YEARS OF EXPERIENCE CLEAREST IMAGES CLINICAL ADVISORY BOARD DISTRIBUTING PARTNERS CUSTOMER SUPPORT Field of View 5x5cm 9x6cm 9x9cm 16x9cm 16x15cm 16x21cm REQUEST A DEMO 3D Algorithms: Enhancing Your Work-Flow Efficiency and Diagnostic Accuracy UHD Mode for Endodontics PreXion Excelsior MAX has a resolution with Isotropic Voxel of 75μm to 250μm. Patient Motion Correction (PMC) The PreXion Excelsior MAX algorithm automatically corrects the image imperfections caused by patient micro-movements. This ensures high exam quality, avoiding repetitions and offering greater accuracy for making diagnoses. Metal Artifact Reduction (MAR) The PreXion Excelsior MAX line features three processing levels that can be chosen to correct gutta-percha deformities, implants and/or full arch prosthesis and metal restorations, in addition to automatic metal reduction. This tool also allows image reprocessing, for a better diagnosis, preventing the need to generate new exposure to the patient. Get Full Specifications with the Product Brochure What is the Industry Saying? What is the Industry Saying? “After looking at the different CBCT units available in the marketplace, we chose PreXion based on the PreXion specifications, low radiation, and state of the art imaging. We are excited to be able to better diagnose periodontal disease and treatment plan for implants. In addition, we were very pleased by the training provided by PreXion which has been vital to help us learn how to use our CBCT to the fullest.” – DR. RICHARD NEWHART, PERIODONTIST"
      },
      {
        "kind": "heading",
        "text": "PREXION EXCELSIOR MAX (LFOV) SCANNER"
      },
      {
        "kind": "heading",
        "text": "The Evolution of 3D Dental Imaging in a Technology Product"
      },
      {
        "kind": "heading",
        "text": "Update Your Technology in 2026 with the PreXion Excelsior Max"
      },
      {
        "kind": "heading",
        "text": "The PreXion Excelsior Max scanner is the evolution of our original flagship product designed for dentists who demand the highest diagnostic clarity and detail."
      },
      {
        "kind": "heading",
        "text": "Why choose the PreXion Excelsior Max?"
      },
      {
        "kind": "paragraph",
        "text": "The powerful system components of the PreXion Excelsior Max enable an extraordinary combination of the most precise 3D imaging, large image detail, lowest radiation exposure, reliable diagnostics and digital planning for all indications in modern dentistry, including periodontology, endodontics, implantology, orthodontics, maxillofacial surgery and more. Its patient management system is designed for secure and networked communication of patient data across multiple rooms within a practice and can be integrated into the existing infrastructure with ease."
      },
      {
        "kind": "heading",
        "text": "Software Features"
      },
      {
        "kind": "paragraph",
        "text": "With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side."
      },
      {
        "kind": "paragraph",
        "text": "Our 2D Reports feature for panoramic and cephalometric images allows customizable annotations with arrows, circles, and color highlights. It also enables precise implant planning directly on the panoramic view, improving clarity and documentation."
      },
      {
        "kind": "paragraph",
        "text": "Our 2D Cephalometry feature allows clinicians to perform cephalometric tracing either manually or with automated landmark detection powered by AI. This accelerates workflows, improves accuracy, and ensures consistent measurements for orthodontic evaluation and treatment planning."
      },
      {
        "kind": "paragraph",
        "text": "Our implant planning module allows users to mark the mandibular canal and position implant fixtures from an extensive library of real-size systems. Based on the simulation, clinicians can determine ideal implant dimensions, depth, and angulation. Compatible workflows also support the ordering of highly accurate surgical guides."
      },
      {
        "kind": "paragraph",
        "text": "The segmentation tool allows users to obtain volumetric data by isolating structures based on density values. It can be used to segment airways, sinuses, the mandible, and teeth, automatically providing corresponding volume measurements."
      },
      {
        "kind": "paragraph",
        "text": "Convert DICOM data into STL files for seamless use in CAD/CAM workflows and 3D printing. This tool enables accurate model generation for planning, simulations, and additive manufacturing."
      },
      {
        "kind": "paragraph",
        "text": "By combining CPR (Curved Planar Reformat) with virtual view technology, the software enables virtual endoscopy. Users simply define a navigation path, and the system generates an internal airway view for detailed examination."
      },
      {
        "kind": "paragraph",
        "text": "Save time with over 20 pre-made 3D volume rendering templates or customize your own."
      },
      {
        "kind": "paragraph",
        "text": "The reporting tool offers flexible templates that simplify clinical documentation, allowing users to create custom layouts and drag-and-drop images with ease. Reports can be saved locally or in the database in formats such as HTML, PPT, or PDF."
      },
      {
        "kind": "paragraph",
        "text": "CLEAREST IMAGES"
      },
      {
        "kind": "paragraph",
        "text": "CLINICAL ADVISORY BOARD"
      },
      {
        "kind": "heading",
        "text": "Field of View"
      },
      {
        "kind": "heading",
        "text": "3D Algorithms: Enhancing Your Work-Flow Efficiency and Diagnostic Accuracy"
      },
      {
        "kind": "paragraph",
        "text": "PreXion Excelsior MAX has a resolution with Isotropic Voxel of 75μm to 250μm."
      },
      {
        "kind": "paragraph",
        "text": "The PreXion Excelsior MAX algorithm automatically corrects the image imperfections caused by patient micro-movements. This ensures high exam quality, avoiding repetitions and offering greater accuracy for making diagnoses."
      },
      {
        "kind": "paragraph",
        "text": "The PreXion Excelsior MAX line features three processing levels that can be chosen to correct gutta-percha deformities, implants and/or full arch prosthesis and metal restorations, in addition to automatic metal reduction. This tool also allows image reprocessing, for a better diagnosis, preventing the need to generate new exposure to the patient."
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“After looking at the different CBCT units available in the marketplace, we chose PreXion based on the PreXion specifications, low radiation, and state of the art imaging. We are excited to be able to better diagnose periodontal disease and treatment plan for implants. In addition, we were very pleased by the training provided by PreXion which has been vital to help us learn how to use our CBCT to the fullest.”"
      }
    ],
    "callsToAction": "- REQUEST A DEMO (https://www.prexion.com/request-a-demo/) - Get Full Specifications with the Product Brochure (https://s.assetway.com.br/ztdBk) - Contact Us: 855-PREXION - Client Support: (650) 212-0314 - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [
      "https://s.assetway.com.br/ztdBk"
    ],
    "externalLinks": [
      "https://s.assetway.com.br/ztdBk",
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      },
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      },
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      },
      {
        "label": "Get Full Specifications with the Product Brochure",
        "url": "https://s.assetway.com.br/ztdBk"
      },
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      },
      {
        "label": "Get Full Specifications with the Product Brochure",
        "url": "https://s.assetway.com.br/ztdBk"
      }
    ],
    "images": [
      {
        "alt": "prexion excelsior",
        "url": "/manus-storage/14cbfd702276-Imagem-site-prexion1000-x-1000-px_193b0715.png"
      },
      {
        "alt": "PreXion 16 years of expierence",
        "url": "/manus-storage/d91ef2eea9c3-987951ae-icon-1_1000000000000000000028_e65e16ea.png"
      },
      {
        "alt": "PreXion clearest images",
        "url": "/manus-storage/8fd6b650cec1-58e85faf-icon-2_1000000000000000000028_071373a9.png"
      },
      {
        "alt": "PreXion clinical advisory board",
        "url": "/manus-storage/86d8784597be-98f2607b-icon-3_1000000000000000000028_b5102b10.png"
      },
      {
        "alt": "PreXion distributing partners",
        "url": "/manus-storage/aed2559e66fb-fbdf7669-icon-4_1000000000000000000028_604e2fb3.png"
      },
      {
        "alt": "PreXion customer support",
        "url": "/manus-storage/bc77b47ee755-63dacb4d-icon-5_1000000000000000000028_f68001fe.png"
      },
      {
        "alt": "5x5cm image",
        "url": "/manus-storage/50e1cc3cd9fc-fov_5x5_1_8a0ff9d3.jpg"
      },
      {
        "alt": "PreXion Excelsior Max (LFOV)",
        "url": "/manus-storage/8460425f5456-fov_5x5_2_46097e69.jpg"
      },
      {
        "alt": "10x5cm image",
        "url": "/manus-storage/88b37fde391b-fov_9x6_1_4f99951b.jpg"
      },
      {
        "alt": "PreXion Excelsior Max (LFOV)",
        "url": "/manus-storage/aa93d06adee5-fov_9x6_2_33b84b19.jpg"
      },
      {
        "alt": "10x8cm image",
        "url": "/manus-storage/f0d71fc9fffa-fov_9x9_1_b4a19b0c.jpg"
      },
      {
        "alt": "PreXion Excelsior Max (LFOV)",
        "url": "/manus-storage/9503537c02c8-fov_9x9_2_332d19b5.jpg"
      }
    ],
    "migrationAction": "create",
    "notes": "A página contém informações detalhadas e atualizadas sobre o produto PreXion Excelsior Max (LFOV), incluindo especificações, recursos de software e depoimentos. O conteúdo do rodapé está duplicado na extração. A página deve ser migrada e consolidada como uma página de produto no novo site."
  },
  "/prexion-excelsior-mid": {
    "sourceUrl": "https://www.prexion.com/prexion-excelsior-mid/",
    "route": "/prexion-excelsior-mid",
    "canonicalTarget": "/product/excelsior-mid",
    "title": "PreXion Excelsior Mid (MFOV)",
    "type": "product",
    "relevance": "high",
    "summary": "PREXION EXCELSIOR MID MFOV SCANNER The Evolution of 3D Dental Imaging in a Technology Product O scanner PreXion Excelsior Mid é a evolução do produto original, projetado para dentistas que exigem alta clareza diagnóstica e detalhes. Why choose the PreXion Excelsior Mid? Os componentes do sistema permitem precisão em imagens 3D, baixíssima exposição à radiação e planejamento digital para diversas indicações odontológicas periodontia, endodontia, implantodontia, etc. . O sistema de gerenciamento de pacientes facilita a comunicação em rede. Software Features - 2D Reports: Anotações customizáveis e planejamento de implantes na vista panorâmica. - 2D Manual and AI Assisted Cephalometry: Traçado cefalométrico manual ",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "PREXION EXCELSIOR MID (MFOV) SCANNER The Evolution of 3D Dental Imaging in a Technology Product REQUEST A DEMO Update Your Technology in 2026 with the PreXion Excelsior Mid The PreXion Excelsior Mid scanner is the evolution of our original flagship product designed for dentists who demand the highest diagnostic clarity and detail. REQUEST A DEMO Update Your Technology in 2026 with the PreXion Excelsior Mid The PreXion Excelsior Mid scanner is the evolution of our original flagship product designed for dentists who demand the highest diagnostic clarity and detail. REQUEST A DEMO Why choose the PreXion Excelsior Mid? The powerful system components of the PreXion Excelsior Mid enable an extraordinary combination of the most precise 3D imaging, large image detail, lowest radiation exposure, reliable diagnostics and digital planning for all indications in modern dentistry, including periodontology, endodontics, implantology, orthodontics, maxillofacial surgery and more. Its patient management system is designed for secure and networked communication of patient data across multiple rooms within a practice and can be integrated into the existing infrastructure with ease. Software Features With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side. 2D Reports Our 2D Reports feature for panoramic and cephalometric images allows customizable annotations with arrows, circles, and color highlights. It also enables precise implant planning directly on the panoramic view, improving clarity and documentation. 2D Manual and AI Assisted Cephalometry Our 2D Cephalometry feature allows clinicians to perform cephalometric tracing either manually or with automated landmark detection powered by AI. This accelerates workflows, improves accuracy, and ensures consistent measurements for orthodontic evaluation and treatment planning. 3D Implant Planning Our implant planning module allows users to mark the mandibular canal and position implant fixtures from an extensive library of real-size systems. Based on the simulation, clinicians can determine ideal implant dimensions, depth, and angulation. Compatible workflows also support the ordering of highly accurate surgical guides. Airway Volume Measure The segmentation tool allows users to obtain volumetric data by isolating structures based on density values. It can be used to segment airways, sinuses, the mandible, and teeth, automatically providing corresponding volume measurements. STL Conversion Convert DICOM data into STL files for seamless use in CAD/CAM workflows and 3D printing. This tool enables accurate model generation for planning, simulations, and additive manufacturing. Virtual Endoscopy By combining CPR (Curved Planar Reformat) with virtual view technology, the software enables virtual endoscopy. Users simply define a navigation path, and the system generates an internal airway view for detailed examination. DICOM Fusion The Fusion tool allows users to align and overlay multiple DICOMs for more accurate diagnostics and planning. This unified view enhances anatomical correlation and supports precise clinical decision-making. 3D Reports The reporting tool offers flexible templates that simplify clinical documentation, allowing users to create custom layouts and drag-and-drop images with ease. Reports can be saved locally or in the database in formats such as HTML, PPT, or PDF. REQUEST A DEMO Get Full Specifications with the Product Brochure 16 YEARS OF EXPERIENCE CLEAREST IMAGES CLINICAL ADVISORY BOARD DISTRIBUTING PARTNERS CUSTOMER SUPPORT Field of View 5x5cm 9x6cm 9x9cm 16x9cm REQUEST A DEMO 3D Algorithms: Enhancing Your Work-Flow Efficiency and Diagnostic Accuracy UHD Mode for Endodontics PreXion Excelsior MID has a resolution with Isotropic Voxel of 75μm to 250μm. Patient Motion Correction (PMC) The PreXion Excelsior MID algorithm automatically corrects the image imperfections caused by patient micro-movements. This ensures high exam quality, avoiding repetitions and offering greater accuracy for making diagnoses. Metal Artifact Reduction (MAR) The PreXion Excelsior MID line features three processing levels that can be chosen to correct gutta-percha deformities, implants and/or full arch prosthesis and metal restorations, in addition to automatic metal reduction. This tool also allows image reprocessing, for a better diagnosis, preventing the need to generate new exposure to the patient. Get Full Specifications with the Product Brochure What is the Industry Saying? What is the Industry Saying? “After looking at the different CBCT units available in the marketplace, we chose PreXion based on the PreXion specifications, low radiation, and state of the art imaging. We are excited to be able to better diagnose periodontal disease and treatment plan for implants. In addition, we were very pleased by the training provided by PreXion which has been vital to help us learn how to use our CBCT to the fullest.” – DR. RICHARD NEWHART, PERIODONTIST"
      },
      {
        "kind": "heading",
        "text": "PREXION EXCELSIOR MID (MFOV) SCANNER"
      },
      {
        "kind": "heading",
        "text": "The Evolution of 3D Dental Imaging in a Technology Product"
      },
      {
        "kind": "heading",
        "text": "Update Your Technology in 2026 with the PreXion Excelsior Mid"
      },
      {
        "kind": "heading",
        "text": "The PreXion Excelsior Mid scanner is the evolution of our original flagship product designed for dentists who demand the highest diagnostic clarity and detail."
      },
      {
        "kind": "heading",
        "text": "Why choose the PreXion Excelsior Mid?"
      },
      {
        "kind": "paragraph",
        "text": "The powerful system components of the PreXion Excelsior Mid enable an extraordinary combination of the most precise 3D imaging, large image detail, lowest radiation exposure, reliable diagnostics and digital planning for all indications in modern dentistry, including periodontology, endodontics, implantology, orthodontics, maxillofacial surgery and more. Its patient management system is designed for secure and networked communication of patient data across multiple rooms within a practice and can be integrated into the existing infrastructure with ease."
      },
      {
        "kind": "heading",
        "text": "Software Features"
      },
      {
        "kind": "paragraph",
        "text": "With the precision and professional competence of PreXion, dental professionals have a powerful partner at their side."
      },
      {
        "kind": "paragraph",
        "text": "Our 2D Reports feature for panoramic and cephalometric images allows customizable annotations with arrows, circles, and color highlights. It also enables precise implant planning directly on the panoramic view, improving clarity and documentation."
      },
      {
        "kind": "paragraph",
        "text": "Our 2D Cephalometry feature allows clinicians to perform cephalometric tracing either manually or with automated landmark detection powered by AI. This accelerates workflows, improves accuracy, and ensures consistent measurements for orthodontic evaluation and treatment planning."
      },
      {
        "kind": "paragraph",
        "text": "Our implant planning module allows users to mark the mandibular canal and position implant fixtures from an extensive library of real-size systems. Based on the simulation, clinicians can determine ideal implant dimensions, depth, and angulation. Compatible workflows also support the ordering of highly accurate surgical guides."
      },
      {
        "kind": "paragraph",
        "text": "The segmentation tool allows users to obtain volumetric data by isolating structures based on density values. It can be used to segment airways, sinuses, the mandible, and teeth, automatically providing corresponding volume measurements."
      },
      {
        "kind": "paragraph",
        "text": "Convert DICOM data into STL files for seamless use in CAD/CAM workflows and 3D printing. This tool enables accurate model generation for planning, simulations, and additive manufacturing."
      },
      {
        "kind": "paragraph",
        "text": "By combining CPR (Curved Planar Reformat) with virtual view technology, the software enables virtual endoscopy. Users simply define a navigation path, and the system generates an internal airway view for detailed examination."
      },
      {
        "kind": "paragraph",
        "text": "The Fusion tool allows users to align and overlay multiple DICOMs for more accurate diagnostics and planning. This unified view enhances anatomical correlation and supports precise clinical decision-making."
      },
      {
        "kind": "paragraph",
        "text": "The reporting tool offers flexible templates that simplify clinical documentation, allowing users to create custom layouts and drag-and-drop images with ease. Reports can be saved locally or in the database in formats such as HTML, PPT, or PDF."
      },
      {
        "kind": "paragraph",
        "text": "CLEAREST IMAGES"
      },
      {
        "kind": "paragraph",
        "text": "CLINICAL ADVISORY BOARD"
      },
      {
        "kind": "heading",
        "text": "Field of View"
      },
      {
        "kind": "heading",
        "text": "3D Algorithms: Enhancing Your Work-Flow Efficiency and Diagnostic Accuracy"
      },
      {
        "kind": "paragraph",
        "text": "PreXion Excelsior MID has a resolution with Isotropic Voxel of 75μm to 250μm."
      },
      {
        "kind": "paragraph",
        "text": "The PreXion Excelsior MID algorithm automatically corrects the image imperfections caused by patient micro-movements. This ensures high exam quality, avoiding repetitions and offering greater accuracy for making diagnoses."
      },
      {
        "kind": "paragraph",
        "text": "The PreXion Excelsior MID line features three processing levels that can be chosen to correct gutta-percha deformities, implants and/or full arch prosthesis and metal restorations, in addition to automatic metal reduction. This tool also allows image reprocessing, for a better diagnosis, preventing the need to generate new exposure to the patient."
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“After looking at the different CBCT units available in the marketplace, we chose PreXion based on the PreXion specifications, low radiation, and state of the art imaging. We are excited to be able to better diagnose periodontal disease and treatment plan for implants. In addition, we were very pleased by the training provided by PreXion which has been vital to help us learn how to use our CBCT to the fullest.”"
      }
    ],
    "callsToAction": "- REQUEST A DEMO: https://www.prexion.com/request-a-demo/ - Telefone Contact Us: 855-PREXION - Telefone Client Support: (650) 212-0314 - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [
      "https://s.assetway.com.br/ztdBk"
    ],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      },
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      },
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      },
      {
        "label": "Get Full Specifications with the Product Brochure",
        "url": "https://s.assetway.com.br/ztdBk"
      },
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      },
      {
        "label": "Get Full Specifications with the Product Brochure",
        "url": "https://s.assetway.com.br/ztdBk"
      }
    ],
    "images": [
      {
        "alt": "prexion excelsior",
        "url": "/manus-storage/14cbfd702276-Imagem-site-prexion1000-x-1000-px_193b0715.png"
      },
      {
        "alt": "PreXion 16 years of expierence",
        "url": "/manus-storage/d91ef2eea9c3-987951ae-icon-1_1000000000000000000028_e65e16ea.png"
      },
      {
        "alt": "PreXion clearest images",
        "url": "/manus-storage/8fd6b650cec1-58e85faf-icon-2_1000000000000000000028_071373a9.png"
      },
      {
        "alt": "PreXion clinical advisory board",
        "url": "/manus-storage/86d8784597be-98f2607b-icon-3_1000000000000000000028_b5102b10.png"
      },
      {
        "alt": "PreXion distributing partners",
        "url": "/manus-storage/aed2559e66fb-fbdf7669-icon-4_1000000000000000000028_604e2fb3.png"
      },
      {
        "alt": "PreXion customer support",
        "url": "/manus-storage/bc77b47ee755-63dacb4d-icon-5_1000000000000000000028_f68001fe.png"
      },
      {
        "alt": "PreXion Excelsior Mid (MFOV)",
        "url": "/manus-storage/a44f8110a6e9-fov_5x5_1-300x300_b99624ab.jpg"
      },
      {
        "alt": "5x5cm image",
        "url": "/manus-storage/8460425f5456-fov_5x5_2_46097e69.jpg"
      },
      {
        "alt": "10x5cm image",
        "url": "/manus-storage/88b37fde391b-fov_9x6_1_4f99951b.jpg"
      },
      {
        "alt": "10x5cm image",
        "url": "/manus-storage/aa93d06adee5-fov_9x6_2_33b84b19.jpg"
      },
      {
        "alt": "10x8cm image",
        "url": "/manus-storage/f0d71fc9fffa-fov_9x9_1_b4a19b0c.jpg"
      },
      {
        "alt": "PreXion Excelsior Mid (MFOV)",
        "url": "/manus-storage/9503537c02c8-fov_9x9_2_332d19b5.jpg"
      }
    ],
    "migrationAction": "consolidate",
    "notes": "Página de produto com conteúdo relevante e atualizado. Há duplicação de texto no cabeçalho (\"Update Your Technology in 2026...\") e no rodapé. As informações sobre software e algoritmos são ricas e devem ser preservadas. Recomenda-se consolidar em uma nova rota de produto padronizada."
  },
  "/privacy-policy": {
    "sourceUrl": "https://www.prexion.com/privacy-policy/",
    "route": "/privacy-policy",
    "canonicalTarget": "/privacy-policy",
    "title": "Privacy Policy",
    "type": "legal",
    "relevance": "high",
    "summary": "PREXION PRIVACY POLICY Privacy Policy Informa que a política rege a coleta, uso e divulgação de Informações Pessoais de usuários do site da PreXion. A última atualização foi em 28 de junho de 2024. Compromete-se a não compartilhar dados com terceiros sem consentimento. Information Collection And Use Solicita informações de identificação pessoal, como nome, para contato e identificação. Log Data Coleta dados de log do navegador, como IP, tipo de navegador, páginas visitadas, hora, data e tempo gasto. Utiliza serviços de terceiros, como Google Analytics. Communications Pode usar Informações Pessoais para enviar newsletters, marketing e materiais promocionais. Cookies Usa cookies para coletar informações. O usuári",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "PREXION PRIVACY POLICY Privacy Policy Last updated: June 28, 2024 PreXion https://www.prexion.com/ website. This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Site. We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy. We value your privacy and are committed to protecting your personal data. We do not share your personal information with any third parties without your explicit consent. Information Collection And Use While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include but is not limited to your name (“Personal Information”). Log Data Like many site operators, we collect information that your browser sends whenever you visit our Site (“Log Data”). This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics. In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this data. Communications We may use your Personal Information to contact you with newsletters, marketing or promotional materials. Cookies Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your computer’s hard drive. Like many sites, we use “cookies” to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site. Like many sites, we use “cookies” to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site. Security The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security. Changes To This Privacy Policy This Privacy Policy is effective as of January 24, 2020, and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy. If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us or by placing a prominent notice on our website. Contact Us If you have any questions about this Privacy Policy, please contact us at 855-PREXION."
      },
      {
        "kind": "heading",
        "text": "PREXION PRIVACY POLICY"
      },
      {
        "kind": "heading",
        "text": "Privacy Policy"
      },
      {
        "kind": "paragraph",
        "text": "Last updated: June 28, 2024"
      },
      {
        "kind": "paragraph",
        "text": "PreXion https://www.prexion.com/ website. This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Site. We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy."
      },
      {
        "kind": "paragraph",
        "text": "We value your privacy and are committed to protecting your personal data. We do not share your personal information with any third parties without your explicit consent."
      },
      {
        "kind": "heading",
        "text": "Information Collection And Use"
      },
      {
        "kind": "paragraph",
        "text": "While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include but is not limited to your name (“Personal Information”)."
      },
      {
        "kind": "heading",
        "text": "Log Data"
      },
      {
        "kind": "paragraph",
        "text": "Like many site operators, we collect information that your browser sends whenever you visit our Site (“Log Data”)."
      },
      {
        "kind": "paragraph",
        "text": "This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics."
      },
      {
        "kind": "paragraph",
        "text": "In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this data."
      },
      {
        "kind": "heading",
        "text": "Communications"
      },
      {
        "kind": "paragraph",
        "text": "We may use your Personal Information to contact you with newsletters, marketing or promotional materials."
      },
      {
        "kind": "heading",
        "text": "Cookies"
      },
      {
        "kind": "paragraph",
        "text": "Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your computer’s hard drive."
      },
      {
        "kind": "paragraph",
        "text": "Like many sites, we use “cookies” to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site."
      },
      {
        "kind": "heading",
        "text": "Security"
      },
      {
        "kind": "paragraph",
        "text": "The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security."
      },
      {
        "kind": "heading",
        "text": "Changes To This Privacy Policy"
      },
      {
        "kind": "paragraph",
        "text": "This Privacy Policy is effective as of January 24, 2020, and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page."
      },
      {
        "kind": "paragraph",
        "text": "We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy."
      },
      {
        "kind": "paragraph",
        "text": "If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us or by placing a prominent notice on our website."
      },
      {
        "kind": "heading",
        "text": "Contact Us"
      },
      {
        "kind": "paragraph",
        "text": "If you have any questions about this Privacy Policy, please contact us at 855-PREXION."
      }
    ],
    "callsToAction": "- Contact Us: 855-PREXION - Client Support: (650) 212-0314 - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [],
    "images": [],
    "migrationAction": "preserve-resource",
    "notes": "Página de política de privacidade atualizada em junho de 2024. Há duplicação de parágrafos na seção de Cookies e no rodapé (links e contatos). Conteúdo padrão legal, sem riscos iminentes, essencial manter."
  },
  "/product-specialists": {
    "sourceUrl": "https://www.prexion.com/product-specialists/",
    "route": "/product-specialists",
    "canonicalTarget": "/product-specialists",
    "title": "Find a Product Specialist",
    "type": "sales",
    "relevance": "high",
    "summary": "PRODUCT SPECIALISTS Find a Product Specialist Seção solicitando que o usuário preencha um formulário pedindo o CEP para entrar em contato e obter detalhes sobre produtos e serviços. Experience True Clarity & Precision Seção de chamada para ação incentivando o usuário a agendar uma demonstração do produto, contendo o botão \"REQUEST A DEMO\". Contact Your PreXion Product Specialist Modal/Formulário Formulário detalhado de contato solicitando Nome Completo, Nome da Clínica, Número de Telefone, Email, se o cliente já possui uma unidade CBCT na clínica e um campo de Mensagem.",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "PRODUCT SPECIALISTS Find a Product Specialist Find Your PreXion Product Specialist Fill out the form below to contact us for product and service details. Please enter your zip code* Experience True Clarity & Precision Schedule a demo today. REQUEST A DEMO"
      },
      {
        "kind": "heading",
        "text": "PRODUCT SPECIALISTS"
      },
      {
        "kind": "heading",
        "text": "Find a Product Specialist"
      },
      {
        "kind": "heading",
        "text": "Find Your PreXion Product Specialist"
      },
      {
        "kind": "paragraph",
        "text": "Fill out the form below to contact us for product and service details."
      },
      {
        "kind": "heading",
        "text": "Experience True Clarity & Precision"
      },
      {
        "kind": "heading",
        "text": "Schedule a demo today."
      }
    ],
    "callsToAction": "- Formulário de contato para encontrar especialista de produto (pede CEP) - Botão \"REQUEST A DEMO\" (link para /request-a-demo/) - Telefone de contato: 855-PREXION - Telefone de suporte: (650) 212-0314 - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110 - Modal de contato com formulário (Nome, Clínica, Telefone, Email, Possui CBCT, Mensagem)",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      }
    ],
    "images": [
      {
        "alt": "prexion support from an expert",
        "url": "/manus-storage/e27a98d16df4-PRE-ProductSpecialist-IMG_127219ef.jpg"
      }
    ],
    "migrationAction": "consolidate",
    "notes": "Página de geração de leads voltada para vendas. Contém um formulário principal pedindo CEP para localizar o especialista e um formulário modal/popup de contato direto. Há duplicação do rodapé na extração, indicando possível problema de layout ou renderização mobile/desktop conjunta. Recomenda-se consolidar em uma página central de contato ou manter como uma landing page de vendas direcionada no novo site."
  },
  "/remote-support": {
    "sourceUrl": "https://www.prexion.com/remote-support/",
    "route": "/remote-support",
    "canonicalTarget": "/support/remote",
    "title": "Remote Support",
    "type": "support",
    "relevance": "high",
    "summary": "REMOTE SUPPORT Need support with your PreXion products? Instruções para baixar o TeamViewer e ligar para o Client Support no número 650 212–0314. O texto enfatiza a missão da PreXion de fornecer excelente serviço ao cliente e pede para instalar o TeamViewer antes de ligar. Após a instalação, a equipe guiará o processo de conexão remota. Find More Opportunities for Education Seção que direciona para oportunidades de educação e suporte com link para \"LEARN MORE\". Stay on the Cutting Edge of Dentistry. Convite para assinatura Subscribe today . Rodapé Footer Contatos 855-PREXION, 650 212-0314 , endereço em San Jose, CA, links para redes sociais e links de navegação para outras áreas do site.",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "REMOTE SUPPORT Need support with your PreXion products? Download TeamViewer and next call Client Support (650) 212–0314 to connect with a PreXion service representative. Part of PreXion’s mission is to always demonstrate passion when answering support calls and providing excellent customer service. Our vision is to build trust across the industry by providing each customer with exceptional service and accurately responding to every request. If you are experiencing any problems or need Assistance, please be sure to click the link below, download and install the **TeamViewer** option for free on your computer before contacting us. After installing the software, please call **(650) 212-0314** for remote support. Our team will guide you through the connection process and provide the necessary assistance. DOWNLOAD FOR FREE Find More Opportunities for Education LEARN MORE Find More Opportunities for Education LEARN MORE Stay on the Cutting Edge of Dentistry. Subscribe today."
      },
      {
        "kind": "heading",
        "text": "REMOTE SUPPORT"
      },
      {
        "kind": "heading",
        "text": "Need support with your PreXion products?"
      },
      {
        "kind": "heading",
        "text": "Download TeamViewer and next call Client Support (650) 212–0314 to connect with a PreXion service representative."
      },
      {
        "kind": "paragraph",
        "text": "Part of PreXion’s mission is to always demonstrate passion when answering support calls and providing excellent customer service. Our vision is to build trust across the industry by providing each customer with exceptional service and accurately responding to every request."
      },
      {
        "kind": "paragraph",
        "text": "If you are experiencing any problems or need Assistance, please be sure to click the link below, download and install the **TeamViewer** option for free on your computer before contacting us."
      },
      {
        "kind": "paragraph",
        "text": "After installing the software, please call **(650) 212-0314** for remote support. Our team will guide you through the connection process and provide the necessary assistance."
      },
      {
        "kind": "heading",
        "text": "Find More Opportunities for Education"
      },
      {
        "kind": "heading",
        "text": "Stay on the Cutting Edge of Dentistry."
      },
      {
        "kind": "heading",
        "text": "Subscribe today."
      }
    ],
    "callsToAction": "- Call Client Support: (650) 212–0314 - Download TeamViewer: [DOWNLOAD FOR FREE](https://www.teamviewer.com/en/download/windows/) - Education opportunities: [LEARN MORE](https://www.prexion.com/education-and-support/) - Contact Us: 855-PREXION - Subscribe to newsletter (Stay on the Cutting Edge of Dentistry) - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.teamviewer.com/en/download/windows/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "(650) 212–0314",
        "url": "tel:6502120314"
      },
      {
        "label": "DOWNLOAD FOR FREE",
        "url": "https://www.teamviewer.com/en/download/windows/"
      },
      {
        "label": "LEARN MORE",
        "url": "https://www.prexion.com/education-and-support/"
      },
      {
        "label": "LEARN MORE",
        "url": "https://www.prexion.com/education-and-support/"
      }
    ],
    "images": [
      {
        "alt": "remote support PreXion",
        "url": "/manus-storage/161aed3dfa72-PRE-Support_ce1e3978.jpg"
      }
    ],
    "migrationAction": "create",
    "notes": "Página de suporte remoto simples e direta, instruindo o usuário a baixar o TeamViewer e ligar para o suporte. O conteúdo do rodapé está duplicado no markdown extraído, o que é comum. A página é muito relevante e deve ser mantida."
  },
  "/request-a-demo": {
    "sourceUrl": "https://www.prexion.com/request-a-demo/",
    "route": "/request-a-demo",
    "canonicalTarget": "/contact",
    "title": "Request a Demo",
    "type": "landing-page",
    "relevance": "high",
    "summary": "Request a demo consultation here Fill out the form bellow to be contected with a free 3D CBCT machine demo! PreXion Contact Formulário de contato - campos não listados no texto, mas há um botão de submit: \"Fill out all the fields below so we can contact you.\" What is the Industry Saying? Depoimento do Dr. Richard Newhart, Periodontista: \"After looking at the different CBCT units available in the marketplace, we chose PreXion based on the PreXion specifications, low radiation, and state of the art imaging. We are excited to be able to better diagnose periodontal disease and treatment plan for implants. In addition, we were very pleased by the training provided by PreXion which has been vital to help us learn how",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Request a demo consultation here Fill out the form bellow to be contected with a free 3D CBCT machine demo! PreXion Contact What is the Industry Saying? What is the Industry Saying? “After looking at the different CBCT units available in the marketplace, we chose PreXion based on the PreXion specifications, low radiation, and state of the art imaging. We are excited to be able to better diagnose periodontal disease and treatment plan for implants. In addition, we were very pleased by the training provided by PreXion which has been vital to help us learn how to use our CBCT to the fullest.” – DR. RICHARD NEWHART, PERIODONTIST"
      },
      {
        "kind": "heading",
        "text": "Request a demo consultation here"
      },
      {
        "kind": "heading",
        "text": "Fill out the form bellow to be contected with a free 3D CBCT machine demo!"
      },
      {
        "kind": "heading",
        "text": "PreXion Contact"
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“After looking at the different CBCT units available in the marketplace, we chose PreXion based on the PreXion specifications, low radiation, and state of the art imaging. We are excited to be able to better diagnose periodontal disease and treatment plan for implants. In addition, we were very pleased by the training provided by PreXion which has been vital to help us learn how to use our CBCT to the fullest.”"
      }
    ],
    "callsToAction": "- Botão de submit do formulário: \"Fill out all the fields below so we can contact you.\" - Telefone Contact Us: 855-PREXION - Telefone Client Support: (650) 212-0314 - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [],
    "images": [],
    "migrationAction": "create",
    "notes": "Página principal de conversão para solicitar demonstração. O formulário não carregou completamente no texto extraído, mas há um botão de envio (\"Fill out all the fields below so we can contact you.\"). Contém um depoimento de cliente. Recomenda-se recriar a página no novo site mantendo o foco em conversão com um formulário funcional e os depoimentos. Há erros de digitação no texto original (\"bellow\", \"contected\") que devem ser corrigidos na nova versão."
  },
  "/roi-calculator": {
    "sourceUrl": "https://www.prexion.com/roi-calculator/",
    "route": "/roi-calculator",
    "canonicalTarget": "/roi-calculator",
    "title": "ROI Calculator",
    "type": "landing-page",
    "relevance": "high",
    "summary": "CBCT COST & ROI CALCULATOR Are you interested in a PreXion product? Use our ROI calculator tool below to compare the net income from a PreXion investment to the net expenses required to finance a product. A ferramenta inclui seções para: - Dental Procedures : 3rd molar extraction, Regular extraction / root resorbtion, Endo, Apico, Bone Graft, Implant, 3D scan referred out, 2D pan new revenue , 2D ceph new revenue . - Sleep and Medical Billing : Sleep 3D scan & consult, Ceph Images, Pan Images, Sleep Appliance. - Equipment Cost : Calcula pagamentos mensais para 48, 60 e 84 meses a 7.00% de juros. - Yearly Revenue Generated : Mostra receita após pagamento mensal aplicado. Why Prexion? - Top-Quality 3D Imaging : P",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "CBCT COST & ROI CALCULATOR Are you interested in a PreXion product? Use our ROI calculator tool below to compare the net income from a PreXion investment to the net expenses required to finance a product. Why Prexion?"
      },
      {
        "kind": "heading",
        "text": "CBCT COST & ROI CALCULATOR"
      },
      {
        "kind": "heading",
        "text": "Are you interested in a PreXion product?"
      },
      {
        "kind": "heading",
        "text": "Use our ROI calculator tool below to compare the net income from a PreXion investment to the net expenses required to finance a product."
      },
      {
        "kind": "heading",
        "text": "Why Prexion?"
      },
      {
        "kind": "paragraph",
        "text": "Diagnostically, 3D imaging is a must-have in the clinical settings of today’s world. PreXion offers the clearest, most precise image in the industry at an incredible price point. The clarity of the image is unparalleled by competing solutions and the precision is unrivaled. Only PreXion offers high imaging with low radiation levels."
      },
      {
        "kind": "paragraph",
        "text": "PreXion has cultivated a tight-knit circle of key opinion leaders made up of specialty physicians that precisely understand the PreXion technology and resulting clinical outcomes ﬁrsthand. These doctors offer PreXion customers exclusive hands-on courses nationwide. Educational videos are also available online, making it easy for PreXion customers and their teams to continuously access the information they need."
      },
      {
        "kind": "paragraph",
        "text": "PreXion is deeply committed to listening to the customer’s voice. The PreXion mission is to always be passionate about answering support calls and delivering excellent customer care. It is PreXion’s vision to build trust across the industry by providing each customer the ideal treatment, precisely tending to each and every inquiry."
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“After looking at the different CBCT units available in the marketplace, we chose PreXion based on the PreXion specifications, low radiation, and state of the art imaging. We are excited to be able to better diagnose periodontal disease and treatment plan for implants. In addition, we were very pleased by the training provided by PreXion which has been vital to help us learn how to use our CBCT to the fullest.”"
      },
      {
        "kind": "heading",
        "text": "Experience True Clarity & Precision"
      },
      {
        "kind": "heading",
        "text": "Schedule a demo today."
      }
    ],
    "callsToAction": "- REQUEST A DEMO (https://www.prexion.com/request-a-demo/) - LEARN MORE ABOUT US (https://www.prexion.com/why-prexion/) - Formulário de calculadora de ROI (Tabelas interativas para Dental Procedures, Sleep and Medical Billing, Equipment Cost) - Telefone Contact Us: 855-PREXION (tel:855PREXION) - Telefone Client Support: (650) 212-0314 (tel:6502120314) - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "CBCT COST & ROI CALCULATOR",
        "url": "https://www.prexion.com/roi-calculator/"
      },
      {
        "label": "Why Prexion?",
        "url": "https://www.prexion.com/why-prexion/"
      },
      {
        "label": "LEARN MORE ABOUT US",
        "url": "https://www.prexion.com/why-prexion/"
      },
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      }
    ],
    "images": [
      {
        "alt": "quality 3d imaging",
        "url": "/manus-storage/ffbc42a5be65-Top-Quality-Imaging_14f01d0a.png"
      },
      {
        "alt": "commitment to education Prexion",
        "url": "/manus-storage/292679a61c1c-Commitment-To-Education_fd153722.png"
      },
      {
        "alt": "remote support from prexion",
        "url": "/manus-storage/161aed3dfa72-PRE-Support_ce1e3978.jpg"
      }
    ],
    "migrationAction": "create",
    "notes": "A página contém uma calculadora de ROI interativa que precisa ser recriada ou portada para o novo site. O conteúdo inclui argumentos de vendas sobre a qualidade da imagem, educação e suporte, além de um depoimento. A funcionalidade principal é a calculadora que permite simular receitas e custos de equipamentos em 48, 60 e 84 meses. Não há riscos óbvios de obsolescência, pois é uma ferramenta de vendas perene."
  },
  "/sales-info": {
    "sourceUrl": "https://www.prexion.com/sales-info/",
    "route": "/sales-info",
    "canonicalTarget": "/contact",
    "title": "Sales Info",
    "type": "sales",
    "relevance": "high",
    "summary": "SALES INFO How can we help boost your practice with PreXion? Information about finding a product specialist. PreXion product specialists work exclusively for the company and are fully equipped to provide necessary information. Includes a CTA to find a product specialist. Distributor Locations PreXion has an extensive and growing network of distributors across the U.S., making it beneficial for potential customers. Users are advised to contact their PreXion Product Specialist to find a distributor. Includes a CTA to find a distributor. What is the Industry Saying? A testimonial from Dr. Michael Morgan stating that his periodontal practice and patient care have elevated to higher levels with the integration of th",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "SALES INFO How can we help boost your practice with PreXion? Find a Product Specialist If you are interested in learning more about or purchasing a PreXion product, it is our goal to make the process as simple and straightforward as possible. Our product specialists work exclusively for us, which means they are fully equipped to provide any information you may need. FIND A PRODUCT SPECIALIST Distributor Locations PreXion has developed an extensive network of distributors across the U.S. which continues to grow as new partnerships are formed. The breadth of this network is beneficial to potential customers, as it means they are likely not far from a PreXion distributor. Contact your PreXion Product Specialist to find a distributor. FIND A DISTRIBUTOR What is the Industry Saying? What is the Industry Saying? “My periodontal practice and patient care has elevated to higher levels with the integration of the PreXion CBCT. Anyone who thinks they can practice effectively and efficiently truly needs to discover what is possible. I would not want to practice without it!” – DR. MICHAEL MORGAN Experience True Clarity & Precision Schedule a demo today. REQUEST A DEMO"
      },
      {
        "kind": "heading",
        "text": "SALES INFO"
      },
      {
        "kind": "heading",
        "text": "How can we help boost your practice with PreXion?"
      },
      {
        "kind": "heading",
        "text": "Find a Product Specialist"
      },
      {
        "kind": "paragraph",
        "text": "If you are interested in learning more about or purchasing a PreXion product, it is our goal to make the process as simple and straightforward as possible. Our product specialists work exclusively for us, which means they are fully equipped to provide any information you may need."
      },
      {
        "kind": "heading",
        "text": "Distributor Locations"
      },
      {
        "kind": "paragraph",
        "text": "PreXion has developed an extensive network of distributors across the U.S. which continues to grow as new partnerships are formed. The breadth of this network is beneficial to potential customers, as it means they are likely not far from a PreXion distributor. Contact your PreXion Product Specialist to find a distributor."
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“My periodontal practice and patient care has elevated to higher levels with the integration of the PreXion CBCT. Anyone who thinks they can practice effectively and efficiently truly needs to discover what is possible. I would not want to practice without it!”"
      },
      {
        "kind": "heading",
        "text": "Experience True Clarity & Precision"
      },
      {
        "kind": "heading",
        "text": "Schedule a demo today."
      }
    ],
    "callsToAction": "- [FIND A PRODUCT SPECIALIST](https://www.prexion.com/product-specialists/) - [FIND A DISTRIBUTOR](https://www.prexion.com/distributor-locations/) - [REQUEST A DEMO](https://www.prexion.com/request-a-demo/) - Telefone: 855-PREXION - Telefone de Suporte: (650) 212-0314 - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "FIND A PRODUCT SPECIALIST",
        "url": "https://www.prexion.com/product-specialists/"
      },
      {
        "label": "FIND A DISTRIBUTOR",
        "url": "https://www.prexion.com/distributor-locations/"
      },
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      }
    ],
    "images": [
      {
        "alt": "prexion support team",
        "url": "/manus-storage/e27a98d16df4-PRE-ProductSpecialist-IMG_127219ef.jpg"
      },
      {
        "alt": "national prexion sales info",
        "url": "/manus-storage/8efcdca5575b-Screen-Shot-2019-02-18-at-11.22.23-AM_7d388dfc.png"
      }
    ],
    "migrationAction": "consolidate",
    "notes": "Página de vendas focada em direcionar usuários para especialistas de produto, distribuidores e solicitação de demonstração. O rodapé está duplicado no conteúdo extraído. O conteúdo é relevante para o funil de vendas e deve ser mantido ou consolidado."
  },
  "/sample-page": {
    "sourceUrl": "https://www.prexion.com/sample-page/",
    "route": "/sample-page",
    "canonicalTarget": "/sample-page",
    "title": "Sample Page",
    "type": "technical",
    "relevance": "obsolete",
    "summary": "Sample Page Página de exemplo padrão gerada pelo WordPress, explicando a diferença entre páginas e posts e sugerindo a exclusão desta página.",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "This is an example page. It’s different from a blog post because it will stay in one place and will show up in your site navigation (in most themes). Most people start with an About page that introduces them to potential site visitors. It might say something like this:"
      },
      {
        "kind": "quote",
        "text": "Hi there! I’m a bike messenger by day, aspiring actor by night, and this is my website. I live in Los Angeles, have a great dog named Jack, and I like piña coladas. (And gettin’ caught in the rain.)"
      },
      {
        "kind": "paragraph",
        "text": "…or something like this:"
      },
      {
        "kind": "quote",
        "text": "The XYZ Doohickey Company was founded in 1971, and has been providing quality doohickeys to the public ever since. Located in Gotham City, XYZ employs over 2,000 people and does all kinds of awesome things for the Gotham community."
      },
      {
        "kind": "paragraph",
        "text": "As a new WordPress user, you should go to your dashboard to delete this page and create new pages for your content. Have fun!"
      }
    ],
    "callsToAction": "- Ligar para 855-PREXION - Ligar para Suporte: (650) 212-0314 - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "your dashboard",
        "url": "https://www.prexion.com/wp-admin/"
      }
    ],
    "images": [],
    "migrationAction": "exclude-technical",
    "notes": "Página de exemplo padrão do WordPress, sem conteúdo relevante para a empresa. Deve ser excluída. O rodapé está duplicado no conteúdo extraído."
  },
  "/saudi-international-dental-conference": {
    "sourceUrl": "https://www.prexion.com/saudi-international-dental-conference/",
    "route": "/saudi-international-dental-conference",
    "canonicalTarget": "/saudi-international-dental-conference",
    "title": "Saudi International Dental Conference (SIDC)",
    "type": "article",
    "relevance": "medium",
    "summary": "Saudi International Dental Conference SIDC Data: June 4, 2024 A Alliage participou da Saudi International Dental Conference SIDC em Riyadh, consolidando um marco importante em seu crescimento na Arábia Saudita e na região. O evento reuniu um público altamente qualificado de profissionais de saúde incluindo profissionais da odontologia e tomadores de decisão estratégicos e proporcionou um ambiente relevante para ativação de parceiros, fortalecimento da marca e desenvolvimento comercial focado em soluções avançadas de imagem odontológica, além da expansão de parcerias de distribuição no mercado saudita. Durante o evento, a empresa apresentou e reforçou seu portfólio de soluções de imagem. Entre os principais resu",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "From left to right |: Dr. Khaled Ekram (Partner KOL); Rafael Ferrassini (General Manager Alliage International); Dr. Hossam Abouelenein (Territory Manager)."
      },
      {
        "kind": "heading",
        "text": "Saudi International Dental Conference (SIDC)"
      },
      {
        "kind": "paragraph",
        "text": "Alliage participated in the Saudi International Dental Conference (SIDC) in Riyadh, consolidating an important milestone in our growth in Saudi Arabia and across the region. The event gathered a highly qualified healthcare audience (including dental professionals and strategic decision-makers) and provided a relevant environment for partner activation, brand strengthening, and commercial development focused on advanced dental imaging solutions, as well as the expansion of distribution partnerships in the Saudi market."
      },
      {
        "kind": "paragraph",
        "text": "During the event, we presented and reinforced our imaging solutions portfolio. Among the key outcomes were the official launch of Al-Razi Medical Group as a partner (featuring the Eagle Edge) and the signing of a distribution agreement with Kafou Dent for PreXion in Saudi Arabia, further expanding our presence and market reach in the country."
      }
    ],
    "callsToAction": "- Formulário de Inscrição: \"Subscribe today\" - Contato telefônico: 855-PREXION - Suporte ao cliente: (650) 212-0314 - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.prexion.com%2Fsaudi-international-dental-conference%2F",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.prexion.com%2Fsaudi-international-dental-conference%2F",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [],
    "images": [],
    "migrationAction": "consolidate",
    "notes": "Trata-se de uma postagem de blog relatando a participação em um evento em junho de 2024. A relevância é média, pois demonstra a presença global e parcerias estratégicas. Pode ser migrada para uma seção geral de notícias/blog."
  },
  "/subscription-success": {
    "sourceUrl": "https://www.prexion.com/subscription-success/",
    "route": "/subscription-success",
    "canonicalTarget": "/subscription-success",
    "title": "Subscription Success",
    "type": "thank-you",
    "relevance": "low",
    "summary": "Subscription Success Página de confirmação exibida após a inscrição do usuário para receber conteúdo da PreXion. Thank You Mensagem principal agradecendo ao usuário: \"You have successfully subscribed to receive content from PreXion Inc.\" Check out more from PreXion Seção sugerindo leitura adicional com links para eventos recentes: - The Art and Science of Dentistry 2026 – Anaheim – CA - AAE Annual Meteting 2026 – Salt Lake City – UT - Chicago Mindwinter",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "PREXION Thank You You have successfully subscribed to receive content from PreXion Inc. Check out more from PreXion: 3vdab 2026-05-21T20:29:18+00:00 The Art and Science of Dentistry 2026 – Anaheim – CA 3vdab 2026-05-21T20:29:18+00:00 May 21, 2026 | 0 Comments PreXion was present at one of the world’s largest dental events! We participated in the California Dental Association – The Art and Science of Dentistry event, held in Anaheim, California (USA), bringing together professionals from across [...] 3vdab 2026-04-23T20:00:42+00:00 AAE Annual Meteting 2026 – Salt Lake City – UT 3vdab 2026-04-23T20:00:42+00:00 April 23, 2026 | 0 Comments The American Association of Endodontists annually hosts one of the most important global meetings in specialized dentistry: the AAE Annual Meeting 2026. Held on April 16th and 17th, 2026, in Salt Lake City, the [...] 3vdab 2026-03-17T14:47:56+00:00 Chicago Mindwinter 3vdab 2026-03-17T14:47:56+00:00 March 17, 2026 | 0 Comments In February, we participated in an important international event in the healthcare sector, reinforcing our global presence and our commitment to expansion in strategic markets. This meeting was held at the Chicago Dental Society [...]"
      },
      {
        "kind": "heading",
        "text": "Thank You"
      },
      {
        "kind": "heading",
        "text": "You have successfully subscribed to receive content from PreXion Inc."
      },
      {
        "kind": "heading",
        "text": "Check out more from PreXion:"
      },
      {
        "kind": "heading",
        "text": "The Art and Science of Dentistry 2026 – Anaheim – CA"
      },
      {
        "kind": "paragraph",
        "text": "3vdab 2026-05-21T20:29:18+00:00 May 21, 2026 | 0 Comments"
      },
      {
        "kind": "paragraph",
        "text": "PreXion was present at one of the world’s largest dental events! We participated in the California Dental Association – The Art and Science of Dentistry event, held in Anaheim, California (USA), bringing together professionals from across [...]"
      },
      {
        "kind": "heading",
        "text": "AAE Annual Meteting 2026 – Salt Lake City – UT"
      },
      {
        "kind": "paragraph",
        "text": "3vdab 2026-04-23T20:00:42+00:00 April 23, 2026 | 0 Comments"
      },
      {
        "kind": "paragraph",
        "text": "The American Association of Endodontists annually hosts one of the most important global meetings in specialized dentistry: the AAE Annual Meeting 2026. Held on April 16th and 17th, 2026, in Salt Lake City, the [...]"
      },
      {
        "kind": "heading",
        "text": "Chicago Mindwinter"
      },
      {
        "kind": "paragraph",
        "text": "3vdab 2026-03-17T14:47:56+00:00 March 17, 2026 | 0 Comments"
      },
      {
        "kind": "paragraph",
        "text": "In February, we participated in an important international event in the healthcare sector, reinforcing our global presence and our commitment to expansion in strategic markets. This meeting was held at the Chicago Dental Society [...]"
      }
    ],
    "callsToAction": "- [855-PREXION](tel:855PREXION) - [(650) 212-0314](tel:6502120314) - 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/",
        "url": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "The Art and Science of Dentistry 2026 – Anaheim – CA",
        "url": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "0 Comments",
        "url": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/#respond"
      },
      {
        "label": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/",
        "url": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "AAE Annual Meteting 2026 – Salt Lake City – UT",
        "url": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "0 Comments",
        "url": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/#respond"
      },
      {
        "label": "https://www.prexion.com/chicago-mindwinter-dental/",
        "url": "https://www.prexion.com/chicago-mindwinter-dental/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "Chicago Mindwinter",
        "url": "https://www.prexion.com/chicago-mindwinter-dental/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "0 Comments",
        "url": "https://www.prexion.com/chicago-mindwinter-dental/#respond"
      }
    ],
    "images": [
      {
        "alt": "Subscription Success",
        "url": "/manus-storage/2733ad1c2f86-14-16-May-Arts-and-Science-California-e1779395147102-700x441_40cb21fd.jpeg"
      },
      {
        "alt": "Subscription Success",
        "url": "/manus-storage/070f1aaad6a6-FOTO_AEE_ABRIL_26-11-700x441_50e35035.jpg"
      },
      {
        "alt": "Subscription Success",
        "url": "/manus-storage/2a52a53739a2-chicago-22-700x441_69cdc724.jpg"
      }
    ],
    "migrationAction": "consolidate",
    "notes": "Página de confirmação de inscrição na newsletter. O conteúdo é apenas uma mensagem de agradecimento e links para os últimos posts do blog. Deve ser consolidada como uma mensagem de sucesso na própria página de inscrição ou mantida como uma rota técnica simples no novo site. O footer aparece duplicado na extração, provavelmente devido a versões desktop/mobile."
  },
  "/success-be-more-profitable-more-quickly": {
    "sourceUrl": "https://www.prexion.com/success-be-more-profitable-more-quickly/",
    "route": "/success-be-more-profitable-more-quickly",
    "canonicalTarget": "/success-be-more-profitable-more-quickly",
    "title": "Success – Be More Profitable More Quickly",
    "type": "thank-you",
    "relevance": "medium",
    "summary": "Thank You Agradecimento ao usuário e convite para baixar o estudo \"Study Shows Emerging Cone-Beam Computed Tomography CBCT and Imaging Systems Allow Dentistry and Specialty Practices to Be More Profitable More Quickly Compared to Standard 2D Imaging Technology.\" Check out more from PreXion: Lista de artigos e eventos recentes, como \"The Art and Science of Dentistry 2026\", \"AAE Annual Meteting 2026\", e \"Chicago Mindwinter\". Footer Informações de contato telefone, suporte, endereço , links para redes sociais e links de navegação para produtos e políticas.",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "PREXION Thank You Please click the button below to download your copy of “Study Shows Emerging Cone-Beam Computed Tomography (CBCT) and Imaging Systems Allow Dentistry and Specialty Practices to Be More Profitable More Quickly Compared to Standard 2D Imaging Technology.” DOWNLOAD NOW Check out more from PreXion: 3vdab 2026-05-21T20:29:18+00:00 The Art and Science of Dentistry 2026 – Anaheim – CA 3vdab 2026-05-21T20:29:18+00:00 May 21, 2026 | 0 Comments PreXion was present at one of the world’s largest dental events! We participated in the California Dental Association – The Art and Science of Dentistry event, held in Anaheim, California (USA), bringing together professionals from across [...] 3vdab 2026-04-23T20:00:42+00:00 AAE Annual Meteting 2026 – Salt Lake City – UT 3vdab 2026-04-23T20:00:42+00:00 April 23, 2026 | 0 Comments The American Association of Endodontists annually hosts one of the most important global meetings in specialized dentistry: the AAE Annual Meeting 2026. Held on April 16th and 17th, 2026, in Salt Lake City, the [...] 3vdab 2026-03-17T14:47:56+00:00 Chicago Mindwinter 3vdab 2026-03-17T14:47:56+00:00 March 17, 2026 | 0 Comments In February, we participated in an important international event in the healthcare sector, reinforcing our global presence and our commitment to expansion in strategic markets. This meeting was held at the Chicago Dental Society [...]"
      },
      {
        "kind": "heading",
        "text": "Thank You"
      },
      {
        "kind": "heading",
        "text": "Please click the button below to download your copy of “Study Shows Emerging Cone-Beam Computed Tomography (CBCT) and Imaging Systems Allow Dentistry and Specialty Practices to Be More Profitable More Quickly Compared to Standard 2D Imaging Technology.”"
      },
      {
        "kind": "heading",
        "text": "Check out more from PreXion:"
      },
      {
        "kind": "heading",
        "text": "The Art and Science of Dentistry 2026 – Anaheim – CA"
      },
      {
        "kind": "paragraph",
        "text": "3vdab 2026-05-21T20:29:18+00:00 May 21, 2026 | 0 Comments"
      },
      {
        "kind": "paragraph",
        "text": "PreXion was present at one of the world’s largest dental events! We participated in the California Dental Association – The Art and Science of Dentistry event, held in Anaheim, California (USA), bringing together professionals from across [...]"
      },
      {
        "kind": "heading",
        "text": "AAE Annual Meteting 2026 – Salt Lake City – UT"
      },
      {
        "kind": "paragraph",
        "text": "3vdab 2026-04-23T20:00:42+00:00 April 23, 2026 | 0 Comments"
      },
      {
        "kind": "paragraph",
        "text": "The American Association of Endodontists annually hosts one of the most important global meetings in specialized dentistry: the AAE Annual Meeting 2026. Held on April 16th and 17th, 2026, in Salt Lake City, the [...]"
      },
      {
        "kind": "heading",
        "text": "Chicago Mindwinter"
      },
      {
        "kind": "paragraph",
        "text": "3vdab 2026-03-17T14:47:56+00:00 March 17, 2026 | 0 Comments"
      },
      {
        "kind": "paragraph",
        "text": "In February, we participated in an important international event in the healthcare sector, reinforcing our global presence and our commitment to expansion in strategic markets. This meeting was held at the Chicago Dental Society [...]"
      }
    ],
    "callsToAction": "- [DOWNLOAD NOW](https://www.prexion.com/wp-content/uploads/2024/03/PreXion-BeMoreProfitableMoreQuickly.pdf) - Contact Us: 855-PREXION - Client Support: (650) 212-0314 - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [
      "https://www.prexion.com/wp-content/uploads/2024/03/PreXion-BeMoreProfitableMoreQuickly.pdf"
    ],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "DOWNLOAD NOW",
        "url": "https://www.prexion.com/wp-content/uploads/2024/03/PreXion-BeMoreProfitableMoreQuickly.pdf"
      },
      {
        "label": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/",
        "url": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "The Art and Science of Dentistry 2026 – Anaheim – CA",
        "url": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "0 Comments",
        "url": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/#respond"
      },
      {
        "label": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/",
        "url": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "AAE Annual Meteting 2026 – Salt Lake City – UT",
        "url": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "0 Comments",
        "url": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/#respond"
      },
      {
        "label": "https://www.prexion.com/chicago-mindwinter-dental/",
        "url": "https://www.prexion.com/chicago-mindwinter-dental/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "Chicago Mindwinter",
        "url": "https://www.prexion.com/chicago-mindwinter-dental/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "0 Comments",
        "url": "https://www.prexion.com/chicago-mindwinter-dental/#respond"
      }
    ],
    "images": [
      {
        "alt": "Success – Be More Profitable More Quickly",
        "url": "/manus-storage/2733ad1c2f86-14-16-May-Arts-and-Science-California-e1779395147102-700x441_40cb21fd.jpeg"
      },
      {
        "alt": "Success – Be More Profitable More Quickly",
        "url": "/manus-storage/070f1aaad6a6-FOTO_AEE_ABRIL_26-11-700x441_50e35035.jpg"
      },
      {
        "alt": "Success – Be More Profitable More Quickly",
        "url": "/manus-storage/2a52a53739a2-chicago-22-700x441_69cdc724.jpg"
      }
    ],
    "migrationAction": "consolidate",
    "notes": "Esta é uma página de confirmação (thank-you page) para download de um estudo de caso/whitepaper. O conteúdo principal é o link direto para o PDF. O rodapé parece estar duplicado no conteúdo extraído. Deve ser consolidada com uma central de recursos ou fluxo de download adequado no novo site."
  },
  "/success-dental-professionals-insights-on-precision-imaging-excellence": {
    "sourceUrl": "https://www.prexion.com/success-dental-professionals-insights-on-precision-imaging-excellence/",
    "route": "/success-dental-professionals-insights-on-precision-imaging-excellence",
    "canonicalTarget": "/success-dental-professionals-insights-on-precision-imaging-excellence",
    "title": "Success – Dental Professionals’ Insights on Precision Imaging Excellence",
    "type": "thank-you",
    "relevance": "medium",
    "summary": "Thank You Página de agradecimento informando ao usuário para clicar no botão abaixo e baixar sua cópia do e-book \"Dental Professionals’ Insights on Precision Imaging Excellence\". Check out more from PreXion Seção exibindo artigos e eventos recentes do blog da empresa, como \"The Art and Science of Dentistry 2026\", \"AAE Annual Meeting 2026\" e \"Chicago Midwinter\". Footer Informações de contato, suporte ao cliente, endereço em San Jose CA , links para redes sociais e links úteis para outros produtos e políticas.",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "PREXION Thank You Please click the button below to download your copy of “Dental Professionals’ Insights on Precision Imaging Excellence.” DOWNLOAD NOW Check out more from PreXion: 3vdab 2026-05-21T20:29:18+00:00 The Art and Science of Dentistry 2026 – Anaheim – CA 3vdab 2026-05-21T20:29:18+00:00 May 21, 2026 | 0 Comments PreXion was present at one of the world’s largest dental events! We participated in the California Dental Association – The Art and Science of Dentistry event, held in Anaheim, California (USA), bringing together professionals from across [...] 3vdab 2026-04-23T20:00:42+00:00 AAE Annual Meteting 2026 – Salt Lake City – UT 3vdab 2026-04-23T20:00:42+00:00 April 23, 2026 | 0 Comments The American Association of Endodontists annually hosts one of the most important global meetings in specialized dentistry: the AAE Annual Meeting 2026. Held on April 16th and 17th, 2026, in Salt Lake City, the [...] 3vdab 2026-03-17T14:47:56+00:00 Chicago Mindwinter 3vdab 2026-03-17T14:47:56+00:00 March 17, 2026 | 0 Comments In February, we participated in an important international event in the healthcare sector, reinforcing our global presence and our commitment to expansion in strategic markets. This meeting was held at the Chicago Dental Society [...]"
      },
      {
        "kind": "heading",
        "text": "Thank You"
      },
      {
        "kind": "heading",
        "text": "Please click the button below to download your copy of “Dental Professionals’ Insights on Precision Imaging Excellence.”"
      },
      {
        "kind": "heading",
        "text": "Check out more from PreXion:"
      },
      {
        "kind": "heading",
        "text": "The Art and Science of Dentistry 2026 – Anaheim – CA"
      },
      {
        "kind": "paragraph",
        "text": "3vdab 2026-05-21T20:29:18+00:00 May 21, 2026 | 0 Comments"
      },
      {
        "kind": "paragraph",
        "text": "PreXion was present at one of the world’s largest dental events! We participated in the California Dental Association – The Art and Science of Dentistry event, held in Anaheim, California (USA), bringing together professionals from across [...]"
      },
      {
        "kind": "heading",
        "text": "AAE Annual Meteting 2026 – Salt Lake City – UT"
      },
      {
        "kind": "paragraph",
        "text": "3vdab 2026-04-23T20:00:42+00:00 April 23, 2026 | 0 Comments"
      },
      {
        "kind": "paragraph",
        "text": "The American Association of Endodontists annually hosts one of the most important global meetings in specialized dentistry: the AAE Annual Meeting 2026. Held on April 16th and 17th, 2026, in Salt Lake City, the [...]"
      },
      {
        "kind": "heading",
        "text": "Chicago Mindwinter"
      },
      {
        "kind": "paragraph",
        "text": "3vdab 2026-03-17T14:47:56+00:00 March 17, 2026 | 0 Comments"
      },
      {
        "kind": "paragraph",
        "text": "In February, we participated in an important international event in the healthcare sector, reinforcing our global presence and our commitment to expansion in strategic markets. This meeting was held at the Chicago Dental Society [...]"
      }
    ],
    "callsToAction": "- DOWNLOAD NOW - Contact Us (tel:855PREXION) - Client Support (tel:6502120314)",
    "downloads": [
      "/manus-storage/5e4d681628b4-Prexion-Dental-Professionals-Insights-onPrecision-Imaging-Excellence-eBook_1bf0d296.pdf"
    ],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "DOWNLOAD NOW",
        "url": "https://www.prexion.com/wp-content/uploads/2024/08/Prexion-Dental-Professionals-Insights-onPrecision-Imaging-Excellence-eBook.pdf"
      },
      {
        "label": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/",
        "url": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "The Art and Science of Dentistry 2026 – Anaheim – CA",
        "url": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "0 Comments",
        "url": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/#respond"
      },
      {
        "label": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/",
        "url": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "AAE Annual Meteting 2026 – Salt Lake City – UT",
        "url": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "0 Comments",
        "url": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/#respond"
      },
      {
        "label": "https://www.prexion.com/chicago-mindwinter-dental/",
        "url": "https://www.prexion.com/chicago-mindwinter-dental/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "Chicago Mindwinter",
        "url": "https://www.prexion.com/chicago-mindwinter-dental/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "0 Comments",
        "url": "https://www.prexion.com/chicago-mindwinter-dental/#respond"
      }
    ],
    "images": [
      {
        "alt": "Success – Dental Professionals’ Insights on Precision Imaging Excellence",
        "url": "/manus-storage/2733ad1c2f86-14-16-May-Arts-and-Science-California-e1779395147102-700x441_40cb21fd.jpeg"
      },
      {
        "alt": "Success – Dental Professionals’ Insights on Precision Imaging Excellence",
        "url": "/manus-storage/070f1aaad6a6-FOTO_AEE_ABRIL_26-11-700x441_50e35035.jpg"
      },
      {
        "alt": "Success – Dental Professionals’ Insights on Precision Imaging Excellence",
        "url": "/manus-storage/2a52a53739a2-chicago-22-700x441_69cdc724.jpg"
      }
    ],
    "migrationAction": "redirect",
    "notes": "Página de confirmação (thank you page) simples para download de um e-book. O arquivo PDF linkado é o ativo principal e deve ser migrado. A página em si pode ser redirecionada para uma página de sucesso genérica ou recriada se a campanha estiver ativa."
  },
  "/success-explorer-ex-cbct-scanner-free-download": {
    "sourceUrl": "https://www.prexion.com/success-explorer-ex-cbct-scanner-free-download/",
    "route": "/success-explorer-ex-cbct-scanner-free-download",
    "canonicalTarget": "/success-explorer-ex-cbct-scanner-free-download",
    "title": "Download – Explorer EX CBCT Scanner Product Brochure (LP Download)",
    "type": "thank-you",
    "relevance": "medium",
    "summary": "PREXION Thank You Please click the button below to download your copy of the Explorer EX CBCT Scanner product brochure. DOWNLOAD NOW Check out more from PreXion: Links to recent events: - The Art and Science of Dentistry 2026 – Anaheim – CA - AAE Annual Meteting 2026 – Salt Lake City – UT - Chicago Mindwinter PreXion Survey and eBook Information PreXion recently surveyed dentists and dental specialists across the United States to determine current perceptions on cost analysis from investment to return on Cone-Beam Computed Tomography CBCT and imaging systems as well as emerging ways to increase profitability on such investments in a shorter time. Given economic pressures on practices today such as rising costs ",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "PREXION Thank You Please click the button below to download your copy of the Explorer EX CBCT Scanner product brochure. DOWNLOAD NOW Check out more from PreXion: 3vdab 2026-05-21T20:29:18+00:00 The Art and Science of Dentistry 2026 – Anaheim – CA 3vdab 2026-05-21T20:29:18+00:00 May 21, 2026 | 0 Comments PreXion was present at one of the world’s largest dental events! We participated in the California Dental Association – The Art and Science of Dentistry event, held in Anaheim, California (USA), bringing together professionals from across [...] 3vdab 2026-04-23T20:00:42+00:00 AAE Annual Meteting 2026 – Salt Lake City – UT 3vdab 2026-04-23T20:00:42+00:00 April 23, 2026 | 0 Comments The American Association of Endodontists annually hosts one of the most important global meetings in specialized dentistry: the AAE Annual Meeting 2026. Held on April 16th and 17th, 2026, in Salt Lake City, the [...] 3vdab 2026-03-17T14:47:56+00:00 Chicago Mindwinter 3vdab 2026-03-17T14:47:56+00:00 March 17, 2026 | 0 Comments In February, we participated in an important international event in the healthcare sector, reinforcing our global presence and our commitment to expansion in strategic markets. This meeting was held at the Chicago Dental Society [...] PreXion recently surveyed dentists and dental specialists across the United States to determine current perceptions on cost analysis from investment to return on Cone-Beam Computed Tomography (CBCT) and imaging systems as well as emerging ways to increase profitability on such investments in a shorter time. Given economic pressures on practices today such as rising costs of supplies and increased competition, it’s not surprising that the lower-initial-investment options like the intraoral digital imaging sensor and standard intraoral scanner ranked at higher importance to your peers than the standard 3D CBCT system. Indeed, in today’s market there are more low-cost entry points to advanced imaging for the modern practice. If you are considering upgrading your practice’s CBCT and imaging systems, you will want to be equipped with all the latest insights into how best to earn a return on your investments. In this eBook, we will cover data from your peers in dentistry and specialty practice on these topics: Common Myths about CBCT Imaging in Dentistry and Specialty Practices The 2D Advantage: Your Peers’ Insights on Using 2D Panoramic Imaging The 3D Advantage: Your Peers’ Insights on Using 3D CBCT Imaging The Intraoral Sensor Advantage: Your Peers’ Insights on Using an Intraoral Digital Imaging Sensor Increasing Profitability More Quickly with Emerging Cone-Beam Computed Tomography (CBCT) and Imaging Systems Conclusion: How Could CBCT Imaging Companies Be More Helpful to the Dental Profession Overall?"
      },
      {
        "kind": "heading",
        "text": "Thank You"
      },
      {
        "kind": "heading",
        "text": "Please click the button below to download your copy of the Explorer EX CBCT Scanner product brochure."
      },
      {
        "kind": "heading",
        "text": "Check out more from PreXion:"
      },
      {
        "kind": "heading",
        "text": "The Art and Science of Dentistry 2026 – Anaheim – CA"
      },
      {
        "kind": "paragraph",
        "text": "3vdab 2026-05-21T20:29:18+00:00 May 21, 2026 | 0 Comments"
      },
      {
        "kind": "paragraph",
        "text": "PreXion was present at one of the world’s largest dental events! We participated in the California Dental Association – The Art and Science of Dentistry event, held in Anaheim, California (USA), bringing together professionals from across [...]"
      },
      {
        "kind": "heading",
        "text": "AAE Annual Meteting 2026 – Salt Lake City – UT"
      },
      {
        "kind": "paragraph",
        "text": "3vdab 2026-04-23T20:00:42+00:00 April 23, 2026 | 0 Comments"
      },
      {
        "kind": "paragraph",
        "text": "The American Association of Endodontists annually hosts one of the most important global meetings in specialized dentistry: the AAE Annual Meeting 2026. Held on April 16th and 17th, 2026, in Salt Lake City, the [...]"
      },
      {
        "kind": "heading",
        "text": "Chicago Mindwinter"
      },
      {
        "kind": "paragraph",
        "text": "3vdab 2026-03-17T14:47:56+00:00 March 17, 2026 | 0 Comments"
      },
      {
        "kind": "paragraph",
        "text": "In February, we participated in an important international event in the healthcare sector, reinforcing our global presence and our commitment to expansion in strategic markets. This meeting was held at the Chicago Dental Society [...]"
      },
      {
        "kind": "paragraph",
        "text": "PreXion recently surveyed dentists and dental specialists across the United States to determine current perceptions on cost analysis from investment to return on Cone-Beam Computed Tomography (CBCT) and imaging systems as well as emerging ways to increase profitability on such investments in a shorter time."
      },
      {
        "kind": "paragraph",
        "text": "Given economic pressures on practices today such as rising costs of supplies and increased competition, it’s not surprising that the lower-initial-investment options like the intraoral digital imaging sensor and standard intraoral scanner ranked at higher importance to your peers than the standard 3D CBCT system. Indeed, in today’s market there are more low-cost entry points to advanced imaging for the modern practice."
      },
      {
        "kind": "paragraph",
        "text": "If you are considering upgrading your practice’s CBCT and imaging systems, you will want to be equipped with all the latest insights into how best to earn a return on your investments. In this eBook, we will cover data from your peers in dentistry and specialty practice on these topics:"
      },
      {
        "kind": "list",
        "text": "Common Myths about CBCT Imaging in Dentistry and Specialty Practices"
      },
      {
        "kind": "list",
        "text": "The 2D Advantage: Your Peers’ Insights on Using 2D Panoramic Imaging"
      },
      {
        "kind": "list",
        "text": "The 3D Advantage: Your Peers’ Insights on Using 3D CBCT Imaging"
      },
      {
        "kind": "list",
        "text": "The Intraoral Sensor Advantage: Your Peers’ Insights on Using an Intraoral Digital Imaging Sensor"
      },
      {
        "kind": "list",
        "text": "Increasing Profitability More Quickly with Emerging Cone-Beam Computed Tomography (CBCT) and Imaging Systems"
      },
      {
        "kind": "list",
        "text": "Conclusion: How Could CBCT Imaging Companies Be More Helpful to the Dental Profession Overall?"
      }
    ],
    "callsToAction": "- [DOWNLOAD NOW](https://www.prexion.com/wp-content/uploads/2024/02/PRE-Explorer-EX-ProductBrochure-SinglePages-NoCeph.pdf) - Contact Us: [855-PREXION](tel:855PREXION) - Client Support: [(650) 212-0314](tel:6502120314) - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [
      "https://www.prexion.com/wp-content/uploads/2024/02/PRE-Explorer-EX-ProductBrochure-SinglePages-NoCeph.pdf"
    ],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "DOWNLOAD NOW",
        "url": "https://www.prexion.com/wp-content/uploads/2024/02/PRE-Explorer-EX-ProductBrochure-SinglePages-NoCeph.pdf"
      },
      {
        "label": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/",
        "url": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "The Art and Science of Dentistry 2026 – Anaheim – CA",
        "url": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "0 Comments",
        "url": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/#respond"
      },
      {
        "label": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/",
        "url": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "AAE Annual Meteting 2026 – Salt Lake City – UT",
        "url": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "0 Comments",
        "url": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/#respond"
      },
      {
        "label": "https://www.prexion.com/chicago-mindwinter-dental/",
        "url": "https://www.prexion.com/chicago-mindwinter-dental/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "Chicago Mindwinter",
        "url": "https://www.prexion.com/chicago-mindwinter-dental/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "0 Comments",
        "url": "https://www.prexion.com/chicago-mindwinter-dental/#respond"
      }
    ],
    "images": [
      {
        "alt": "Download – Explorer EX CBCT Scanner Product Brochure (LP Download)",
        "url": "/manus-storage/2733ad1c2f86-14-16-May-Arts-and-Science-California-e1779395147102-700x441_40cb21fd.jpeg"
      },
      {
        "alt": "Download – Explorer EX CBCT Scanner Product Brochure (LP Download)",
        "url": "/manus-storage/070f1aaad6a6-FOTO_AEE_ABRIL_26-11-700x441_50e35035.jpg"
      },
      {
        "alt": "Download – Explorer EX CBCT Scanner Product Brochure (LP Download)",
        "url": "/manus-storage/2a52a53739a2-chicago-22-700x441_69cdc724.jpg"
      },
      {
        "alt": "Download – Explorer EX CBCT Scanner Product Brochure (LP Download)",
        "url": "/manus-storage/96d2408c671b-PRE-eBook-Q1-2024-Cover_40e3db31.jpg"
      }
    ],
    "migrationAction": "consolidate",
    "notes": "Página de confirmação/sucesso (\"Thank You\") que entrega o download da brochura do Explorer EX CBCT Scanner. O conteúdo inferior sobre uma pesquisa/eBook parece não ter relação direta com o download principal, indicando uma possível junção de blocos padrão ou erro na montagem da página. Recomenda-se consolidar o download em uma página central de recursos ou exibi-lo dinamicamente após o formulário. O rodapé está duplicado."
  },
  "/success-how-your-peers-earn-roi-from-3d-cbct-scan-imaging-technology": {
    "sourceUrl": "https://www.prexion.com/success-how-your-peers-earn-roi-from-3d-cbct-scan-imaging-technology/",
    "route": "/success-how-your-peers-earn-roi-from-3d-cbct-scan-imaging-technology",
    "canonicalTarget": "/success-how-your-peers-earn-roi-from-3d-cbct-scan-imaging-technology",
    "title": "Success – How Your Peers Earn ROI from 3D CBCT Scan Imaging Technology",
    "type": "thank-you",
    "relevance": "medium",
    "summary": "Thank You Please click the button below to download your copy of “The Complete Data-Driven Guide to How Your Peers Earn ROI from 3D CBCT Scan Imaging Technology.” Check out more from PreXion: Apresenta links para eventos recentes da PreXion: The Art and Science of Dentistry 2026 Anaheim, CA , AAE Annual Meeting 2026 Salt Lake City, UT e Chicago Midwinter. Rodapé Duplicado Informações de contato telefone, suporte e endereço e links para explorar produtos Evolve 3D Scanner, Excelsior ENDO Scanner , ROI Calculator, suporte remoto e políticas legais.",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "PREXION Thank You Please click the button below to download your copy of “The Complete Data-Driven Guide to How Your Peers Earn ROI from 3D CBCT Scan Imaging Technology.” DOWNLOAD NOW Check out more from PreXion: 3vdab 2026-05-21T20:29:18+00:00 The Art and Science of Dentistry 2026 – Anaheim – CA 3vdab 2026-05-21T20:29:18+00:00 May 21, 2026 | 0 Comments PreXion was present at one of the world’s largest dental events! We participated in the California Dental Association – The Art and Science of Dentistry event, held in Anaheim, California (USA), bringing together professionals from across [...] 3vdab 2026-04-23T20:00:42+00:00 AAE Annual Meteting 2026 – Salt Lake City – UT 3vdab 2026-04-23T20:00:42+00:00 April 23, 2026 | 0 Comments The American Association of Endodontists annually hosts one of the most important global meetings in specialized dentistry: the AAE Annual Meeting 2026. Held on April 16th and 17th, 2026, in Salt Lake City, the [...] 3vdab 2026-03-17T14:47:56+00:00 Chicago Mindwinter 3vdab 2026-03-17T14:47:56+00:00 March 17, 2026 | 0 Comments In February, we participated in an important international event in the healthcare sector, reinforcing our global presence and our commitment to expansion in strategic markets. This meeting was held at the Chicago Dental Society [...]"
      },
      {
        "kind": "heading",
        "text": "Thank You"
      },
      {
        "kind": "heading",
        "text": "Please click the button below to download your copy of “The Complete Data-Driven Guide to How Your Peers Earn ROI from 3D CBCT Scan Imaging Technology.”"
      },
      {
        "kind": "heading",
        "text": "Check out more from PreXion:"
      },
      {
        "kind": "heading",
        "text": "The Art and Science of Dentistry 2026 – Anaheim – CA"
      },
      {
        "kind": "paragraph",
        "text": "3vdab 2026-05-21T20:29:18+00:00 May 21, 2026 | 0 Comments"
      },
      {
        "kind": "paragraph",
        "text": "PreXion was present at one of the world’s largest dental events! We participated in the California Dental Association – The Art and Science of Dentistry event, held in Anaheim, California (USA), bringing together professionals from across [...]"
      },
      {
        "kind": "heading",
        "text": "AAE Annual Meteting 2026 – Salt Lake City – UT"
      },
      {
        "kind": "paragraph",
        "text": "3vdab 2026-04-23T20:00:42+00:00 April 23, 2026 | 0 Comments"
      },
      {
        "kind": "paragraph",
        "text": "The American Association of Endodontists annually hosts one of the most important global meetings in specialized dentistry: the AAE Annual Meeting 2026. Held on April 16th and 17th, 2026, in Salt Lake City, the [...]"
      },
      {
        "kind": "heading",
        "text": "Chicago Mindwinter"
      },
      {
        "kind": "paragraph",
        "text": "3vdab 2026-03-17T14:47:56+00:00 March 17, 2026 | 0 Comments"
      },
      {
        "kind": "paragraph",
        "text": "In February, we participated in an important international event in the healthcare sector, reinforcing our global presence and our commitment to expansion in strategic markets. This meeting was held at the Chicago Dental Society [...]"
      }
    ],
    "callsToAction": "- DOWNLOAD NOW (Link para PDF) - Contact Us: 855-PREXION - Client Support: (650) 212-0314 - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [
      "/manus-storage/fdf7cb6bd84c-PreXion-eBook-HowYourPeersEarnROIfrom3DCBCTScanImagingTechnology_f9ce1346.pdf"
    ],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "DOWNLOAD NOW",
        "url": "https://www.prexion.com/wp-content/uploads/2024/10/PreXion-eBook-HowYourPeersEarnROIfrom3DCBCTScanImagingTechnology.pdf"
      },
      {
        "label": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/",
        "url": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "The Art and Science of Dentistry 2026 – Anaheim – CA",
        "url": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "0 Comments",
        "url": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/#respond"
      },
      {
        "label": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/",
        "url": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "AAE Annual Meteting 2026 – Salt Lake City – UT",
        "url": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "0 Comments",
        "url": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/#respond"
      },
      {
        "label": "https://www.prexion.com/chicago-mindwinter-dental/",
        "url": "https://www.prexion.com/chicago-mindwinter-dental/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "Chicago Mindwinter",
        "url": "https://www.prexion.com/chicago-mindwinter-dental/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "0 Comments",
        "url": "https://www.prexion.com/chicago-mindwinter-dental/#respond"
      }
    ],
    "images": [
      {
        "alt": "Success – How Your Peers Earn ROI from 3D CBCT Scan Imaging Technology",
        "url": "/manus-storage/2733ad1c2f86-14-16-May-Arts-and-Science-California-e1779395147102-700x441_40cb21fd.jpeg"
      },
      {
        "alt": "Success – How Your Peers Earn ROI from 3D CBCT Scan Imaging Technology",
        "url": "/manus-storage/070f1aaad6a6-FOTO_AEE_ABRIL_26-11-700x441_50e35035.jpg"
      },
      {
        "alt": "Success – How Your Peers Earn ROI from 3D CBCT Scan Imaging Technology",
        "url": "/manus-storage/2a52a53739a2-chicago-22-700x441_69cdc724.jpg"
      }
    ],
    "migrationAction": "consolidate",
    "notes": "Página de agradecimento (thank-you page) que entrega um e-book em PDF após o preenchimento de formulário. Há duplicação no rodapé, exibindo os contatos e links duas vezes. O conteúdo principal é o download do PDF. Recomenda-se consolidar essa página como um recurso direto ou manter uma rota limpa para o download."
  },
  "/success-mitigating-practice-liability-exposure-with-precision-treatment-planning-and-diagnoses": {
    "sourceUrl": "https://www.prexion.com/success-mitigating-practice-liability-exposure-with-precision-treatment-planning-and-diagnoses/",
    "route": "/success-mitigating-practice-liability-exposure-with-precision-treatment-planning-and-diagnoses",
    "canonicalTarget": "/success-mitigating-practice-liability-exposure-with-precision-treatment-planning-and-diagnoses",
    "title": "Success – Mitigating Practice Liability Exposure with Precision Treatment Planning and Diagnoses",
    "type": "thank-you",
    "relevance": "medium",
    "summary": "PREXION Thank You Página de agradecimento pelo interesse. Please click the button below to download your copy of “Mitigating Practice Liability Exposure with Precision Treatment Planning and Diagnoses.” Instrução para clicar no botão \"DOWNLOAD NOW\" para baixar o arquivo PDF do whitepaper sobre planejamento de tratamento de precisão e diagnósticos. Check out more from PreXion: Seção de artigos e notícias recentes: - The Art and Science of Dentistry 2026 – Anaheim – CA May 21, 2026 - AAE Annual Meteting 2026 – Salt Lake City – UT April 23, 2026 - Chicago Mindwinter March 17, 2026",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "PREXION Thank You Please click the button below to download your copy of “Mitigating Practice Liability Exposure with Precision Treatment Planning and Diagnoses.” DOWNLOAD NOW Check out more from PreXion: 3vdab 2026-05-21T20:29:18+00:00 The Art and Science of Dentistry 2026 – Anaheim – CA 3vdab 2026-05-21T20:29:18+00:00 May 21, 2026 | 0 Comments PreXion was present at one of the world’s largest dental events! We participated in the California Dental Association – The Art and Science of Dentistry event, held in Anaheim, California (USA), bringing together professionals from across [...] 3vdab 2026-04-23T20:00:42+00:00 AAE Annual Meteting 2026 – Salt Lake City – UT 3vdab 2026-04-23T20:00:42+00:00 April 23, 2026 | 0 Comments The American Association of Endodontists annually hosts one of the most important global meetings in specialized dentistry: the AAE Annual Meeting 2026. Held on April 16th and 17th, 2026, in Salt Lake City, the [...] 3vdab 2026-03-17T14:47:56+00:00 Chicago Mindwinter 3vdab 2026-03-17T14:47:56+00:00 March 17, 2026 | 0 Comments In February, we participated in an important international event in the healthcare sector, reinforcing our global presence and our commitment to expansion in strategic markets. This meeting was held at the Chicago Dental Society [...]"
      },
      {
        "kind": "heading",
        "text": "Thank You"
      },
      {
        "kind": "heading",
        "text": "Please click the button below to download your copy of “Mitigating Practice Liability Exposure with Precision Treatment Planning and Diagnoses.”"
      },
      {
        "kind": "heading",
        "text": "Check out more from PreXion:"
      },
      {
        "kind": "heading",
        "text": "The Art and Science of Dentistry 2026 – Anaheim – CA"
      },
      {
        "kind": "paragraph",
        "text": "3vdab 2026-05-21T20:29:18+00:00 May 21, 2026 | 0 Comments"
      },
      {
        "kind": "paragraph",
        "text": "PreXion was present at one of the world’s largest dental events! We participated in the California Dental Association – The Art and Science of Dentistry event, held in Anaheim, California (USA), bringing together professionals from across [...]"
      },
      {
        "kind": "heading",
        "text": "AAE Annual Meteting 2026 – Salt Lake City – UT"
      },
      {
        "kind": "paragraph",
        "text": "3vdab 2026-04-23T20:00:42+00:00 April 23, 2026 | 0 Comments"
      },
      {
        "kind": "paragraph",
        "text": "The American Association of Endodontists annually hosts one of the most important global meetings in specialized dentistry: the AAE Annual Meeting 2026. Held on April 16th and 17th, 2026, in Salt Lake City, the [...]"
      },
      {
        "kind": "heading",
        "text": "Chicago Mindwinter"
      },
      {
        "kind": "paragraph",
        "text": "3vdab 2026-03-17T14:47:56+00:00 March 17, 2026 | 0 Comments"
      },
      {
        "kind": "paragraph",
        "text": "In February, we participated in an important international event in the healthcare sector, reinforcing our global presence and our commitment to expansion in strategic markets. This meeting was held at the Chicago Dental Society [...]"
      }
    ],
    "callsToAction": "- Telefone Contato: 855-PREXION - Telefone Suporte: (650) 212-0314 - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110 - DOWNLOAD NOW (Link para baixar o PDF)",
    "downloads": [
      "https://www.prexion.com/wp-content/uploads/2023/09/PRE-MitigatingPracticeLiabilityExposureWithPrecisionTreatmentPlanningandDiagnoses.pdf"
    ],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "DOWNLOAD NOW",
        "url": "https://www.prexion.com/wp-content/uploads/2023/09/PRE-MitigatingPracticeLiabilityExposureWithPrecisionTreatmentPlanningandDiagnoses.pdf"
      },
      {
        "label": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/",
        "url": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "The Art and Science of Dentistry 2026 – Anaheim – CA",
        "url": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "0 Comments",
        "url": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/#respond"
      },
      {
        "label": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/",
        "url": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "AAE Annual Meteting 2026 – Salt Lake City – UT",
        "url": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "0 Comments",
        "url": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/#respond"
      },
      {
        "label": "https://www.prexion.com/chicago-mindwinter-dental/",
        "url": "https://www.prexion.com/chicago-mindwinter-dental/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "Chicago Mindwinter",
        "url": "https://www.prexion.com/chicago-mindwinter-dental/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "0 Comments",
        "url": "https://www.prexion.com/chicago-mindwinter-dental/#respond"
      }
    ],
    "images": [
      {
        "alt": "Success – Mitigating Practice Liability Exposure with Precision Treatment Planning and Diagnoses",
        "url": "/manus-storage/2733ad1c2f86-14-16-May-Arts-and-Science-California-e1779395147102-700x441_40cb21fd.jpeg"
      },
      {
        "alt": "Success – Mitigating Practice Liability Exposure with Precision Treatment Planning and Diagnoses",
        "url": "/manus-storage/070f1aaad6a6-FOTO_AEE_ABRIL_26-11-700x441_50e35035.jpg"
      },
      {
        "alt": "Success – Mitigating Practice Liability Exposure with Precision Treatment Planning and Diagnoses",
        "url": "/manus-storage/2a52a53739a2-chicago-22-700x441_69cdc724.jpg"
      }
    ],
    "migrationAction": "preserve-resource",
    "notes": "Trata-se de uma página de agradecimento (thank-you page) que disponibiliza o download de um PDF sobre mitigação de riscos na prática odontológica. O ideal seria preservar o recurso (o PDF) e consolidar a experiência de download no novo site, possivelmente redirecionando esta URL para uma nova landing page ou biblioteca de recursos. O conteúdo de texto em si é mínimo."
  },
  "/success-overcoming-the-rising-costs-and-economic-challenges-in-dentistry": {
    "sourceUrl": "https://www.prexion.com/success-overcoming-the-rising-costs-and-economic-challenges-in-dentistry/",
    "route": "/success-overcoming-the-rising-costs-and-economic-challenges-in-dentistry",
    "canonicalTarget": "/success-overcoming-the-rising-costs-and-economic-challenges-in-dentistry",
    "title": "Success – Overcoming the Rising Costs and Economic Challenges in Dentistry",
    "type": "thank-you",
    "relevance": "medium",
    "summary": "Success – Overcoming the Rising Costs and Economic Challenges in Dentistry Thank You Please click the button below to download your copy of “Overcoming Rising Costs and Economic Challenges in Dentistry.” Página de agradecimento oferecendo o download do PDF \"Overcoming Rising Costs and Economic Challenges in Dentistry\". Check out more from PreXion: Lista de links para eventos recentes/futuros da PreXion: - The Art and Science of Dentistry 2026 – Anaheim – CA - AAE Annual Meteting 2026 – Salt Lake City – UT - Chicago Mindwinter",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "PREXION Thank You Please click the button below to download your copy of “Overcoming Rising Costs and Economic Challenges in Dentistry.” DOWNLOAD NOW Check out more from PreXion: 3vdab 2026-05-21T20:29:18+00:00 The Art and Science of Dentistry 2026 – Anaheim – CA 3vdab 2026-05-21T20:29:18+00:00 May 21, 2026 | 0 Comments PreXion was present at one of the world’s largest dental events! We participated in the California Dental Association – The Art and Science of Dentistry event, held in Anaheim, California (USA), bringing together professionals from across [...] 3vdab 2026-04-23T20:00:42+00:00 AAE Annual Meteting 2026 – Salt Lake City – UT 3vdab 2026-04-23T20:00:42+00:00 April 23, 2026 | 0 Comments The American Association of Endodontists annually hosts one of the most important global meetings in specialized dentistry: the AAE Annual Meeting 2026. Held on April 16th and 17th, 2026, in Salt Lake City, the [...] 3vdab 2026-03-17T14:47:56+00:00 Chicago Mindwinter 3vdab 2026-03-17T14:47:56+00:00 March 17, 2026 | 0 Comments In February, we participated in an important international event in the healthcare sector, reinforcing our global presence and our commitment to expansion in strategic markets. This meeting was held at the Chicago Dental Society [...]"
      },
      {
        "kind": "heading",
        "text": "Thank You"
      },
      {
        "kind": "heading",
        "text": "Please click the button below to download your copy of “Overcoming Rising Costs and Economic Challenges in Dentistry.”"
      },
      {
        "kind": "heading",
        "text": "Check out more from PreXion:"
      },
      {
        "kind": "heading",
        "text": "The Art and Science of Dentistry 2026 – Anaheim – CA"
      },
      {
        "kind": "paragraph",
        "text": "3vdab 2026-05-21T20:29:18+00:00 May 21, 2026 | 0 Comments"
      },
      {
        "kind": "paragraph",
        "text": "PreXion was present at one of the world’s largest dental events! We participated in the California Dental Association – The Art and Science of Dentistry event, held in Anaheim, California (USA), bringing together professionals from across [...]"
      },
      {
        "kind": "heading",
        "text": "AAE Annual Meteting 2026 – Salt Lake City – UT"
      },
      {
        "kind": "paragraph",
        "text": "3vdab 2026-04-23T20:00:42+00:00 April 23, 2026 | 0 Comments"
      },
      {
        "kind": "paragraph",
        "text": "The American Association of Endodontists annually hosts one of the most important global meetings in specialized dentistry: the AAE Annual Meeting 2026. Held on April 16th and 17th, 2026, in Salt Lake City, the [...]"
      },
      {
        "kind": "heading",
        "text": "Chicago Mindwinter"
      },
      {
        "kind": "paragraph",
        "text": "3vdab 2026-03-17T14:47:56+00:00 March 17, 2026 | 0 Comments"
      },
      {
        "kind": "paragraph",
        "text": "In February, we participated in an important international event in the healthcare sector, reinforcing our global presence and our commitment to expansion in strategic markets. This meeting was held at the Chicago Dental Society [...]"
      }
    ],
    "callsToAction": "- DOWNLOAD NOW - Contact Us: 855-PREXION (tel:855PREXION) - Client Support: (650) 212-0314 (tel:6502120314)",
    "downloads": [
      "/manus-storage/d0ba8daa6b5d-PRE-OvercomingRisingCostsandEconomicChallengesinDentistry_3a45c5ae.pdf"
    ],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "DOWNLOAD NOW",
        "url": "https://www.prexion.com/wp-content/uploads/2023/09/PRE-OvercomingRisingCostsandEconomicChallengesinDentistry.pdf"
      },
      {
        "label": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/",
        "url": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "The Art and Science of Dentistry 2026 – Anaheim – CA",
        "url": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "0 Comments",
        "url": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/#respond"
      },
      {
        "label": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/",
        "url": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "AAE Annual Meteting 2026 – Salt Lake City – UT",
        "url": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "0 Comments",
        "url": "https://www.prexion.com/aae-annual-meteting-2026-salt-lake-city-ut/#respond"
      },
      {
        "label": "https://www.prexion.com/chicago-mindwinter-dental/",
        "url": "https://www.prexion.com/chicago-mindwinter-dental/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "Chicago Mindwinter",
        "url": "https://www.prexion.com/chicago-mindwinter-dental/"
      },
      {
        "label": "3vdab",
        "url": "https://www.prexion.com/author/3vdab/"
      },
      {
        "label": "0 Comments",
        "url": "https://www.prexion.com/chicago-mindwinter-dental/#respond"
      }
    ],
    "images": [
      {
        "alt": "Success – Overcoming the Rising Costs and Economic Challenges in Dentistry",
        "url": "/manus-storage/2733ad1c2f86-14-16-May-Arts-and-Science-California-e1779395147102-700x441_40cb21fd.jpeg"
      },
      {
        "alt": "Success – Overcoming the Rising Costs and Economic Challenges in Dentistry",
        "url": "/manus-storage/070f1aaad6a6-FOTO_AEE_ABRIL_26-11-700x441_50e35035.jpg"
      },
      {
        "alt": "Success – Overcoming the Rising Costs and Economic Challenges in Dentistry",
        "url": "/manus-storage/2a52a53739a2-chicago-22-700x441_69cdc724.jpg"
      }
    ],
    "migrationAction": "preserve-resource",
    "notes": "Página de confirmação (thank you page) para download de um PDF sobre desafios econômicos na odontologia. O conteúdo principal é o link para o PDF, que deve ser preservado. O restante da página exibe links para eventos e informações padrão do rodapé, que estão duplicadas no código. O arquivo PDF em si deve ser migrado e disponibilizado em uma nova rota de recursos."
  },
  "/thank-you-for-your-interest-in-prexion-3d-cbct": {
    "sourceUrl": "https://www.prexion.com/thank-you-for-your-interest-in-prexion-3d-cbct/",
    "route": "/thank-you-for-your-interest-in-prexion-3d-cbct",
    "canonicalTarget": "/thank-you-for-your-interest-in-prexion-3d-cbct",
    "title": "Thank You For Your Interest in PreXion 3D CBCT (LP)",
    "type": "thank-you",
    "relevance": "medium",
    "summary": "Thank You For Your Interest in PreXion3D CBCT! Mensagem de agradecimento pelo interesse no PreXion3D CBCT, destacando a precisão clínica e o potencial de ROI da tecnologia de imagem 3D. Here’s how PreXion3D can help you Benefícios listados: ganho de clareza e confiança em diagnósticos, aumento das taxas de aceitação de planos de tratamento e crescimento de receita por meio de imagens avançadas. Get started today with three easy steps Passos para engajamento: 1. Download de um eBook sobre CBCT e ROI. 2. Download da brochura de especificações do PreXion Explorer EX CBCT. 3. Conexão com a PreXion para obter clareza sobre ROI, oferecer conhecimento aos pacientes e solicitar uma demonstração presencial do PreXion3D ",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Thank you for your interest in PreXion3D CBCT! Unlock the clinical precision and ROI potential that come with cutting-edge 3D imaging technology. Thank you for your interest in PreXion3D CBCT! Unlock the clinical precision and ROI potential that come with cutting-edge 3D imaging technology. Here’s how PreXion3D can help you: Gain clarity and confidence in diagnoses Increase treatment plan acceptance rates Grow revenue through advanced imaging Get started today with three easy steps: Download the eBook for insights on CBCT and ROI GET ACCESS NOW Get the PreXion Explorer EX CBCT specifications brochure. DOWNLOAD NOW Get started with PreXion now and earn ROI right away. Yes, I want to connect with PreXion today so I can get: Clarity on how to earn a healthy return on investment on CBCT. A viewpoint on how to further offer patients the knowledge and confidence needed to increase practice-wide case acceptance. A complimentary in-person demo of the PreXion3D Explorer EX CBCT. What is the Industry Saying? What is the Industry Saying? “We chose PreXion based on the PreXion specifications, low radiation, and state of the art imaging. We are excited to be able to better diagnose periodontal disease and treatment plan for implants. In addition, we were very pleased by the training provided by PreXion which has been vital to help us learn how to use our CBCT to the fullest.” – DR. RICHARD NEWHART, PERIODONTIST “With the PreXion CBCT, I now have the ability to comprehensively diagnose, plan, and treat every patient with confidence and accuracy. This technology directly impacts everything from sinus lifts, implant placement, bone grafting, surgical extractions, and more. This is absolutely the most valuable diagnostic tool in my practice.” – DR. ROBERT WALINCHUS “The ability to visualize the bone/root relationship is mission critical for our practice to better service our patients. The PreXion CBCT clearly shows the limitations of orthodontic tooth movement. I can’t imagine practicing without it!” – DR. JEFFREY C. MILLER PreXion delivers precision imaging solutions to dentistry and specialty practices across the United States and is best known for top-quality imaging solutions, an unmatched commitment to education and excellent service. Learn more at www.prexion.com ."
      },
      {
        "kind": "heading",
        "text": "Thank you for your interest in PreXion3D CBCT!"
      },
      {
        "kind": "heading",
        "text": "Unlock the clinical precision and ROI potential that come with cutting-edge 3D imaging technology."
      },
      {
        "kind": "heading",
        "text": "Here’s how PreXion3D can help you:"
      },
      {
        "kind": "heading",
        "text": "Get started today with three easy steps:"
      },
      {
        "kind": "heading",
        "text": "Download the eBook for insights on CBCT and ROI"
      },
      {
        "kind": "heading",
        "text": "Get the PreXion Explorer EX CBCT specifications brochure."
      },
      {
        "kind": "heading",
        "text": "Get started with PreXion now and earn ROI right away."
      },
      {
        "kind": "paragraph",
        "text": "Yes, I want to connect with PreXion today so I can get:"
      },
      {
        "kind": "list",
        "text": "Clarity on how to earn a healthy return on investment on CBCT."
      },
      {
        "kind": "list",
        "text": "A viewpoint on how to further offer patients the knowledge and confidence needed to increase practice-wide case acceptance."
      },
      {
        "kind": "list",
        "text": "A complimentary in-person demo of the PreXion3D Explorer EX CBCT."
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“We chose PreXion based on the PreXion specifications, low radiation, and state of the art imaging. We are excited to be able to better diagnose periodontal disease and treatment plan for implants. In addition, we were very pleased by the training provided by PreXion which has been vital to help us learn how to use our CBCT to the fullest.”"
      },
      {
        "kind": "paragraph",
        "text": "– DR. RICHARD NEWHART, PERIODONTIST"
      },
      {
        "kind": "paragraph",
        "text": "“With the PreXion CBCT, I now have the ability to comprehensively diagnose, plan, and treat every patient with confidence and accuracy. This technology directly impacts everything from sinus lifts, implant placement, bone grafting, surgical extractions, and more. This is absolutely the most valuable diagnostic tool in my practice.”"
      },
      {
        "kind": "paragraph",
        "text": "– DR. ROBERT WALINCHUS"
      },
      {
        "kind": "paragraph",
        "text": "“The ability to visualize the bone/root relationship is mission critical for our practice to better service our patients. The PreXion CBCT clearly shows the limitations of orthodontic tooth movement. I can’t imagine practicing without it!”"
      },
      {
        "kind": "paragraph",
        "text": "– DR. JEFFREY C. MILLER"
      },
      {
        "kind": "paragraph",
        "text": "PreXion delivers precision imaging solutions to dentistry and specialty practices across the United States and is best known for top-quality imaging solutions, an unmatched commitment to education and excellent service. Learn more at www.prexion.com ."
      }
    ],
    "callsToAction": "- [GET ACCESS NOW](https://www.prexion.com/downloadable-assets/) - [DOWNLOAD NOW](https://www.prexion.com/wp-content/uploads/2024/02/PRE-Explorer-EX-ProductBrochure-SinglePages-NoCeph.pdf) - Connect with PreXion today (implied form/action) - Telefones: 855-PREXION, (650) 212-0314 - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [
      "https://www.prexion.com/wp-content/uploads/2024/02/PRE-Explorer-EX-ProductBrochure-SinglePages-NoCeph.pdf"
    ],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "GET ACCESS NOW",
        "url": "https://www.prexion.com/downloadable-assets/"
      },
      {
        "label": "DOWNLOAD NOW",
        "url": "https://www.prexion.com/wp-content/uploads/2024/02/PRE-Explorer-EX-ProductBrochure-SinglePages-NoCeph.pdf"
      },
      {
        "label": "www.prexion.com",
        "url": "http://www.prexion.com"
      }
    ],
    "images": [
      {
        "alt": "Thank You For Your Interest in PreXion 3D CBCT (LP)",
        "url": "/manus-storage/8fd6b650cec1-58e85faf-icon-2_1000000000000000000028_071373a9.png"
      },
      {
        "alt": "Thank You For Your Interest in PreXion 3D CBCT (LP)",
        "url": "/manus-storage/86d8784597be-98f2607b-icon-3_1000000000000000000028_b5102b10.png"
      },
      {
        "alt": "Thank You For Your Interest in PreXion 3D CBCT (LP)",
        "url": "/manus-storage/bc77b47ee755-63dacb4d-icon-5_1000000000000000000028_f68001fe.png"
      },
      {
        "alt": "Thank You For Your Interest in PreXion 3D CBCT (LP)",
        "url": "/manus-storage/710d64e2ffa6-PRE-Step-1_bd0991c7.png"
      },
      {
        "alt": "Thank You For Your Interest in PreXion 3D CBCT (LP)",
        "url": "/manus-storage/0c013d67418d-PRE-Q4-eBook_e57dad13.jpg"
      },
      {
        "alt": "Thank You For Your Interest in PreXion 3D CBCT (LP)",
        "url": "/manus-storage/a021ec338669-PRE-Step-2_f3f01303.png"
      },
      {
        "alt": "Thank You For Your Interest in PreXion 3D CBCT (LP)",
        "url": "/manus-storage/3c7c2a93b31b-Brochure-Cover_422a9da3.jpg"
      },
      {
        "alt": "Thank You For Your Interest in PreXion 3D CBCT (LP)",
        "url": "/manus-storage/e8e59e98a1b7-PRE-Step-3_bcd65032.png"
      }
    ],
    "migrationAction": "consolidate",
    "notes": "Página de agradecimento (thank you page) padrão para conversões relacionadas a campanhas ou formulários do PreXion 3D CBCT. O conteúdo repete algumas frases no início e possui duplicação do rodapé. Pode ser consolidada em uma página de agradecimento genérica com parâmetros dinâmicos ou mantida como rota específica de campanha."
  },
  "/thank-you": {
    "sourceUrl": "https://www.prexion.com/thank-you/",
    "route": "/thank-you",
    "canonicalTarget": "/thank-you",
    "title": "Thank You",
    "type": "thank-you",
    "relevance": "low",
    "summary": "PREXION Thank You A member of our team will be in touch shortly. A page acknowledging a form submission, stating that a team member will be in touch shortly. It also provides a phone number 855-PREXION for more immediate information about products and services.",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "PREXION Thank You A member of our team will be in touch shortly. For more immediate information about PreXion products and services please reach out directly at 855-PREXION."
      },
      {
        "kind": "heading",
        "text": "Thank You"
      },
      {
        "kind": "heading",
        "text": "A member of our team will be in touch shortly."
      }
    ],
    "callsToAction": "- Telefone de Contato: 855-PREXION - Telefone de Suporte: (650) 212-0314 - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [],
    "images": [],
    "migrationAction": "exclude-technical",
    "notes": "Página de confirmação genérica (thank you page) exibida após o envio de formulários. Não contém conteúdo substancial próprio e deve ser tratada como artefato técnico ou substituída por mensagens de sucesso integradas aos formulários no novo site. O rodapé aparece duplicado na extração."
  },
  "/the-art-and-science-of-dentistry-2026-anaheim-ca": {
    "sourceUrl": "https://www.prexion.com/the-art-and-science-of-dentistry-2026-anaheim-ca/",
    "route": "/the-art-and-science-of-dentistry-2026-anaheim-ca",
    "canonicalTarget": "/the-art-and-science-of-dentistry-2026-anaheim-ca",
    "title": "The Art and Science of Dentistry 2026 – Anaheim – CA",
    "type": "event",
    "relevance": "medium",
    "summary": "The Art and Science of Dentistry 2026 – Anaheim – CA This page details PreXion's participation in the California Dental Association - The Art and Science of Dentistry event in Anaheim, CA, held on May 21, 2026. PreXion was present at one of the world’s largest dental events! The event brought together dental professionals focusing on innovation, continuing education, and networking. PreXion showcased solutions transforming dental radiology, specifically mentioning: - Excelsior MAX - Evolve Sensor - Evolve X-Ray - Evolve Scan The event featured over 450 exhibitors and 180 continuing education courses, providing an opportunity to present PreXion's technology to the international market. We continue expanding our ",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "PreXion was present at one of the world’s largest dental events! We participated in the California Dental Association – The Art and Science of Dentistry event, held in Anaheim, California (USA), bringing together professionals from across the dental community in a complete experience focused on innovation, continuing education, and networking. During the event, we showcased Prexion solutions that are transforming dental radiology, highlighting: 🔹 Excelsior MAX 🔹 Evolve Sensor 🔹 Evolve X-Ray 🔹 Evolve Scan With more than 450 exhibitors and over 180 continuing education (C.E.) courses , the event was an excellent opportunity to strengthen connections, exchange experiences, and present to the international market the technology and quality that are part of Prexion. We continue expanding our international presence, advancing healthcare worldwide, and strengthening connections that drive the future of dentistry!"
      },
      {
        "kind": "heading",
        "text": "PreXion was present at one of the world’s largest dental events!"
      },
      {
        "kind": "paragraph",
        "text": "We participated in the California Dental Association – The Art and Science of Dentistry event, held in Anaheim, California (USA), bringing together professionals from across the dental community in a complete experience focused on innovation, continuing education, and networking."
      },
      {
        "kind": "paragraph",
        "text": "During the event, we showcased Prexion solutions that are transforming dental radiology, highlighting:"
      },
      {
        "kind": "paragraph",
        "text": "🔹 Excelsior MAX 🔹 Evolve Sensor 🔹 Evolve X-Ray 🔹 Evolve Scan"
      },
      {
        "kind": "paragraph",
        "text": "With more than 450 exhibitors and over 180 continuing education (C.E.) courses , the event was an excellent opportunity to strengthen connections, exchange experiences, and present to the international market the technology and quality that are part of Prexion."
      },
      {
        "kind": "heading",
        "text": "We continue expanding our international presence, advancing healthcare worldwide, and strengthening connections that drive the future of dentistry!"
      }
    ],
    "callsToAction": "- Formulário: Subscribe today - Telefone (Contact Us): 855-PREXION - Telefone (Client Support): (650) 212-0314 - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.prexion.com%2Fthe-art-and-science-of-dentistry-2026-anaheim-ca%2F&t=The%20Art%20and%20Science%20of%20Dentistry%202026%20%26%238211%3B%20Anaheim%20%26%238211%3B%20CA",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.prexion.com%2Fthe-art-and-science-of-dentistry-2026-anaheim-ca%2F&title=The%20Art%20and%20Science%20of%20Dentistry%202026%20%26%238211%3B%20Anaheim%20%26%238211%3B%20CA&summary=PreXion%20was%20present%20at%20one%20of%20the%20world%E2%80%99s%20largest%20dental%20events%21%26nbsp%3BWe%20participated%20in%20the%20California%20Dental%20Association%20%E2%80%93%20The%20Art%20and%20Science%20of%20Dentistry%20event%2C%20held%20in%20Anaheim%2C%20California%20%28USA%29%2C%20bringing%20together%20professionals%20from%20across%20the%20dental%20community%20in%20a%20complete%20experience%20focused%20on%20innovation%2C%20continuing%20education%2C%20and%20networking.During%20the%20event%2C%20we%20showcased%20Prexion%20solutions",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [],
    "images": [
      {
        "alt": "The Art and Science of Dentistry 2026 – Anaheim – CA",
        "url": "/manus-storage/10a3133ad618-California_banner-300x200_1848b6b8.jpg"
      }
    ],
    "migrationAction": "consolidate",
    "notes": "Página de evento noticiando a participação da PreXion no California Dental Association em maio de 2026. É um artigo/notícia que cita vários produtos (Excelsior MAX, Evolve Sensor, Evolve X-Ray, Evolve Scan). Há duplicação de informações no rodapé. Como o evento já ocorreu ou é específico de uma data, pode ser consolidado em uma página de notícias/eventos passados no novo site."
  },
  "/training-videos": {
    "sourceUrl": "https://www.prexion.com/training-videos/",
    "route": "/training-videos",
    "canonicalTarget": "/support/training",
    "title": "Training Videos",
    "type": "education",
    "relevance": "high",
    "summary": "PREXION TRAINING VIDEOS Make the most out of your PreXion product software. PreXion’s technology is designed to empower users with powerful and precise imaging. Part of this goal is providing the proper training and education to those who use and operate our CBCT scanners. To that end, we have created an extensive series of training videos to ensure that users are fully equipped to make the most of their purchase. A página lista diversos vídeos de treinamento, incluindo webinars com especialistas Dr. Tony Tomaro, Dr. Lou Graham e tutoriais práticos sobre como capturar imagens 15x13 FOV, Full Arch, Panorex , configurar templates 3D, usar funções do software Alt Key, Annotate, CPR, Crop, Fusion Stitch, Implant Ed",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "PREXION TRAINING VIDEOS Make the most out of your PreXion product software. PreXion’s technology is designed to empower users with powerful and precise imaging. Part of this goal is providing the proper training and education to those who use and operate our CBCT scanners. To that end, we have created an extensive series of training videos to ensure that users are fully equipped to make the most of their purchase. “The GP’s Guide to Cone Beam Everyday Use” with Dr. Tony Tomaro “Integrating CBCT into Your Practice” with Dr. Lou Graham “Emergency Exams During COVID-19. The New Norm” with Dr. Lou Graham How to Capture a 15×13 FOV Image How to Capture a Full Arch Scan How to Capture a Panorex Image 3D Settings and Templates Alt Key and Pinpoint in 3 Planar Views Annotate Text and Arrow Labels Capture Images to Print, Save or Email CPR Functions and Applications Create, Save and Recall Scenes Crop, 3D-slab and MIP Fusion Stitch Implant Editor Library Need support with your PreXion products? GET REMOTE SUPPORT Need support with your PreXion products? GET REMOTE SUPPORT Implant Editor Library Implant Planning Functions Mandibular Canal Marking Measurement Functions Mouse Functions –Adjusting Images Multi-data Loading Side-by-Side Patient Scans Multiplanar CT Slices and Crossbars Panoramic Image Functions Patient List Page Loading Pixel Density Tool – Color Template Raysum for Smoothing Images Find More Opportunities for Education LEARN MORE Find More Opportunities for Education LEARN MORE Stay on the Cutting Edge of Dentistry. Subscribe today."
      },
      {
        "kind": "heading",
        "text": "PREXION TRAINING VIDEOS"
      },
      {
        "kind": "heading",
        "text": "Make the most out of your PreXion product software."
      },
      {
        "kind": "paragraph",
        "text": "“The GP’s Guide to Cone Beam Everyday Use” with Dr. Tony Tomaro"
      },
      {
        "kind": "paragraph",
        "text": "“Integrating CBCT into Your Practice” with Dr. Lou Graham"
      },
      {
        "kind": "paragraph",
        "text": "“Emergency Exams During COVID-19. The New Norm” with Dr. Lou Graham"
      },
      {
        "kind": "paragraph",
        "text": "How to Capture a 15×13 FOV Image"
      },
      {
        "kind": "paragraph",
        "text": "How to Capture a Full Arch Scan"
      },
      {
        "kind": "paragraph",
        "text": "How to Capture a Panorex Image"
      },
      {
        "kind": "paragraph",
        "text": "3D Settings and Templates"
      },
      {
        "kind": "paragraph",
        "text": "Alt Key and Pinpoint in 3 Planar Views"
      },
      {
        "kind": "paragraph",
        "text": "Annotate Text and Arrow Labels"
      },
      {
        "kind": "paragraph",
        "text": "Capture Images to Print, Save or Email"
      },
      {
        "kind": "paragraph",
        "text": "CPR Functions and Applications"
      },
      {
        "kind": "paragraph",
        "text": "Create, Save and Recall Scenes"
      },
      {
        "kind": "paragraph",
        "text": "Crop, 3D-slab and MIP"
      },
      {
        "kind": "paragraph",
        "text": "Fusion Stitch"
      },
      {
        "kind": "paragraph",
        "text": "Implant Editor Library"
      },
      {
        "kind": "heading",
        "text": "Need support with your PreXion products?"
      },
      {
        "kind": "paragraph",
        "text": "Implant Planning Functions"
      },
      {
        "kind": "paragraph",
        "text": "Mandibular Canal Marking"
      },
      {
        "kind": "paragraph",
        "text": "Measurement Functions"
      },
      {
        "kind": "paragraph",
        "text": "Mouse Functions –Adjusting Images"
      },
      {
        "kind": "paragraph",
        "text": "Multi-data Loading Side-by-Side Patient Scans"
      },
      {
        "kind": "paragraph",
        "text": "Multiplanar CT Slices and Crossbars"
      },
      {
        "kind": "paragraph",
        "text": "Panoramic Image Functions"
      },
      {
        "kind": "paragraph",
        "text": "Patient List Page Loading"
      },
      {
        "kind": "paragraph",
        "text": "Pixel Density Tool – Color Template"
      },
      {
        "kind": "paragraph",
        "text": "Raysum for Smoothing Images"
      },
      {
        "kind": "heading",
        "text": "Find More Opportunities for Education"
      },
      {
        "kind": "heading",
        "text": "Stay on the Cutting Edge of Dentistry."
      },
      {
        "kind": "heading",
        "text": "Subscribe today."
      }
    ],
    "callsToAction": "- GET REMOTE SUPPORT: https://www.prexion.com/remote-support/ - LEARN MORE: https://www.prexion.com/education-and-support/ - Subscribe today. - 855-PREXION (tel:855PREXION) - Client Support: (650) 212-0314 (tel:6502120314) - 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "YouTube video player 7",
        "url": "https://www.youtube.com/embed/ZVuf8g6McZ0?wmode=transparent&autoplay=0"
      },
      {
        "label": "YouTube video player 8",
        "url": "https://www.youtube.com/embed/D0k_uQR81YU?wmode=transparent&autoplay=0"
      },
      {
        "label": "YouTube video player 9",
        "url": "https://www.youtube.com/embed/CswZyHJFCOQ?wmode=transparent&autoplay=0"
      },
      {
        "label": "YouTube video player 10",
        "url": "https://www.youtube.com/embed/I70n4B2QFsk?wmode=transparent&autoplay=0"
      },
      {
        "label": "YouTube video player 11",
        "url": "https://www.youtube.com/embed/XXkUMPKnpys?wmode=transparent&autoplay=0"
      },
      {
        "label": "YouTube video player 12",
        "url": "https://www.youtube.com/embed/NQXg2rvHQLk?wmode=transparent&autoplay=0"
      },
      {
        "label": "YouTube video player 13",
        "url": "https://www.youtube.com/embed/JssVRkZLe6g?wmode=transparent&autoplay=0"
      },
      {
        "label": "YouTube video player 14",
        "url": "https://www.youtube.com/embed/Nwaz2T2j2II?wmode=transparent&autoplay=0"
      },
      {
        "label": "YouTube video player 15",
        "url": "https://www.youtube.com/embed/N_V2Np9kYU4?wmode=transparent&autoplay=0"
      },
      {
        "label": "YouTube video player 16",
        "url": "https://www.youtube.com/embed/xJDO3jND690?wmode=transparent&autoplay=0"
      },
      {
        "label": "YouTube video player 17",
        "url": "https://www.youtube.com/embed/Js2Mc9aTgNA?wmode=transparent&autoplay=0"
      },
      {
        "label": "YouTube video player 18",
        "url": "https://www.youtube.com/embed/P4j0ZzzhGbg?wmode=transparent&autoplay=0"
      },
      {
        "label": "YouTube video player 19",
        "url": "https://www.youtube.com/embed/VU9OuIEsEvg?wmode=transparent&autoplay=0"
      },
      {
        "label": "YouTube video player 20",
        "url": "https://www.youtube.com/embed/sfb12KPAgk8?wmode=transparent&autoplay=0"
      },
      {
        "label": "YouTube video player 21",
        "url": "https://www.youtube.com/embed/PVjz6WDY0Y8?wmode=transparent&autoplay=0"
      },
      {
        "label": "GET REMOTE SUPPORT",
        "url": "https://www.prexion.com/remote-support/"
      },
      {
        "label": "GET REMOTE SUPPORT",
        "url": "https://www.prexion.com/remote-support/"
      },
      {
        "label": "YouTube video player 22",
        "url": "https://www.youtube.com/embed/PVjz6WDY0Y8?wmode=transparent&autoplay=0"
      },
      {
        "label": "YouTube video player 23",
        "url": "https://www.youtube.com/embed/O3SK2L3kqNM?wmode=transparent&autoplay=0"
      },
      {
        "label": "YouTube video player 24",
        "url": "https://www.youtube.com/embed/gYkRSYe7Ga0?wmode=transparent&autoplay=0"
      },
      {
        "label": "YouTube video player 25",
        "url": "https://www.youtube.com/embed/uAlnYViYUGM?wmode=transparent&autoplay=0"
      },
      {
        "label": "YouTube video player 26",
        "url": "https://www.youtube.com/embed/N0pR0X613JE?wmode=transparent&autoplay=0"
      },
      {
        "label": "YouTube video player 27",
        "url": "https://www.youtube.com/embed/ekmUCulM9SU?wmode=transparent&autoplay=0"
      },
      {
        "label": "YouTube video player 28",
        "url": "https://www.youtube.com/embed/TeZuuX7IOdg?wmode=transparent&autoplay=0"
      },
      {
        "label": "YouTube video player 29",
        "url": "https://www.youtube.com/embed/Zgp2i3pXRJA?wmode=transparent&autoplay=0"
      },
      {
        "label": "YouTube video player 30",
        "url": "https://www.youtube.com/embed/iBmWqZMStmc?wmode=transparent&autoplay=0"
      },
      {
        "label": "YouTube video player 31",
        "url": "https://www.youtube.com/embed/TAsriZk35CI?wmode=transparent&autoplay=0"
      },
      {
        "label": "YouTube video player 32",
        "url": "https://www.youtube.com/embed/FTOyHfrhwo0?wmode=transparent&autoplay=0"
      },
      {
        "label": "LEARN MORE",
        "url": "https://www.prexion.com/education-and-support/"
      },
      {
        "label": "LEARN MORE",
        "url": "https://www.prexion.com/education-and-support/"
      }
    ],
    "images": [],
    "migrationAction": "preserve-resource",
    "notes": "A página contém uma lista de vídeos de treinamento sobre o uso dos scanners CBCT da PreXion. Há duplicação no rodapé (links e contatos repetidos). O conteúdo é útil e deve ser preservado como recurso educacional para os usuários dos produtos."
  },
  "/upcoming_events": {
    "sourceUrl": "https://www.prexion.com/upcoming_events/",
    "route": "/upcoming_events",
    "canonicalTarget": "/events",
    "title": "Upcoming Events",
    "type": "event",
    "relevance": "medium",
    "summary": "EVENTS Connect with PreXion at one of these upcoming events. Recent Events - April 16-17 – American Assoc. of Endontists AAE – Salt Lake City, UT - May 14-16 – CDA Anaheim – Anaheim, CA - Jun 25-26 – Goetze Dental Annual Sales Meeting – Kansas City, MO - July 15-17- Atlanta Dental Annual Sales Meeting – Atlanta, GA - Aug 5-7 – Nashville Dental Annual Sales Meeting – Nashville, TN Next Events - Oct. 14-16 – Midwest Dental National Sales Meeting – Lake Conroe, TX - Nov 29-1 – Greater NY Dental Meeting – New York, NY Stay on the Cutting Edge of Dentistry. Subscribe today.",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "EVENTS Connect with PreXion at one of these upcoming events. Recent Events April 16-17 – American Assoc. of Endontists (AAE) – Salt Lake City, UT May 14-16 – CDA Anaheim – Anaheim, CA Jun 25-26 – Goetze Dental Annual Sales Meeting – Kansas City, MO July 15-17- Atlanta Dental Annual Sales Meeting – Atlanta, GA Aug 5-7 – Nashville Dental Annual Sales Meeting – Nashville, TN Next Events Oct. 14-16 – Midwest Dental National Sales Meeting – Lake Conroe, TX Nov 29-1 – Greater NY Dental Meeting – New York, NY Stay on the Cutting Edge of Dentistry. Subscribe today."
      },
      {
        "kind": "heading",
        "text": "EVENTS"
      },
      {
        "kind": "heading",
        "text": "Connect with PreXion at one of these upcoming events."
      },
      {
        "kind": "heading",
        "text": "Recent Events"
      },
      {
        "kind": "heading",
        "text": "Next Events"
      },
      {
        "kind": "heading",
        "text": "Stay on the Cutting Edge of Dentistry."
      },
      {
        "kind": "heading",
        "text": "Subscribe today."
      }
    ],
    "callsToAction": "- Contact Us: [855-PREXION](tel:855PREXION) - Client Support: [(650) 212-0314](tel:6502120314) - Address: 2077 Gateway Place, Suite 120, San Jose, CA 95110 - Subscribe today.",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [],
    "images": [
      {
        "alt": "Upcoming Events",
        "url": "/manus-storage/1d2f974540f9-banner-salt-lake-city-32-300x158_6a72182f.jpg"
      },
      {
        "alt": "Upcoming Events",
        "url": "/manus-storage/14d05745dcb7-May-14-16-CDA-Anaheim-Anaheim-CA-300x158_21d1f4ae.jpg"
      },
      {
        "alt": "Upcoming Events",
        "url": "/manus-storage/e55aa75602ae-Jun-25-26-Kansas-City-300x175_7ff71891.jpg"
      },
      {
        "alt": "Upcoming Events",
        "url": "/manus-storage/910cf3cf832d-July-15-17-Atlanta-300x192_2f11a329.jpg"
      },
      {
        "alt": "Upcoming Events",
        "url": "/manus-storage/f00474045440-Aug-5-7-Nashville-TN-300x185_89424b2c.jpg"
      },
      {
        "alt": "Upcoming Events",
        "url": "/manus-storage/593100fd2e9a-Oct-14-16-Lake-Conroe-TX-2-300x248_e8e43475.jpg"
      },
      {
        "alt": "Upcoming Events",
        "url": "/manus-storage/6d22af42aaca-Nov-29-1-New-York-300x167_f0900047.jpg"
      }
    ],
    "migrationAction": "consolidate",
    "notes": "Página lista eventos recentes e futuros da PreXion. Pode ser útil consolidar as informações de eventos em uma rota centralizada de novidades/eventos no novo site. O footer aparece duplicado no markdown extraído."
  },
  "/why-prexion": {
    "sourceUrl": "https://www.prexion.com/why-prexion/",
    "route": "/why-prexion",
    "canonicalTarget": "/about",
    "title": "Why Prexion?",
    "type": "institutional",
    "relevance": "high",
    "summary": "WHY PREXION? Imaging Technology Moving You Forward PreXion tem fornecido clareza e precisão para profissionais de odontologia desde 2007. A empresa, originada da TeraRecon, Inc., tem como foco elevar a tecnologia de imagem odontológica, revolucionando a imagem 3D cone beam computed tomography CBCT . What Sets Us Apart? Top-Quality 3D Imaging A PreXion oferece imagens claras e precisas na indústria a um preço incrível, permitindo um planejamento de tratamento mais preciso e melhores resultados clínicos. O PreXion3D Excelsior CBCT Scanner possui rotação de 360 graus, 512-1.024 visualizações projetadas, modo panorâmico 2D dedicado e detalhes claros com ponto focal de 0,3 mm e voxel de 0,08-0,2 mm. A versão com ane",
    "blocks": [
      {
        "kind": "paragraph",
        "text": "WHY PREXION? Imaging Technology Moving You Forward Delivering clarity and precision to dental professionals since 2007. PreXion delivers clarity and precision to dental professionals of all specialties at every touch point, from product research and 3D imaging solutions to education and support. Since its 2007 inception as a spinoff of TeraRecon, Inc., PreXion has been guided by one foundational core tenet: Make IT Visible. We strive to elevate dental imaging technology and could not be prouder of our contributions to revolutionizing 3D cone beam computed tomography (CBCT) imaging. EXPLORE ALL CBCT PRODUCTS What Sets Us Apart? Top-Quality 3D Imaging Diagnostically, 3D imaging is a must-have in today’s busy office setting. PreXion offers the clearest, most precise image in the industry at an incredible price point. The clarity of the image is unparalleled by competitor options and the precision is unrivaled. Analysis of an image this sharp means more precise treatment planning and the best possible clinical outcomes. With most imaging solutions, higher image quality requires higher radiation. Only PreXion offers high imaging with low radiation levels. The PreXion3D Excelsior CBCT Scanner features accurate 360-degree rotation, 512-1,024 projected views, a dedicated 2D pan mode option and the clearest detail with a 0.3mm focal spot and 0.08-0.2mm voxel. The PreXion3D Excelsior with cephalometric x-ray attachment features a true 2D ceph x-ray, dedicated panoramic mode and, an optional large field of view at 15cm x 13cm and a “ultra-fast” rapid mode for reduced radiation. Unmatched Commitment to Education PreXion has developed strong working relationships with key opinion leaders made up of both specialty and general practitioners that precisely understand the PreXion technology and resulting clinical outcomes firsthand by using PreXion CBCT in their own practices. These doctors offer PreXion customers hands-on courses nationwide on topics including Using 3D Imaging in Implant Dentistry, Better Endo Outcomes with CBCT and Using 3D Imaging to Transform Treatment Planning. This is among the most valuable 3D imaging education available today. Educational and instructional scan capturing videos are also available online, making it easy for PreXion customers and their teams to continuously access information they need. In the spirit of education, PreXion is committed to forming strong partnerships with continuing education organizations in the field of dental diagnostics and treatment planning, including Catapult Education, among others. Additionally, PreXion’s advisory board made up of industry experts and key opinion leaders propels the company and technology forward with an acute focus on continuing education supported by focused R&D and product improvement. Excellent Service PreXion is deeply committed to listening to the customer’s voice. The PreXion mission is to always be passionate about answering customer questions and delivering excellent troubleshooting. It is PreXion’s vision to build trust by providing each customer ideal support, precisely responding to every inquiry. PreXion customers have described the technical support team as steady, dependable and hardworking, with support technicians treating each customer as the most important one. While some competitors’ customers must go through distribution branches for support, PreXion customers are directly connected to PreXion-trained and employed technicians to access robust, timely and precise support. PreXion never contracts out support roles and only employs certified technicians. This ensures the technology will be back in optimum working order as quickly as possible. If an onsite visit is required due to a customer hardware issue, a technician will travel to the office for a part replacement within 24 to 48 hours. Once customers purchase PreXion, they rarely go to another brand, in part because of this unprecedented commitment to excellent customer service. What Sets Us Apart? Top-Quality 3D Imaging Diagnostically, 3D imaging is a must-have in today’s busy office setting. PreXion offers the clearest, most precise image in the industry at an incredible price point. The clarity of the image is unparalleled by competitor options and the precision is unrivaled. Analysis of an image this sharp means more precise treatment planning and the best possible clinical outcomes. With most imaging solutions, higher image quality requires higher radiation. Only PreXion offers high imaging with low radiation levels. The PreXion3D Excelsior CBCT Scanner features accurate 360-degree rotation, 512-1,024 projected views, a dedicated 2D pan mode option and the clearest detail with a 0.3mm focal spot and 0.08-0.2mm voxel. The PreXion3D Excelsior with cephalometric x-ray attachment features a true 2D ceph x-ray, dedicated panoramic mode and, an optional large field of view at 15cm x 13cm and a “ultra-fast” rapid mode for reduced radiation. Unmatched Commitment to Education PreXion has developed strong working relationships with key opinion leaders made up of both specialty and general practitioners that precisely understand the PreXion technology and resulting clinical outcomes firsthand by using PreXion CBCT in their own practices. These doctors offer PreXion customers hands-on courses nationwide on topics including Using 3D Imaging in Implant Dentistry, Better Endo Outcomes with CBCT and Using 3D Imaging to Transform Treatment Planning. This is among the most valuable 3D imaging education available today. Educational and instructional scan capturing videos are also available online, making it easy for PreXion customers and their teams to continuously access information they need. In the spirit of education, PreXion is committed to forming strong partnerships with continuing education organizations in the field of dental diagnostics and treatment planning, including Catapult Education, among others. Additionally, PreXion’s advisory board made up of industry experts and key opinion leaders propels the company and technology forward with an acute focus on continuing education supported by focused R&D and product improvement. Excellent Service PreXion is deeply committed to listening to the customer’s voice. The PreXion mission is to always be passionate about answering customer questions and delivering excellent troubleshooting. It is PreXion’s vision to build trust by providing each customer ideal support, precisely responding to every inquiry. PreXion customers have described the technical support team as steady, dependable and hardworking, with support technicians treating each customer as the most important one. While some competitors’ customers must go through distribution branches for support, PreXion customers are directly connected to PreXion-trained and employed technicians to access robust, timely and precise support. PreXion never contracts out support roles and only employs certified technicians. This ensures the technology will be back in optimum working order as quickly as possible. If an onsite visit is required due to a customer hardware issue, a technician will travel to the office for a part replacement within 24 to 48 hours. Once customers purchase PreXion, they rarely go to another brand, in part because of this unprecedented commitment to excellent customer service. What is the Industry Saying? What is the Industry Saying? “The ability to visualize the bone/root relationship is mission critical for our practice to better service our patients. The PreXion CBCT clearly shows the limitations of orthodontic tooth movement. I can’t imagine practicing without it!” – DR. JEFFREY C. MILLER Experience True Clarity & Precision Schedule a demo today. REQUEST A DEMO"
      },
      {
        "kind": "heading",
        "text": "WHY PREXION?"
      },
      {
        "kind": "heading",
        "text": "Imaging Technology Moving You Forward"
      },
      {
        "kind": "heading",
        "text": "Delivering clarity and precision to dental professionals since 2007."
      },
      {
        "kind": "paragraph",
        "text": "PreXion delivers clarity and precision to dental professionals of all specialties at every touch point, from product research and 3D imaging solutions to education and support. Since its 2007 inception as a spinoff of TeraRecon, Inc., PreXion has been guided by one foundational core tenet: Make IT Visible. We strive to elevate dental imaging technology and could not be prouder of our contributions to revolutionizing 3D cone beam computed tomography (CBCT) imaging."
      },
      {
        "kind": "heading",
        "text": "What Sets Us Apart?"
      },
      {
        "kind": "heading",
        "text": "Top-Quality 3D Imaging"
      },
      {
        "kind": "paragraph",
        "text": "Diagnostically, 3D imaging is a must-have in today’s busy office setting. PreXion offers the clearest, most precise image in the industry at an incredible price point. The clarity of the image is unparalleled by competitor options and the precision is unrivaled. Analysis of an image this sharp means more precise treatment planning and the best possible clinical outcomes. With most imaging solutions, higher image quality requires higher radiation. Only PreXion offers high imaging with low radiation levels. The PreXion3D Excelsior CBCT Scanner features accurate 360-degree rotation, 512-1,024 projected views, a dedicated 2D pan mode option and the clearest detail with a 0.3mm focal spot and 0.08-0.2mm voxel. The PreXion3D Excelsior with cephalometric x-ray attachment features a true 2D ceph x-ray, dedicated panoramic mode and, an optional large field of view at 15cm x 13cm and a “ultra-fast” rapid mode for reduced radiation."
      },
      {
        "kind": "heading",
        "text": "Unmatched Commitment to Education"
      },
      {
        "kind": "paragraph",
        "text": "PreXion has developed strong working relationships with key opinion leaders made up of both specialty and general practitioners that precisely understand the PreXion technology and resulting clinical outcomes firsthand by using PreXion CBCT in their own practices. These doctors offer PreXion customers hands-on courses nationwide on topics including Using 3D Imaging in Implant Dentistry, Better Endo Outcomes with CBCT and Using 3D Imaging to Transform Treatment Planning. This is among the most valuable 3D imaging education available today. Educational and instructional scan capturing videos are also available online, making it easy for PreXion customers and their teams to continuously access information they need. In the spirit of education, PreXion is committed to forming strong partnerships with continuing education organizations in the field of dental diagnostics and treatment planning, including Catapult Education, among others. Additionally, PreXion’s advisory board made up of industry experts and key opinion leaders propels the company and technology forward with an acute focus on continuing education supported by focused R&D and product improvement."
      },
      {
        "kind": "heading",
        "text": "Excellent Service"
      },
      {
        "kind": "paragraph",
        "text": "PreXion is deeply committed to listening to the customer’s voice. The PreXion mission is to always be passionate about answering customer questions and delivering excellent troubleshooting. It is PreXion’s vision to build trust by providing each customer ideal support, precisely responding to every inquiry. PreXion customers have described the technical support team as steady, dependable and hardworking, with support technicians treating each customer as the most important one. While some competitors’ customers must go through distribution branches for support, PreXion customers are directly connected to PreXion-trained and employed technicians to access robust, timely and precise support. PreXion never contracts out support roles and only employs certified technicians. This ensures the technology will be back in optimum working order as quickly as possible. If an onsite visit is required due to a customer hardware issue, a technician will travel to the office for a part replacement within 24 to 48 hours. Once customers purchase PreXion, they rarely go to another brand, in part because of this unprecedented commitment to excellent customer service."
      },
      {
        "kind": "heading",
        "text": "What is the Industry Saying?"
      },
      {
        "kind": "paragraph",
        "text": "“The ability to visualize the bone/root relationship is mission critical for our practice to better service our patients. The PreXion CBCT clearly shows the limitations of orthodontic tooth movement. I can’t imagine practicing without it!”"
      },
      {
        "kind": "heading",
        "text": "Experience True Clarity & Precision"
      },
      {
        "kind": "heading",
        "text": "Schedule a demo today."
      }
    ],
    "callsToAction": "- [EXPLORE ALL CBCT PRODUCTS](https://www.prexion.com/imaging-products/) - [REQUEST A DEMO](https://www.prexion.com/request-a-demo/) - Contact Us: [855-PREXION](tel:855PREXION) - Client Support: [(650) 212-0314](tel:6502120314) - Endereço: 2077 Gateway Place, Suite 120, San Jose, CA 95110",
    "downloads": [],
    "externalLinks": [
      "https://www.facebook.com/PreXionUSA/",
      "https://www.instagram.com/prexionusa/",
      "https://www.linkedin.com/company/prexion-cbct/",
      "https://www.youtube.com/prexioncbct"
    ],
    "links": [
      {
        "label": "EXPLORE ALL CBCT PRODUCTS",
        "url": "https://www.prexion.com/imaging-products/"
      },
      {
        "label": "REQUEST A DEMO",
        "url": "https://www.prexion.com/request-a-demo/"
      }
    ],
    "images": [
      {
        "alt": "cbct timeline of products",
        "url": "/manus-storage/1ebc9b97e93b-banner_linha_do_tempo_133d1735.jpg"
      },
      {
        "alt": "cbct scan",
        "url": "/manus-storage/ffbc42a5be65-Top-Quality-Imaging_14f01d0a.png"
      },
      {
        "alt": "why dentists choose prexion",
        "url": "/manus-storage/292679a61c1c-Commitment-To-Education_fd153722.png"
      },
      {
        "alt": "prexion support team cbct",
        "url": "/manus-storage/161aed3dfa72-PRE-Support_ce1e3978.jpg"
      },
      {
        "alt": "cbct scan in action",
        "url": "/manus-storage/ffbc42a5be65-Top-Quality-Imaging_14f01d0a.png"
      },
      {
        "alt": "why dentist choose prexion",
        "url": "/manus-storage/292679a61c1c-Commitment-To-Education_fd153722.png"
      },
      {
        "alt": "cbct support team",
        "url": "/manus-storage/161aed3dfa72-PRE-Support_ce1e3978.jpg"
      }
    ],
    "migrationAction": "preserve-resource",
    "notes": "A página contém duplicação clara do bloco \"What Sets Us Apart?\" (Top-Quality 3D Imaging, Unmatched Commitment to Education, Excellent Service). Além disso, o rodapé aparece duplicado no final da extração. O conteúdo é relevante, mas a duplicação deve ser corrigida na migração. O produto \"PreXion3D Excelsior CBCT Scanner\" e a versão com anexo cefalométrico são destacados."
  }
};
