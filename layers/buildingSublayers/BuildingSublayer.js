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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Identifiable","../../core/MultiOriginJSONSupport","../../core/accessorSupport/decorators","../support/commonProperties"],function(e,r,t,i,o,p,n,l,a){return function(e){function r(r){var t=e.call(this)||this;return t.title="",t.id=-1,t.modelName=null,t.visible=!0,t.opacity=1,t}return i(r,e),r.prototype.readTitle=function(e,r,t){return"string"==typeof r.alias?r.alias:"string"==typeof r.name?r.name:""},r.prototype.readIdOnlyOnce=function(e,r,t){return-1!==this.id?this.id:"number"==typeof e?e:void 0},o([l.property({type:String,json:{origins:{"web-scene":{write:!0}}}})],r.prototype,"title",void 0),o([l.reader("service","title",["alias","name"])],r.prototype,"readTitle",null),o([l.property()],r.prototype,"layer",void 0),o([l.property({type:Number,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],r.prototype,"id",void 0),o([l.reader("service","id")],r.prototype,"readIdOnlyOnce",null),o([l.property(a.readOnlyService(String))],r.prototype,"modelName",void 0),o([l.property({type:Boolean,json:{read:{source:"visibility"},write:{target:"visibility"}}})],r.prototype,"visible",void 0),o([l.property({type:Number,json:{write:!0}})],r.prototype,"opacity",void 0),r=o([l.subclass("esri.layers.buildingSublayers.BuildingSublayer")],r)}(l.declared(n,p.Identifiable))});