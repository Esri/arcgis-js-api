// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../geometry/support/jsonUtils","../CurveHelper","../GeometryWalker"],(function(t,e,i,r,h){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EffectWave=void 0;var a=function(){function t(){}return t.local=function(){return null===t.instance&&(t.instance=new t),t.instance},t.prototype.execute=function(t,e,i){return new n(t,e,i)},t.instance=null,t}();e.EffectWave=a;var n=function(){function t(t,e,i){this._inputGeometries=t,this._height=(void 0!==e.amplitude?e.amplitude:2)*i,this._period=(void 0!==e.period?e.period:3)*i,this._style=e.waveform,this._height<=0&&(this._height=Math.abs(this._height)),this._period<=0&&(this._period=Math.abs(this._period)),this._pattern=new h.DashPattern,this._pattern.addValue(this._period),this._pattern.addValue(this._period),this._walker=new h.GeometryWalker,this._walker.updateTolerance(i)}return t.prototype.next=function(){for(var t=this._inputGeometries.next();t;){if(0===this._height||0===this._period)return t;if(i.isPolyline(t)){var e=this._processGeom(t.paths);if(e.length)return{paths:e}}if(i.isPolygon(t)){var r=this._processGeom(t.rings);if(r.length)return{rings:r}}t=this._inputGeometries.next()}return null},t.prototype._processGeom=function(t){for(var e=[],i=0,r=t;i<r.length;i++){var h=r[i];if(this._walker.init(h,this._pattern))switch(this._style){case"Sinus":default:e.push(this._constructCurve(h,!1));break;case"Square":e.push(this._constructSquare(h));break;case"Triangle":e.push(this._constructTriangle(h));break;case"Random":e.push(this._constructCurve(h,!0))}else e.push(h)}return e},t.prototype._constructCurve=function(t,e){var i=new r.PathHelper,h=this._walker.calculatePathLength(t),a=Math.round(h/this._period);0===a&&(a=1);var n=16*a+1,s=h/a,o=this._period/16,l=1/n,p=2*Math.PI*h/s,_=2*Math.PI*Math.random(),u=2*Math.PI*Math.random(),c=2*Math.PI*Math.random(),d=.75-Math.random()/2,g=.75-Math.random()/2,f={};this._walker.curPointAndAngle(f),i.startPath(f.pt);for(var v=0;;){if(!this._walker.nextPointAndAngle(o,f)){i.lineTo(t[t.length-1]);break}var P=v;v+=l;var w=void 0;if(e){var k=this._height/2*(1+.3*Math.sin(d*p*P+_));w=k*Math.sin(p*P+u),w+=k*Math.sin(g*p*P+c),w/=2}else w=.5*this._height*Math.sin(.5*p*P);i.lineTo([f.pt[0]-w*f.sa,f.pt[1]+w*f.ca])}return i.path()},t.prototype._constructSquare=function(t){var e=new r.PathHelper,i=this._walker.calculatePathLength(t),h=Math.round(i/this._period);0===h&&(h=1);for(var a=!0;;){var n=!1;if(this._walker.curPositionIsValid()){var s={};this._walker.curPointAndAngle(s);var o={};if(this._walker.nextPointAndAngle(this._period,o)){var l={};this._walker.nextPointAndAngle(this._period,l)&&(a?(e.startPath(s.pt),a=!1):e.lineTo(s.pt),e.lineTo([s.pt[0]-this._height/2*s.sa,s.pt[1]+this._height/2*s.ca]),e.lineTo([o.pt[0]-this._height/2*o.sa,o.pt[1]+this._height/2*o.ca]),e.lineTo([o.pt[0]+this._height/2*o.sa,o.pt[1]-this._height/2*o.ca]),e.lineTo([l.pt[0]+this._height/2*l.sa,l.pt[1]-this._height/2*l.ca]),n=!0)}}if(!n){e.lineTo(this._walker.getPathEnd());break}}return e.path()},t.prototype._constructTriangle=function(t){var e=new r.PathHelper,i=this._walker.calculatePathLength(t),h=Math.round(i/this._period);0===h&&(h=1);for(var a=!0;;){var n=!1;if(this._walker.curPositionIsValid()){var s={};this._walker.curPointAndAngle(s);var o={};if(this._walker.nextPointAndAngle(this._period/2,o)){var l={};this._walker.nextPointAndAngle(this._period,l)&&(this._walker.nextPosition(this._period/2)&&(a?(e.startPath(s.pt),a=!1):e.lineTo(s.pt),e.lineTo([o.pt[0]-this._height/2*o.sa,o.pt[1]+this._height/2*o.ca]),e.lineTo([l.pt[0]+this._height/2*l.sa,l.pt[1]-this._height/2*l.ca])),n=!0)}}if(!n){e.lineTo(this._walker.getPathEnd());break}}return e.path()},t}()}));