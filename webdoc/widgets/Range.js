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

define(["require","exports","tslib","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators"],(function(e,t,r,o,n,i){"use strict";var s=new o.default({slider:"slider",picker:"picker"});return function(e){function t(t){var r=e.call(this,t)||this;return r.interactionMode=null,r.numStops=null,r.stopInterval=null,r}var o;return r.__extends(t,e),o=t,t.prototype.clone=function(){return new o({interactionMode:this.interactionMode,numStops:this.numStops,stopInterval:this.stopInterval})},r.__decorate([i.property({type:s.apiValues,nonNullable:!0,json:{type:s.jsonValues,default:null,read:{reader:s.read},write:{isRequired:!0,writer:s.write}}})],t.prototype,"interactionMode",void 0),r.__decorate([i.property({type:Number,json:{read:{source:"numberOfStops"},write:{target:"numberOfStops",overridePolicy:function(){var e=null!=this.stopInterval;return{enabled:!e,isRequired:!e}}}}})],t.prototype,"numStops",void 0),r.__decorate([i.property({type:Number,json:{write:{overridePolicy:function(){return{isRequired:null==this.numStops}}}}})],t.prototype,"stopInterval",void 0),t=o=r.__decorate([i.subclass("esri.webdoc.widgets.Range")],t)}(n.JSONSupport)}));