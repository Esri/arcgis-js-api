/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["./chunks/_rollupPluginBabelHelpers","./chunks/tslib.es6","./Graphic","./core/accessorSupport/decorators/property","./core/arrayUtils","./core/accessorSupport/ensureType","./core/accessorSupport/decorators/subclass"],(function(e,t,r,p,o,s,u){"use strict";let a=function(t){function r(){var e;return(e=t.apply(this,arguments)||this).isAggregate=!0,e}e._inheritsLoose(r,t);var p=r.prototype;return p.getEffectivePopupTemplate=function(e=!1){if(this.popupTemplate)return this.popupTemplate;const t=this.sourceLayer&&this.sourceLayer.featureReduction;return t&&"popupTemplate"in t&&t.popupEnabled?t.popupTemplate:null},p.getObjectId=function(){return this.attributes.aggregateId},r}(r);t.__decorate([p.property({type:Boolean})],a.prototype,"isAggregate",void 0),a=t.__decorate([u.subclass("esri.AggregateGraphic")],a);return a}));
