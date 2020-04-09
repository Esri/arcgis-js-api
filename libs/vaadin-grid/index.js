// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define((function(){"use strict";class e extends HTMLElement{static get version(){return"1.6.0"}}customElements.define("vaadin-lumo-styles",e);
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
let t,i=null,s=window.HTMLImports&&window.HTMLImports.whenReady||null;function r(e){requestAnimationFrame((function(){s?s(e):(i||(i=new Promise(e=>{t=e}),"complete"===document.readyState?t():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&t()})),i.then((function(){e&&e()})))}))}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */const n="__shadyCSSCachedStyle";let o=null,a=null;class l{constructor(){this.customStyles=[],this.enqueued=!1,r(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&a&&(this.enqueued=!0,r(a))}addCustomStyle(e){e.__seenByShadyCSS||(e.__seenByShadyCSS=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[n])return e[n];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const i=e[t];if(i[n])continue;const s=this.getStyleForCustomStyle(i);if(s){const e=s.__appliedElement||s;o&&o(e),i[n]=e}}return e}}l.prototype.addCustomStyle=l.prototype.addCustomStyle,l.prototype.getStyleForCustomStyle=l.prototype.getStyleForCustomStyle,l.prototype.processStyles=l.prototype.processStyles,Object.defineProperties(l.prototype,{transformCallback:{get:()=>o,set(e){o=e}},validateCallback:{get:()=>a,set(e){let t=!1;a||(t=!0),a=e,t&&this.enqueueDocumentValidation()}}});
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
const h=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,d=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,c=/@media\s(.*)/;
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
function u(e,t){for(let i in t)null===i?e.style.removeProperty(i):e.style.setProperty(i,t[i])}function p(e,t){const i=window.getComputedStyle(e).getPropertyValue(t);return i?i.trim():""}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
const _=!(window.ShadyDOM&&window.ShadyDOM.inUse);let m,f;function g(e){m=(!e||!e.shimcssproperties)&&(_||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(f=window.ShadyCSS.cssBuild);const y=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?m=window.ShadyCSS.nativeCss:window.ShadyCSS?(g(window.ShadyCSS),window.ShadyCSS=void 0):g(window.WebComponents&&window.WebComponents.flags);const b=m,v=new l;
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,i){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,i){},styleSubtree(e,t){v.processStyles(),u(e,t)},styleElement(e){v.processStyles()},styleDocument(e){v.processStyles(),u(document.body,e)},getComputedStyleValue:(e,t)=>p(e,t),flushCustomStyles(){},nativeCss:b,nativeShadow:_,cssBuild:f,disableRuntime:y}),window.ShadyCSS.CustomStyleInterface=v,
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
window.JSCompiler_renameProperty=function(e,t){return e};
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
let A,C,w=/(url\()([^)]*)(\))/g,x=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function S(e,t){if(e&&x.test(e))return e;if("//"===e)return e;if(void 0===A){A=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",A="http://a/c%20d"===e.href}catch(e){}}if(t||(t=document.baseURI||window.location.href),A)try{return new URL(e,t).href}catch(t){return e}return C||(C=document.implementation.createHTMLDocument("temp"),C.base=C.createElement("base"),C.head.appendChild(C.base),C.anchor=C.createElement("a"),C.body.appendChild(C.anchor)),C.base.href=t,C.anchor.href=e,C.anchor.href||e}function P(e,t){return e.replace(w,(function(e,i,s,r){return i+"'"+S(s.replace(/["']/g,""),t)+"'"+r}))}function E(e){return e.substring(0,e.lastIndexOf("/")+1)}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */const T=!window.ShadyDOM;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss);let I=E(document.baseURI||window.location.href),O=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,z={},R={};class N extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let i=function(e){return z[e]||R[e.toLowerCase()]}(e);return i&&t?i.querySelector(t):i}return null}attributeChangedCallback(e,t,i,s){t!==i&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=S(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=E(t)}return this.__assetpath}register(e){var t;(e=e||this.id)&&(this.id=e,function(e,t){z[e]=R[e.toLowerCase()]=t}(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id))}}N.prototype.modules=z,customElements.define("dom-module",N);function k(e){return N.import(e)}function L(e){const t=P((e.body?e.body:e).textContent,e.baseURI),i=document.createElement("style");return i.textContent=t,i}function D(e){const t=e.trim().split(/\s+/),i=[];for(let e=0;e<t.length;e++)i.push(...M(t[e]));return i}function M(e){const t=k(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...H(t));const i=t.querySelector("template");i&&e.push(...F(i,t.assetpath)),t._styles=e}return t._styles}function F(e,t){if(!e._styles){const i=[],s=e.content.querySelectorAll("style");for(let e=0;e<s.length;e++){let r=s[e],n=r.getAttribute("include");n&&i.push(...D(n).filter((function(e,t,i){return i.indexOf(e)===t}))),t&&(r.textContent=P(r.textContent,t)),i.push(r)}e._styles=i}return e._styles}function H(e){const t=[],i=e.querySelectorAll("link[rel=import][type~=css]");for(let e=0;e<i.length;e++){let s=i[e];if(s.import){const e=s.import,i=s.hasAttribute("shady-unscoped");if(i&&!e._unscopedStyle){const t=L(e);t.setAttribute("shady-unscoped",""),e._unscopedStyle=t}else e._style||(e._style=L(e));t.push(i?e._unscopedStyle:e._style)}}return t}function B(e){let t=k(e);if(t&&void 0===t._cssText){let e=function(e){let t="",i=H(e);for(let e=0;e<i.length;e++)t+=i[e].textContent;return t}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */(t),i=t.querySelector("template");i&&(e+=function(e,t){let i="";const s=F(e,t);for(let e=0;e<s.length;e++){let t=s[e];t.parentNode&&t.parentNode.removeChild(t),i+=t.textContent}return i}(i,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}const $=window.ShadyCSS.CustomStyleInterface;class V extends HTMLElement{constructor(){super(),this._style=null,$.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute("include");return t&&(e.removeAttribute("include"),e.textContent=function(e){let t=e.trim().split(/\s+/),i="";for(let e=0;e<t.length;e++)i+=B(t[e]);return i}(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",V);const G=document.createElement("template");G.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Base (background) */\n      --lumo-base-color: #FFF;\n\n      /* Tint */\n      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);\n      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);\n      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);\n      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);\n      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);\n      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);\n      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);\n      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);\n      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);\n      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);\n      --lumo-tint: #FFF;\n\n      /* Shade */\n      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);\n      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);\n      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);\n      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);\n      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);\n      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);\n      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);\n      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);\n      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);\n      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);\n      --lumo-shade: hsl(214, 35%, 15%);\n\n      /* Contrast */\n      --lumo-contrast-5pct: var(--lumo-shade-5pct);\n      --lumo-contrast-10pct: var(--lumo-shade-10pct);\n      --lumo-contrast-20pct: var(--lumo-shade-20pct);\n      --lumo-contrast-30pct: var(--lumo-shade-30pct);\n      --lumo-contrast-40pct: var(--lumo-shade-40pct);\n      --lumo-contrast-50pct: var(--lumo-shade-50pct);\n      --lumo-contrast-60pct: var(--lumo-shade-60pct);\n      --lumo-contrast-70pct: var(--lumo-shade-70pct);\n      --lumo-contrast-80pct: var(--lumo-shade-80pct);\n      --lumo-contrast-90pct: var(--lumo-shade-90pct);\n      --lumo-contrast: var(--lumo-shade);\n\n      /* Text */\n      --lumo-header-text-color: var(--lumo-contrast);\n      --lumo-body-text-color: var(--lumo-contrast-90pct);\n      --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n      --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n      /* Primary */\n      --lumo-primary-color: hsl(214, 90%, 52%);\n      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);\n      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);\n      --lumo-primary-text-color: var(--lumo-primary-color);\n      --lumo-primary-contrast-color: #FFF;\n\n      /* Error */\n      --lumo-error-color: hsl(3, 100%, 61%);\n      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);\n      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);\n      --lumo-error-text-color: hsl(3, 92%, 53%);\n      --lumo-error-contrast-color: #FFF;\n\n      /* Success */\n      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */\n      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);\n      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);\n      --lumo-success-text-color: hsl(145, 100%, 32%);\n      --lumo-success-contrast-color: #FFF;\n    }\n  </style>\n</custom-style><dom-module id="lumo-color">\n  <template>\n    <style>\n      [theme~="dark"] {\n        /* Base (background) */\n        --lumo-base-color: hsl(214, 35%, 21%);\n\n        /* Tint */\n        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);\n        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);\n        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);\n        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);\n        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);\n        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);\n        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);\n        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);\n        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);\n        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);\n        --lumo-tint: hsl(214, 100%, 98%);\n\n        /* Shade */\n        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);\n        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);\n        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);\n        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);\n        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);\n        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);\n        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);\n        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);\n        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);\n        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);\n        --lumo-shade: hsl(214, 33%, 13%);\n\n        /* Contrast */\n        --lumo-contrast-5pct: var(--lumo-tint-5pct);\n        --lumo-contrast-10pct: var(--lumo-tint-10pct);\n        --lumo-contrast-20pct: var(--lumo-tint-20pct);\n        --lumo-contrast-30pct: var(--lumo-tint-30pct);\n        --lumo-contrast-40pct: var(--lumo-tint-40pct);\n        --lumo-contrast-50pct: var(--lumo-tint-50pct);\n        --lumo-contrast-60pct: var(--lumo-tint-60pct);\n        --lumo-contrast-70pct: var(--lumo-tint-70pct);\n        --lumo-contrast-80pct: var(--lumo-tint-80pct);\n        --lumo-contrast-90pct: var(--lumo-tint-90pct);\n        --lumo-contrast: var(--lumo-tint);\n\n        /* Text */\n        --lumo-header-text-color: var(--lumo-contrast);\n        --lumo-body-text-color: var(--lumo-contrast-90pct);\n        --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n        --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n        /* Primary */\n        --lumo-primary-color: hsl(214, 86%, 55%);\n        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);\n        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);\n        --lumo-primary-text-color: hsl(214, 100%, 70%);\n        --lumo-primary-contrast-color: #FFF;\n\n        /* Error */\n        --lumo-error-color: hsl(3, 90%, 63%);\n        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);\n        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);\n        --lumo-error-text-color: hsl(3, 100%, 67%);\n\n        /* Success */\n        --lumo-success-color: hsl(145, 65%, 42%);\n        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);\n        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);\n        --lumo-success-text-color: hsl(145, 85%, 47%);\n      }\n\n      html {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      [theme~="dark"] {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        color: var(--lumo-header-text-color);\n      }\n\n      a {\n        color: var(--lumo-primary-text-color);\n      }\n\n      blockquote {\n        color: var(--lumo-secondary-text-color);\n      }\n\n      code,\n      pre {\n        background-color: var(--lumo-contrast-10pct);\n        border-radius: var(--lumo-border-radius-m);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-color-legacy">\n  <template>\n    <style include="lumo-color">\n      :host {\n        color: var(--lumo-body-text-color) !important;\n        background-color: var(--lumo-base-color) !important;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(G.content);const j=document.createElement("template");j.innerHTML='<custom-style>\n  <style>\n    @font-face {\n      font-family: \'lumo-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIiwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2MAABd4h9To2WhlYWQAAA3kAAAAMQAAADYSnCkuaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh55IAsbWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wgc1Z9N0jpNnEL6kbRVS6HA2hQYGh9TGR1CbCqa2rXrWOkQE/sHNJgmtZvoVNZqE1B1DNHxzTQxCehUTYiJTQyENui0qSLezr3PduyQfgmRWOfde8+9551z7rnn/O4jLoJ/bRP0UaKQMLFJjpBAvphLZC3Dk0ok7WBzR2/upJs7Ryw/nfFbln/uuN/apCvwrKLrSvUqRufbm5pn0fs0w4gYxnGVP6qHnO4bWiDQGQgwtS6lm3lB3QoX1M2vwEmuzirF39y+Es2+DJ8d1pkyqBIqoze3D1+Zz4DrFoazxI8dWwMrDlZ2DMqQAR9AROsJU+2cmlTPazTco52F1xTa2a2+K8vvq92dVHmtLoPeQX/AZPRYGthDYOeZjBjKoFsVGulR3lWU95WeCK44qHU7MhWUGUKZDT3oKUcG2GWuh+EDDfUYA/jhAhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgRW95uEtpJ1Vfn9XiLriRBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKiflqHRSoWZc3m11Wa/fJdFgXD4sSYfleJBKd8GMz7J8dZn/cGRCcKGDnA2Ge3fKzcvlnTDNthGWLXzX/WaXtUAmRgeLlHSr30r0G9UTXMb0AtmwzOoy73fkSlHZkduw/TYuU9cAD4YutPoxTTsA3797wVr4Z/1NC5zARHr4vtxJjxIfiZMhMkbWk+14BnJZKwqGZwDfswLyxWDSg11rFLJF7Nopxjd1h1/QOT+oezgfu3Yq+Hk+duf5x+40o1GTkaIgikK/IEnC6aYxCUBaZJSN4XTYFjU/YMNIKqJwhDGOCCI8FDXnXmXjtGhGJyShqjAOnBOkW2JG9S7GgYeMWAU5JzhnWmBOaOM+CKEPoqSfFDC2Unq+DLlUgUVUFFLZGJg6jtlojsdsa8kPObPuJdi5dnBdBsLJMGTWDa4t2JvtwuPo9s+Y86suv/W33QG1rAaOAUV+vx4K6f2D04PVKlC7WLSrZzAi45ZV6lIC7WoXqmRyvUqoVwrzUoVsIjeTXWQv+RH5GTlBXiB/In8ln0IbBCAFOajAJrgZYyOHWqOfUe/aHjI12R6OQo1jCgt215l+4f6XPb+0MNou0V+43n2F77tSfRb24d7zitgnKmvYHs69zugaPvBwv6ioXkb2LdL65Atw51uLkXlu1bhMMRcXSPcYoqKIRlh34lQP8/5JbuUFye4vxD6/6MxFF11C0uVLr9Ulgw44tS3pMViNLUExbycFgLIct+QDMibRimx1ydUz8FXZiuOIDBOMVX2nUZc+huNE5XUJ81uiJoiabwqaVF0uacKbau/pl4R2VW0XXlJra6boVrYG646TF5NYzwy4vjENVrDlcNpZPl8DH6XX8XWCx0mvWVZY6KFLrvsY66/zPict5FnxaNUR/juvZCM3TvD60E2W1tZizbXTPDuabcm0nbbzpWKpmA1ayBQ8giedLUM+A0kNjBjQjmuYz7YrgIXYvmF63ZLBwSXrpn9Tb9wwdd/U1H0PMQK3XcO8ul3WT7PyPPdpy0TemKxNRcJNauiXJnnUDpUppQWs4SnUIy0EESGYqJYQLGHxzaGWwVIaS6Y7mQFM8ZjYDQ3axjf61SWjU33JwOZA1pwaG1L9mzf71aHRdX1JHw6Fp0aXhNwbqyeGNg4NbdzGCBxoz4ZXjy4Nu69Zr6sDY6vMrLU5nA1P8JkbdWXJ6ERfMryvNh1JfQ9+T4dIhGvK9w3dxjBBzatsQ/MlOHVIDnYpDz6odAXlQ01t2Pa5Iafd8MMpxAeDKP0C6CjgVLT5osB6icUx01lWjXxzT/GyRF2welEM5Z/7jG3VjQ1SrNn5IbyzOG5dobB3/QHxyZvsXcoz8IoEwS7plCg+zxHQk424q9BfEpkESJbFHQusDBSWFkuBkoPO0kLKwRVYjxGXlHTcTDQMJ/H6TX9afkO7mnraTO1feTnZAXLu4cp7HAXMmNG1yeFk9TgS/NHhZR/4QoBTr/ZB+6hCgyl15Nq1UbN6nE1/ZnP1U2cizCBpvs8cJQZJ4LkYx5N/yZPAUZNQQ0V4f3BQllWrK3YRzl30dOT6RVn2upNur6woSa8CqpdT/aKnBM4o3jNur9d9xqtUT6veBEt9Ca9at+ERzEEhUkR8sa5mQ4aVvJoVeEA8zI4ei5mULXFGyU7z/6TAeYLVcpzSWZY8PYYF5yrTV60sT0+XV141vX++Wf16V2bFeGVPZXxFpkvyeKTWLlzfW0mnKxsY6Y3294/0998SCfX1blm5pbcvFGlq/r07MRAMhYIDiW5JFKWW3vdrEpCsZSJG+om7Zu/PSScZJhNkLbmW5Wsr12pWqW5zKtlwRS4bFOxUw17mCzy6lskCDl1WYOGWDYrADrMA7BDDweWWNd5koiJnR1dz+ytLP2q0SqPB1lnK2ccB7RYe4FSoPks3iB3t4txTSHctb2sy1ivk0pvHuCNm6w1f6wxv3+OCgN78LqdQnUVh7R0oTAp0zOf2rbW770Vu5C2dIyGdTnHo8zSji7dppj0USoVCz+lhRMTh53Teq9VbGfbjuSbAooSdXayY4PYHg374C6f7gl1B/DXuJ4/QXxOBdJFJspFsI3egpoWUUCjlTIFnNYNl+ZyZKmBeYKGHkD1QyDlhaKbKwKcIJqJ4TLJ2OmdY/JWXae4DdGBw8HZ7eXcgFF2zr2SoalDry5iKqoa0Puhe3hPQ2s3elTYM+MI+n3rK0KgL7/La3GeMLt6m7u912vGnvtORiIa0qBmhqVi+XW9XNBmqb8eVgKzIHfGI5bNoG7X0UCzeISmqIcO/nY8FH7U8avX9fx/ST+hx0sezPw9Qy8Mum3GWf2N4Uy/yIYGVBXbJHWIZp7dfTcptdMTr9Qmq7DaiK/ukqCL4kt4RUfS5XPnMtmT22/mQFqF7emSqtrlu8SVElxDRJrZODkpuwe0VfTfjdEp1f7A7v+fozNBXUJ/6WTuK2TtFlpFVZAZ3LcFvUi1Z2p2YT+EMAkGJVStOzLTAPg4IqWIAlzRSjOBkl2zxj3TKycpzT/MnvX3uaSMWM+gU0rkXjohhefVRMaps3/kLMSKv23lT23uxQrkQjyOJleMDsdhAnD6ZGElWZ5MjCXzCE/hkWX+WF4knzGhVOyK2eQZekV3eyo0zL8kuYWCnDCvjjhAkcTPOBDXVdoav3HVcFnQjLvtV9S2p0zA6JegPwMQxt+yFb3ll9zGlq/5dRKb3cEyQYoaNYpharJ7xCB7AWxsLY3jjZXY0XsZj0Wjwc9I6PP/dKABnCZaqHpaZEACxk4ZeLZSKNgZABl+lYQX1sJQOSX3n6r410evcoud5JeAGUXVP9H1tZOKejTq4Ono0z0erro1FrnOpohva1d/hTdtVsQdKN5W9RlT3NjD0nznyKNTgKAMfWNWcyodV0IGLPIHOF0o4JyqufaK4z6WIIzuGh3d8c8cwQg8ER+OVxyrjdm8vNuhts4LoOihGxIMuUdgzwiYN7xhh1+oZnJNuTG7gQZvu4XWZ9GAZZjGEubwePqYhtKDTH+9VQkl17/iGybsnJ+8+sKtyPrcll9ty65Zsdst/9iqpEKh7M5VdBxh3csOdNc6tW3I1uyM1PzOXegSOrLFsFNI2O27M+TF2ApnN9MUv5ud6LjxIvEQnHRzxIu4IsA9MLFkJn2tcZoZ7ON7dXe7ujrc8HrusPKamlqXwd77lQUuLpilau4PUMapueBb7irU4RoUXEYXuVuIGlRGmOp+2lNkaRPVziOqmlaZvaqG4dFgSj0jxEJWrv12IUWntmw+rfQarRE0Aph4ocI6nlUlGqs+u3/+T/ethW62PpHp2eHbZstnh/wOO95yDAHicY2BkYGAAYi2NOJ94fpuvDNzML4AiDNc/fzqEoP+/Zp7KdAvI5WBgAokCAGkcDfgAAAB4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo8CoIKuArwC1ALlgu8eJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: "\\ea01";\n      --lumo-icons-align-left: "\\ea02";\n      --lumo-icons-align-right: "\\ea03";\n      --lumo-icons-angle-down: "\\ea04";\n      --lumo-icons-angle-left: "\\ea05";\n      --lumo-icons-angle-right: "\\ea06";\n      --lumo-icons-angle-up: "\\ea07";\n      --lumo-icons-arrow-down: "\\ea08";\n      --lumo-icons-arrow-left: "\\ea09";\n      --lumo-icons-arrow-right: "\\ea0a";\n      --lumo-icons-arrow-up: "\\ea0b";\n      --lumo-icons-bar-chart: "\\ea0c";\n      --lumo-icons-bell: "\\ea0d";\n      --lumo-icons-calendar: "\\ea0e";\n      --lumo-icons-checkmark: "\\ea0f";\n      --lumo-icons-chevron-down: "\\ea10";\n      --lumo-icons-chevron-left: "\\ea11";\n      --lumo-icons-chevron-right: "\\ea12";\n      --lumo-icons-chevron-up: "\\ea13";\n      --lumo-icons-clock: "\\ea14";\n      --lumo-icons-cog: "\\ea15";\n      --lumo-icons-cross: "\\ea16";\n      --lumo-icons-download: "\\ea17";\n      --lumo-icons-dropdown: "\\ea18";\n      --lumo-icons-edit: "\\ea19";\n      --lumo-icons-error: "\\ea1a";\n      --lumo-icons-eye: "\\ea1b";\n      --lumo-icons-eye-disabled: "\\ea1c";\n      --lumo-icons-menu: "\\ea1d";\n      --lumo-icons-minus: "\\ea1e";\n      --lumo-icons-ordered-list: "\\ea1f";\n      --lumo-icons-phone: "\\ea20";\n      --lumo-icons-photo: "\\ea21";\n      --lumo-icons-play: "\\ea22";\n      --lumo-icons-plus: "\\ea23";\n      --lumo-icons-redo: "\\ea24";\n      --lumo-icons-reload: "\\ea25";\n      --lumo-icons-search: "\\ea26";\n      --lumo-icons-undo: "\\ea27";\n      --lumo-icons-unordered-list: "\\ea28";\n      --lumo-icons-upload: "\\ea29";\n      --lumo-icons-user: "\\ea2a";\n    }\n  </style>\n</custom-style>',document.head.appendChild(j.content);const q=document.createElement("template");q.innerHTML="<custom-style>\n  <style>\n    html {\n      --lumo-size-xs: 1.625rem;\n      --lumo-size-s: 1.875rem;\n      --lumo-size-m: 2.25rem;\n      --lumo-size-l: 2.75rem;\n      --lumo-size-xl: 3.5rem;\n\n      /* Icons */\n      --lumo-icon-size-s: 1.25em;\n      --lumo-icon-size-m: 1.5em;\n      --lumo-icon-size-l: 2.25em;\n      /* For backwards compatibility */\n      --lumo-icon-size: var(--lumo-icon-size-m);\n    }\n  </style>\n</custom-style>",document.head.appendChild(q.content);const Y=document.createElement("template");Y.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>",document.head.appendChild(Y.content);const W=document.createElement("template");W.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Border radius */\n      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */\n      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */\n      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */\n      --lumo-border-radius: 0.25em; /* Deprecated */\n\n      /* Shadow */\n      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);\n      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);\n      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);\n      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);\n      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);\n\n      /* Clickable element cursor */\n      --lumo-clickable-cursor: default;\n    }\n  </style>\n</custom-style>",document.head.appendChild(W.content);const U=document.createElement("template");U.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Font families */\n      --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n      /* Font sizes */\n      --lumo-font-size-xxs: .75rem;\n      --lumo-font-size-xs: .8125rem;\n      --lumo-font-size-s: .875rem;\n      --lumo-font-size-m: 1rem;\n      --lumo-font-size-l: 1.125rem;\n      --lumo-font-size-xl: 1.375rem;\n      --lumo-font-size-xxl: 1.75rem;\n      --lumo-font-size-xxxl: 2.5rem;\n\n      /* Line heights */\n      --lumo-line-height-xs: 1.25;\n      --lumo-line-height-s: 1.375;\n      --lumo-line-height-m: 1.625;\n    }\n\n  </style>\n</custom-style><dom-module id="lumo-typography">\n  <template>\n    <style>\n      html {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      small,\n      [theme~="font-size-s"] {\n        font-size: var(--lumo-font-size-s);\n        line-height: var(--lumo-line-height-s);\n      }\n\n      [theme~="font-size-xs"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-weight: 600;\n        line-height: var(--lumo-line-height-xs);\n        margin-top: 1.25em;\n      }\n\n      h1 {\n        font-size: var(--lumo-font-size-xxxl);\n        margin-bottom: 0.75em;\n      }\n\n      h2 {\n        font-size: var(--lumo-font-size-xxl);\n        margin-bottom: 0.5em;\n      }\n\n      h3 {\n        font-size: var(--lumo-font-size-xl);\n        margin-bottom: 0.5em;\n      }\n\n      h4 {\n        font-size: var(--lumo-font-size-l);\n        margin-bottom: 0.5em;\n      }\n\n      h5 {\n        font-size: var(--lumo-font-size-m);\n        margin-bottom: 0.25em;\n      }\n\n      h6 {\n        font-size: var(--lumo-font-size-xs);\n        margin-bottom: 0;\n        text-transform: uppercase;\n        letter-spacing: 0.03em;\n      }\n\n      p,\n      blockquote {\n        margin-top: 0.5em;\n        margin-bottom: 0.75em;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      hr {\n        display: block;\n        align-self: stretch;\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      blockquote {\n        border-left: 2px solid var(--lumo-contrast-30pct);\n      }\n\n      b,\n      strong {\n        font-weight: 600;\n      }\n\n      /* RTL specific styles */\n\n      blockquote[dir="rtl"] {\n        border-left: none;\n        border-right: 2px solid var(--lumo-contrast-30pct);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(U.content);
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
class J{constructor(e){this.value=e.toString()}toString(){return this.value}}function X(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof J)return function(e){if(e instanceof J)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}const K=function(e,...t){const i=document.createElement("template");return i.innerHTML=t.reduce((t,i,s)=>t+X(i)+e[s+1],e[0]),i},Z=K`<dom-module id="lumo-checkbox" theme-for="vaadin-checkbox">
  <template>
    <style include="lumo-checkbox-style lumo-checkbox-effects">
      /* IE11 only */
      ::-ms-backdrop,
      [part="checkbox"] {
        line-height: 1;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-checkbox-style">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: default;
        outline: none;
      }

      [part="label"]:not([empty]) {
        margin: 0.1875em 0.875em 0.1875em 0.375em;
      }

      [part="checkbox"] {
        width: calc(1em + 2px);
        height: calc(1em + 2px);
        margin: 0.1875em;
        position: relative;
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-20pct);
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), background-color 0.15s;
        pointer-events: none;
        line-height: 1.2;
      }

      :host([indeterminate]) [part="checkbox"],
      :host([checked]) [part="checkbox"] {
        background-color: var(--lumo-primary-color);
      }

      /* Needed to align the checkbox nicely on the baseline */
      [part="checkbox"]::before {
        content: "\\2003";
      }

      /* Checkmark */
      [part="checkbox"]::after {
        content: "";
        display: inline-block;
        width: 0;
        height: 0;
        border: 0 solid var(--lumo-primary-contrast-color);
        border-width: 0.1875em 0 0 0.1875em;
        box-sizing: border-box;
        transform-origin: 0 0;
        position: absolute;
        top: 0.8125em;
        left: 0.5em;
        transform: scale(0.55) rotate(-135deg);
        opacity: 0;
      }

      :host([checked]) [part="checkbox"]::after {
        opacity: 1;
        width: 0.625em;
        height: 1.0625em;
      }

      /* Indeterminate checkmark */

      :host([indeterminate]) [part="checkbox"]::after {
        transform: none;
        opacity: 1;
        top: 45%;
        height: 10%;
        left: 22%;
        right: 22%;
        width: auto;
        border: 0;
        background-color: var(--lumo-primary-contrast-color);
        transition: opacity 0.25s;
      }

      /* Focus ring */

      :host([focus-ring]) [part="checkbox"] {
        box-shadow: 0 0 0 3px var(--lumo-primary-color-50pct);
      }

      /* Disabled */

      :host([disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
      }

      :host([disabled]) [part="label"] ::slotted(*) {
        color: inherit;
      }

      :host([disabled]) [part="checkbox"] {
        background-color: var(--lumo-contrast-10pct);
      }

      :host([disabled]) [part="checkbox"]::after {
        border-color: var(--lumo-contrast-30pct);
      }

      :host([indeterminate][disabled]) [part="checkbox"]::after {
        background-color: var(--lumo-contrast-30pct);
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-checkbox-effects">
  <template>
    <style>
      /* Transition the checkmark if activated with the mouse (disabled for grid select-all this way) */
      :host(:hover) [part="checkbox"]::after {
        transition: width 0.1s, height 0.25s;
      }

      /* Used for activation "halo" */
      [part="checkbox"]::before {
        color: transparent;
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: inherit;
        transform: scale(1.4);
        opacity: 0;
        transition: transform 0.1s, opacity 0.8s;
      }

      /* Hover */

      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
        background-color: var(--lumo-contrast-30pct);
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
          background-color: var(--lumo-contrast-20pct);
        }
      }

      /* Active */

      :host([active]) [part="checkbox"] {
        transform: scale(0.9);
        transition-duration: 0.05s;
      }

      :host([active][checked]) [part="checkbox"] {
        transform: scale(1.1);
      }

      :host([active]:not([checked])) [part="checkbox"]::before {
        transition-duration: 0.01s, 0.01s;
        transform: scale(0);
        opacity: 0.4;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(Z.content);
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
let Q=0;const ee=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let i=Q++;return function(s){let r=s.__mixinSet;if(r&&r[i])return s;let n=t,o=n.get(s);o||(o=e(s),n.set(s,o));let a=Object.create(o.__mixinSet||r||null);return a[i]=!0,o.__mixinSet=a,o}},te=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
function ie(e){return e.indexOf(".")>=0}function se(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function re(e,t){return 0===e.indexOf(t+".")}function ne(e,t){return 0===t.indexOf(e+".")}function oe(e,t,i){return t+i.slice(e.length)}function ae(e){if(Array.isArray(e)){let t=[];for(let i=0;i<e.length;i++){let s=e[i].toString().split(".");for(let e=0;e<s.length;e++)t.push(s[e])}return t.join(".")}return e}function le(e){return Array.isArray(e)?ae(e).split("."):e.toString().split(".")}function he(e,t,i){let s=e,r=le(t);for(let e=0;e<r.length;e++){if(!s)return;s=s[r[e]]}return i&&(i.path=r.join(".")),s}function de(e,t,i){let s=e,r=le(t),n=r[r.length-1];if(r.length>1){for(let e=0;e<r.length-1;e++){if(s=s[r[e]],!s)return}s[n]=i}else s[t]=i;return r.join(".")}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */const ce={},ue=/-[a-z]/g,pe=/([A-Z])/g;function _e(e){return ce[e]||(ce[e]=e.indexOf("-")<0?e:e.replace(ue,e=>e[1].toUpperCase()))}function me(e){return ce[e]||(ce[e]=e.replace(pe,"-$1").toLowerCase())}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */let fe=0,ge=0,ye=[],be=0,ve=document.createTextNode("");new window.MutationObserver((function(){const e=ye.length;for(let t=0;t<e;t++){let e=ye[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}ye.splice(0,e),ge+=e})).observe(ve,{characterData:!0});const Ae={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},Ce={run:e=>window.requestAnimationFrame(e),cancel(e){window.cancelAnimationFrame(e)}},we={run:e=>window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16),cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},xe={run:e=>(ve.textContent=be++,ye.push(e),fe++),cancel(e){const t=e-ge;if(t>=0){if(!ye[t])throw new Error("invalid async handle: "+e);ye[t]=null}}},Se=xe,Pe=ee(e=>class extends e{static createProperties(e){const t=this.prototype;for(let i in e)i in t||t._createPropertyAccessor(i)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){if(this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[e]){const t=this.constructor.attributeNameForProperty(e);this.__dataAttributes[t]=e}}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this._getProperty(e)},set:t?function(){}:function(t){this._setProperty(e,t)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,i){let s=this.__data[e],r=this._shouldPropertyChange(e,t,s);return r&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||e in this.__dataOld||(this.__dataOld[e]=s),this.__data[e]=t,this.__dataPending[e]=t),r}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Se.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const e=this.__data,t=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(e,t,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,i))}_shouldPropertiesChange(e,t,i){return Boolean(t)}_propertiesChanged(e,t,i){}_shouldPropertyChange(e,t,i){return i!==t&&(i==i||t==t)}attributeChangedCallback(e,t,i,s){t!==i&&this._attributeToProperty(e,i),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,i,s)}_attributeToProperty(e,t,i){if(!this.__serializing){const s=this.__dataAttributes,r=s&&s[e]||e;this[r]=this._deserializeValue(t,i||this.constructor.typeForProperty(r))}}_propertyToAttribute(e,t,i){this.__serializing=!0,i=arguments.length<3?this[e]:i,this._valueToNodeAttribute(this,i,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,i){const s=this._serializeValue(t);"class"!==i&&"name"!==i&&"slot"!==i||(e=te(e)),void 0===s?e.removeAttribute(i):e.setAttribute(i,s)}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}}),Ee={};let Te=HTMLElement.prototype;for(;Te;){let e=Object.getOwnPropertyNames(Te);for(let t=0;t<e.length;t++)Ee[e[t]]=!0;Te=Object.getPrototypeOf(Te)}const Ie=ee(e=>{const t=Pe(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(_e(e[t]))}static attributeNameForProperty(e){return me(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const i=this;i.hasAttribute(e)||this._valueToNodeAttribute(i,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}default:return super._serializeValue(e)}}_deserializeValue(e,t){let i;switch(t){case Object:try{i=JSON.parse(e)}catch(t){i=e}break;case Array:try{i=JSON.parse(e)}catch(t){i=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:i=isNaN(e)?String(e):Number(e),i=new Date(i);break;default:i=super._deserializeValue(e,t)}return i}_definePropertyAccessor(e,t){!function(e,t){if(!Ee[t]){let i=e[t];void 0!==i&&(e.__data?e._setPendingProperty(t,i):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=i))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}}),Oe={"dom-if":!0,"dom-repeat":!0};
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */let ze=!1,Re=!1;function Ne(e){(function(){if(!ze){ze=!0;const e=document.createElement("textarea");e.placeholder="a",Re=e.placeholder===e.textContent}return Re})()&&"textarea"===e.localName&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function ke(e){let t=e.getAttribute("is");if(t&&Oe[t]){let i=e;for(i.removeAttribute("is"),e=i.ownerDocument.createElement(t),i.parentNode.replaceChild(e,i),e.appendChild(i);i.attributes.length;)e.setAttribute(i.attributes[0].name,i.attributes[0].value),i.removeAttribute(i.attributes[0].name)}return e}function Le(e,t){let i=t.parentInfo&&Le(e,t.parentInfo);if(!i)return e;for(let e=i.firstChild,s=0;e;e=e.nextSibling)if(t.parentIndex===s++)return e}function De(e,t,i,s){s.id&&(t[s.id]=i)}function Me(e,t,i){if(i.events&&i.events.length)for(let s,r=0,n=i.events;r<n.length&&(s=n[r]);r++)e._addMethodEventListenerToNode(t,s.name,s.value,e)}function Fe(e,t,i){i.templateInfo&&(t._templateInfo=i.templateInfo)}const He=ee(e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let i=e._templateInfo={};i.nodeInfoList=[],i.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,i,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,i){return this._parseTemplateNode(e.content,t,i)}static _parseTemplateNode(e,t,i){let s=!1,r=e;return"template"!=r.localName||r.hasAttribute("preserve-content")?"slot"===r.localName&&(t.hasInsertionPoint=!0):s=this._parseTemplateNestedTemplate(r,t,i)||s,Ne(r),r.firstChild&&this._parseTemplateChildNodes(r,t,i),r.hasAttributes&&r.hasAttributes()&&(s=this._parseTemplateNodeAttributes(r,t,i)||s),s}static _parseTemplateChildNodes(e,t,i){if("script"!==e.localName&&"style"!==e.localName)for(let s,r=e.firstChild,n=0;r;r=s){if("template"==r.localName&&(r=ke(r)),s=r.nextSibling,r.nodeType===Node.TEXT_NODE){let i=s;for(;i&&i.nodeType===Node.TEXT_NODE;)r.textContent+=i.textContent,s=i.nextSibling,e.removeChild(i),i=s;if(t.stripWhiteSpace&&!r.textContent.trim()){e.removeChild(r);continue}}let o={parentIndex:n,parentInfo:i};this._parseTemplateNode(r,t,o)&&(o.infoIndex=t.nodeInfoList.push(o)-1),r.parentNode&&n++}}static _parseTemplateNestedTemplate(e,t,i){let s=e,r=this._parseTemplate(s,t);return(r.content=s.content.ownerDocument.createDocumentFragment()).appendChild(s.content),i.templateInfo=r,!0}static _parseTemplateNodeAttributes(e,t,i){let s=!1,r=Array.from(e.attributes);for(let n,o=r.length-1;n=r[o];o--)s=this._parseTemplateNodeAttribute(e,t,i,n.name,n.value)||s;return s}static _parseTemplateNodeAttribute(e,t,i,s,r){return"on-"===s.slice(0,3)?(e.removeAttribute(s),i.events=i.events||[],i.events.push({name:s.slice(3),value:r}),!0):"id"===s&&(i.id=r,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let t=this.constructor._parseTemplate(e),i=t.nodeInfoList,s=t.content||e.content,r=document.importNode(s,!0);r.__noInsertionPoint=!t.hasInsertionPoint;let n=r.nodeList=new Array(i.length);r.$={};for(let e,t=0,s=i.length;t<s&&(e=i[t]);t++){let i=n[t]=Le(r,e);De(0,r.$,i,e),Fe(0,i,e),Me(this,i,e)}return r=r,r}_addMethodEventListenerToNode(e,t,i,s){let r=function(e,t,i){return e=e._methodHost||e,function(t){e[i]?e[i](t,t.detail):console.warn("listener method `"+i+"` not defined")}}(s=s||e,0,i);return this._addEventListenerToNode(e,t,r),r}_addEventListenerToNode(e,t,i){e.addEventListener(t,i)}_removeEventListenerFromNode(e,t,i){e.removeEventListener(t,i)}});
/**
   * @fileoverview
   * @suppress {checkPrototypalTypes}
   * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
   * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
   * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
   * Google as part of the polymer project is also subject to an additional IP
   * rights grant found at http://polymer.github.io/PATENTS.txt
   */let Be=0;const $e={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Ve=/[A-Z]/;function Ge(e,t){let i=e[t];if(i){if(!e.hasOwnProperty(t)){i=e[t]=Object.create(e[t]);for(let e in i){let t=i[e],s=i[e]=Array(t.length);for(let e=0;e<t.length;e++)s[e]=t[e]}}}else i=e[t]={};return i}function je(e,t,i,s,r,n){if(t){let o=!1,a=Be++;for(let l in i)qe(e,t,a,l,i,s,r,n)&&(o=!0);return o}return!1}function qe(e,t,i,s,r,n,o,a){let l=!1,h=t[o?se(s):s];if(h)for(let t,d=0,c=h.length;d<c&&(t=h[d]);d++)t.info&&t.info.lastRun===i||o&&!Ye(s,t.trigger)||(t.info&&(t.info.lastRun=i),t.fn(e,s,r,n,t.info,o,a),l=!0);return l}function Ye(e,t){if(t){let i=t.name;return i==e||!(!t.structured||!re(i,e))||!(!t.wildcard||!ne(i,e))}return!0}function We(e,t,i,s,r){let n="string"==typeof r.method?e[r.method]:r.method,o=r.property;n?n.call(e,e.__data[o],s[o]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function Ue(e,t,i){let s=se(t);if(s!==t){return Je(e,me(s)+"-changed",i[t],t),!0}return!1}function Je(e,t,i,s){let r={value:i,queueProperty:!0};s&&(r.path=s),te(e).dispatchEvent(new CustomEvent(t,{detail:r}))}function Xe(e,t,i,s,r,n){let o=(n?se(t):t)!=t?t:null,a=o?he(e,o):e.__data[t];o&&void 0===a&&(a=i[t]),Je(e,r.eventName,a,o)}function Ke(e,t,i,s,r){let n=e.__data[t];O&&(n=O(n,r.attrName,"attribute",e)),e._propertyToAttribute(t,r.attrName,n)}function Ze(e,t,i,s,r){let n=nt(e,t,i,s,r),o=r.methodInfo;e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,n,!0):e[o]=n}function Qe(e,t,i,s,r,n,o){i.bindings=i.bindings||[];let a={kind:s,target:r,parts:n,literal:o,isCompound:1!==n.length};if(i.bindings.push(a),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(a)){let{event:e,negate:t}=a.parts[0];a.listenerEvent=e||me(r)+"-changed",a.listenerNegate=t}let l=t.nodeInfoList.length;for(let i=0;i<a.parts.length;i++){let s=a.parts[i];s.compoundIndex=i,et(e,t,a,s,l)}}function et(e,t,i,s,r){if(!s.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let n=s.dependencies,o={index:r,binding:i,part:s,evaluator:e};for(let i=0;i<n.length;i++){let s=n[i];"string"==typeof s&&(s=dt(s),s.wildcard=!0),e._addTemplatePropertyEffect(t,s.rootProperty,{fn:tt,info:o,trigger:s})}}}function tt(e,t,i,s,r,n,o){let a=o[r.index],l=r.binding,h=r.part;if(n&&h.source&&t.length>h.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let s=i[t];t=oe(h.source,l.target,t),a._setPendingPropertyOrPath(t,s,!1,!0)&&e._enqueueClient(a)}else{!function(e,t,i,s,r){r=function(e,t,i,s){if(i.isCompound){let r=e.__dataCompoundStorage[i.target];r[s.compoundIndex]=t,t=r.join("")}"attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t));return t}(t,r,i,s),O&&(r=O(r,i.target,i.kind,t));if("attribute"==i.kind)e._valueToNodeAttribute(t,r,i.target);else{let s=i.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[s]?t[$e.READ_ONLY]&&t[$e.READ_ONLY][s]||t._setPendingProperty(s,r)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,s,r)}}(e,a,l,h,r.evaluator._evaluateBinding(e,h,t,i,s,n))}}function it(e,t){if(t.isCompound){let i=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),s=t.parts,r=new Array(s.length);for(let e=0;e<s.length;e++)r[e]=s[e].literal;let n=t.target;i[n]=r,t.literal&&"property"==t.kind&&("className"===n&&(e=te(e)),e[n]=t.literal)}}function st(e,t,i){if(i.listenerEvent){let s=i.parts[0];e.addEventListener(i.listenerEvent,(function(e){!function(e,t,i,s,r){let n,o=e.detail,a=o&&o.path;a?(s=oe(i,s,a),n=o&&o.value):n=e.currentTarget[i],n=r?!n:n,t[$e.READ_ONLY]&&t[$e.READ_ONLY][s]||!t._setPendingPropertyOrPath(s,n,!0,Boolean(a))||o&&o.queueProperty||t._invalidateProperties()}(e,t,i.target,s.source,s.negate)}))}}function rt(e,t,i,s,r,n){n=t.static||n&&("object"!=typeof n||n[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:r,dynamicFn:n};for(let r,n=0;n<t.args.length&&(r=t.args[n]);n++)r.literal||e._addPropertyEffect(r.rootProperty,i,{fn:s,info:o,trigger:r});n&&e._addPropertyEffect(t.methodName,i,{fn:s,info:o})}function nt(e,t,i,s,r){let n=e._methodHost||e,o=n[r.methodName];if(o){let s=e._marshalArgs(r.args,t,i);return o.apply(n,s)}r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}const ot=[],at=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function lt(e){let t="";for(let i=0;i<e.length;i++){t+=e[i].literal||""}return t}function ht(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:ot};if(t[2].trim()){return function(e,t){return t.args=e.map((function(e){let i=dt(e);return i.literal||(t.static=!1),i}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function dt(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:t,value:"",literal:!1},s=t[0];switch("-"===s&&(s=t[1]),s>="0"&&s<="9"&&(s="#"),s){case"'":case'"':i.value=t.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(t),i.literal=!0}return i.literal||(i.rootProperty=se(t),i.structured=ie(t),i.structured&&(i.wildcard=".*"==t.slice(-2),i.wildcard&&(i.name=t.slice(0,-2)))),i}function ct(e,t,i){let s=he(e,i);return void 0===s&&(s=t[i]),s}function ut(e,t,i,s){e.notifyPath(i+".splices",{indexSplices:s}),e.notifyPath(i+".length",t.length)}function pt(e,t,i,s,r,n){ut(e,t,i,[{index:s,addedCount:r,removed:n,object:t,type:"splice"}])}const _t=ee(e=>{const t=He(Ie(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return $e}_initializeProperties(){super._initializeProperties(),mt.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[$e.READ_ONLY];for(let i in e)t&&t[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=e[i])}_addPropertyEffect(e,t,i){this._createPropertyAccessor(e,t==$e.READ_ONLY);let s=Ge(this,t)[e];s||(s=this[t][e]=[]),s.push(i)}_removePropertyEffect(e,t,i){let s=Ge(this,t)[e],r=s.indexOf(i);r>=0&&s.splice(r,1)}_hasPropertyEffect(e,t){let i=this[t];return Boolean(i&&i[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,$e.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,$e.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,$e.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,$e.COMPUTE)}_setPendingPropertyOrPath(e,t,i,s){if(s||se(Array.isArray(e)?e[0]:e)!==e){if(!s){let i=he(this,e);if(!(e=de(this,e,t))||!super._shouldPropertyChange(e,t,i))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,i))return function(e,t,i){let s=e.__dataLinkedPaths;if(s){let r;for(let n in s){let o=s[n];ne(n,t)?(r=oe(n,o,t),e._setPendingPropertyOrPath(r,i,!0,!0)):ne(o,t)&&(r=oe(o,n,t),e._setPendingPropertyOrPath(r,i,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,i);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,i){i===e[t]&&"object"!=typeof i||("className"===t&&(e=te(e)),e[t]=i)}_setPendingProperty(e,t,i){let s=this.__dataHasPaths&&ie(e),r=s?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,r[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),s?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(s||this[$e.NOTIFY]&&this[$e.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=i),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let i=e[t];i.__dataEnabled?i.__dataPending&&i._flushProperties():i._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let i in e)!t&&this[$e.READ_ONLY]&&this[$e.READ_ONLY][i]||this._setPendingPropertyOrPath(i,e[i],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,i){let s=this.__dataHasPaths;this.__dataHasPaths=!1,function(e,t,i,s){let r=e[$e.COMPUTE];if(r){let n=t;for(;je(e,r,n,i,s);)Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),n=e.__dataPending,e.__dataPending=null}}(this,t,i,s);let r=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(t,i,s),this._flushClients(),je(this,this[$e.REFLECT],t,i,s),je(this,this[$e.OBSERVE],t,i,s),r&&function(e,t,i,s,r){let n,o,a=e[$e.NOTIFY],l=Be++;for(let o in t)t[o]&&(a&&qe(e,a,l,o,i,s,r)||r&&Ue(e,o,i))&&(n=!0);n&&(o=e.__dataHost)&&o._invalidateProperties&&o._invalidateProperties()}(this,r,t,i,s),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,i){this[$e.PROPAGATE]&&je(this,this[$e.PROPAGATE],e,t,i);let s=this.__templateInfo;for(;s;)je(this,s.propertyEffects,e,t,i,s.nodeList),s=s.nextTemplateInfo}linkPaths(e,t){e=ae(e),t=ae(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=ae(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let i={path:""};ut(this,he(this,e,i),i.path,t)}get(e,t){return he(t||this,e)}set(e,t,i){i?de(i,e,t):this[$e.READ_ONLY]&&this[$e.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let i={path:""},s=he(this,e,i),r=s.length,n=s.push(...t);return t.length&&pt(this,s,i.path,r,t.length,[]),n}pop(e){let t={path:""},i=he(this,e,t),s=Boolean(i.length),r=i.pop();return s&&pt(this,i,t.path,i.length,0,[r]),r}splice(e,t,i,...s){let r,n={path:""},o=he(this,e,n);return t<0?t=o.length-Math.floor(-t):t&&(t=Math.floor(t)),r=2===arguments.length?o.splice(t):o.splice(t,i,...s),(s.length||r.length)&&pt(this,o,n.path,t,s.length,r),r}shift(e){let t={path:""},i=he(this,e,t),s=Boolean(i.length),r=i.shift();return s&&pt(this,i,t.path,0,0,[r]),r}unshift(e,...t){let i={path:""},s=he(this,e,i),r=s.unshift(...t);return t.length&&pt(this,s,i.path,0,t.length,[]),r}notifyPath(e,t){let i;if(1==arguments.length){let s={path:""};t=he(this,e,s),i=s.path}else i=Array.isArray(e)?ae(e):e;this._setPendingPropertyOrPath(i,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var i;this._addPropertyEffect(e,$e.READ_ONLY),t&&(this["_set"+(i=e,i[0].toUpperCase()+i.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,i){let s={property:e,method:t,dynamicFn:Boolean(i)};this._addPropertyEffect(e,$e.OBSERVE,{fn:We,info:s,trigger:{name:e}}),i&&this._addPropertyEffect(t,$e.OBSERVE,{fn:We,info:s,trigger:{name:t}})}_createMethodObserver(e,t){let i=ht(e);if(!i)throw new Error("Malformed observer expression '"+e+"'");rt(this,i,$e.OBSERVE,nt,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,$e.NOTIFY,{fn:Xe,info:{eventName:me(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,$e.REFLECT,{fn:Ke,info:{attrName:t}})}_createComputedProperty(e,t,i){let s=ht(t);if(!s)throw new Error("Malformed computed expression '"+t+"'");rt(this,s,$e.COMPUTE,Ze,e,i)}_marshalArgs(e,t,i){const s=this.__data,r=[];for(let n=0,o=e.length;n<o;n++){let{name:o,structured:a,wildcard:l,value:h,literal:d}=e[n];if(!d)if(l){const e=ne(o,t),r=ct(s,i,e?t:o);h={path:e?t:o,value:r,base:e?he(s,o):r}}else h=a?ct(s,i,o):s[o];r[n]=h}return r}static addPropertyEffect(e,t,i){this.prototype._addPropertyEffect(e,t,i)}static createPropertyObserver(e,t,i){this.prototype._createPropertyObserver(e,t,i)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,i){this.prototype._createComputedProperty(e,t,i)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let i=this.constructor._parseTemplate(e),s=this.__templateInfo==i;if(!s)for(let e in i.propertyEffects)this._createPropertyAccessor(e);if(t&&(i=Object.create(i),i.wasPreBound=s,!s&&this.__templateInfo)){let e=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=e.nextTemplateInfo=i,i.previousTemplateInfo=e,i}return this.__templateInfo=i}static _addTemplatePropertyEffect(e,t,i){(e.hostProps=e.hostProps||{})[t]=!0;let s=e.propertyEffects=e.propertyEffects||{};(s[t]=s[t]||[]).push(i)}_stampTemplate(e){mt.beginHosting(this);let t=super._stampTemplate(e);mt.endHosting(this);let i=this._bindTemplate(e,!0);if(i.nodeList=t.nodeList,!i.wasPreBound){let e=i.childNodes=[];for(let i=t.firstChild;i;i=i.nextSibling)e.push(i)}return t.templateInfo=i,function(e,t){let{nodeList:i,nodeInfoList:s}=t;if(s.length)for(let t=0;t<s.length;t++){let r=s[t],n=i[t],o=r.bindings;if(o)for(let t=0;t<o.length;t++){let i=o[t];it(n,i),st(n,e,i)}n.__dataHost=e}}(this,i),this.__dataReady&&je(this,i.propertyEffects,this.__data,null,!1,i.nodeList),t}_removeBoundDom(e){let t=e.templateInfo;t.previousTemplateInfo&&(t.previousTemplateInfo.nextTemplateInfo=t.nextTemplateInfo),t.nextTemplateInfo&&(t.nextTemplateInfo.previousTemplateInfo=t.previousTemplateInfo),this.__templateInfoLast==t&&(this.__templateInfoLast=t.previousTemplateInfo),t.previousTemplateInfo=t.nextTemplateInfo=null;let i=t.childNodes;for(let e=0;e<i.length;e++){let t=i[e];t.parentNode.removeChild(t)}}static _parseTemplateNode(e,i,s){let r=t._parseTemplateNode.call(this,e,i,s);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,i);t&&(e.textContent=lt(t)||" ",Qe(this,i,s,"text","textContent",t),r=!0)}return r}static _parseTemplateNodeAttribute(e,i,s,r,n){let o=this._parseBindings(n,i);if(o){let t=r,n="property";Ve.test(r)?n="attribute":"$"==r[r.length-1]&&(r=r.slice(0,-1),n="attribute");let a=lt(o);return a&&"attribute"==n&&("class"==r&&e.hasAttribute("class")&&(a+=" "+e.getAttribute(r)),e.setAttribute(r,a)),"input"===e.localName&&"value"===t&&e.setAttribute(t,""),e.removeAttribute(t),"property"===n&&(r=_e(r)),Qe(this,i,s,n,r,o,a),!0}return t._parseTemplateNodeAttribute.call(this,e,i,s,r,n)}static _parseTemplateNestedTemplate(e,i,s){let r=t._parseTemplateNestedTemplate.call(this,e,i,s),n=s.templateInfo.hostProps;for(let e in n){Qe(this,i,s,"property","_host_"+e,[{mode:"{",source:e,dependencies:[e]}])}return r}static _parseBindings(e,t){let i,s=[],r=0;for(;null!==(i=at.exec(e));){i.index>r&&s.push({literal:e.slice(r,i.index)});let n=i[1][0],o=Boolean(i[2]),a=i[3].trim(),l=!1,h="",d=-1;"{"==n&&(d=a.indexOf("::"))>0&&(h=a.substring(d+2),a=a.substring(0,d),l=!0);let c=ht(a),u=[];if(c){let{args:e,methodName:i}=c;for(let t=0;t<e.length;t++){let i=e[t];i.literal||u.push(i)}let s=t.dynamicFns;(s&&s[i]||c.static)&&(u.push(i),c.dynamicFn=!0)}else u.push(a);s.push({source:a,mode:n,negate:o,customEvent:l,signature:c,dependencies:u,event:h}),r=at.lastIndex}if(r&&r<e.length){let t=e.substring(r);t&&s.push({literal:t})}return s.length?s:null}static _evaluateBinding(e,t,i,s,r,n){let o;return o=t.signature?nt(e,i,s,0,t.signature):i!=t.source?he(e,t.source):n&&ie(i)?he(e,i):e.__data[i],t.negate&&(o=!o),o}}});const mt=new class{constructor(){this.stack=[]}registerHost(e){if(this.stack.length){this.stack[this.stack.length-1]._enqueueClient(e)}}beginHosting(e){this.stack.push(e)}endHosting(e){let t=this.stack.length;t&&this.stack[t-1]==e&&this.stack.pop()}};
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */const ft=ee(e=>{const t=Pe(e);function i(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof r?t:null}function s(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const i=e.properties;i&&(t=
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
function(e){const t={};for(let i in e){const s=e[i];t[i]="function"==typeof s?{type:s}:s}return t}(i))}e.__ownProperties=t}return e.__ownProperties}class r extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const e=this._properties;this.__observedAttributes=e?Object.keys(e).map(e=>this.attributeNameForProperty(e)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=i(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=s(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=i(this);this.__properties=Object.assign({},e&&e._properties,s(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r}),gt=window.ShadyCSS&&window.ShadyCSS.cssBuild,yt=ee(e=>{const t=ft(_t(e));function i(e,t,i,s){i.computed&&(i.readOnly=!0),i.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,i.computed,s)),i.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!i.computed):!1===i.readOnly&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),i.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):!1===i.reflectToAttribute&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),i.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):!1===i.notify&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),i.observer&&e._createPropertyObserver(t,i.observer,s[i.observer]),e._addPropertyToAttributeMap(t)}function s(e,t,i,s){if(!gt){const r=t.content.querySelectorAll("style"),n=F(t),o=function(e){let t=k(e);return t?H(t):[]}(i),a=t.content.firstElementChild;for(let i=0;i<o.length;i++){let r=o[i];r.textContent=e._processStyleText(r.textContent,s),t.content.insertBefore(r,a)}let l=0;for(let t=0;t<n.length;t++){let i=n[t],o=r[l];o!==i?(i=i.cloneNode(!0),o.parentNode.insertBefore(i,o)):l++,i.textContent=e._processStyleText(i.textContent,s)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,i)}return class extends t{static get polymerElementVersion(){return"3.3.1"}static _finalizeClass(){t._finalizeClass.call(this);const e=((i=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",i))||(i.__ownObservers=i.hasOwnProperty(JSCompiler_renameProperty("observers",i))?i.observers:null),i.__ownObservers);var i;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):e=e.cloneNode(!0)),this.prototype._template=e}static createProperties(e){for(let t in e)i(this.prototype,t,e[t],e)}static createObservers(e,t){const i=this.prototype;for(let s=0;s<e.length;s++)i._createMethodObserver(e[s],t)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(e){let t=null;return e&&(t=N.import(e,"template")),t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=E(e.url);else{const e=N.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=I,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let i in t){let s=t[i];"value"in s&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[i]=s)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let i=e[t];if(!this.hasOwnProperty(t)){let e="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}static _processStyleText(e,t){return P(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const i=this.importPath;s(this,t,e,i?S(i):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=te(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:"open",shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e)),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=S(this.importPath)),S(e,t)}static _parseTemplateContent(e,i,s){return i.dynamicFns=i.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,i,s)}static _addTemplatePropertyEffect(e,i,s){return t._addTemplatePropertyEffect.call(this,e,i,s)}}}),bt=yt(HTMLElement);
/**
   * @fileoverview
   * @suppress {checkPrototypalTypes}
   * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
   * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
   * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
   * Google as part of the polymer project is also subject to an additional IP
   * rights grant found at http://polymer.github.io/PATENTS.txt
   */
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
class vt{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,At.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),At.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,i){return e instanceof vt?e._cancelAsync():e=new vt,e.setConfig(t,i),e}}let At=new Set;const Ct=function(e){At.add(e)},wt=function(){const e=Boolean(At.size);return At.forEach(e=>{try{e.flush()}catch(e){setTimeout(()=>{throw e})}}),e};
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
let xt="string"==typeof document.head.style.touchAction,St="__polymerGesturesHandled",Pt="__polymerGesturesTouchAction",Et=["mousedown","mousemove","mouseup","click"],Tt=[0,1,4,2],It=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function Ot(e){return Et.indexOf(e)>-1}let zt=!1;function Rt(e){Ot(e)}!function(){try{let e=Object.defineProperty({},"passive",{get(){zt=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let Nt=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const kt=[],Lt={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Dt={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Mt(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let i=e.getRootNode();if(e.id){let s=i.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<s.length;e++)t.push(s[e])}}return t}let Ft=function(e){let t=e.sourceCapabilities;var i;if((!t||t.firesTouchEvents)&&(e[St]={skip:!0},"click"===e.type)){let t=!1,s=jt(e);for(let e=0;e<s.length;e++){if(s[e].nodeType===Node.ELEMENT_NODE)if("label"===s[e].localName)kt.push(s[e]);else if(i=s[e],Lt[i.localName]){let i=Mt(s[e]);for(let e=0;e<i.length;e++)t=t||kt.indexOf(i[e])>-1}if(s[e]===$t.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function Ht(e){let t=Nt?["click"]:Et;for(let i,s=0;s<t.length;s++)i=t[s],e?(kt.length=0,document.addEventListener(i,Ft,!0)):document.removeEventListener(i,Ft,!0)}function Bt(e){let t=e.type;if(!Ot(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!It&&(t=Tt[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}let $t={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Vt(e,t,i){e.movefn=t,e.upfn=i,document.addEventListener("mousemove",t),document.addEventListener("mouseup",i)}function Gt(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",(function(e){$t.mouse.mouseIgnoreJob||Ht(!0),$t.mouse.target=jt(e)[0],$t.mouse.mouseIgnoreJob=vt.debounce($t.mouse.mouseIgnoreJob,Ae.after(2500),(function(){Ht(),$t.mouse.target=null,$t.mouse.mouseIgnoreJob=null}))}),!!zt&&{passive:!0});const jt=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],qt={},Yt=[];function Wt(e){const t=jt(e);return t.length>0?t[0]:e.target}function Ut(e){let t,i=e.type,s=e.currentTarget.__polymerGestures;if(!s)return;let r=s[i];if(r){if(!e[St]&&(e[St]={},"touch"===i.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===i&&1===e.touches.length&&($t.touch.id=t.identifier),$t.touch.id!==t.identifier)return;xt||"touchstart"!==i&&"touchmove"!==i||function(e){let t=e.changedTouches[0],i=e.type;if("touchstart"===i)$t.touch.x=t.clientX,$t.touch.y=t.clientY,$t.touch.scrollDecided=!1;else if("touchmove"===i){if($t.touch.scrollDecided)return;$t.touch.scrollDecided=!0;let i=function(e){let t="auto",i=jt(e);for(let e,s=0;s<i.length;s++)if(e=i[s],e[Pt]){t=e[Pt];break}return t}(e),s=!1,r=Math.abs($t.touch.x-t.clientX),n=Math.abs($t.touch.y-t.clientY);e.cancelable&&("none"===i?s=!0:"pan-x"===i?s=n>r:"pan-y"===i&&(s=r>n)),s?e.preventDefault():ei("track")}}(e)}if(t=e[St],!t.skip){for(let i,s=0;s<Yt.length;s++)i=Yt[s],r[i.name]&&!t[i.name]&&i.flow&&i.flow.start.indexOf(e.type)>-1&&i.reset&&i.reset();for(let s,n=0;n<Yt.length;n++)s=Yt[n],r[s.name]&&!t[s.name]&&(t[s.name]=!0,s[i](e))}}}function Jt(e,t,i){return!!qt[t]&&(function(e,t,i){let s=qt[t],r=s.deps,n=s.name,o=e.__polymerGestures;o||(e.__polymerGestures=o={});for(let t,i,s=0;s<r.length;s++)t=r[s],Nt&&Ot(t)&&"click"!==t||(i=o[t],i||(o[t]=i={_count:0}),0===i._count&&e.addEventListener(t,Ut,Rt(t)),i[n]=(i[n]||0)+1,i._count=(i._count||0)+1);e.addEventListener(t,i),s.touchAction&&Zt(e,s.touchAction)}(e,t,i),!0)}function Xt(e,t,i){return!!qt[t]&&(function(e,t,i){let s=qt[t],r=s.deps,n=s.name,o=e.__polymerGestures;if(o)for(let t,i,s=0;s<r.length;s++)t=r[s],i=o[t],i&&i[n]&&(i[n]=(i[n]||1)-1,i._count=(i._count||1)-1,0===i._count&&e.removeEventListener(t,Ut,Rt(t)));e.removeEventListener(t,i)}(e,t,i),!0)}function Kt(e){Yt.push(e);for(let t=0;t<e.emits.length;t++)qt[e.emits[t]]=e}function Zt(e,t){xt&&e instanceof HTMLElement&&xe.run(()=>{e.style.touchAction=t}),e[Pt]=t}function Qt(e,t,i){let s=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(s.detail=i,te(e).dispatchEvent(s),s.defaultPrevented){let e=i.preventer||i.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function ei(e){let t=function(e){for(let t,i=0;i<Yt.length;i++){t=Yt[i];for(let i,s=0;s<t.emits.length;s++)if(i=t.emits[s],i===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function ti(e,t,i,s){t&&Qt(t,e,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:s,prevent:function(e){return ei(e)}})}function ii(e,t,i){if(e.prevent)return!1;if(e.started)return!0;let s=Math.abs(e.x-t),r=Math.abs(e.y-i);return s>=5||r>=5}function si(e,t,i){if(!t)return;let s,r=e.moves[e.moves.length-2],n=e.moves[e.moves.length-1],o=n.x-e.x,a=n.y-e.y,l=0;r&&(s=n.x-r.x,l=n.y-r.y),Qt(t,"track",{state:e.state,x:i.clientX,y:i.clientY,dx:o,dy:a,ddx:s,ddy:l,sourceEvent:i,hover:function(){return function(e,t){let i=document.elementFromPoint(e,t),s=i;for(;s&&s.shadowRoot&&!window.ShadyDOM;){let r=s;if(s=s.shadowRoot.elementFromPoint(e,t),r===s)break;s&&(i=s)}return i}(i.clientX,i.clientY)}})}function ri(e,t,i){let s=Math.abs(t.clientX-e.x),r=Math.abs(t.clientY-e.y),n=Wt(i||t);!n||Dt[n.localName]&&n.hasAttribute("disabled")||(isNaN(s)||isNaN(r)||s<=25&&r<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;let t=Wt(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let i=t.getBoundingClientRect(),s=e.pageX,r=e.pageY;return!(s>=i.left&&s<=i.right&&r>=i.top&&r<=i.bottom)}return!1}(t))&&(e.prevent||Qt(n,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:i}))}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */Kt({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Gt(this.info)},mousedown:function(e){if(!Bt(e))return;let t=Wt(e),i=this;Vt(this.info,(function(e){Bt(e)||(ti("up",t,e),Gt(i.info))}),(function(e){Bt(e)&&ti("up",t,e),Gt(i.info)})),ti("down",t,e)},touchstart:function(e){ti("down",Wt(e),e.changedTouches[0],e)},touchend:function(e){ti("up",Wt(e),e.changedTouches[0],e)}}),Kt({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Gt(this.info)},mousedown:function(e){if(!Bt(e))return;let t=Wt(e),i=this,s=function(e){let s=e.clientX,r=e.clientY;ii(i.info,s,r)&&(i.info.state=i.info.started?"mouseup"===e.type?"end":"track":"start","start"===i.info.state&&ei("tap"),i.info.addMove({x:s,y:r}),Bt(e)||(i.info.state="end",Gt(i.info)),t&&si(i.info,t,e),i.info.started=!0)};Vt(this.info,s,(function(e){i.info.started&&s(e),Gt(i.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=Wt(e),i=e.changedTouches[0],s=i.clientX,r=i.clientY;ii(this.info,s,r)&&("start"===this.info.state&&ei("tap"),this.info.addMove({x:s,y:r}),si(this.info,t,i),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=Wt(e),i=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),si(this.info,t,i))}}),Kt({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){Bt(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){Bt(e)&&ri(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){ri(this.info,e.changedTouches[0],e)}});const ni=ee(e=>class extends e{_addEventListenerToNode(e,t,i){Jt(e,t,i)||super._addEventListenerToNode(e,t,i)}_removeEventListenerFromNode(e,t,i){Xt(e,t,i)||super._removeEventListenerFromNode(e,t,i)}}),oi=e=>class extends e{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"theme"===e&&this._setTheme(i)}},ai=e=>class extends(oi(e)){static finalize(){super.finalize();const e=this.prototype._template,t=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,i=Object.getPrototypeOf(this.prototype)._template;i&&!t&&Array.from(i.content.querySelectorAll("style[include]")).forEach(t=>{this._includeStyle(t.getAttribute("include"),e)}),this._includeMatchingThemes(e)}static _includeMatchingThemes(e){const t=N.prototype.modules;let i=!1;const s=this.is+"-default-theme";Object.keys(t).sort((e,t)=>{const i=0===e.indexOf("vaadin-"),s=0===t.indexOf("vaadin-"),r=["lumo-","material-"],n=r.filter(t=>0===e.indexOf(t)).length>0,o=r.filter(e=>0===t.indexOf(e)).length>0;return i!==s?i?-1:1:n!==o?n?-1:1:0}).forEach(r=>{if(r!==s){const s=t[r].getAttribute("theme-for");s&&s.split(" ").forEach(t=>{new RegExp("^"+t.split("*").join(".*")+"$").test(this.is)&&(i=!0,this._includeStyle(r,e))})}}),!i&&t[s]&&this._includeStyle(s,e)}static _includeStyle(e,t){if(t&&!t.content.querySelector(`style[include="${e}"]`)){const i=document.createElement("style");i.setAttribute("include",e),t.content.appendChild(i)}}}
/**
  @license
  Copyright (c) 2017 Vaadin Ltd.
  This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
  */,li=e=>class extends((e=>class extends e{static get properties(){var e={tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};return window.ShadyDOM&&(e.tabIndex=e.tabindex),e}})(e)){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",e=>{e.composedPath()[0]===this?this._focus(e):-1===e.composedPath().indexOf(this.focusElement)||this.disabled||this._setFocused(!0)}),this.addEventListener("focusout",e=>this._setFocused(!1)),super.ready();const e=e=>{e.composed||e.target.dispatchEvent(new CustomEvent(e.type,{bubbles:!0,composed:!0,cancelable:!1}))};this.shadowRoot.addEventListener("focusin",e),this.shadowRoot.addEventListener("focusout",e),this.addEventListener("keydown",e=>{if(!e.defaultPrevented&&9===e.keyCode)if(e.shiftKey)this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout(()=>this._isShiftTabbing=!1,0);else{const e=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(e&&parseFloat(e[1])>=63&&parseFloat(e[1])<66&&this.parentNode&&this.nextSibling){const e=document.createElement("input");e.style.position="absolute",e.style.opacity=0,e.tabIndex=this.tabIndex,this.parentNode.insertBefore(e,this.nextSibling),e.focus(),e.addEventListener("focusout",()=>this.parentNode.removeChild(e))}}}),!this.autofocus||this.focused||this.disabled||window.requestAnimationFrame(()=>{this._focus(),this._setFocused(!0),this.setAttribute("focus-ring","")}),this._boundKeydownListener=this._bodyKeydownListener.bind(this),this._boundKeyupListener=this._bodyKeyupListener.bind(this)}connectedCallback(){super.connectedCallback(),document.body.addEventListener("keydown",this._boundKeydownListener,!0),document.body.addEventListener("keyup",this._boundKeyupListener,!0)}disconnectedCallback(){super.disconnectedCallback(),document.body.removeEventListener("keydown",this._boundKeydownListener,!0),document.body.removeEventListener("keyup",this._boundKeyupListener,!0),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){e?this.setAttribute("focused",""):this.removeAttribute("focused"),e&&this._tabPressed?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring")}_bodyKeydownListener(e){this._tabPressed=9===e.keyCode}_bodyKeyupListener(){this._tabPressed=!1}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(e){this._isShiftTabbing||(this.focusElement.focus(),this._setFocused(!0))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement.blur(),this._setFocused(!1)}_disabledChanged(e){this.focusElement.disabled=e,e?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):(void 0!==this._previousTabIndex&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"))}_tabindexChanged(e){void 0!==e&&(this.focusElement.tabIndex=e),this.disabled&&this.tabindex&&(-1!==this.tabindex&&(this._previousTabIndex=this.tabindex),this.tabindex=e=void 0),window.ShadyDOM&&this.setProperties({tabIndex:e,tabindex:e})}click(){this.disabled||super.click()}}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */,hi=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=wt()}while(e||t)},di=[];new MutationObserver((function(){const e=ui();di.forEach(t=>{ci(t,e)})})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const ci=function(e,t){t?e.setAttribute("dir",t):e.removeAttribute("dir")},ui=function(){return document.documentElement.getAttribute("dir")},pi=e=>class extends e{static get properties(){return{dir:{type:String,readOnly:!0}}}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),ci(this,ui()))}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"dir"!==e)return;const s=i===ui()&&-1===di.indexOf(this),r=!i&&t&&-1===di.indexOf(this),n=i!==ui()&&t===ui();s||r?(this.__subscribe(),ci(this,ui())):n&&this.__subscribe(!1)}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1)}__subscribe(e=!0){e?-1===di.indexOf(this)&&di.push(this):di.indexOf(this)>-1&&di.splice(di.indexOf(this),1)}},_i=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,mi=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function fi(e,t){if("function"!=typeof e)return;const i=_i.exec(e.toString());if(i)try{e=new Function(i[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};const gi=function(e,t){if(window.Vaadin.developmentMode)return fi(e,t)};function yi(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(mi?!function(){if(mi){if(Object.keys(mi).map(e=>mi[e]).filter(e=>e.productionMode).length>0)return!0}return!1}():!fi((function(){return!0})))}catch(e){return!1}}());const bi=function(){return gi(yi)};let vi;window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){bi&&bi()};const Ai=new Set,Ci=e=>class extends(pi(e)){static finalize(){super.finalize();const{is:e}=this;e&&!Ai.has(e)&&(window.Vaadin.registrations.push(this),Ai.add(e),window.Vaadin.developmentModeCallback&&(vi=vt.debounce(vi,we,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),Ct(vi)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}}
/**
  @license
  Copyright (c) 2017 Vaadin Ltd.
  This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
  */;class wi extends(Ci(li(ai(ni(bt))))){static get template(){return K`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      label {
        display: inline-flex;
        align-items: baseline;
        outline: none;
      }

      [part="checkbox"] {
        position: relative;
        display: inline-block;
        flex: none;
      }

      input[type="checkbox"] {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
        margin: 0;
      }

      :host([disabled]) {
        -webkit-tap-highlight-color: transparent;
      }
    </style>

    <label>
      <span part="checkbox">
        <input type="checkbox" checked="{{checked::change}}" disabled\$="[[disabled]]" indeterminate="{{indeterminate::change}}" role="presentation" tabindex="-1">
      </span>

      <span part="label">
        <slot></slot>
      </span>
    </label>
`}static get is(){return"vaadin-checkbox"}static get version(){return"2.2.12"}static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,observer:"_checkedChanged",reflectToAttribute:!0},indeterminate:{type:Boolean,notify:!0,observer:"_indeterminateChanged",reflectToAttribute:!0,value:!1},value:{type:String,value:"on"},_nativeCheckbox:{type:Object}}}constructor(){super(),this.name}get name(){return this.checked?this._storedName:""}set name(e){this._storedName=e}ready(){super.ready(),this.setAttribute("role","checkbox"),this._nativeCheckbox=this.shadowRoot.querySelector('input[type="checkbox"]'),this.addEventListener("click",this._handleClick.bind(this)),this._addActiveListeners();const e=this.getAttribute("name");e&&(this.name=e),this.shadowRoot.querySelector('[part~="label"]').querySelector("slot").addEventListener("slotchange",this._updateLabelAttribute.bind(this)),this._updateLabelAttribute()}_updateLabelAttribute(){const e=this.shadowRoot.querySelector('[part~="label"]'),t=e.firstElementChild.assignedNodes();this._isAssignedNodesEmpty(t)?e.setAttribute("empty",""):e.removeAttribute("empty")}_isAssignedNodesEmpty(e){return 0===e.length||1==e.length&&e[0].nodeType==Node.TEXT_NODE&&""===e[0].textContent.trim()}_checkedChanged(e){this.indeterminate?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",e)}_indeterminateChanged(e){e?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",this.checked)}_addActiveListeners(){this._addEventListenerToNode(this,"down",e=>{this.__interactionsAllowed(e)&&this.setAttribute("active","")}),this._addEventListenerToNode(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",e=>{this.__interactionsAllowed(e)&&32===e.keyCode&&(e.preventDefault(),this.setAttribute("active",""))}),this.addEventListener("keyup",e=>{this.__interactionsAllowed(e)&&32===e.keyCode&&(e.preventDefault(),this._toggleChecked(),this.removeAttribute("active"),this.indeterminate&&(this.indeterminate=!1))})}get focusElement(){return this.shadowRoot.querySelector("input")}__interactionsAllowed(e){return!this.disabled&&"a"!==e.target.localName}_handleClick(e){this.__interactionsAllowed(e)&&(this.indeterminate?(this.indeterminate=!1,e.preventDefault(),this._toggleChecked()):e.composedPath()[0]!==this._nativeCheckbox&&(e.preventDefault(),this._toggleChecked()))}_toggleChecked(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{composed:!1,bubbles:!0}))}}customElements.define(wi.is,wi);const xi=K`<dom-module id="lumo-grid" theme-for="vaadin-grid">
  <template>
    <style>
      :host {
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-s);
        color: var(--lumo-body-text-color);
        background-color: var(--lumo-base-color);
        box-sizing: border-box;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        /* For internal use only */
        --_lumo-grid-border-color: var(--lumo-contrast-20pct);
        --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
        --_lumo-grid-border-width: 1px;
        --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
      }

      /* No (outer) border */

      :host(:not([theme~="no-border"])) {
        border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
      }

      /* Cell styles */

      [part~="cell"] {
        min-height: var(--lumo-size-m);
        background-color: var(--lumo-base-color);
      }

      [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        cursor: default;
        padding: var(--lumo-space-xs) var(--lumo-space-m);
      }

      /* Apply row borders by default and introduce the "no-row-borders" variant */
      :host(:not([theme~="no-row-borders"])) [part~="cell"]:not([part~="details-cell"]) {
        border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
      }

      /* Hide first body row top border */
      :host(:not([theme~="no-row-borders"])) [part="row"][first] [part~="cell"]:not([part~="details-cell"]) {
        border-top: 0;
        min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
      }

      /* Focus-ring */

      [part~="cell"]:focus {
        outline: none;
      }

      :host([navigating]) [part~="cell"]:focus::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Drag and Drop styles */
      :host([dragover])::after {
        content: "";
        position: absolute;
        z-index: 100;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      [part~="row"][dragover] {
        z-index: 100 !important;
      }

      [part~="row"][dragover] [part~="cell"] {
        overflow: visible;
      }

      [part~="row"][dragover] [part~="cell"]::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: calc(var(--_lumo-grid-border-width) + 2px);
        pointer-events: none;
        background: var(--lumo-primary-color-50pct);
      }

      :host([theme~="no-row-borders"]) [dragover] [part~="cell"]::after {
        height: 2px;
      }

      [part~="row"][dragover="below"] [part~="cell"]::after {
        top: 100%;
        bottom: auto;
        margin-top: -1px;
      }

      [part~="row"][dragover="above"] [part~="cell"]::after {
        top: auto;
        bottom: 100%;
        margin-bottom: -1px;
      }

      [part~="row"][details-opened][dragover="below"] [part~="cell"]:not([part~="details-cell"])::after,
      [part~="row"][details-opened][dragover="above"] [part~="details-cell"]::after {
        display: none;
      }

      [part~="row"][dragover][dragover="on-top"] [part~="cell"]::after {
        height: 100%;
      }

      [part~="row"][dragstart] {
        /* Add bottom-space to the row so the drag number doesn't get clipped. Needed for IE/Edge */
        border-bottom: 100px solid transparent;
        z-index: 100 !important;
        opacity: 0.9;
      }

      [part~="row"][dragstart] [part~="cell"] {
        border: none !important;
        box-shadow: none !important;
      }

      [part~="row"][dragstart] [part~="cell"][last-column] {
        border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
      }

      [part~="row"][dragstart] [part~="cell"][first-column] {
        border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
      }

      [ios] [part~="row"][dragstart] [part~="cell"] {
        background: var(--lumo-primary-color-50pct);
      }

      #scroller:not([ios]) [part~="row"][dragstart]:not([dragstart=""])::after {
        display: block;
        position: absolute;
        left: var(--_grid-drag-start-x);
        top: var(--_grid-drag-start-y);
        z-index: 100;
        content: attr(dragstart);
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: calc(var(--lumo-space-xs) * 0.8);
        color: var(--lumo-error-contrast-color);
        background-color: var(--lumo-error-color);
        border-radius: var(--lumo-border-radius-m);
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-xxs);
        line-height: 1;
        font-weight: 500;
        text-transform: initial;
        letter-spacing: initial;
        min-width: calc(var(--lumo-size-s) * 0.7);
        text-align: center;
      }

      /* Headers and footers */

      [part~="header-cell"] ::slotted(vaadin-grid-cell-content),
      [part~="footer-cell"] ::slotted(vaadin-grid-cell-content),
      [part~="reorder-ghost"] {
        font-size: var(--lumo-font-size-s);
        font-weight: 500;
      }

      [part~="footer-cell"] ::slotted(vaadin-grid-cell-content) {
        font-weight: 400;
      }

      [part="row"]:only-child [part~="header-cell"] {
        min-height: var(--lumo-size-xl);
      }

      /* Header borders */

      /* Hide first header row top border */
      :host(:not([theme~="no-row-borders"])) [part="row"]:first-child [part~="header-cell"] {
        border-top: 0;
      }

      [part="row"]:last-child [part~="header-cell"] {
        border-bottom: var(--_lumo-grid-border-width) solid transparent;
      }

      :host(:not([theme~="no-row-borders"])) [part="row"]:last-child [part~="header-cell"] {
        border-bottom-color: var(--_lumo-grid-secondary-border-color);
      }

      /* Overflow uses a stronger border color */
      :host([overflow~="top"]) [part="row"]:last-child [part~="header-cell"] {
        border-bottom-color: var(--_lumo-grid-border-color);
      }

      /* Footer borders */

      [part="row"]:first-child [part~="footer-cell"] {
        border-top: var(--_lumo-grid-border-width) solid transparent;
      }

      :host(:not([theme~="no-row-borders"])) [part="row"]:first-child [part~="footer-cell"] {
        border-top-color: var(--_lumo-grid-secondary-border-color);
      }

      /* Overflow uses a stronger border color */
      :host([overflow~="bottom"]) [part="row"]:first-child [part~="footer-cell"] {
        border-top-color: var(--_lumo-grid-border-color);
      }

      /* Column reordering */

      :host([reordering]) [part~="cell"] {
        background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
      }

      :host([reordering]) [part~="cell"][reorder-status="allowed"] {
        background: var(--lumo-base-color);
      }

      :host([reordering]) [part~="cell"][reorder-status="dragging"] {
        background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
      }

      [part~="reorder-ghost"] {
        opacity: 0.85;
        box-shadow: var(--lumo-box-shadow-s);
        /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
        padding: var(--lumo-space-s) var(--lumo-space-m) !important;
      }

      /* Column resizing */

      [part="resize-handle"] {
        width: 3px;
        background-color: var(--lumo-primary-color-50pct);
        opacity: 0;
        transition: opacity 0.2s;
      }

      :host(:not([reordering])) *:not([column-resizing]) [part~="cell"]:hover [part="resize-handle"],
      [part="resize-handle"]:active {
        opacity: 1;
        transition-delay: 0.15s;
      }

      /* Column borders */

      :host([theme~="column-borders"]) [part~="cell"]:not([last-column]):not([part~="details-cell"]) {
        border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
      }

      /* Frozen columns */

      [last-frozen] {
        border-right: var(--_lumo-grid-border-width) solid transparent;
        overflow: hidden;
      }

      :host([overflow~="left"]) [part~="cell"][last-frozen]:not([part~="details-cell"]) {
        border-right-color: var(--_lumo-grid-border-color);
      }

      /* Row stripes */

      :host([theme~="row-stripes"]) [part~="row"]:not([odd]) [part~="body-cell"],
      :host([theme~="row-stripes"]) [part~="row"]:not([odd]) [part~="details-cell"] {
        background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
        background-repeat: repeat-x;
      }

      /* Selected row */

      /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
      :host(:not([reordering])) [part~="row"][selected] {
        z-index: 1;
      }

      :host(:not([reordering])) [part~="row"][selected] [part~="body-cell"]:not([part~="details-cell"]) {
        background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
        background-repeat: repeat;
      }

      /* Cover the border of an unselected row */
      :host(:not([theme~="no-row-borders"])) [part~="row"][selected] [part~="cell"]:not([part~="details-cell"]) {
        box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
      }

      /* Compact */

      :host([theme~="compact"]) [part="row"]:only-child [part~="header-cell"] {
        min-height: var(--lumo-size-m);
      }

      :host([theme~="compact"]) [part~="cell"] {
        min-height: var(--lumo-size-s);
      }

      :host([theme~="compact"]) [part="row"][first] [part~="cell"]:not([part~="details-cell"]) {
        min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
      }

      :host([theme~="compact"]) [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        padding: var(--lumo-space-xs) var(--lumo-space-s);
      }

      /* Wrap cell contents */

      :host([theme~="wrap-cell-content"]) [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        white-space: normal;
      }
    </style>
  </template>
</dom-module><dom-module theme-for="vaadin-checkbox" id="vaadin-grid-select-all-checkbox-lumo">
  <template>
    <style>
      :host(.vaadin-grid-select-all-checkbox) {
        font-size: var(--lumo-font-size-m);
      }
   </style>
  </template>
</dom-module>`;document.head.appendChild(xi.content);
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
class Si{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function Pi(e){return function e(t,i){let s=i.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=s.trim(),t.parent){let e=t.previous?t.previous.end:t.parent.start;s=i.substring(e,t.start-1),s=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e}))}(s),s=s.replace(zi.multipleSpaces," "),s=s.substring(s.lastIndexOf(";")+1);let r=t.parsedSelector=t.selector=s.trim();t.atRule=0===r.indexOf(ki),t.atRule?0===r.indexOf(Ni)?t.type=Ti.MEDIA_RULE:r.match(zi.keyframesRule)&&(t.type=Ti.KEYFRAMES_RULE,t.keyframesName=t.selector.split(zi.multipleSpaces).pop()):0===r.indexOf(Ri)?t.type=Ti.MIXIN_RULE:t.type=Ti.STYLE_RULE}let r=t.rules;if(r)for(let t,s=0,n=r.length;s<n&&(t=r[s]);s++)e(t,i);return t}(function(e){let t=new Si;t.start=0,t.end=e.length;let i=t;for(let s=0,r=e.length;s<r;s++)if(e[s]===Ii){i.rules||(i.rules=[]);let e=i,t=e.rules[e.rules.length-1]||null;i=new Si,i.start=s+1,i.parent=e,i.previous=t,e.rules.push(i)}else e[s]===Oi&&(i.end=s+1,i=i.parent||t);return t}(e=e.replace(zi.comments,"").replace(zi.port,"")),e)}function Ei(e,t,i=""){let s="";if(e.cssText||e.rules){let i=e.rules;if(i&&!function(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(Ri)}(i))for(let e,r=0,n=i.length;r<n&&(e=i[r]);r++)s=Ei(e,t,s);else s=t?e.cssText:function(e){return function(e){return e.replace(zi.mixinApply,"").replace(zi.varApply,"")}(e=function(e){return e.replace(zi.customProp,"").replace(zi.mixinProp,"")}(e))}(e.cssText),s=s.trim(),s&&(s="  "+s+"\n")}return s&&(e.selector&&(i+=e.selector+" "+Ii+"\n"),i+=s,e.selector&&(i+=Oi+"\n\n")),i}const Ti={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},Ii="{",Oi="}",zi={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},Ri="--",Ni="@media",ki="@",Li=new Set;function Di(e){const t=e.textContent;if(!Li.has(t)){Li.add(t);const e=document.createElement("style");e.setAttribute("shady-unscoped",""),e.textContent=t,document.head.appendChild(e)}}function Mi(e){return e.hasAttribute("shady-unscoped")}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */function Fi(e,t){return e?("string"==typeof e&&(e=Pi(e)),t&&Bi(e,t),Ei(e,b)):""}function Hi(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=Pi(e.textContent)),e.__cssRules||null}function Bi(e,t,i,s){if(!e)return;let r=!1,n=e.type;if(s&&n===Ti.MEDIA_RULE){let t=e.selector.match(c);t&&(window.matchMedia(t[1]).matches||(r=!0))}n===Ti.STYLE_RULE?t(e):i&&n===Ti.KEYFRAMES_RULE?i(e):n===Ti.MIXIN_RULE&&(r=!0);let o=e.rules;if(o&&!r)for(let e,r=0,n=o.length;r<n&&(e=o[r]);r++)Bi(e,t,i,s)}window.ShadyDOM&&window.ShadyDOM.wrap;function $i(e){if(void 0!==f)return f;if(void 0===e.__cssBuild){const t=e.getAttribute("css-build");if(t)e.__cssBuild=t;else{const t=function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if("css-build"===e[0])return e[1]}return""}(e);""!==t&&function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */(e),e.__cssBuild=t}}return e.__cssBuild||""}function Vi(e){return""!==$i(e)}const Gi=/;\s*/m,ji=/^\s*(initial)|(inherit)\s*$/,qi=/\s*!important/;class Yi{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let Wi=null;class Ui{constructor(){this._currentElement=null,this._measureElement=null,this._map=new Yi}detectMixin(e){return function(e){const t=d.test(e)||h.test(e);return d.lastIndex=0,h.lastIndex=0,t}(e)}gatherStyles(e){const t=function(e){const t=[],i=e.querySelectorAll("style");for(let e=0;e<i.length;e++){const s=i[e];Mi(s)?_||(Di(s),s.parentNode.removeChild(s)):(t.push(s.textContent),s.parentNode.removeChild(s))}return t.join("").trim()}(e.content);if(t){const i=document.createElement("style");return i.textContent=t,e.content.insertBefore(i,e.content.firstChild),i}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const i=e._gatheredStyle;return i?this.transformStyle(i,t):null}transformStyle(e,t=""){let i=Hi(e);return this.transformRules(i,t),e.textContent=Fi(i),i}transformCustomStyle(e){let t=Hi(e);return Bi(t,e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)}),e.textContent=Fi(t),t}transformRules(e,t){this._currentElement=t,Bi(e,e=>{this.transformRule(e)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(h,(e,i,s,r)=>this._produceCssProperties(e,i,s,r,t)),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const i={};let s=!1;return Bi(t,t=>{s=s||t===e,s||t.selector===e.selector&&Object.assign(i,this._cssTextToMap(t.parsedCssText))}),i}_consumeCssProperties(e,t){let i=null;for(;i=d.exec(e);){let s=i[0],r=i[1],n=i.index,o=n+s.indexOf("@apply"),a=n+s.length,l=e.slice(0,o),h=e.slice(a),c=t?this._fallbacksFromPreviousRules(t):{};Object.assign(c,this._cssTextToMap(l));let u=this._atApplyToCssProperties(r,c);e=`${l}${u}${h}`,d.lastIndex=n+u.length}return e}_atApplyToCssProperties(e,t){e=e.replace(Gi,"");let i=[],s=this._map.get(e);if(s||(this._map.set(e,{}),s=this._map.get(e)),s){let r,n,o;this._currentElement&&(s.dependants[this._currentElement]=!0);const a=s.properties;for(r in a)o=t&&t[r],n=[r,": var(",e,"_-_",r],o&&n.push(",",o.replace(qi,"")),n.push(")"),qi.test(a[r])&&n.push(" !important"),i.push(n.join(""))}return i.join("; ")}_replaceInitialOrInherit(e,t){let i=ji.exec(t);return i&&(t=i[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let i,s,r=e.split(";"),n={};for(let e,o,a=0;a<r.length;a++)e=r[a],e&&(o=e.split(":"),o.length>1&&(i=o[0].trim(),s=o.slice(1).join(":"),t&&(s=this._replaceInitialOrInherit(i,s)),n[i]=s));return n}_invalidateMixinEntry(e){if(Wi)for(let t in e.dependants)t!==this._currentElement&&Wi(t)}_produceCssProperties(e,t,i,s,r){if(i&&function e(t,i){let s=t.indexOf("var(");if(-1===s)return i(t,"","","");let r=function(e,t){let i=0;for(let s=t,r=e.length;s<r;s++)if("("===e[s])i++;else if(")"===e[s]&&0==--i)return s;return-1}(t,s+3),n=t.substring(s+4,r),o=t.substring(0,s),a=e(t.substring(r+1),i),l=n.indexOf(",");return-1===l?i(o,n.trim(),"",a):i(o,n.substring(0,l).trim(),n.substring(l+1).trim(),a)}(i,(e,t)=>{t&&this._map.get(t)&&(s=`@apply ${t};`)}),!s)return e;let n=this._consumeCssProperties(""+s,r),o=e.slice(0,e.indexOf("--")),a=this._cssTextToMap(n,!0),l=a,h=this._map.get(t),d=h&&h.properties;d?l=Object.assign(Object.create(d),a):this._map.set(t,l);let c,u,p=[],_=!1;for(c in l)u=a[c],void 0===u&&(u="initial"),!d||c in d||(_=!0),p.push(`${t}_-_${c}: ${u}`);return _&&this._invalidateMixinEntry(h),h&&(h.properties=l),i&&(o=`${e};${o}`),`${o}${p.join("; ")};`}}Ui.prototype.detectMixin=Ui.prototype.detectMixin,Ui.prototype.transformStyle=Ui.prototype.transformStyle,Ui.prototype.transformCustomStyle=Ui.prototype.transformCustomStyle,Ui.prototype.transformRules=Ui.prototype.transformRules,Ui.prototype.transformRule=Ui.prototype.transformRule,Ui.prototype.transformTemplate=Ui.prototype.transformTemplate,Ui.prototype._separator="_-_",Object.defineProperty(Ui.prototype,"invalidCallback",{get:()=>Wi,set(e){Wi=e}});
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
const Ji={},Xi="_applyShimCurrentVersion",Ki="_applyShimNextVersion",Zi=Promise.resolve();
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */function Qi(e){let t=Ji[e];t&&function(e){e[Xi]=e[Xi]||0,e._applyShimValidatingVersion=e._applyShimValidatingVersion||0,e[Ki]=(e[Ki]||0)+1}(t)}function es(e){return e[Xi]===e[Ki]}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
const ts=new Ui;class is{constructor(){this.customStyleInterface=null,ts.invalidCallback=Qi}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{ts.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,t){if(this.ensure(),Vi(e))return;Ji[t]=e;let i=ts.transformTemplate(e,t);e._styleAst=i}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let i=e[t],s=this.customStyleInterface.getStyleForCustomStyle(i);s&&ts.transformCustomStyle(s)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&u(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=function(e){let t=e.localName,i="",s="";return t?t.indexOf("-")>-1?i=t:(s=t,i=e.getAttribute&&e.getAttribute("is")||""):(i=e.is,s=e.extends),{is:i,typeExtension:s}}(e),i=Ji[t];if((!i||!Vi(i))&&i&&!es(i)){(function(e){return!es(e)&&e._applyShimValidatingVersion===e[Ki]})(i)||(this.prepareTemplate(i,t),function(e){e._applyShimValidatingVersion=e[Ki],e._validating||(e._validating=!0,Zi.then((function(){e[Xi]=e[Ki],e._validating=!1})))}(i));let s=e.shadowRoot;if(s){let e=s.querySelector("style");e&&(e.__cssRules=i._styleAst,e.textContent=Fi(i._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new is;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,i,s){e.flushCustomStyles(),e.prepareTemplate(t,i)},prepareTemplateStyles(e,t,i){window.ShadyCSS.prepareTemplate(e,t,i)},prepareTemplateDom(e,t){},styleSubtree(t,i){e.flushCustomStyles(),e.styleSubtree(t,i)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(e,t)=>p(e,t),flushCustomStyles(){e.flushCustomStyles()},nativeCss:b,nativeShadow:_,cssBuild:f,disableRuntime:y},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=ts;
/**
   * @fileoverview
   * @suppress {checkPrototypalTypes}
   * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
   * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
   * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
   * Google as part of the polymer project is also subject to an additional IP
   * rights grant found at http://polymer.github.io/PATENTS.txt
   */
const ss=/:host\(:dir\((ltr|rtl)\)\)/g,rs=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,ns=/:dir\((?:ltr|rtl)\)/,os=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),as=[];let ls=null,hs="";function ds(){hs=document.documentElement.getAttribute("dir")}function cs(e){if(!e.__autoDirOptOut){e.setAttribute("dir",hs)}}function us(){ds(),hs=document.documentElement.getAttribute("dir");for(let e=0;e<as.length;e++)cs(as[e])}const ps=ee(e=>{os||ls||(ds(),ls=new MutationObserver(us),ls.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=Ie(e);class i extends t{static _processStyleText(e,i){return e=t._processStyleText.call(this,e,i),!os&&ns.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=t.replace(ss,':host([dir="$1"])'),t=t.replace(rs,':host([dir="$2"]) $1'),t}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(ls&&ls.takeRecords().length&&us(),as.push(this),cs(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=as.indexOf(this);e>-1&&as.splice(e,1)}}}return i.__activateDir=!1,i});
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */let _s=!1,ms=[],fs=[];function gs(){_s=!0,requestAnimationFrame((function(){_s=!1,function(e){for(;e.length;)ys(e.shift())}(ms),setTimeout((function(){!function(e){for(let t=0,i=e.length;t<i;t++)ys(e.shift())}(fs)}))}))}function ys(e){const t=e[0],i=e[1],s=e[2];try{i.apply(t,s)}catch(e){setTimeout(()=>{throw e})}}function bs(e,t,i){_s||gs(),fs.push([e,t,i])}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */function vs(){document.body.removeAttribute("unresolved")}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
function As(e,t,i){return{index:e,removed:t,addedCount:i}}"interactive"===document.readyState||"complete"===document.readyState?vs():window.addEventListener("DOMContentLoaded",vs);function Cs(e,t,i,s,r,n){let o,a=0,l=0,h=Math.min(i-t,n-r);if(0==t&&0==r&&(a=function(e,t,i){for(let s=0;s<i;s++)if(!xs(e[s],t[s]))return s;return i}(e,s,h)),i==e.length&&n==s.length&&(l=function(e,t,i){let s=e.length,r=t.length,n=0;for(;n<i&&xs(e[--s],t[--r]);)n++;return n}(e,s,h-a)),r+=a,n-=l,(i-=l)-(t+=a)==0&&n-r==0)return[];if(t==i){for(o=As(t,[],0);r<n;)o.removed.push(s[r++]);return[o]}if(r==n)return[As(t,[],i-t)];let d=function(e){let t=e.length-1,i=e[0].length-1,s=e[t][i],r=[];for(;t>0||i>0;){if(0==t){r.push(2),i--;continue}if(0==i){r.push(3),t--;continue}let n,o=e[t-1][i-1],a=e[t-1][i],l=e[t][i-1];n=a<l?a<o?a:o:l<o?l:o,n==o?(o==s?r.push(0):(r.push(1),s=o),t--,i--):n==a?(r.push(3),t--,s=a):(r.push(2),i--,s=l)}return r.reverse(),r}(function(e,t,i,s,r,n){let o=n-r+1,a=i-t+1,l=new Array(o);for(let e=0;e<o;e++)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;e++)l[0][e]=e;for(let i=1;i<o;i++)for(let n=1;n<a;n++)if(xs(e[t+n-1],s[r+i-1]))l[i][n]=l[i-1][n-1];else{let e=l[i-1][n]+1,t=l[i][n-1]+1;l[i][n]=e<t?e:t}return l}(e,t,i,s,r,n));o=void 0;let c=[],u=t,p=r;for(let e=0;e<d.length;e++)switch(d[e]){case 0:o&&(c.push(o),o=void 0),u++,p++;break;case 1:o||(o=As(u,[],0)),o.addedCount++,u++,o.removed.push(s[p]),p++;break;case 2:o||(o=As(u,[],0)),o.addedCount++,u++;break;case 3:o||(o=As(u,[],0)),o.removed.push(s[p]),p++}return o&&c.push(o),c}function ws(e,t){return Cs(e,0,e.length,t,0,t.length)}function xs(e,t){return e===t}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */function Ss(e){return"slot"===e.localName}let Ps=class{static getFlattenedNodes(e){const t=te(e);return Ss(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>Ss(e)?te(e=e).assignedNodes({flatten:!0}):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Ss(this._target)?this._listenSlots([this._target]):te(this._target).children&&(this._listenSlots(te(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Ss(this._target)?this._unlistenSlots([this._target]):te(this._target).children&&(this._unlistenSlots(te(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,xe.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let i=e[t];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),i=ws(t,this._effectiveNodes);for(let t,s=0;s<i.length&&(t=i[s]);s++)for(let i,s=0;s<t.removed.length&&(i=t.removed[s]);s++)e.removedNodes.push(i);for(let s,r=0;r<i.length&&(s=i[r]);r++)for(let i=s.index;i<s.index+s.addedCount;i++)e.addedNodes.push(t[i]);this._effectiveNodes=t;let s=!1;return(e.addedNodes.length||e.removedNodes.length)&&(s=!0,this.callback.call(this._target,e)),s}_listenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];Ss(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];Ss(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */const Es=Element.prototype,Ts=Es.matches||Es.matchesSelector||Es.mozMatchesSelector||Es.msMatchesSelector||Es.oMatchesSelector||Es.webkitMatchesSelector,Is=function(e,t){return Ts.call(e,t)};class Os{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new Ps(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(te(this.node).contains(e))return!0;let t=e,i=e.ownerDocument;for(;t&&t!==i&&t!==this.node;)t=te(t).parentNode||te(t).host;return t===this.node}getOwnerRoot(){return te(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?te(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=te(this.node).assignedSlot;for(;t;)e.push(t),t=te(t).assignedSlot;return e}importNode(e,t){let i=this.node instanceof Document?this.node:this.node.ownerDocument;return te(i).importNode(e,t)}getEffectiveChildNodes(){return Ps.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),i=[];for(let s,r=0,n=t.length;r<n&&(s=t[r]);r++)s.nodeType===Node.ELEMENT_NODE&&Is(s,e)&&i.push(s);return i}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function zs(e,t){for(let i=0;i<t.length;i++){let s=t[i];Object.defineProperty(e,s,{get:function(){return this.node[s]},configurable:!0})}}class Rs{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}Os.prototype.cloneNode,Os.prototype.appendChild,Os.prototype.insertBefore,Os.prototype.removeChild,Os.prototype.replaceChild,Os.prototype.setAttribute,Os.prototype.removeAttribute,Os.prototype.querySelector,Os.prototype.querySelectorAll,Os.prototype.parentNode,Os.prototype.firstChild,Os.prototype.lastChild,Os.prototype.nextSibling,Os.prototype.previousSibling,Os.prototype.firstElementChild,Os.prototype.lastElementChild,Os.prototype.nextElementSibling,Os.prototype.previousElementSibling,Os.prototype.childNodes,Os.prototype.children,Os.prototype.classList,Os.prototype.textContent,Os.prototype.innerHTML;let Ns=Os;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(Os.prototype).forEach(t=>{"activeElement"!=t&&(e.prototype[t]=Os.prototype[t])}),zs(e.prototype,["classList"]),Ns=e,Object.defineProperties(Rs.prototype,{localTarget:{get(){const e=this.event.currentTarget,t=e&&ks(e).getOwnerRoot(),i=this.path;for(let e=0;e<i.length;e++){const s=i[e];if(ks(s).getOwnerRoot()===t)return s}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(e,t){for(let i=0;i<t.length;i++){let s=t[i];e[s]=function(){return this.node[s].apply(this.node,arguments)}}}(Os.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),zs(Os.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(e,t){for(let i=0;i<t.length;i++){let s=t[i];Object.defineProperty(e,s,{get:function(){return this.node[s]},set:function(e){this.node[s]=e},configurable:!0})}}(Os.prototype,["textContent","innerHTML","className"]);const ks=function(e){if((e=e||document)instanceof Ns)return e;if(e instanceof Rs)return e;let t=e.__domApi;return t||(t=e instanceof Event?new Rs(e):new Ns(e),e.__domApi=t),t},Ls=window.ShadyDOM,Ds=window.ShadyCSS;
/**
  @license
  Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */function Ms(e,t){return te(e).getRootNode()===t}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
let Fs=window.ShadyCSS;const Hs=ee(e=>{const t=ps(ni(yt(e))),i={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class s extends t{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(e,t,i,s){t!==i&&(super.attributeChangedCallback(e,t,i,s),this.attributeChanged(e,t,i))}attributeChanged(e,t,i){}_initializeProperties(){let e=Object.getPrototypeOf(this);e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,i){this._propertyToAttribute(e,t,i)}serializeValueToAttribute(e,t,i){this._valueToNodeAttribute(i||this,e,t)}extend(e,t){if(!e||!t)return e||t;let i=Object.getOwnPropertyNames(t);for(let s,r=0;r<i.length&&(s=i[r]);r++){let i=Object.getOwnPropertyDescriptor(t,s);i&&Object.defineProperty(e,s,i)}return e}mixin(e,t){for(let i in t)e[i]=t[i];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,i){i=i||{},t=null==t?{}:t;let s=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});s.detail=t;let r=i.node||this;return te(r).dispatchEvent(s),s}listen(e,t,i){e=e||this;let s=this.__boundListeners||(this.__boundListeners=new WeakMap),r=s.get(e);r||(r={},s.set(e,r));let n=t+i;r[n]||(r[n]=this._addMethodEventListenerToNode(e,t,i,this))}unlisten(e,t,i){e=e||this;let s=this.__boundListeners&&this.__boundListeners.get(e),r=t+i,n=s&&s[r];n&&(this._removeEventListenerFromNode(e,t,n),s[r]=null)}setScrollDirection(e,t){Zt(t||this,i[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=te(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){const e=ks(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return ks(this).getEffectiveChildNodes()}queryDistributedElements(e){return ks(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let i,s=0;i=e[s];s++)i.nodeType!==Node.COMMENT_NODE&&t.push(i.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?ks(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(e){return this!==e&&te(this).contains(e)&&te(this).getRootNode()===te(e).getRootNode()}isLocalDescendant(e){return this.root===te(e).getRootNode()}scopeSubtree(e,t=!1){return function(e,t=!1){if(!Ls||!Ds)return null;if(!Ls.handlesDynamicScoping)return null;const i=Ds.ScopingShim;if(!i)return null;const s=i.scopeForNode(e),r=te(e).getRootNode(),n=e=>{if(!Ms(e,r))return;const t=Array.from(Ls.nativeMethods.querySelectorAll.call(e,"*"));t.push(e);for(let e=0;e<t.length;e++){const n=t[e];if(!Ms(n,r))continue;const o=i.currentScopeForNode(n);o!==s&&(""!==o&&i.unscopeNode(n,o),i.scopeNode(n,s))}};if(n(e),t){const t=new MutationObserver(e=>{for(let t=0;t<e.length;t++){const i=e[t];for(let e=0;e<i.addedNodes.length;e++){const t=i.addedNodes[e];t.nodeType===Node.ELEMENT_NODE&&n(t)}}});return t.observe(e,{childList:!0,subtree:!0}),t}return null}(e,t)}getComputedStyleValue(e){return Fs.getComputedStyleValue(this,e)}debounce(e,t,i){return this._debouncers=this._debouncers||{},this._debouncers[e]=vt.debounce(this._debouncers[e],i>0?Ae.after(i):xe,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?Ae.run(e.bind(this),t):~xe.run(e.bind(this))}cancelAsync(e){e<0?xe.cancel(~e):Ae.cancel(e)}create(e,t){let i=document.createElement(e);if(t)if(i.setProperties)i.setProperties(t);else for(let e in t)i[e]=t[e];return i}elementMatches(e,t){return Is(t||this,e)}toggleAttribute(e,t){let i=this;return 3===arguments.length&&(i=arguments[2]),1==arguments.length&&(t=!i.hasAttribute(e)),t?(te(i).setAttribute(e,""),!0):(te(i).removeAttribute(e),!1)}toggleClass(e,t,i){i=i||this,1==arguments.length&&(t=!i.classList.contains(e)),t?i.classList.add(e):i.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,i,s){s=s||this,this.transform("translate3d("+e+","+t+","+i+")",s)}arrayDelete(e,t){let i;if(Array.isArray(e)){if(i=e.indexOf(t),i>=0)return e.splice(i,1)}else{if(i=he(this,e).indexOf(t),i>=0)return this.splice(e,i,1)}return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return s.prototype.is="",s}),Bs={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},$s={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},Vs=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},$s);
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */function Gs(e,t,i,s){!function(e,t,i){const s=e._noAccessors,r=Object.getOwnPropertyNames(e);for(let n=0;n<r.length;n++){let o=r[n];if(!(o in i))if(s)t[o]=e[o];else{let i=Object.getOwnPropertyDescriptor(e,o);i&&(i.configurable=!0,Object.defineProperty(t,o,i))}}}(t,e,s);for(let e in Bs)t[e]&&(i[e]=i[e]||[],i[e].push(t[e]))}function js(e,t){for(const i in t){const s=e[i],r=t[i];e[i]=!("value"in r)&&s&&"value"in s?Object.assign({value:s.value},r):r}}function qs(e,t,i){let s;const r={};class n extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(s)for(let e,t=0;t<s.length;t++)e=s[t],e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else t._finalizeClass.call(this)}static get properties(){const t={};if(s)for(let e=0;e<s.length;e++)js(t,s[e].properties);return js(t,e.properties),t}static get observers(){let t=[];if(s)for(let e,i=0;i<s.length;i++)e=s[i],e.observers&&(t=t.concat(e.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();const e=r.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}_registered(){const e=n.prototype;if(!e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))){e.__hasRegisterFinished=!0,super._registered();const t=Object.getPrototypeOf(this);let i=r.beforeRegister;if(i)for(let e=0;e<i.length;e++)i[e].call(t);if(i=r.registered,i)for(let e=0;e<i.length;e++)i[e].call(t)}}_applyListeners(){super._applyListeners();const e=r.listeners;if(e)for(let t=0;t<e.length;t++){const i=e[t];if(i)for(let e in i)this._addMethodEventListenerToNode(this,e,i[e])}}_ensureAttributes(){const e=r.hostAttributes;if(e)for(let t=e.length-1;t>=0;t--){const i=e[t];for(let e in i)this._ensureAttribute(e,i[e])}super._ensureAttributes()}ready(){super.ready();let e=r.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();let e=r.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();let e=r.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,i){super.attributeChanged();let s=r.attributeChanged;if(s)for(let r=0;r<s.length;r++)s[r].call(this,e,t,i)}}if(i){Array.isArray(i)||(i=[i]);let e=t.prototype.behaviors;s=function e(t,i,s){i=i||[];for(let r=t.length-1;r>=0;r--){let n=t[r];n?Array.isArray(n)?e(n,i):i.indexOf(n)<0&&(!s||s.indexOf(n)<0)&&i.unshift(n):console.warn("behavior is null, check for missing or 404 import")}return i}(i,null,e),n.prototype.behaviors=e?e.concat(i):s}return(t=>{s&&function(e,t,i){for(let s=0;s<t.length;s++)Gs(e,t[s],i,Vs)}(t,s,r),Gs(t,e,r,$s)})(n.prototype),n.generatedFrom=e,n}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
function Ys(e,t,i,s,r){let n;r&&(n="object"==typeof i&&null!==i,n&&(s=e.__dataTemp[t]));let o=s!==i&&(s==s||i==i);return n&&o&&(e.__dataTemp[t]=i),o}const Ws=ee(e=>class extends e{_shouldPropertyChange(e,t,i){return Ys(this,e,t,i,!0)}}),Us=ee(e=>class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,i){return Ys(this,e,t,i,this.mutableData)}});Ws._mutablePropertyChange=Ys;
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
let Js=null;function Xs(){return Js}Xs.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Xs,writable:!0}});const Ks=_t(Xs),Zs=Ws(Ks);const Qs=_t(class{});class er extends Qs{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(e&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,e=>{e.model=this,i(e)});else{let s=this.__dataHost.__dataHost;s&&s._addEventListenerToNode(e,t,i)}}_showHideChildren(e){let t=this.children;for(let i=0;i<t.length;i++){let s=t[i];if(Boolean(e)!=Boolean(s.__hideTemplateChildren__))if(s.nodeType===Node.TEXT_NODE)e?(s.__polymerTextContent__=s.textContent,s.textContent=""):s.textContent=s.__polymerTextContent__;else if("slot"===s.localName)if(e)s.__polymerReplaced__=document.createComment("hidden-slot"),te(te(s).parentNode).replaceChild(s.__polymerReplaced__,s);else{const e=s.__polymerReplaced__;e&&te(te(e).parentNode).replaceChild(s,e)}else s.style&&(e?(s.__polymerDisplay__=s.style.display,s.style.display="none"):s.style.display=s.__polymerDisplay__);s.__hideTemplateChildren__=e,s._showHideChildren&&s._showHideChildren(e)}}_setUnmanagedPropertyToNode(e,t,i){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(e,t,i)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}er.prototype.__dataHost,er.prototype.__templatizeOptions,er.prototype._methodHost,er.prototype.__templatizeOwner,er.prototype.__hostProps;const tr=Ws(er);function ir(e,t,i){let s=i.mutableData?tr:er;or.mixin&&(s=or.mixin(s));let r=class extends s{};return r.prototype.__templatizeOptions=i,r.prototype._bindTemplate(e),function(e,t,i,s){let r=i.hostProps||{};for(let t in s.instanceProps){delete r[t];let i=s.notifyInstanceProp;i&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:nr(t,i)})}if(s.forwardHostProp&&t.__dataHost)for(let t in r)i.hasHostProps||(i.hasHostProps=!0),e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,i){e.__dataHost._setPendingPropertyOrPath("_host_"+t,i[t],!0,!0)}})}(r,e,t,i),r}function sr(e,t,i){let s=i.forwardHostProp;if(s&&t.hasHostProps){let r=t.templatizeTemplateClass;if(!r){let e=i.mutableData?Zs:Ks;r=t.templatizeTemplateClass=class extends e{};let n=t.hostProps;for(let e in n)r.prototype._addPropertyEffect("_host_"+e,r.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:rr(e,s)}),r.prototype._createNotifyingProperty("_host_"+e)}!function(e,t){Js=e,Object.setPrototypeOf(e,t.prototype),new t,Js=null}(e,r),e.__dataProto&&Object.assign(e.__data,e.__dataProto),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties()}}function rr(e,t){return function(e,i,s){t.call(e.__templatizeOwner,i.substring("_host_".length),s[i])}}function nr(e,t){return function(e,i,s){t.call(e.__templatizeOwner,e,i,s[i])}}function or(e,t,i){if(i=i||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let s=(t?t.constructor:er)._parseTemplate(e),r=s.templatizeInstanceClass;r||(r=ir(e,s,i),s.templatizeInstanceClass=r),sr(e,s,i);let n=class extends r{};return n.prototype._methodHost=function(e){let t=e.__dataHost;return t&&t._methodHost||t}(e),n.prototype.__dataHost=e,n.prototype.__templatizeOwner=t,n.prototype.__hostProps=s.hostProps,n=n,n}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
const ar=ni(Us(_t(HTMLElement)));customElements.define("dom-bind",class extends ar{static get observedAttributes(){return["mutable-data"]}constructor(){super(),this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,t,i,s){this.mutableData=!0}connectedCallback(){this.style.display="none",this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){te(te(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver(()=>{if(e=this.querySelector("template"),!e)throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()});return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
const lr=Us(bt);class hr extends lr{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),this.style.display="none",this.__isDetached){this.__isDetached=!1;let e=te(te(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){let e=this.template=this.querySelector("template");if(!e){let e=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}let t={};t[this.as]=!0,t[this.indexAs]=!0,t[this.itemsIndexAs]=!0,this.__ctor=or(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:t,forwardHostProp:function(e,t){let i=this.__instances;for(let s,r=0;r<i.length&&(s=i[r]);r++)s.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,i){if((s=this.as)===(r=t)||re(s,r)||ne(s,r)){let s=e[this.itemsIndexAs];t==this.as&&(this.items[s]=i);let r=oe(this.as,`${JSCompiler_renameProperty("items",this)}.${s}`,t);this.notifyPath(r,i)}var s,r}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,i=this.__getMethodHost();return function(){return i[t].apply(i,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let e=performance.now(),t=this._targetFrameTime/(e-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*t)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=e,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let i=0;i<t.length;i++)0===e.indexOf(t[i])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(e,t=0){this.__renderDebouncer=vt.debounce(this.__renderDebouncer,t>0?Ae.after(t):xe,e.bind(this)),Ct(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),hi()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let e=this.items||[],t=new Array(e.length);for(let i=0;i<e.length;i++)t[i]=i;this.__filterFn&&(t=t.filter((t,i,s)=>this.__filterFn(e[t],i,s))),this.__sortFn&&t.sort((t,i)=>this.__sortFn(e[t],e[i]));const i=this.__itemsIdxToInstIdx={};let s=0;const r=Math.min(t.length,this.__limit);for(;s<r;s++){let r=this.__instances[s],n=t[s],o=e[n];i[n]=s,r?(r._setPendingProperty(this.as,o),r._setPendingProperty(this.indexAs,s),r._setPendingProperty(this.itemsIndexAs,n),r._flushProperties()):this.__insertInstance(o,s,n)}for(let e=this.__instances.length-1;e>=s;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];const i=te(t.root);for(let e=0;e<t.children.length;e++){let s=t.children[e];i.appendChild(s)}return t}__attachInstance(e,t){let i=this.__instances[e];t.insertBefore(i.root,this)}__detachAndRemoveInstance(e){let t=this.__detachInstance(e);t&&this.__pool.push(t),this.__instances.splice(e,1)}__stampInstance(e,t,i){let s={};return s[this.as]=e,s[this.indexAs]=t,s[this.itemsIndexAs]=i,new this.__ctor(s)}__insertInstance(e,t,i){let s=this.__pool.pop();s?(s._setPendingProperty(this.as,e),s._setPendingProperty(this.indexAs,t),s._setPendingProperty(this.itemsIndexAs,i),s._flushProperties()):s=this.__stampInstance(e,t,i);let r=this.__instances[t+1],n=r?r.children[0]:this;return te(te(this).parentNode).insertBefore(s.root,n),this.__instances[t]=s,s}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let i=e.slice(6),s=i.indexOf("."),r=s<0?i:i.substring(0,s);if(r==parseInt(r,10)){let e=s<0?"":i.substring(s+1);this.__handleObservedPaths(e);let n=this.__itemsIdxToInstIdx[r],o=this.__instances[n];if(o){let i=this.as+(e?"."+e:"");o._setPendingPropertyOrPath(i,t,!1,!0),o._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return function(e,t){let i;for(;t;)if(i=t.__templatizeInstance){if(i.__dataHost==e)return i;t=i.__dataHost}else t=te(t).parentNode;return null}
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */(this.template,e)}}customElements.define(hr.is,hr);
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
class dr extends bt{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=vt.debounce(this.__renderDebouncer,xe,()=>this.__render()),Ct(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=te(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||te(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),this.style.display="none",this.if&&this.__debounceRender()}render(){hi()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let e=te(this).parentNode;if(e){if(!this.__ctor){let e=te(this).querySelector("template");if(!e){let e=new MutationObserver(()=>{if(!te(this).querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}this.__ctor=or(e,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[se(e)]=!0))}})}if(this.__instance){this.__syncHostProperties();let t=this.__instance.children;if(t&&t.length){if(te(this).previousSibling!==t[t.length-1])for(let i,s=0;s<t.length&&(i=t[s]);s++)te(e).insertBefore(i,this)}}else this.__instance=new this.__ctor,te(e).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let e=this.__invalidProps;if(e){for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=te(e[0]).parentNode;if(t){t=te(t);for(let i,s=0;s<e.length&&(i=e[s]);s++)t.removeChild(i)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let e=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(e)}}customElements.define(dr.is,dr);
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
let cr=ee(e=>{let t=yt(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let i=t.path;if(i==JSCompiler_renameProperty("items",this)){let i=t.base||[],s=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),s){let e=ws(i,s);this.__applySplices(e)}this.__lastItems=i,this.__lastMulti=e}else if(t.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(t.value.indexSplices);else{let e=i.slice(`${JSCompiler_renameProperty("items",this)}.`.length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let i=0;i<e.length;i++){let s=e[i];t.forEach((e,i)=>{e<s.index||(e>=s.index+s.removed.length?t.set(i,e+s.addedCount-s.removed.length):t.set(i,-1))});for(let e=0;e<s.addedCount;e++){let i=s.index+e;t.has(this.items[i])&&t.set(this.items[i],i)}}this.__updateLinks();let i=0;t.forEach((e,s)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null,t.delete(s)):i++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach(t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)})}else this.__selectedMap.forEach(e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach((i,s)=>{t==e++&&this.deselect(s)})}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let i;this.__selectedMap.delete(e),this.multi&&(i=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}})(bt);class ur extends cr{static get is(){return"array-selector"}static get template(){return null}}customElements.define(ur.is,ur);
/**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
const pr=Hs(HTMLElement).prototype;
/**
  @license
  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */var _r=new Set;const mr={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(_r.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)}),this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():T||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=ks(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function t(){document.removeEventListener("readystatechange",t),e()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(e){e!==this&&e._findParent()}),this):(_r.forEach((function(e){e!==this&&e._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?_r.delete(this):_r.add(this)}},fr={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(e,t){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),t)if("document"===e)this.scrollTarget=this._doc;else if("string"==typeof e){var i=this.domHost;this.scrollTarget=i&&i.$?i.$[e]:ks(this.ownerDocument).querySelector("#"+e)}else this._isValidScrollTarget()&&(this._oldScrollTarget=e,this._toggleScrollListener(this._shouldHaveListener,e))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(e){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=e)},set _scrollLeft(e){this.scrollTarget===this._doc?window.scrollTo(e,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=e)},scroll:function(e,t){var i;"object"==typeof e?(i=e.left,t=e.top):i=e,i=i||0,t=t||0,this.scrollTarget===this._doc?window.scrollTo(i,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=i,this.scrollTarget.scrollTop=t)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(e,t){var i=t===this._doc?window:t;e?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),i.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(i.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(e){this._shouldHaveListener=e,this._toggleScrollListener(e,this.scrollTarget)}};
/**
  @license
  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at
  http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
  http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
  found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
  part of the polymer project is also subject to an additional IP rights grant
  found at http://polymer.github.io/PATENTS.txt
  */
/**
  @license
  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
var gr=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),yr=gr&&gr[1]>=8,br=Ce,vr=we,Ar=xe;const Cr=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let i=t?t(Hs(HTMLElement)):Hs(HTMLElement);return i=qs(e,i,e.behaviors),i.is=i.prototype.is=e.is,i}({behaviors:[mr,fr],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_collection:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedVirtualIndex:-1,_itemsPerRow:1,_rowHeight:0,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return(this.grid?this._physicalRows*this._rowHeight:this._physicalSize)-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var e=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,e-this._physicalCount)},set _virtualStart(e){e=this._clamp(e,0,this._maxVirtualStart),this.grid&&(e-=e%this._itemsPerRow),this._virtualStartVal=e},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(e){(e%=this._physicalCount)<0&&(e=this._physicalCount+e),this.grid&&(e-=e%this._itemsPerRow),this._physicalStartVal=e},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(e){this._physicalCountVal=e},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var e=this._firstVisibleIndexVal;if(null==e){var t=this._physicalTop+this._scrollOffset;e=this._iterateItems((function(e,i){return(t+=this._getPhysicalSizeIncrement(e))>this._scrollPosition?this.grid?i-i%this._itemsPerRow:i:this.grid&&this._virtualCount-1===i?i-i%this._itemsPerRow:void 0}))||0,this._firstVisibleIndexVal=e}return e},get lastVisibleIndex(){var e=this._lastVisibleIndexVal;if(null==e){if(this.grid)e=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1);else{var t=this._physicalTop+this._scrollOffset;this._iterateItems((function(i,s){t<this._scrollBottom&&(e=s),t+=this._getPhysicalSizeIncrement(i)}))}this._lastVisibleIndexVal=e}return e},get _scrollOffset(){return this._scrollerPaddingTop},attached:function(){this._debounce("_render",this._render,br),this.listen(this,"iron-resize","_resizeHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler")},updateViewportBoundaries:function(){var e=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(e["padding-top"],10),this._isRTL=Boolean("rtl"===e.direction),this._viewportWidth=this.$.items.offsetWidth,this._viewportHeight=this._scrollTargetHeight,this.grid&&this._updateGridMetrics()},_scrollHandler:function(){var e=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),t=e-this._scrollPosition,i=t>=0;if(this._scrollPosition=e,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;var s=Math.round(t/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+s,this._physicalStart=this._physicalStart+s,this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._update()}else if(this._physicalCount>0){var r=this._getReusables(i);i?(this._physicalTop=r.physicalTop,this._virtualStart=this._virtualStart+r.indexes.length,this._physicalStart=this._physicalStart+r.indexes.length):(this._virtualStart=this._virtualStart-r.indexes.length,this._physicalStart=this._physicalStart-r.indexes.length),this._update(r.indexes,i?null:r.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),Ar)}},_getReusables:function(e){var t,i,s,r=[],n=this._hiddenContentSize*this._ratio,o=this._virtualStart,a=this._virtualEnd,l=this._physicalCount,h=this._physicalTop+this._scrollOffset,d=this._physicalBottom+this._scrollOffset,c=this._scrollTop,u=this._scrollBottom;for(e?(t=this._physicalStart,i=c-h):(t=this._physicalEnd,i=d-u);i-=s=this._getPhysicalSizeIncrement(t),!(r.length>=l||i<=n);)if(e){if(a+r.length+1>=this._virtualCount)break;if(h+s>=c-this._scrollOffset)break;r.push(t),h+=s,t=(t+1)%l}else{if(o-r.length<=0)break;if(h+this._physicalSize-s<=u)break;r.push(t),h-=s,t=0===t?l-1:t-1}return{indexes:r,physicalTop:h-this._scrollOffset}},_update:function(e,t){if(!(e&&0===e.length||0===this._physicalCount)){if(this._manageFocus(),this._assignModels(e),this._updateMetrics(e),t)for(;t.length;){var i=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(i)}this._positionItems(),this._updateScrollerSize()}},_isClientFull:function(){return 0!=this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(e){var t=this._clamp(this._physicalCount+e,3,this._virtualCount-this._virtualStart),i=(t=this._convertIndexToCompleteRow(t))-this._physicalCount,s=Math.round(.5*this._physicalCount);if(!(i<0)){if(i>0){var r=window.performance.now();[].push.apply(this._physicalItems,this._createPool(i));for(var n=0;n<i;n++)this._physicalSizes.push(0);this._physicalCount=this._physicalCount+i,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart=this._physicalStart+i),this._update(),this._templateCost=(window.performance.now()-r)/i,s=Math.round(.5*this._physicalCount)}this._virtualEnd>=this._virtualCount-1||0===s||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,s)),vr):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,s),Ar))}},_render:function(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){var e=this._getReusables(!0);this._physicalTop=e.physicalTop,this._virtualStart=this._virtualStart+e.indexes.length,this._physicalStart=this._physicalStart+e.indexes.length,this._update(e.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(3))},_itemsChanged:function(e){"items"===e.path&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._collection=(this.items,null),this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._removeFocusedItem(),this._debounce("_render",this._render,br))},_iterateItems:function(e,t){var i,s,r,n;if(2===arguments.length&&t){for(n=0;n<t.length;n++)if(i=t[n],s=this._computeVidx(i),null!=(r=e.call(this,i,s)))return r}else{for(i=this._physicalStart,s=this._virtualStart;i<this._physicalCount;i++,s++)if(null!=(r=e.call(this,i,s)))return r;for(i=0;i<this._physicalStart;i++,s++)if(null!=(r=e.call(this,i,s)))return r}},_computeVidx:function(e){return e>=this._physicalStart?this._virtualStart+(e-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+e},_updateMetrics:function(e){hi();var t=0,i=0,s=this._physicalAverageCount,r=this._physicalAverage;this._iterateItems((function(e,s){i+=this._physicalSizes[e],this._physicalSizes[e]=this._physicalItems[e].offsetHeight,t+=this._physicalSizes[e],this._physicalAverageCount+=this._physicalSizes[e]?1:0}),e),this.grid?(this._updateGridMetrics(),this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight):(i=1===this._itemsPerRow?i:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight,this._physicalSize=this._physicalSize+t-i,this._itemsPerRow=1),this._physicalAverageCount!==s&&(this._physicalAverage=Math.round((r*s+t)/this._physicalAverageCount))},_positionItems:function(){this._adjustScrollPosition();var e=this._physicalTop;this._iterateItems((function(t,i){this.translate3d(0,e+"px",0,this._physicalItems[t]),e+=this._physicalSizes[t]}))},_getPhysicalSizeIncrement:function(e){return this.grid?this._computeVidx(e)%this._itemsPerRow!=this._itemsPerRow-1?0:this._rowHeight:this._physicalSizes[e]},_adjustScrollPosition:function(){var e=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==e){this._physicalTop=this._physicalTop-e;var t=this._scrollTop;!yr&&t>0&&this._resetScrollPosition(t-e)}},_resetScrollPosition:function(e){this.scrollTarget&&e>=0&&(this._scrollTop=e,this._scrollPosition=this._scrollTop)},_updateScrollerSize:function(e){this.grid?this._estScrollHeight=this._virtualRowCount*this._rowHeight:this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,((e=(e=(e=e||0===this._scrollHeight)||this._scrollPosition>=this._estScrollHeight-this._physicalSize)||this.grid&&this.$.items.style.height<this._estScrollHeight)||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight)},scrollToIndex:function(e){if(!("number"!=typeof e||e<0||e>this.items.length-1)&&(hi(),0!==this._physicalCount)){e=this._clamp(e,0,this._virtualCount-1),(!this._isIndexRendered(e)||e>=this._maxVirtualStart)&&(this._virtualStart=this.grid?e-2*this._itemsPerRow:e-1),this._manageFocus(),this._assignModels(),this._updateMetrics(),this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;for(var t=this._physicalStart,i=this._virtualStart,s=0,r=this._hiddenContentSize;i<e&&s<=r;)s+=this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,i++;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+s),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null}},_resetAverage:function(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",(function(){this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this.updateViewportBoundaries(),this._isVisible?(this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)}),br)},_convertIndexToCompleteRow:function(e){return this._itemsPerRow=this._itemsPerRow||1,this.grid?Math.ceil(e/this._itemsPerRow)*this._itemsPerRow:e},_isIndexRendered:function(e){return e>=this._virtualStart&&e<=this._virtualEnd},_getPhysicalIndex:function(e){return(this._physicalStart+(e-this._virtualStart))%this._physicalCount},_clamp:function(e,t,i){return Math.min(i,Math.max(t,e))},_debounce:function(e,t,i){this._debouncers=this._debouncers||{},this._debouncers[e]=vt.debounce(this._debouncers[e],i,t.bind(this)),Ct(this._debouncers[e])}});
/**
  @license
  Copyright (c) 2017 Vaadin Ltd.
  This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
  */class wr extends Cr{static get is(){return"vaadin-grid-scroller"}static get properties(){return{size:{type:Number,notify:!0},_vidxOffset:{value:0}}}static get observers(){return["_effectiveSizeChanged(_effectiveSize)"]}connectedCallback(){super.connectedCallback(),this._scrollHandler()}_updateScrollerItem(e,t){}_afterScroll(){}_getRowTarget(){}_createScrollerRows(){}_canPopulate(){}scrollToIndex(e){this._warnPrivateAPIAccess("scrollToIndex"),e>0&&(this._pendingScrollToIndex=null),!parseInt(this.$.items.style.borderTopWidth)&&e>0&&(this._pendingScrollToIndex=e),this._scrollingToIndex=!0,e=Math.min(Math.max(e,0),this._effectiveSize-1),this.$.table.scrollTop=e/this._effectiveSize*(this.$.table.scrollHeight-this.$.table.offsetHeight),this._scrollHandler(),this._accessIronListAPI(()=>this._maxScrollTop)&&this._virtualCount<this._effectiveSize&&this._adjustVirtualIndexOffset(1e6),this._accessIronListAPI(()=>super.scrollToIndex(e-this._vidxOffset)),this._scrollHandler();const t=Array.from(this.$.items.children).filter(t=>t.index===e)[0];if(t){const e=t.getBoundingClientRect().top-this.$.header.getBoundingClientRect().bottom;Math.abs(e)>1&&(this.$.table.scrollTop+=e,this._scrollHandler())}this._scrollingToIndex=!1}_effectiveSizeChanged(e){let t,i=0;if(this._iterateItems((e,s)=>{if(s===this._firstVisibleIndex){const s=this._physicalItems[e];t=s.index,i=s.getBoundingClientRect().top}}),this.items&&e<this.items.length&&(this._scrollTop=0),!Array.isArray(this.items)){const t=this._edge||this._ie?3e4:1e5;this.items={length:Math.min(e,t)}}this._accessIronListAPI(()=>super._itemsChanged({path:"items"})),this._virtualCount=Math.min(this.items.length,e)||0,0===this._scrollTop&&(this._accessIronListAPI(()=>this._scrollToIndex(Math.min(e-1,t))),this._iterateItems((e,s)=>{const r=this._physicalItems[e];if(r.index===t&&(this.$.table.scrollTop+=Math.round(r.getBoundingClientRect().top-i)),r.index===this._focusedItemIndex&&this._itemsFocusable&&this.$.items.contains(this.shadowRoot.activeElement)){const e=Array.from(this._itemsFocusable.parentElement.children).indexOf(this._itemsFocusable);r.children[e].focus()}})),this._assignModels(),requestAnimationFrame(()=>this._update())}_positionItems(){let e;this._adjustScrollPosition(),isNaN(this._physicalTop)&&(e=!0,this._physicalTop=0);let t=this._physicalTop;this._iterateItems((e,i)=>{this._physicalItems[e].style.transform=`translateY(${t}px)`,t+=this._physicalSizes[e]}),e&&this._scrollToIndex(0)}_increasePoolIfNeeded(e){0===e&&this._scrollingToIndex||!this._canPopulate()||!this._effectiveSize||(this._initialPoolCreated?this._optPhysicalSize!==1/0&&(this._debounceIncreasePool=vt.debounce(this._debounceIncreasePool,Ce,()=>{this._updateMetrics();const e=this._optPhysicalSize-this._physicalSize;let t=Math.ceil(e/this._physicalAverage);this._physicalCount+t>this._effectiveSize&&(t=Math.max(0,this._effectiveSize-this._physicalCount)),this._physicalSize&&t>0&&(super._increasePoolIfNeeded(t),this.__reorderChildNodes())})):(this._initialPoolCreated=!0,super._increasePoolIfNeeded(25)))}__reorderChildNodes(){const e=Array.from(this.$.items.childNodes);!!e.reduce((e,t,i,s)=>{if(0===i||s[i-1].index===t.index-1)return e},!0)||e.sort((e,t)=>e.index-t.index).forEach(e=>this.$.items.appendChild(e))}_createPool(e){const t=document.createDocumentFragment(),i=this._createScrollerRows(e);i.forEach(e=>t.appendChild(e)),this._getRowTarget().appendChild(t);const s=this.querySelector("[slot]");if(s){const e=s.getAttribute("slot");s.setAttribute("slot","foo-bar"),s.setAttribute("slot",e)}return this._updateHeaderFooterMetrics(),bs(this,()=>this.notifyResize()),i}_assignModels(e){this._iterateItems((e,t)=>{const i=this._physicalItems[e];this._toggleAttribute("hidden",t>=this._effectiveSize,i),this._updateScrollerItem(i,t+(this._vidxOffset||0))},e)}_scrollHandler(){const e=this.$.table.scrollTop-this._scrollPosition;this._accessIronListAPI(super._scrollHandler);const t=this._vidxOffset;this._accessIronListAPI(()=>this._maxScrollTop)&&this._virtualCount<this._effectiveSize&&this._adjustVirtualIndexOffset(e),this._vidxOffset!==t&&this._update(),this._afterScroll()}_adjustVirtualIndexOffset(e){if(Math.abs(e)>1e4){if(this._noScale)return void(this._noScale=!1);const e=this.$.table.scrollTop/(this.$.table.scrollHeight-this.$.table.offsetHeight),t=e*this._effectiveSize;this._vidxOffset=Math.round(t-e*this._virtualCount)}else{const e=this._vidxOffset||0,t=1e3,i=100;0===this._scrollTop?(this._vidxOffset=0,e!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<t&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,i),e!==this._vidxOffset&&super.scrollToIndex(this.firstVisibleIndex+(e-this._vidxOffset)),this._noScale=!0);const s=this._effectiveSize-this._virtualCount;this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=s,e!==this._vidxOffset&&super.scrollToIndex(this._virtualCount)):this.firstVisibleIndex>this._virtualCount-t&&this._vidxOffset<s&&(this._vidxOffset+=Math.min(s-this._vidxOffset,i),e!==this._vidxOffset&&super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-e)),this._noScale=!0)}}_accessIronListAPI(e){this._warnPrivateAPIAccessAsyncEnabled=!1;const t=e.apply(this);return this._debouncerWarnPrivateAPIAccess=vt.debounce(this._debouncerWarnPrivateAPIAccess,Ce,()=>this._warnPrivateAPIAccessAsyncEnabled=!0),t}_debounceRender(e,t){super._debounceRender(()=>this._accessIronListAPI(e),t)}_warnPrivateAPIAccess(e){this._warnPrivateAPIAccessAsyncEnabled&&console.warn(`Accessing private API (${e})!`)}_render(){this._accessIronListAPI(super._render)}_createFocusBackfillItem(){}_multiSelectionChanged(){}clearSelection(){}_itemsChanged(){}_manageFocus(){}_removeFocusedItem(){}get _firstVisibleIndex(){return this._accessIronListAPI(()=>super.firstVisibleIndex)}get _lastVisibleIndex(){return this._accessIronListAPI(()=>super.lastVisibleIndex)}_scrollToIndex(e){this._accessIronListAPI(()=>this.scrollToIndex(e))}get firstVisibleIndex(){return this._warnPrivateAPIAccess("firstVisibleIndex"),super.firstVisibleIndex}set firstVisibleIndex(e){this._warnPrivateAPIAccess("firstVisibleIndex"),super.firstVisibleIndex=e}get lastVisibleIndex(){return this._warnPrivateAPIAccess("lastVisibleIndex"),super.lastVisibleIndex}set lastVisibleIndex(e){this._warnPrivateAPIAccess("lastVisibleIndex"),super.lastVisibleIndex=e}updateViewportBoundaries(){this._warnPrivateAPIAccess("updateViewportBoundaries"),super.updateViewportBoundaries.apply(this,arguments)}_resizeHandler(){super._resizeHandler(),hi()}}customElements.define(wr.is,wr);
/**
  @license
  Copyright (c) 2017 Vaadin Ltd.
  This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
  */
const xr=e=>class extends e{static get observers(){return["_a11yUpdateGridSize(size, _columnTree, _columnTree.*)"]}_a11yGetHeaderRowCount(e){return e.filter(e=>e.some(e=>e._headerTemplate||e.headerRenderer||e.path||e.header)).length}_a11yGetFooterRowCount(e){return e.filter(e=>e.some(e=>e._headerTemplate||e.headerRenderer)).length}_a11yUpdateGridSize(e,t){if(void 0===e||void 0===t)return;const i=t[t.length-1];this.$.table.setAttribute("aria-rowcount",e+this._a11yGetHeaderRowCount(t)+this._a11yGetFooterRowCount(t)),this.$.table.setAttribute("aria-colcount",i&&i.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){Array.from(this.$.header.children).forEach((e,t)=>e.setAttribute("aria-rowindex",t+1))}_a11yUpdateFooterRows(){Array.from(this.$.footer.children).forEach((e,t)=>e.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+t+1))}_a11yUpdateRowRowindex(e,t){e.setAttribute("aria-rowindex",t+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(e,t){e.setAttribute("aria-selected",Boolean(t)),Array.from(e.children).forEach(e=>e.setAttribute("aria-selected",Boolean(t)))}_a11yUpdateRowLevel(e,t){e.setAttribute("aria-level",t+1)}_a11yUpdateRowDetailsOpened(e,t){Array.from(e.children).forEach(e=>{"boolean"==typeof t?e.setAttribute("aria-expanded",t):e.hasAttribute("aria-expanded")&&e.removeAttribute("aria-expanded")})}_a11ySetRowDetailsCell(e,t){Array.from(e.children).forEach(e=>{e!==t&&e.setAttribute("aria-controls",t.id)})}_a11yUpdateCellColspan(e,t){e.setAttribute("aria-colspan",Number(t))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(e=>{let t=e.parentNode;for(;t&&"vaadin-grid-cell-content"!==t.localName;)t=t.parentNode;if(t&&t.assignedSlot){t.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(e.direction)]||"none")}})}}
/**
  @license
  Copyright (c) 2017 Vaadin Ltd.
  This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
  */,Sr=e=>class extends e{static get properties(){return{activeItem:{type:Object,notify:!0,value:null}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this))}_activateItem(e){const t=e.detail.model,i=t?t.item:null;i&&(this.activeItem=this._itemsEqual(this.activeItem,i)?null:i)}_onClick(e){if(e.defaultPrevented)return;const t=e.composedPath(),i=t[t.indexOf(this.$.table)-3];if(!i||i.getAttribute("part").indexOf("details-cell")>-1)return;const s=i._content,r=this.getRootNode().activeElement;s.contains(r)&&(!this._ie||this._isFocusable(r))||this._isFocusable(e.target)||this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(i.parentElement)}}))}_isFocusable(e){if(!e.parentNode)return!1;const t=-1!==Array.from(e.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, label, a[href], area[href]")).filter(e=>"cell body-cell"!==e.getAttribute("part")).indexOf(e);return!e.disabled&&t}}
/**
  @license
  Copyright (c) 2017 Vaadin Ltd.
  This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
  */,Pr=e=>class extends e{static get properties(){return{items:Array}}static get observers(){return["_itemsChanged(items, items.*, isAttached)"]}_itemsChanged(e,t,i){if(i){if(!Array.isArray(e))return null==e&&(this.size=0),void(this.dataProvider===this._arrayDataProvider&&(this.dataProvider=void 0));this.size=e.length,this.dataProvider=this.dataProvider||this._arrayDataProvider,this.clearCache(),this._ensureFirstPageLoaded()}}_arrayDataProvider(e,t){let i=(Array.isArray(this.items)?this.items:[]).slice(0);this._filters&&this._checkPaths(this._filters,"filtering",i)&&(i=this._filter(i)),this.size=i.length,e.sortOrders.length&&this._checkPaths(this._sorters,"sorting",i)&&(i=i.sort(this._multiSort.bind(this)));const s=e.page*e.pageSize,r=s+e.pageSize;t(i.slice(s,r),i.length)}_checkPaths(e,t,i){if(!i.length)return!1;let s=!0;for(var r in e){const n=e[r].path;if(!n||-1===n.indexOf("."))continue;const o=n.replace(/\.[^\.]*$/,"");void 0===pr.get(o,i[0])&&(console.warn(`Path "${n}" used for ${t} does not exist in all of the items, ${t} is disabled.`),s=!1)}return s}_multiSort(e,t){return this._sorters.map(i=>"asc"===i.direction?this._compare(pr.get(i.path,e),pr.get(i.path,t)):"desc"===i.direction?this._compare(pr.get(i.path,t),pr.get(i.path,e)):0).reduce((e,t)=>e||t,0)}_normalizeEmptyValue(e){return[void 0,null].indexOf(e)>=0?"":isNaN(e)?e.toString():e}_compare(e,t){return(e=this._normalizeEmptyValue(e))<(t=this._normalizeEmptyValue(t))?-1:e>t?1:0}_filter(e){return e.filter((e,t)=>0===this._filters.filter(t=>{const i=this._normalizeEmptyValue(pr.get(t.path,e)),s=this._normalizeEmptyValue(t.value).toString().toLowerCase();return-1===i.toString().toLowerCase().indexOf(s)}).length)}}
/**
  @license
  Copyright (c) 2017 Vaadin Ltd.
  This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
  */,Er=e=>class extends(ni(e)){ready(){super.ready();const e=this.$.scroller;Jt(e,"track",this._onHeaderTrack.bind(this)),e.addEventListener("touchmove",t=>e.hasAttribute("column-resizing")&&t.preventDefault()),e.addEventListener("contextmenu",e=>"resize-handle"==e.target.getAttribute("part")&&e.preventDefault()),e.addEventListener("mousedown",e=>"resize-handle"===e.target.getAttribute("part")&&e.preventDefault())}_onHeaderTrack(e){const t=e.target;if("resize-handle"===t.getAttribute("part")){let n=t.parentElement._column;for(this._toggleAttribute("column-resizing",!0,this.$.scroller);"vaadin-grid-column-group"===n.localName;)n=Array.prototype.slice.call(n._childColumns,0).sort((function(e,t){return e._order-t._order})).filter((function(e){return!e.hidden})).pop();const o=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]'));var i=o.filter(e=>e._column===n)[0];if(i.offsetWidth){var s=window.getComputedStyle(i),r=10+parseInt(s.paddingLeft)+parseInt(s.paddingRight)+parseInt(s.borderLeftWidth)+parseInt(s.borderRightWidth)+parseInt(s.marginLeft)+parseInt(s.marginRight);n.width=Math.max(r,i.offsetWidth+e.detail.x-i.getBoundingClientRect().right)+"px",n.flexGrow=0}o.sort((function(e,t){return e._column._order-t._column._order})).forEach((function(e,t,s){t<s.indexOf(i)&&(e._column.width=e.offsetWidth+"px",e._column.flexGrow=0)})),"end"===e.detail.state&&(this._toggleAttribute("column-resizing",!1,this.$.scroller),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:n}}))),this._resizeHandler()}}}
/**
  @license
  Copyright (c) 2017 Vaadin Ltd.
  This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
  */,Tr=class e{constructor(e,t,i){this.grid=e,this.parentCache=t,this.parentItem=i,this.itemCaches={},this.items={},this.effectiveSize=0,this.size=0,this.pendingRequests={}}isLoading(){return Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter(e=>this.itemCaches[e].isLoading())[0]}getItemForIndex(e){const{cache:t,scaledIndex:i}=this.getCacheAndIndex(e);return t.items[i]}updateSize(){this.effectiveSize=!this.parentItem||this.grid._isExpanded(this.parentItem)?this.size+Object.keys(this.itemCaches).reduce((e,t)=>{const i=this.itemCaches[t];return i.updateSize(),e+i.effectiveSize},0):0}ensureSubCacheForScaledIndex(t){if(!this.itemCaches[t]){const i=new e(this.grid,this,this.items[t]);this.itemCaches[t]=i,this.grid._loadPage(0,i)}}getCacheAndIndex(e){let t=e;const i=Object.keys(this.itemCaches);for(var s=0;s<i.length;s++){const e=Number(i[s]),r=this.itemCaches[e];if(t<=e)return{cache:this,scaledIndex:t};if(t<=e+r.effectiveSize)return r.getCacheAndIndex(t-e-1);t-=r.effectiveSize}return{cache:this,scaledIndex:t}}},Ir=e=>class extends e{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged"},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_cache:{type:Object,value:function(){return new Tr(this)}},itemIdPath:{type:String,value:null},expandedItems:{type:Object,notify:!0,value:()=>[]}}}static get observers(){return["_sizeChanged(size)","_itemIdPathChanged(itemIdPath)","_expandedItemsChanged(expandedItems.*)"]}_sizeChanged(e){const t=e-this._cache.size;this._cache.size+=t,this._cache.effectiveSize+=t,this._effectiveSize=this._cache.effectiveSize}_updateRowItem(e,t){t.children.forEach(t=>{t._instance&&(t._instance.item=e)})}_getItem(e,t){if(e>=this._effectiveSize)return;t.index=e;const{cache:i,scaledIndex:s}=this._cache.getCacheAndIndex(e),r=i.items[s];r?(this._toggleAttribute("loading",!1,t),this._updateItem(t,r),this._isExpanded(r)&&i.ensureSubCacheForScaledIndex(s)):(this._toggleAttribute("loading",!0,t),this._loadPage(this._getPageForIndex(s),i))}_pagesForPhysicalItems(){return[this._getPageForIndex(this._firstVisibleIndex+this._vidxOffset)].concat(this._physicalItems.filter(e=>e.index).items(e=>this._getPageForIndex(e.index))).reduce((e,t)=>(-1===e.indexOf(t)&&e.push(t),e),[])}_expandedInstanceChangedCallback(e,t){void 0!==e.item&&(t?this.expandItem(e.item):this.collapseItem(e.item))}getItemId(e){return this.itemIdPath?this.get(this.itemIdPath,e):e}_isExpanded(e){return this.__expandedKeys.has(this.getItemId(e))}_expandedItemsChanged(e){this.__cacheExpandedKeys(),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,this._assignModels()}_itemIdPathChanged(e){this.__cacheExpandedKeys()}__cacheExpandedKeys(){this.expandedItems&&(this.__expandedKeys=new Set,this.expandedItems.forEach(e=>{this.__expandedKeys.add(this.getItemId(e))}))}expandItem(e){this._isExpanded(e)||this.push("expandedItems",e)}collapseItem(e){this._isExpanded(e)&&this.splice("expandedItems",this._getItemIndexInArray(e,this.expandedItems),1)}_getIndexLevel(e){let{cache:t}=this._cache.getCacheAndIndex(e),i=0;for(;t.parentCache;)t=t.parentCache,i++;return i}_canPopulate(){return this._hasData&&this._columnTree}_loadPage(e,t){if(!t.pendingRequests[e]&&this.dataProvider){this._setLoading(!0),t.pendingRequests[e]=!0;const i={page:e,pageSize:this.pageSize,sortOrders:this._mapSorters(),filters:this._mapFilters(),parentItem:t.parentItem};this.dataProvider(i,(s,r)=>{void 0!==r?t.size=r:i.parentItem&&(t.size=s.length);const n=Array.from(this.$.items.children).map(e=>e._item);s.forEach((i,s)=>{const r=e*this.pageSize+s;t.items[r]=i,this._isExpanded(i)&&n.indexOf(i)>-1&&t.ensureSubCacheForScaledIndex(r)}),this._hasData=!0,delete t.pendingRequests[e],this._setLoading(!1),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,Array.from(this.$.items.children).filter(e=>!e.hidden).forEach(e=>{const t=this._cache.getItemForIndex(e.index);t&&(this._toggleAttribute("loading",!1,e),this._updateItem(e,t))}),this._increasePoolIfNeeded(0),this.__itemsReceived()})}}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){this._cache=new Tr(this),Array.from(this.$.items.children).forEach(e=>{Array.from(e.children).forEach(e=>{e._instance&&e._instance._setPendingProperty("item",{},!1)})}),this._cache.size=this.size||0,this._cache.updateSize(),this._hasData=!1,this._assignModels(),this._effectiveSize||this._loadPage(0,this._cache)}_flushItemsDebouncer(){this._debouncerLoad&&this._debouncerLoad.flush()}_pageSizeChanged(e,t){void 0!==t&&e!==t&&this.clearCache()}_checkSize(){void 0===this.size&&0===this._effectiveSize&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows. Set the total number of items to the `size` property, or provide the total number of items in the second argument of the `dataProvider`’s `callback` call.")}_dataProviderChanged(e,t){void 0!==t&&this.clearCache(),e&&this.items&&this.items.length&&this._scrollToIndex(this._firstVisibleIndex),this._ensureFirstPageLoaded(),this._debouncerCheckSize=vt.debounce(this._debouncerCheckSize,Ae.after(2e3),this._checkSize.bind(this)),this._scrollHandler()}_ensureFirstPageLoaded(){this._hasData||this._loadPage(0,this._cache,()=>{const e=this._hasData;this._hasData=!0,e||this.notifyResize()})}_itemsEqual(e,t){return this.getItemId(e)===this.getItemId(t)}_getItemIndexInArray(e,t){let i=-1;return t.forEach((t,s)=>{this._itemsEqual(t,e)&&(i=s)}),i}}
/**
  @license
  Copyright (c) 2017 Vaadin Ltd.
  This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
  */,Or=e=>class extends e{ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(e){for(let t=0;t<e.length;t++)if("vaadin-grid-column-group"===e[t].localName)return!0;return!1}_getChildColumns(e){return Ps.getFlattenedNodes(e).filter(this._isColumnElement)}_flattenColumnGroups(e){return e.map(e=>"vaadin-grid-column-group"===e.localName?this._getChildColumns(e):[e]).reduce((e,t)=>e.concat(t),[])}_getColumnTree(){for(var e=[],t=Ps.getFlattenedNodes(this).filter(this._isColumnElement);e.push(t),this._hasColumnGroups(t);)t=this._flattenColumnGroups(t);return e}_updateColumnTree(){var e=this._getColumnTree();this._arrayEquals(e,this._columnTree)||(this._columnTree=e)}_addNodeObserver(){this._observer=new Ps(this,e=>{const t=e.addedNodes.filter(e=>"template"===e.localName&&e.classList.contains("row-details"))[0];t&&this._rowDetailsTemplate!==t&&(this._rowDetailsTemplate=t),(e.addedNodes.filter(this._isColumnElement).length>0||e.removedNodes.filter(this._isColumnElement).length>0)&&this._updateColumnTree(),this._debouncerCheckImports=vt.debounce(this._debouncerCheckImports,Ae.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()})}_arrayEquals(e,t){if(!e||!t||e.length!=t.length)return!1;for(var i=0,s=e.length;i<s;i++)if(e[i]instanceof Array&&t[i]instanceof Array){if(!this._arrayEquals(e[i],t[i]))return!1}else if(e[i]!=t[i])return!1;return!0}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(e=>{var t=this.querySelector(e);!t||t instanceof bt||console.warn(`Make sure you have imported the required module for <${e}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(e=>this._updateFirstAndLastColumnForRow(e))}_updateFirstAndLastColumnForRow(e){Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((e,t)=>e._column._order-t._column._order).forEach((e,t,i)=>{this._toggleAttribute("first-column",0===t,e),this._toggleAttribute("last-column",t===i.length-1,e)})}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(e.localName)}}
/**
  @license
  Copyright (c) 2018 Vaadin Ltd.
  This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
  */,zr=e=>class extends e{getEventContext(e){const t={},i=e.composedPath(),s=i[i.indexOf(this.$.table)-3];return s?(t.section=["body","header","footer","details"].filter(e=>s.getAttribute("part").indexOf(e)>-1)[0],s._column&&(t.column=s._column),"body"!==t.section&&"details"!==t.section||Object.assign(t,this.__getRowModel(s.parentElement)),t):t}}
/**
  @license
  Copyright (c) 2017 Vaadin Ltd.
  This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
  */,Rr=e=>class extends e{static get properties(){return{_filters:{type:Array,value:function(){return[]}}}}ready(){super.ready(),this.addEventListener("filter-changed",this._filterChanged.bind(this))}_filterChanged(e){-1===this._filters.indexOf(e.target)&&this._filters.push(e.target),e.stopPropagation(),this.dataProvider&&this.clearCache()}_mapFilters(){return this._filters.map(e=>({path:e.path,value:e.value}))}}
/**
  @license
  Copyright (c) 2017 Vaadin Ltd.
  This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
  */;class Nr extends class extends bt{}{static get is(){return"vaadin-grid-templatizer"}static get properties(){return{dataHost:Object,template:Object,_templateInstances:{type:Array,value:function(){return[]}},_parentPathValues:{value:function(){return{}}},_grid:Object}}static get observers(){return["_templateInstancesChanged(_templateInstances.*, _parentPathValues.*)"]}constructor(){super(),this._instanceProps={detailsOpened:!0,index:!0,item:!0,selected:!0,expanded:!0,level:!0}}createInstance(){this._ensureTemplatized();const e=new this._TemplateClass({});return this.addInstance(e),e}addInstance(e){-1===this._templateInstances.indexOf(e)&&(this._templateInstances.push(e),requestAnimationFrame(()=>this.notifyPath("_templateInstances.*",this._templateInstances)))}removeInstance(e){const t=this._templateInstances.indexOf(e);this.splice("_templateInstances",t,1)}_ensureTemplatized(){this._TemplateClass||(this._TemplateClass=or(this.template,this,{instanceProps:this._instanceProps,parentModel:!0,forwardHostProp:function(e,t){this._forwardParentProp(e,t),this._templateInstances&&this._templateInstances.forEach(i=>i.notifyPath(e,t))},notifyInstanceProp:function(e,t,i){if("index"===t||"item"===t)return;const s=`__${t}__`;if(e[s]===i)return;e[s]=i;const r=Array.from(this._grid.$.items.children).filter(t=>this._grid._itemsEqual(t._item,e.item))[0];r&&Array.from(r.children).forEach(e=>{e._instance&&(e._instance[s]=i,e._instance.notifyPath(t,i))});if(Array.isArray(this._grid.items)&&0===t.indexOf("item.")){const s=this._grid.items.indexOf(e.item),r=t.slice("item.".length);this._grid.notifyPath(`items.${s}.${r}`,i)}const n=`_${t}InstanceChangedCallback`;this._grid&&this._grid[n]&&this._grid[n](e,i)}}))}_forwardParentProp(e,t){this._parentPathValues[e]=t,this._templateInstances.forEach(i=>i.notifyPath(e,t))}_templateInstancesChanged(e,t){let i,s;if("_templateInstances"===e.path)i=0,s=this._templateInstances.length;else{if("_templateInstances.splices"!==e.path)return;i=e.value.index,s=e.value.addedCount}Object.keys(this._parentPathValues||{}).forEach(e=>{for(var t=i;t<i+s;t++)this._templateInstances[t].set(e,this._parentPathValues[e])})}}customElements.define(Nr.is,Nr);
/**
  @license
  Copyright (c) 2017 Vaadin Ltd.
  This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
  */
const kr=e=>class extends e{static get properties(){return{detailsOpenedItems:{type:Array,value:function(){return[]}},_rowDetailsTemplate:Object,rowDetailsRenderer:Function,_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems.*, _rowDetailsTemplate, rowDetailsRenderer)","_rowDetailsTemplateOrRendererChanged(_rowDetailsTemplate, rowDetailsRenderer)"]}_rowDetailsTemplateOrRendererChanged(e,t){if(e&&t)throw new Error("You should only use either a renderer or a template for row details");if(e||t){if(e&&!e.templatizer){var i=new Nr;i._grid=this,i.dataHost=this.dataHost,i.template=e,e.templatizer=i}this._columnTree&&Array.from(this.$.items.children).forEach(e=>{e.querySelector("[part~=details-cell]")||(this._updateRow(e,this._columnTree[this._columnTree.length-1]),this._a11yUpdateRowDetailsOpened(e,!1)),delete e.querySelector("[part~=details-cell]")._instance}),this.detailsOpenedItems.length&&(Array.from(this.$.items.children).forEach(this._toggleDetailsCell,this),this._update())}}_detailsOpenedItemsChanged(e,t,i){"detailsOpenedItems.length"!==e.path&&e.value&&Array.from(this.$.items.children).forEach(e=>{this._toggleDetailsCell(e,e._item),this._a11yUpdateRowDetailsOpened(e,this._isDetailsOpened(e._item)),this._toggleAttribute("details-opened",this._isDetailsOpened(e._item),e)})}_configureDetailsCell(e){e.setAttribute("part","cell details-cell"),this._toggleAttribute("frozen",!0,e)}_toggleDetailsCell(e,t){const i=e.querySelector('[part~="details-cell"]');if(!i)return;const s=!this._isDetailsOpened(t),r=!!i.hidden!==s;(i._instance||i._renderer)&&i.hidden===s||(i.hidden=s,s?e.style.removeProperty("padding-bottom"):(this.rowDetailsRenderer?(i._renderer=this.rowDetailsRenderer,i._renderer.call(this,i._content,this,{index:e.index,item:t})):this._rowDetailsTemplate&&!i._instance&&(i._instance=this._rowDetailsTemplate.templatizer.createInstance(),i._content.innerHTML="",i._content.appendChild(i._instance.root),this._updateItem(e,t)),hi(),e.style.setProperty("padding-bottom",`${i.offsetHeight}px`),requestAnimationFrame(()=>this.notifyResize()))),r&&(this._updateMetrics(),this._positionItems())}_updateDetailsCellHeights(){Array.from(this.$.items.querySelectorAll('[part~="details-cell"]:not([hidden])')).forEach(e=>{e.parentElement.style.setProperty("padding-bottom",`${e.offsetHeight}px`)})}_isDetailsOpened(e){return this.detailsOpenedItems&&-1!==this._getItemIndexInArray(e,this.detailsOpenedItems)}openItemDetails(e){this._isDetailsOpened(e)||this.push("detailsOpenedItems",e)}closeItemDetails(e){this._isDetailsOpened(e)&&this.splice("detailsOpenedItems",this._getItemIndexInArray(e,this.detailsOpenedItems),1)}_detailsOpenedInstanceChangedCallback(e,t){super._detailsOpenedInstanceChangedCallback&&super._detailsOpenedInstanceChangedCallback(e,t),t?this.openItemDetails(e.item):this.closeItemDetails(e.item)}}
/**
  @license
  Copyright (c) 2017 Vaadin Ltd.
  This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
  */,Lr=e=>class extends e{get _timeouts(){return{SCROLL_PERIOD:1e3,WHEEL_SCROLLING:200,SCROLLING:100,IGNORE_WHEEL:500}}static get properties(){return{_frozenCells:{type:Array,value:function(){return[]}},_scrollbarWidth:{type:Number,value:function(){var e=document.createElement("div");e.style.width="100px",e.style.height="100px",e.style.overflow="scroll",e.style.position="absolute",e.style.top="-9999px",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}},_rowWithFocusedElement:Element,_deltaYAcc:{type:Number,value:0}}}static get observers(){return["_scrollHeightUpdated(_estScrollHeight)","_scrollViewportHeightUpdated(_viewportHeight)"]}set _scrollTop(e){this.$.table.scrollTop=e}get _scrollTop(){return this.$.table.scrollTop}constructor(){super(),this._scrollLineHeight=this._getScrollLineHeight()}_getScrollLineHeight(){const e=document.createElement("div");e.style.fontSize="initial",e.style.display="none",document.body.appendChild(e);const t=window.getComputedStyle(e).fontSize;return document.body.removeChild(e),t?window.parseInt(t):void 0}_scrollViewportHeightUpdated(e){this._scrollPageHeight=e-this.$.header.clientHeight-this.$.footer.clientHeight-this._scrollLineHeight}ready(){super.ready(),this.scrollTarget=this.$.table,this.addEventListener("wheel",e=>{this._wheelScrolling=!0,this._debouncerWheelScrolling=vt.debounce(this._debouncerWheelScrolling,Ae.after(this._timeouts.WHEEL_SCROLLING),()=>this._wheelScrolling=!1),this._onWheel(e)}),this.$.table.addEventListener("scroll",e=>{this.$.outerscroller.outerScrolling&&e.stopImmediatePropagation()},!0),this.$.items.addEventListener("focusin",e=>{const t=e.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=e.composedPath()[t-1]}),this.$.items.addEventListener("focusout",()=>this._rowWithFocusedElement=void 0)}scrollToIndex(e){this._accessIronListAPI(()=>super.scrollToIndex(e))}_onWheel(e){if(e.ctrlKey||this._hasScrolledAncestor(e.target,e.deltaX,e.deltaY))return;const t=this.$.table;let i=e.deltaY;if(e.deltaMode===WheelEvent.DOM_DELTA_LINE?i*=this._scrollLineHeight:e.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(i*=this._scrollPageHeight),this._wheelAnimationFrame)return this._deltaYAcc+=i,void e.preventDefault();i+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this._debouncerWheelAnimationFrame=vt.debounce(this._debouncerWheelAnimationFrame,Ce,()=>this._wheelAnimationFrame=!1);var s=Math.abs(e.deltaX)+Math.abs(i);this._canScroll(t,e.deltaX,i)?(e.preventDefault(),t.scrollTop+=i,t.scrollLeft+=e.deltaX,this._scrollHandler(),this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=vt.debounce(this._debouncerIgnoreNewWheel,Ae.after(this._timeouts.IGNORE_WHEEL),()=>this._ignoreNewWheel=!1)):this._hasResidualMomentum&&s<=this._previousMomentum||this._ignoreNewWheel?e.preventDefault():s>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=s}_hasScrolledAncestor(e,t,i){return"vaadin-grid-cell-content"!==e.localName&&(!(!this._canScroll(e,t,i)||-1===["auto","scroll"].indexOf(getComputedStyle(e).overflow))||(e!==this&&e.parentElement?this._hasScrolledAncestor(e.parentElement,t,i):void 0))}_canScroll(e,t,i){return i>0&&e.scrollTop<e.scrollHeight-e.offsetHeight||i<0&&e.scrollTop>0||t>0&&e.scrollLeft<e.scrollWidth-e.offsetWidth||t<0&&e.scrollLeft>0}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this._toggleAttribute("scrolling",!0,this.$.scroller))),this._debounceScrolling=vt.debounce(this._debounceScrolling,Ae.after(this._timeouts.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this._toggleAttribute("scrolling",!1,this.$.scroller),this.$.outerscroller.outerScrolling||this._reorderRows()}),this._scrollPeriodFrame||(this._scrollPeriodFrame=requestAnimationFrame(()=>this._toggleAttribute("scroll-period",!0,this.$.scroller))),this._debounceScrollPeriod=vt.debounce(this._debounceScrollPeriod,Ae.after(this._timeouts.SCROLL_PERIOD),()=>{cancelAnimationFrame(this._scrollPeriodFrame),delete this._scrollPeriodFrame,this._toggleAttribute("scroll-period",!1,this.$.scroller)})}_afterScroll(){this._translateStationaryElements(),this.hasAttribute("reordering")||this._scheduleScrolling();const e=this.$.outerscroller;if(this._ios||!this._wheelScrolling&&!e.passthrough||e.syncOuterScroller(),this._ios){const t=Math.max(-e.scrollTop,0)||Math.min(0,e.scrollHeight-e.scrollTop-e.offsetHeight);this.$.items.style.transform=`translateY(${t}px)`}this._updateOverflow()}_updateOverflow(){let e="";const t=this.$.table;t.scrollTop<t.scrollHeight-t.clientHeight&&(e+=" bottom"),t.scrollTop>0&&(e+=" top"),t.scrollLeft<t.scrollWidth-t.clientWidth&&(e+=" right"),t.scrollLeft>0&&(e+=" left"),this._debounceOverflow=vt.debounce(this._debounceOverflow,Ce,()=>{const t=e.trim();t.length>0&&this.getAttribute("overflow")!==t?this.setAttribute("overflow",t):0==t.length&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")})}_reorderRows(){const e=this.$.items,t=e.querySelectorAll("tr");if(!t.length)return;const i=this._virtualStart+this._vidxOffset,s=this._rowWithFocusedElement||Array.from(t).filter(e=>!e.hidden)[0];if(!s)return;const r=s.index-i,n=Array.from(t).indexOf(s)-r;if(n>0)for(let i=0;i<n;i++)e.appendChild(t[i]);else if(n<0)for(let i=t.length+n;i<t.length;i++)e.insertBefore(t[i],t[0])}_frozenCellsChanged(){this._debouncerCacheElements=vt.debounce(this._debouncerCacheElements,xe,()=>{Array.from(this.root.querySelectorAll('[part~="cell"]')).forEach((function(e){e.style.transform=""})),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._translateStationaryElements()}),this._updateLastFrozen()}_updateLastFrozen(){if(!this._columnTree)return;const e=this._columnTree[this._columnTree.length-1].slice(0);e.sort((e,t)=>e._order-t._order);const t=e.reduce((e,t,i)=>(t._lastFrozen=!1,t.frozen&&!t.hidden?i:e),void 0);void 0!==t&&(e[t]._lastFrozen=!0)}_translateStationaryElements(){this._edge&&!this._scrollbarWidth?(this.$.items.style.transform=this._getTranslate(-this._scrollLeft||0,-this._scrollTop||0),this.$.footer.style.transform=this.$.header.style.transform=this._getTranslate(-this._scrollLeft||0,0)):this.$.footer.style.transform=this.$.header.style.transform=this._getTranslate(0,this._scrollTop);for(var e=this._getTranslate(this._scrollLeft,0),t=0;t<this._frozenCells.length;t++)this._frozenCells[t].style.transform=e}_getTranslate(e,t){return"translate("+e+"px,"+t+"px)"}_scrollHeightUpdated(e){this.$.outersizer.style.top=this.$.fixedsizer.style.top=e+"px"}}
/**
  @license
  Copyright (c) 2017 Vaadin Ltd.
  This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
  */,Dr=e=>class extends e{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[]}}}static get observers(){return["_selectedItemsChanged(selectedItems.*)"]}_isSelected(e){return this.selectedItems&&this._getItemIndexInArray(e,this.selectedItems)>-1}selectItem(e){this._isSelected(e)||this.push("selectedItems",e)}deselectItem(e){const t=this._getItemIndexInArray(e,this.selectedItems);t>-1&&this.splice("selectedItems",t,1)}_toggleItem(e){-1===this._getItemIndexInArray(e,this.selectedItems)?this.selectItem(e):this.deselectItem(e)}_selectedItemsChanged(e){!this.$.items.children.length||"selectedItems"!==e.path&&"selectedItems.splices"!==e.path||Array.from(this.$.items.children).forEach(e=>{this._updateItem(e,e._item)})}_selectedInstanceChangedCallback(e,t){super._selectedInstanceChangedCallback&&super._selectedInstanceChangedCallback(e,t),t?this.selectItem(e.item):this.deselectItem(e.item)}}
/**
  @license
  Copyright (c) 2017 Vaadin Ltd.
  This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
  */,Mr=e=>class extends e{static get properties(){return{multiSort:{type:Boolean,value:!1},_sorters:{type:Array,value:function(){return[]}},_previousSorters:{type:Array,value:function(){return[]}}}}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged),window.ShadyDOM&&xe.run(()=>{const e=this.querySelectorAll("vaadin-grid-sorter");Array.from(e).forEach(e=>{e instanceof bt&&e.dispatchEvent(new CustomEvent("sorter-changed",{bubbles:!0,composed:!0}))})})}_onSorterChanged(e){const t=e.target;this._removeArrayItem(this._sorters,t),t._order=null,this.multiSort?(t.direction&&this._sorters.unshift(t),this._sorters.forEach((e,t)=>e._order=this._sorters.length>1?t:null,this)):t.direction&&(this._sorters.forEach(e=>{e._order=null,e.direction=null}),this._sorters=[t]),e.stopPropagation(),this.dataProvider&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.clearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map(e=>({path:e.path,direction:e.direction}))}_removeArrayItem(e,t){const i=e.indexOf(t);i>-1&&e.splice(i,1)}}
/**
  @license
  Copyright (c) 2018 Vaadin Ltd.
  This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
  */,Fr=e=>class extends e{static get properties(){return{cellClassNameGenerator:Function}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)"]}__cellClassNameGeneratorChanged(e){this.generateCellClassNames()}generateCellClassNames(){Array.from(this.$.items.children).filter(e=>!e.hidden).forEach(e=>this._generateCellClassNames(e,this.__getRowModel(e)))}_generateCellClassNames(e,t){Array.from(e.children).forEach(e=>{if(e.__generatedClasses&&e.__generatedClasses.forEach(t=>e.classList.remove(t)),this.cellClassNameGenerator){const i=this.cellClassNameGenerator(e._column,t);e.__generatedClasses=i&&i.split(" ").filter(e=>e.length>0),e.__generatedClasses&&e.__generatedClasses.forEach(t=>e.classList.add(t))}})}}
/**
  @license
  Copyright (c) 2019 Vaadin Ltd.
  This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
  */,Hr="between",Br="on-top-or-between",$r="on-grid",Vr="on-top",Gr="above",jr="below",qr="empty",Yr=e=>class extends e{static get properties(){return{dropMode:String,rowsDraggable:Boolean,dragFilter:Function,dropFilter:Function,__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter)"]}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",e=>{this.dropMode&&(e.preventDefault(),e.stopPropagation())})}_onDragStart(e){if(this.rowsDraggable){let t=e.target;if("vaadin-grid-cell-content"===t.localName&&(t=t.assignedSlot.parentNode.parentNode),t.parentNode!==this.$.items)return;if(e.stopPropagation(),this._toggleAttribute("dragging-rows",!0,this),this._safari){const e=t.style.transform;t.style.top=/translateY\((.*)\)/.exec(e)[1],t.style.transform="none",requestAnimationFrame(()=>{t.style.top="",t.style.transform=e})}const i=t.getBoundingClientRect();window.ShadyDOM||(this._ios?e.dataTransfer.setDragImage(t):e.dataTransfer.setDragImage(t,e.clientX-i.left,e.clientY-i.top));let s=[t];this._isSelected(t._item)&&(s=this.__getViewportRows().filter(e=>this._isSelected(e._item)).filter(e=>!this.dragFilter||this.dragFilter(this.__getRowModel(e)))),e.dataTransfer.setData("text",this.__formatDefaultTransferData(s)),t.setAttribute("dragstart",s.length>1?s.length:""),this.updateStyles({"--_grid-drag-start-x":`${e.clientX-i.left+20}px`,"--_grid-drag-start-y":`${e.clientY-i.top+10}px`}),requestAnimationFrame(()=>{t.removeAttribute("dragstart"),this.updateStyles({"--_grid-drag-start-x":"","--_grid-drag-start-y":""})});const r=new CustomEvent("grid-dragstart",{detail:{draggedItems:s.map(e=>e._item),setDragData:(t,i)=>e.dataTransfer.setData(t,i),setDraggedItemsCount:e=>t.setAttribute("dragstart",e)}});r.originalEvent=e,this.dispatchEvent(r)}}_onDragEnd(e){this._toggleAttribute("dragging-rows",!1,this),e.stopPropagation();const t=new CustomEvent("grid-dragend");t.originalEvent=e,this.dispatchEvent(t)}_onDragLeave(e){e.stopPropagation(),this._clearDragStyles()}_onDragOver(e){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(e.clientY))return void this._clearDragStyles();let t=e.composedPath().filter(e=>"tr"===e.localName)[0];if(this._effectiveSize&&this.dropMode!==$r)if(t&&t.parentNode===this.$.items){const i=t.getBoundingClientRect();if(this._dropLocation=Vr,this.dropMode===Hr){const t=e.clientY-i.top<i.bottom-e.clientY;this._dropLocation=t?Gr:jr}else this.dropMode===Br&&(e.clientY-i.top<i.height/3?this._dropLocation=Gr:e.clientY-i.top>i.height/3*2&&(this._dropLocation=jr))}else{if(t)return;if(this.dropMode!==Hr&&this.dropMode!==Br)return;t=Array.from(this.$.items.children).filter(e=>!e.hidden).pop(),this._dropLocation=jr}else this._dropLocation=qr;if(t&&t.hasAttribute("drop-disabled"))return void(this._dropLocation=void 0);e.stopPropagation(),e.preventDefault(),this._dropLocation===qr?this._toggleAttribute("dragover",!0,this):t?(this._dragOverItem=t._item,t.getAttribute("dragover")!==this._dropLocation&&t.setAttribute("dragover",this._dropLocation)):this._clearDragStyles()}}__dndAutoScroll(e){if(this.__dndAutoScrolling)return!0;const t=this.$.header.getBoundingClientRect().bottom,i=this.$.footer.getBoundingClientRect().top,s=t-e+this.__dndAutoScrollThreshold,r=e-i+this.__dndAutoScrollThreshold;let n=0;if(r>0?n=2*r:s>0&&(n=2*-s),n){const e=this.$.table.scrollTop;if(this.$.table.scrollTop+=n,e!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout(()=>this.__dndAutoScrolling=!1,20),this._scrollHandler(),!0}}__getViewportRows(){const e=this.$.header.getBoundingClientRect().bottom,t=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(i=>{const s=i.getBoundingClientRect();return s.bottom>e&&s.top<t})}_clearDragStyles(){this.removeAttribute("dragover"),Array.from(this.$.items.children).forEach(e=>e.removeAttribute("dragover"))}_onDrop(e){if(this.dropMode){e.stopPropagation(),e.preventDefault();const t=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map(t=>({type:t,data:e.dataTransfer.getData(t)}));this._clearDragStyles();const i=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:t}});i.originalEvent=e,this.dispatchEvent(i)}}__formatDefaultTransferData(e){return e.map(e=>Array.from(e.children).filter(e=>!e.hidden&&-1===e.getAttribute("part").indexOf("details-cell")).sort((e,t)=>e._column._order>t._column._order?1:-1).map(e=>e._content.textContent.trim()).filter(e=>e).join("\t")).join("\n")}_dragDropAccessChanged(e,t,i,s){this.filterDragAndDrop()}filterDragAndDrop(){Array.from(this.$.items.children).filter(e=>!e.hidden).forEach(e=>{this._filterDragAndDrop(e,this.__getRowModel(e))})}_filterDragAndDrop(e,t){const i=!this.rowsDraggable||this.dragFilter&&!this.dragFilter(t),s=!this.dropMode||this.dropFilter&&!this.dropFilter(t);(window.ShadyDOM?[e]:Array.from(e.children).map(e=>e._content)).forEach(e=>{i?e.removeAttribute("draggable"):e.setAttribute("draggable",!0)}),this._toggleAttribute("drag-disabled",i,e),this._toggleAttribute("drop-disabled",s,e)}}
/**
  @license
  Copyright (c) 2017 Vaadin Ltd.
  This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
  */,Wr=e=>class extends e{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged"},_itemsFocusable:{type:Object,observer:"_focusableChanged"},_footerFocusable:{type:Object,observer:"_focusableChanged"},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number}}ready(){super.ready(),this._ios||this._android||(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onCellFocusIn.bind(this)),this.$.table.addEventListener("focusout",this._onCellFocusOut.bind(this)),this.addEventListener("mousedown",()=>{this._toggleAttribute("navigating",!1,this),this._isMousedown=!0}),this.addEventListener("mouseup",()=>this._isMousedown=!1))}_focusableChanged(e,t){t&&t.setAttribute("tabindex","-1"),e&&e.setAttribute("tabindex","0")}_onKeyDown(e){let t,i=e.key;switch("Up"!==i&&"Down"!==i&&"Left"!==i&&"Right"!==i||(i="Arrow"+i),"Esc"===i&&(i="Escape"),"Spacebar"===i&&(i=" "),i){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":t="Navigation";break;case"Enter":case"Escape":case"F2":t="Interaction";break;case"Tab":t="Tab";break;case" ":t="Space"}this._detectInteracting(e),this.hasAttribute("interacting")&&"Interaction"!==t&&(t=void 0),t&&this[`_on${t}KeyDown`](e,i)}_ensureScrolledToIndex(e){Array.from(this.$.items.children).filter(t=>t.index===e)[0]||this._scrollToIndex(e)}_onNavigationKeyDown(e,t){function i(e){return Array.prototype.indexOf.call(e.parentNode.children,e)}e.preventDefault();const s=this._lastVisibleIndex-this._firstVisibleIndex-1;let r=0,n=0;switch(t){case"ArrowRight":r=1;break;case"ArrowLeft":r=-1;break;case"Home":r=-1/0,e.ctrlKey&&(n=-1/0);break;case"End":r=1/0,e.ctrlKey&&(n=1/0);break;case"ArrowDown":n=1;break;case"ArrowUp":n=-1;break;case"PageDown":n=s;break;case"PageUp":n=-s}const o=e.composedPath()[0],a=i(o),l=this._elementMatches(o,'[part~="details-cell"]'),h=o.parentNode,d=h.parentNode,c=(d===this.$.items?this._effectiveSize:d.children.length)-1,u=d===this.$.items?void 0!==this._focusedItemIndex?this._focusedItemIndex:h.index:i(h);let p=Math.max(0,Math.min(u+n,c)),_=!1;if(d===this.$.items){const e=h._item,t=this._cache.getItemForIndex(p);_=l?0===n:1===n&&this._isDetailsOpened(e)||-1===n&&p!==u&&this._isDetailsOpened(t),_!==l&&(1===n&&_||-1===n&&!_)&&(p=u)}if(d!==this.$.items)if(p>u)for(;p<c&&d.children[p].hidden;)p++;else if(p<u)for(;p>0&&d.children[p].hidden;)p--;void 0===this._focusedColumnOrder&&(this._focusedColumnOrder=l?0:this._getColumns(d,u)[a]._order);const m=this._getColumns(d,p),f=m.filter(e=>!e.hidden).map(e=>e._order).sort((e,t)=>e-t),g=f.length-1,y=f.indexOf(f.slice(0).sort((e,t)=>Math.abs(e-this._focusedColumnOrder)-Math.abs(t-this._focusedColumnOrder))[0]),b=0===n&&l?y:Math.max(0,Math.min(y+r,g));b!==y&&(this._focusedColumnOrder=void 0),d===this.$.items&&this._ensureScrolledToIndex(p),this._toggleAttribute("navigating",!0,this);const v=m.reduce((e,t,i)=>(e[t._order]=i,e),{})[f[b]],A=d===this.$.items?Array.from(d.children).filter(e=>e.index===p)[0]:d.children[p];if(!A)return;const C=_?Array.from(A.children).filter(e=>this._elementMatches(e,'[part~="details-cell"]'))[0]:A.children[v];if(this._scrollHorizontallyToCell(C),d===this.$.items&&(this._focusedItemIndex=p),d===this.$.items){const e=C.getBoundingClientRect(),t=this.$.footer.getBoundingClientRect().top,i=this.$.header.getBoundingClientRect().bottom;e.bottom>t?(this.$.table.scrollTop+=e.bottom-t,this._scrollHandler()):e.top<i&&(this.$.table.scrollTop-=i-e.top,this._scrollHandler())}C.focus()}_parseEventPath(e){const t=e.indexOf(this.$.table);return{rowGroup:e[t-1],row:e[t-2],cell:e[t-3]}}_onInteractionKeyDown(e,t){const i=e.composedPath()[0],s="input"===i.localName&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/i.test(i.type);let r;switch(t){case"Enter":r=!this.hasAttribute("interacting")||!s;break;case"Escape":r=!1;break;case"F2":r=!this.hasAttribute("interacting")}const{cell:n}=this._parseEventPath(e.composedPath());if(this.hasAttribute("interacting")!==r)if(r){const t=n._content.querySelector("[focus-target]")||n._content.firstElementChild;t&&(e.preventDefault(),t.focus(),this._toggleAttribute("interacting",!0,this),this._toggleAttribute("navigating",!1,this))}else e.preventDefault(),this._focusedColumnOrder=void 0,n.focus(),this._toggleAttribute("interacting",!1,this),this._toggleAttribute("navigating",!0,this)}_predictFocusStepTarget(e,t){const i=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];let s=i.indexOf(e);for(s+=t;s>=0&&s<=i.length-1&&(!i[s]||i[s].parentNode.hidden);)s+=t;return i[s]}_onTabKeyDown(e){const t=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);if(t===this.$.table)this.$.table.focus();else if(t===this.$.focusexit)this.$.focusexit.focus();else if(t===this._itemsFocusable){let i=t;const s=this._itemsFocusable.parentNode;if(this._ensureScrolledToIndex(this._focusedItemIndex),s.index!==this._focusedItemIndex){const e=Array.from(s.children).indexOf(this._itemsFocusable),t=Array.from(this.$.items.children).filter(e=>e.index===this._focusedItemIndex)[0];t&&(i=t.children[e])}e.preventDefault(),i.focus()}else e.preventDefault(),t.focus();this._toggleAttribute("navigating",!0,this)}_onSpaceKeyDown(e){e.preventDefault();const t=e.composedPath()[0];if(t._content&&t._content.firstElementChild){const e=this.hasAttribute("navigating");t._content.firstElementChild.click(),this._toggleAttribute("navigating",e,this)}else this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(t.parentElement)}}))}_onFocusIn(e){this._isMousedown||this._toggleAttribute("navigating",!0,this);const t=e.composedPath()[0];t===this.$.table||t===this.$.focusexit?(this._predictFocusStepTarget(t,t===this.$.table?1:-1).focus(),this._toggleAttribute("interacting",!1,this)):this._detectInteracting(e)}_onFocusOut(e){this._toggleAttribute("navigating",!1,this),this._detectInteracting(e)}_onCellFocusIn(e){if(this._detectInteracting(e),3===e.composedPath().indexOf(this.$.table)){const t=e.composedPath()[0];this._activeRowGroup=t.parentNode.parentNode,this._activeRowGroup===this.$.header?this._headerFocusable=t:this._activeRowGroup===this.$.items?this._itemsFocusable=t:this._activeRowGroup===this.$.footer&&(this._footerFocusable=t),t._content.dispatchEvent(new CustomEvent("cell-focusin",{bubbles:!1}))}this._detectFocusedItemIndex(e)}_onCellFocusOut(e){if(3===e.composedPath().indexOf(this.$.table)){e.composedPath()[0]._content.dispatchEvent(new CustomEvent("cell-focusout",{bubbles:!1}))}}_detectInteracting(e){this._toggleAttribute("interacting",e.composedPath().some(e=>"vaadin-grid-cell-content"===e.localName),this)}_detectFocusedItemIndex(e){const{rowGroup:t,row:i}=this._parseEventPath(e.composedPath());t===this.$.items&&(this._focusedItemIndex=i.index)}_preventScrollerRotatingCellFocus(e,t){e.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this._toggleAttribute("navigating",!1,this)),t===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this._toggleAttribute("navigating",!0,this))}_getColumns(e,t){let i=this._columnTree.length-1;return e===this.$.header?i=t:e===this.$.footer&&(i=this._columnTree.length-1-t),this._columnTree[i]}_resetKeyboardNavigation(){if(this.$.header.firstElementChild&&(this._headerFocusable=Array.from(this.$.header.firstElementChild.children).filter(e=>!e.hidden)[0]),this.$.items.firstElementChild){const e=this._iterateItems((e,t)=>{if(this._firstVisibleIndex===t)return this.$.items.children[e]});e&&(this._itemsFocusable=Array.from(e.children).filter(e=>!e.hidden)[0])}this.$.footer.firstElementChild&&(this._footerFocusable=Array.from(this.$.footer.firstElementChild.children).filter(e=>!e.hidden)[0])}_scrollHorizontallyToCell(e){if(e.hasAttribute("frozen")||this._elementMatches(e,'[part~="details-cell"]'))return;const t=e.getBoundingClientRect(),i=e.parentNode,s=Array.from(i.children).indexOf(e),r=this.$.table.getBoundingClientRect();let n=r.left,o=r.right;for(let e=s-1;e>=0;e--){const t=i.children[e];if(!t.hasAttribute("hidden")&&!this._elementMatches(t,'[part~="details-cell"]')&&t.hasAttribute("frozen")){n=t.getBoundingClientRect().right;break}}for(let e=s+1;e<i.children.length;e++){const t=i.children[e];if(!t.hasAttribute("hidden")&&!this._elementMatches(t,'[part~="details-cell"]')&&t.hasAttribute("frozen")){o=t.getBoundingClientRect().left;break}}t.left<n&&(this.$.table.scrollLeft+=Math.round(t.left-n)),t.right>o&&(this.$.table.scrollLeft+=Math.round(t.right-o))}_elementMatches(e,t){return e.matches?e.matches(t):-1!==Array.from(e.parentNode.querySelectorAll(t)).indexOf(e)}}
/**
  @license
  Copyright (c) 2017 Vaadin Ltd.
  This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
  */,Ur=e=>class extends(ni(e)){static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree, _columnTree.*)"]}ready(){super.ready(),Jt(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){this.hasAttribute("reordering")&&e.preventDefault()}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})},100)}_onTouchMove(e){this._draggedColumn&&e.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(e){if("start"===e.detail.state){const t=e.composedPath(),i=t[t.indexOf(this.$.header)-2];if(!i||!i._content)return;const s=this.getRootNode().activeElement;if(i._content.contains(this.getRootNode().activeElement)&&(!this._ie||!this._isFocusable(s)))return;if(this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(e)}else"track"===e.detail.state?this._onTrack(e):"end"===e.detail.state&&this._onTrackEnd(e)}_onTrackStart(e){if(!this.columnReorderingAllowed)return;const t=e.path||ks(e).path;if(t&&t.filter(e=>e.hasAttribute&&e.hasAttribute("draggable"))[0])return;const i=this._cellFromPoint(e.detail.x,e.detail.y);if(i&&-1!==i.getAttribute("part").indexOf("header-cell")){for(this._toggleAttribute("reordering",!0,this),this._draggedColumn=i._column;1===this._draggedColumn.parentElement.childElementCount;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(i),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._autoScroller()}}_onTrack(e){if(!this._draggedColumn)return;const t=this._cellFromPoint(e.detail.x,e.detail.y);if(!t)return;const i=this._getTargetColumn(t,this._draggedColumn);this._isSwapAllowed(this._draggedColumn,i)&&this._isSwappableByPosition(i,e.detail.x)&&this._swapColumnOrders(this._draggedColumn,i),this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._lastDragClientX=e.detail.x}_onTrackEnd(){this._draggedColumn&&(this._toggleAttribute("reordering",!1,this),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(){return this._columnTree.slice(0).pop().filter(e=>!e.hidden).sort((e,t)=>e._order-t._order)}_cellFromPoint(e,t){let i;if(e=e||0,t=t||0,this._draggedColumn||this._toggleAttribute("no-content-pointer-events",!0,this.$.scroller),T?i=this.shadowRoot.elementFromPoint(e,t):(i=document.elementFromPoint(e,t),"vaadin-grid-cell-content"===i.localName&&(i=i.assignedSlot.parentNode)),this._toggleAttribute("no-content-pointer-events",!1,this.$.scroller),i&&i._column)return i}_updateGhostPosition(e,t){const i=this._reorderGhost.getBoundingClientRect(),s=e-i.width/2,r=t-i.height/2,n=parseInt(this._reorderGhost._left||0),o=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=n-(i.left-s),this._reorderGhost._top=o-(i.top-r),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_getInnerText(e){return e.localName?"none"===getComputedStyle(e).display?"":Array.from(e.childNodes).map(e=>this._getInnerText(e)).join(""):e.textContent}_updateGhost(e){const t=this._reorderGhost;t.textContent=this._getInnerText(e._content);const i=window.getComputedStyle(e);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(e=>t.style[e]=i[e]),t}_updateOrders(e,t){void 0!==e&&void 0!==t&&(e[0].forEach((e,t)=>e._order=0),e[0].forEach((e,t)=>e._order=(t+1)*this._orderBaseScope))}_setSiblingsReorderStatus(e,t){Array.from(e.parentNode.children).filter(t=>/column/.test(t.localName)&&this._isSwapAllowed(t,e)).forEach(e=>e._reorderStatus=t)}_autoScroller(){if(this._lastDragClientX){const e=this._lastDragClientX-this.getBoundingClientRect().right+50,t=this.getBoundingClientRect().left-this._lastDragClientX+50;e>0?this.$.table.scrollLeft+=e/10:t>0&&(this.$.table.scrollLeft-=t/10),this._scrollHandler()}this._draggedColumn&&this.async(this._autoScroller,10)}_isSwapAllowed(e,t){if(e&&t){const i=e!==t,s=e.parentElement===t.parentElement,r=e.frozen===t.frozen;return i&&s&&r}}_isSwappableByPosition(e,t){const i=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).filter(t=>e.contains(t._column))[0],s=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),r=i.getBoundingClientRect();return r.left>s.left?t>r.right-s.width:t<r.left+s.width}_swapColumnOrders(e,t){const i=e._order;e._order=t._order,t._order=i,this._updateLastFrozen(),this._updateFirstAndLastColumn()}_getTargetColumn(e,t){if(e&&t){let i=e._column;for(;i.parentElement!==t.parentElement&&i!==this;)i=i.parentElement;return i.parentElement===t.parentElement?i:e._column}}}
/**
  @license
  Copyright (c) 2018 Vaadin Ltd.
  This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
  */,Jr=e=>class extends e{static get properties(){return{resizable:{type:Boolean,value:function(){if("vaadin-grid-column-group"===this.localName)return;const e=this.parentNode;return e&&"vaadin-grid-column-group"===e.localName&&e.resizable||!1}},_headerTemplate:{type:Object},_footerTemplate:{type:Object},frozen:{type:Boolean,value:!1},hidden:{type:Boolean},header:{type:String},textAlign:{type:String},_lastFrozen:{type:Boolean,value:!1},_order:Number,_reorderStatus:Boolean,_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,headerRenderer:Function,footerRenderer:Function}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells.*)","_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)","_pathOrHeaderChanged(path, header, _headerCell, _footerCell, _cells.*, renderer, headerRenderer, _bodyTemplate, _headerTemplate)","_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells.*)","_lastFrozenChanged(_lastFrozen)","_setBodyTemplateOrRenderer(_bodyTemplate, renderer, _cells, _cells.*)","_setHeaderTemplateOrRenderer(_headerTemplate, headerRenderer, _headerCell)","_setFooterTemplateOrRenderer(_footerTemplate, footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)"]}connectedCallback(){super.connectedCallback(),this._bodyTemplate&&(this._bodyTemplate.templatizer._grid=this._grid),this._headerTemplate&&(this._headerTemplate.templatizer._grid=this._grid),this._footerTemplate&&(this._footerTemplate.templatizer._grid=this._grid),this._templateObserver.flush(),this._bodyTemplate||this._templateObserver.callback(),requestAnimationFrame(()=>{this._allCells.forEach(e=>{e._content.parentNode||this._grid&&this._grid.appendChild(e._content)})})}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame(()=>{this._findHostGrid()||this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)})}),this._gridValue=void 0}_findHostGrid(){let e=this;for(;e&&!/^vaadin.*grid(-pro)?$/.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(e=>e)}constructor(){super(),this._templateObserver=new Ps(this,e=>{this._headerTemplate=this._prepareHeaderTemplate(),this._footerTemplate=this._prepareFooterTemplate(),this._bodyTemplate=this._prepareBodyTemplate()})}_prepareHeaderTemplate(){return this._prepareTemplatizer(this._findTemplate(!0)||null,{})}_prepareFooterTemplate(){return this._prepareTemplatizer(this._findTemplate(!1,!0)||null,{})}_prepareBodyTemplate(){return this._prepareTemplatizer(this._findTemplate()||null)}_prepareTemplatizer(e,t){if(e&&!e.templatizer){const i=new Nr;i._grid=this._grid,i.dataHost=this.dataHost,i._instanceProps=t||i._instanceProps,i.template=e,e.templatizer=i}return e}_renderHeaderAndFooter(){this.headerRenderer&&this.__runRenderer(this.headerRenderer,this._headerCell),this.footerRenderer&&this.__runRenderer(this.footerRenderer,this._footerCell)}__runRenderer(e,t,i){const s=[t._content,this];i&&i.item&&s.push(i),e.apply(this,s)}__setColumnTemplateOrRenderer(e,t,i){if(e&&t)throw new Error("You should only use either a renderer or a template");i.forEach(i=>{const s=this._grid.__getRowModel(i.parentElement);if(t)i._renderer=t,(s.item||t===this.headerRenderer||t===this.footerRenderer)&&this.__runRenderer(t,i,s);else if(i._template!==e){i._template=e,i._content.innerHTML="",e.templatizer._grid=e.templatizer._grid||this._grid;const t=e.templatizer.createInstance();i._content.appendChild(t.root),i._instance=t,s.item&&i._instance.setProperties(s)}})}_setBodyTemplateOrRenderer(e,t,i,s){(e||t)&&i&&this.__setColumnTemplateOrRenderer(e,t,i)}_setHeaderTemplateOrRenderer(e,t,i){(e||t)&&i&&this.__setColumnTemplateOrRenderer(e,t,[i])}_setFooterTemplateOrRenderer(e,t,i){(e||t)&&i&&(this.__setColumnTemplateOrRenderer(e,t,[i]),this._grid.__updateHeaderFooterRowVisibility(i.parentElement))}_selectFirstTemplate(e=!1,t=!1){return Ps.getFlattenedNodes(this).filter(i=>"template"===i.localName&&i.classList.contains("header")===e&&i.classList.contains("footer")===t)[0]}_findTemplate(e,t){const i=this._selectFirstTemplate(e,t);return i&&this.dataHost&&(i._rootDataHost=this.dataHost._rootDataHost||this.dataHost),i}_flexGrowChanged(e,t,i,s){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach(t=>t.style.flexGrow=e)}_orderChanged(e,t,i,s){this._allCells.forEach(t=>t.style.order=e)}_widthChanged(e,t,i,s){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach(t=>t.style.width=e),this._grid&&this._grid.__forceReflow&&this._grid.__forceReflow()}_frozenChanged(e,t,i,s){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach(t=>this._toggleAttribute("frozen",e,t)),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(e){this._allCells.forEach(t=>this._toggleAttribute("last-frozen",e,t)),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e)}_pathOrHeaderChanged(e,t,i,s,r,n,o,a,l){const h=void 0!==t;if(!o&&!l&&h&&i&&this.__setTextContent(i._content,t),e&&r.value){if(!n&&!a){const t=(t,i,{item:s})=>this.__setTextContent(t,this.get(e,s));this.__setColumnTemplateOrRenderer(void 0,t,r.value)}o||l||h||!i||null===t||this.__setTextContent(i._content,this._generateHeader(e))}i&&this._grid.__updateHeaderFooterRowVisibility(i.parentElement)}__setTextContent(e,t){e.textContent!==t&&(e.textContent=t)}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/g,"-$1").toLowerCase().replace(/-/g," ").replace(/^./,e=>e.toUpperCase())}_toggleAttribute(e,t,i){i.hasAttribute(e)===!t&&(t?i.setAttribute(e,""):i.removeAttribute(e))}_reorderStatusChanged(e,t,i,s){this._allCells.forEach(t=>t.setAttribute("reorder-status",e))}_resizableChanged(e,t){void 0!==e&&void 0!==t&&t&&[t].concat(this._emptyCells).forEach(t=>{if(t){const i=t.querySelector('[part~="resize-handle"]');if(i&&t.removeChild(i),e){const e=document.createElement("div");e.setAttribute("part","resize-handle"),t.appendChild(e)}}})}_textAlignChanged(e,t,i,s){if(void 0===e)return;if(-1===["start","end","center"].indexOf(e))return void console.warn('textAlign can only be set as "start", "end" or "center"');let r;"ltr"===getComputedStyle(this._grid).direction?"start"===e?r="left":"end"===e&&(r="right"):"start"===e?r="right":"end"===e&&(r="left"),this._allCells.forEach(t=>{t._content.style.textAlign=e,getComputedStyle(t._content).textAlign!==e&&(t._content.style.textAlign=r)})}_hiddenChanged(e,t,i,s){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),this._allCells.forEach(t=>this._toggleAttribute("hidden",e,t)),!!e!=!!this._previousHidden&&this._grid&&(this._grid._updateLastFrozen&&this._grid._updateLastFrozen(),this._grid.notifyResize&&this._grid.notifyResize(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e}};class Xr extends(Jr(bt)){static get is(){return"vaadin-grid-column"}static get properties(){return{width:{type:String,value:"100px"},flexGrow:{type:Number,value:1},renderer:Function,path:{type:String},autoWidth:{type:Boolean,value:!1},_bodyTemplate:{type:Object},_cells:Array}}}customElements.define(Xr.is,Xr);
/**
  @license
  Copyright (c) 2017 Vaadin Ltd.
  This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
  */
class Kr extends class extends bt{}{static get template(){return K`
    <style>
      :host {
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        box-sizing: border-box;
        overflow: auto;
      }

      :host([passthrough]) {
        pointer-events: none;
      }
    </style>

    <slot></slot>
`}static get is(){return"vaadin-grid-outer-scroller"}static get properties(){return{scrollTarget:{type:Object},scrollHandler:{type:Object},passthrough:{type:Boolean,reflectToAttribute:!0,value:!0},outerScrolling:Boolean,noScrollbars:Boolean,_touchDevice:Boolean}}ready(){super.ready(),this.addEventListener("scroll",()=>this._syncScrollTarget()),this.parentElement.addEventListener("mousemove",this._onMouseMove.bind(this)),this.style.webkitOverflowScrolling="touch",this.addEventListener("mousedown",e=>this.outerScrolling=!0),this.addEventListener("mouseup",e=>{this.outerScrolling=!1,this.scrollHandler._scrollHandler()})}_onMouseMove(e){this._touchDevice||(this.noScrollbars&&this.parentElement.hasAttribute("scroll-period")?this.passthrough=e.offsetY<=this.clientHeight-20&&e.offsetX<=this.clientWidth-20:this.passthrough=e.offsetY<=this.clientHeight&&e.offsetX<=this.clientWidth)}syncOuterScroller(){this.scrollTop=this.scrollTarget.scrollTop,this.scrollLeft=this.scrollTarget.scrollLeft}_syncScrollTarget(){requestAnimationFrame(()=>{this.scrollTarget.scrollTop=this.scrollTop,this.scrollTarget.scrollLeft=this.scrollLeft,this.scrollHandler._scrollHandler()})}}customElements.define(Kr.is,Kr);
/**
  @license
  Copyright (c) 2017 Vaadin Ltd.
  This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
  */
const Zr=document.createElement("dom-module");Zr.appendChild(K`
  <style>
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: block;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    #scroller {
      display: block;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([height-by-rows]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([height-by-rows]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    #table {
      display: block;
      width: 100%;
      height: 100%;
      overflow: auto;
      z-index: -2;
      position: relative;
      outline: none;
    }

    #header {
      display: block;
      position: absolute;
      top: 0;
      width: 100%;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      display: block;
      position: absolute;
      bottom: 0;
      width: 100%;
    }

    #items {
      display: block;
      width: 100%;
      position: relative;
      z-index: -1;
    }

    #items,
    #outersizer,
    #fixedsizer {
      border-top: 0 solid transparent;
      border-bottom: 0 solid transparent;
    }

    [part~="row"] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~="row"][loading] [part~="body-cell"] ::slotted(vaadin-grid-cell-content) {
      opacity: 0;
    }

    #items [part~="row"] {
      position: absolute;
    }

    #items [part~="row"]:empty {
      height: 1em;
    }

    [part~="cell"]:not([part~="details-cell"]) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~="details-cell"] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen] {
      z-index: 2;
      will-change: transform;
    }

    #outerscroller {
      /* Needed (at least) for Android Chrome */
      z-index: 0;
    }

    #scroller:not([safari]) #outerscroller {
      /* Needed for Android Chrome (#1020). Can't be applied to Safari
      since it would re-introduce the sub-pixel overflow bug (#853) */
      will-change: transform;
    }

    [no-scrollbars]:not([safari]):not([firefox]) #outerscroller,
    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    [no-scrollbars]:not([safari]):not([firefox]) #outerscroller {
      pointer-events: none;
    }

    /* Reordering styles */
    :host([reordering]) [part~="cell"] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~="resize-handle"],
    #scroller[no-content-pointer-events] [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~="reorder-ghost"] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    #scroller[ie][column-reordering-allowed] [part~="header-cell"] {
      -ms-user-select: none;
    }

    :host([reordering]) #outerscroller {
      -webkit-overflow-scrolling: auto !important;
    }

    /* Resizing styles */
    [part~="resize-handle"] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~="resize-handle"]::before {
      position: absolute;
      content: "";
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~="resize-handle"]::before,
    [last-frozen] [part~="resize-handle"]::before {
      width: 18px;
      transform: none;
      right: 0;
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    .sizer {
      display: flex;
      position: relative;
      width: 100%;
      visibility: hidden;
    }

    .sizer [part~="details-cell"] {
      display: none !important;
    }

    .sizer [part~="cell"][hidden] {
      display: none !important;
    }

    .sizer [part~="cell"] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      margin-top: -1em;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
    }

    .sizer [part~="cell"]::before {
      content: "-";
    }

    .sizer [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* Fixed mode (Tablet Edge) */
    #fixedsizer {
      position: absolute;
    }

    :not([edge][no-scrollbars]) #fixedsizer {
      display: none;
    }

    [edge][no-scrollbars] {
      /* Any value other than ‘none’ for the transform results in the creation of both a stacking context and
      a containing block. The object acts as a containing block for fixed positioned descendants. */
      transform: translateZ(0);
      overflow: hidden;
    }

    [edge][no-scrollbars] #header,
    [edge][no-scrollbars] #footer {
      position: fixed;
    }

    [edge][no-scrollbars] #items {
      position: fixed;
      width: 100%;
      will-change: transform;
    }
  </style>
`);const Qr=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),en=navigator.userAgent.toLowerCase().indexOf("firefox")>-1;if(Qr||en){const e=document.createElement("style");e.textContent="\n    [scrolling][safari] #outerscroller,\n    [scrolling][firefox] #outerscroller {\n      pointer-events: auto;\n    }\n\n    [ios] #outerscroller {\n      pointer-events: auto;\n      z-index: -3;\n    }\n\n    [ios][scrolling] #outerscroller {\n      z-index: 0;\n    }\n\n    [ios] [frozen] {\n      will-change: auto;\n    }\n  ",Zr.querySelector("template").content.appendChild(e)}Zr.register("vaadin-grid-styles");
/**
  @license
  Copyright (c) 2017 Vaadin Ltd.
  This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
  */
const tn=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}})();class sn extends(Ci(ai(Ir(Pr(Or(Sr(Lr(Dr(Mr(kr(Wr(xr(Rr(Ur(Er(zr(Yr(Fr(wr))))))))))))))))))){static get template(){return K`
    <style include="vaadin-grid-styles"></style>

    <div id="scroller" no-scrollbars\$="[[!_scrollbarWidth]]" wheel-scrolling\$="[[_wheelScrolling]]" safari\$="[[_safari]]" ios\$="[[_ios]]" loading\$="[[loading]]" edge\$="[[_edge]]" firefox\$="[[_firefox]]" ie\$="[[_ie]]" column-reordering-allowed\$="[[columnReorderingAllowed]]">

      <table id="table" role="grid" aria-multiselectable="true" tabindex="0">
        <caption id="fixedsizer" class="sizer" part="row"></caption>
        <thead id="header" role="rowgroup"></thead>
        <tbody id="items" role="rowgroup"></tbody>
        <tfoot id="footer" role="rowgroup"></tfoot>
      </table>

      <div part="reorder-ghost"></div>
      <vaadin-grid-outer-scroller id="outerscroller" _touch-device="[[_touchDevice]]" scroll-target="[[scrollTarget]]" scroll-handler="[[_this]]" no-scrollbars="[[!_scrollbarWidth]]">
        <div id="outersizer" class="sizer" part="row"></div>
      </vaadin-grid-outer-scroller>
    </div>

    <!-- The template needs at least one slot or else shady doesn't distribute -->
    <slot name="nodistribute"></slot>

    <div id="focusexit" tabindex="0"></div>
`}static get is(){return"vaadin-grid"}static get version(){return"5.5.2"}static get observers(){return["_columnTreeChanged(_columnTree, _columnTree.*)"]}static get properties(){return{_this:{type:Object,value:function(){return this}},_safari:{type:Boolean,value:/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},_ios:{type:Boolean,value:/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1},_edge:{type:Boolean,value:"undefined"!=typeof CSS&&CSS.supports("(-ms-ime-align:auto)")},_ie:{type:Boolean,value:!(!navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/MSIE/))},_firefox:{type:Boolean,value:navigator.userAgent.toLowerCase().indexOf("firefox")>-1},_android:{type:Boolean,value:/android/i.test(navigator.userAgent)},_touchDevice:{type:Boolean,value:tn},heightByRows:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_heightByRowsChanged"},_recalculateColumnWidthOnceLoadingFinished:{type:Boolean,value:!0}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}__hasRowsWithClientHeight(){return!!Array.from(this.$.items.children).filter(e=>e.clientHeight).length}__itemsReceived(){this._recalculateColumnWidthOnceLoadingFinished&&!this._cache.isLoading()&&this.__hasRowsWithClientHeight()&&(this._recalculateColumnWidthOnceLoadingFinished=!1,this.recalculateColumnWidths())}_recalculateColumnWidths(e){e.forEach(e=>{e.width="auto",e._origFlexGrow=e.flexGrow,e.flexGrow=0}),e.forEach(e=>{e._currentWidth=0,e._allCells.forEach(t=>{const i=Math.ceil(t.getBoundingClientRect().width);e._currentWidth=Math.max(e._currentWidth,i)})}),e.forEach(e=>{e.width=`${e._currentWidth}px`,e.flexGrow=e._origFlexGrow,e._currentWidth=void 0,e._origFlexGrow=void 0})}recalculateColumnWidths(){if(this._columnTree)if(this._cache.isLoading())this._recalculateColumnWidthOnceLoadingFinished=!0;else{const e=this._getColumns().filter(e=>!e.hidden&&e.autoWidth);this._recalculateColumnWidths(e)}}_createScrollerRows(e){const t=[];for(var i=0;i<e;i++){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),this._columnTree&&this._updateRow(e,this._columnTree[this._columnTree.length-1],"body",!1,!0),t.push(e)}var s,r,n;return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(e=>e.notifyPath&&e.notifyPath("_cells.*",e._cells)),s=this,r=()=>{this._updateFirstAndLastColumn(),this._resetKeyboardNavigation()},_s||gs(),ms.push([s,r,n]),t}_getRowTarget(){return this.$.items}_createCell(e){const t="vaadin-grid-cell-content-"+(this._contentIndex=this._contentIndex+1||0),i=document.createElement("vaadin-grid-cell-content");i.setAttribute("slot",t);const s=document.createElement(e);s.id=t.replace("-content-","-"),s.setAttribute("tabindex","-1"),s.setAttribute("role","td"===e?"gridcell":"columnheader");const r=document.createElement("slot");return r.setAttribute("name",t),s.appendChild(r),s._content=i,i.addEventListener("mousedown",()=>{if(window.chrome){const e=()=>{i.contains(this.getRootNode().activeElement)||s.focus(),document.removeEventListener("mouseup",e,!0)};document.addEventListener("mouseup",e,!0)}else setTimeout(()=>{i.contains(this.getRootNode().activeElement)||s.focus()})}),s}_updateRow(e,t,i,s,r){i=i||"body";const n=document.createDocumentFragment();Array.from(e.children).forEach(e=>e._vacant=!0),e.innerHTML="","outersizer"!==e.id&&"fixedsizer"!==e.id&&(e.hidden=!0),t.forEach((o,a)=>{let l;if("body"===i){if(o._cells=o._cells||[],l=o._cells.filter(e=>e._vacant)[0],l||(l=this._createCell("td"),o._cells.push(l)),l.setAttribute("part","cell body-cell"),e.appendChild(l),a===t.length-1&&(this._rowDetailsTemplate||this.rowDetailsRenderer)){this._detailsCells=this._detailsCells||[];const t=this._detailsCells.filter(e=>e._vacant)[0]||this._createCell("td");-1===this._detailsCells.indexOf(t)&&this._detailsCells.push(t),t._content.parentElement||n.appendChild(t._content),this._configureDetailsCell(t),e.appendChild(t),this._a11ySetRowDetailsCell(e,t),t._vacant=!1}o.notifyPath&&!r&&o.notifyPath("_cells.*",o._cells)}else{const t="header"===i?"th":"td";s||"vaadin-grid-column-group"===o.localName?(l=o[`_${i}Cell`]||this._createCell(t),l._column=o,e.appendChild(l),o[`_${i}Cell`]=l):(o._emptyCells=o._emptyCells||[],l=o._emptyCells.filter(e=>e._vacant)[0]||this._createCell(t),l._column=o,e.appendChild(l),-1===o._emptyCells.indexOf(l)&&o._emptyCells.push(l)),l.setAttribute("part",`cell ${i}-cell`),this.__updateHeaderFooterRowVisibility(e)}l._content.parentElement||n.appendChild(l._content),l._vacant=!1,l._column=o}),this.appendChild(n),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(e)}__updateHeaderFooterRowVisibility(e){if(!e)return;const t=Array.from(e.children).filter(t=>{const i=t._column;if(i._emptyCells&&i._emptyCells.indexOf(t)>-1)return!1;if(e.parentElement===this.$.header){if(i.headerRenderer||i._headerTemplate)return!0;if(null===i.header)return!1;if(i.path||void 0!==i.header)return!0}else if(i.footerRenderer||i._footerTemplate)return!0});e.hidden!==!t.length&&(e.hidden=!t.length,this.notifyResize())}_updateScrollerItem(e,t){this._preventScrollerRotatingCellFocus(e,t),this._columnTree&&(this._toggleAttribute("first",0===t,e),this._toggleAttribute("odd",t%2,e),this._a11yUpdateRowRowindex(e,t),this._getItem(t,e))}_columnTreeChanged(e,t){for(Array.from(this.$.items.children).forEach(t=>this._updateRow(t,e[e.length-1]));this.$.header.children.length<e.length;){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),this.$.header.appendChild(e);const t=document.createElement("tr");t.setAttribute("part","row"),t.setAttribute("role","row"),this.$.footer.appendChild(t)}for(;this.$.header.children.length>e.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);Array.from(this.$.header.children).forEach((t,i)=>this._updateRow(t,e[i],"header",i===e.length-1)),Array.from(this.$.footer.children).forEach((t,i)=>this._updateRow(t,e[e.length-1-i],"footer",0===i)),this._updateRow(this.$.outersizer,e[e.length-1]),this._updateRow(this.$.fixedsizer,e[e.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_updateItem(e,t){e._item=t;const i=this.__getRowModel(e);this._toggleAttribute("selected",i.selected,e),this._a11yUpdateRowSelected(e,i.selected),this._a11yUpdateRowLevel(e,i.level),this._toggleAttribute("expanded",i.expanded,e),(this._rowDetailsTemplate||this.rowDetailsRenderer)&&this._toggleDetailsCell(e,t),this._generateCellClassNames(e,i),this._filterDragAndDrop(e,i),Array.from(e.children).forEach(e=>{if(e._renderer){const t=e._column||this;e._renderer.call(t,e._content,t,i)}else e._instance&&(e._instance.__detailsOpened__=i.detailsOpened,e._instance.__selected__=i.selected,e._instance.__level__=i.level,e._instance.__expanded__=i.expanded,e._instance.setProperties(i))}),this._debouncerUpdateHeights=vt.debounce(this._debouncerUpdateHeights,Ae.after(1),()=>{this._updateMetrics(),this._positionItems(),this._updateScrollerSize()})}_resizeHandler(){this._updateDetailsCellHeights(),this._accessIronListAPI(super._resizeHandler,!0),this._updateHeaderFooterMetrics()}_updateHeaderFooterMetrics(){const e=this.$.header.clientHeight+"px",t=this.$.footer.clientHeight+"px";[this.$.outersizer,this.$.fixedsizer,this.$.items].forEach(i=>{i.style.borderTopWidth=e,i.style.borderBottomWidth=t}),bs(this.$.header,()=>{this._pendingScrollToIndex&&this._scrollToIndex(this._pendingScrollToIndex)})}_onAnimationEnd(e){0===e.animationName.indexOf("vaadin-grid-appear")&&(this._render(),this._updateHeaderFooterMetrics(),e.stopPropagation(),this.notifyResize(),this.__itemsReceived())}_toggleAttribute(e,t,i){i.hasAttribute(e)===!t&&(t?i.setAttribute(e,""):i.removeAttribute(e))}__getRowModel(e){return{index:e.index,item:e._item,level:this._getIndexLevel(e.index),expanded:this._isExpanded(e._item),selected:this._isSelected(e._item),detailsOpened:!(!this._rowDetailsTemplate&&!this.rowDetailsRenderer)&&this._isDetailsOpened(e._item)}}render(){this._columnTree&&(this._columnTree.forEach(e=>{e.forEach(e=>e._renderHeaderAndFooter())}),this._update())}notifyResize(){super.notifyResize()}_heightByRowsChanged(e,t){(e||t)&&this.notifyResize()}__forceReflow(){this._debouncerForceReflow=vt.debounce(this._debouncerForceReflow,Ce,()=>{this.$.scroller.style.overflow="hidden",setTimeout(()=>this.$.scroller.style.overflow="")})}}customElements.define(sn.is,sn);
/**
  @license
  Copyright (c) 2017 Vaadin Ltd.
  This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
  */
class rn extends Xr{static get template(){return K`
    <template class="header" id="defaultHeaderTemplate">
      <vaadin-checkbox class="vaadin-grid-select-all-checkbox" aria-label="Select All" hidden\$="[[_selectAllHidden]]" on-checked-changed="_onSelectAllCheckedChanged" checked="[[_isChecked(selectAll, _indeterminate)]]" indeterminate="[[_indeterminate]]"></vaadin-checkbox>
    </template>
    <template id="defaultBodyTemplate">
      <vaadin-checkbox aria-label="Select Row" checked="{{selected}}"></vaadin-checkbox>
    </template>
`}static get is(){return"vaadin-grid-selection-column"}static get properties(){return{width:{type:String,value:"58px"},flexGrow:{type:Number,value:0},selectAll:{type:Boolean,value:!1,notify:!0},autoSelect:{type:Boolean,value:!1},_indeterminate:Boolean,_previousActiveItem:Object,_selectAllHidden:Boolean}}static get observers(){return["_onSelectAllChanged(selectAll)"]}_pathOrHeaderChanged(e,t,i,s,r,n,o,a,l){!r.value||void 0===e&&void 0===n||(this._bodyTemplate=a=void 0,this.__cleanCellsOfTemplateProperties(r.value)),!i||void 0===t&&void 0===o||(this._headerTemplate=l=void 0,this.__cleanCellsOfTemplateProperties([i])),super._pathOrHeaderChanged(e,t,i,s,r,n,o,a,l)}__cleanCellsOfTemplateProperties(e){e.forEach(e=>{e._content.innerHTML="",delete e._instance,delete e._template})}_prepareHeaderTemplate(){const e=this._prepareTemplatizer(this._findTemplate(!0)||this.$.defaultHeaderTemplate);return e.templatizer.dataHost=e===this.$.defaultHeaderTemplate?this:this.dataHost,e}_prepareBodyTemplate(){const e=this._prepareTemplatizer(this._findTemplate()||this.$.defaultBodyTemplate);return e.templatizer.dataHost=e===this.$.defaultBodyTemplate?this:this.dataHost,e}constructor(){super(),this._boundOnActiveItemChanged=this._onActiveItemChanged.bind(this),this._boundOnDataProviderChanged=this._onDataProviderChanged.bind(this),this._boundOnSelectedItemsChanged=this._onSelectedItemsChanged.bind(this)}disconnectedCallback(){if(this._grid.removeEventListener("active-item-changed",this._boundOnActiveItemChanged),this._grid.removeEventListener("data-provider-changed",this._boundOnDataProviderChanged),this._grid.removeEventListener("filter-changed",this._boundOnSelectedItemsChanged),this._grid.removeEventListener("selected-items-changed",this._boundOnSelectedItemsChanged),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&window.ShadyDOM&&this.parentElement){const e=this.parentElement,t=this.nextElementSibling;e.removeChild(this),t?e.insertBefore(this,t):e.appendChild(this)}super.disconnectedCallback()}connectedCallback(){super.connectedCallback(),this._grid&&(this._grid.addEventListener("active-item-changed",this._boundOnActiveItemChanged),this._grid.addEventListener("data-provider-changed",this._boundOnDataProviderChanged),this._grid.addEventListener("filter-changed",this._boundOnSelectedItemsChanged),this._grid.addEventListener("selected-items-changed",this._boundOnSelectedItemsChanged))}_onSelectAllChanged(e){void 0!==e&&this._grid&&(this._selectAllChangeLock||(this._grid.selectedItems=e&&Array.isArray(this._grid.items)?this._grid._filter(this._grid.items):[]))}_arrayContains(e,t){for(var i=0;e&&t&&t[i]&&e.indexOf(t[i])>=0;i++);return i==t.length}_onSelectAllCheckedChanged(e){this.selectAll=this._indeterminate||e.target.checked}_isChecked(e,t){return t||e}_onActiveItemChanged(e){const t=e.detail.value;if(this.autoSelect){const e=t||this._previousActiveItem;e&&this._grid._toggleItem(e)}this._previousActiveItem=t}_onSelectedItemsChanged(e){this._selectAllChangeLock=!0,Array.isArray(this._grid.items)&&(this._grid.selectedItems.length?this._arrayContains(this._grid.selectedItems,this._grid._filter(this._grid.items))?(this.selectAll=!0,this._indeterminate=!1):(this.selectAll=!1,this._indeterminate=!0):(this.selectAll=!1,this._indeterminate=!1)),this._selectAllChangeLock=!1}_onDataProviderChanged(e){this._selectAllHidden=!Array.isArray(this._grid.items)}}customElements.define(rn.is,rn);const nn=K`<dom-module id="lumo-grid-sorter" theme-for="vaadin-grid-sorter">
  <template>
    <style>
      :host {
        justify-content: flex-start;
        align-items: baseline;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="content"] {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      [part="indicators"] {
        margin-left: var(--lumo-space-s);
      }

      :host(:not([direction])) [part="indicators"]::before {
        opacity: 0.2;
      }

      :host([direction]) {
        color: var(--lumo-primary-text-color);
      }

      [part="order"] {
        font-size: var(--lumo-font-size-xxs);
        line-height: 1;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(nn.content);
/**
  @license
  Copyright (c) 2017 Vaadin Ltd.
  This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
  */
const on=document.createElement("template");on.innerHTML="<custom-style>\n  <style>\n    @font-face {\n      font-family: 'vaadin-grid-sorter-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n</custom-style>",document.head.appendChild(on.content);class an extends(ai(bt)){static get template(){return K`
    <style>
      :host {
        display: inline-flex;
        cursor: pointer;
        max-width: 100%;
      }

      [part="content"] {
        flex: 1 1 auto;
      }

      [part="indicators"] {
        position: relative;
        align-self: center;
        flex: none;
      }

      [part="order"] {
        display: inline;
        vertical-align: super;
      }

      [part="indicators"]::before {
        font-family: 'vaadin-grid-sorter-icons';
      }

      :host(:not([direction])) [part="indicators"]::before {
        content: "\\e901";
      }

      :host([direction=asc]) [part="indicators"]::before {
        content: "\\e900";
      }

      :host([direction=desc]) [part="indicators"]::before {
        content: "\\e902";
      }
    </style>

    <div part="content">
      <slot></slot>
    </div>
    <div part="indicators">
      <span part="order">[[_getDisplayOrder(_order)]]</span>
    </div>
`}static get is(){return"vaadin-grid-sorter"}static get properties(){return{path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null},_order:{type:Number,value:null},_isConnected:{type:Boolean,value:!1}}}static get observers(){return["_pathOrDirectionChanged(path, direction, _isConnected)","_directionOrOrderChanged(direction, _order)"]}ready(){super.ready(),this.addEventListener("click",this._onClick.bind(this))}connectedCallback(){super.connectedCallback(),this._isConnected=!0}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1}_pathOrDirectionChanged(e,t,i){void 0!==e&&void 0!==t&&void 0!==i&&i&&this.dispatchEvent(new CustomEvent("sorter-changed",{bubbles:!0,composed:!0}))}_getDisplayOrder(e){return null===e?"":e+1}_onClick(e){const t=this.getRootNode().activeElement;this!==t&&this.contains(t)||(e.preventDefault(),"asc"===this.direction?this.direction="desc":"desc"===this.direction?this.direction=null:this.direction="asc")}_directionOrOrderChanged(e,t){void 0!==e&&void 0!==t&&(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&this.root&&this.root.querySelectorAll("*").forEach((function(e){e.style["-webkit-backface-visibility"]="visible",e.style["-webkit-backface-visibility"]=""})))}}customElements.define(an.is,an);
/**
  @license
  Copyright (c) 2018 Vaadin Ltd.
  This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
  */
class ln extends Xr{static get template(){return K`
    <template class="header" id="headerTemplate">
      <vaadin-grid-sorter path="[[path]]" direction="{{direction}}">[[_getHeader(header, path)]]</vaadin-grid-sorter>
    </template>
`}static get is(){return"vaadin-grid-sort-column"}static get properties(){return{path:String,direction:{type:String,notify:!0}}}_prepareHeaderTemplate(){const e=this._prepareTemplatizer(this.$.headerTemplate);return e.templatizer.dataHost=this,e}_getHeader(e,t){return e||this._generateHeader(t)}}customElements.define(ln.is,ln)}));
