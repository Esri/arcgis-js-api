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

define(["../../core/Accessoire","../../core/declare","../2d/viewpointUtils"],function(e,t,n){var r=t([e],{declaredClass:"esri.views.Handler",classMetadata:{properties:{surface:{dependsOn:["view.surface"]}}},constructor:function(){this.viewpoint=n.create()},destroy:function(){this.view=null},next:null,customGestures:null,viewpoint:null,_surfaceGetter:function(){return this.get("view.surface")},_phaseDict:{1:"start",2:"move",4:"end",8:"cancel",START:1,MOVE:2,END:4,CANCEL:8},_eventsGetter:function(){var t,n=this.constructor.prototype,r=Object.keys(n),s=Object.keys(e.prototype);return t=r.filter(function(e){return e&&"_"!==e[0]&&0!==e.indexOf("get")&&"events"!==e&&"function"==typeof this[e]&&s.indexOf(e)<0},this)}});return r});