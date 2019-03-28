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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/kebabDictionary","../core/lang","../core/accessorSupport/decorators","./support/FieldInfoFormat"],function(t,e,i,o,r,p,n,l,s){var a=new p.default({richtext:"rich-text",textarea:"text-area",textbox:"text-box"});return function(t){function e(e){var i=t.call(this)||this;return i.fieldName=null,i.format=null,i.isEditable=!1,i.label=null,i.stringFieldOption="text-box",i.statisticType=null,i.tooltip=null,i.visible=!0,i}i(e,t),r=e,e.prototype.writeStringFieldOption=function(t,e){e.stringFieldOption=a.toJSON(t)},e.prototype.readStringFieldOption=function(t){if(t)return a.fromJSON(t)},e.prototype.clone=function(){return new r({fieldName:this.fieldName,format:this.format?n.clone(this.format):null,isEditable:this.isEditable,label:this.label,stringFieldOption:this.stringFieldOption,statisticType:this.statisticType,tooltip:this.tooltip,visible:this.visible})};var r;return o([l.property({type:String,json:{write:!0}})],e.prototype,"fieldName",void 0),o([l.property({type:s,json:{write:!0}})],e.prototype,"format",void 0),o([l.property({type:Boolean,json:{write:!0,default:!1}})],e.prototype,"isEditable",void 0),o([l.property({type:String,json:{write:!0}})],e.prototype,"label",void 0),o([l.property({type:a.apiValues,json:{write:!0,default:"text-box",type:a.jsonValues}})],e.prototype,"stringFieldOption",void 0),o([l.writer("stringFieldOption")],e.prototype,"writeStringFieldOption",null),o([l.reader("stringFieldOption")],e.prototype,"readStringFieldOption",null),o([l.property({type:["count","sum","min","max","avg","stddev","var"],json:{write:!0}})],e.prototype,"statisticType",void 0),o([l.property({type:String,json:{write:!0}})],e.prototype,"tooltip",void 0),o([l.property({type:Boolean,json:{write:!0}})],e.prototype,"visible",void 0),e=r=o([l.subclass("esri.popup.FieldInfo")],e)}(l.declared(r))});