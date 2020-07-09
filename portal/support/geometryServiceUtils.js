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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../config","../../core/Error","../Portal","../../tasks/GeometryService","../../tasks/support/ProjectParameters","@dojo/framework/shim/Promise"],(function(e,r,t,n,i,o,a,l){function s(e,r){return void 0===e&&(e=null),t.__awaiter(this,void 0,void 0,(function(){var l;return t.__generator(this,(function(t){switch(t.label){case 0:if(n.geometryServiceUrl)return[2,new a({url:n.geometryServiceUrl})];if(!e)throw new i("internal:geometry-service-url-not-configured");return[4,(l="portal"in e?e.portal||o.getDefault():e).load({signal:r})];case 1:if(t.sent(),l.helperServices&&l.helperServices.geometry&&l.helperServices.geometry.url)return[2,new a({url:l.helperServices.geometry.url})];throw new i("internal:geometry-service-url-not-configured")}}))}))}Object.defineProperty(r,"__esModule",{value:!0}),r.create=s,r.projectGeometry=function(e,r,n,o){return void 0===n&&(n=null),t.__awaiter(this,void 0,void 0,(function(){var a,c,u;return t.__generator(this,(function(t){switch(t.label){case 0:return[4,s(n,o)];case 1:return a=t.sent(),(c=new l).geometries=[e],c.outSpatialReference=r,[4,a.project(c,{signal:o})];case 2:if((u=t.sent())&&Array.isArray(u)&&1===u.length)return[2,u[0]];throw new i("internal:geometry-service-projection-failed")}}))}))}}));