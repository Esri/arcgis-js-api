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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports"],function(t,e){var r=function(){function t(t,e){this.objectIdField=t,this.graphics=e,this._counts=new Map}return t.prototype.add=function(t){for(var e=[],r=this._counts,s=t.features,i=this.objectIdField,o=0;o<s.length;o++){var n=s[o],a=n.attributes[i];r.has(a)?r.set(a,r.get(a)+1):(e.push(n),r.set(a,1))}this.graphics.addMany(e)},t.prototype.remove=function(t){for(var e=[],r=this._counts,s=t.features,i=this.objectIdField,o=0;o<s.length;o++){var n=s[o],a=n.attributes[i];if(r.has(a)){var h=r.get(a)-1;0===h?(r["delete"](a),e.push(n)):r.set(a,h)}}this.graphics.removeMany(e)},t.prototype.removeAll=function(){this._counts.clear()},t}();return r});