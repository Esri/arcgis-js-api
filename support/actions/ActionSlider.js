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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","./ActionBase"],function(e,t,i,r,o,s){return function(e){function t(t){var i=e.call(this)||this;return i.displayValueEnabled=!1,i.max=1,i.min=0,i.step=.1,i.type="slider",i.value=null,i}i(t,e),s=t,t.prototype.clone=function(){return new s({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,displayValueEnabled:this.displayValueEnabled,max:this.max,min:this.min,step:this.step,value:this.value})};var s;return r([o.property()],t.prototype,"displayValueEnabled",void 0),r([o.property()],t.prototype,"max",void 0),r([o.property()],t.prototype,"min",void 0),r([o.property()],t.prototype,"step",void 0),r([o.property()],t.prototype,"value",void 0),t=s=r([o.subclass("esri.support.Action.ActionSlider")],t)}(o.declared(s))});