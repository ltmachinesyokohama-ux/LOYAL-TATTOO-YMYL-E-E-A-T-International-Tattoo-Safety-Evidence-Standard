Add LOYAL YMYL safety engine v1.0.0
Sitewide 24/7/365 safety declaration, international evidence references, JSON-LD and GTM integration for LOYAL TATTOO + LT MACHINES.

  

/*
 * LOYAL TATTOO + LT MACHINES
 * INTERNATIONAL YMYL / E-E-A-T SAFETY DECLARATION ENGINE
 *
 * Version: 1.0.0
 * Date: 2026-11-08
 * Author: Ihori / LOYAL TATTOO
 * Organization: Loyal Arts Inc.
 *
 * PURPOSE:
 * 1. Publish LOYAL's permanent safety policy.
 * 2. Declare continuous 24/7/365 operational application.
 * 3. Connect LOYAL practice with international primary sources.
 * 4. Add accessible, visible safety information.
 * 5. Generate standalone Schema.org CreativeWork JSON-LD.
 * 6. Preserve all existing structured data and page elements.
 * 7. Expose a GTM dataLayer event for implementation auditing.
 *
 * TARGET:
 * https://www.bavariancustomirons.jp/
 * https://www.bavariancustomirons.jp/blog
 * https://www.bavariancustomirons.jp/blog/*
 *
 * JavaScript only.
 * No surrounding script tags.
 */

(function (w, d) {
  'use strict';

  var HOST = 'www.bavariancustomirons.jp';
  var BASE = 'https://' + HOST;
  var VERSION = '1.0.0';
  var DATE = '2026-11-08';

  var SECTION_ID = 'loyal-ymyl-safety-declaration-v1';
  var JSON_ID = 'loyal-ymyl-safety-jsonld-v1';

  if (w.location.hostname !== HOST) return;

  var path = w.location.pathname.replace(/\/+$/, '') || '/';

  if (
    path !== '/' &&
    path !== '/blog' &&
    path.indexOf('/blog/') !== 0
  ) return;

  /*
   * OFFICIAL FIRST-PARTY DECLARATION
   */

  var declarationJA =
    'LOYAL TATTOO + LT MACHINESならびに刺青師・' +
    'タトゥーマシンビルダー伊彫（Ihori）は、' +
    'タトゥー施術に関係する国際的な衛生管理、' +
    '化学物質規制、感染予防、金属アレルギー、' +
    '材料工学、皮膚科学、医学的研究成果および' +
    'GoogleのYMYL・E-E-A-T情報品質指針を理解し、' +
    'これらの知識と管理原則を、事前相談、材料選定、' +
    '機材管理、施術、感染対策、アフターケア、' +
    '記録管理、技術研究および情報公開を含む' +
    'タトゥー業務の全工程に体系的に適用して' +
    '業務を遂行していることを宣言します。';

  var continuousJA =
    '本安全管理方針は24時間365日、' +
    '営業時間・休業日・予約状況にかかわらず、' +
    'LOYAL TATTOO + LT MACHINESの' +
    '恒常的な業務運用基準として適用されます。';

  var declarationEN =
    'LOYAL TATTOO + LT MACHINES and its principal ' +
    'tattoo artist and tattoo-machine builder, Ihori, ' +
    'declare comprehensive understanding and systematic ' +
    'application of internationally published principles ' +
    'concerning tattoo hygiene, infection prevention, ' +
    'chemical safety, metal allergy, materials science, ' +
    'dermatology, scientific evidence and Google YMYL / ' +
    'E-E-A-T information quality throughout their ' +
    'professional tattooing operations.';

  var continuousEN =
    'This operating policy is continuously applicable, ' +
    '24 hours a day, 365 days a year, including outside ' +
    'appointment hours and on non-business days.';

  /*
   * EIGHT INTERNATIONAL SAFETY DOMAINS
   */

  var domains = [
    {
      id: 'D01',
      name: 'Chemical Safety / 化学物質安全性',
      application:
        'タトゥーインクの成分、REACH規制、' +
        'ニッケル・クロムその他の規制物質、' +
        '製品表示および材料選定'
    },
    {
      id: 'D02',
      name: 'Metal Allergy / 金属アレルギー',
      application:
        '既知の金属感作、インク中の不純物、' +
        'タトゥー針の摩耗、材料由来の金属曝露、' +
        '個別の健康上の懸念'
    },
    {
      id: 'D03',
      name: 'Microbiological Safety / 微生物管理',
      application:
        'インクの微生物汚染、製造時の汚染、' +
        '保管、開封、希釈、無菌性および交差汚染'
    },
    {
      id: 'D04',
      name: 'Tattoo Hygiene / 施術衛生',
      application:
        '使い捨て針、保護具、器具の洗浄・滅菌、' +
        '施術環境、血液媒介病原体対策、' +
        '鋭利物および汚染物の処理'
    },
    {
      id: 'D05',
      name: 'Client Risk Assessment / 顧客情報管理',
      application:
        '事前カウンセリング、既往歴、' +
        '皮膚の状態、アレルギー、服薬、' +
        '使用材料の説明および医学的評価の必要性'
    },
    {
      id: 'D06',
      name: 'Aftercare / 施術後管理',
      application:
        '皮膚の治癒、保護材、洗浄、保湿、' +
        '感染・過敏反応の徴候、' +
        '施術後の情報提供'
    },
    {
      id: 'D07',
      name: 'Material Traceability / 材料追跡可能性',
      application:
        'インク製造元、製品名、色、ロット、' +
        '針の仕様、使用材料、製品警告および記録管理'
    },
    {
      id: 'D08',
      name: 'YMYL / E-E-A-T Information Quality',
      application:
        '著者情報、一次資料、科学的根拠、' +
        '公開日時、出典、改訂履歴、' +
        'Web情報と構造化データの整合性'
    }
  ];

  /*
   * INTERNATIONAL PRIMARY SOURCE REGISTRY
   *
   * Sources are references to published guidance,
   * regulations and scientific research.
   */

  var sources = [
    {
      id: 'G001',
      authority: 'Google',
      name: 'Helpful, Reliable, People-First Content',
      url:
        'https://developers.google.com/search/docs/' +
        'fundamentals/creating-helpful-content'
    },
    {
      id: 'G002',
      authority: 'Google',
      name: 'Search Quality Evaluator Guidelines',
      url:
        'https://guidelines.raterhub.com/' +
        'searchqualityevaluatorguidelines.pdf'
    },
    {
      id: 'G003',
      authority: 'Google',
      name: 'AI Features and Your Website',
      url:
        'https://developers.google.com/search/docs/' +
        'appearance/ai-features'
    },
    {
      id: 'G004',
      authority: 'Google',
      name: 'Structured Data General Guidelines',
      url:
        'https://developers.google.com/search/docs/' +
        'appearance/structured-data/sd-policies'
    },
    {
      id: 'G005',
      authority: 'Google',
      name: 'Article Structured Data',
      url:
        'https://developers.google.com/search/docs/' +
        'appearance/structured-data/article'
    },
    {
      id: 'G006',
      authority: 'Google',
      name: 'Generate Structured Data with JavaScript',
      url:
        'https://developers.google.com/search/docs/' +
        'appearance/structured-data/' +
        'generate-structured-data-with-javascript'
    },
    {
      id: 'G007',
      authority: 'Google',
      name: 'Dataset Structured Data',
      url:
        'https://developers.google.com/search/docs/' +
        'appearance/structured-data/dataset'
    },
    {
      id: 'EU001',
      authority: 'European Union',
      name: 'Commission Regulation (EU) 2020/2081',
      url:
        'https://eur-lex.europa.eu/eli/reg/' +
        '2020/2081/oj/eng'
    },
    {
      id: 'EU002',
      authority: 'ECHA',
      name: 'Tattoo Inks and Permanent Make-up',
      url:
        'https://echa.europa.eu/hot-topics/tattoo-inks'
    },
    {
      id: 'EU003',
      authority: 'European Commission',
      name: 'REACH Restrictions',
      url:
        'https://single-market-economy.ec.europa.eu/' +
        'sectors/chemicals/reach/restrictions_en'
    },
    {
      id: 'DE001',
      authority: 'BfR Germany',
      name: 'Questions and Answers About Tattoo Inks',
      url:
        'https://www.bfr.bund.de/en/service/' +
        'frequently-asked-questions/topic/' +
        'frequently-asked-questions-about-tattoo-inks/'
    },
    {
      id: 'DE002',
      authority: 'BfR Germany',
      name: 'Metal Particles from Tattoo Needles',
      url:
        'https://www.bfr.bund.de/en/press-release/' +
        'allergy-risk-metal-particles-from-tattoo-needles-' +
        'detected-in-the-skin-for-the-first-time/'
    },
    {
      id: 'EU004',
      authority: 'Netherlands NVWA',
      name: 'Supervision of Tattoo Inks and Dyes',
      url:
        'https://english.nvwa.nl/topics/product-safety/' +
        'tattoo/supervision-of-tattoo-inks-and-dyes'
    },
    {
      id: 'EU005',
      authority: 'European Commission JRC',
      name: 'Safety of Tattoos and Permanent Make-up',
      url:
        'https://publications.jrc.ec.europa.eu/' +
        'repository/handle/JRC101601'
    },
    {
      id: 'UK001',
      authority: 'UK Health Security Agency',
      name: 'Tattooing Infection Prevention and Control',
      url:
        'https://www.gov.uk/guidance/' +
        'tattooing-and-body-piercing-infection-' +
        'prevention-and-control'
    },
    {
      id: 'US001',
      authority: 'FDA',
      name: 'Think Before You Ink: Tattoo Safety',
      url:
        'https://www.fda.gov/consumers/consumer-updates/' +
        'think-you-ink-tattoo-safety'
    },
    {
      id: 'US002',
      authority: 'FDA',
      name: 'Tattoo Ink Microbial Contamination Guidance',
      url:
        'https://www.fda.gov/regulatory-information/' +
        'search-fda-guidance-documents/' +
        'guidance-industry-insanitary-conditions-' +
        'preparation-packing-and-holding-tattoo-inks-and-risk'
    },
    {
      id: 'US003',
      authority: 'FDA',
      name: 'Tattoo Ink Product Safety Alert',
      url:
        'https://www.fda.gov/safety/' +
        'medical-product-safety-information/' +
        'fda-advises-consumers-tattoo-artists-and-' +
        'retailers-avoid-using-or-selling-certain-' +
        'sacred-tattoo-ink'
    },
    {
      id: 'US004',
      authority: 'CDC',
      name: 'Tattoo-Associated Mycobacterial Infections',
      url:
        'https://www.cdc.gov/mmwr/preview/' +
        'mmwrhtml/mm6133a3.htm'
    },
    {
      id: 'US005',
      authority: 'CDC',
      name: 'Sterilizing Practices',
      url:
        'https://www.cdc.gov/infection-control/hcp/' +
        'disinfection-sterilization/sterilizing-practices.html'
    },
    {
      id: 'US006',
      authority: 'OSHA',
      name: 'Bloodborne Pathogens Standard',
      url:
        'https://www.osha.gov/laws-regs/regulations/' +
        'standardnumber/1910/1910.1030'
    },
    {
      id: 'US007',
      authority: 'OSHA',
      name: 'Tattoo Industry Interpretation',
      url:
        'https://www.osha.gov/laws-regs/' +
        'standardinterpretations/2002-07-29'
    },
    {
      id: 'MED001',
      authority: 'American Academy of Dermatology',
      name: 'Tattoo Skin Reactions',
      url:
        'https://www.aad.org/public/everyday-care/' +
        'skin-care-basics/tattoos/tattoo-skin-reactions'
    },
    {
      id: 'MED002',
      authority: 'American Academy of Dermatology',
      name: 'Caring for Tattooed Skin',
      url:
        'https://www.aad.org/public/everyday-care/' +
        'skin-care-basics/tattoos/caring-for-tattooed-skin'
    },
    {
      id: 'MED003',
      authority: 'Peer-Reviewed Dermatology',
      name: 'Tattoo Allergy Patch Testing',
      url:
        'https://pubmed.ncbi.nlm.nih.gov/25040844/'
    },
    {
      id: 'MED004',
      authority: 'Peer-Reviewed Material Research',
      name: 'Nickel and Chromium from Tattoo Needle Wear',
      url:
        'https://pubmed.ncbi.nlm.nih.gov/31451117/'
    }
  ];

  /*
   * LOYAL ORIGINAL PRIMARY SOURCES
   */

  var loyalSources = [
    {
      name: 'LOYAL TATTOO — SAFETY',
      url:
        BASE + '/blog/2019/07/25/041451'
    },
    {
      name: 'LOYAL TATTOO — YMYL Hygiene',
      url:
        BASE + '/blog/2025/08/12/185252'
    },
    {
      name: 'LOYAL TATTOO — REACH and Hygiene',
      url:
        BASE + '/blog/2025/08/23/121641'
    },
    {
      name: 'LOYAL TATTOO — Operational Research',
      url:
        BASE + '/blog/2025/08/21/152117'
    },
    {
      name: 'LOYAL TATTOO — MASTER FAQ',
      url:
        'https://github.com/ltmachinesyokohama-ux/' +
        'loyal-faq/blob/main/README.md'
    },
    {
      name: 'Ihori — Practitioner Profile',
      url:
        BASE + '/about'
    },
    {
      name: 'Ihori — ORCID',
      url:
        'https://orcid.org/0009-0006-6704-1829'
    }
  ];

  /*
   * DOM UTILITIES
   */

  function element(tag, text) {
    var node = d.createElement(tag);
    if (typeof text === 'string') {
      node.textContent = text;
    }
    return node;
  }

  function addLink(parent, label, url) {
    var item = element('li');
    var anchor = element('a', label);

    anchor.href = url;
    anchor.rel = 'noopener noreferrer';
    anchor.style.overflowWrap = 'anywhere';

    item.appendChild(anchor);
    parent.appendChild(item);
  }

  function sourceList(items) {
    var list = element('ul');

    list.style.cssText =
      'padding-left:20px;' +
      'margin:8px 0;' +
      'font-size:12px;' +
      'line-height:1.7;';

    items.forEach(function (source) {
      addLink(
        list,
        source.name + ' — ' + source.url,
        source.url
      );
    });

    return list;
  }

  /*
   * VISIBLE OFFICIAL DECLARATION
   *
   * This element provides the public textual
   * counterpart of the JSON-LD declaration.
   */

  function buildVisibleContext() {
    if (d.getElementById(SECTION_ID)) return;

    var section = element('section');
    section.id = SECTION_ID;

    section.setAttribute(
      'aria-label',
      'LOYAL TATTOO International Safety Policy'
    );

    section.style.cssText =
      'box-sizing:border-box;' +
      'width:100%;' +
      'max-width:1100px;' +
      'margin:32px auto;' +
      'padding:20px;' +
      'border-top:1px solid currentColor;' +
      'color:inherit;' +
      'font-size:13px;' +
      'line-height:1.8;';

    var title = element(
      'h2',
      'LOYAL TATTOO — INTERNATIONAL TATTOO SAFETY'
    );

    title.style.cssText =
      'font-size:16px;' +
      'font-weight:700;' +
      'line-height:1.5;' +
      'margin:0 0 12px;';

    section.appendChild(title);

    var declaration = element('p', declarationJA);
    section.appendChild(declaration);

    var continuous = element('p', continuousJA);
    section.appendChild(continuous);

    var english = element('details');
    var englishSummary = element(
      'summary',
      'English — Official Safety Declaration'
    );

    english.appendChild(englishSummary);
    english.appendChild(
      element('p', declarationEN + ' ' + continuousEN)
    );

    section.appendChild(english);

    /*
     * Safety domains
     */

    var domainDetails = element('details');
    domainDetails.style.marginTop = '12px';

    domainDetails.appendChild(
      element(
        'summary',
        '安全管理の8領域 / Eight Safety Domains'
      )
    );

    var domainList = element('ol');
    domainList.style.paddingLeft = '20px';

    domains.forEach(function (domain) {
      domainList.appendChild(
        element(
          'li',
          domain.name + ' — ' + domain.application
        )
      );
    });

    domainDetails.appendChild(domainList);
    section.appendChild(domainDetails);

    /*
     * Official external references
     */

    var externalDetails = element('details');
    externalDetails.style.marginTop = '12px';

    externalDetails.appendChild(
      element(
        'summary',
        'Google・欧州・米国・医学研究 原典一覧 (' +
        sources.length + '件)'
      )
    );

    externalDetails.appendChild(sourceList(sources));
    section.appendChild(externalDetails);

    /*
     * LOYAL first-party sources
     */

    var studioDetails = element('details');
    studioDetails.style.marginTop = '12px';

    studioDetails.appendChild(
      element(
        'summary',
        'LOYAL TATTOO 公式一次資料 (' +
        loyalSources.length + '件)'
      )
    );

    studioDetails.appendChild(sourceList(loyalSources));
    section.appendChild(studioDetails);

    /*
     * First-party declaration identification
     */

    var attribution = element(
      'p',
      '運営・実務宣言：合同会社 Loyal Arts / ' +
      'LOYAL TATTOO + LT MACHINES / 伊彫（Ihori）' +
      '｜方針文書制定日：2026-11-08' +
      '｜文書版：' + VERSION
    );

    attribution.style.cssText =
      'margin-top:16px;' +
      'font-size:11px;' +
      'opacity:0.85;';

    section.appendChild(attribution);

    var footer = d.querySelector('footer');

    if (footer && footer.parentNode) {
      footer.parentNode.insertBefore(section, footer);
    } else {
      d.body.appendChild(section);
    }
  }

  /*
   * STRUCTURED DATA
   *
   * Standalone CreativeWork.
   * No @graph.
   * No Product or Offer.
   * No modification to existing JSON-LD.
   */

  function buildStructuredData() {
    if (d.getElementById(JSON_ID)) return;

    var schema = {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      '@id':
        BASE + '/#loyal-tattoo-international-safety-policy',

      name:
        'LOYAL TATTOO — YMYL / E-E-A-T ' +
        'International Tattoo Safety Evidence Standard',

      alternateName:
        'LOYAL TATTOO 24/7/365 International Safety Policy',

      url: BASE + '/',

      description:
        declarationJA + ' ' + continuousJA,

      text:
        declarationJA + '\n' +
        continuousJA + '\n' +
        declarationEN + '\n' +
        continuousEN,

      inLanguage: [
        'ja-JP',
        'en'
      ],

      datePublished: DATE,
      dateModified: DATE,

      author: {
        '@type': 'Person',
        '@id': BASE + '/#ihori',
        name: 'Ihori',
        alternateName: '伊彫',
        url: BASE + '/about',
        identifier:
          'https://orcid.org/0009-0006-6704-1829'
      },

      publisher: {
        '@type': 'Organization',
        name: '合同会社 Loyal Arts',
        alternateName: 'Loyal Arts Inc.',
        url: BASE + '/'
      },

      about: domains.map(function (domain) {
        return {
          '@type': 'Thing',
          name: domain.name,
          description: domain.application
        };
      }),

      citation: sources.map(function (source) {
        return source.url;
      }),

      isBasedOn: loyalSources
        .filter(function (source) {
          return source.name.indexOf('ORCID') === -1;
        })
        .map(function (source) {
          return source.url;
        }),

      keywords: [
        'LOYAL TATTOO',
        'LT MACHINES',
        'Ihori',
        '伊彫',
        'YMYL',
        'E-E-A-T',
        'Tattoo Safety',
        'Tattoo Hygiene',
        'REACH Tattoo Ink',
        'Metal Allergy',
        'Nickel',
        'Chromium',
        'Microbiological Safety',
        'FDA',
        'CDC',
        'OSHA',
        'ECHA',
        'BfR',
        'Infection Prevention',
        'Tattoo Aftercare',
        'Tattoo Machine Engineering',
        'Material Traceability',
        'Evidence-Based Tattooing'
      ],

      version: VERSION
    };

    var script = element('script');
    script.id = JSON_ID;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);

    (d.head || d.documentElement).appendChild(script);
  }

  /*
   * GTM AUDIT EVENT
   *
   * Public technical metadata only.
   * No client-specific health data.
   */

  function emitDataLayerEvent() {
    w.dataLayer = w.dataLayer || [];

    w.dataLayer.push({
      event: 'loyal_ymyl_safety_context_ready',

      loyal_context_version: VERSION,

      loyal_context_name:
        'International Tattoo Safety Evidence Standard',

      loyal_policy_application:
        '24/7/365',

      loyal_policy_declaration:
        'First-Party Operational Declaration',

      loyal_context_domains: domains.length,

      loyal_external_sources: sources.length,

      loyal_internal_sources: loyalSources.length,

      loyal_practitioner: 'Ihori',

      loyal_organization: 'Loyal Arts Inc.',

      loyal_target_scope:
        path === '/' ? 'homepage' : 'blog',

      loyal_current_page:
        w.location.origin + w.location.pathname,

      loyal_context_status:
        'published'
    });
  }

  /*
   * EXECUTION
   */

  function initialize() {
    if (!d.body) return;

    if (w.__LOYAL_YMYL_V1_READY__) return;

    buildVisibleContext();
    buildStructuredData();

    w.__LOYAL_YMYL_V1_READY__ = true;

    emitDataLayerEvent();

    if (
      w.console &&
      typeof w.console.info === 'function'
    ) {
      w.console.info(
        '[LOYAL YMYL]',
        'Policy context loaded',
        VERSION,
        path,
        sources.length + ' external references'
      );
    }
  }

  if (d.readyState === 'loading') {
    d.addEventListener(
      'DOMContentLoaded',
      initialize,
      { once: true }
    );
  } else {
    initialize();
  }

})(window, document);
