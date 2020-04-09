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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../webgl/Geometry"],(function(e,t,r){return function(){function e(e,t){this.values={};for(var r=t.keys,s=t.values;e.next();)switch(e.tag()){case 1:this.id=e.getUInt64();break;case 2:for(var a=e.getMessage(),n=this.values;!a.empty();){var i=a.getUInt32(),o=a.getUInt32();n[r[i]]=s[o]}a.release();break;case 3:this.type=e.getUInt32();break;case 4:this._pbfGeometry=e.getMessage();break;default:e.skip()}}return e.prototype.getGeometry=function(e){if(void 0!==this._geometry)return this._geometry;if(!this._pbfGeometry)return null;var t,s,a=this._pbfGeometry;this._pbfGeometry=null,e?e.reset(this.type):t=[];for(var n,i=1,o=0,u=0,h=0;!a.empty();){if(0===o){var g=a.getUInt32();i=7&g,o=g>>3}switch(o--,i){case 1:u+=a.getSInt32(),h+=a.getSInt32(),e?e.moveTo(u,h):(s&&t.push(s),(s=[]).push(new r.Point(u,h)));break;case 2:u+=a.getSInt32(),h+=a.getSInt32(),e?e.lineTo(u,h):s.push(new r.Point(u,h));break;case 7:e?e.close():s&&!s[0].equals(u,h)&&s.push(s[0].clone());break;default:throw a.release(),new Error("Invalid path operation")}}return e?n=e.result():(s&&t.push(s),n=t),a.release(),this._geometry=n,n},e}()}));