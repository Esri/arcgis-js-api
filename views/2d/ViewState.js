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

define(["./viewpointUtils","./math/vec2","./math/mat2d","../../geometry/Extent","../../core/Accessoire"],function(e,t,n,i,r){var o=r.createSubclass({declaredClass:"esri.views.2d.ViewState",classMetadata:{properties:{center:{copy:t.copy,dependsOn:["viewpoint"]},extent:{dependsOn:["viewpoint","size"],copy:function(e,t){e.xmin=t.xmin,e.ymin=t.ymin,e.xmax=t.xmax,e.ymax=t.ymax,e.spatialReference=t.spatialReference}},height:{dependsOn:["size"]},inverseTransform:{readOnly:!0,copy:n.copy,dependsOn:["transform"]},latitude:{dependsOn:["viewpoint"]},longitude:{dependsOn:["viewpoint"]},resolution:{dependsOn:["viewpoint"]},rotation:{dependsOn:["viewpoint"]},scale:{dependsOn:["viewpoint"]},screenCenter:{readOnly:!0,copy:t.copy,dependsOn:["size"]},size:{copy:t.copy},spatialReference:{dependsOn:["viewpoint"]},transform:{readOnly:!0,copy:n.copy,dependsOn:["viewpoint","size"]},transformNoRotation:{readOnly:!0,copy:n.copy,dependsOn:["viewpoint","size"]},version:{readOnly:!0,dependsOn:["transform"]},viewpoint:{copy:e.copy},width:{dependsOn:["size"]},worldScreenWidth:{readOnly:!0,dependsOn:["worldWidth","resolution"]},worldWidth:{readOnly:!0,dependsOn:["spatialReference"]},wrappable:{readOnly:!0,dependsOn:["spatialReference"]},x:{dependsOn:["center"]},y:{dependsOn:["center"]}}},_centerGetter:function(e){var n=this.viewpoint.targetGeometry;return e?t.set(e,n.x,n.y):t.fromValues(n.x,n.y)},_extentGetter:function(t){return t||(t=new i),e.getExtent(t,this.viewpoint,this.size)},_heightGetter:function(){return this.size?this.size[1]:0},_inverseTransformGetter:function(e){return e||(e=n.create()),n.invert(e,this.transform)},_latitudeGetter:function(){return this.viewpoint.targetGeometry.latitude},_longitudeGetter:function(){return this.viewpoint.targetGeometry.longitude},_resolutionGetter:function(){return e.getResolution(this.viewpoint)},_rotationGetter:function(){return this.viewpoint.rotation},_scaleGetter:function(){return this.viewpoint.scale},_screenCenterGetter:function(e){var n=this.size;return e||(e=t.create()),t.scale(e,n,.5)},size:null,_sizeSetter:function(e,n){return n?t.copy(n,e):t.clone(e)},_spatialReferenceGetter:function(){return this.viewpoint.targetGeometry.spatialReference},_transformGetter:function(t){return t||(t=n.create()),e.getTransform(t,this.viewpoint,this.size)},_transformNoRotationGetter:function(t){return t||(t=n.create()),e.getTransformNoRotation(t,this.viewpoint,this.size)},version:0,_versionGetter:function(e){return e+1},viewpoint:null,_viewpointSetter:function(t,n){return n?e.copy(n,t):t.clone()},_widthGetter:function(){return this.size?this.size[0]:0},_worldScreenWidthGetter:function(){return this.worldWidth/this.resolution},_worldWidthGetter:function(){if(this.wrappable){var e=this.spatialReference,t=e._getInfo();return t.valid[1]-t.valid[0]}return 0},_wrappableGetter:function(){return!!this.spatialReference&&this.spatialReference.isWrappable},_xGetter:function(){return this.center[0]},_yGetter:function(){return this.center[1]},copy:function(e){return this.set({viewpoint:e.viewpoint,size:e.size})},clone:function(){return new o({viewpoint:this.viewpoint.clone(),size:t.clone(this.size)})},toMap:function(e,n){return t.transformMat2d(e,n,this.inverseTransform)},toScreen:function(e,n){return t.transformMat2d(e,n,this.transform)},pixelSizeAt:function(t){var n=this.viewpoint;return e.pixelSizeAt(t,n,this.size)}});return o});