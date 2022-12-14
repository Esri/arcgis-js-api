/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["require","exports","../chunks/_rollupPluginBabelHelpers","./maybe"],(function(e,r,n,t){"use strict";function u(e,r){return s.apply(this,arguments)}function s(){return(s=n._asyncToGenerator((function*(r,n){const{WhereClause:t}=yield new Promise(((r,n)=>e(["./sql/WhereClause"],r,n)));return t.create(r,n)}))).apply(this,arguments)}function i(e,r){return t.isSome(e)?t.isSome(r)?`(${e}) AND (${r})`:e:r}r.parseWhereClause=u,r.sqlAnd=i,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
