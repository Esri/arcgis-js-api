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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!./AreaMeasurement2D/nls/AreaMeasurement2D","../core/accessorSupport/decorators","./Widget","./AreaMeasurement2D/AreaMeasurement2DViewModel","./support/widget"],(function(e,t,s,a,r,i,n,l,u){var o="esri-button esri-button--secondary",d="esri-button--disabled",m="esri-icon-measure-area",c="esri-area-measurement-2d",p="esri-widget",v="esri-widget--panel",_="esri-area-measurement-2d__container",w="esri-area-measurement-2d__hint",b="esri-area-measurement-2d__hint-text",y="esri-area-measurement-2d__panel--error",M="esri-area-measurement-2d__measurement",x="esri-area-measurement-2d__measurement-item",h="esri-area-measurement-2d__measurement-item--disabled",f="esri-area-measurement-2d__measurement-item-title",g="esri-area-measurement-2d__measurement-item-value",O="esri-area-measurement-2d__settings",k="esri-area-measurement-2d__units",A="esri-area-measurement-2d__units-label",D="esri-area-measurement-2d__units-select esri-select",H="esri-area-measurement-2d__units-select-wrapper",S="esri-area-measurement-2d__actions",L="esri-area-measurement-2d__clear-button";return function(e){function t(t){var s=e.call(this,t)||this;return s.active=null,s.iconClass=m,s.label=r.widgetLabel,s.unit=null,s.unitOptions=null,s.view=null,s.viewModel=new l,s}return s(t,e),t.prototype.render=function(){var e=this,t=this.id,s=this.viewModel,a=this.visible,i=s.active,n=s.isSupported,l=s.measurementLabel,m=s.state,U=s.unit,C=s.unitOptions,j="disabled"===m,q="measuring"===m||"measured"===m,E=i&&"ready"===m?u.tsx("section",{key:"hint",class:w},u.tsx("p",{class:b},r.hint)):null,I=n?null:u.tsx("section",{key:"unsupported",class:y},u.tsx("p",null,r.unsupported)),V=function(t,s,a){return s?u.tsx("div",{key:a+"-enabled",class:x},u.tsx("span",{class:f},t),u.tsx("span",{class:g},s)):u.tsx("div",{key:a+"-disabled",class:e.classes(x,h),"aria-disabled":"true"},u.tsx("span",{class:f},t))},W=q?u.tsx("section",{key:"measurement",class:M},V(r.area,l.area,"area"),V(r.perimeter,l.perimeter,"perimeter")):null,z=t+"__units",B=u.tsx("section",{key:"units",class:k},u.tsx("label",{class:A,for:z},r.unit),u.tsx("div",{class:H},u.tsx("select",{class:D,id:z,onchange:this._changeUnit,bind:this,value:U},C.map((function(e){return u.tsx("option",{key:e,value:e},r.units[e])}))))),F=q?u.tsx("div",{key:"settings",class:O},B):null,G=!n||i&&!q?null:u.tsx("div",{class:S},u.tsx("button",{disabled:j,class:this.classes(o,L,j&&d),bind:this,onclick:this._newMeasurement,title:r.newMeasurement,"aria-label":r.newMeasurement},r.newMeasurement)),J=a?u.tsx("div",{class:_},I,E,F,W,G):null;return u.tsx("div",{class:this.classes(c,p,v)},J)},t.prototype._newMeasurement=function(){this.viewModel.newMeasurement()},t.prototype._changeUnit=function(e){var t=e.target,s=t.options[t.selectedIndex];s&&(this.viewModel.unit=s.value)},a([i.aliasOf("viewModel.active"),u.renderable()],t.prototype,"active",void 0),a([i.property()],t.prototype,"iconClass",void 0),a([i.property()],t.prototype,"label",void 0),a([i.aliasOf("viewModel.unit")],t.prototype,"unit",void 0),a([i.aliasOf("viewModel.unitOptions")],t.prototype,"unitOptions",void 0),a([i.aliasOf("viewModel.view")],t.prototype,"view",void 0),a([i.property({type:l}),u.renderable(["viewModel.state","viewModel.unitOptions","viewModel.unit","viewModel.measurementLabel"])],t.prototype,"viewModel",void 0),a([i.aliasOf("viewModel.visible"),u.renderable()],t.prototype,"visible",void 0),a([u.accessibleHandler()],t.prototype,"_newMeasurement",null),a([u.accessibleHandler()],t.prototype,"_changeUnit",null),t=a([i.subclass("esri.widgets.AreaMeasurement2D")],t)}(i.declared(n))}));