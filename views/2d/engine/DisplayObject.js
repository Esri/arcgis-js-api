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

define(["dojo/_base/lang","../../../core/Accessor","../math/common","../math/mat2d","../math/vec2","./bitFlagUtil"],function(t,e,i,s,n,a){function r(){return"esri-display-object-"+o++}function l(){return 1<<c++}var o=0,c=0,h={TRANSFORM:l(),VISIBLE:l(),SIZE:l(),BLENDMODE:l(),CLIP:l(),OPACITY:l()},u=["multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],d=e.createSubclass({declaredClass:"esri.views.2d.engine.DisplayObject",tag:null,className:"esri-display-object",constructor:function(){this.id=r()},_flags:0,_renderFlag:!1,_flipY:!0,properties:{blendMode:{value:"normal",cast:function(t){return u.indexOf(t)>-1?t:"normal"},set:function(t){this._invalidateFlag(h.BLENDMODE),this._set("blendMode",t)}},coords:{set:function(t){this._invalidateFlag(h.TRANSFORM),this._set("coords",t)}},opacity:{value:1,cast:function(t){return Math.min(1,Math.max(t,0))},set:function(t){this._get("opacity")!==t&&(this._invalidateFlag(h.OPACITY),this._set("opacity",t))}},parent:{value:null,set:function(t){var e=this._get("parent");e!==t&&(t&&this._renderFlag&&t.requestChildRender(this),this._set("parent",t))}},resolution:{value:0/0,set:function(t){this._get("resolution")!==t&&(this._invalidateFlag(h.TRANSFORM),this._set("resolution",t))}},rotation:{value:0,set:function(t){this._get("rotation")!==t&&(this._invalidateFlag(h.TRANSFORM),this._set("rotation",t||0))}},size:{value:null,set:function(t){this._get("size")!==t&&(this._invalidateFlag(h.SIZE),this._set("size",t))}},stage:{},surface:{},transform:{readOnly:!0,dependsOn:["rotation","coords","resolution","size"],get:function(){var t=this._get("transform"),e=this.coords,a=this.size,r=this.resolution,l=this.rotation;if(e)if(r)t&&6===t.length||(t=s.create()),a&&s.translate(t,t,a),s.scale(t,t,n.fromValues(1/r,(this._flipY?-1:1)*(1/r))),s.rotate(t,t,i.toRadian(l)),s.translate(t,t,n.negate(n.create(),e));else{if(!t||2!==t.length)return n.clone(e);n.copy(t,e)}else l&&(t&&6===t.length||(t=s.create()),s.rotate(t,t,i.toRadian(l)));return t}},visible:{value:!0,set:function(t){this._get("visible")!==t&&(this._invalidateFlag(h.VISIBLE),this._set("visible",t))}}},requestRender:function(){var t=this.parent;this._renderFlag||(this._renderFlag=!0,t&&t.requestChildRender(this))},createSurface:function(){if(!this.surface){var t=document.createElement("div");t.className=this.className,this.surface=t}return this.surface},reflow:function(){},render:function(t){var e=this._flags;this._renderFlag=!1,this._flags=0,e&&(a.isSet(e,d.SIZE)&&t.setSize(this.width,this.height),a.isSet(e,d.VISIBLE)&&t.setVisibility(this.visible),a.isSet(e,d.BLENDMODE)&&t.setBlendMode(this.blendMode),a.isSet(e,d.OPACITY)&&t.setOpacity(this.opacity))},_invalidateFlag:function(t){this._flags=a.set(this._flags,t,!0),this.requestRender()}});return t.mixin(d,h),d});