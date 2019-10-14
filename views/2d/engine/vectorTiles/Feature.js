// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../webgl/Geometry"],function(e,t,r){return function(){function e(e,t){this.values={};for(var r=t.keys,s=t.values;e.next();)switch(e.tag()){case 1:this.id=e.getUInt64();break;case 2:for(var a=e.getMessage(),n=this.values;!a.empty();){var i=a.getUInt32(),o=a.getUInt32();n[r[i]]=s[o]}a.release();break;case 3:this.type=e.getUInt32();break;case 4:this._pbfGeometry=e.getMessage();break;default:e.skip()}}return e.prototype.getGeometry=function(e){if(void 0!==this._geometry)return this._geometry;if(!this._pbfGeometry)return null;var t=this._pbfGeometry;this._pbfGeometry=null;var s,a;e?e.reset(this.type):s=[];for(var n=1,i=0,o=0,u=0;!t.empty();){if(0===i){var h=t.getUInt32();n=7&h,i=h>>3}switch(i--,n){case 1:o+=t.getSInt32(),u+=t.getSInt32(),e?e.moveTo(o,u):(a&&s.push(a),a=[],a.push(new r.Point(o,u)));break;case 2:o+=t.getSInt32(),u+=t.getSInt32(),e?e.lineTo(o,u):a.push(new r.Point(o,u));break;case 7:e?e.close():a&&!a[0].equals(o,u)&&a.push(a[0].clone());break;default:throw t.release(),new Error("Invalid path operation")}}var g;return e?g=e.result():(a&&s.push(a),g=s),t.release(),this._geometry=g,g},e}()});