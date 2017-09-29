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

define(["require","exports","../../../../core/promiseUtils","../../../../core/promiseUtils","../../../../core/MapPool","./Utils","./WGLDisplayObject","./TileData","./displayObjectUtils","./enums","./MaterialInfo","./MaterialKeyInfo","./MaterialInfoUtils","./MeshUtils","./WGLDisplayRecord"],function(e,r,a,t,i,l,o,n,s,u,v,c,f,y,p){function m(e,r,a){if(!r.has(e)){var t=a.rasterizeItem(e);r.set(e,t)}}function d(e,r,a){l.isMarkerSymbol(e)||l.isLineSymbol(e)?m(e,r,a):l.isFillSymbol(e)&&(m(e,r,a),e.outline&&"none"!==e.outline.style&&m(e.outline,r,a))}function h(e,r,a){a.has(e)||a.set(e,new Set);for(var t=a.get(e),i=r.length,l=0;i>l;l++){var o=r.charCodeAt(l);t.add(o)}}function M(e,r,m,M,g,I,R){if(0===r.features.length)return a.resolve(null);var S,q=[],E={},G=null!=M.heatmapInfo,T=r.features.length;if(b.clear(),G){var F=null!==M.vvFields;E.icon=l.getStrides(u.WGLGeometryType.MARKER,F,!0);var K=c.pool.acquire();K.geometryType=u.WGLGeometryType.MARKER,K.sdf=!1,K.pattern=!1,K.heatmap=!0,K.visibility=!1,M.vvFields?(K.vvOpacity=null!=M.vvFields.opacity,K.vvSizeMinMaxValue=null!=M.vvFields.size,K.vvColor=null!=M.vvFields.color,K.vvRotation=null!=M.vvFields.rotation):K.vvOpacity=K.vvSizeMinMaxValue=K.vvColor=K.vvRotation=!1;var z=v.pool.acquire();z.materialKey=f.getMaterialKey(K),z.materialKeyInfo=K;for(var L=0;T>L;L++){S=r.features[L];var x=S.attributes[m];if(!b.has(x)){var O=o.pool.acquire(x),U=y.createMesh(x,M,K,null,u.WGLGeometryType.MARKER,g,I,S,null),W=p.pool.acquire(x,u.WGLGeometryType.MARKER,U,z,0,0);b.add(x),O.displayRecords.push(W),q.push(O)}}return a.resolve(n.create(q,E))}var A,D=i.acquire(),j=i.acquire();M.renderer.backgroundFillSymbol&&d(M.renderer.backgroundFillSymbol,D,R);for(var L=0;T>L;L++){S=r.features[L];var k=M.getSymbol(S);k&&(l.isTextSymbol(k)?h(k,k.text,j):d(k,D,R))}if(j.size>0&&j.forEach(function(e,r){var a=[];e.forEach(function(e){return a.push(e)});var t=R.rasterizeItem(r,a);D.set(r,t)}),0===D.size)return a.resolve(null);var C=[];return D.forEach(function(e){return C.push(e)}),t.all(C).then(function(e){var a,t=i.acquire(),l=0;D.forEach(function(r,o){if(a=e[l++],a.glyphMosaicItems){A||(A=i.acquire());var n=i.acquire();a.glyphMosaicItems.forEach(function(e,r){var a=f.createTextMaterialInfo(M,e);n.set(r,{mosaicItem:e,materialInfo:a})}),A.set(o,n)}else t.set(o,a)});for(var o=0;T>o;o++){S=r.features[o];var u=S.attributes[m];if(!b.has(u)){var v=s.getDisplayObject(S,m,M,r.geometryType,g,I,t,A,E);q.push(v),b.add(u)}}return A&&(A.forEach(function(e){i.release(e)}),i.release(A)),i.release(t),i.release(j),i.release(D),n.create(q,E)})}Object.defineProperty(r,"__esModule",{value:!0});var b=new Set;r.getTileData=M});