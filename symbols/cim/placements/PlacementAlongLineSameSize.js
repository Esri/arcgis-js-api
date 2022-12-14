/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{PathTransformationCursor as t}from"../CIMCursor.js";import{PlacementEndings as e}from"../enums.js";import{GeometryWalker as s,DashPattern as i}from"../GeometryWalker.js";class n{static local(){return null===n.instance&&(n.instance=new n),n.instance}execute(t,e,s,i){return new a(t,e,s)}}n.instance=null;class a extends t{constructor(t,e,n){super(t,!0,!0),this._geometryWalker=new s,this._geometryWalker.updateTolerance(n),this._angleToLine=e.angleToLine??!0,this._offset=(e.offset?e.offset:0)*n,this._originalEndings=e.endings,this._offsetAtEnd=(e.customEndingOffset?e.customEndingOffset:0)*n,this._position=-(e.offsetAlongLine?e.offsetAlongLine:0)*n,this._pattern=new i,this._pattern.init(e.placementTemplate,!1),this._pattern.scale(n),this._endings=this._originalEndings}processPath(t){if(this._pattern.isEmpty())return null;let s;if(this.iteratePath)s=this._pattern.nextValue();else{this._originalEndings===e.WithFullGap&&this.isClosed?this._endings=e.WithMarkers:this._endings=this._originalEndings,this._pattern.extPtGap=0;let i,n=!0;switch(this._endings){case e.NoConstraint:i=-this._position,i=this._adjustPosition(i),n=!1;break;case e.WithHalfGap:default:i=-this._pattern.lastValue()/2;break;case e.WithFullGap:i=-this._pattern.lastValue(),this._pattern.extPtGap=this._pattern.lastValue();break;case e.WithMarkers:i=0;break;case e.Custom:i=-this._position,i=this._adjustPosition(i),this._pattern.extPtGap=.5*this._offsetAtEnd}if(!this._geometryWalker.init(t,this._pattern,n))return null;this._pattern.reset();let a=0;for(;i>a;)i-=a,a=this._pattern.nextValue();a-=i,s=a,this.iteratePath=!0}const i={};return this._geometryWalker.nextPointAndAngle(s,i)?this._endings===e.WithFullGap&&this._geometryWalker.isPathEnd()?(this.iteratePath=!1,null):this._endings===e.WithMarkers&&this._geometryWalker.isPathEnd()&&(this.iteratePath=!1,this.isClosed)?null:(this.internalPlacement.setTranslate(i.pt[0]-this._offset*i.sa,i.pt[1]+this._offset*i.ca),this._angleToLine&&this.internalPlacement.setRotateCS(i.ca,i.sa),this.internalPlacement):(this.iteratePath=!1,null)}_adjustPosition(t){let e=t/this._pattern.length();return e-=Math.floor(e),e*this._pattern.length()}}export{n as PlacementAlongLineSameSize};