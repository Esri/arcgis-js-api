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

define(["require","exports","../../../core/ObjectPool","../../../core/accessorSupport/watch"],function(e,r,t,i){Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function e(e,r){var o=this;this.owner=r,this.properties={},this.afterDispatchHandle=null;for(var a in e){var n=e[a],s=new t(n,null,null,2,2);this.properties[a]={pool:s,acquired:[]}}this.afterDispatchHandle=i.afterDispatch(function(){return o.release()})}return e.prototype.destroy=function(){this.afterDispatchHandle&&(this.afterDispatchHandle.remove(),this.afterDispatchHandle=null),this.owner=null},e.prototype.get=function(e){var r=this.owner._get(e),t=this.properties[e],i=t.pool.acquire();for(t.acquired.push(i);i===r;)t.acquired.push(i),i=t.pool.acquire();return i},e.prototype.release=function(){for(var e in this.properties){for(var r=this.properties[e],t=0,o=0,a=r.acquired;o<a.length;o++){var n=a[o];i.isValueInUse(n)?r.acquired[t++]=n:r.pool.release(n)}r.acquired.length=t}},e}();r.PropertiesPool=o,r["default"]=o});