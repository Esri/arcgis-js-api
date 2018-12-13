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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/Collection","../../../core/Evented","../../../core/accessorSupport/decorators","../../../support/actions/ActionBase","../../../support/actions/ActionButton","../../../support/actions/ActionToggle"],function(t,e,o,r,c,n,i,p,s,u,a){"use strict";var l=n.ofType({key:"type",defaultKeyValue:"button",base:s,typeMap:{button:u,toggle:a}}),y=n.ofType(l);return function(t){function e(e){var o=t.call(this,e)||this;return o.actionsSections=new y,o}return o(e,t),e.prototype.triggerAction=function(t){t&&this.emit("trigger-action",{action:t})},r([p.property({type:y})],e.prototype,"actionsSections",void 0),r([p.property()],e.prototype,"triggerAction",null),e=r([p.subclass("esri.widgets.support.ActionCollection")],e)}(p.declared(c,i))});