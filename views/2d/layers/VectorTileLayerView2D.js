// COPYRIGHT © 2016 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","dojo/Deferred","dojo/_base/lang","../../../kernel","../../../core/declare","../../../core/Scheduler","../../../core/HandleRegistry","./LayerView2D"],function(e,t,i,s,r,l,o,n){var a=r(n,{declaredClass:"esri.views.2d.layers.VectorTileLayerView2D",constructor:function(){var i=new t;return this.addResolvingPromise(i.promise),this._handleRegistry=new o,e(["./vector-tile"],function(e){if(e.supported()){var t=e;this.vectorTile=t,t.identityManager=s.id,this.update=this.update.bind(this),this._viewHdl=this.watch("view.viewpoint",this.update),this._updateTask=l.addFrameTask({update:this.update}),i.resolve()}else i.reject(new Error("VectorTileLayer is not supported"));this.container.watch("surface",function(e){var t=this.layer,i=t.style,s=this.vectorTile,r=this.view,l=r.state;this.gl=new s.Renderer({container:e,center:[l.longitude,l.latitude],zoom:this.getZoom(l.resolution),bearing:-l.rotation}),this.gl.getCanvas().style["transform-origin"]="center",this.gl.getCanvas().style.transform="rotate(-"+l.rotation+"deg)",this.gl.setSize(l.width,l.height),this._applyGLStyle(i);var o=t.styles||[];this._applyStyles(o)}.bind(this))}.bind(this)),i.promise},getDefaults:function(){return i.mixin(this.inherited(arguments),{styles:[]})},initialize:function(){this._handleRegistry.add(this.layer.watch("styles",function(e){e=e||[],this._applyStyles(e)}.bind(this))),this._handleRegistry.add(this.layer.watch("style",function(e){this.gl&&this._applyGLStyle(e),this.emit("style-change",this.layer.style)}.bind(this)))},destroy:function(){if(this._updateTask&&(this._updateTask.remove(),this._updateTask=null),this.gl){var e=this.gl.style&&this.gl.style.sources.esri&&this.gl.style.sources.esri?this.gl.style.sources.esri._pyramid:null;e&&e.clearTiles(),this.gl.remove(),this.gl=null}this._viewHdl&&(this._viewHdl.remove(),this._viewHdl=null),this._handleRegistry&&(this._handleRegistry.destroy(),this._handleRegistry=null)},update:function(){if(this.gl){var e=this.view,t=e.state;this._version!==t.version&&(this._version=t.version,this.canResume()&&(this.gl.setSize(t.width,t.height),this.gl.jumpTo({center:[t.longitude,t.latitude],zoom:this.getZoom(t.resolution),bearing:-t.rotation}),this.gl.getCanvas().style.transform="rotate(-"+t.rotation+"deg)"))}},getZoom:function(e){var t=this.layer.tileInfo,i=t.lods,s=null,r=null,l=0,o=i.length-1;for(l;o>l;l++){if(s=i[l],r=i[l+1],s.resolution<=e)return s.level;if(r.resolution===e)return r.level;if(s.resolution>e&&r.resolution<e)return l=i[l].level+1-(e-r.resolution)/(s.resolution-r.resolution),l=Math.ceil(l)-Math.log(Math.abs(Math.ceil(l)-l+1))/Math.LN2,(l-Math.floor(l)>.995||l-Math.floor(l)<.005)&&(l=Math.round(l)),l}},_applyStyles:function(e){var t,i,s,r=this.styles,l=this.gl,o=[];for(t=0,i=r.length;i>t;t++)s=r[t],-1===e.indexOf(s)?l.removeClass(s):o.push(s);for(t=0,i=e.length;i>t;t++)s=e[t],-1===o.indexOf(s)&&(l.addClass(s),o.push(s));this.styles=o},_applyGLStyle:function(e){var t=this.gl;if(t){if(!e)return void t.setStyle(null);e.animationLoop=t.animationLoop,t.setStyle(e),e._loaded&&(Object.getOwnPropertyNames(e.sources).forEach(function(e){this.fire("source.add",{source:this.sources[e]})},e),e.fire("load"),e.sprite&&e.sprite.loaded()&&e.fire("change"))}}});return a});