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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/Warning","../core/accessorSupport/decorators"],function(t,e,n,o,r,a,i){function s(t,e,n){var o=t&&c[t.type];if(o){var r=new o;return r.read(t,n),r}n&&n.messages&&t&&n.messages.push(new a("navigationconstraint:unsupported","Navigation constraint of type '"+(t.type||"unknown")+"' is not supported",{definition:t,context:n}))}Object.defineProperty(e,"__esModule",{value:!0});var p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),o([i.property()],e.prototype,"type",void 0),e=o([i.subclass("esri.ground.NavigationConstraint")],e)}(i.declared(r));e.NavigationConstraint=p;var u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type="none",e}n(e,t),r=e,e.prototype.clone=function(){return new r};var r;return o([i.property({type:["none"],readOnly:!0,json:{read:!1,write:!0}})],e.prototype,"type",void 0),e=r=o([i.subclass("esri.ground.NoneNavigationConstraint")],e)}(i.declared(p));e.NoneNavigationConstraint=u;var y=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type="stay-above",e}n(e,t),r=e,e.prototype.clone=function(){return new r};var r;return o([i.property({type:["stay-above"],readOnly:!0,json:{read:!1,write:function(t,e){e.type="stayAbove"}}})],e.prototype,"type",void 0),e=r=o([i.subclass("esri.ground.StayAboveNavigationConstraint")],e)}(i.declared(p));e.StayAboveNavigationConstraint=y,e.readNavigationConstraint=s;var c={none:u,stayAbove:y};e.navigationConstraintTypes={key:"type",base:p,typeMap:{none:u,"stay-above":y}}});