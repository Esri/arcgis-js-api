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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/accessorSupport/decorators"],(function(e,t,r,o,p,n,i){return function(e){function t(t){var r=e.call(this,t)||this;return r.activeRowIndex=null,r.autoWidth=!0,r.direction=null,r.flexGrow=1,r.footerRenderFunction=null,r.frozen=!1,r.header=null,r.headerRenderFunction=function(e){var t=e.root,o=r.sortable;if(t.innerHTML="",o)return r._set("sortElement",r.createSortElement()),void t.appendChild(r.sortElement);var p=r,n=p.header,i=p.path;t.innerHTML=n||i},r.hidden=!1,r.path=null,r.renderFunction=function(e){var t=e.root,r=e.column,o=e.rowData;t.innerHTML=r&&r.path&&o&&o.item?o.item[r.path]:""},r.resizable=!0,r.sortable=!0,r.sortElement=null,r.textAlign="start",r.width=180,r}return o(t,e),t.prototype.createSortElement=function(){var e=this.direction,t=this.header,r=this.path,o=t||r,p=document.createElement("vaadin-grid-sorter");return p.setAttribute("path",r),e&&p.setAttribute("direction",e),p.innerHTML=o,p},p([i.property()],t.prototype,"activeRowIndex",void 0),p([i.property()],t.prototype,"autoWidth",void 0),p([i.property()],t.prototype,"direction",void 0),p([i.property()],t.prototype,"flexGrow",void 0),p([i.property()],t.prototype,"footerRenderFunction",void 0),p([i.property()],t.prototype,"frozen",void 0),p([i.property()],t.prototype,"header",void 0),p([i.property()],t.prototype,"headerRenderFunction",void 0),p([i.property()],t.prototype,"hidden",void 0),p([i.property()],t.prototype,"path",void 0),p([i.property()],t.prototype,"renderFunction",void 0),p([i.property()],t.prototype,"resizable",void 0),p([i.property()],t.prototype,"sortable",void 0),p([i.property({readOnly:!0})],t.prototype,"sortElement",void 0),p([i.property()],t.prototype,"textAlign",void 0),p([i.property()],t.prototype,"width",void 0),t=p([i.subclass("esri.widgets.FeatureTable.Grid.Column")],t)}(i.declared(n))}));