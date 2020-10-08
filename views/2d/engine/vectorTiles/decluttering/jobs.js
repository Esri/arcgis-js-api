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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../../../core/libs/gl-matrix-2/mat3f32","./config","./util"],(function(e,t,r,n,i){"use strict";function o(e,t,r,n,i,o){for(var a=n.iconRotationAlignment,l=n.textRotationAlignment,s=n.iconTranslate,c=n.iconTranslateAnchor,h=n.textTranslate,u=n.textTranslateAnchor,d=0,x=0,g=e.colliders;x<g.length;x++){var y=g[x],_=0===y.partIndex?s:h,f=_[0],m=_[1],p=0===y.partIndex?c:u,v=y.minLod<=o&&o<=y.maxLod;d+=v?0:1,y.enabled=v,y.xScreen=y.xTile*i[0]+y.yTile*i[3]+i[6],y.yScreen=y.xTile*i[1]+y.yTile*i[4]+i[7],0===p?(y.xScreen+=r*f-t*m,y.yScreen+=t*f+r*m):(y.xScreen+=f,y.yScreen+=m),1===(0===y.partIndex?a:l)?(y.dxScreen=y.dxPixels,y.dyScreen=y.dyPixels):(y.dxScreen=r*(y.dxPixels+y.width/2)-t*(y.dyPixels+y.height/2)-y.width/2,y.dyScreen=t*(y.dxPixels+y.width/2)+r*(y.dyPixels+y.height/2)-y.height/2)}e.colliders.length>0&&d===e.colliders.length&&(e.unique.show=!1)}Object.defineProperty(t,"__esModule",{value:!0}),t.CollisionJob=void 0;var a=function(){function e(e,t,o,a,l,s){this._symbols=e,this._layers=a,this._zoom=l,this._currentLayerCursor=0,this._currentSymbolCursor=0,this._styleProps=new Map,this._allNeededMatrices=new Map,this._gridIndex=new i.GridIndex(t,o,n.COLLISION_GRID_CELL_SIZE),this._si=Math.sin(Math.PI*s/180),this._co=Math.cos(Math.PI*s/180);for(var c=0,h=e;c<h.length;c++)for(var u=0,d=h[c].symbols;u<d.length;u++){var x=d[u];this._allNeededMatrices.has(x.tile)||this._allNeededMatrices.set(x.tile,r.mat3f32.clone(x.tile.transforms.tileUnitsToPixels))}}return e.prototype.work=function(e){var t=this._gridIndex;function r(e){for(var r=e.xScreen+e.dxScreen,n=e.yScreen+e.dyScreen,i=r+e.width,o=n+e.height,a=t.getCellSpan(r,n,i,o),l=a[0],s=a[1],c=a[2],h=a[3],u=s;u<=h;u++)for(var d=l;d<=c;d++)for(var x=0,g=t.cells[u][d];x<g.length;x++){var y=g[x],_=y.xScreen+y.dxScreen,f=y.yScreen+y.dyScreen,m=_+y.width,p=f+y.height;if(!(i<_||r>m||o<f||n>p))return!0}return!1}for(var n=performance.now();this._currentLayerCursor<this._symbols.length;this._currentLayerCursor++,this._currentSymbolCursor=0)for(var i=this._symbols[this._currentLayerCursor],a=this._getProperties(i.layerIndex);this._currentSymbolCursor<i.symbols.length;this._currentSymbolCursor++){if(this._currentSymbolCursor%100==99&&performance.now()-n>e)return!1;var l=i.symbols[this._currentSymbolCursor];if(l.unique.show){o(l,this._si,this._co,a,this._allNeededMatrices.get(l.tile),this._zoom);var s=l.unique;if(s.show){for(var c=a.iconAllowOverlap,h=a.iconIgnorePlacement,u=a.textAllowOverlap,d=a.textIgnorePlacement,x=0,g=l.colliders;x<g.length;x++){if((f=g[x]).enabled)if((m=s.parts[f.partIndex]).show)!(f.partIndex?u:c)&&r(f)&&(f.hard?s.show=!1:m.show=!1)}if(s.show)for(var y=0,_=l.colliders;y<_.length;y++){var f,m;if((f=_[y]).enabled)if(!(f.partIndex?d:h))if((m=s.parts[f.partIndex]).show)for(var p=f.xScreen+f.dxScreen,v=f.yScreen+f.dyScreen,S=p+f.width,w=v+f.height,I=this._gridIndex.getCellSpan(p,v,S,w),P=I[0],b=I[1],L=I[2],C=I[3],T=b;T<=C;T++)for(var A=P;A<=L;A++){this._gridIndex.cells[T][A].push(f)}}}}}return!0},e.prototype._getProperties=function(e){var t=this._styleProps.get(e);if(t)return t;var r=this._zoom,n=this._layers[e],i=1===n.getLayoutValue("symbol-placement",r),o=n.getLayoutValue("icon-rotation-alignment",r);2===o&&(o=i?0:1);var a=n.getLayoutValue("text-rotation-alignment",r);2===a&&(a=i?0:1);var l=n.getPaintValue("icon-translate",r),s=n.getPaintValue("icon-translate-anchor",r),c=n.getPaintValue("text-translate",r),h=n.getPaintValue("text-translate-anchor",r),u={iconAllowOverlap:n.getLayoutValue("icon-allow-overlap",r),iconIgnorePlacement:n.getLayoutValue("icon-ignore-placement",r),textAllowOverlap:n.getLayoutValue("text-allow-overlap",r),textIgnorePlacement:n.getLayoutValue("text-ignore-placement",r),iconRotationAlignment:o,textRotationAlignment:a,iconTranslateAnchor:s,iconTranslate:l,textTranslateAnchor:h,textTranslate:c};return this._styleProps.set(e,u),u},e}();t.CollisionJob=a}));