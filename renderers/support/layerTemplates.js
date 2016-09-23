// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","../Renderer","../UniqueValueRenderer","../../symbols/WebStyleSymbol","../../symbols/support/jsonUtils","../../core/promiseUtils","../../symbols/support/symbolUtils"],function(e,l,n,o,t,r,a,u,i){function s(e,l){return y(e)&&(e.styleUrl||e.styleName)?c(e,l):u.resolve(null)}function f(e){return y(e)}function y(e){var l=e;return"uniqueValue"===e.type&&(void 0!==l.styleUrl||void 0!==l.styleName)}function m(e,l){var n=o.fromJSON(e);return n.sizeInfo&&(l.sizeInfo=n.sizeInfo),n.colorInfo&&(l.colorInfo=n.colorInfo),n.visualVariables&&(l.visualVariables=n.visualVariables),l}function d(e,l){var o=e.clone;l=n.clone(l);var t={toJSON:function(){return l},clone:function(){return t.apply(o.apply(this))},apply:function(e){return e.toJSON=t.toJSON,e.clone=t.clone,e}};return t.apply(e)}function c(e,l){return i.fetchStyle(e,l).then(function(n){var o=new t({defaultSymbol:e.defaultSymbol?a.fromJSON(e.defaultSymbol,l):void 0,field:e.field1});return n.data.items.forEach(function(t){var a=new r({styleUrl:e.styleUrl||void 0,styleName:e.styleName||void 0,portal:e.styleName?l.portal:void 0,name:t.name});o.addUniqueValueInfo(t.name,a),o.defaultSymbol||t.name!==n.data.defaultItem||(o.defaultSymbol=a)}),o.defaultSymbol||(o.defaultSymbol=o.uniqueValueInfos[0].symbol),m(e,d(o,e))})}l.createRenderer=s,l.isByReferenceRendererJSON=f});