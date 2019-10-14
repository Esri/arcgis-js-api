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

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/compilerUtils","../../core/maybe","../../core/promiseUtils","./previewSymbol2D","./previewSymbol3D","./previewWebStyleSymbol","./utils"],function(e,t,r,l,i,a,o,n,s,c,u){function p(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function h(e,t,r){var l=e.backgroundColor,i=e.outline,a=e.dotSize,o=r&&r.swatchSize||22,n=Math.round(o*o/Math.pow(a,2)*.8),s=window.devicePixelRatio,c=document.createElement("canvas"),u=o*s;c.width=u,c.height=u,c.style.width=c.width/s+"px",c.style.height=c.height/s+"px";var h=c.getContext("2d");if(l&&(h.fillStyle=l.toCss(!0),h.fillRect(0,0,u,u),h.fill()),h.fillStyle=t.toCss(!0),b&&b.length/2===n)for(var d=0;d<2*n;d+=2){var y=b[d],v=b[d+1];h.fillRect(y,v,a*s,a*s),h.fill()}else{b=[];for(var d=0;d<2*n;d+=2){var y=p(0,u),v=p(0,u);b.push(y,v),h.fillRect(y,v,a*s,a*s),h.fill()}}i&&(i.color&&(h.strokeStyle=i.color.toCss(!0)),h.lineWidth=i.width,h.strokeRect(0,0,u,u));var f=new Image(o,o);return f.src=c.toDataURL(),f}function d(e,t){var r=t&&"horizontal"===t.align,l=r?75:24,i=r?24:75,a=t&&t.width||l,o=t&&t.height||i,n=window.devicePixelRatio,s=a*n,c=o*n,u=document.createElement("canvas");u.width=s,u.height=c,u.style.width=a+"px",u.style.height=o+"px";var p=u.getContext("2d"),h=r?s:0,d=r?0:c,y=p.createLinearGradient(0,0,h,d),v=e.length,f=1/(v-1);e.forEach(function(e,t){return y.addColorStop(t*f,e.toString())}),p.fillStyle=y,p.fillRect(0,0,s,c);var b=document.createElement("div");return b.style.width=a+"px",b.style.height=o+"px",b.appendChild(u),b}function y(e,t){switch(e.type){case"web-style":return c.previewWebStyleSymbol(e,y,t);case"label-3d":case"line-3d":case"mesh-3d":case"point-3d":case"polygon-3d":return s.previewSymbol3D(e,t);case"simple-marker":case"simple-line":case"simple-fill":case"picture-marker":case"picture-fill":case"text":case"cim":return n.previewSymbol2D(e,t);default:return void i.neverReached(e)}}function v(e){return e&&"opacity"in e?e.opacity*v(e.parent):1}function f(t,i){return l(this,void 0,void 0,function(){var l,n,s,c,p,h,d,y,f,b,m,g,w,S,x,C;return r(this,function(r){switch(r.label){case 0:return t?(l=v(t.layer||t.sourceLayer),a.isSome(t.symbol)?(n=t.symbol.clone(),u.applyColorToSymbol(n,null,l),[2,n]):(s=t.get("layer.renderer")||t.get("sourceLayer.renderer"),[4,s.getSymbolAsync(t)])):[2,void 0];case 1:return(c=r.sent())?(c=c.clone(),!("visualVariables"in s)||"visualVariables"in s&&!s.visualVariables||"visualVariables"in s&&s.visualVariables&&!s.visualVariables.length?[2,c]:[4,o.create(function(t){return e(["../../renderers/visualVariables/support/visualVariableUtils"],t)})]):[2,void 0];case 2:for(p=r.sent(),h=[],d=[],y=[],f=[],b=0,m=s.visualVariables;b<m.length;b++)switch(g=m[b],g.type){case"color":h.push(g);break;case"opacity":d.push(g);break;case"rotation":f.push(g);break;case"size":y.push(g)}return w=!!h.length&&h[h.length-1],S=w?p.getColor(w,t,i):null,x=!!d.length&&d[d.length-1],C=x?p.getOpacity(x,t,i):null,null!=l&&(C=null!=C?C*l:l),u.applyColorToSymbol(c,S,C),y.forEach(function(e){return u.applySizeToSymbol(c,p.getSize(e,t,i),e.axis)}),f.forEach(function(e){return u.applyRotationToSymbol(c,p.getRotationAngle(e,t,i),e.axis)}),[2,c]}})})}Object.defineProperty(t,"__esModule",{value:!0});var b=null;t.renderDotDensityPreviewHTML=h,t.renderColorRampPreviewHTML=d,t.renderPreviewHTML=y,t.getDisplayedSymbol=f});