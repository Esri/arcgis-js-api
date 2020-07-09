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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../core/jsonMap","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators","./support/FieldInfoFormat"],(function(t,e,o,i,r,p,n,l){var a=new i.default({richtext:"rich-text",textarea:"text-area",textbox:"text-box"});return function(t){function e(e){var o=t.call(this,e)||this;return o.fieldName=null,o.format=null,o.isEditable=!1,o.label=null,o.stringFieldOption="text-box",o.statisticType=null,o.tooltip=null,o.visible=!0,o}var i;return o.__extends(e,t),i=e,e.prototype.writeStringFieldOption=function(t,e){e.stringFieldOption=a.toJSON(t)},e.prototype.readStringFieldOption=function(t){if(t)return a.fromJSON(t)},e.prototype.clone=function(){return new i({fieldName:this.fieldName,format:this.format?p.clone(this.format):null,isEditable:this.isEditable,label:this.label,stringFieldOption:this.stringFieldOption,statisticType:this.statisticType,tooltip:this.tooltip,visible:this.visible})},o.__decorate([n.property({type:String,json:{write:!0}})],e.prototype,"fieldName",void 0),o.__decorate([n.property({type:l,json:{write:!0}})],e.prototype,"format",void 0),o.__decorate([n.property({type:Boolean,json:{write:!0,default:!1}})],e.prototype,"isEditable",void 0),o.__decorate([n.property({type:String,json:{write:!0}})],e.prototype,"label",void 0),o.__decorate([n.property({type:a.apiValues,json:{write:!0,default:"text-box",type:a.jsonValues}})],e.prototype,"stringFieldOption",void 0),o.__decorate([n.writer("stringFieldOption")],e.prototype,"writeStringFieldOption",null),o.__decorate([n.reader("stringFieldOption")],e.prototype,"readStringFieldOption",null),o.__decorate([n.property({type:["count","sum","min","max","avg","stddev","var"],json:{write:!0}})],e.prototype,"statisticType",void 0),o.__decorate([n.property({type:String,json:{write:!0}})],e.prototype,"tooltip",void 0),o.__decorate([n.property({type:Boolean,json:{write:!0}})],e.prototype,"visible",void 0),e=i=o.__decorate([n.subclass("esri.popup.FieldInfo")],e)}(r.JSONSupport)}));