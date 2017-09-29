// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","./enums","./Utils","./visualVariablesUtils","./MeshUtils","./MaterialInfoUtils","./enums","./WGLDisplayObject","./WGLDisplayRecord"],function(e,a,r,i,l,t,s,o,n,u){function y(e,a,r,i,l,t){var s=[];return s}function v(e,a){if(!e)return r.WGLVVFlag.NONE;var i=0;return e.forEach(function(e){var t=e.type;"size"===t&&"outline"!==e.target?i|=l.getTypeOfSizeVisualVariable(e):"color"===t?i|=r.WGLVVFlag.COLOR:"opacity"===t?i|=r.WGLVVFlag.OPACITY:a&&"rotation"===t&&(i|=r.WGLVVFlag.ROTATION)}),i}function b(e){if(e.backgroundFillSymbol){var a=e.backgroundFillSymbol;if(V.push({symbol:a,vv:r.WGLVVFlag.NONE}),a.outline&&"none"!==a.outline.style){var i=r.WGLVVFlag.NONE;if(e.visualVariables)for(var t=0,s=e.visualVariables;t<s.length;t++){var o=s[t];if("size"===o.type&&"outline"===o.target){i|=l.getTypeOfSizeVisualVariable(o);break}}V.push({symbol:a.outline,vv:i})}}}function f(e,a,t){V.length=0;var s=t.renderer,o=t.getSymbol(e);if(!o)return V;var n=i.isMarkerSymbol(o);if("esriGeometryPoint"===a||"esriGeometryLine"===a)return V.push({symbol:o,vv:v(s.visualVariables,n)}),V;if(n)b(s),V.push({symbol:o,vv:v(s.visualVariables,!0)});else if(i.isFillSymbol(o)){var u=r.WGLVVFlag.NONE;if(s.visualVariables)for(var y=0,f=s.visualVariables;y<f.length;y++){var p=f[y],G=p.type;"color"===G?u|=r.WGLVVFlag.COLOR:"opacity"===G&&(u|=r.WGLVVFlag.OPACITY)}if(V.push({symbol:o,vv:u}),o.outline&&"none"!==o.outline.style){var g=r.WGLVVFlag.NONE;if(s.visualVariables)for(var c=0,L=s.visualVariables;c<L.length;c++){var p=L[c];if("size"===p.type&&"outline"===p.target){g|=l.getTypeOfSizeVisualVariable(p);break}}V.push({symbol:o.outline,vv:g})}}else i.isLineSymbol(o)&&V.push({symbol:o,vv:v(s.visualVariables,n)});return V}function p(e,a,r,l,v,b,p,V,G){for(var g=e.attributes[a],c=n.pool.acquire(g),L=f(e,l,r),m=0,T=L;m<T.length;m++){var W=T[m],h=W.symbol,O=i.getSymbolGeometryType(h),d=0!==W.vv;switch(O){case o.WGLGeometryType.MARKER:G.icon||(G.icon=i.getStrides(o.WGLGeometryType.MARKER,d,!1));break;case o.WGLGeometryType.LINE:G.line||(G.line=i.getStrides(o.WGLGeometryType.LINE,d));break;case o.WGLGeometryType.FILL:G.fill||(G.fill=i.getStrides(o.WGLGeometryType.FILL,d));break;case o.WGLGeometryType.TEXT:G.text||(G.text=i.getStrides(o.WGLGeometryType.TEXT,d))}if(O===o.WGLGeometryType.TEXT)for(var F=y(e,g,d,b,V,h),S=0,E=F;S<E.length;S++){var N=E[S];c.displayRecords.push(N)}else{var I=p.get(h),R=s.createMaterialInfo(r,I,O,W.vv),k=t.createMesh(g,r,R.materialKeyInfo,I,O,v,b,e,h),M=u.pool.acquire(g,O,k,R,0,0);c.displayRecords.push(M)}}return c}Object.defineProperty(a,"__esModule",{value:!0});var V=[];a.getDisplayObject=p});