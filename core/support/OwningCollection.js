/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import t from"../Collection.js";import{castForReferenceSetter as s,referenceSetter as o}from"../collectionUtils.js";import{HandleOwnerMixin as r}from"../HandleOwner.js";import"../has.js";import i from"../Logger.js";import{isNone as n}from"../maybe.js";import{property as p}from"../accessorSupport/decorators/property.js";import"../arrayUtils.js";import"../accessorSupport/ensureType.js";import{subclass as l}from"../accessorSupport/decorators/subclass.js";i.getLogger("esri.core.support.OwningCollection");let m=class extends(r(t)){constructor(e){super(e),this.handles.add([this.on("before-add",(e=>{n(e.item)&&e.preventDefault()})),this.on("after-add",(e=>this._own(e.item))),this.on("after-remove",(e=>this._release(e.item)))])}get owner(){return this._get("owner")}set owner(e){e!==this._get("owner")&&(this._releaseAll(),this._set("owner",e),this._ownAll())}_ownAll(){for(const e of this.items)this._own(e)}_releaseAll(){for(const e of this.items)this._release(e)}_createNewInstance(e){return this.itemType?new(t.ofType(this.itemType.Type))(e):new t(e)}};function a(e,t){return{type:e,cast:s,set(s){const r=o(s,this._get(t),e);r.owner=this,this._set(t,r)}}}e([p()],m.prototype,"owner",null),m=e([l("esri.core.support.OwningCollection")],m);export{m as OwningCollection,a as owningCollectionProperty};