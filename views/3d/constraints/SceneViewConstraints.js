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

define(["../../../core/declare","../../../core/Accessoire","./SceneViewAltitudeConstraint","./SceneViewClipDistanceConstraint","./SceneViewTiltConstraint","./SceneViewCollisionConstraint"],function(t,e,i,n,s,c){var l=t([e],{declaredClass:"esri.views.3d.constraints.SceneViewConstraints",classMetadata:{properties:{tilt:{type:s},altitude:{type:i},clipDistance:{type:n},collision:{type:c}}},getDefaults:function(t){var e={};return t.tilt||(e.tilt={}),t.altitude||(e.altitude={}),t.clipDistance||(e.clipDistance={}),t.collision||(e.collision={}),e},scale:function(t){this.tilt.scale(t),this.altitude.scale(t),this.clipDistance.scale(t)}});return l});