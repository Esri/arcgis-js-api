/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./dom"],(function(e,t){"use strict";
/*!
   * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
   * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
   * v1.0.7
   */const o="CALCITE-COMBOBOX-ITEM",n="CALCITE-COMBOBOX-ITEM-GROUP",r=`${o}, ${n}`;function c(e){const t=e.parentElement?.closest(r),o=t?.parentElement?.closest(r);return[t,o].filter((e=>e))}function l(e){return e.ancestors?.filter((e=>"CALCITE-COMBOBOX-ITEM"===e.nodeName))||[]}function i(e){return t.nodeListToArray(e.querySelectorAll("calcite-combobox-item"))}function s(e){return t.nodeListToArray(e.querySelectorAll("calcite-combobox-item")).filter((e=>e.selected)).length>0}function u(e){return document.evaluate("ancestor::calcite-combobox-item",e,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}e.ComboboxChildSelector=r,e.ComboboxItem=o,e.ComboboxItemGroup=n,e.getAncestors=c,e.getDepth=u,e.getItemAncestors=l,e.getItemChildren=i,e.hasActiveChildren=s}));
