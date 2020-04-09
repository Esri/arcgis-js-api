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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/screenUtils"],(function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.prototype.rasterizeText=function(e,t){this._textRasterizationCanvas||(this._textRasterizationCanvas=document.createElement("canvas"));var i=this._textRasterizationCanvas,r=i.getContext("2d");this.setFontProperties(r,t),this.parameters=t,this.textLines=e.split(/\r?\n/),this.lineHeight=this.computeLineHeight();var a,n=this.computeTextWidth(r,t),o=this.lineHeight*this.textLines.length;i.width=n,i.height=o,this.renderedLineHeight=Math.round(this.lineHeight*t.pixelRatio),this.renderedHaloSize=t.halo.size*t.pixelRatio,this.renderedWidth=n*t.pixelRatio,this.renderedHeight=o*t.pixelRatio,this.fillStyle="rgba("+(a=t.color).slice(0,3).toString()+","+a[3]+")",this.haloStyle=function(e){return"rgb("+e.slice(0,3).toString()+")"}(t.halo.color);var s=this.renderedLineHeight,h=this.renderedHaloSize;this.setFontProperties(r,t);var l=function(e,t){return"center"===e?.5*t:"right"===e?t:0}(r.textAlign,this.renderedWidth)+h,d=h,p=0,g=0;h>0&&this.renderHalo(r,l,d,p,g,t),g+=d,p+=l;for(var f=0,u=this.textLines;f<u.length;f++){var v=u[f];r.globalCompositeOperation="destination-out",r.fillStyle="rgb(0, 0, 0)",r.fillText(v,p,g),r.globalCompositeOperation="source-over",r.fillStyle=this.fillStyle,r.fillText(v,p,g),g+=s}var c=r.getImageData(0,0,this.renderedWidth,this.renderedHeight),x=new Uint8Array(c.data);if(t.premultiplyColors)for(var m=void 0,y=0;y<x.length;y+=4)m=x[y+3]/255,x[y]=x[y]*m,x[y+1]=x[y+1]*m,x[y+2]=x[y+2]*m;return{size:[this.renderedWidth,this.renderedHeight],image:new Uint32Array(x.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}},e.prototype.renderHalo=function(e,t,i,r,a,n){var o=this.renderedWidth,s=this.renderedHeight;this._haloRasterizationCanvas||(this._haloRasterizationCanvas=document.createElement("canvas")),this._haloRasterizationCanvas.width=o,this._haloRasterizationCanvas.height=s;var h=this._haloRasterizationCanvas,l=h.getContext("2d");l.clearRect(0,0,o,s),this.setFontProperties(l,n),l.fillStyle=this.haloStyle,l.strokeStyle=this.haloStyle;var d=this.renderedHaloSize<3;l.lineJoin=d?"miter":"round",d?this.renderHaloEmulated(l,t,i):this.renderHaloNative(l,t,i),e.globalAlpha=this.parameters.halo.color[3],e.drawImage(h,0,0,o,s,r,a,o,s),e.globalAlpha=1},e.prototype.renderHaloEmulated=function(e,t,i){for(var r=this.renderedLineHeight,n=this.renderedHaloSize,o=0,s=this.textLines;o<s.length;o++){for(var h=s[o],l=0,d=a;l<d.length;l++){var p=d[l],g=p[0],f=p[1];e.fillText(h,t+n*g,i+n*f)}i+=r}},e.prototype.renderHaloNative=function(e,t,i){for(var r=this.renderedLineHeight,a=this.renderedHaloSize,n=0,o=this.textLines;n<o.length;n++){for(var s=o[n],h=2*a,l=0;l<5;l++){var d=.6+.1*l;e.lineWidth=d*h,e.strokeText(s,t,i)}i+=r}},e.prototype.setFontProperties=function(e,t){var r=t.font,a=r.style+" "+r.weight+" "+i.pt2px(t.size*t.pixelRatio)+"px "+r.family+", sans-serif";e.font=a,e.textAlign="left",e.textBaseline="top"},e.prototype.computeTextWidth=function(e,t){for(var i=0,r=0,a=this.textLines;r<a.length;r++){var n=a[r];i=Math.max(i,e.measureText(n).width)}var o=t.font;return("italic"===o.style||"oblique"===o.style||"string"==typeof o.weight&&("bold"===o.weight||"bolder"===o.weight)||"number"==typeof o.weight&&o.weight>600)&&(i+=.3*e.measureText("A").width),i+=2*this.parameters.halo.size,Math.round(i)},e.prototype.computeLineHeight=function(){var e=1.275*this.parameters.size;return Math.round(e+2*this.parameters.halo.size)},e}();t.TextRasterizer=r;for(var a=[],n=0;n<360;n+=22.5)a.push([Math.cos(Math.PI*n/180),Math.sin(Math.PI*n/180)]);t.default=r}));