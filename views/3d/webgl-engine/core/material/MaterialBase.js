/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers"],(function(t,e){"use strict";let r=function(){function t(){this._dirty=!0}var r=t.prototype;return r._setDirty=function(){this._dirty=!0},r._setClean=function(){if(this._dirty=!1,null!=this._parameterBlocks)for(const t of this._parameterBlocks)this[t]._setClean()},r._checkParameterBlocksDirty=function(){if(null==this._parameterBlocks)return!1;for(const t of this._parameterBlocks)if(this[t].dirty)return!0;return!1},e._createClass(t,[{key:"dirty",get:function(){return this._dirty||this._checkParameterBlocksDirty()}}]),t}(),i=function(){function t(){this._dirty=!0}var r=t.prototype;return r._setDirty=function(){this._dirty=!0},r._setClean=function(){this._dirty=!1},e._createClass(t,[{key:"dirty",get:function(){return this._dirty}}]),t}();function s(t={}){return(e,r)=>{var i;const s=null!=(i=e._parameterCount)?i:0;if(e._parameterCount=s+1,t.vectorOps){const i=t.vectorOps;Object.defineProperty(e,r,{get(){return this[s]},set(t){const e=this[s];if(null==e)this[s]=t;else{if(i.equals(e,t))return;i.copy(e,t)}this._setDirty()}})}else Object.defineProperty(e,r,{get(){return this[s]},set(e){this[s]!==e&&(t.dispose&&this[s]&&this[s].dispose(),this[s]=e,this._setDirty())}})}}function n(){return(t,e)=>{var r;const i=null!=(r=t._parameterCount)?r:0;t._parameterCount=i+1,t._parameterBlocks=t._parameterBlocks||[],t._parameterBlocks.push(i),Object.defineProperty(t,e,{get(){return this[i]},set(t){this[i]!==t&&(this[i]=t,this._setDirty())}})}}t.MaterialBase=r,t.MaterialParameterBlock=i,t.parameter=s,t.parameterBlock=n,Object.defineProperty(t,"__esModule",{value:!0})}));
