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

define(["../../../core/Accessor","../support/mathUtils"],function(t,e){var s=.5,a=179.5,i=t.createSubclass([],{declaredClass:"esri.views.3d.constraints.SceneViewTiltConstraint",properties:{mode:{value:"auto"},max:{value:s,cast:function(t){return e.clamp(t,s,a)},set:function(t){this._set("max",t),this.mode="manual"}}},autoUpdate:function(t){"auto"===this.mode&&this._get("max")!==t&&this._set("max",t)},scale:function(t){}});return i.MAX_DEFAULT=s,i.MIN_DEFAULT=a,i});