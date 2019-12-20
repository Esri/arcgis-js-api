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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/tsSupport/assignHelper","../../core/compilerUtils","../../core/maybe","../../core/promiseUtils","../../support/arcadeOnDemand","./previewCIMSymbol","./previewSymbol2D","./previewSymbol3D","./previewWebStyleSymbol","./utils"],function(e,t,r,l,i,a,o,n,s,c,u,p,d,h){function v(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function y(e,t,r){var l=e.backgroundColor,i=e.outline,a=e.dotSize,o=r&&r.swatchSize||22,n=Math.round(o*o/Math.pow(a,2)*.8),s=window.devicePixelRatio,c=document.createElement("canvas"),u=o*s;c.width=u,c.height=u,c.style.width=c.width/s+"px",c.style.height=c.height/s+"px";var p=c.getContext("2d");if(l&&(p.fillStyle=l.toCss(!0),p.fillRect(0,0,u,u),p.fill()),p.fillStyle=t.toCss(!0),w&&w.length/2===n)for(var d=0;d<2*n;d+=2){var h=w[d],y=w[d+1];p.fillRect(h,y,a*s,a*s),p.fill()}else{w=[];for(var d=0;d<2*n;d+=2){var h=v(0,u),y=v(0,u);w.push(h,y),p.fillRect(h,y,a*s,a*s),p.fill()}}i&&(i.color&&(p.strokeStyle=i.color.toCss(!0)),p.lineWidth=i.width,p.strokeRect(0,0,u,u));var f=new Image(o,o);return f.src=c.toDataURL(),f}function f(e,t){void 0===t&&(t={});var r="horizontal"===t.align,l=r?75:24,i=r?24:75,a=t.width,o=void 0===a?l:a,n=t.height,s=void 0===n?i:n,c=t.gradient,u=void 0===c||c,p=window.devicePixelRatio,d=o*p,h=s*p,v=document.createElement("canvas");v.width=d,v.height=h,v.style.width=o+"px",v.style.height=s+"px";var y=v.getContext("2d"),f=r?d:0,b=r?0:h;if(u){var g=y.createLinearGradient(0,0,f,b),m=e.length,w=1/(m-1);e.forEach(function(e,t){return g.addColorStop(t*w,e.toString())}),y.fillStyle=g,y.fillRect(0,0,d,h)}else for(var S=r?d/e.length:d,x=r?h:h/e.length,C=0,R=0,V=0,M=e;V<M.length;V++){var D=M[V];y.fillStyle=D.toString(),y.fillRect(C,R,S,x),C=r?C+S:0,R=r?0:R+x}var k=document.createElement("div");return k.style.width=o+"px",k.style.height=s+"px",k.appendChild(v),k}function b(e,t){switch(e.type){case"web-style":return d.previewWebStyleSymbol(e,b,t);case"label-3d":case"line-3d":case"mesh-3d":case"point-3d":case"polygon-3d":return p.previewSymbol3D(e,t);case"simple-marker":case"simple-line":case"simple-fill":case"picture-marker":case"picture-fill":case"text":return u.previewSymbol2D(e,t);case"cim":return c.previewCIMSymbol(e,t);default:return void a.neverReached(e)}}function g(e){return e&&"opacity"in e?e.opacity*g(e.parent):1}function m(t,a){return l(this,void 0,void 0,function(){var l,c,u,p,d,v,y,f,b,m,w,S,x,C,R,V,M,D;return r(this,function(r){switch(r.label){case 0:return t?(l=g(t.layer||t.sourceLayer),o.isSome(t.symbol)?(c=t.symbol.clone(),h.applyColorToSymbol(c,null,l),[2,c]):(u=t.get("layer.renderer")||t.get("sourceLayer.renderer"),[4,u.getSymbolAsync(t)])):[2,void 0];case 1:return(p=r.sent())?(p=p.clone(),!("visualVariables"in u)||"visualVariables"in u&&!u.visualVariables||"visualVariables"in u&&u.visualVariables&&!u.visualVariables.length?[2,p]:u.arcadeRequiredForVisualVariables&&(o.isNone(a)||o.isNone(a.arcade))?(d=i({},o.unwrap(a)),v=d,[4,s.loadArcade()]):[3,3]):[2,void 0];case 2:v.arcade=r.sent(),a=d,r.label=3;case 3:return[4,n.create(function(t){return e(["../../renderers/visualVariables/support/visualVariableUtils"],t)})];case 4:for(y=r.sent(),f=[],b=[],m=[],w=[],S=0,x=u.visualVariables;S<x.length;S++)switch(C=x[S],C.type){case"color":f.push(C);break;case"opacity":b.push(C);break;case"rotation":w.push(C);break;case"size":m.push(C)}return R=!!f.length&&f[f.length-1],V=R?y.getColor(R,t,a):null,M=!!b.length&&b[b.length-1],D=M?y.getOpacity(M,t,a):null,null!=l&&(D=null!=D?D*l:l),h.applyColorToSymbol(p,V,D),m.forEach(function(e){return h.applySizeToSymbol(p,y.getSize(e,t,a),e.axis)}),w.forEach(function(e){return h.applyRotationToSymbol(p,y.getRotationAngle(e,t,a),e.axis)}),[2,p]}})})}Object.defineProperty(t,"__esModule",{value:!0});var w=null;t.renderDotDensityPreviewHTML=y,t.renderColorRampPreviewHTML=f,t.renderPreviewHTML=b,t.getDisplayedSymbol=m});