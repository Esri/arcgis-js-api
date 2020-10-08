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

define(["require","exports","../../../../../layers/support/arcgisLayerUrl","./DrillDownFeatureSource","./GeoEventSource","./PagedFeatureSource"],(function(e,r,t,n,o,c){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.createSource=void 0,r.createSource=function(e,r,u,a,s){var i=function(e,r,n,o,c){switch(e.type){case"stream":return{type:"geoevent",serviceInfo:e,onRequest:o,outSR:r,canAcceptRequest:c};case"memory":case"on-demand":var u=function(e){if(Array.isArray(e))return"local";if("path"in e&&t.isHostedAgolService(e.path))return"hosted";return"unknown"}(e.source);return{type:"feature",serviceInfo:e,onRequest:o,outSR:r,origin:u,tileInfoView:n,canAcceptRequest:c}}}(e,r,u,a,s);switch(i.type){case"feature":switch(i.origin){case"hosted":case"local":return new c.PagedFeatureSource(i);case"unknown":return new n.DrillDownFeatureSource(i)}case"geoevent":return new o.GeoEventSource(i)}}}));