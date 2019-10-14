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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/screenUtils"],function(e,t,i){function r(e){return"rgb("+e.slice(0,3).toString()+")"}function a(e){return"rgba("+e.slice(0,3).toString()+","+e[3]+")"}function n(e,t){return"center"===e?.5*t:"right"===e?t:0}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e.prototype.rasterizeText=function(e,t){this._textRasterizationCanvas||(this._textRasterizationCanvas=document.createElement("canvas"));var i=this._textRasterizationCanvas,o=i.getContext("2d");this.setFontProperties(o,t),this.parameters=t,this.textLines=e.split(/\r?\n/),this.lineHeight=this.computeLineHeight();var s=this.computeTextWidth(o,t),h=this.lineHeight*this.textLines.length;i.width=s,i.height=h,this.renderedLineHeight=Math.round(this.lineHeight*t.pixelRatio),this.renderedHaloSize=t.halo.size*t.pixelRatio,this.renderedWidth=s*t.pixelRatio,this.renderedHeight=h*t.pixelRatio,this.fillStyle=a(t.color),this.haloStyle=r(t.halo.color);var l=this.renderedLineHeight,d=this.renderedHaloSize;this.setFontProperties(o,t);var p=n(o.textAlign,this.renderedWidth)+d,g=d,u=d>0,f=0,v=0;u&&this.renderHalo(o,p,g,f,v,t),v+=g,f+=p;for(var c=0,x=this.textLines;c<x.length;c++){var m=x[c];o.globalCompositeOperation="destination-out",o.fillStyle="rgb(0, 0, 0)",o.fillText(m,f,v),o.globalCompositeOperation="source-over",o.fillStyle=this.fillStyle,o.fillText(m,f,v),v+=l}var y=o.getImageData(0,0,this.renderedWidth,this.renderedHeight),H=new Uint8Array(y.data);if(t.premultiplyColors)for(var z=void 0,S=0;S<H.length;S+=4)z=H[S+3]/255,H[S]=H[S]*z,H[S+1]=H[S+1]*z,H[S+2]=H[S+2]*z;return{size:[this.renderedWidth,this.renderedHeight],image:new Uint32Array(H.buffer),sdf:!1,simplePattern:!1}},e.prototype.renderHalo=function(e,t,i,r,a,n){var o=this.renderedWidth,s=this.renderedHeight;this._haloRasterizationCanvas||(this._haloRasterizationCanvas=document.createElement("canvas")),this._haloRasterizationCanvas.width=o,this._haloRasterizationCanvas.height=s;var h=this._haloRasterizationCanvas,l=h.getContext("2d");l.clearRect(0,0,o,s),this.setFontProperties(l,n),l.fillStyle=this.haloStyle,l.strokeStyle=this.haloStyle;var d=this.renderedHaloSize<3;l.lineJoin=d?"miter":"round",d?this.renderHaloEmulated(l,t,i):this.renderHaloNative(l,t,i),e.globalAlpha=this.parameters.halo.color[3],e.drawImage(h,0,0,o,s,r,a,o,s),e.globalAlpha=1},e.prototype.renderHaloEmulated=function(e,t,i){for(var r=this.renderedLineHeight,a=this.renderedHaloSize,n=0,o=this.textLines;n<o.length;n++){for(var h=o[n],l=0,d=s;l<d.length;l++){var p=d[l],g=p[0],u=p[1];e.fillText(h,t+a*g,i+a*u)}i+=r}},e.prototype.renderHaloNative=function(e,t,i){for(var r=this.renderedLineHeight,a=this.renderedHaloSize,n=0,o=this.textLines;n<o.length;n++){for(var s=o[n],h=2*a,l=0;l<5;l++){var d=.6+.1*l;e.lineWidth=d*h,e.strokeText(s,t,i)}i+=r}},e.prototype.setFontProperties=function(e,t){var r=t.font,a=r.style+" "+r.weight+" "+i.pt2px(t.size*t.pixelRatio)+"px "+r.family+", sans-serif";e.font=a,e.textAlign="left",e.textBaseline="top"},e.prototype.computeTextWidth=function(e,t){for(var i=0,r=0,a=this.textLines;r<a.length;r++){var n=a[r];i=Math.max(i,e.measureText(n).width)}var o=t.font;return("italic"===o.style||"oblique"===o.style||"string"==typeof o.weight&&("bold"===o.weight||"bolder"===o.weight)||"number"==typeof o.weight&&o.weight>600)&&(i+=.3*e.measureText("A").width),i+=2*this.parameters.halo.size,Math.round(i)},e.prototype.computeLineHeight=function(){var e=1.275*this.parameters.size;return Math.round(e+2*this.parameters.halo.size)},e}();t.TextRasterizer=o;for(var s=[],h=0;h<360;h+=22.5)s.push([Math.cos(Math.PI*h/180),Math.sin(Math.PI*h/180)]);t.default=o});