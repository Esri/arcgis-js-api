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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports"],function(e,t){return function(){function e(e){this.readFile=e}return e.prototype.resolveIncludes=function(e){return this.resolve(e)},e.prototype.resolve=function(e,t){var r=this;if(void 0===t&&(t=new Map),t.has(e))return t.get(e);var n=this.read(e);if(!n)throw new Error("cannot find shader file "+e);for(var i=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm,o=i.exec(n),s=[];null!=o;)s.push({path:o[1],start:o.index,length:o[0].length}),o=i.exec(n);var a=0,u="";return s.forEach(function(e){u+=n.slice(a,e.start),u+=t.has(e.path)?"":r.resolve(e.path,t),a=e.start+e.length}),u+=n.slice(a),t.set(e,u),u},e.prototype.read=function(e){return this.readFile(e)},e}()});