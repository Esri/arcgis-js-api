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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/assignHelper","./enums","./enums","./MaterialInfoUtils","./mesh","./textMeshUtils","./Utils","./visualVariablesUtils","./WGLDisplayObject","./WGLDisplayRecord"],(function(e,a,r,i,l,t,s,o,y,n,v,u){Object.defineProperty(a,"__esModule",{value:!0});var p=[];function V(e,a){if(!e)return i.WGLVVFlag.NONE;for(var r=0,l=0,t=e;l<t.length;l++){var s=t[l];"size"===s.type&&"outline"!==s.target?r|=n.getTypeOfSizeVisualVariable(s):"color"===s.type?r|=i.WGLVVFlag.COLOR:"opacity"===s.type?r|=i.WGLVVFlag.OPACITY:a&&"rotation"===s.type&&(r|=i.WGLVVFlag.ROTATION)}return r}function b(e,a,r){p.length=0;var l=r.renderer,t=r.getSymbol(e);if(!t)return p;var s=y.isMarkerSymbol(t)||y.isTextSymbol(t);if("esriGeometryPoint"===a||"esriGeometryPolyline"===a)return p.push({symbol:t,vv:V(l.visualVariables,s)}),p;if(s)!function(e){if(e.backgroundFillSymbol){var a=e.backgroundFillSymbol,r=i.WGLVVFlag.NONE;if(e.visualVariables)for(var l=0,t=e.visualVariables;l<t.length;l++){var s=(u=t[l]).type;"color"===s?r|=i.WGLVVFlag.COLOR:"opacity"===s&&(r|=i.WGLVVFlag.OPACITY)}if(p.push({symbol:a,vv:r,isBFS:!0}),a.outline&&"none"!==a.outline.style){var o=i.WGLVVFlag.NONE;if(e.visualVariables)for(var y=0,v=e.visualVariables;y<v.length;y++){var u;if("size"===(u=v[y]).type&&"outline"===u.target){o|=n.getTypeOfSizeVisualVariable(u);break}}p.push({symbol:a.outline,vv:o})}}}(l),p.push({symbol:t,vv:V(l.visualVariables,!0)});else if(y.isFillSymbol(t)){var o=i.WGLVVFlag.NONE;if(l.visualVariables)for(var v=0,u=l.visualVariables;v<u.length;v++){var b=(m=u[v]).type;"color"===b?o|=i.WGLVVFlag.COLOR:"opacity"===b&&(o|=i.WGLVVFlag.OPACITY)}if(p.push({symbol:t,vv:o}),t.outline&&"none"!==t.outline.style){var f=i.WGLVVFlag.NONE;if(l.visualVariables)for(var g=0,G=l.visualVariables;g<G.length;g++){var m;if("size"===(m=G[g]).type&&"outline"===m.target){f|=n.getTypeOfSizeVisualVariable(m);break}}p.push({symbol:t.outline,vv:f})}}else y.isLineSymbol(t)&&p.push({symbol:t,vv:V(l.visualVariables,s)});return p}a.getDisplayObject=function(e,a,r,i,n,p,V){for(var f=e.attributes[a],g=new v(f),G=0,m=b(e,i,r);G<m.length;G++){var L=m[G],c=L.symbol,T=y.getSymbolGeometryType(c),h=0!==L.vv;switch(T){case l.WGLGeometryType.MARKER:V.icon||(V.icon=y.getStrides(l.WGLGeometryType.MARKER,h,!1));break;case l.WGLGeometryType.LINE:V.line||(V.line=y.getStrides(l.WGLGeometryType.LINE,h));break;case l.WGLGeometryType.FILL:V.fill||(V.fill=y.getStrides(l.WGLGeometryType.FILL,h));break;case l.WGLGeometryType.TEXT:V.text||(V.text=y.getStrides(l.WGLGeometryType.TEXT,h))}if(T===l.WGLGeometryType.TEXT)for(var W=0,O=o.createTextDisplayRecords(e,L,f,r,p,y.getTextProperties(c),T);W<O.length;W++){var F=O[W];g.displayRecords.push(F)}else{var S=p.get(c),d=t.createMaterialInfo(S,T,L.vv);d.materialKeyInfo.hasVV();var N=s.createMesh(f,r,d.materialKeyInfo,S,T,i,n,e,c,L.isBFS);if(!N)continue;var E=new u(f,T,d);E.meshData=N,g.displayRecords.push(E)}}return g}}));