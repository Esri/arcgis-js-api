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

define(["require","exports","../../../../core/promiseUtils","../../../../core/promiseUtils","./packingUtils"],(function(t,e,i,r,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t){this.size=t;var e=document.createElement("canvas");e.width=e.height=t,this._context=e.getContext("2d"),this._gridOuter=new Float64Array(t*t),this._gridInner=new Float64Array(t*t),this._f=new Float64Array(t),this._d=new Float64Array(t),this._z=new Float64Array(t+1),this._v=new Int16Array(t)}return t.prototype.dispose=function(){this._context=this._gridOuter=this._gridInner=this._f=this._d=this._z=this._v=null,this._svg&&(document.body.removeChild(this._svg),this._svg=null)},t.prototype.draw=function(t,e,n){var o=this;void 0===n&&(n=31),this._initSVG();var a=this._createSVGString(t);return i.create((function(t,i){var h=new Image;h.src="data:image/svg+xml; charset=utf8, "+encodeURIComponent(a),h.onload=function(){h.onload=null,o._context.clearRect(0,0,o.size,o.size),o._context.drawImage(h,0,0,o.size,o.size);for(var e=o._context.getImageData(0,0,o.size,o.size),i=new Uint8Array(o.size*o.size*4),r=0;r<o.size*o.size;r++){var a=e.data[4*r+3]/255;o._gridOuter[r]=1===a?0:0===a?1e20:Math.pow(Math.max(0,.5-a),2),o._gridInner[r]=1===a?1e20:0===a?0:Math.pow(Math.max(0,a-.5),2)}o._edt(o._gridOuter,o.size,o.size),o._edt(o._gridInner,o.size,o.size);for(r=0;r<o.size*o.size;r++){var d=.5-(o._gridOuter[r]-o._gridInner[r])/(2*n);s.packFloatRGBA(d,i,4*r)}t(i)};var d=e&&e.signal;d&&r.onAbort(d,(function(){return i(r.createAbortError())}))}))},t.prototype._initSVG=function(){if(!this._svg){var t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("style","position: absolute;"),t.setAttribute("width","0"),t.setAttribute("height","0"),t.setAttribute("aria-hidden","true"),t.setAttribute("role","presentation"),document.body.appendChild(t),this._svg=t}},t.prototype._createSVGString=function(t){var e=document.createElementNS("http://www.w3.org/2000/svg","path");e.setAttribute("d",t),this._svg.appendChild(e);var i,r,s,n,o=e.getBBox(),a=o.width/o.height,h=this.size/2;if(a>1){r=i=h/o.width;var d=h*(1/a);s=this.size/4,n=h-d/2}else{i=r=h/o.height,s=h-h*a/2,n=this.size/4}var _=-o.x*i+s,g=-o.y*r+n;e.setAttribute("style","transform: matrix("+i+", 0, 0, "+r+", "+_+", "+g+")");var u='<svg style="fill:red;" height="'+this.size+'" width="'+this.size+'" xmlns="http://www.w3.org/2000/svg">'+this._svg.innerHTML+"</svg>";return this._svg.removeChild(e),u},t.prototype._edt=function(t,e,i){for(var r=this._f,s=this._d,n=this._v,o=this._z,a=0;a<e;a++){for(var h=0;h<i;h++)r[h]=t[h*e+a];this._edt1d(r,s,n,o,i);for(h=0;h<i;h++)t[h*e+a]=s[h]}for(h=0;h<i;h++){for(a=0;a<e;a++)r[a]=t[h*e+a];this._edt1d(r,s,n,o,e);for(a=0;a<e;a++)t[h*e+a]=Math.sqrt(s[a])}},t.prototype._edt1d=function(t,e,i,r,s){i[0]=0,r[0]=-1e20,r[1]=1e20;for(var n=1,o=0;n<s;n++){for(var a=(t[n]+n*n-(t[i[o]]+i[o]*i[o]))/(2*n-2*i[o]);a<=r[o];)o--,a=(t[n]+n*n-(t[i[o]]+i[o]*i[o]))/(2*n-2*i[o]);i[++o]=n,r[o]=a,r[o+1]=1e20}for(n=0,o=0;n<s;n++){for(;r[o+1]<n;)o++;e[n]=(n-i[o])*(n-i[o])+t[i[o]]}},t}();e.default=n}));