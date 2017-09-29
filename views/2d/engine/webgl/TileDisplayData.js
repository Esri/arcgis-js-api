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

define(["require","exports","../../../../core/ObjectPool","./WGLDisplayObject","./WGLDisplayRecord","./WGLDisplayList","./enums","./Utils"],function(e,i,r,s,a,l,t,o){var n=function(){function e(){this.displayList=new l,this.fillDisplayRecords=[],this.lineDisplayRecords=[],this.iconDisplayRecords=[],this.textDisplayRecords=[],this.displayObjectRegistry=new Map}return e.prototype.release=function(){},e.serialize=function(i,r,s){var a=0;return a+=l.serialize(i.displayList,r,s+a),a+=e._serializeRecords(i.fillDisplayRecords,r,s+a),a+=e._serializeRecords(i.lineDisplayRecords,r,s+a),a+=e._serializeRecords(i.iconDisplayRecords,r,s+a),a+=e._serializeRecords(i.textDisplayRecords,r,s+a),a+=e._serializeRegistry(i.displayObjectRegistry,[i.fillDisplayRecords,i.lineDisplayRecords,i.iconDisplayRecords,i.textDisplayRecords],r,s+a)},e.deserialize=function(i,r,s){var a=0;i.tileDisplayData=new e;var o={displayList:null};return a+=l.deserialize(o,r,s+a),i.tileDisplayData.displayList=o.displayList,a+=e._deserializeRecords(i.tileDisplayData.fillDisplayRecords,t.WGLGeometryType.FILL,r,s+a),a+=e._deserializeRecords(i.tileDisplayData.lineDisplayRecords,t.WGLGeometryType.LINE,r,s+a),a+=e._deserializeRecords(i.tileDisplayData.iconDisplayRecords,t.WGLGeometryType.MARKER,r,s+a),a+=e._deserializeRecords(i.tileDisplayData.textDisplayRecords,t.WGLGeometryType.TEXT,r,s+a),a+=e._deserializeRegistry(i.tileDisplayData.displayObjectRegistry,[i.tileDisplayData.fillDisplayRecords,i.tileDisplayData.lineDisplayRecords,i.tileDisplayData.iconDisplayRecords,i.tileDisplayData.textDisplayRecords],r,s+a)},e._findRecord=function(e,i){for(var r=e.length,s=0;r>s;++s)if(e[s]===i)return s;return-1},e._serializeRecords=function(e,i,r){var s=0;s+=o.serializeInteger(e.length,i,r+s);for(var l=0,t=e;l<t.length;l++){var n=t[l];s+=a.serialize(n,i,r+s,!1)}return s},e._serializeRegistry=function(i,r,s,a){var l=0,t=0;return i.forEach(function(e,i){i=i,++t}),l+=o.serializeInteger(t,s,a+l),i.forEach(function(t,n){var d=i.get(n);l+=o.serializeInteger(d.id,s,a+l),l+=o.serializeInteger(d.displayRecords.length,s,a+l);for(var c=0,y=d.displayRecords;c<y.length;c++){var p=y[c],R=e._findRecord(r[p.geometryType],p);R>=0?(s&&(s[a+l]=p.geometryType),++l,l+=o.serializeInteger(R,s,a+l)):console.error("Record found in a display object but not in the flat record lists.")}}),l},e._deserializeRecords=function(e,i,r,s){var l=0,t={n:void 0};l+=o.deserializeInteger(t,r,s+l),e.length=t.n;for(var n=0;n<t.n;++n){var d={displayRecord:null};l+=a.deserialize(d,r,s+l,!1),e[n]=d.displayRecord,e[n].geometryType=i}return l},e._deserializeRegistry=function(e,i,r,a){var l=0;e.clear();var t={n:void 0};l+=o.deserializeInteger(t,r,a+l);for(var n={n:void 0},d={n:void 0},c={n:void 0},y=0;y<t.n;++y){l+=o.deserializeInteger(n,r,a+l),l+=o.deserializeInteger(d,r,a+l);var p=s.pool.acquire();p.id=n.n;for(var R=0;R<d.n;++R){var D=void 0;l&&(D=r[a+l]),++l,l+=o.deserializeInteger(c,r,a+l);var f=i[D][c.n];f.id=p.id,p.displayRecords[R]=f}e.set(p.id,p)}return l},e.pool=new r(e),e}();return n});