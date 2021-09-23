/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Accessor","../../core/Collection","../../core/HandleOwner","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/Logger","../../core/accessorSupport/decorators/subclass","./Selector2D/SelectionOperation2D","./Selector2D/selectorUtils"],(function(e,o,t,r,n,s,i,c,l,a,p,u){"use strict";let d=function(o){function t(e){var t;return(t=o.call(this,e)||this)._defaultSelectionOptions={intersects:!0,overlaps:!0,contains:!0},t.candidates=null,t.options=null,t.view=null,t}e._inheritsLoose(t,o);var n=t.prototype;return n.draw=function(e){const{_defaultSelectionOptions:o,candidates:t,options:r,view:n}=this,s={...o,...r,...null==e?void 0:e.selectionOptions};return new p({candidates:t,options:{...e,selectionOptions:s},view:n})},n.selectionFrom=function(){var o=e._asyncToGenerator((function*(e,o){const{_defaultSelectionOptions:t,candidates:n,options:s,view:i}=this,c=new r,l={...t,...s,...o};return yield u.updateSelection({selector:e,candidates:n,currentSelection:c,options:l,view:i}),c.toArray()}));function t(e,t){return o.apply(this,arguments)}return t}(),t}(n.HandleOwnerMixin(t));return o.__decorate([s.property()],d.prototype,"candidates",void 0),o.__decorate([s.property()],d.prototype,"options",void 0),o.__decorate([s.property({value:null})],d.prototype,"view",void 0),d=o.__decorate([a.subclass("esri.widgets.support.Selector2D")],d),d}));
