// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/json","dojo/dom-style","dojox/gfx/Moveable","dojox/gfx/Mover","dojox/gfx/matrix","../kernel","../PointerEvents","../sniff","../geometry/webMercatorUtils","../geometry/ScreenPoint","../geometry/Point"],function(e,t,o,n,i,r,a,s,h,p,c,l,v,g){var _=e(null,{declaredClass:"esri.toolbars._GraphicMover",constructor:function(e,t,o,n){this.graphic=e,this.map=t,this.toolbar=o,this.tempPt=n,this._enableGraphicMover(),this._moved=!1},refresh:function(e){var t=this.graphic.getDojoShape();!t||!e&&t._hostGraphic||(this._disableGraphicMover(),this._enableGraphicMover())},destroy:function(){this._disableGraphicMover()},hasMoved:function(){return this._moved},_enableGraphicMover:function(){var e=this.graphic,t=e.getDojoShape();if(t){t._hostGraphic=e,this._moveable=new r(t,{mover:_.Mover}),this._moveStartHandle=o.connect(this._moveable,"onMoveStart",this,this._moveStartHandler),this._firstMoveHandle=o.connect(this._moveable,"onFirstMove",this,this._firstMoveHandler),this._movingHandle=o.connect(this._moveable,"onMoving",this,this._movingHandler),this._moveStopHandle=o.connect(this._moveable,"onMoveStop",this,this._moveStopHandler);var n=t.getEventSource();n&&i.set(n,"cursor",this.toolbar._cursors.move)}},_disableGraphicMover:function(){var e=this._moveable;if(e){o.disconnect(this._moveStartHandle),o.disconnect(this._firstMoveHandle),o.disconnect(this._movingHandle),o.disconnect(this._moveStopHandle);var t=e.shape;if(t){t._hostGraphic=null;var n=t.getEventSource();n&&i.set(n,"cursor",null)}e.destroy()}this._moveable=null},_moveStartHandler:function(){var e=this.graphic,t=this.map;this._startTx=e.getDojoShape().getTransform(),"point"===this.graphic.geometry.type&&t.snappingManager&&t.snappingManager._setUpSnapping(),this.toolbar.onGraphicMoveStart(e)},_firstMoveHandler:function(){this.toolbar._beginOperation("MOVE"),this.toolbar.onGraphicFirstMove(this.graphic)},_movingHandler:function(e,t,o){var n,i=e.shape.getTransform(),r=this.map;c("esri-pointer")?n=r.navigationManager.pointerEvents._processTouchEvent(o,o):o&&"pointermove"===o.type&&(n=p.prototype._processTouchEvent.call({map:r},o,o)),n&&r.snappingManager&&r.snappingManager._onSnappingMouseMoveHandler(n),this.tempPt&&this.tempPt.getDojoShape().setTransform(i),this.toolbar.onGraphicMove(this.graphic,i)},_moveStopHandler:function(e){var t=this.graphic,o=this.toolbar,i=this.map,r=s,a=o._geo?l.geographicToWebMercator(t.geometry):t.geometry,h=a.type,p=t.getDojoShape(),c=p.getTransform();if(n.toJson(c)!==n.toJson(this._startTx)){switch(this._moved=!0,h){case"point":var _,m=[c,r.invert(this._startTx)];i.snappingManager&&(_=i.snappingManager._snappingPoint),a=_||i.toMap(r.multiplyPoint(m,i.toScreen(a,!0))),i.snappingManager&&i.snappingManager._killOffSnapping();break;case"polyline":a=this._updatePolyGeometry(a,a.paths,c);break;case"polygon":a=this._updatePolyGeometry(a,a.rings,c)}p.setTransform(null),t.setGeometry(o._geo?l.webMercatorToGeographic(a,!0):a),this.tempPt&&this.tempPt.setGeometry(new g(t.geometry.toJson()))}else this._moved=!1;if(o._endOperation("MOVE"),o.onGraphicMoveStop(t,c),!this._moved){var d=e.__e,M=this.map.position,f=new v(d.pageX-M.x,d.pageY-M.y);o.onGraphicClick(t,{screenPoint:f,mapPoint:this.map.toMap(f)})}},_updatePolyGeometry:function(e,t,o){var n,i,r,a,s=this.map,h=e.getPoint(0,0),p=s.toMap(s.toScreen(h).offset(o.dx,o.dy)),c=p.x-h.x,l=p.y-h.y;for(n=0;n<t.length;n++)for(r=t[n],i=0;i<r.length;i++)a=e.getPoint(n,i),e.setPoint(n,i,a.offset(c,l));return e}});return _.Mover=e(a,{declaredClass:"esri.toolbars._Mover",constructor:function(e,t,o){this.__e=t}}),c("extend-esri")&&(t.setObject("toolbars._GraphicMover",_,h),t.setObject("toolbars._Mover",_.Mover,h)),_});