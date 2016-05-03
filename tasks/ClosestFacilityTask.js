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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../core/declare","dojo/_base/lang","dojo/Deferred","../request","../geometry/support/normalizeUtils","./Task","./support/NAServiceDescription","./support/ClosestFacilitySolveResult"],function(e,s,r,t,i,a,n,o){var l=e([a,n],{declaredClass:"esri.tasks.ClosestFacilityTask",url:null,_parsedUrlGetter:function(){var e=this.inherited(arguments);return e.path+="/solveClosestFacility",e},__msigns:[{n:"solve",c:1,a:[{i:0,p:["incidents.features","facilities.features","pointBarriers.features","polylineBarriers.features","polygonBarriers.features"]}],e:2}],solve:function(e,i){var a=new r,n=new r,o=this.__msigns[0].a[0].p,l=i&&i.assembly&&i.assembly[0]||{};return this._isInputGeometryZAware(l,o)?n=this.getServiceDescription():n.resolve({dontCheck:!0}),n.then(s.hitch(this,function(r){r.HasZ||r.dontCheck||this._dropZValuesOffInputGeometry(l,o);var i=this._encode(s.mixin({},this.parsedUrl.query,{f:"json"},e.toJSON(l)));t(this.parsedUrl.path,{query:i,callbackParamName:"callback"}).then(s.hitch(this,function(e){a.resolve(this._handleSolveResponse(e))}),a.reject)},a.reject)),a.promise},_handleSolveResponse:function(e){return o.fromJSON(e.data)}});return i._createWrappers(l),l});