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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","./enums","./enums","./MaterialInfoUtils","./mesh","./textMeshUtils","./Utils","./visualVariablesUtils","./WGLDisplayObject","./WGLDisplayRecord"],function(e,a,r,i,l,t,s,o,y,n,v,u){function p(e,a){if(!e)return i.WGLVVFlag.NONE;for(var r=0,l=0,t=e;l<t.length;l++){var s=t[l];"size"===s.type&&"outline"!==s.target?r|=n.getTypeOfSizeVisualVariable(s):"color"===s.type?r|=i.WGLVVFlag.COLOR:"opacity"===s.type?r|=i.WGLVVFlag.OPACITY:a&&"rotation"===s.type&&(r|=i.WGLVVFlag.ROTATION)}return r}function V(e){if(e.backgroundFillSymbol){var a=e.backgroundFillSymbol,r=i.WGLVVFlag.NONE;if(e.visualVariables)for(var l=0,t=e.visualVariables;l<t.length;l++){var s=t[l],o=s.type;"color"===o?r|=i.WGLVVFlag.COLOR:"opacity"===o&&(r|=i.WGLVVFlag.OPACITY)}if(g.push({symbol:a,vv:r,isBFS:!0}),a.outline&&"none"!==a.outline.style){var y=i.WGLVVFlag.NONE;if(e.visualVariables)for(var v=0,u=e.visualVariables;v<u.length;v++){var s=u[v];if("size"===s.type&&"outline"===s.target){y|=n.getTypeOfSizeVisualVariable(s);break}}g.push({symbol:a.outline,vv:y})}}}function b(e,a,r){g.length=0;var l=r.renderer,t=r.getSymbol(e);if(!t)return g;var s=y.isMarkerSymbol(t)||y.isTextSymbol(t);if("esriGeometryPoint"===a||"esriGeometryPolyline"===a)return g.push({symbol:t,vv:p(l.visualVariables,s)}),g;if(s)V(l),g.push({symbol:t,vv:p(l.visualVariables,!0)});else if(y.isFillSymbol(t)){var o=i.WGLVVFlag.NONE;if(l.visualVariables)for(var v=0,u=l.visualVariables;v<u.length;v++){var b=u[v],f=b.type;"color"===f?o|=i.WGLVVFlag.COLOR:"opacity"===f&&(o|=i.WGLVVFlag.OPACITY)}if(g.push({symbol:t,vv:o}),t.outline&&"none"!==t.outline.style){var G=i.WGLVVFlag.NONE;if(l.visualVariables)for(var m=0,L=l.visualVariables;m<L.length;m++){var b=L[m];if("size"===b.type&&"outline"===b.target){G|=n.getTypeOfSizeVisualVariable(b);break}}g.push({symbol:t.outline,vv:G})}}else y.isLineSymbol(t)&&g.push({symbol:t,vv:p(l.visualVariables,s)});return g}function f(e,a,r,i,n,p,V){for(var f=e.attributes[a],g=new v(f),G=b(e,i,r),m=0,L=G;m<L.length;m++){var c=L[m],T=c.symbol,h=y.getSymbolGeometryType(T),W=0!==c.vv;switch(h){case l.WGLGeometryType.MARKER:V.icon||(V.icon=y.getStrides(l.WGLGeometryType.MARKER,W,!1));break;case l.WGLGeometryType.LINE:V.line||(V.line=y.getStrides(l.WGLGeometryType.LINE,W));break;case l.WGLGeometryType.FILL:V.fill||(V.fill=y.getStrides(l.WGLGeometryType.FILL,W));break;case l.WGLGeometryType.TEXT:V.text||(V.text=y.getStrides(l.WGLGeometryType.TEXT,W))}if(h===l.WGLGeometryType.TEXT)for(var O=o.createTextDisplayRecords(e,c,f,r,p,y.getTextProperties(T),h),F=0,S=O;F<S.length;F++){var d=S[F];g.displayRecords.push(d)}else{var N=p.get(T),E=t.createMaterialInfo(N,h,c.vv);E.materialKeyInfo.hasVV();var I=s.createMesh(f,r,E.materialKeyInfo,N,h,i,n,e,T,c.isBFS);if(!I)continue;var R=new u(f,h,E);R.meshData=I,g.displayRecords.push(R)}}return g}Object.defineProperty(a,"__esModule",{value:!0});var g=[];a.getDisplayObject=f});