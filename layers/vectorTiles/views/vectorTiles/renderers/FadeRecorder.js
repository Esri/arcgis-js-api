// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","../../../core/now"],(function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var l=function(e,n,t,l){this.fadeSpeed=e,this.minfadeLevel=n,this.maxfadeLevel=t,this.fadeChange=l};n.FadeProperties=l;var o=function(){function e(e){void 0===e&&(e=300),this._levelSnapshots=[],this._duration=e}return e.prototype.recordLevel=function(e){var n=t(),l=this._levelSnapshots;0===l.length&&(l.push({level:e,now:0}),l.push({level:e,now:0})),2!==l.length&&l[0].level===e||l.push({level:e,now:n})},e.prototype.needsRedraw=function(){if(0===this._levelSnapshots.length)return!1;for(var e=this._duration,n=this._levelSnapshots,t=n.length,l=n[t-1],o=-1;t>o+1&&n[o+1].now+e<l.now;)o++;for(o<0&&(o=0);o<t;o++)if(n[o].level!==l.level)return!0;return!1},e.prototype.getFadeValues=function(e){void 0===e&&(e=!1);for(var n=this._duration,l=t(),o=this._levelSnapshots;o.length>3&&o[1].now+n<l;)o.shift();o[1].now+n<l&&(o[0].level=o[1].level);var a=o[0].level,r=o[o.length-1],i=r.level,v=Math.min(a,i),h=Math.max(a,i),s=(r.level-o[1].level)/((r.now-o[1].now)/n),d=(l-r.now)/n*s;return e?{fadeSpeed:0,minfadeLevel:v,maxfadeLevel:h,fadeChange:0}:{fadeSpeed:s,minfadeLevel:v,maxfadeLevel:h,fadeChange:d}},e}();n.FadeRecorder=o}));