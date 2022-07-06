/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{JSONSupport as r}from"../core/JSONSupport.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/arrayUtils.js";import"../core/has.js";import"../core/accessorSupport/ensureType.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";var s;let p=s=class extends r{constructor(t){super(t)}clone(){return new s({name:this.name,path:this.path,title:this.title})}};t([o({type:String,json:{write:!0}})],p.prototype,"name",void 0),t([o({type:String,json:{write:!0}})],p.prototype,"path",void 0),t([o({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=s=t([e("esri.webscene.TransportationNetwork")],p);const i=p;export{i as default};
