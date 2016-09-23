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

define(["dojo/_base/lang","dojo/Deferred","../request","../geometry/support/normalizeUtils","./Task","./support/NAServiceDescription","./support/ServiceAreaSolveResult"],function(e,r,s,t,a,i,n){var o=a.createSubclass([i],{declaredClass:"esri.tasks.ServiceAreaTask",__msigns:[{n:"solve",c:1,a:[{i:0,p:["facilities.features","pointBarriers.features","polylineBarriers.features","polygonBarriers.features"]}],e:2}],properties:{parsedUrl:{get:function(){var e=this._parseUrl(this.url);return e.path+="/solveServiceArea",e}},url:{}},solve:function(t,a){var i=new r,n=new r,o=this.__msigns[0].a[0].p,l=a&&a.assembly&&a.assembly[0]||{};return this._isInputGeometryZAware(l,o)?n=this.getServiceDescription():n.resolve({dontCheck:!0}),n.then(e.hitch(this,function(r){r.hasZ||r.dontCheck||this._dropZValuesOffInputGeometry(l,o);var a=this._encode(e.mixin({},this.parsedUrl.query,{f:"json"},t.toJSON(l)));s(this.parsedUrl.path,{query:a,callbackParamName:"callback"}).then(e.hitch(this,function(e){i.resolve(this._handleSolveResponse(e))}),i.reject)}),i.reject),i.promise},_handleSolveResponse:function(e){return n.fromJSON(e.data)}});return t._createWrappers(o),o});