/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import e from"../../../../core/Evented.js";import s from"../../../../core/Handles.js";class t{constructor(t){this.handles=new s,this.events=new e,this.contentLayerViews=t.contentLayerViews,this.handles.add(this.contentLayerViews.on("change",(e=>this._layerViewsChanged(e)))),this._layerViewsChanged({added:this.contentLayerViews.toArray(),removed:[],moved:[],target:this.contentLayerViews})}destroy(){this.handles&&(this.handles.destroy(),this.handles=null)}_layerViewsChanged(e){e.added.forEach((e=>{"esri.views.3d.layers.SceneLayerView3D"===e.declaredClass&&this.handles.add(e.on("visible-geometry-changed",(()=>this._contentChanged())),e.uid)})),e.removed.forEach((e=>this.handles.remove(e.uid)))}_contentChanged(){this.events.emit("request-update",n)}}const n={};export{t as ContentGeometryUpdates};
