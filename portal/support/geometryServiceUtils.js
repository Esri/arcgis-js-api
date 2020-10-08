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

define(["require","exports","tslib","../../config","../../core/Error","../Portal","../../tasks/support/ProjectParameters","@dojo/framework/shim/Promise"],(function(e,r,t,n,o,i,s){"use strict";function c(r,s){return void 0===r&&(r=null),t.__awaiter(this,void 0,void 0,(function(){var c;return t.__generator(this,(function(t){switch(t.label){case 0:return n.geometryServiceUrl?[4,new Promise((function(r,t){e(["../../tasks/GeometryService"],r,t)}))]:[3,2];case 1:return[2,new(t.sent())({url:n.geometryServiceUrl})];case 2:if(!r)throw new o("internal:geometry-service-url-not-configured");return[4,(c="portal"in r?r.portal||i.getDefault():r).load({signal:s})];case 3:return t.sent(),c.helperServices&&c.helperServices.geometry&&c.helperServices.geometry.url?[4,new Promise((function(r,t){e(["../../tasks/GeometryService"],r,t)}))]:[3,5];case 4:return[2,new(t.sent())({url:c.helperServices.geometry.url})];case 5:throw new o("internal:geometry-service-url-not-configured")}}))}))}Object.defineProperty(r,"__esModule",{value:!0}),r.projectGeometry=r.create=void 0,r.create=c,r.projectGeometry=function(e,r,n,i){return void 0===n&&(n=null),t.__awaiter(this,void 0,void 0,(function(){var a,u,l;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,c(n,i)];case 1:return a=t.sent(),(u=new s).geometries=[e],u.outSpatialReference=r,[4,a.project(u,{signal:i})];case 2:if((l=t.sent())&&Array.isArray(l)&&1===l.length)return[2,l[0]];throw new o("internal:geometry-service-projection-failed")}}))}))}}));