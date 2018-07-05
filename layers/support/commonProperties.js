// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../core/accessorSupport/PropertyOrigin","../../core/accessorSupport/utils","../../core/accessorSupport/write"],function(e,r,i,s,t){Object.defineProperty(r,"__esModule",{value:!0}),r.screenSizePerspectiveEnabled={type:Boolean,value:!0,json:{origins:{"web-scene":{read:{source:["id","url","layerType"],reader:function(e,r){return null==r.screenSizePerspective&&"defaults"===this.originOf("screenSizePerspectiveEnabled")?void s.getProperties(this).store.set("screenSizePerspectiveEnabled",!1,i.OriginId.DEFAULTS):r.screenSizePerspective}},write:{ignoreOrigin:!0,target:"screenSizePerspective",writer:function(e,r,i,s){"defaults"===this.originOf("screenSizePerspectiveEnabled")&&e?r[i]=e:t.willPropertyWrite(this,"screenSizePerspectiveEnabled",{},s)&&(r[i]=e)}}}}}},r.popupEnabled={type:Boolean,json:{read:{source:"disablePopup",reader:function(e,r){return!r.disablePopup}},write:{target:"disablePopup",writer:function(e,r,i){r[i]=!e}}}},r.labelsVisible={type:Boolean,json:{read:{source:"showLabels"},write:{target:"showLabels"}}}});