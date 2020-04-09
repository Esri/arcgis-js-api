// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../PopupTemplate","../../core/JSONSupport","../../core/screenUtils","../../core/accessorSupport/decorators"],(function(e,t,r,p,o,u,s,c){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(t){var r=e.call(this,t)||this;return r.type="cluster",r.clusterRadius=s.toPt("80px"),r.popupTemplate=null,r}return r(t,e),p([c.property({type:["cluster"],readOnly:!0,json:{write:!0}})],t.prototype,"type",void 0),p([c.property({type:Number,cast:function(e){return"auto"===e?e:s.toPt(e)},json:{write:!0}})],t.prototype,"clusterRadius",void 0),p([c.property({type:o,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],t.prototype,"popupTemplate",void 0),t=p([c.subclass("esri.layers.support.FeatureReductionCluster")],t)}(c.declared(u.JSONSupport));t.FeatureReductionCluster=a,t.default=a}));