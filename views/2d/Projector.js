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

define(["../../core/Accessoire","../../geometry/Polyline"],function(r,t){var n=function(r,t,n){var o,e,s;return t[0]===n[0]?s=Math.abs(r[0]-t[0]):(o=(n[1]-t[1])/(n[0]-t[0]),e=t[1]-o*t[0],s=Math.abs(o*r[0]-r[1]+e)/Math.sqrt(o*o+1)),s},o=function(r,t){var e,s,i=r.length,f=r[0],a=r[i-1],c=0,u=0;for(e=1;i-1>e;e++)s=n(r[e],f,a),s>c&&(u=e,c=s);var h;if(c>t){var m=o(r.slice(0,u+1),t),l=o(r.slice(u),t);h=m.concat(l)}else h=[f,a];return h},e=r.createSubclass({_transformSetter:function(r){return this._transformers=[],r},toScreenPoint:function(r,t,n){var o=this.getTransformer(t);return n||(n={x:0,y:0}),o.transformPoint(r.x,r.y,function(r,t){n.x=r,n.y=t}),n},toScreenPath:function(r,n){var e,s,i=r instanceof t,f=i?r.paths:r.rings,a=this.getTransformer(n),c=[],u=function(r,t){c.push(r+","+t)};if(f)for(e=0,s=f.length;s>e;e++)c.push("M"),a.forEach(o(f[e],this.resolution),u),i||c.push("Z");return c},getTransformer:function(r){if(!this._transformers[r]){var t,n,o=this.transform,e=o[0],s=o[1],i=o[2],f=o[3],a=o[4]+r,c=o[5],u=0!==s&&0!==i,h=Math.round;this._transformers[r]={transformPoint:function(){return u?function(r,t,n){n(h(e*r+i*t+a),h(s*r+f*t+c))}:function(r,t,n){n(h(e*r+a),h(f*t+c))}}(),forEach:function(r,o){for(t=0,n=r.length;n>t;t++)this.transformPoint(r[t][0],r[t][1],o)}}}return this._transformers[r]}});return e});