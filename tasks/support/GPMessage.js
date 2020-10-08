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

define(["require","exports","tslib","../../core/jsonMap","../../core/JSONSupport","../../core/accessorSupport/decorators"],(function(e,r,s,o,t,i){"use strict";var p=new o.default({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});return function(e){function r(r){var s=e.call(this,r)||this;return s.description=null,s.type=null,s}return s.__extends(r,e),s.__decorate([i.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),s.__decorate([i.property({type:String,json:{read:p.read,write:p.write}})],r.prototype,"type",void 0),r=s.__decorate([i.subclass("esri.tasks.support.GPMessage")],r)}(t.JSONSupport)}));