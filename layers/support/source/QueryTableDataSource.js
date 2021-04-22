/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/enumeration","../../../core/accessorSupport/decorators/subclass","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../../../core/JSONSupport","../../../geometry/SpatialReference","../../../geometry/support/typeUtils","../../../geometry"],(function(e,r,o,t,a,p,u,c,s,y,i,n,l,d,S,b){"use strict";var _;e.QueryTableDataSource=_=function(e){function o(r){var o;return(o=e.call(this,r)||this).type="query-table",o}return r._inheritsLoose(o,e),o.prototype.clone=function(){var e;const{workspaceId:r,query:o,oidFields:t,spatialReference:a,geometryType:p}=this,u={workspaceId:r,query:o,oidFields:t,spatialReference:null!=(e=null==a?void 0:a.clone())?e:void 0,geometryType:p};return new _(u)},o}(l.JSONSupport),o.__decorate([c.enumeration({queryTable:"query-table"})],e.QueryTableDataSource.prototype,"type",void 0),o.__decorate([u.property({type:String,json:{write:!0}})],e.QueryTableDataSource.prototype,"workspaceId",void 0),o.__decorate([u.property({type:String,json:{write:!0}})],e.QueryTableDataSource.prototype,"query",void 0),o.__decorate([u.property({type:String,json:{write:!0}})],e.QueryTableDataSource.prototype,"oidFields",void 0),o.__decorate([u.property({type:d,json:{write:!0}})],e.QueryTableDataSource.prototype,"spatialReference",void 0),o.__decorate([c.enumeration(S.featureGeometryTypeKebabDictionary)],e.QueryTableDataSource.prototype,"geometryType",void 0),e.QueryTableDataSource=_=o.__decorate([s.subclass("esri.layers.support.source.QueryTableDataSource")],e.QueryTableDataSource),Object.defineProperty(e,"__esModule",{value:!0})}));
