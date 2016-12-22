// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./Geometry"],function(e,t,r){var s=function(){function e(e,t){this.values={};for(var r=t.keys,s=t.values;e.next();)switch(e.tag()){case 1:this.id=e.getUInt64();break;case 2:for(var a=e.getMessage(),n=this.values;!a.empty();){var o=a.getUInt32(),i=a.getUInt32();n[r[o]]=s[i]}break;case 3:this.type=e.getUInt32();break;case 4:this._pbfGeometry=e.getMessage();break;default:e.skip()}}return e.prototype.getGeometry=function(e){if(void 0!==this._geometry)return this._geometry;var t,s,a=this._pbfGeometry;e?e.reset(this.type):t=[];for(var n=1,o=0,i=0,u=0;!a.empty();){if(0===o){var h=a.getUInt32();n=7&h,o=h>>3}switch(o--,n){case 1:i+=a.getSInt32(),u+=a.getSInt32(),e?e.moveTo(i,u):(s&&t.push(s),s=[],s.push(new r.Point(i,u)));break;case 2:i+=a.getSInt32(),u+=a.getSInt32(),e?e.lineTo(i,u):s.push(new r.Point(i,u));break;case 7:e?e.close():s&&!s[0].equals(i,u)&&s.push(s[0].clone());break;default:throw new Error("Invalid path operation")}}var g;return e?g=e.result():(s&&t.push(s),g=t),this._geometry=g,g},e}();return s});