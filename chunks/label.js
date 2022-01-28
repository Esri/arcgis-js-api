/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","./dom"],(function(e,t){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   */const n="calciteInternalLabelClick",l="calcite-label",o=new WeakMap,i=e=>{const{id:n}=e,o=n&&t.queryElementRoots(e,`${l}[for="${n}"]`);if(o)return o;const i=t.closestElementCrossShadowBoundary(e,l);return!i||a(i,e)?null:i};function a(e,t){let n;const l="custom-element-ancestor-check",o=l=>{l.stopImmediatePropagation();const o=l.composedPath();n=o.slice(o.indexOf(t),o.indexOf(e))};e.addEventListener(l,o,{once:!0}),t.dispatchEvent(new CustomEvent(l,{composed:!0,bubbles:!0})),e.removeEventListener(l,o);return n.filter((n=>n!==t&&n!==e)).filter((e=>{var t;return null===(t=e.tagName)||void 0===t?void 0:t.includes("-")})).length>0}function c(e){const t=i(e.el);if(!t||o.has(t))return;e.labelEl=t;const l=d.bind(e);o.set(e.labelEl,l),e.labelEl.addEventListener(n,l)}function s(e){if(!e.labelEl)return;const t=o.get(e.labelEl);e.labelEl.removeEventListener(n,t),o.delete(e.labelEl)}function r(e){var t,n;return e.label||(null===(n=null===(t=e.labelEl)||void 0===t?void 0:t.textContent)||void 0===n?void 0:n.trim())||""}function d(e){this.el.contains(e.detail.sourceEvent.target)||this.onLabelClick(e)}e.connectLabel=c,e.disconnectLabel=s,e.getLabelText=r}));
