/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/vec3","../../../../../chunks/vec3f32","../../../../../chunks/vec3f64"],(function(t,e,n,i,s){"use strict";let o=function(){function t(t){this._low=i.create(),this._high=i.create(),t&&this.set(t)}var s=t.prototype;return s.set=function(t){const e=this._low,i=this._high;n.copy(e,t),n.sub(i,t,e)},s.setElements=function(t,e,i){n.set(c,t,e,i),this.set(c)},s.get=function(t){return n.add(t,this._low,this._high)},s.getLowScaled=function(t){return n.scale(t,this._low,1)},e._createClass(t,[{key:"low",get:function(){return this._low}},{key:"high",get:function(){return this._high}}]),t}();const c=s.create();t.TwoVectorPosition=o,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
