/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["./chunks/_rollupPluginBabelHelpers","./chunks/tslib.es6","./Graphic","./core/accessorSupport/decorators/property","./core/has","./core/accessorSupport/ensureType","./core/Logger","./core/accessorSupport/decorators/subclass"],(function(e,t,r,o,p,s,c,u){"use strict";var n;let i=n=function(t){function r(){var e;return(e=t.apply(this,arguments)||this).isAggregate=!0,e}e._inheritsLoose(r,t);var o=r.prototype;return o.getEffectivePopupTemplate=function(e=!1){if(this.popupTemplate)return this.popupTemplate;const t=this.sourceLayer&&this.sourceLayer.featureReduction;return t&&"popupTemplate"in t&&t.popupEnabled?t.popupTemplate:null},o.getObjectId=function(){return this.objectId},o.clone=function(){return new n({objectId:this.objectId,...this.cloneProperties()})},r}(r);return t.__decorate([o.property({type:Boolean})],i.prototype,"isAggregate",void 0),t.__decorate([o.property({type:Number,json:{read:!0}})],i.prototype,"objectId",void 0),i=n=t.__decorate([u.subclass("esri.AggregateGraphic")],i),i}));
