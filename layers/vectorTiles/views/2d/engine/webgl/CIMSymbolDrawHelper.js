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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/decorateHelper","./GeometryUtils","./Rect"],(function(t,r,e,o,i,n){Object.defineProperty(r,"__esModule",{value:!0});var s=function(){function t(t){this._t=t}return t.createIdentity=function(){return new t([1,0,0,0,1,0])},t.prototype.clone=function(){return new t(this._t.slice())},t.prototype.transform=function(t){var r=this._t;return[r[0]*t[0]+r[1]*t[1]+r[2],r[3]*t[0]+r[4]*t[1]+r[5]]},t.createScale=function(r,e){return new t([r,0,0,0,e,0])},t.prototype.scale=function(t,r){var e=this._t;return e[0]*=t,e[1]*=t,e[2]*=t,e[3]*=r,e[4]*=r,e[5]*=r,this},t.prototype.scaleRatio=function(){return Math.sqrt(this._t[0]*this._t[0]+this._t[1]*this._t[1])},t.createTranslate=function(r,e){return new t([0,0,r,0,0,e])},t.prototype.translate=function(t,r){var e=this._t;return e[2]+=t,e[5]+=r,this},t.createRotate=function(r){var e=Math.cos(r),o=Math.sin(r);return new t([e,-o,0,o,e,0])},t.prototype.rotate=function(r){return this.multiply(t.createRotate(r))},t.prototype.multiply=function(t){var r=this._t,e=t._t,o=r[0]*e[0]+r[3]*e[1],i=r[1]*e[0]+r[4]*e[1],n=r[2]*e[0]+r[5]*e[1]+e[2],s=r[0]*e[3]+r[3]*e[4],a=r[1]*e[3]+r[4]*e[4],h=r[2]*e[3]+r[5]*e[4]+e[5];return r[0]=o,r[1]=i,r[2]=n,r[3]=s,r[4]=a,r[5]=h,this},t}();r.Transformation=s;var a=function(){function t(t){this._transfos=[],this._sizeTransfos=[],this._transfos.push(t||s.createIdentity()),this._sizeTransfos.push(t?t.scaleRatio():1)}return t.prototype.transformPt=function(t){return this._transfos[this._transfos.length-1].transform(t)},t.prototype.transformSize=function(t){return t*this._sizeTransfos[this._sizeTransfos.length-1]},t.prototype.back=function(){return this._transfos[this._transfos.length-1]},t.prototype.push=function(t){var r=t.scaleRatio();t.multiply(this.back()),this._transfos.push(t),this._sizeTransfos.push(this._sizeTransfos[this._sizeTransfos.length-1]*r)},t.prototype.pop=function(){this._transfos.splice(-1,1),this._sizeTransfos.splice(-1,1)},t.prototype.drawSolidFill=function(t,r){},t.prototype.drawSolidStroke=function(t,r,e){},t.prototype.drawSymbol=function(t,r){if(t)switch(t.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":this.drawMultiLayerSymbol(t,r)}},t.prototype.drawMultiLayerSymbol=function(t,r){if(t){var e=t.symbolLayers;if(e)for(var o=e.length;o--;){var i=e[o];if(i&&i.enable)switch(i.type){case"CIMSolidFill":this.drawSolidFill(r,i.color);break;case"CIMSolidStroke":this.drawSolidStroke(r,i.color,i.width);break;case"CIMVectorMarker":this.drawVectorMarker(i,r)}}}},t.prototype.drawVectorMarker=function(t,r){if(t){var e=t.markerGraphics;if(e){var o=t.size,n=t.frame,a=n?n.ymax-n.ymin:0,h=o&&a?o/a:1,f=s.createIdentity();n&&f.translate(.5*-(n.xmax+n.xmin),.5*-(n.ymax+n.ymin));var l=t.anchorPt;if(l){var c=l.x,u=l.y;"relative"===t.anchorPtUnits&&n&&(c*=(n.xmax-n.xmin)*h,u*=o),f.translate(-c,-u)}1!==h&&f.scale(h,h),t.rotation&&f.rotate(t.rotation*i.C_DEG_TO_RAD),f.translate(t.offsetX||0,t.offsetY||0),f.translate(r.x,r.y),this.push(f);for(var p=0,m=e;p<m.length;p++){var y=m[p];y&&this.drawSymbol(y.symbol,y.geometry)}this.pop()}}},t}();r.CIMSymbolDrawHelper=a;var h=function(t){function r(){var r=t.call(this)||this;return r._xmin=r._ymin=1/0,r._xmax=r._ymax=-1/0,r}return e(r,t),r.prototype.envelope=function(){return new n(this._xmin,this._ymin,this._xmax-this._xmin,this._ymax-this._ymin)},r.prototype._merge=function(t,r){t[0]-r<this._xmin&&(this._xmin=t[0]-r),t[0]+r>this._xmax&&(this._xmax=t[0]+r),t[1]-r<this._ymin&&(this._ymin=t[1]-r),t[1]+r>this._ymax&&(this._ymax=t[1]+r)},r.prototype.drawSolidFill=function(t,r){for(var e=0,o=t.rings;e<o.length;e++){var i=o[e],n=i?i.length:0;if(n>2){this._merge(this.transformPt(i[0]),0);for(var s=1;s<n;++s)this._merge(this.transformPt(i[s]),0)}}},r.prototype.drawSolidStroke=function(t,r,e){for(var o=.5*this.transformSize(e),i=0,n=t.rings||t.paths;i<n.length;i++){var s=n[i],a=s?s.length:0;if(a>1){this._merge(this.transformPt(s[0]),o);for(var h=1;h<a;++h)this._merge(this.transformPt(s[h]),o)}}},r}(a);r.EnvDrawHelper=h;var f=function(t){function r(r,e){var o=t.call(this,e)||this;return o._ctx=r,o}return e(r,t),r.prototype.drawSolidFill=function(t,r){var e=this._ctx;e.fillStyle="rgba("+Math.round(r[0])+","+Math.round(r[1])+","+Math.round(r[2])+","+r[3]/255+")",e.beginPath();for(var o=0,i=t.rings;o<i.length;o++){var n=i[o],s=n?n.length:0;if(s>2){var a=this.transformPt(n[0]);e.moveTo(a[0],a[1]);for(var h=1;h<s;++h)a=this.transformPt(n[h]),e.lineTo(a[0],a[1]);e.closePath()}}e.fill("evenodd")},r.prototype.drawSolidStroke=function(t,r,e){var o=this._ctx;o.strokeStyle="rgba("+Math.round(r[0])+","+Math.round(r[1])+","+Math.round(r[2])+","+r[3]/255+")",o.lineWidth=this.transformSize(e)+.5,o.beginPath();for(var i=!!t.rings,n=0,s=t.rings||t.paths;n<s.length;n++){var a=s[n],h=a?a.length:0;if(h>1){var f=this.transformPt(a[0]);o.moveTo(f[0],f[1]);for(var l=1;l<h;++l)f=this.transformPt(a[l]),o.lineTo(f[0],f[1]);i&&o.closePath()}}o.stroke()},r}(a);r.CanvasDrawHelper=f}));