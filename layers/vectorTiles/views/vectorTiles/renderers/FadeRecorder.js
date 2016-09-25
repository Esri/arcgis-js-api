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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["require","exports","../../../core/now"],function(e,n,t){var l=(function(){function e(e,n){this.level=e,this.now=n}return e}(),function(){function e(e,n,t,l){this.fadeSpeed=e,this.minfadeLevel=n,this.maxfadeLevel=t,this.fadeChange=l}return e}());n.FadeProperties=l;var o=function(){function e(e){void 0===e&&(e=300),this._levelSnapshots=[],this._duration=e}return e.prototype.recordLevel=function(e){var n=t(),l=this._levelSnapshots;0===l.length&&(l.push({level:e,now:0}),l.push({level:e,now:0})),(2===l.length||l[0].level!==e)&&l.push({level:e,now:n})},e.prototype.needsRedraw=function(){if(0===this._levelSnapshots.length)return!1;for(var e=this._duration,n=this._levelSnapshots,t=n.length,l=n[t-1],o=-1;t>o+1&&n[o+1].now+e<l.now;)o++;for(0>o&&(o=0);t>o;o++)if(n[o].level!==l.level)return!0;return!1},e.prototype.getFadeValues=function(){for(var e=this._duration,n=t(),l=this._levelSnapshots;l.length>3&&l[1].now+e<n;)l.shift();l[1].now+e<n&&(l[0].level=l[1].level);var o=l[0].level,r=l[l.length-1],i=r.level,a=Math.min(o,i),h=Math.max(o,i),s=r.level-l[1].level,v=r.now-l[1].now,f=s/(v/e),u=(n-r.now)/e*f;return{fadeSpeed:f,minfadeLevel:a,maxfadeLevel:h,fadeChange:u}},e}();n.FadeRecorder=o});