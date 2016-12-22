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

define(["../../../core/Accessor","./SceneViewAltitudeConstraint","./SceneViewClipDistanceConstraint","./SceneViewTiltConstraint","./SceneViewCollisionConstraint"],function(i,t,e,n,s){var c=i.createSubclass([],{declaredClass:"esri.views.3d.constraints.SceneViewConstraints",properties:{tilt:n,altitude:t,clipDistance:e,collision:s},getDefaults:function(i){var t={};return i.tilt||(t.tilt={}),i.altitude||(t.altitude={}),i.clipDistance||(t.clipDistance={}),i.collision||(t.collision={}),t},scale:function(i){this.tilt.scale(i),this.altitude.scale(i),this.clipDistance.scale(i)}});return c});