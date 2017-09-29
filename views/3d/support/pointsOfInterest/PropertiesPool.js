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

define(["require","exports","../../../../core/ObjectPool","../../../../core/Scheduler","./disposeMembers"],function(e,r,t,o,i){Object.defineProperty(r,"__esModule",{value:!0});var l=function(){function e(e,r){this.owner=r,this.properties={},this.scheduleHandle=null;for(var o in e){var i=e[o],l=new t(i,null,null,2,2);this.properties[o]={pool:l,acquired:[]}}}return e.prototype.destroy=function(){i["default"](this,"scheduleHandle"),this.owner=null},e.prototype.get=function(e){var r=this,t=this.owner._get(e),i=this.properties[e],l=i.pool.acquire();for(i.acquired.push(l);l===t;)i.acquired.push(l),l=i.pool.acquire();return this.scheduleHandle||(this.scheduleHandle=o.schedule(function(){return r.release()})),l},e.prototype.release=function(){this.scheduleHandle=null;for(var e in this.properties){for(var r=this.properties[e],t=0,o=r.acquired;t<o.length;t++){var i=o[t];r.pool.release(i)}r.acquired.length=0}},e}();r.PropertiesPool=l,r["default"]=l});