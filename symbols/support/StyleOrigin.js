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

define(["require","exports","tslib","../../core/Accessor","../../core/accessorSupport/decorators","../../portal/Portal"],(function(t,e,r,o,p,s){"use strict";return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.portal=null,e}var o;return r.__extends(e,t),o=e,e.prototype.clone=function(){return new o({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})},r.__decorate([p.property({type:String})],e.prototype,"name",void 0),r.__decorate([p.property({type:String})],e.prototype,"styleUrl",void 0),r.__decorate([p.property({type:String})],e.prototype,"styleName",void 0),r.__decorate([p.property({type:s})],e.prototype,"portal",void 0),e=o=r.__decorate([p.subclass("esri.symbols.support.StyleOrigin")],e)}(o)}));