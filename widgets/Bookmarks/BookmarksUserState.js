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

define(["require","exports","tslib","../../core/Accessor","../../core/accessorSupport/decorators"],(function(e,t,o,r,i){"use strict";return function(e){function t(t){return e.call(this,t)||this}return o.__extends(t,e),Object.defineProperty(t.prototype,"editedBookmark",{get:function(){var e;return(null===(e=this.bookmark)||void 0===e?void 0:e.clone())||null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"state",{get:function(){return this._get("state")},set:function(e){this.validationState=void 0,this.loading=void 0,this._set("state",e)},enumerable:!1,configurable:!0}),o.__decorate([i.property()],t.prototype,"bookmark",void 0),o.__decorate([i.property({readOnly:!0,dependsOn:["bookmark"]})],t.prototype,"editedBookmark",null),o.__decorate([i.property()],t.prototype,"state",null),o.__decorate([i.property()],t.prototype,"validationState",void 0),o.__decorate([i.property()],t.prototype,"loading",void 0),t=o.__decorate([i.subclass("esri.widgets.Bookmarks.UserState")],t)}(r)}));