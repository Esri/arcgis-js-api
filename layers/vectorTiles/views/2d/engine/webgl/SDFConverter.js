// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["require","exports","../../../../core/promiseUtils","../../../../core/promiseUtils","./packingUtils"],(function(t,e,r,i,s){Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t){this.size=t,this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=t,this.context=this.canvas.getContext("2d"),this._gridOuter=new Float64Array(t*t),this._gridInner=new Float64Array(t*t),this._f=new Float64Array(t),this._d=new Float64Array(t),this._z=new Float64Array(t+1),this._v=new Int16Array(t);var e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("style","position: absolute;"),e.setAttribute("width","0"),e.setAttribute("height","0"),document.body.appendChild(e),this._svg=e}return t.prototype.draw=function(t,e,a){var n=this;void 0===a&&(a=31);var o=this._createSVGString(t);return r.create((function(t,r){var h=new Image;h.src="data:image/svg+xml; charset=utf8, "+encodeURIComponent(o),h.onload=function(){n.context.clearRect(0,0,n.size,n.size),n.context.drawImage(h,0,0,n.size,n.size);for(var e=n.context.getImageData(0,0,n.size,n.size),r=new Uint8Array(n.size*n.size*4),i=0;i<n.size*n.size;i++){var o=e.data[4*i+3]/255;n._gridOuter[i]=1===o?0:0===o?1e20:Math.pow(Math.max(0,.5-o),2),n._gridInner[i]=1===o?1e20:0===o?0:Math.pow(Math.max(0,o-.5),2)}n._edt(n._gridOuter,n.size,n.size),n._edt(n._gridInner,n.size,n.size);for(i=0;i<n.size*n.size;i++){var d=.5-(n._gridOuter[i]-n._gridInner[i])/(2*a);s.packFloatRGBA(d,r,4*i)}t(r)};var d=e&&e.signal;d&&i.onAbort(d,(function(){return r(i.createAbortError())}))}))},t.prototype._createSVGString=function(t){var e=document.createElementNS("http://www.w3.org/2000/svg","path");e.setAttribute("d",t),this._svg.appendChild(e);var r,i,s,a,n=e.getBBox(),o=n.width/n.height,h=this.size/2;if(o>1){i=r=h/n.width;var d=h*(1/o);s=this.size/4,a=h-d/2}else{r=i=h/n.height,s=h-h*o/2,a=this.size/4}var c=-n.x*r+s,v=-n.y*i+a;e.setAttribute("style","transform: matrix("+r+", 0, 0, "+i+", "+c+", "+v+")");var g='<svg style="fill:red;" height="'+this.size+'" width="'+this.size+'" xmlns="http://www.w3.org/2000/svg">'+this._svg.innerHTML+"</svg>";return this._svg.removeChild(e),g},t.prototype._edt=function(t,e,r){for(var i=this._f,s=this._d,a=this._v,n=this._z,o=0;o<e;o++){for(var h=0;h<r;h++)i[h]=t[h*e+o];this._edt1d(i,s,a,n,r);for(h=0;h<r;h++)t[h*e+o]=s[h]}for(h=0;h<r;h++){for(o=0;o<e;o++)i[o]=t[h*e+o];this._edt1d(i,s,a,n,e);for(o=0;o<e;o++)t[h*e+o]=Math.sqrt(s[o])}},t.prototype._edt1d=function(t,e,r,i,s){r[0]=0,i[0]=-1e20,i[1]=1e20;for(var a=1,n=0;a<s;a++){for(var o=(t[a]+a*a-(t[r[n]]+r[n]*r[n]))/(2*a-2*r[n]);o<=i[n];)n--,o=(t[a]+a*a-(t[r[n]]+r[n]*r[n]))/(2*a-2*r[n]);r[++n]=a,i[n]=o,i[n+1]=1e20}for(a=0,n=0;a<s;a++){for(;i[n+1]<a;)n++;e[a]=(a-r[n])*(a-r[n])+t[r[n]]}},t}();e.default=a}));