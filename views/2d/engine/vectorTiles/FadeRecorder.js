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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports"],(function(e,n){Object.defineProperty(n,"__esModule",{value:!0});var t=function(e,n,t,l){this.fadeSpeed=e,this.minfadeLevel=n,this.maxfadeLevel=t,this.fadeChange=l};n.FadeProperties=t;var l=function(){function e(e,n){void 0===e&&(e=300),void 0===n&&(n=!1),this._levelSnapshots=[],this._duration=e,this._ignoreSpeed=n}return e.prototype.recordLevel=function(e){var n=performance.now(),t=this._levelSnapshots;0===t.length&&(t.push({level:e,now:0}),t.push({level:e,now:0})),2!==t.length&&t[0].level===e||t.push({level:e,now:n})},e.prototype.needsRedraw=function(){if(0===this._levelSnapshots.length)return!1;for(var e=this._duration,n=this._levelSnapshots,t=n.length,l=n[t-1],o=-1;t>o+1&&n[o+1].now+e<l.now;)o++;for(o<0&&(o=0);o<t;o++)if(n[o].level!==l.level)return!0;return!1},e.prototype.getFadeValues=function(){for(var e=this._duration,n=performance.now(),t=this._levelSnapshots;t.length>3&&t[1].now+e<n;)t.shift();t[1].now+e<n&&(t[0].level=t[1].level);var l=t[0].level,o=t[t.length-1],a=o.level,r=Math.min(l,a),i=Math.max(l,a),h=(o.level-t[1].level)/((o.now-t[1].now)/e),s=(n-o.now)/e*h;return this._ignoreSpeed?{fadeSpeed:0,minfadeLevel:r,maxfadeLevel:i,fadeChange:0}:{fadeSpeed:h,minfadeLevel:r,maxfadeLevel:i,fadeChange:s}},e}();n.FadeRecorder=l}));