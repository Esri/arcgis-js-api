/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../../../../../core/Evented","../../../../../core/mathUtils","../../../../../chunks/vec3f64","../../../../../chunks/vec3","../../../../../core/Handles","../../../../../chunks/mat4","../../../../../core/colorUtils","../../../../../chunks/mat4f64","../../../webgl-engine/lib/GeometryUtil","../../../../interactive/dragEventPipeline","../dragEventPipeline3D","../../Manipulator3D","../../manipulatorUtils","../settings","./config","./Manipulation","./moveUtils"],(function(e,t,a,r,i,n,o,s,l,c,u,p,d,h,m,M,g,f,_,v){"use strict";let y=function(e){function _(t){var a;return(a=e.call(this)||this)._handles=new s,a._radius=f.DISC_RADIUS,a.events=new r,a._tool=t.tool,a._view=t.view,null!=t.radius&&(a._radius=t.radius),a.createManipulator(),a.forEachManipulator((e=>a._tool.manipulators.add(e))),a}t._inheritsLoose(_,e);var y=_.prototype;return y.destroy=function(){this._handles.destroy(),this.forEachManipulator((e=>{this._tool.manipulators.remove(e),e.destroy()}))},y.forEachManipulator=function(e){e(this._manipulator,0)},y.createGraphicDragPipeline=function(e,t,r){const i=a.unwrap(t.graphic.geometry).spatialReference;return v.createGraphicMoveDragPipeline(t,r,(t=>this.createDragPipeline(((a,r,i,n,o)=>t(a,e(a,r,i,n,o),i)),i)))},y.createDragPipeline=function(e,t){const a=this._view;return d.createManipulatorDragEventPipeline(this._manipulator,((r,i,n,o,s)=>{const l=i.next((e=>({...e,manipulatorType:0}))).next(h.screenToZConstrained(a,r.renderLocation,t)).next(d.addScreenDelta());e(r,l,n,o,s)}))},y.updateManipulator=function(){const e=this._radius/f.DISC_RADIUS,t=g.settings.zManipulator.height*e,a=g.settings.zManipulator.coneHeight*e,r=g.settings.zManipulator.coneWidth*e,i=g.settings.zManipulator.width*e,o=[n.fromValues(0,0,0),n.fromValues(0,0,t)],s=p.createTubeGeometry(o,i/2,16,!1),d=p.createConeGeometry(a,r/2,16,!1),h=[n.fromValues(0,0,0),n.fromValues(0,0,t+a)],m=(e=>{const a=u.create();if(l.translate(a,a,[0,0,t]),l.rotateX(a,a,Math.PI/2),e){const t=1+2*e/r;l.scale(a,a,[t,t,t])}return a})(0),_=(e,t)=>{const a=c.darken(g.settings.zManipulator.color,t);return[a.r/255,a.g/255,a.b/255,g.settings.zManipulator.color.a*e]},v=M.createManipulatorMaterial(_(1,.25),1),y=M.createManipulatorMaterial(_(1,0),1),w=M.createManipulatorMaterial(_(.7,0),g.settings.zManipulator.renderOccluded),D=M.createManipulatorMaterial(_(.85,0),g.settings.zManipulator.renderOccluded);this._manipulator.renderObjects=[{geometry:d,transform:m,material:v,stateMask:1},{geometry:s,material:v,stateMask:1},{geometry:d,transform:m,material:y,stateMask:2},{geometry:s,material:y,stateMask:2},{geometry:d,transform:m,material:w,stateMask:1},{geometry:s,material:w,stateMask:1},{geometry:d,transform:m,material:D,stateMask:2},{geometry:s,material:D,stateMask:2}],this._manipulator.radius=i/2+2,this._manipulator.collisionType={type:"line",paths:[h]}},y.createManipulator=function(){const e=new m.Manipulator3D({view:this._view,autoScaleRenderObjects:!1,worldSized:!1,selectable:!1,cursor:"ns-resize",elevationInfo:this.elevationInfo,worldOriented:!0,collisionPriority:1.6});e.applyObjectTransform=e=>{const t=this._view.state.camera,a=w;this._view.renderCoordsHelper.toRenderCoords(this._manipulator.elevationAlignedLocation,a);const r=o.dist(t.eye,a),n=t.computeRenderPixelSizeAtDist(r),s=o.subtract(D,a,t.eye);o.normalize(s,s);const l=k;this._view.renderCoordsHelper.worldUpAtPosition(w,l);const c=Math.abs(o.dot(s,l)),u=o.cross(D,s,l),p=o.cross(D,u,l),d=i.clamp(c,.01,1),h=1-Math.sqrt(1-d*d)/d/t.fullWidth,m=this._radius/f.DISC_RADIUS,M=g.settings.zManipulator.width*m;o.scale(p,o.normalize(p,p),(1/h-1)*r+n*M),e[12]-=D[0],e[13]-=D[1],e[14]-=D[2]},this._manipulator=e,this.updateManipulator()},t._createClass(_,[{key:"radius",get:function(){return this._radius},set:function(e){e!==this._radius&&(this._radius=e,this.updateManipulator())}}]),_}(_.Manipulation);const w=n.create(),D=n.create(),k=n.create();e.MoveZManipulation=y,Object.defineProperty(e,"__esModule",{value:!0})}));
