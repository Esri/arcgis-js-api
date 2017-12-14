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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../core/ObjectPool","./WGLDisplayObject","./WGLDisplayRecord","./WGLDisplayList","./enums","./Utils"],function(e,r,i,t,s,a,n,o){function l(e,r,i,t){var a=e[r],n=0;n+=o.serializeInteger(a.length,i,t+n);for(var l=0,d=a;l<d.length;l++){var y=d[l];n+=s.serialize(y,i,t+n,!1)}return n}function d(e,r,i,t){var s=e.length,a=0;a+=o.serializeInteger(s,i,t+a);for(var n=new Map,l=0,d=r.length;d>l;l++)for(var y=r[l],p=0,c=y.length;c>p;p++)n.set(y[p],p);for(var l=0,d=e.length;d>l;l++){var v=e[l],y=v.displayRecords,g=v.id;a+=o.serializeInteger(g,i,t+a),a+=o.serializeInteger(y.length,i,t+a);for(var p=0,c=y.length;c>p;p++){var u=y[p];n.has(u)&&(i&&(i[t+a]=u.geometryType),++a,a+=o.serializeInteger(n.get(u),i,t+a))}}return a}function y(e,r,i,t){var a=e[r],n=0;n+=o.deserializeInteger(c,i,t+n),a.length=c.n;for(var l=0;l<c.n;++l)n+=s.deserialize(v,i,t+n,!1),a[l]=v.displayRecord,a[l].geometryType=r;return n}function p(e,r,i){var s=e.displayObjects,a=e.displayObjectRegistry,n=e.displayRecords,l=0;a.clear();var d={n:void 0};l+=o.deserializeInteger(d,r,i+l);for(var y=0;y<d.n;++y){l+=o.deserializeInteger(g,r,i+l),l+=o.deserializeInteger(u,r,i+l);var p=t.pool.acquire();s.push(p),p.id=g.n;for(var c=0;c<u.n;++c){var v=void 0;l&&(v=r[i+l]),++l,l+=o.deserializeInteger(L,r,i+l);var f=n[v][L.n];f.id=p.id,p.displayRecords[c]=f}a.set(p.id,p)}return l}var c={n:void 0},v={displayRecord:null},g={n:void 0},u={n:void 0},L={n:void 0},f=function(){function e(){this.displayList=new a,this.displayRecords=[[],[],[],[]],this.displayObjects=[],this.displayObjectRegistry=new Map}return e.prototype.release=function(){},e.serialize=function(e,r,i){var t=e.displayList,s=e.displayRecords,o=e.displayObjects,y=0;return y+=a.serialize(t,r,i+y),y+=l(s,n.WGLGeometryType.FILL,r,i+y),y+=l(s,n.WGLGeometryType.LINE,r,i+y),y+=l(s,n.WGLGeometryType.MARKER,r,i+y),y+=l(s,n.WGLGeometryType.TEXT,r,i+y),y+=d(o,s,r,i+y)},e.deserialize=function(e,r,i){var t=0;return e.displayList=a.pool.acquire(),t+=a.deserialize(e.displayList,r,i+t),t+=y(e.displayRecords,n.WGLGeometryType.FILL,r,i+t),t+=y(e.displayRecords,n.WGLGeometryType.LINE,r,i+t),t+=y(e.displayRecords,n.WGLGeometryType.MARKER,r,i+t),t+=y(e.displayRecords,n.WGLGeometryType.TEXT,r,i+t),t+=p(e,r,i+t)},e.pool=new i(e),e}();return f});