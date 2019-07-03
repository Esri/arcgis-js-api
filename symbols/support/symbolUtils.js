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

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/compilerUtils","../../core/maybe","../../core/promiseUtils","./previewSymbol2D","./previewSymbol3D","./previewWebStyleSymbol","./utils"],function(e,r,t,l,i,a,o,s,n,c,u){function p(e,r){return Math.floor(Math.random()*(r-e+1)+e)}function y(e,r,t){var l=e.backgroundColor,i=e.outline,a=e.dotSize,o=t&&t.swatchSize||22,s=Math.round(o*o/Math.pow(a,2)*.8),n=window.devicePixelRatio,c=document.createElement("canvas"),u=o*n;c.width=u,c.height=u,c.style.width=c.width/n+"px",c.style.height=c.height/n+"px";var y=c.getContext("2d");if(l&&(y.fillStyle=l.toCss(!0),y.fillRect(0,0,u,u),y.fill()),y.fillStyle=r.toCss(!0),d&&d.length/2===s)for(var h=0;h<2*s;h+=2){var b=d[h],v=d[h+1];y.fillRect(b,v,a*n,a*n),y.fill()}else{d=[];for(var h=0;h<2*s;h+=2){var b=p(0,u),v=p(0,u);d.push(b,v),y.fillRect(b,v,a*n,a*n),y.fill()}}i&&(i.color&&(y.strokeStyle=i.color.toCss(!0)),y.lineWidth=i.width,y.strokeRect(0,0,u,u));var f=new Image(o,o);return f.src=c.toDataURL(),f}function h(e,r){switch(e.type){case"web-style":return c.previewWebStyleSymbol(e,h,r);case"label-3d":case"line-3d":case"mesh-3d":case"point-3d":case"polygon-3d":return n.previewSymbol3D(e,r);case"simple-marker":case"simple-line":case"simple-fill":case"picture-marker":case"picture-fill":case"text":case"cim":return s.previewSymbol2D(e,r);default:i.neverReached(e)}}function b(e){return e&&"opacity"in e?e.opacity*b(e.parent):1}function v(r,i){return l(this,void 0,void 0,function(){var l,s,n,c,p,y,h,v,d,f,m,g,S,w,R,V;return t(this,function(t){switch(t.label){case 0:return r?(l=b(r.layer||r.sourceLayer),a.isSome(r.symbol)?(s=r.symbol.clone(),u.applyColorToSymbol(s,null,l),[2,s]):(n=r.get("layer.renderer")||r.get("sourceLayer.renderer"),[4,n.getSymbolAsync(r)])):[2];case 1:return(c=t.sent())?(c=c.clone(),!("visualVariables"in n)||"visualVariables"in n&&!n.visualVariables||"visualVariables"in n&&n.visualVariables&&!n.visualVariables.length?[2,c]:[4,o.create(function(r){return e(["../../renderers/visualVariables/support/visualVariableUtils"],r)})]):[2];case 2:for(p=t.sent(),y=[],h=[],v=[],d=[],f=0,m=n.visualVariables;f<m.length;f++)switch(g=m[f],g.type){case"color":y.push(g);break;case"opacity":h.push(g);break;case"rotation":d.push(g);break;case"size":v.push(g)}return S=!!y.length&&y[y.length-1],w=S?p.getColor(S,r,i):null,R=!!h.length&&h[h.length-1],V=R?p.getOpacity(R,r,i):null,null!=l&&(V=null!=V?V*l:l),u.applyColorToSymbol(c,w,V),v.forEach(function(e){return u.applySizeToSymbol(c,p.getSize(e,r,i),e.axis)}),d.forEach(function(e){return u.applyRotationToSymbol(c,p.getRotationAngle(e,r,i),e.axis)}),[2,c]}})})}Object.defineProperty(r,"__esModule",{value:!0});var d=null;r.renderDotDensityPreview=y,r.renderPreviewHTML=h,r.getDisplayedSymbol=v});