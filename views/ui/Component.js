// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/Accessor","dojo/dom","dojo/dom-class"],function(e,t,o,r,n,i,d,s){function p(e){return!(!e||!e.domNode)}var c={component:"esri-component"},u=function(e){function t(){e.apply(this,arguments),this.widget=null}return o(t,e),t.prototype.destroy=function(){this.widget&&this.widget.destroy(),this.node=null},Object.defineProperty(t.prototype,"id",{get:function(){return this._get("id")||this.get("node.id")},set:function(e){this._set("id",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"node",{set:function(e){var t=this._get("node");if(e!==t){var o;p(e)?(o=e.domNode,this._set("widget",e)):(o=d.byId(e),this._set("widget",null)),o&&s.add(o,c.component),t&&s.remove(t,c.component),this._set("node",o)}},enumerable:!0,configurable:!0}),r([n.property()],t.prototype,"id",null),r([n.property()],t.prototype,"node",null),r([n.property({readOnly:!0})],t.prototype,"widget",void 0),t=r([n.subclass("esri.views.ui.Component")],t)}(n.declared(i));return u});