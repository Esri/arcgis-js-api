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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["require","exports","./enums","./enums","./MaterialInfoUtils","./mesh","./textMeshUtils","./Utils","./visualVariablesUtils","./WGLDisplayObject","./WGLDisplayRecord"],function(e,a,t,i,r,l,s,o,y,n,u){function v(e,a){if(!e)return t.WGLVVFlag.NONE;for(var i=0,r=0,l=e;r<l.length;r++){var s=l[r];"size"===s.type&&"outline"!==s.target?i|=y.getTypeOfSizeVisualVariable(s):"color"===s.type?i|=t.WGLVVFlag.COLOR:"opacity"===s.type?i|=t.WGLVVFlag.OPACITY:a&&"rotation"===s.type&&(i|=t.WGLVVFlag.ROTATION)}return i}function b(e){if(e.backgroundFillSymbol){var a=e.backgroundFillSymbol;if(V.push({symbol:a,vv:t.WGLVVFlag.NONE}),a.outline&&"none"!==a.outline.style){var i=t.WGLVVFlag.NONE;if(e.visualVariables)for(var r=0,l=e.visualVariables;r<l.length;r++){var s=l[r];if("size"===s.type&&"outline"===s.target){i|=y.getTypeOfSizeVisualVariable(s);break}}V.push({symbol:a.outline,vv:i})}}}function p(e,a,i){V.length=0;var r=i.renderer,l=i.getSymbol(e);if(!l)return V;var s=o.isMarkerSymbol(l)||o.isTextSymbol(l);if("esriGeometryPoint"===a||"esriGeometryPolyline"===a)return V.push({symbol:l,vv:v(r.visualVariables,s)}),V;if(s)b(r),V.push({symbol:l,vv:v(r.visualVariables,!0)});else if(o.isFillSymbol(l)){var n=t.WGLVVFlag.NONE;if(r.visualVariables)for(var u=0,p=r.visualVariables;u<p.length;u++){var f=p[u],g=f.type;"color"===g?n|=t.WGLVVFlag.COLOR:"opacity"===g&&(n|=t.WGLVVFlag.OPACITY)}if(V.push({symbol:l,vv:n}),l.outline&&"none"!==l.outline.style){var G=t.WGLVVFlag.NONE;if(r.visualVariables)for(var m=0,L=r.visualVariables;m<L.length;m++){var f=L[m];if("size"===f.type&&"outline"===f.target){G|=y.getTypeOfSizeVisualVariable(f);break}}V.push({symbol:l.outline,vv:G})}}else o.isLineSymbol(l)&&V.push({symbol:l,vv:v(r.visualVariables,s)});return V}function f(e,a,t,y,v,b,f){for(var V=e.attributes[a],g=new n(V),G=p(e,y,t),m=0,L=G;m<L.length;m++){var c=L[m],T=c.symbol,W=o.getSymbolGeometryType(T),h=0!==c.vv;switch(W){case i.WGLGeometryType.MARKER:f.icon||(f.icon=o.getStrides(i.WGLGeometryType.MARKER,h,!1));break;case i.WGLGeometryType.LINE:f.line||(f.line=o.getStrides(i.WGLGeometryType.LINE,h));break;case i.WGLGeometryType.FILL:f.fill||(f.fill=o.getStrides(i.WGLGeometryType.FILL,h));break;case i.WGLGeometryType.TEXT:f.text||(f.text=o.getStrides(i.WGLGeometryType.TEXT,h))}if(W===i.WGLGeometryType.TEXT)for(var O=s.createTextDisplayRecords(e,c,V,t,b,o.getTextProperties(T)),d=0,F=O;d<F.length;d++){var S=F[d];g.displayRecords.push(S)}else{var N=b.get(T),E=r.createMaterialInfo(t,N,W,c.vv),R=l.createMesh(V,t,E.materialKeyInfo,N,W,y,v,e,T);if(!R)continue;var I=new u;I.setData(V,W,R,E,0,0),g.displayRecords.push(I)}}return g}Object.defineProperty(a,"__esModule",{value:!0});var V=[];a.getDisplayObject=f});