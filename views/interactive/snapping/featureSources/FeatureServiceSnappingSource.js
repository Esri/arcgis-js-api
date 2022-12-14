/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../../../chunks/tslib.es6.js";import r from"../../../../core/Accessor.js";import{HandleOwnerMixin as t}from"../../../../core/HandleOwner.js";import{destroyHandle as i}from"../../../../core/handleUtils.js";import{isSome as s}from"../../../../core/maybe.js";import{initial as a,watch as o,sync as n}from"../../../../core/reactiveUtils.js";import{property as l}from"../../../../core/accessorSupport/decorators/property.js";import"../../../../core/arrayUtils.js";import"../../../../core/has.js";import"../../../../core/accessorSupport/ensureType.js";import{subclass as u}from"../../../../core/accessorSupport/decorators/subclass.js";import{FeatureServiceTiles2D as c}from"../../../2d/interactive/snapping/featureSources/featureServiceSource/FeatureServiceTiles2D.js";import{FeatureServiceTiles3D as d}from"../../../3d/interactive/snapping/featureSources/featureServiceSource/FeatureServiceTiles3D.js";import{convertSnappingCandidate as p}from"./queryEngineUtils.js";import{WorkerTileTreeDebugger as h}from"./WorkerTileTreeDebugger.js";import{FeatureServiceSnappingSourceWorkerHandle as f}from"./featureServiceSource/FeatureServiceSnappingSourceWorkerHandle.js";import{FeatureServiceTilesSimple as m}from"./featureServiceSource/FeatureServiceTilesSimple.js";import y from"../../../support/debugFlags.js";let g=class extends(t(r)){constructor(e){super(e)}get updateTilesParameters(){return{tiles:this.tilesOfInterest.tiles,tileInfo:this.tilesOfInterest.tileInfo,tileSize:this.tilesOfInterest.tileSize}}get updating(){return this.workerHandle.updating||this.updatingHandles.updating}get configuration(){return{filter:this.layer.createQuery(),customParameters:this.layer.customParameters}}get availability(){return this.workerHandle.availability}get layer(){return this.layerSource.layer}initialize(){const e=this.view;if(s(e))switch(e.type){case"2d":this.tilesOfInterest=new c({view:e,layer:this.layer}),this.workerHandle=new f;break;case"3d":{const r=e.resourceController;this.tilesOfInterest=new d({view:e}),this.workerHandle=new f({schedule:e=>r.schedule(e)});break}}else this.tilesOfInterest=new m({layer:this.layer}),this.workerHandle=new f;this.handles.add([i(this.workerHandle)]),this.workerHandle.setup({layer:this.layer,spatialReference:this.spatialReference,configuration:this.configuration},null),this.updatingHandles.add((()=>this.updateTilesParameters),(()=>this.workerHandle.updateTiles(this.updateTilesParameters,null)),a),this.handles.add([o((()=>this.configuration),(e=>this.workerHandle.configure(e,null)),n)]),s(e)&&this.handles.add(o((()=>y.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES),(r=>{r&&!this.debug?(this.debug=new h({view:e,handle:this.workerHandle}),this.handles.add(i(this.debug),"debug")):!r&&this.debug&&this.handles.remove("debug")}),a)),this.handles.add(this.layerSource.layer.on("apply-edits",(e=>{this.workerHandle.applyEdits(e,null)})))}refresh(){this.workerHandle.refresh(null)}async fetchCandidates(e,r){return this.tilesOfInterest.pointOfInterest=e.coordinateHelper.vectorToPoint(e.point),(await this.workerHandle.fetchCandidates({...e,filter:null},r)).candidates.map((r=>p(r,e.coordinateHelper,e.elevationInfo)))}getDebugInfo(e){return this.workerHandle.getDebugInfo(e)}};e([l({constructOnly:!0})],g.prototype,"spatialReference",void 0),e([l({constructOnly:!0})],g.prototype,"layerSource",void 0),e([l({constructOnly:!0})],g.prototype,"view",void 0),e([l()],g.prototype,"tilesOfInterest",void 0),e([l({readOnly:!0})],g.prototype,"updateTilesParameters",null),e([l({readOnly:!0})],g.prototype,"updating",null),e([l({readOnly:!0})],g.prototype,"configuration",null),e([l({readOnly:!0})],g.prototype,"availability",null),g=e([u("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],g);export{g as FeatureServiceSnappingSource};