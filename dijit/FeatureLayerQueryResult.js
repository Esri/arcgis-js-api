define(["esri/main","dojo/_base/declare","dojo/Evented","dojo/_base/lang","dojo/_base/kernel","dojo/_base/Deferred","dojo/DeferredList","dojo/_base/array"],function(e,t,r,n,o,a){var u=function(t){function r(e){t[e]||(t[e]=function(){var r=arguments;return a.when(t,function(t){return Array.prototype.unshift.call(r,t.features||t),u(o[e].apply(o,r))})})}return t?(t.then&&(t=n.delegate(t)),t.total||(t.total=a.when(t,function(t){return e._isDefined(t.total)?t.total:t.length||0})),r("forEach"),r("filter"),r("map"),r("some"),r("every"),t):t};return n.setObject("dijit.FeatureLayerQueryResult",u),u});