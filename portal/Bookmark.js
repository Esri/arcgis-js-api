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

define(["../Viewpoint","../core/lang","../core/JSONSupporter"],function(i,t,e){var o=e.createSubclass({declaredClass:"esri.arcgis.Bookmark",_viewpointReader:function(t,e){return e.viewpoint?i.fromJSON(e.viewpoint):void 0},toJSON:function(){var i={title:this.title,description:this.description,thumbnailSource:this.thumbnailSource,viewpoint:this.viewpoint?this.viewpoint.toJSON():void 0};return t.fixJson(i)}});return o});