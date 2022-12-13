/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./componentsUtils"],(function(e,t){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   * v1.0.0-beta.97
   */const o="CALCITE-COMBOBOX-ITEM",n="CALCITE-COMBOBOX-ITEM-GROUP",l=`${o}, ${n}`,r={removeTag:"Remove tag"};function c(e){var t,o;const n=null===(t=e.parentElement)||void 0===t?void 0:t.closest(l);return[n,null===(o=null==n?void 0:n.parentElement)||void 0===o?void 0:o.closest(l)].filter((e=>e))}function i(e){var t;return(null===(t=e.ancestors)||void 0===t?void 0:t.filter((e=>"CALCITE-COMBOBOX-ITEM"===e.nodeName)))||[]}function s(e){return t.nodeListToArray(e.querySelectorAll("calcite-combobox-item"))}function u(e){return t.nodeListToArray(e.querySelectorAll("calcite-combobox-item")).filter((e=>e.selected)).length>0}function m(e){return document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group",e,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}e.ComboboxChildSelector=l,e.ComboboxItem=o,e.ComboboxItemGroup=n,e.TEXT=r,e.getAncestors=c,e.getDepth=m,e.getItemAncestors=i,e.getItemChildren=s,e.hasActiveChildren=u}));
