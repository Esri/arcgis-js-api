/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./index"],(function(n,t){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   * v1.0.7
   */const e=new WeakMap;function o(n){n.propertyName===this.openTransitionProp&&n.target===this.transitionEl&&(this.open?this.onBeforeOpen():this.onBeforeClose())}function i(n){n.propertyName===this.openTransitionProp&&n.target===this.transitionEl&&(this.open?this.onOpen():this.onClose())}function s(n,e=!1){t.readTask((()=>{if(n.transitionEl){const t=getComputedStyle(n.transitionEl).transition.split(" "),o=t.findIndex((t=>t===n.openTransitionProp));"0s"===t[o+1]?((e?n[n.transitionProp]:n.open)?n.onBeforeOpen():n.onBeforeClose(),(e?n[n.transitionProp]:n.open)?n.onOpen():n.onClose()):(n.transitionEl.addEventListener("transitionstart",(()=>{(e?n[n.transitionProp]:n.open)?n.onBeforeOpen():n.onBeforeClose()}),{once:!0}),n.transitionEl.addEventListener("transitionend",(()=>{(e?n[n.transitionProp]:n.open)?n.onOpen():n.onClose()}),{once:!0}))}}))}function r(n){if(a(n),n.transitionEl){const t=o.bind(n),s=i.bind(n);e.set(n,[n.transitionEl,t,s]),n.transitionEl.addEventListener("transitionstart",t),n.transitionEl.addEventListener("transitionend",s)}}function a(n){if(!e.has(n))return;const[t,o,i]=e.get(n);t.removeEventListener("transitionstart",o),t.removeEventListener("transitionend",i),e.delete(n)}n.connectOpenCloseComponent=r,n.disconnectOpenCloseComponent=a,n.onToggleOpenCloseComponent=s}));
