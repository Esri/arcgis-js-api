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

define(["dojo/Evented","dojo/Deferred","../../../core/declare","../../../portal/support/geometryServiceUtils","../../../tasks/support/ProjectParameters","../../../geometry/SpatialReference","../../../geometry/Point","../../../geometry/support/scaleUtils"],function(e,t,r,i,n,o,c,s){var a=r(e,{unitInMeters:1,spatialReference:null,constructor:function(e,t,r){this.spatialReference=t,this.unitInMeters=s.getUnitValueForSR(this.spatialReference),this.geometryService=r,this.geometryService||i.create(e&&e.portalItem).then(function(e){this.geometryService=e}.bind(this)).otherwise(function(){})},toGeographic:function(e){var r=new t,i=!0,s=this.spatialReference;if(!this.geometryService)return r.reject("Must specify geometryService in esri/config"),r;Array.isArray(e[0])&&"number"!=typeof e[0]||(e=[e],i=!1),e.forEach(function(t,r){t instanceof c||(e[r]=new c(t,s))});var a=new n({geometries:e,outSR:o.WGS84});return this.geometryService.project(a).then(function(e){try{e=e.map(function(e){return[e.x,e.y]}),r.resolve(i?e:e[0])}catch(t){r.reject(t)}},function(e){r.reject(e)}),r.promise},canProject:function(){return!!this.geometryService}});return a});