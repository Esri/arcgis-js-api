// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../../core/Error","../../../../core/numberUtils","../../../../Color","../../statistics/support/utils","../../../../symbols/SimpleMarkerSymbol","../../../../symbols/SimpleLineSymbol","../../../../symbols/SimpleFillSymbol","../../../../symbols/PointSymbol3D","../../../../symbols/IconSymbol3DLayer","../../../../symbols/ObjectSymbol3DLayer","../../support/utils","../../../../symbols/MeshSymbol3D","../../../../symbols/FillSymbol3DLayer"],function(e,r,o,l,i,t,n,s,a,u,c,d,m,y,f){function b(e,r){return new o(e,r)}function p(e,r,o){var l,i,n=t.getSuggestedDataRange({statistics:e,isDate:r});return n.defaultValuesUsed?(l=n.min,i=n.max):!o||null!=e.avg&&e.stddev||(l=e.min,i=e.max),null!=l?[l,i]:null}function v(e,r){for(var o=[],l=e.length,t=0;r>t;t++)o.push(new i(e[t%l]));return o}function h(e,r){var o=e.avg,i=o-e.stddev,t=o+e.stddev;i<e.min&&(i=e.min),t>e.max&&(t=e.max),r&&(o=i+(t-i)/2);var n=l.round([i,t],{strictBounds:!0});return i=n[0],t=n[1],n=[i,i+(o-i)/2,o,o+(t-o)/2,t],l.round(n,{strictBounds:!0})}function w(e,r,o,l,i,t){var m;switch(o){case"point":case"multipoint":var b=null!=t?t:e.size;if("2d"===l)m=new n({color:r,size:b,outline:{color:e.outline.color,width:e.outline.width}});else if("3d-flat"===l)m=new u({symbolLayers:[new c({size:b,resource:{primitive:"circle"},material:{color:r},outline:{color:e.outline.color,size:e.outline.width}})]});else if(l.indexOf("3d-volumetric")>-1){var p="3d-volumetric-uniform"===l?"sphere":"cylinder";m=new u({symbolLayers:[new d({height:b,resource:{primitive:p},material:{color:r}})]})}break;case"polyline":var v=null!=t?t:e.width;"2d"===l&&(m=new s({color:r,width:v}));break;case"polygon":"2d"===l&&(m=new a({color:r,outline:{color:e.outline.color,width:e.outline.width}}));break;case"mesh":m=new y({symbolLayers:[new f({material:{color:r,colorMixMode:i}})]})}return m}function g(e,r,o){var l=m.getUnknownFields({layer:e,fields:r});if(l.length)return b(o,"Unknown fields: "+l.join(", ")+". You can only use fields defined in the layer schema");var i=S({layer:e,fields:r});return i.length?b(o,"Unsupported fields: "+i.join(", ")+". You can only use fields that are accessible to the renderer i.e. FieldUsageInfo.supportsRenderer must be true"):void 0}function S(e){var r=e.layer;return e.fields.filter(function(e){var o=r.getFieldUsageInfo(e);return!o||!o.supportsRenderer})}Object.defineProperty(r,"__esModule",{value:!0}),r.createError=b,r.getDefaultDataRange=p,r.createColors=v,r.createStopValues=h,r.createSymbol=w,r.verifyBasicFieldValidity=g});