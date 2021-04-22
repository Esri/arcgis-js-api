/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/handleUtils","../../../geometry/Point","../../../geometry/Polyline","../../../geometry","../../../symbols/CIMSymbol","../../../core/screenUtils","../../../symbols/SimpleLineSymbol","../../../symbols/SimpleMarkerSymbol","../../../symbols","../../../Graphic","../../../chunks/vec3f64","../../../chunks/vec2f64","../../../chunks/vec2","../../draw/support/settings","../../interactive/snapping/Settings","../../interactive/snapping/SnappingVisualizer"],(function(e,t,n,i,r,o,a,l,s,c,p,y,m,u,b,d,g,S){"use strict";let h=function(e){function o(){return e.apply(this,arguments)||this}t._inheritsLoose(o,e);var a=o.prototype;return a.visualizeIntersectionPoint=function(e,t){return this._visualizeSnappingIndicator({geometry:new i({x:e.intersectionPoint[0],y:e.intersectionPoint[1],spatialReference:t.coordinateHelper.spatialReference}),symbol:P,context:t})},a.visualizePoint=function(e,t){return this._visualizeSnappingIndicator({geometry:new i({x:e.point[0],y:e.point[1],spatialReference:t.coordinateHelper.spatialReference}),symbol:f,context:t})},a.visualizeLine=function(e,t){return this._visualizeSnappingIndicator({geometry:new r({paths:[[e.lineStart,e.lineEnd]],spatialReference:t.coordinateHelper.spatialReference}),symbol:I,context:t})},a.visualizeParallelSign=function(e,t){return this._visualizeSnappingIndicator({geometry:new r({paths:[[e.lineStart,e.lineEnd]],spatialReference:t.coordinateHelper.spatialReference}),symbol:v,context:t})},a.visualizeRightAngleQuad=function(e,t){return this._visualizeSnappingIndicator({geometry:new r({paths:[[e.previousVertex,e.centerVertex,e.nextVertex]],spatialReference:t.coordinateHelper.spatialReference}),symbol:L(e),context:t})},a._visualizeSnappingIndicator=function(e){const{geometry:t,symbol:i,context:r}=e,o=new y({geometry:t,symbol:i});return r.view.graphics.add(o),n.makeHandle((()=>{r.view.graphics.remove(o)}))},o}(S.SnappingVisualizer);const M=d.colors.main.toArray(),x=[...d.colors.main.toRgb(),100],P=new c({outline:new s({width:1.5,color:M}),size:15,color:[0,0,0,0]}),f=new c({outline:{width:.5,color:[0,0,0,1]},size:10,color:M}),I=new a({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:l.px2pt(g.defaults.lineHintWidthTarget),color:M}]}}}),v=new a({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:-1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,1.5],[7,1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:M}]}}],scaleSymbolsProportionally:!0,respectFrame:!0},{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,-1.5],[7,-1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:M}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}}),z=e=>new a({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:.5,y:.5,z:0},anchorPointUnits:"Relative",size:l.px2pt(g.defaults.rightAngleHintSize),rotation:e,markerPlacement:{type:"CIMMarkerPlacementOnVertices",placePerPart:!0,angleToLine:!0,placeOnEndPoints:!1},frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[5,-5],[-5,-5],[-5,5],[5,5],[5,-5]]]},symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:l.px2pt(g.defaults.rightAngleHintOutlineSize),color:M},{type:"CIMSolidFill",enable:!0,color:x}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}}),C=z(45),k=z(225),L=(()=>{const e=u.create(),t=u.create(),n=m.create();return i=>(b.subtract(e,i.centerVertex,i.previousVertex),b.subtract(t,i.nextVertex,i.previousVertex),b.cross(n,e,t),n[2]<0?C:k)})();e.SnappingVisualizer2D=h,Object.defineProperty(e,"__esModule",{value:!0})}));
