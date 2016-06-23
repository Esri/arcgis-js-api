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
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/json","dojo/has","dojo/dom-style","dojox/gfx/Moveable","dojox/gfx/Mover","dojox/gfx/matrix","../kernel","../geometry/webMercatorUtils","../geometry/ScreenPoint","../geometry/Point"],function(e,t,o,i,r,a,n,s,h,p,c,l,v){var g=e(null,{declaredClass:"esri.toolbars._GraphicMover",constructor:function(e,t,o,i){this.graphic=e,this.map=t,this.toolbar=o,this.tempPt=i,this._enableGraphicMover(),this._moved=!1},refresh:function(e){var t=this.graphic.getDojoShape();!t||!e&&t._hostGraphic||(this._disableGraphicMover(),this._enableGraphicMover())},destroy:function(){this._disableGraphicMover()},hasMoved:function(){return this._moved},_enableGraphicMover:function(){var e=this.graphic,t=e.getDojoShape();if(t){t._hostGraphic=e,this._moveable=new n(t,{mover:g.Mover}),this._moveStartHandle=o.connect(this._moveable,"onMoveStart",this,this._moveStartHandler),this._firstMoveHandle=o.connect(this._moveable,"onFirstMove",this,this._firstMoveHandler),this._movingHandle=o.connect(this._moveable,"onMoving",this,this._movingHandler),this._moveStopHandle=o.connect(this._moveable,"onMoveStop",this,this._moveStopHandler);var i=t.getEventSource();i&&a.set(i,"cursor",this.toolbar._cursors.move)}},_disableGraphicMover:function(){var e=this._moveable;if(e){o.disconnect(this._moveStartHandle),o.disconnect(this._firstMoveHandle),o.disconnect(this._movingHandle),o.disconnect(this._moveStopHandle);var t=e.shape;if(t){t._hostGraphic=null;var i=t.getEventSource();i&&a.set(i,"cursor",null)}e.destroy()}this._moveable=null},_moveStartHandler:function(){var e=this.graphic,t=this.map;this._startTx=e.getDojoShape().getTransform(),"point"===this.graphic.geometry.type&&t.snappingManager&&t.snappingManager._setUpSnapping(),this.toolbar.onGraphicMoveStart(e)},_firstMoveHandler:function(){this.toolbar._beginOperation("MOVE"),this.toolbar.onGraphicFirstMove(this.graphic)},_movingHandler:function(e){var t=e.shape.getTransform();this.tempPt&&this.tempPt.getDojoShape().setTransform(t),this.toolbar.onGraphicMove(this.graphic,t)},_moveStopHandler:function(e){var t=this.graphic,o=this.toolbar,r=this.map,a=h,n=o._geo?c.geographicToWebMercator(t.geometry):t.geometry,s=n.type,p=t.getDojoShape(),g=p.getTransform();if(i.toJson(g)!==i.toJson(this._startTx)){switch(this._moved=!0,s){case"point":var _,m=[g,a.invert(this._startTx)];r.snappingManager&&(_=r.snappingManager._snappingPoint),n=_||r.toMap(a.multiplyPoint(m,r.toScreen(n,!0))),r.snappingManager&&r.snappingManager._killOffSnapping();break;case"polyline":n=this._updatePolyGeometry(n,n.paths,g);break;case"polygon":n=this._updatePolyGeometry(n,n.rings,g)}p.setTransform(null),t.setGeometry(o._geo?c.webMercatorToGeographic(n,!0):n),this.tempPt&&this.tempPt.setGeometry(new v(t.geometry.toJson()))}else this._moved=!1;if(o._endOperation("MOVE"),o.onGraphicMoveStop(t,g),!this._moved){var d=e.__e,M=this.map.position,f=new l(d.pageX-M.x,d.pageY-M.y);o.onGraphicClick(t,{screenPoint:f,mapPoint:this.map.toMap(f)})}},_updatePolyGeometry:function(e,t,o){var i,r,a,n,s=this.map,h=e.getPoint(0,0),p=s.toMap(s.toScreen(h).offset(o.dx,o.dy)),c=p.x-h.x,l=p.y-h.y;for(i=0;i<t.length;i++)for(a=t[i],r=0;r<a.length;r++)n=e.getPoint(i,r),e.setPoint(i,r,n.offset(c,l));return e}});return g.Mover=e(s,{declaredClass:"esri.toolbars._Mover",constructor:function(e,t){this.__e=t}}),r("extend-esri")&&(t.setObject("toolbars._GraphicMover",g,p),t.setObject("toolbars._Mover",g.Mover,p)),g});