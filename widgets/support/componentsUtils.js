/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/dom","../../assets","../../core/has","../../core/urlUtils","../../chunks/index"],(function(e,t,o,n,d,s){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   * v1.0.7
   */function c(){const{classList:e}=document.body,o=window.matchMedia("(prefers-color-scheme: dark)").matches,n=()=>e.contains(t.darkMode)||e.contains(t.autoMode)&&o?"dark":"light",d=e=>document.body.dispatchEvent(new CustomEvent("calciteModeChange",{bubbles:!0,detail:{mode:e}})),s=e=>{c!==e&&d(e),c=e};let c=n();d(c),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>s(e.matches?"dark":"light"))),new MutationObserver((()=>s(n()))).observe(document.body,{attributes:!0,attributeFilter:["class"]})}function a(){"undefined"!=typeof window&&"undefined"!=typeof location&&"undefined"!=typeof document&&window.location===location&&window.document===document&&("interactive"===document.readyState?c():document.addEventListener("DOMContentLoaded",(()=>c()),{once:!0}))}let i;function r(){s.setAssetPath(d.makeAbsolute(o.getAssetUrl(i)))}a(),i="components/assets",e.commitAssetPath=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
