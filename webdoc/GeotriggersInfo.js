/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import{ClonableMixin as o}from"../core/Clonable.js";import{JSONSupport as s}from"../core/JSONSupport.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../core/arrayUtils.js";import"../core/has.js";import"../core/accessorSupport/ensureType.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import{types as p}from"./geotriggersInfo/support/geotriggerTypes.js";let c=class extends(o(s)){constructor(r){super(r),this.geotriggers=null}};r([e({types:[p],json:{write:{isRequired:!0}}})],c.prototype,"geotriggers",void 0),c=r([t("esri.webdoc.GeotriggersInfo")],c);const i=c;export{i as default};
