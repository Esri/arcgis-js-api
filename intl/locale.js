/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
let n,o;const e=globalThis.esriConfig?.locale??globalThis.dojoConfig?.locale;function t(){return e??globalThis.navigator?.language??"en"}function l(){return void 0===o&&(o=t()),o}function c(o){n=o||void 0,h()}function i(n=l()){return/^([a-zA-Z]{2,3})(?:[_\-]\w+)*$/.exec(n)?.[1].toLowerCase()}const r={he:!0,ar:!0};function a(n=l()){const o=i(n);return void 0!==o&&(r[o]||!1)}const u=[];function s(n){return u.push(n),{remove(){u.splice(u.indexOf(n),1)}}}const f=[];function g(n){return f.push(n),{remove(){u.splice(f.indexOf(n),1)}}}function h(){const e=n??t();o!==e&&(o=e,[...f].forEach((n=>{n.call(null,e)})),[...u].forEach((n=>{n.call(null,e)})))}globalThis.addEventListener?.("languagechange",h);export{g as beforeLocaleChange,t as getDefaultLocale,i as getLanguage,l as getLocale,s as onLocaleChange,a as prefersRTL,c as setLocale};
