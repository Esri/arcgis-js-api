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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/Warning","../core/accessorSupport/decorators"],function(e,t,n,o,r,a,i){function s(e,t,n){var o=e&&v[e.type];if(o){var r=new o;return r.read(e,n),r}n&&n.messages&&e&&n.messages.push(new a("navigationconstraint:unsupported","Navigation constraint of type '"+(e.type||"unknown")+"' is not supported",{definition:e,context:n}))}Object.defineProperty(t,"__esModule",{value:!0});var p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),o([i.enumeration.serializable()({none:"none",stayAbove:"stay-above"}),i.property({readOnly:!0,json:{read:!1}})],t.prototype,"type",void 0),t=o([i.subclass("esri.ground.NavigationConstraint")],t)}(i.declared(r));t.NavigationConstraint=p;var u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="none",t}n(t,e),r=t,t.prototype.clone=function(){return new r};var r;return o([i.property({type:["none"],json:{type:["none"]}})],t.prototype,"type",void 0),t=r=o([i.subclass("esri.ground.NoneNavigationConstraint")],t)}(i.declared(p));t.NoneNavigationConstraint=u;var y=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="stay-above",t}n(t,e),r=t,t.prototype.clone=function(){return new r};var r;return o([i.property({type:["stay-above"],json:{type:["stayAbove"]}})],t.prototype,"type",void 0),t=r=o([i.subclass("esri.ground.StayAboveNavigationConstraint")],t)}(i.declared(p));t.StayAboveNavigationConstraint=y,t.readNavigationConstraint=s;var v={none:u,stayAbove:y};t.navigationConstraintTypes={key:"type",base:p,typeMap:{none:u,"stay-above":y}}});