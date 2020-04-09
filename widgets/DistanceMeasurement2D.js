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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/i18n!./DistanceMeasurement2D/nls/DistanceMeasurement2D","../core/accessorSupport/decorators","./Widget","./DistanceMeasurement2D/DistanceMeasurement2DViewModel","./support/widget"],(function(e,s,t,i,n,a,r,l,d){var u="esri-button esri-button--secondary",o="esri-button--disabled",c="esri-icon-measure-line",m="esri-distance-measurement-2d",p="esri-widget",v="esri-widget--panel",_="esri-distance-measurement-2d__container",w="esri-distance-measurement-2d__hint",b="esri-distance-measurement-2d__hint-text",y="esri-distance-measurement-2d__panel--error",M="esri-distance-measurement-2d__measurement",x="esri-distance-measurement-2d__measurement-item",h="esri-distance-measurement-2d__measurement-item--disabled",f="esri-distance-measurement-2d__measurement-item-title",g="esri-distance-measurement-2d__measurement-item-value",D="esri-distance-measurement-2d__settings",O="esri-distance-measurement-2d__units",k="esri-distance-measurement-2d__units-label",H="esri-distance-measurement-2d__units-select esri-select",S="esri-distance-measurement-2d__units-select-wrapper",L="esri-distance-measurement-2d__actions",U="esri-distance-measurement-2d__clear-button";return function(e){function s(s){var t=e.call(this,s)||this;return t.iconClass=c,t.label=n.widgetLabel,t.unit=null,t.unitOptions=null,t.view=null,t.viewModel=new l,t}return t(s,e),s.prototype.render=function(){var e,s,t,i=this,a=this.id,r=this.viewModel,l=this.visible,c=r.active,C=r.isSupported,j=r.measurementLabel,q=r.state,E=r.unit,I=r.unitOptions,V="disabled"===q,W="measuring"===q||"measured"===q,z=c&&"ready"===q?d.tsx("section",{key:"hint",class:w},d.tsx("p",{class:b},n.hint)):null,A=C?null:d.tsx("section",{key:"unsupported",class:y},d.tsx("p",null,n.unsupported)),B=W?d.tsx("section",{key:"measurement",class:M},(e=n.distance,t="distance",(s=j)?d.tsx("div",{key:t+"-enabled",class:x},d.tsx("span",{class:f},e),d.tsx("span",{class:g},s)):d.tsx("div",{key:t+"-disabled",class:i.classes(x,h),"aria-disabled":"true"},d.tsx("span",{class:f},e)))):null,F=a+"-units",G=W?d.tsx("section",{key:"units",class:O},d.tsx("label",{class:k,for:F},n.unit),d.tsx("div",{class:S},d.tsx("select",{class:H,id:F,onchange:this._changeUnit,bind:this,value:E},I.map((function(e){return d.tsx("option",{key:e,value:e},n.units[e])}))))):null,J=W?d.tsx("div",{key:"settings",class:D},G):null,K=!C||c&&!W?null:d.tsx("div",{class:L},d.tsx("button",{disabled:V,class:this.classes(u,U,V&&o),bind:this,onclick:this._newMeasurement,title:n.newMeasurement,"aria-label":n.newMeasurement},n.newMeasurement)),N=l?d.tsx("div",{class:_},A,z,J,B,K):null;return d.tsx("div",{class:this.classes(m,p,v)},N)},s.prototype._newMeasurement=function(){this.viewModel.newMeasurement()},s.prototype._changeUnit=function(e){var s=e.target,t=s.options[s.selectedIndex];t&&(this.viewModel.unit=t.value)},i([a.aliasOf("viewModel.active"),d.renderable()],s.prototype,"active",void 0),i([a.property()],s.prototype,"iconClass",void 0),i([a.property()],s.prototype,"label",void 0),i([a.aliasOf("viewModel.unit")],s.prototype,"unit",void 0),i([a.aliasOf("viewModel.unitOptions")],s.prototype,"unitOptions",void 0),i([a.aliasOf("viewModel.view")],s.prototype,"view",void 0),i([a.property({type:l}),d.renderable(["viewModel.state","viewModel.unitOptions","viewModel.unit","viewModel.measurementLabel"])],s.prototype,"viewModel",void 0),i([a.aliasOf("viewModel.visible"),d.renderable()],s.prototype,"visible",void 0),i([d.accessibleHandler()],s.prototype,"_newMeasurement",null),i([d.accessibleHandler()],s.prototype,"_changeUnit",null),s=i([a.subclass("esri.widgets.DistanceMeasurement2D")],s)}(a.declared(r))}));