(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/e88":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"10Zl":function(e,t,a){e.exports={header:"header-module--header--2Q3RK",active:"header-module--active--326IL",link:"header-module--link--1TPaE",linkhighlighted:"header-module--linkhighlighted--2vG_f"}},"11Im":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"social":[{"type":"slack","url":"https://slack.designersethiques.org","icon":"/assets/slack.svg"},{"type":"linkedin","url":"https://www.linkedin.com/company/designers-ethiques/","icon":"/assets/linkedin.svg"},{"type":"twitter","url":"https://twitter.com/designethique","icon":"/assets/twitter.svg"},{"type":"mastondon","url":"https://mastodon.design/@designersethiques","icon":"/assets/mastondon.svg"}]}},"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"tabs":[{"label":"A propos","url":"/a-propos","highlighted":false},{"label":"Programme","url":"/programme","highlighted":false},{"label":"Intervenants","url":"/intervenants","highlighted":false},{"label":"Organisateurs","url":"/organisateurs","highlighted":false},{"label":"Blog","url":"/blog","highlighted":false},{"label":"Billetterie","url":"/billetterie","highlighted":true}]}}}]}}}')},"32Gb":function(e,t,a){e.exports={articlesList:"articles-list-module--articlesList--o3zya"}},"3dzV":function(e,t,a){e.exports={container:"hero-module--container--3thX2",title:"hero-module--title--1ToHt",media:"hero-module--media--1q1ZW",withtitle:"hero-module--withtitle--154Qu",dark:"hero-module--dark--2eIxr",video:"hero-module--video--rO8y-",image:"hero-module--image--3o_Ex",play:"hero-module--play--3bN7P",side:"hero-module--side--3CfWm",big:"hero-module--big--2f0wv"}},"3giu":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a("91GP");var n=a("q1tI"),r=a.n(n),i=a("jFb6"),l=a("r1ID"),o=a.n(l);function s(e){var t;return e.src&&(t=""+(i.pathPrefix||"")+e.src),e.alt||console.error("You should provide an alt text"),e.cover?r.a.createElement("div",{className:o.a.background,title:e.alt,style:{backgroundImage:"url("+t+")"}}):r.a.createElement("img",Object.assign({},e,{src:t}))}},I4A6:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("q1tI"),r=a.n(n),i=a("Wbzz"),l=a("anrV"),o=a.n(l);function s(){return r.a.createElement("div",{className:o.a.logo},r.a.createElement(i.a,{to:"/"},r.a.createElement("span",{className:"logo"},"Ethics by Design")))}},K4Eh:function(e,t,a){e.exports={logo:"logo-designers-ethiques-module--logo--3jQyr"}},OGtf:function(e,t,a){var n=a("XKFU"),r=a("eeVq"),i=a("vhPU"),l=/"/g,o=function(e,t,a,n){var r=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(n).replace(l,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),n(n.P+n.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},"So3+":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a("nIY7");var n=a("q1tI"),r=a.n(n),i=a("3dzV"),l=a.n(i),o=a("3giu");function s(e){return r.a.createElement("article",{className:[l.a.container,e.dark&&l.a.dark].join(" ")},e.title&&r.a.createElement("div",{className:["bordered",l.a.title].join(" ")},e.title),r.a.createElement("div",{className:[l.a.media,e.title&&l.a.withtitle].join(" ")},r.a.createElement(o.a,{src:e.media,alt:e.title||e.sideTitle,cover:!0}),e.hasVideo&&r.a.createElement(o.a,{src:"/assets/play.png",alt:"Jouer la vidéo",className:l.a.play})),r.a.createElement("div",{className:["bordered",l.a.side,e.bigSide&&l.a.big].join(" ")},e.sideTitle&&r.a.createElement("header",null,e.sideTitle),e.sideHtml?r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.sideHtml}}):r.a.createElement("p",null,e.side)))}},UNbL:function(e,t,a){e.exports={footer:"footer-module--footer--2r2aa",footerSocial:"footer-module--footerSocial--1JFB1"}},WORS:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("91GP");var n=a("q1tI"),r=a.n(n);function i(e){return r.a.createElement("h2",Object.assign({},e,{style:Object.assign({marginBottom:"60px"},e.style)}),e.children)}},Wbzz:function(e,t,a){"use strict";a("xfY5"),a("q1tI");var n=a("+ZDr"),r=a.n(n);a.d(t,"a",(function(){return r.a}));a("lw3w"),a("emEt").default.enqueue},anrV:function(e,t,a){e.exports={logo:"logo-module--logo--RSQ2K"}},hTlr:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n=a("11Im"),r=a("q1tI"),i=a.n(r),l=(a("tUrg"),a("Wbzz")),o=a("I4A6"),s=a("10Zl"),c=a.n(s);function u(e){return i.a.createElement("header",{className:c.a.header},i.a.createElement(o.a,null),i.a.createElement("ul",null,e.pages.map((function(t){return i.a.createElement("li",{key:t.url,className:e.location&&e.location.pathname===t.url&&c.a.active||""},i.a.createElement(l.a,{to:t.url,className:c.a.link+" "+(t.highlighted&&c.a.linkhighlighted)},t.label))}))))}var d=a("nFkZ"),m=a("3giu"),g=a("UNbL"),f=a.n(g);function h(e){return i.a.createElement("footer",{className:f.a.footer},i.a.createElement("div",{className:f.a.logo},i.a.createElement(d.a,null)),i.a.createElement("div",{className:f.a.footerSocial},i.a.createElement("ul",null,e.networks.map((function(e){var t=e.url,a=e.icon,n=e.type;return i.a.createElement("li",{key:a},i.a.createElement("a",{href:t,target:"_blank",rel:"noopener"},i.a.createElement(m.a,{src:a,alt:"Logo "+n})))}))),i.a.createElement("p",null,i.a.createElement(l.a,{to:"/mentions-legales"},"Mentions légales"))))}a("rMck");var p=a("wxx3"),v=a.n(p);function E(e){var t=n.data;return i.a.createElement("div",{className:v.a.layout},i.a.createElement(u,{pages:t.allMarkdownRemark.edges[0].node.frontmatter.tabs,location:e.location}),e.children,i.a.createElement(h,{networks:t.site.siteMetadata.social}))}},jFb6:function(e,t){(function(t){e.exports={siteMetadata:{title:"Ethics by Design - 2020",social:[{type:"slack",url:"https://slack.designersethiques.org",icon:"/assets/slack.svg"},{type:"linkedin",url:"https://www.linkedin.com/company/designers-ethiques/",icon:"/assets/linkedin.svg"},{type:"twitter",url:"https://twitter.com/designethique",icon:"/assets/twitter.svg"},{type:"mastondon",url:"https://mastodon.design/@designersethiques",icon:"/assets/mastondon.svg"}]},plugins:[{resolve:"gatsby-source-filesystem",options:{name:"posts",path:t+"/data/posts"}},{resolve:"gatsby-source-filesystem",options:{name:"data",path:t+"/data",ignore:"**/*"}},"gatsby-transformer-remark","gatsby-plugin-styled-components"]}}).call(this,"/")},jOIl:function(e,t,a){e.exports={section:"section-module--section--32D5N",vertical:"section-module--vertical--2EcaV",black:"section-module--black--11X2B",container:"section-module--container--3j5n8",horizontal:"section-module--horizontal--2ZLGo"}},lw3w:function(e,t,a){var n;e.exports=(n=a("rzlk"))&&n.default||n},nFkZ:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI"),r=a.n(n),i=a("K4Eh"),l=a.n(i);function o(){return r.a.createElement("div",{className:l.a.logo},r.a.createElement("span",null,"designers"),r.a.createElement("span",null,"éthiques"))}},nIY7:function(e,t,a){"use strict";a("OGtf")("big",(function(e){return function(){return e(this,"big","","")}}))},p2y7:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),r=a.n(n),i=a("Wbzz"),l=a("32Gb"),o=a.n(l),s=a("3giu");function c(e){return r.a.createElement("div",{className:o.a.articlesList},r.a.createElement("ul",null,e.items.map((function(e){var t=e.path,a=e.title,n=e.author;return r.a.createElement("li",{key:t},r.a.createElement("article",null,r.a.createElement(i.a,{to:t},r.a.createElement("h3",null,a),r.a.createElement("span",null,"Par ",n),r.a.createElement(s.a,{src:"/assets/arrow-right.png",alt:"Flèche vers la droite"}))))}))))}},qncB:function(e,t,a){var n=a("XKFU"),r=a("vhPU"),i=a("eeVq"),l=a("/e88"),o="["+l+"]",s=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),u=function(e,t,a){var r={},o=i((function(){return!!l[e]()||"​"!="​"[e]()})),s=r[e]=o?t(d):l[e];a&&(r[a]=s),n(n.P+n.F*o,"String",r)},d=u.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(c,"")),e};e.exports=u},r1ID:function(e,t,a){e.exports={background:"prefixed-image-module--background--xEcEq"}},rMck:function(e,t,a){},rxcZ:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI"),r=a.n(n),i=a("jOIl"),l=a.n(i);function o(e){return r.a.createElement("section",{className:[l.a.section,e.dark&&l.a.black].join(" ")},r.a.createElement("div",{className:[l.a.container,e.vertical&&l.a.vertical,e.horizontal&&l.a.horizontal].join(" ")},e.children))}},rzlk:function(e,t,a){"use strict";a.r(t);a("91GP");var n=a("q1tI"),r=a.n(n),i=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},tUrg:function(e,t,a){"use strict";a("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},vx99:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return c}));var n=a("q1tI"),r=a.n(n),i=a("hTlr"),l=(a("So3+"),a("rxcZ")),o=a("WORS"),s=a("p2y7"),c="2196027451";t.default=function(e){var t=e.data.allMarkdownRemark.edges,a=e.location,n=t.map((function(e){return e.node.frontmatter}));return r.a.createElement(i.a,{location:a},r.a.createElement(l.a,null,r.a.createElement(o.a,null,"Articles"),r.a.createElement(s.a,{items:n})))}},wxx3:function(e,t,a){e.exports={layout:"layout-module--layout--2Ck4m"}},xfY5:function(e,t,a){"use strict";var n=a("dyZX"),r=a("aagx"),i=a("LZWt"),l=a("Xbzi"),o=a("apmT"),s=a("eeVq"),c=a("kJMx").f,u=a("EemH").f,d=a("hswa").f,m=a("qncB").trim,g=n.Number,f=g,h=g.prototype,p="Number"==i(a("Kuth")(h)),v="trim"in String.prototype,E=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){var a,n,r,i=(t=v?t.trim():m(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(a=t.charCodeAt(2))||120===a)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+t}for(var l,s=t.slice(2),c=0,u=s.length;c<u;c++)if((l=s.charCodeAt(c))<48||l>r)return NaN;return parseInt(s,n)}}return+t};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof g&&(p?s((function(){h.valueOf.call(a)})):"Number"!=i(a))?l(new f(E(t)),a,g):E(t)};for(var b,k=a("nh4g")?c(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;k.length>y;y++)r(f,b=k[y])&&!r(g,b)&&d(g,b,u(f,b));g.prototype=h,h.constructor=g,a("KroJ")(n,"Number",g)}}}]);
//# sourceMappingURL=component---src-pages-blog-js-053e38b6403ffcd44d66.js.map