/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../../chunks/tslib.es6.js";import o from"../../../core/Accessor.js";import t from"../../../core/Collection.js";import{property as s}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as r}from"../../../core/accessorSupport/decorators/subclass.js";let i=class extends o{constructor(e){super(e),this.cellClassNameGenerator=null,this.columnReorderingEnabled=!0,this.columns=new t,this.dataProvider=async({page:e,pageSize:o},t)=>{const{store:s}=this;t&&(s?t(await s.fetchItems({page:e,pageSize:o})):t&&t([]))},this.multiSortEnabled=!1,this.pageSize=50,this.rowDetailsRenderer=null,this.store=null}get size(){return this.store&&this.store.count||0}get state(){const{store:e}=this;return e&&"disabled"!==e.state?"loading"===e.state?"loading":"loaded"===e.state?"loaded":"ready":"disabled"}closeColumnMenus(){this.columns?.forEach((e=>{e.menu&&e.menu.open&&e.menu.set("open",!1)}))}sortColumn(e,o){const t=this.findColumn(e);t&&(t.direction=o)}hideColumn(e){const o=this.findColumn(e);o&&!1===o.hidden&&(o.hidden=!0)}showColumn(e){const o=this.findColumn(e);o&&o.hidden&&(o.hidden=!1)}showAllColumns(){this.columns?.forEach((e=>{e.hidden&&(e.hidden=!1)}))}findColumn(e){const o=[];return this.columns.forEach((e=>{o.push(e),"columns"in e&&e.columns.forEach((e=>o.push(e)))})),o.find((o=>o.path===e))}getRowItemAt(e){return this.store&&this.store.getLocalItemAt(e)}refresh(){this.store&&(this.store.reset(),this.store.load())}};e([s()],i.prototype,"cellClassNameGenerator",void 0),e([s()],i.prototype,"columnReorderingEnabled",void 0),e([s()],i.prototype,"columns",void 0),e([s()],i.prototype,"dataProvider",void 0),e([s()],i.prototype,"multiSortEnabled",void 0),e([s()],i.prototype,"pageSize",void 0),e([s()],i.prototype,"rowDetailsRenderer",void 0),e([s({readOnly:!0})],i.prototype,"size",null),e([s()],i.prototype,"store",void 0),e([s({readOnly:!0})],i.prototype,"state",null),i=e([r("esri.widgets.FeatureTable.Grid.GridViewModel")],i);const n=i;export{n as default};