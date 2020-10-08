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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../PopupTemplate","../../core/JSONSupport","../../core/lang","../../core/screenUtils","../../core/accessorSupport/decorators","./AggregateField","./commonProperties","./LabelClass"],(function(e,t,o,r,p,i,l,s,n,a,u){"use strict";return function(e){function t(t){var o=e.call(this,t)||this;return o.type="cluster",o.clusterRadius=l.toPt("80px"),o.clusterMinSize=l.toPt("12px"),o.clusterMaxSize=l.toPt("50px"),o.popupEnabled=!0,o.popupTemplate=null,o.labelingInfo=null,o.labelsVisible=!0,o.fields=null,o}var p;return o.__extends(t,e),p=t,t.prototype.clone=function(){return new p({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:i.clone(this.labelingInfo),labelsVisible:this.labelsVisible,fields:i.clone(this.fields),popupEnabled:this.popupEnabled,popupTemplate:i.clone(this.popupTemplate)})},o.__decorate([s.property({type:["cluster"],readOnly:!0,json:{write:!0}})],t.prototype,"type",void 0),o.__decorate([s.property({type:Number,cast:function(e){return"auto"===e?e:l.toPt(e)},json:{write:!0}})],t.prototype,"clusterRadius",void 0),o.__decorate([s.property({type:Number,cast:l.toPt,json:{write:!0}})],t.prototype,"clusterMinSize",void 0),o.__decorate([s.property({type:Number,cast:l.toPt,json:{write:!0}})],t.prototype,"clusterMaxSize",void 0),o.__decorate([s.property(a.popupEnabled)],t.prototype,"popupEnabled",void 0),o.__decorate([s.property({type:r,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],t.prototype,"popupTemplate",void 0),o.__decorate([s.property({type:[u],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],t.prototype,"labelingInfo",void 0),o.__decorate([s.property(a.labelsVisible)],t.prototype,"labelsVisible",void 0),o.__decorate([s.property({type:[n],json:{write:!0}})],t.prototype,"fields",void 0),t=p=o.__decorate([s.subclass("esri.layers.support.FeatureReductionCluster")],t)}(p.JSONSupport)}));