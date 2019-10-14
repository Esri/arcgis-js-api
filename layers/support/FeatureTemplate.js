// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/jsonMap","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators"],function(e,o,r,t,i,l,n,p){var a=new i.default({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});return function(e){function o(o){var r=e.call(this,o)||this;return r.name=null,r.description=null,r.drawingTool=null,r.prototype=null,r.thumbnail=null,r}return r(o,e),o.prototype.writeDrawingTool=function(e,o){o.drawingTool=a.toJSON(e)},o.prototype.writePrototype=function(e,o){o.prototype=n.fixJson(n.clone(e),!0)},o.prototype.writeThumbnail=function(e,o){o.thumbnail=n.fixJson(n.clone(e))},t([p.property({json:{write:!0}})],o.prototype,"name",void 0),t([p.property({json:{write:!0}})],o.prototype,"description",void 0),t([p.property({json:{read:a.read,write:a.write}})],o.prototype,"drawingTool",void 0),t([p.writer("drawingTool")],o.prototype,"writeDrawingTool",null),t([p.property({json:{write:!0}})],o.prototype,"prototype",void 0),t([p.writer("prototype")],o.prototype,"writePrototype",null),t([p.property({json:{write:!0}})],o.prototype,"thumbnail",void 0),t([p.writer("thumbnail")],o.prototype,"writeThumbnail",null),o=t([p.subclass("esri.layers.support.FeatureTemplate")],o)}(p.declared(l.JSONSupport))});