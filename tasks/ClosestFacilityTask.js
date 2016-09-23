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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/Deferred","../request","../geometry/support/normalizeUtils","./Task","./support/NAServiceDescription","./support/ClosestFacilitySolveResult"],function(e,s,r,t,i,a,o){var n=i.createSubclass([a],{declaredClass:"esri.tasks.ClosestFacilityTask",__msigns:[{n:"solve",c:1,a:[{i:0,p:["incidents.features","facilities.features","pointBarriers.features","polylineBarriers.features","polygonBarriers.features"]}],e:2}],properties:{parsedUrl:{get:function(){var e=this._parseUrl(this.url);return e.path+="/solveClosestFacility",e}},url:{}},solve:function(t,i){var a=new s,o=new s,n=this.__msigns[0].a[0].p,l=i&&i.assembly&&i.assembly[0]||{};return this._isInputGeometryZAware(l,n)?o=this.getServiceDescription():o.resolve({dontCheck:!0}),o.then(e.hitch(this,function(s){s.hasZ||s.dontCheck||this._dropZValuesOffInputGeometry(l,n);var i=this._encode(e.mixin({},this.parsedUrl.query,{f:"json"},t.toJSON(l)));r(this.parsedUrl.path,{query:i,callbackParamName:"callback"}).then(e.hitch(this,function(e){a.resolve(this._handleSolveResponse(e))}),a.reject)}),a.reject),a.promise},_handleSolveResponse:function(e){return o.fromJSON(e.data)}});return t._createWrappers(n),n});