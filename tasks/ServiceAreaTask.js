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

define(["../core/declare","dojo/_base/lang","dojo/Deferred","../request","../geometry/support/normalizeUtils","./Task","./support/NAServiceDescription","./support/ServiceAreaSolveResult"],function(e,r,s,t,a,i,n,o){var l=e([i,n],{declaredClass:"esri.tasks.ServiceAreaTask",url:null,_parsedUrlGetter:function(){var e=this.inherited(arguments);return e.path+="/solveServiceArea",e},__msigns:[{n:"solve",c:1,a:[{i:0,p:["facilities.features","pointBarriers.features","polylineBarriers.features","polygonBarriers.features"]}],e:2}],solve:function(e,a){var i=new s,n=new s,o=this.__msigns[0].a[0].p,l=a&&a.assembly&&a.assembly[0]||{};return this._isInputGeometryZAware(l,o)?n=this.getServiceDescription():n.resolve({dontCheck:!0}),n.then(r.hitch(this,function(s){s.HasZ||s.dontCheck||this._dropZValuesOffInputGeometry(l,o);var a=this._encode(r.mixin({},this.parsedUrl.query,{f:"json"},e.toJSON(l)));t(this.parsedUrl.path,{query:a,callbackParamName:"callback"}).then(r.hitch(this,function(e){i.resolve(this._handleSolveResponse(e))}),i.reject)},i.reject)),i.promise},_handleSolveResponse:function(e){return o.fromJSON(e.data)}});return a._createWrappers(l),l});