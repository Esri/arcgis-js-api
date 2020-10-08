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

define(["require","exports","../../../core/ReentrantObjectPool","../../../core/accessorSupport/watch"],(function(e,r,t,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.PropertiesPool=void 0;var i=function(){function e(e,r){var i=this;for(var s in this.owner=r,this.properties={},this.afterDispatchHandle=null,e){var a=e[s],n=new t.ReentrantObjectPool(a,null,null,2,2);this.properties[s]={pool:n,acquired:[]}}this.afterDispatchHandle=o.afterDispatch((function(){return i.release()}))}return e.prototype.destroy=function(){for(var e in this.afterDispatchHandle&&(this.afterDispatchHandle.remove(),this.afterDispatchHandle=null),this.properties){for(var r=this.properties[e],t=0,i=r.acquired;t<i.length;t++){var s=i[t];o.isValueInUse(s)||r.pool.release(s)}r.pool.destroy(),r.pool=null,r.acquired=null}this.properties=null,this.owner=null},e.prototype.get=function(e){var r=this.owner._get(e),t=this.properties[e],o=t.pool.acquire();for(t.acquired.push(o);o===r;)t.acquired.push(o),o=t.pool.acquire();return o},e.prototype.release=function(){for(var e in this.properties){for(var r=this.properties[e],t=0,i=0,s=r.acquired;i<s.length;i++){var a=s[i];o.isValueInUse(a)?r.acquired[t++]=a:r.pool.release(a)}r.acquired.length=t}},e}();r.PropertiesPool=i,r.default=i}));