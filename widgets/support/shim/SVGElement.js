// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports"],(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DOMTokenListSubset=void 0;var s=function(){function e(e){this._node=e}return e.prototype.add=function(e){var t=this._node;t.className.baseVal=(t.className.baseVal+" "+e).trim()},e.prototype.contains=function(e){return this._node.className.baseVal.split(" ").indexOf(e)>-1},e.prototype.remove=function(e){for(var t=this._node,s="",n=0,o=t.className.baseVal.split(" ");n<o.length;n++){var i=o[n];i!==e&&(s+=i+" ")}t.className.baseVal=s.trim()},e.prototype.toggle=function(e,t){var s,n=this.contains(e);return(s=n?!0!==t&&"remove":!1!==t&&"add")&&this[s](e),void 0!==t?t:!n},e}();t.DOMTokenListSubset=s,"classList"in SVGElement.prototype||Object.defineProperty(SVGElement.prototype,"classList",{get:function(){return new s(this)}})}));