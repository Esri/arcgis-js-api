/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./dom"],(function(e,t){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   */const o="CALCITE-COMBOBOX-ITEM",n="CALCITE-COMBOBOX-ITEM-GROUP",r=`${o}, ${n}`,l={removeTag:"Remove tag"};function c(e){var t,o;const n=null===(t=e.parentElement)||void 0===t?void 0:t.closest(r);return[n,null===(o=null==n?void 0:n.parentElement)||void 0===o?void 0:o.closest(r)].filter((e=>e))}function i(e){var t;return(null===(t=e.ancestors)||void 0===t?void 0:t.filter((e=>"CALCITE-COMBOBOX-ITEM"===e.nodeName)))||[]}function u(e){return t.nodeListToArray(e.querySelectorAll("calcite-combobox-item"))}function s(e){return t.nodeListToArray(e.querySelectorAll("calcite-combobox-item")).filter((e=>e.selected)).length>0}function m(e){return document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group",e,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}e.ComboboxChildSelector=r,e.ComboboxItem=o,e.ComboboxItemGroup=n,e.TEXT=l,e.getAncestors=c,e.getDepth=m,e.getItemAncestors=i,e.getItemChildren=u,e.hasActiveChildren=s}));
