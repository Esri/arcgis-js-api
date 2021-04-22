/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../core/screenUtils"],(function(t,e){"use strict";function i(t){return`rgb(${t.slice(0,3).toString()})`}function n(t){return`rgba(${t.slice(0,3).toString()},${t[3]})`}let r=function(){function t(){}var r=t.prototype;return r.rasterizeText=function(t,e){this._textRasterizationCanvas||(this._textRasterizationCanvas=document.createElement("canvas"));const r=this._textRasterizationCanvas,o=r.getContext("2d");this.setFontProperties(o,e),this.parameters=e,this.textLines=t.split(/\r?\n/),this.lineHeight=this.computeLineHeight();const a=this.computeTextWidth(o,e),h=this.lineHeight*this.textLines.length;r.width=a,r.height=h,this.renderedLineHeight=Math.round(this.lineHeight*e.pixelRatio),this.renderedHaloSize=e.halo.size*e.pixelRatio,this.renderedWidth=a*e.pixelRatio,this.renderedHeight=h*e.pixelRatio,this.fillStyle=n(e.color),this.haloStyle=i(e.halo.color);const l=this.renderedLineHeight,d=this.renderedHaloSize;this.setFontProperties(o,e);const c=s(o.textAlign,this.renderedWidth)+d,f=d;let u=0,g=0;d>0&&this.renderHalo(o,c,f,u,g,e),g+=f,u+=c;for(const i of this.textLines)o.globalCompositeOperation="destination-out",o.fillStyle="rgb(0, 0, 0)",o.fillText(i,u,g),o.globalCompositeOperation="source-over",o.fillStyle=this.fillStyle,o.fillText(i,u,g),g+=l;const p=o.getImageData(0,0,this.renderedWidth,this.renderedHeight),x=new Uint8Array(p.data);if(e.premultiplyColors){let t;for(let e=0;e<x.length;e+=4)t=x[e+3]/255,x[e]=x[e]*t,x[e+1]=x[e+1]*t,x[e+2]=x[e+2]*t}return{size:[this.renderedWidth,this.renderedHeight],image:new Uint32Array(x.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}},r.renderHalo=function(t,e,i,n,r,s){const o=this.renderedWidth,a=this.renderedHeight;this._haloRasterizationCanvas||(this._haloRasterizationCanvas=document.createElement("canvas")),this._haloRasterizationCanvas.width=o,this._haloRasterizationCanvas.height=a;const h=this._haloRasterizationCanvas,l=h.getContext("2d");l.clearRect(0,0,o,a),this.setFontProperties(l,s),l.fillStyle=this.haloStyle,l.strokeStyle=this.haloStyle;const d=this.renderedHaloSize<3;l.lineJoin=d?"miter":"round",d?this.renderHaloEmulated(l,e,i):this.renderHaloNative(l,e,i),t.globalAlpha=this.parameters.halo.color[3],t.drawImage(h,0,0,o,a,n,r,o,a),t.globalAlpha=1},r.renderHaloEmulated=function(t,e,i){const n=this.renderedLineHeight,r=this.renderedHaloSize;for(const s of this.textLines){for(const[n,a]of o)t.fillText(s,e+r*n,i+r*a);i+=n}},r.renderHaloNative=function(t,e,i){const n=this.renderedLineHeight,r=this.renderedHaloSize;for(const s of this.textLines){const o=2*r,a=5,h=.1;for(let n=0;n<a;n++){const r=1-(a-1)*h+n*h;t.lineWidth=r*o,t.strokeText(s,e,i)}i+=n}},r.setFontProperties=function(t,i){const n=i.font,r=`${n.style} ${n.weight} ${e.pt2px(i.size*i.pixelRatio)}px ${n.family}, sans-serif`;let s;switch(t.font=r,t.textBaseline="top",i.horizontalAlignment){case"left":s="left";break;case"right":s="right";break;case"center":s="center";break;default:s="left"}t.textAlign=s},r.computeTextWidth=function(t,e){let i=0;for(const r of this.textLines)i=Math.max(i,t.measureText(r).width);const n=e.font;return("italic"===n.style||"oblique"===n.style||"string"==typeof n.weight&&("bold"===n.weight||"bolder"===n.weight)||"number"==typeof n.weight&&n.weight>600)&&(i+=.3*t.measureText("A").width),i+=2*this.parameters.halo.size,Math.round(i)},r.computeLineHeight=function(){const t=1.275*this.parameters.size;return Math.round(t+2*this.parameters.halo.size)},t}();function s(t,e){return"center"===t?.5*e:"right"===t?e:0}const o=[];{const t=16;for(let e=0;e<360;e+=360/t)o.push([Math.cos(Math.PI*e/180),Math.sin(Math.PI*e/180)])}t.TextRasterizer=r,t.default=r,Object.defineProperty(t,"__esModule",{value:!0})}));
