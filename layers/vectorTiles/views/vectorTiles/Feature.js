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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["require","exports","../2d/engine/webgl/Geometry"],(function(e,t,r){return function(){function e(e,t){this.values={};for(var r=t.keys,s=t.values;e.next();)switch(e.tag()){case 1:this.id=e.getUInt64();break;case 2:for(var n=e.getMessage(),a=this.values;!n.empty();){var i=n.getUInt32(),o=n.getUInt32();a[r[i]]=s[o]}break;case 3:this.type=e.getUInt32();break;case 4:this._pbfGeometry=e.getMessage();break;default:e.skip()}}return e.prototype.getGeometry=function(e){if(void 0!==this._geometry)return this._geometry;var t,s,n=this._pbfGeometry;e?e.reset(this.type):t=[];for(var a,i=1,o=0,u=0,g=0;!n.empty();){if(0===o){var h=n.getUInt32();i=7&h,o=h>>3}switch(o--,i){case 1:u+=n.getSInt32(),g+=n.getSInt32(),e?e.moveTo(u,g):(s&&t.push(s),(s=[]).push(new r.Point(u,g)));break;case 2:u+=n.getSInt32(),g+=n.getSInt32(),e?e.lineTo(u,g):s.push(new r.Point(u,g));break;case 7:e?e.close():s&&!s[0].equals(u,g)&&s.push(s[0].clone());break;default:throw new Error("Invalid path operation")}}return e?a=e.result():(s&&t.push(s),a=t),this._geometry=a,a},e}()}));