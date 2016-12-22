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

define(["../../../core/Accessor","../support/earthUtils"],function(t,e){var s=-(1/0),i=4*e.earthRadius,a=t.createSubclass([],{declaredClass:"esri.views.3d.constraints.SceneViewAltitudeConstraint",properties:{mode:{value:"auto"},min:{value:s,set:function(t){this._set("min",t),this._get("max")<t&&this._set("max",t),this.mode="manual"}},max:{value:i,set:function(t){this._set("max",t),this._get("min")>t&&this._set("min",t),this.mode="manual"}}},autoUpdate:function(t,e){"auto"===this.mode&&(this._get("min")!==t&&this._set("min",t),this._get("max")!==e&&this._set("max",e))},scale:function(t){this._set("max",this._get("max")*t),this._set("min",this._get("min")*t)}});return a.MIN_DEFAULT=s,a.MAX_DEFAULT=i,a});