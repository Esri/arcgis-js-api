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

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/Error","../../../../core/promiseUtils","../../../../core/accessorSupport/decorators","../../../../support/graphicUtils","../LayerView3D","./popupUtils3D","../../../layers/support/popupUtils"],function(e,r,t,p,a,s,i,o,u,l,c){Object.defineProperty(r,"__esModule",{value:!0});var n=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),r.prototype._validateFetchPopupFeatures=function(){var e=this.layer,r=e.popupEnabled,t=e.popupTemplate;return r?t?void 0:new a("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:e}):new a("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:e})},r.prototype.fetchPopupFeatures=function(e,r){var t=this._validateFetchPopupFeatures();if(t)return s.reject(t);if(e&&this.hasDraped&&this.loadedGraphics&&(r=l.queryDrapedGraphics({view:this.view,loadedGraphics:this.loadedGraphics,layer:this.layer,popupTemplate:this.layer.popupTemplate,area:e,clientGraphics:r})),!r||0===r.length)return s.resolve([]);for(var p=[],a=[],i=c.getRequiredFields(this.layer),u=0,n=r;u<n.length;u++){var h=n[u];o.hasRequiredFields(h,i)?p.push(h):a.push(h)}return 0===a.length?s.resolve(p):this.whenGraphicAttributes(a,i).catch(function(){return a}).then(function(e){return p.concat(e)})},r=p([i.subclass("esri.views.3d.layers.support.PopupSceneLayerView")],r)}(i.declared(u));r.PopupSceneLayerView=n,r.default=n});