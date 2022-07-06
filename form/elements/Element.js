/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{JSONSupport as o}from"../../core/JSONSupport.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";let e=class extends o{constructor(t){super(t),this.description=null,this.label=null,this.type=null,this.visibilityExpression=null}};t([r({type:String,json:{write:!0}})],e.prototype,"description",void 0),t([r({type:String,json:{write:!0}})],e.prototype,"label",void 0),t([r()],e.prototype,"type",void 0),t([r({type:String,json:{write:!0}})],e.prototype,"visibilityExpression",void 0),e=t([s("esri.form.elements.Element")],e);const i=e;export{i as default};
