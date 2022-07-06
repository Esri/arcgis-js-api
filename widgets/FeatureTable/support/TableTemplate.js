/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as o}from"../../../chunks/tslib.es6.js";import{JSONSupport as s}from"../../../core/JSONSupport.js";import{clone as e}from"../../../core/lang.js";import{property as r}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as t}from"../../../core/accessorSupport/decorators/subclass.js";import p from"../../../form/ExpressionInfo.js";var n;let c=n=class extends s{constructor(o){super(o),this.columnTemplates=[],this.expressionInfos=null}clone(){return new n({columnTemplates:e(this.columnTemplates),expressionInfos:e(this.expressionInfos)})}};o([r()],c.prototype,"columnTemplates",void 0),o([r({type:[p],json:{write:!0}})],c.prototype,"expressionInfos",void 0),c=n=o([t("esri.widgets.FeatureTable.support.TableTemplate")],c);const m=c;export{m as default};
