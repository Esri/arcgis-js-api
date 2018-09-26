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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/arrayUtils","../../core/Evented","../../core/lang","../../core/ObjectPool","../../core/accessorSupport/decorators","./FieldConfig","./InputField"],function(e,t,r,n,i,a,o,u,l,f,s,p){return function(e){function t(t){var r=e.call(this)||this;return r._fieldPool=new l(p),r._featureClone=null,r.fieldConfig=null,r.strict=!1,r}return r(t,e),Object.defineProperty(t.prototype,"feature",{get:function(){return this._get("feature")},set:function(e){this._featureClone=e?e.clone():null,this._set("feature",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"inputFields",{get:function(){var e=this,t=this,r=t._fieldPool,n=t._featureClone,i=t.layer,o=this._get("inputFields");if(o&&o.forEach(function(e){return r.release(e)}),"ready"!==this.state)return[];var u,l=this.get("layer.fields")||[],f=this.fieldConfig||[];return u=0!==f.length?f.map(function(t){var o=a.find(l,function(e){return e.name===t.name}),u=r.acquire();return u.set({field:o,config:t,feature:n,layer:i,value:e.getValue(o.name)}),u}):l.map(function(t){var a=r.acquire();return a.field=t,a.layer=i,a.feature=n,a.value=e.getValue(t.name),a}),u.filter(function(e){return e.visible})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"layer",{get:function(){return this.get("feature.layer")},set:function(e){if(!e)return void this._clearOverride("layer");this._override("layer",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"state",{get:function(){return this.get("layer.loaded")&&this.feature?"ready":"disabled"},enumerable:!0,configurable:!0}),t.prototype.getValue=function(e){var t=this._featureClone;return t&&t.get("attributes."+e)},t.prototype.setValue=function(e,t){var r=this,n=this,i=n._featureClone,o=n.inputFields,u=n.strict;if(i&&i.attributes){var l=a.find(o,function(t){return t.name===e});if(l&&i.attributes[e]!==t){l.value=t;if(this.get("layer.typeIdField")===l.name){var f=new Set;this.layer.types.forEach(function(e){return Object.keys(e.domains).forEach(function(e){return f.add(e)})}),f&&f.forEach(function(e){var t=a.find(r.inputFields,function(t){return t.name===e});t&&t.notifyChange("domain")})}u&&!l.valid||(i.attributes[e]=t,this._emitChangeEvent(l))}}},t.prototype.getValues=function(){var e=this._featureClone;return e&&u.clone(e.attributes)||null},t.prototype.submit=function(){var e=this.inputFields.filter(function(e){return e.valid}).map(function(e){return e.name}),t=this.inputFields.filter(function(e){return!e.valid}).map(function(e){return e.name}),r=this.getValues();this.emit("submit",{valid:e,invalid:t,values:r})},t.prototype._emitChangeEvent=function(e){var t=e.name,r=e.valid,n=e.value;this.emit("value-change",{layer:this.layer,feature:this.feature,fieldName:t,value:n,valid:r})},n([f.property()],t.prototype,"feature",null),n([f.property({type:[s]})],t.prototype,"fieldConfig",void 0),n([f.property({readOnly:!0,dependsOn:["feature","fieldConfig","layer.fields","layer.loaded"]})],t.prototype,"inputFields",null),n([f.property({dependsOn:["feature.layer"]})],t.prototype,"layer",null),n([f.property({dependsOn:["layer.loaded","feature"]})],t.prototype,"state",null),n([f.property()],t.prototype,"strict",void 0),n([f.property()],t.prototype,"getValues",null),n([f.property()],t.prototype,"submit",null),t=n([f.subclass("esri.widgets.FeatureForm.FeatureFormViewModel")],t)}(f.declared(i,o))});