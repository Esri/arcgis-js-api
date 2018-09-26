// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

/**
     * A class for converting SVG paths into SDFs
     *
     * Adapted from TinySDF (BSD-2 license), modified to take in SVG paths
     * and ported to Typescript (https://github.com/mapbox/tiny-sdf)
     * Ensure that necessary license information is maintained in esri/copyright.txt
     */

define(["require","exports","../../../../core/promiseUtils","./SDFHelper"],function(t,e,r,i){Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t){this.size=t,this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=t,this.context=this.canvas.getContext("2d"),this._gridOuter=new Float64Array(t*t),this._gridInner=new Float64Array(t*t),this._f=new Float64Array(t),this._d=new Float64Array(t),this._z=new Float64Array(t+1),this._v=new Int16Array(t);var e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("style","position: absolute;"),e.setAttribute("width","0"),e.setAttribute("height","0"),document.body.appendChild(e),this._svg=e}return t.prototype.draw=function(t,e){var s=this;void 0===e&&(e=31);var a=this._createSVGString(t);return r.create(function(t){var r=new Image;r.src="data:image/svg+xml; charset=utf8, "+encodeURIComponent(a),r.onload=function(){s.context.clearRect(0,0,s.size,s.size),s.context.drawImage(r,0,0,s.size,s.size);for(var a=s.context.getImageData(0,0,s.size,s.size),n=new Uint8Array(s.size*s.size*4),o=0;o<s.size*s.size;o++){var h=a.data[4*o+3]/255;s._gridOuter[o]=1===h?0:0===h?1e20:Math.pow(Math.max(0,.5-h),2),s._gridInner[o]=1===h?1e20:0===h?0:Math.pow(Math.max(0,h-.5),2)}s._edt(s._gridOuter,s.size,s.size),s._edt(s._gridInner,s.size,s.size);for(var o=0;o<s.size*s.size;o++){var d=s._gridOuter[o]-s._gridInner[o],v=.5-d/(2*e);i.packFloat(v,n,4*o)}t(n)}})},t.prototype._createSVGString=function(t){var e=document.createElementNS("http://www.w3.org/2000/svg","path");e.setAttribute("d",t),this._svg.appendChild(e);var r,i,s,a,n=e.getBBox(),o=n.width/n.height,h=this.size/2;o>1?(i=r=h/n.width,s=this.size/4,a=s*o):(r=i=h/n.height,a=this.size/4,s=a/o);var d=-n.x+s,v=-n.y+a;e.setAttribute("style","transform: matrix("+r+", 0, 0, "+i+", "+d+", "+v+")");var c='<svg style="fill:red;" height="'+this.size+'" width="'+this.size+'" xmlns="http://www.w3.org/2000/svg">'+this._svg.innerHTML+"</svg>";return this._svg.removeChild(e),c},t.prototype._edt=function(t,e,r){for(var i=this._f,s=this._d,a=this._v,n=this._z,o=0;o<e;o++){for(var h=0;h<r;h++)i[h]=t[h*e+o];this._edt1d(i,s,a,n,r);for(var h=0;h<r;h++)t[h*e+o]=s[h]}for(var h=0;h<r;h++){for(var o=0;o<e;o++)i[o]=t[h*e+o];this._edt1d(i,s,a,n,e);for(var o=0;o<e;o++)t[h*e+o]=Math.sqrt(s[o])}},t.prototype._edt1d=function(t,e,r,i,s){r[0]=0,i[0]=-1e20,i[1]=1e20;for(var a=1,n=0;a<s;a++){for(var o=(t[a]+a*a-(t[r[n]]+r[n]*r[n]))/(2*a-2*r[n]);o<=i[n];)n--,o=(t[a]+a*a-(t[r[n]]+r[n]*r[n]))/(2*a-2*r[n]);n++,r[n]=a,i[n]=o,i[n+1]=1e20}for(var a=0,n=0;a<s;a++){for(;i[n+1]<a;)n++;e[a]=(a-r[n])*(a-r[n])+t[r[n]]}},t}();e.default=s});