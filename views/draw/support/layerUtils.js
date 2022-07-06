/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as r}from"../../../core/maybe.js";function e(r,e,n){if(!e||!r||!r.map)return;const{map:s}=r,a=s.layers.find((r=>r===e));a||s.add(e,n),null!=n&&s.layers.reorder(a,n)}function n(e,n){return e.allLayerViews.find((e=>{const s=e.layer;return s===n||"sublayers"in s&&r(s.sublayers)&&s.sublayers.includes(n)}))}export{e as addUniqueLayer,n as findLayerView};
