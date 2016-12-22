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

define(["./Geometry","./Extent","./Point"],function(t,e,i){function h(t){return new e(parseFloat(t.x),parseFloat(t.y)-parseFloat(t.height),parseFloat(t.x)+parseFloat(t.width),parseFloat(t.y),t.spatialReference)}var n=t.createSubclass({declaredClass:"esri.geometry.Rect",type:"rect",normalizeCtorArgs:function(t,e,i,h,n){return"object"==typeof t?t:{x:t,y:e,width:i,height:h,spatialReference:n}},properties:{cache:{dependsOn:["x","x","width","height"]},center:{readOnly:!0,dependsOn:["cache"],get:function(){var t,e;return t=this.x+this.width/2,e=this.y+this.height/2,new i(t,e,this.spatialReference)}},extent:{readOnly:!0,dependsOn:["cache"],get:function(){return h(this)}},height:100,width:100,x:0,y:0},offset:function(t,e){this.x+=t,this.y+=e},intersects:function(t){return t.x+t.width<=this.x?!1:t.y+t.height<=this.y?!1:t.y>=this.y+this.height?!1:t.x>=this.x+this.width?!1:!0},clone:function(){return new n({x:this.x,y:this.y,width:this.width,height:this.height,spatialReference:this.spatialReference})},toJSON:function(){var t=this.spatialReference;return{x:this.x,y:this.y,width:this.width,height:this.height,spatialReference:t&&t.toJSON()}}});return n});