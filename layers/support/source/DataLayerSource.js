/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../../chunks/tslib.es6.js";import{strict as r}from"../../../core/jsonMap.js";import{JSONSupport as o}from"../../../core/JSONSupport.js";import{property as t}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import{cast as a}from"../../../core/accessorSupport/decorators/cast.js";import{enumeration as s}from"../../../core/accessorSupport/decorators/enumeration.js";import{reader as p}from"../../../core/accessorSupport/decorators/reader.js";import{subclass as l}from"../../../core/accessorSupport/decorators/subclass.js";import{ensureType as c,ensureOneOfType as i}from"../../../core/accessorSupport/ensureType.js";import{createTypeReader as u}from"../../../core/accessorSupport/extensions/serializableProperty/reader.js";import n from"../Field.js";import{MapLayerSource as y}from"./MapLayerSource.js";import{QueryTableDataSource as b}from"./QueryTableDataSource.js";import{RasterDataSource as S}from"./RasterDataSource.js";import{TableDataSource as f}from"./TableDataSource.js";var d,m;const j=r()({esriLeftInnerJoin:"left-inner-join",esriLeftOuterJoin:"left-outer-join"});let T=d=class extends o{constructor(e){super(e),this.type="join-table"}readLeftTableSource(e,r,o){return g()(e,r,o)}castLeftTableSource(e){return i(L(),e)}readRightTableSource(e,r,o){return g()(e,r,o)}castRightTableSource(e){return i(L(),e)}clone(){const{leftTableKey:e,rightTableKey:r,leftTableSource:o,rightTableSource:t,joinType:a}=this,s={leftTableKey:e,rightTableKey:r,leftTableSource:o?.clone()??void 0,rightTableSource:t?.clone()??void 0,joinType:a};return new d(s)}};e([s({joinTable:"join-table"})],T.prototype,"type",void 0),e([t({type:String,json:{write:!0}})],T.prototype,"leftTableKey",void 0),e([t({type:String,json:{write:!0}})],T.prototype,"rightTableKey",void 0),e([t({json:{write:!0}})],T.prototype,"leftTableSource",void 0),e([p("leftTableSource")],T.prototype,"readLeftTableSource",null),e([a("leftTableSource")],T.prototype,"castLeftTableSource",null),e([t({json:{write:!0}})],T.prototype,"rightTableSource",void 0),e([p("rightTableSource")],T.prototype,"readRightTableSource",null),e([a("rightTableSource")],T.prototype,"castRightTableSource",null),e([s(j)],T.prototype,"joinType",void 0),T=d=e([l("esri.layers.support.source.JoinTableDataSource")],T);let h=null;function g(){return h||(h=u({types:L()})),h}let v=null;function L(){return v||(v={key:"type",base:null,typeMap:{"data-layer":K,"map-layer":y}}),v}const w={key:"type",base:null,typeMap:{"join-table":T,"query-table":b,raster:S,table:f}};let K=m=class extends o{constructor(e){super(e),this.type="data-layer"}clone(){const{fields:e,dataSource:r}=this;return new m({fields:e,dataSource:r})}};e([s({dataLayer:"data-layer"})],K.prototype,"type",void 0),e([t({type:[n],json:{write:!0}})],K.prototype,"fields",void 0),e([t({types:w,json:{write:!0}})],K.prototype,"dataSource",void 0),K=m=e([l("esri.layers.support.source.DataLayerSource")],K),K.from=c(K);export{K as DataLayerSource,T as JoinTableDataSource};