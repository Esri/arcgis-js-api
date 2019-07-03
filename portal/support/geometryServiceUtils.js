// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../config","../../core/Error","../Portal","../PortalItem","../../tasks/GeometryService","../../tasks/support/ProjectParameters","@dojo/framework/shim/Promise"],function(e,r,t,n,o,i,s,c,l,a){function u(e,r){return void 0===e&&(e=null),n(this,void 0,void 0,function(){var n;return t(this,function(t){switch(t.label){case 0:if(o.geometryServiceUrl)return[2,new l({url:o.geometryServiceUrl})];if(!e)throw new i("internal:geometry-service-url-not-configured");return e.isInstanceOf(c)?n=e.portal||s.getDefault():e.isInstanceOf(s)&&(n=e),[4,n.load({signal:r})];case 1:if(t.sent(),n.helperServices&&n.helperServices.geometry&&n.helperServices.geometry.url)return[2,new l({url:n.helperServices.geometry.url})];throw new i("internal:geometry-service-url-not-configured")}})})}function f(e,r,o,s){return void 0===o&&(o=null),n(this,void 0,void 0,function(){var n,c,l;return t(this,function(t){switch(t.label){case 0:return[4,u(o,s)];case 1:return n=t.sent(),c=new a,c.geometries=[e],c.outSpatialReference=r,[4,n.project(c,{signal:s})];case 2:if((l=t.sent())&&Array.isArray(l)&&1===l.length)return[2,l[0]];throw new i("internal:geometry-service-projection-failed")}})})}Object.defineProperty(r,"__esModule",{value:!0}),r.create=u,r.projectGeometry=f});