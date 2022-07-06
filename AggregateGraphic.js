/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"./chunks/tslib.es6.js";import r from"./Graphic.js";import{property as t}from"./core/accessorSupport/decorators/property.js";import"./core/arrayUtils.js";import"./core/has.js";import"./core/accessorSupport/ensureType.js";import{subclass as o}from"./core/accessorSupport/decorators/subclass.js";let p=class extends r{constructor(){super(...arguments),this.isAggregate=!0}getEffectivePopupTemplate(e=!1){if(this.popupTemplate)return this.popupTemplate;const r=this.sourceLayer&&this.sourceLayer.featureReduction;return r&&"popupTemplate"in r&&r.popupEnabled?r.popupTemplate:null}getObjectId(){return this.objectId}};e([t({type:Boolean})],p.prototype,"isAggregate",void 0),e([t({type:[String,Number],json:{read:!0}})],p.prototype,"objectId",void 0),p=e([o("esri.AggregateGraphic")],p);const s=p;export{s as default};
