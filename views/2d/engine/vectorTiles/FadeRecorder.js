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

define(["require","exports","../../../../core/now"],function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var l=(function(){function e(e,n){this.level=e,this.now=n}}(),function(){function e(e,n,t,l){this.fadeSpeed=e,this.minfadeLevel=n,this.maxfadeLevel=t,this.fadeChange=l}return e}());n.FadeProperties=l;var o=function(){function e(e,n){void 0===e&&(e=300),void 0===n&&(n=!1),this._levelSnapshots=[],this._duration=e,this._ignoreSpeed=n}return e.prototype.recordLevel=function(e){var n=t(),l=this._levelSnapshots;0===l.length&&(l.push({level:e,now:0}),l.push({level:e,now:0})),2!==l.length&&l[0].level===e||l.push({level:e,now:n})},e.prototype.needsRedraw=function(){if(0===this._levelSnapshots.length)return!1;for(var e=this._duration,n=this._levelSnapshots,t=n.length,l=n[t-1],o=-1;t>o+1&&n[o+1].now+e<l.now;)o++;for(o<0&&(o=0);o<t;o++)if(n[o].level!==l.level)return!0;return!1},e.prototype.getFadeValues=function(){for(var e=this._duration,n=t(),l=this._levelSnapshots;l.length>3&&l[1].now+e<n;)l.shift();l[1].now+e<n&&(l[0].level=l[1].level);var o=l[0].level,i=l[l.length-1],r=i.level,a=Math.min(o,r),h=Math.max(o,r),s=i.level-l[1].level,v=i.now-l[1].now,d=s/(v/e),f=(n-i.now)/e*d;return this._ignoreSpeed?{fadeSpeed:0,minfadeLevel:a,maxfadeLevel:h,fadeChange:0}:{fadeSpeed:d,minfadeLevel:a,maxfadeLevel:h,fadeChange:f}},e}();n.FadeRecorder=o});