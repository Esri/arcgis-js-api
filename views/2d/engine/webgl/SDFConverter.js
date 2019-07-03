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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../core/promiseUtils","../../../../core/promiseUtils","./packingUtils"],function(t,e,s,d,c){Object.defineProperty(e,"__esModule",{value:!0});var v=1e20,r=function(){function t(t){this.size=t,this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=t,this.context=this.canvas.getContext("2d"),this._gridOuter=new Float64Array(t*t),this._gridInner=new Float64Array(t*t),this._f=new Float64Array(t),this._d=new Float64Array(t),this._z=new Float64Array(t+1),this._v=new Int16Array(t);var e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("style","position: absolute;"),e.setAttribute("width","0"),e.setAttribute("height","0"),document.body.appendChild(e),this._svg=e}return t.prototype.draw=function(t,r,o){var h=this;void 0===o&&(o=31);var i=this._createSVGString(t);return s.create(function(a,t){var n=new Image;n.src="data:image/svg+xml; charset=utf8, "+encodeURIComponent(i),n.onload=function(){h.context.clearRect(0,0,h.size,h.size),h.context.drawImage(n,0,0,h.size,h.size);for(var t=h.context.getImageData(0,0,h.size,h.size),e=new Uint8Array(h.size*h.size*4),r=0;r<h.size*h.size;r++){var i=t.data[4*r+3]/255;h._gridOuter[r]=1===i?0:0===i?v:Math.pow(Math.max(0,.5-i),2),h._gridInner[r]=1===i?v:0===i?0:Math.pow(Math.max(0,i-.5),2)}h._edt(h._gridOuter,h.size,h.size),h._edt(h._gridInner,h.size,h.size);for(r=0;r<h.size*h.size;r++){var s=.5-(h._gridOuter[r]-h._gridInner[r])/(2*o);c.packFloatRGBA(s,e,4*r)}a(e)};var e=r&&r.signal;e&&d.onAbort(e,function(){return t(d.createAbortError())})})},t.prototype._createSVGString=function(t){var e=document.createElementNS("http://www.w3.org/2000/svg","path");e.setAttribute("d",t),this._svg.appendChild(e);var r,i,s,a,n=e.getBBox(),o=n.width/n.height,h=this.size/2;if(1<o){i=r=h/n.width;var d=h*(1/o);s=this.size/4,a=h-d/2}else{r=i=h/n.height,s=h-h*o/2,a=this.size/4}var c=-n.x*r+s,v=-n.y*i+a;e.setAttribute("style","transform: matrix("+r+", 0, 0, "+i+", "+c+", "+v+")");var g='<svg style="fill:red;" height="'+this.size+'" width="'+this.size+'" xmlns="http://www.w3.org/2000/svg">'+this._svg.innerHTML+"</svg>";return this._svg.removeChild(e),g},t.prototype._edt=function(t,e,r){for(var i=this._f,s=this._d,a=this._v,n=this._z,o=0;o<e;o++){for(var h=0;h<r;h++)i[h]=t[h*e+o];this._edt1d(i,s,a,n,r);for(h=0;h<r;h++)t[h*e+o]=s[h]}for(h=0;h<r;h++){for(o=0;o<e;o++)i[o]=t[h*e+o];this._edt1d(i,s,a,n,e);for(o=0;o<e;o++)t[h*e+o]=Math.sqrt(s[o])}},t.prototype._edt1d=function(t,e,r,i,s){i[r[0]=0]=-v,i[1]=+v;for(var a=1,n=0;a<s;a++){for(var o=(t[a]+a*a-(t[r[n]]+r[n]*r[n]))/(2*a-2*r[n]);o<=i[n];)n--,o=(t[a]+a*a-(t[r[n]]+r[n]*r[n]))/(2*a-2*r[n]);r[++n]=a,i[n]=o,i[n+1]=+v}for(a=0,n=0;a<s;a++){for(;i[n+1]<a;)n++;e[a]=(a-r[n])*(a-r[n])+t[r[n]]}},t}();e.default=r});