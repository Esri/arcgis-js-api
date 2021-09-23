/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Collection","../../core/collectionUtils","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","./VoxelSimpleShading","./VoxelVariableStyle","./VoxelVolumeStyle"],(function(e,o,t,r,s,l,p,n,a,i,c,y,u){"use strict";let d=function(o){function s(e){var r;return(r=o.call(this,e)||this).currentVariableId=-1,r.renderMode="volume",r.enableSlices=!0,r.enableSections=!0,r.enableDynamicSections=!0,r.enableIsosurfaces=!0,r.shading=null,r.volumeStyles=new t,r.variableStyles=new t,r}return e._inheritsLoose(s,o),e._createClass(s,[{key:"volumeStyles",set:function(e){this._set("volumeStyles",r.referenceSetter(e,this._get("volumeStyles"),t.ofType(u)))}},{key:"variableStyles",set:function(e){this._set("variableStyles",r.referenceSetter(e,this._get("variableStyles"),t.ofType(y)))}}]),s}(s.JSONSupport);return o.__decorate([l.property({type:t.ofType(u),json:{write:!0}})],d.prototype,"volumeStyles",null),o.__decorate([l.property({type:n.Integer,json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"currentVariableId",void 0),o.__decorate([l.property({type:["volume","surfaces"],json:{write:!0}})],d.prototype,"renderMode",void 0),o.__decorate([l.property({type:t.ofType(y),json:{write:!0}})],d.prototype,"variableStyles",null),o.__decorate([l.property({type:Boolean,json:{write:!0}})],d.prototype,"enableSlices",void 0),o.__decorate([l.property({type:Boolean,json:{write:!0}})],d.prototype,"enableSections",void 0),o.__decorate([l.property({type:Boolean,json:{write:!0}})],d.prototype,"enableDynamicSections",void 0),o.__decorate([l.property({type:Boolean,json:{write:!0}})],d.prototype,"enableIsosurfaces",void 0),o.__decorate([l.property({type:c,json:{write:!0}})],d.prototype,"shading",void 0),d=o.__decorate([i.subclass("esri.layers.support.VoxelStyle")],d),d}));
