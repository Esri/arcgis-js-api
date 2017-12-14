// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../core/accessorSupport/write","../../core/accessorSupport/utils","../../core/accessorSupport/PropertyOrigin"],function(e,r,i,s,t){Object.defineProperty(r,"__esModule",{value:!0}),r.screenSizePerspectiveEnabled={type:Boolean,value:!0,json:{origins:{"web-scene":{read:{source:["id","url","layerType"],reader:function(e,r){return null==r.screenSizePerspective&&"defaults"===this.originOf("screenSizePerspectiveEnabled")?void s.getProperties(this).store.set("screenSizePerspectiveEnabled",!1,t.OriginId.DEFAULTS):r.screenSizePerspective}},write:{ignoreOrigin:!0,target:"screenSizePerspective",writer:function(e,r,s,t){"defaults"===this.originOf("screenSizePerspectiveEnabled")&&e?r[s]=e:i.willPropertyWrite(this,"screenSizePerspectiveEnabled",{},t)&&(r[s]=e)}}}}}}});