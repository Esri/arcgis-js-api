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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./Widget","./slice/SliceViewModel","./support/widget"],function(e,t,i,n,r,s,l,o){var a={button:"esri-button esri-button--secondary",base:"esri-slice esri-widget esri-widget--panel",container:"esri-slice__container",hint:"esri-slice__hint"};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.view=null,t.viewModel=new l,t.plane=null,t}return i(t,e),t.prototype.render=function(){var e=this,t=this.plane?o.tsx("button",{class:a.button,bind:this,onclick:function(){e.plane=null}},"Clear"):null,i=this.plane?null:o.tsx("section",{key:"esri-slice__hint",class:a.hint},o.tsx("p",null,"Start to slice by clicking and dragging on a surface in the scene")),n=o.tsx("div",{class:a.container},i,t);return o.tsx("div",{key:"",class:a.base,role:"presentation"},n)},n([r.aliasOf("viewModel.view")],t.prototype,"view",void 0),n([r.property({type:l})],t.prototype,"viewModel",void 0),n([r.aliasOf("viewModel.plane"),o.renderable()],t.prototype,"plane",void 0),t=n([r.subclass("esri.widgets.Slice")],t)}(r.declared(s))});