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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/Warning","../core/accessorSupport/decorators"],function(t,e,n,r,o,a,i){function s(t,e,n){var r=t&&y[t.type];if(r){var o=new r;return o.read(t,n),o}n&&n.messages&&t&&n.messages.push(new a("navigationconstraint:unsupported","Navigation constraint of type '"+(t.type||"unknown")+"' is not supported",{definition:t,context:n}))}Object.defineProperty(e,"__esModule",{value:!0});var p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),r([i.property()],e.prototype,"type",void 0),e=r([i.subclass("esri.ground.NavigationConstraint")],e)}(i.declared(o));e.NavigationConstraint=p;var u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type="none",e}n(e,t),o=e,e.prototype.clone=function(){return new o};var o;return r([i.property({readOnly:!0,json:{read:!1,write:!0}})],e.prototype,"type",void 0),e=o=r([i.subclass("esri.ground.NoneNavigationConstraint")],e)}(i.declared(p));e.NoneNavigationConstraint=u;var c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type="stay-above",e}n(e,t),o=e,e.prototype.clone=function(){return new o};var o;return r([i.property({readOnly:!0,json:{read:!1,write:function(t,e){e.type="stayAbove"}}})],e.prototype,"type",void 0),e=o=r([i.subclass("esri.ground.StayAboveNavigationConstraint")],e)}(i.declared(p));e.StayAboveNavigationConstraint=c,e.readNavigationConstraint=s;var y={none:u,stayAbove:c};e.navigationConstraintTypes={key:"type",base:p,typeMap:{none:u,"stay-above":c}}});