/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/arrayUtils.js";import"../../core/has.js";import"../../core/accessorSupport/ensureType.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import s from"./GraphObjectType.js";let i=class extends s{constructor(t){super(t),this.strictOrigin=null,this.strictDestination=null,this.originEntityTypes=null,this.destinationEntityTypes=null}};t([o()],i.prototype,"strictOrigin",void 0),t([o()],i.prototype,"strictDestination",void 0),t([o()],i.prototype,"originEntityTypes",void 0),t([o()],i.prototype,"destinationEntityTypes",void 0),i=t([r("esri.rest.knowledgeGraph.RelationshipType")],i);const e=i;export{e as default};
