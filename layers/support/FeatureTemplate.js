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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/kebabDictionary","../../core/lang","../../core/accessorSupport/decorators"],function(o,e,r,t,i,l,n,p){var a=l({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});return function(o){function e(e){var r=o.call(this,e)||this;return r.name=null,r.description=null,r.drawingTool=null,r.prototype=null,r.thumbnail=null,r}return r(e,o),e.prototype.writeDrawingTool=function(o,e){e.drawingTool=a.toJSON(o)},e.prototype.writePrototype=function(o,e){e.prototype=n.fixJson(n.clone(o),!0)},e.prototype.writeThumbnail=function(o,e){e.thumbnail=n.fixJson(n.clone(o))},t([p.property({json:{write:!0}})],e.prototype,"name",void 0),t([p.property({json:{write:!0}})],e.prototype,"description",void 0),t([p.property({json:{read:a.fromJSON,write:!0}})],e.prototype,"drawingTool",void 0),t([p.writer("drawingTool")],e.prototype,"writeDrawingTool",null),t([p.property({json:{write:!0}})],e.prototype,"prototype",void 0),t([p.writer("prototype")],e.prototype,"writePrototype",null),t([p.property({json:{write:!0}})],e.prototype,"thumbnail",void 0),t([p.writer("thumbnail")],e.prototype,"writeThumbnail",null),e=t([p.subclass("esri.layers.support.FeatureTemplate")],e)}(p.declared(i))});