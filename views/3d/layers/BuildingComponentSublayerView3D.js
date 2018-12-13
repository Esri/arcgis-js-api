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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../Graphic","../../../core/compilerUtils","../../../core/Error","../../../core/promiseUtils","../../../core/accessorSupport/decorators","../../../support/graphicUtils","./BuildingSublayerView3D","./I3SMeshView3D","./i3s/I3SUtil","../../layers/support/popupUtils"],function(e,t,r,i,o,l,n,p,u,s,a,d,c,h,y){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._elevationContext="scene",t._isIntegratedMesh=!1,t.demolishedFilterField=null,t.progressiveLoadFactor=1,t}return i(t,e),t.prototype.initialize=function(){var e=this;this._layerUid=this.layer.layer.uid,this.watch("demolishedFilterField",function(){return e._filterChange()})},Object.defineProperty(t.prototype,"lodFactor",{get:function(){return this.get("view.qualitySettings.sceneService.3dObject.lodFactor")||1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"additionalRequiredFields",{get:function(){return n.isSome(this.demolishedFilterField)?[this.demolishedFilterField]:null},enumerable:!0,configurable:!0}),t.prototype._createLayerGraphic=function(e){var t=new l(null,null,e);return t.layer=this.layer.layer,t.sourceLayer=this.layer,t},t.prototype.canResume=function(){return this.inherited(arguments)&&(!this._controller||this._controller.rootNodeVisible)},t.prototype.isUpdating=function(){return!(!this._controller||!this._controller.updating)},t.prototype.fetchPopupFeatures=function(e,t){var r=this._validateFetchPopupFeatures();if(r)return u.reject(r);if(!t||0===t.length)return u.resolve([]);for(var i=[],o=[],l=y.getRequiredFields(this.layer),n=0,p=t;n<p.length;n++){var s=p[n];a.hasRequiredFields(s,l)?i.push(s):o.push(s)}return 0===o.length?u.resolve(i):this.whenGraphicAttributes(o,l).catch(function(){return o}).then(function(e){return i.concat(e)})},t.prototype._validateFetchPopupFeatures=function(){var e=this.layer,t=e.popupEnabled,r=e.popupTemplate;return t?r?void 0:new p("buildingscenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:e}):new p("buildingscenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:e})},t.prototype.getFilters=function(){var e=this,t=this.inherited(arguments);if(n.isSome(this.demolishedFilterField)){var r=this.demolishedFilterField;t.push(function(t,i){return e._filterNonNull(t,i,r)})}return t},t.prototype._filterNonNull=function(e,t,r){var i=t.featureIds,o=t.attributeInfo.attributeData[r];null!=o&&c.filterInPlace(e,i,function(e){return null==h.getCachedAttributeValue(o,e)})},o([s.property({dependsOn:["_controller.updating"]})],t.prototype,"updating",void 0),o([s.property({dependsOn:["_controller.rootNodeVisible"]})],t.prototype,"suspended",void 0),o([s.property({readOnly:!0})],t.prototype,"lodFactor",null),o([s.property({type:String})],t.prototype,"demolishedFilterField",void 0),o([s.property({type:[String],readOnly:!0,dependsOn:["demolishedFilterField"]})],t.prototype,"additionalRequiredFields",null),t=o([s.subclass("esri.views.3d.layers.BuildingComponentSublayerView3D")],t)}(s.declared(d,c))});