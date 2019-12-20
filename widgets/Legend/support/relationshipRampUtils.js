// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../symbols/support/gfxUtils","../../../symbols/support/previewSymbol3D"],function(t,e,r,o){function l(t){if(t){var e=t.type;if(e.indexOf("3d")>-1)return o.getSymbolLayerFill(t.symbolLayers.getItemAt(0));if("simple-line"===e){var l=r.getStroke(t);return l&&l.color}if("simple-marker"===t.type&&("x"===t.style||"cross"===t.style)){var l=r.getStroke(t);return l&&l.color}return r.getFill(t)}}function s(t,e){var r=e.HH.label,o=e.LL.label,l=e.HL.label,s=e.LH.label;switch(t){case"HH":return{top:r,bottom:o,left:l,right:s};case"HL":return{top:l,bottom:s,left:o,right:r};case"LL":return{top:o,bottom:r,left:s,right:l};case"LH":return{top:s,bottom:l,left:r,right:o};default:return{top:r,bottom:o,left:l,right:s}}}function n(t){var e=t.focus,r=t.infos,o=t.numClasses,n=u[o],i={};r.forEach(function(t){i[t.value]={label:t.label,fill:l(t.symbol)}});for(var H=[],L=0;L<o;L++){for(var f=[],p=0;p<o;p++){var M=i[n[L][p]];f.push(M.fill)}H.push(f)}return{type:"relationship-ramp",numClasses:o,focus:e,colors:H,labels:s(e,i),rotation:a(e)}}function a(t){var e=i[t];return t&&null==e&&(e=i.HH),e||0}Object.defineProperty(e,"__esModule",{value:!0});var i={HH:315,HL:45,LL:135,LH:225},u={2:[["HL","HH"],["LL","LH"]],3:[["HL","HM","HH"],["ML","MM","MH"],["LL","LM","LH"]],4:[["HL","HM1","HM2","HH"],["M2L","M2M1","M2M2","M2H"],["M1L","M1M1","M1M2","M1H"],["LL","LM1","LM2","LH"]]};e.getRelationshipRampElement=n,e.getRotationAngleForFocus=a});