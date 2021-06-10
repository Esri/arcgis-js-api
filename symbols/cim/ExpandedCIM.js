/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../views/2d/engine/webgl/enums","../../views/2d/engine/webgl/materialKey/MaterialKey"],(function(e,t,r,n){"use strict";const a={marker:r.WGLGeometryType.MARKER,fill:r.WGLGeometryType.FILL,line:r.WGLGeometryType.LINE,text:r.WGLGeometryType.TEXT};let i=function(){function e(e,t,r,i){this.layers=e,this.data=t,this.hash=this._createHash(),this.rendererKey=r;for(const s of e){const e=a[s.type];s.materialKey=n.createMaterialKey(e,this.rendererKey,!1,!1),s.maxVVSize=i}}return e.prototype._createHash=function(){let e="";for(const t of this.layers)e+=t.templateHash;return e},t._createClass(e,[{key:"type",get:function(){return"expanded-cim"}}]),e}();e.ExpandedCIM=i,Object.defineProperty(e,"__esModule",{value:!0})}));
