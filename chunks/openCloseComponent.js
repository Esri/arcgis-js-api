/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(n){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   * v1.0.0-beta.97
   */const t=new WeakMap;function e(n){n.propertyName===this.openTransitionProp&&n.target===this.transitionEl&&(this.open?this.onBeforeOpen():this.onBeforeClose())}function i(n){n.propertyName===this.openTransitionProp&&n.target===this.transitionEl&&(this.open?this.onOpen():this.onClose())}function o(n){if(s(n),n.transitionEl){const o=e.bind(n),s=i.bind(n);t.set(n,[n.transitionEl,o,s]),n.transitionEl.addEventListener("transitionstart",o),n.transitionEl.addEventListener("transitionend",s)}}function s(n){if(!t.has(n))return;const[e,i,o]=t.get(n);e.removeEventListener("transitionstart",i),e.removeEventListener("transitionend",o),t.delete(n)}n.connectOpenCloseComponent=o,n.disconnectOpenCloseComponent=s}));
