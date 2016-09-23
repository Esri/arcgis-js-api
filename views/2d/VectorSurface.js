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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["../../core/declare","dojo/_base/array","../../core/Accessoire"],function(t,e,s){function i(){return"vector-surface-"+r++}var r=0,n=t(s,{constructor:function(t){this.id=i(),this.vectors=[],this.adding=[],this.removing=[],this.updating=[]},visible:!0,_visibleSetter:function(t,e){return t!==e&&(this._visibleChanged=!0,this.requestDraw()),t},requestDraw:function(){this._requestDrawFlag||(this._requestDrawFlag=!0,this.nestLevel&&this.stage.requestDraw(this))},requestUpdate:function(){this._requestUpdateFlag||(this._requestUpdateFlag=!0,this.nestLevel&&this.stage.requestUpdate(this))},requestVectorDraw:function(t){this.updating.push(t),this.requestDraw()},addVector:function(t){return this.addVectorAt(t,this.vectors.length)},addVectorAt:function(t,e){return e=Math.min(this.get("numChildren"),e),this.vectors.splice(e,0,t),t.set({parent:this,view:this.view}),this.adding.push(t),t},removeVector:function(t){if(!this.vectors)return t;var s=e.indexOf(this.vectors,t);return s>-1&&(t=this.vectors.splice(s,1)[0],t.set({parent:null,view:null})),t}});return n});