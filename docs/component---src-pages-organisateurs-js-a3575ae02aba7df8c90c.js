(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"10Zl":function(e,t,a){e.exports={header:"header-module--header--2Q3RK",active:"header-module--active--326IL",link:"header-module--link--1TPaE",linkhighlighted:"header-module--linkhighlighted--2vG_f"}},"425F":function(e,t,a){e.exports={speaker:"speaker-module--speaker--1jNly"}},"E/mu":function(e,t,a){e.exports={volunteers:"volunteers-module--volunteers--1U5mP"}},K4Eh:function(e,t,a){e.exports={logo:"logo-designers-ethiques-module--logo--3jQyr"}},NysD:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a("tUrg");var n=a("q1tI"),l=a.n(n),r=a("Wbzz");function c(e){return l.a.createElement("span",{className:"tag"},l.a.createElement(r.a,{to:e.link},e.text))}},OGtf:function(e,t,a){var n=a("XKFU"),l=a("eeVq"),r=a("vhPU"),c=/"/g,o=function(e,t,a,n){var l=String(r(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(n).replace(c,"&quot;")+'"'),o+">"+l+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),n(n.P+n.F*l((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},UNbL:function(e,t,a){e.exports={footer:"footer-module--footer--2r2aa",footerSocial:"footer-module--footerSocial--1JFB1"}},WORS:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("q1tI"),l=a.n(n);function r(e){return l.a.createElement("h1",null,e.children)}},Wbzz:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("+ZDr"),c=a.n(r);a.d(t,"a",(function(){return c.a}));a("lw3w"),a("emEt").default.enqueue,l.a.createContext({})},anrV:function(e,t,a){e.exports={logo:"logo-module--logo--RSQ2K"}},feoh:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return g}));var n=a("q1tI"),l=a.n(n),r=a("hTlr"),c=a("rxcZ"),o=a("iz4k"),i=a("NysD");function s(e){return l.a.createElement("article",{className:"patron"},l.a.createElement("div",{className:"patron-logo"},l.a.createElement("img",{src:e.picture})),l.a.createElement("div",{className:"patron-description"},l.a.createElement("p",{className:"patron-title"},e.title),e.links&&e.links.length>0?l.a.createElement("div",{className:"patron-social"},e.links.map((function(e){return l.a.createElement(i.a,{link:e.target,value:e.text})}))):null))}var u=a("WORS"),m=a("E/mu"),d=a.n(m);function f(e){return l.a.createElement("div",{className:d.a.volunteers},e.volunteers&&e.volunteers.length>0?l.a.createElement("ul",null,e.volunteers.map((function(e){return l.a.createElement("li",null,e.text)}))):l.a.createElement("p",null,"Pas de volontaires à afficher pour le moment"))}a("Wbzz");var E=a("nFkZ");function p(e){return l.a.createElement("div",{className:"box-designers-ethiques"},l.a.createElement("div",{className:"box"},l.a.createElement(E.a,null)),l.a.createElement("div",{className:"box"},e.content))}var g="3598618439";t.default=function(e){var t=e.data,a=e.location,n=t.allMarkdownRemark.edges[0].node.frontmatter;return l.a.createElement(r.a,{location:a},l.a.createElement(c.a,null,l.a.createElement(u.a,null,n.title),l.a.createElement("div",null,n.organizers.map((function(e){return l.a.createElement(o.a,e)})))),l.a.createElement(c.a,null,l.a.createElement(u.a,null,"Les Designers Ethiques"),l.a.createElement(p,null)),l.a.createElement(c.a,null,l.a.createElement(u.a,null,"Benevoles"),l.a.createElement(f,null)),l.a.createElement(c.a,{dark:!0},l.a.createElement(u.a,null,"Avec la contribution"),n.contributors.map((function(e){return l.a.createElement(o.a,e)}))),l.a.createElement(c.a,null,l.a.createElement(u.a,null,"Mécènes de compétences"),l.a.createElement("div",null,n.skillsPatrons.map((function(e){return l.a.createElement(s,e)})))),l.a.createElement(c.a,null,l.a.createElement(u.a,null,"Mécènes financiers"),l.a.createElement("div",null,n.moneyPatrons.map((function(e){return l.a.createElement(s,e)})))))}},hTlr:function(e,t,a){"use strict";a.d(t,"a",(function(){return k}));var n=a("uBvS"),l=a("q1tI"),r=a.n(l),c=(a("tUrg"),a("Wbzz")),o=a("anrV"),i=a.n(o);function s(){return r.a.createElement("div",{className:i.a.logo},r.a.createElement(c.a,{to:"/"},r.a.createElement("span",{className:"logo"},"Ethics by Design")))}var u=a("10Zl"),m=a.n(u);function d(e){return r.a.createElement("header",{className:m.a.header},r.a.createElement(s,null),r.a.createElement("ul",null,e.pages.map((function(t){return r.a.createElement("li",{key:t.url,className:e.location&&e.location.pathname===t.url&&m.a.active||""},r.a.createElement(c.a,{to:t.url,className:m.a.link+" "+(t.highlighted&&m.a.linkhighlighted)},t.label))}))))}var f=a("nFkZ"),E=a("UNbL"),p=a.n(E);function g(e){return r.a.createElement("footer",{className:p.a.footer},r.a.createElement("div",{className:p.a.logo},r.a.createElement(f.a,null)),r.a.createElement("div",{className:p.a.footerSocial},r.a.createElement("ul",null,e.networks.map((function(e){var t=e.url,a=e.icon;return r.a.createElement("li",{key:a},r.a.createElement("a",{href:t,target:"_blank",rel:"noopener"},r.a.createElement("img",{src:a})))}))),r.a.createElement("p",null,r.a.createElement(c.a,{to:"/mentions-legales"},"Mentions légales"))))}a("rMck");var v=a("wxx3"),h=a.n(v);function k(e){var t=n.data;return r.a.createElement("div",{className:h.a.layout},r.a.createElement(d,{pages:t.allMarkdownRemark.edges[0].node.frontmatter.tabs,location:e.location}),e.children,r.a.createElement(g,{networks:t.site.siteMetadata.social}))}},iz4k:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("f3/d");var n=a("q1tI"),l=a.n(n),r=a("NysD"),c=a("425F"),o=a.n(c);function i(e){var t=e.cut?"full-width":"pulled-up";return l.a.createElement("article",{className:o.a.speaker},l.a.createElement("img",{src:e.picture_url}),l.a.createElement("div",{className:t},l.a.createElement("p",{className:"speaker-name"},e.name),l.a.createElement("p",{className:"speaker-title"},e.title)),e.cut?null:l.a.createElement("div",null,l.a.createElement("p",null,e.description),e.links&&e.links.length>0?l.a.createElement("div",{className:"speaker-social"},e.links.map((function(e){return l.a.createElement(r.a,{link:e.target,value:e.text})}))):null))}},jOIl:function(e,t,a){e.exports={section:"section-module--section--32D5N",vertical:"section-module--vertical--2EcaV",black:"section-module--black--11X2B",container:"section-module--container--3j5n8"}},lw3w:function(e,t,a){var n;e.exports=(n=a("rzlk"))&&n.default||n},nFkZ:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI"),l=a.n(n),r=a("K4Eh"),c=a.n(r);function o(){return l.a.createElement("div",{className:c.a.logo},l.a.createElement("span",null,"designers"),l.a.createElement("span",null,"éthiques"))}},rMck:function(e,t,a){},rxcZ:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI"),l=a.n(n),r=a("jOIl"),c=a.n(r);function o(e){return l.a.createElement("section",{className:[c.a.section,e.dark&&c.a.black].join(" ")},l.a.createElement("div",{className:[c.a.container,e.vertical&&c.a.vertical].join(" ")},e.children))}},rzlk:function(e,t,a){"use strict";a.r(t);a("91GP");var n=a("q1tI"),l=a.n(n),r=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?l.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null}},tUrg:function(e,t,a){"use strict";a("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},uBvS:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"social":[{"type":"slack","url":"https://slack.designersethiques.org","icon":"/assets/slack.svg"},{"type":"linkedin","url":"https://www.linkedin.com/company/designers-ethiques/","icon":"/assets/linkedin.svg"},{"type":"twitter","url":"https://twitter.com/designethique","icon":"/assets/twitter.svg"},{"type":"mastondon","url":"https://mastodon.design/@designersethiques","icon":"/assets/mastondon.svg"}]}},"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"tabs":[{"label":"A propos","url":"/a-propos","highlighted":null},{"label":"Programme","url":"/programme","highlighted":null},{"label":"Intervenants","url":"/intervenants","highlighted":null},{"label":"Organisateurs","url":"/organisateurs","highlighted":null},{"label":"Billetterie","url":"/billetterie","highlighted":true}]}}}]}}}')},wxx3:function(e,t,a){e.exports={layout:"layout-module--layout--2Ck4m"}}}]);
//# sourceMappingURL=component---src-pages-organisateurs-js-a3575ae02aba7df8c90c.js.map