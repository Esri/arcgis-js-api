// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

/**
 * The Legend widget displays labels and symbols for layers in a map.
 * Labels and their corresponding symbols depend on the values set in the
 * {@link module:esri/renderers/Renderer} of the layer.
 * The legend will only display layers and sublayers that are
 * visible in the view.
 *
 * The legend automatically updates when
 *  - the visibility of a layer or sublayer changes
 *  - a layer is added or removed from the map
 *  - a layer's `renderer`, `opacity`, or `title` is changed
 *  - the `legendEnabled` property is set to `false` on the layer
 *
 * [![widgets-legend-basic](../assets/img/apiref/widgets/widgets-legend-basic.png)](../sample-code/sandbox/sandbox.html?sample=widgets-legend)
 *
 * You can use the view's {@link module:esri/views/ui/DefaultUI} to add widgets
 * to the view's user interface via the {@link module:esri/views/View#ui ui} property on the view.
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 *
 * * Legend exclusively supports the following layers: {@link module:esri/layers/FeatureLayer},
 * {@link module:esri/layers/StreamLayer}, {@link module:esri/layers/SceneLayer},
 * {@link module:esri/layers/MapImageLayer}, {@link module:esri/layers/TileLayer}
 * * {@link module:esri/symbols/Symbol3D  3D symbols} with more than one
 * {@link module:esri/symbols/Symbol3DLayer symbol layer} are not supported.
 * * Size in volumetric {@link module:esri/symbols/Symbol3D  3D symbols}, such as
 * polygon extrusion, is not depicted by Legend.
 * :::
 *
 * @example
 * var legend = new Legend({
 *   view: view,
 *   layerInfos: [{
 *     layer: featureLayer,
 *     title: "Legend"
 *   }]
 * });
 *
 * view.ui.add(legend, "bottom-right");
 *
 * @module esri/widgets/Legend
 * @since 4.0
 *
 * @see [Sample - Legend widget](../sample-code/widgets-legend/index.html)
 * @see [Legend.js (widget view)]({{ JSAPI_BOWER_URL }}/widgets/Legend.js)
 * @see [Legend.scss]({{ JSAPI_BOWER_URL }}/themes/base/widgets/_Legend.scss)
 * @see {@link module:esri/views/View#ui View.ui}
 * @see module:esri/views/ui/DefaultUI
 */

define([
  "./support/viewModelWiring",

  "./Widgette",

  "./Legend/LegendViewModel",
  "./Legend/support/swatchUtils",

  "../core/watchUtils",
  "../core/HandleRegistry",
  "../core/lang",
  "../core/screenUtils",

  "dojox/gfx",
  "dojox/gfx/matrix",

  "dojo/_base/lang",

  "dojo/dom-construct",
  "dojo/dom-style",
  "dojo/dom-class",

  "dojo/i18n!./Legend/nls/Legend"
], function(
  viewModelWiring,
  Widget,
  LegendViewModel, swatchUtils,
  watchUtils, HandleRegistry, esriLang, screenUtils,
  gfx, gfxMatrix,
  lang,
  domConstruct, domStyle, domClass,
  i18n
) {

  var DEFAULT_TEXT = "Aa",

      GRADIENT_WIDTH = 24,
      GRADIENT_HEIGHT = 25,

      RAMP_HEIGHT = 50,

      CSS = {
        base: "esri-legend",
        service: "esri-legend__service",
        label: "esri-legend__service-label",
        layer: "esri-legend__layer",
        layerTable: "esri-legend__layer-table",
        layerChildTable: "esri-legend__layer-child-table",
        layerCaption: "esri-legend__layer-caption",
        layerBody: "esri-legend__layer-body",
        layerRow: "esri-legend__layer-row",
        layerCell: "esri-legend__layer-cell",
        layerInfo: "esri-legend__layer-cell esri-legend__layer-cell--info",
        symbolContainer: "esri-legend__layer-cell esri-legend__layer-cell--symbols",
        symbol: "esri-legend__symbol",
        rampContainer: "esri-legend__ramps",
        sizeRamp: "esri-legend__size-ramp",
        colorRamp: "esri-legend__color-ramp",
        opacityRamp: "esri-legend__opacity-ramp",
        borderlessRamp: "esri-legend__borderless-ramp",
        rampTick: "esri-legend__ramp-tick",
        rampFirstTick: "esri-legend__ramp-tick-first",
        rampLastTick: "esri-legend__ramp-tick-last",
        rampLabelsContainer: "esri-legend__ramp-labels",
        rampLabel: "esri-legend__ramp-label",
        message: "esri-legend__message",

        // common
        hidden: "esri-hidden"
      };

  /**
   * @extends module:esri/core/Accessor
   * @mixes module:esri/widgets/Widgette
   * @constructor module:esri/widgets/Legend
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   *
   * @example
   * // typical usage
   * var legend = new Legend({
   *   view: view
   * });
   */

  var Legend = Widget.createSubclass(
    /**
     * @lends: module:esri/widgets/Legend.prototype
     */
    {

      declaredClass: "esri.widgets.Legend",

      baseClass: CSS.base,

      //--------------------------------------------------------------------------
      //
      //  Lifecycle
      //
      //--------------------------------------------------------------------------

      constructor: function() {
        this._handles = new HandleRegistry();
        this._DOMByLayerId = {};
      },

      postCreate: function () {
        this.inherited(arguments);
        this._createLegend();
      },

      destroy: function () {
        this._handles.destroy();
        this._handles = null;
      },

      //--------------------------------------------------------------------------
      //
      //  Properties
      //
      //--------------------------------------------------------------------------

      properties: /** @lends: module:esri/widgets/Legend.prototype */ {

        //----------------------------------
        //  activeLayerInfos
        //----------------------------------

        /**
         * Collection of {@link module:esri/widgets/Legend/support/ActiveLayerInfo} objects used by the legend view to
         * display data in the legend. The legend widget watches this property to hide or display the layer legend when
         * an {@link module:esri/widgets/Legend/support/ActiveLayerInfo} is removed from or added to this collection.
         *
         * @name activeLayerInfos
         * @instance
         *
         * @type {module:esri/core/Collection}
         * @autocast
         * @ignore
         */
        activeLayerInfos: {
          aliasOf: "viewModel.activeLayerInfos"
        },

        //----------------------------------
        //  layerInfos
        //----------------------------------

        /**
         * Specifies a subset of the layers to display in the legend.
         * If this property is not set, all layers in the map will display in the legend.
         * Objects in this array are defined with the properties listed below.
         *
         * @name layerInfos
         * @instance
         *
         * @type {object[]}
         *
         * @property {string} title - Specifies a title for the layer to display above its symbols and descriptions.
         * If no title is specified the service name is used.
         * @property {module:esri/layers/Layer} layer - A layer to display in the legend.
         * @todo @property {boolean} defaultSymbol - When `false`, the default symbol for the renderer will
         * not display in the legend. The default value is `true`. Only applicable to
         * {@link module:esri/layers/FeatureLayer}.
         * @todo @property {number[]} hideLayers -  List of sublayer ids that will not be displayed in the legend
         *                                    even if they are visible in the map.
         */
        layerInfos: {
          aliasOf: "viewModel.layerInfos"
        },

        //----------------------------------
        //  basemapLegendVisible
        //----------------------------------

        /**
         * boolean that tells to show the basemaps or not in the legend
         *
         * @type {boolean}
         */
        basemapLegendVisible: {
          aliasOf: "viewModel.basemapLegendVisible"
        },

        //----------------------------------
        //  groundLegendVisible
        //----------------------------------

        /**
         * boolean that tells to show the ground layers or not in the legend
         *
         * @type {boolean}
         */
        groundLegendVisible: {
          aliasOf: "viewModel.groundLegendVisible"
        },

        //----------------------------------
        //  view
        //----------------------------------

        /**
         * A reference to the {@link module:esri/views/MapView} or {@link module:esri/views/SceneView}. Set this to link the widget to a specific view.
         *
         * @name view
         * @instance
         *
         * @type {(module:esri/views/SceneView|module:esri/views/MapView)}
         */
        view: {
          aliasOf: "viewModel.view"
        },

        //----------------------------------
        //  viewModel
        //----------------------------------

        /**
         * The view model for this widget. This is a class that contains all the logic
         * (properties and methods) that controls this widget's behavior. See the
         * {@link module:esri/widgets/Legend/LegendViewModel} class to access
         * all properties and methods on the widget.
         *
         * @name viewModel
         * @instance
         * @ignore
         *
         * @type {module:esri/widgets/Legend/LegendViewModel}
         * @autocast
         */
        viewModel: {
          type: LegendViewModel
        }

      },

      //--------------------------------------------------------------------------
      //
      //  Private Methods
      //
      //--------------------------------------------------------------------------

      _createLegend: function() {
        var legendDOM = this._buildLegendDOM(),
          activeLayerInfos = this.activeLayerInfos;

        // Create legend for each layerInfo if there is atleast one, else display message
        if (activeLayerInfos.length) {
          activeLayerInfos.forEach(function (activeLayerInfo) {
            this._createLegendForLayer(activeLayerInfo, legendDOM);
          }, this);
        }

        // when activeLayerInfos change:
        // activeLayerInfo removed => get layer legend DOM and hide it
        // activeLayerInfo added => get layer legend DOM, if exists, display otherwise create
        var handle = activeLayerInfos.on("change", function (evt) {
          var layerDOM,
            added = evt.added,
            removed = evt.removed;

          removed.forEach(function (obj) {
            layerDOM = this._DOMByLayerId[obj.layer.uid];
            if (layerDOM) {
              this._setVisible(layerDOM, false);
            }
          }, this);

          added.forEach(function (obj) {
            layerDOM = this._DOMByLayerId[obj.layer.uid];
            if (layerDOM) {
              this._setVisible(layerDOM, true);
            }
            else {
              this._createLegendForLayer(obj, legendDOM);
            }
          }, this);

          this._sortDOMNodes(legendDOM);

        }.bind(this));

        this._handles.add(handle, "activeLayerInfos-change");
      },

      _hasVisibleDOMNodes: function () {
        var DOMNodes = this._DOMByLayerId,
          visible = false;

        for (var layerId in DOMNodes) {
          var domNode = DOMNodes[layerId];
          if (!domClass.contains(domNode, CSS.hidden)) {
            visible = true;
            break;
          }
        }

        return visible;
      },

      _isActiveLayerInfosReady: function (activeLayerInfos) {
        if (
          !activeLayerInfos.length ||
          (activeLayerInfos.length === 1 && activeLayerInfos.getItemAt(0).updating && !this._hasVisibleDOMNodes())
        ) {
          return false;
        }
        return activeLayerInfos.some(function (activeLayerInfo) {
          return activeLayerInfo.ready || activeLayerInfo.updating;
        });
      },

      _sortDOMNodes: function (legendDOM) {
        var activeLayerInfos = this.activeLayerInfos,
          legendNode = this.domNode,
          childNodes = legendNode.childNodes,
          elems = [], sortedElems,
          layersIndex = {},
          domPrefix = this.id + "_",
          isActiveLayerInfosReady = this._isActiveLayerInfosReady(activeLayerInfos);

        this._setVisible(legendDOM.message, !isActiveLayerInfosReady);

        for (var i = 0; i < childNodes.length; ++i) {
          var el = childNodes[i];
          if ((el.id && el.id.indexOf(domPrefix) > -1) && !domClass.contains(el, CSS.hidden)) {
            elems.push( el );
          }
        }

        activeLayerInfos.forEach(function (activeLayerInfo, index) {
          layersIndex[activeLayerInfo.layer.uid] = index;
        });

        sortedElems = elems.sort(function (elm1, elm2) {
          var elm1Idx = layersIndex[elm1.id.split(domPrefix)[1]] || 0,
            elm2Idx = layersIndex[elm2.id.split(domPrefix)[1]] || 0;

          return elm1Idx - elm2Idx;
        });

        for (i = 0; i < sortedElems.length; ++i) {
          legendNode.appendChild(sortedElems[i]);
        }
      },

      _buildLegendDOM: function () {
        var widgetNode = this.domNode;

        var msgNode = domConstruct.create("div", {
          id: this.id + "_msg",
          className: CSS.message,
          textContent: i18n.noLegend
        }, widgetNode);

        return {
          widget: widgetNode,
          message: msgNode
        };
      },

      _createLegendForLayer: function(activeLayerInfo, legendDOM) {

        // watch for the activeLayerInfo's version change and
        // when activeLayerInfo is ready build DOM for the layer
        // and create legend elements for the layer
        // and if the layer has atleast one legend element then display layer legend DOM
        // When activeLayerInfo ready is false, remove dictionary data and destroy its DOM but handlers are not removed
        var infoReadyHandle = watchUtils.init(activeLayerInfo, "version", function () {
          var layerId = activeLayerInfo.layer.uid,
            layerDOM = this._DOMByLayerId[layerId];

          if (layerDOM && !activeLayerInfo.updating) {
            delete this._DOMByLayerId[layerId];
            domConstruct.destroy(layerDOM);
          }

          if (activeLayerInfo.ready) {
            layerDOM = this._buildLegendDOMForLayer(activeLayerInfo, legendDOM);
            this._DOMByLayerId[layerId] = layerDOM.root;

            var legendElements = this._createLegendElements(activeLayerInfo, layerDOM.layer);

            var visible = (legendElements.length && this.activeLayerInfos.indexOf(activeLayerInfo) !== -1);
            this._setVisible(layerDOM.root, visible);
          }

          this._sortDOMNodes(legendDOM);
        }.bind(this));

        // When activeLayerInfo destroy is true, remove dictionary data, handlers and destroy its DOM
        var infoDestroyHandle = watchUtils.init(activeLayerInfo, "tearingDown", function (newValue) {
          var layerId = activeLayerInfo.layer.uid,
            layerDOM;

          if (newValue) {
            layerDOM = this._DOMByLayerId[layerId];

            if (layerDOM) {
              this._handles.remove(layerId);
              delete this._DOMByLayerId[layerId];
              domConstruct.destroy(layerDOM);
            }
          }
        }.bind(this));

        this._handles.add([infoReadyHandle, infoDestroyHandle], activeLayerInfo.layer.uid);
      },

      _buildLegendDOMForLayer: function (activeLayerInfo, legendDOM) {
        // create root node for the layer
        var rootID = legendDOM.widget.id + "_" + activeLayerInfo.layer.uid;
        var rootNode = domConstruct.create("div", {
          id: rootID,
          className: CSS.service + " " + CSS.hidden
        }, legendDOM.widget);

        // add layer title to root node of the layer
        var titleNode = domConstruct.create("p", {
          textContent: activeLayerInfo.title,
          className: CSS.label
        }, rootNode);

        // add layer data to root node
        var layerNode = domConstruct.create("div", {
          className: CSS.layer
        }, rootNode);

        return lang.mixin(legendDOM, {
          root: rootNode,
          title: titleNode,
          layer: layerNode
        });
      },

      _createLegendElements: function(activeLayerInfo, layerNode) {
        var legendElements = activeLayerInfo.legendElements,
          layer = activeLayerInfo.layer;

        legendElements.forEach(function(legendElement) {
          this._createLegendElement(legendElement, layerNode, layer);
        }, this);

        return legendElements;
      },

      _createLegendElement: function(legendElement, layerNode, layer, isChild) {
        var isColorRamp = legendElement.type === "color-ramp",
          isOpacityRamp = legendElement.type === "opacity-ramp",
          isSizeRamp = legendElement.type === "size-ramp",
          elemDOM = this._buildDOMForElement(layerNode, legendElement.title, isColorRamp || isOpacityRamp, isChild);

        // build symbol table or size ramp
        if (legendElement.type === "symbol-table" || isSizeRamp) {
          legendElement.infos.forEach(function (info) {
            if (info.type) {
              this._createLegendElement(info, elemDOM.body, layer, true);
            }
            else {
              this._buildDOMForElementInfo(info, elemDOM, layer, isSizeRamp);
            }
          }, this);
        }
        // build ramp
        else if (isColorRamp || isOpacityRamp) {
          this._buildRampDOM(legendElement.infos, elemDOM.body, legendElement.overlayColor, isOpacityRamp);
        }
      },

      _buildDOMForElement: function (node, titleObj, isRamp, isChild) {
        var title = titleObj;

        if (typeof title !== "string" && title) {
          var genTitle = this._getTitle(title, isRamp);
          if (title.title) {
            title = title.title + " (" + genTitle + ")";
          }
          else {
            title = genTitle;
          }
        }

        // table node
        var tableNode = domConstruct.create("div", {
          className: isChild ? CSS.layerChildTable : CSS.layerTable
        }, node);

        // caption node
        var captionNode = title ? domConstruct.create("div", {
          className: CSS.layerCaption,
          textContent: title
        }, tableNode) :
          null;

        // body node
        var bodyNode = domConstruct.create("div", {
          className: CSS.layerBody
        }, tableNode);

        return {
          layer: node,
          table: tableNode,
          caption: captionNode,
          body: bodyNode
        };
      },

      _buildDOMForElementInfo: function(info, elemDOM, layer, isSizeRamp) {
        // append row node to table body node
        var rowNode = domConstruct.create("div", {
          className: CSS.layerRow
        }, elemDOM.body);

        // symbol node
        var symNode = domConstruct.create("div", {
          className: isSizeRamp ? CSS.symbolContainer + " " + CSS.sizeRamp : CSS.symbolContainer
        }, rowNode);

        // draw symbol
        var symDrawn = info.symbol ?
          this._drawSymbol(symNode, info, layer) :
          this._drawImage(symNode, info, layer);

        if (symDrawn) {
          domClass.add(symNode.firstChild, CSS.symbol);

          // label node
          var labelCellNode = domConstruct.create("div", {
            className: CSS.layerInfo
          }, rowNode);
          labelCellNode.textContent = info.label || "";
        }
        else {
          domConstruct.destroy(elemDOM.table);
        }
      },

      _drawImage: function (symNode, info, layer) {
        var src = info.src,
          opacity = info.opacity,
          width = info.width,
          height = info.height;

        if (!src) {
          return false;
        }

        var node =  domConstruct.create("img", {
          src: src,
          border: 0
        }, symNode);

        if (width != null && height != null) {
          node.width = width;
          node.height = height;
        }
        node.style.opacity = (opacity != null) ? opacity : layer.opacity;

        return true;
      },

      _drawSymbol: function (node, info, layer) {
        var symbol = info.symbol,
          swatchInfo = info.swatchInfo,
          isSMSPath = symbol.type === "simple-marker-symbol" && symbol.style === "path",
          isVolumetricSymbol = swatchUtils.isVolumetricSymbol(symbol);

        if (!symbol || !swatchInfo) {
          return false;
        }

        if (symbol.type === "picture-marker-symbol") {
          node.style.opacity = layer.opacity;
        }

        var swatch = swatchInfo.swatch,
          sWidth = swatchInfo.sizes[0],
          sHeight = swatchInfo.sizes[1],
          surface = gfx.createSurface(node, sWidth, sHeight),
          gfxShape;

        try {

          if (swatch == null) {
            throw "no shape descriptors!";
          }

          swatch.forEach(function (symLayer) {
            var shapeGroup = surface.createGroup();

            symLayer.forEach(function (shapeDesc) {

              var shape = shapeDesc.shape,
                fill = shapeDesc.fill,
                stroke = shapeDesc.stroke;

              if (shape) {

                var isText = shape.type === "text";

                // Use default text for text symbols if there is no
                // pre-existing text.
                if (isText && !shape.text) {
                  shape.text = DEFAULT_TEXT;
                }

                // https://devtopia.esri.com/WebGIS/arcgis-websceneviewer-app/issues/1074
                if (shape.type === "image" && shape.src && shape.src.substr(0, 5) !== "data:") {
                  shape.src += (shape.src.indexOf("?") === -1 ? "?" : "&") + "legend=1";
                }

                gfxShape = shapeGroup.createShape(shape)
                  .setFill(fill)
                  .setStroke(stroke ? stroke : {width: 0});

                // Apply font to the GFX shape for text symbol.
                if (isText) {
                  gfxShape.setFont(shapeDesc.font);
                }
              }

            });

            var bbox = shapeGroup.getBoundingBox(),
              width = bbox.width,
              height = bbox.height,

              // Aligns the center of the path with surface's origin (0,0)
              // This logic is specifically required for SMS symbols
              // with STYLE_PATH style
              vectorDx = -(bbox.x + (width / 2)),
              vectorDy = -(bbox.y + (height / 2)),

              // Aligns the center of the shape with the center of the surface
              dim = surface.getDimensions(),
              transform = {
                dx: vectorDx + dim.width / 2,
                dy: vectorDy + dim.height / 2
              };

            var isScaled = false;

            if ((isSMSPath || isVolumetricSymbol) && (bbox.width !== 0 && bbox.height !== 0)) {
              // getScaleMatrix
              var aspect = bbox.width / bbox.height,
                xx = 1, yy = 1, // scales
                size = isSMSPath ?
                  screenUtils.pt2px(symbol.size) :
                  ((sWidth > sHeight) ? sWidth : sHeight) - 2; // 2px padding

              // Preserve aspect ratio when applying "size"
              if (!isNaN(size)) {
                if (aspect > 1) {
                  // width gets "size"
                  xx = size / bbox.width;
                  yy = (size / aspect) / bbox.height;
                }
                else {
                  // height gets "size"
                  yy = size / bbox.height;
                  xx = (size * aspect) / bbox.width;
                }
              }

              shapeGroup.applyTransform(
                gfxMatrix.scaleAt(
                  xx, yy,
                  { x: dim.width / 2, y: dim.height / 2 }
                )
              );

              isScaled = true;
            }

            if (!isScaled) {
              if (width > sWidth || height > sHeight) {
                var test = (width/sWidth > height/sHeight);
                var actualSize = test ? width : height;
                var refSize = test ? sWidth : sHeight;
                var scaleBy = (refSize - 5) / actualSize;

                lang.mixin(transform, {
                  xx: scaleBy,
                  yy: scaleBy
                });
              }
            }

            shapeGroup.applyTransform(transform);
          });

        }
        catch (e) {
          surface.clear();
          surface.destroy();
          return false;
        }

        return true;
      },

      _buildRampDOM: function (rampStops, tableBodyNode, overlayColor, isOpacityRamp) {
        var numGradients = rampStops.length - 1,
          gradientWidth = GRADIENT_WIDTH, gradientHeight = GRADIENT_HEIGHT,
          rowNode, labelTD, imageTD, imageDiv, rampDiv, labelContainer,
          surface, rect, rampWidth, rampHeight;

        rowNode = domConstruct.create("div", {
          className: CSS.layerRow
        }, tableBodyNode);

        imageTD = domConstruct.create("div", {
          className: CSS.symbolContainer,
          style: "width:" + gradientWidth + "px"
        }, rowNode);

        imageDiv = domConstruct.create("div", {
          className: CSS.rampContainer
        }, imageTD);

        rampDiv = domConstruct.create("div", {
          className: CSS.colorRamp + " " + (isOpacityRamp ? CSS.opacityRamp : "")
        }, imageDiv);

        labelTD = domConstruct.create("div", {
          className: CSS.layerInfo
        }, rowNode);

        rampWidth = "100%";

        if (numGradients > 2) {
          rampHeight = gradientHeight * numGradients;
        }
        else {
          rampHeight = RAMP_HEIGHT; // minimum height of the ramp
        }

        // added this as the bg image of opacityRamp is extended to padding height
        domStyle.set(rampDiv, "height", rampHeight + "px");

        surface = gfx.createSurface(rampDiv, rampWidth, rampHeight);

        try {
          // TODO: When HeatmapRenderer is supported, stop offsets should not be adjusted.
          // equalIntervalStops will be true for sizeInfo, false for heatmap.
          // Heatmaps tend to have lots of colors, we don't want a giant color ramp.
          // Hence equalIntervalStops = false.

          // Adjust the stop offsets so that we have stops at fixed/equal interval.
          rampStops.forEach(function(stop, index) {
            stop.offset = index / numGradients;
          });

          rect = surface.createRect({
            x:      0,
            y:      0,
            width:  rampWidth,
            height: rampHeight
          });

          rect
            .setFill({
              type: "linear",
              x1: 0, y1: 0,
              x2: 0, y2: rampHeight,
              colors: rampStops
            })
            .setStroke(null);

          if (overlayColor && overlayColor.a > 0) {
            surface.createRect({
                width: rampWidth,
                height: rampHeight
              })
              .setFill(overlayColor)
              .setStroke(null);
          }

        }
        catch (e) {
          surface.clear();
          surface.destroy();
        }

        labelContainer = domConstruct.create("div", {
          className: CSS.rampLabelsContainer,
          style: {
            height: rampHeight + "px"
          }
        }, labelTD);

        // Labels for SizeInfo
        rampStops.forEach(function(stop) {
          if(stop.label) {
            domConstruct.create("div", {
              className: CSS.rampLabel,
              // Flex-box will allow us to space these out vertically.
              innerHTML: stop.label
            }, labelContainer);
          }
        });

      },

      _getTitle: function (titleInfo, isRamp) {
        var bundleKey;

        if (isRamp) {
          bundleKey = (titleInfo.ratioPercentTotal && "showRatioPercentTotal") ||
            (titleInfo.ratioPercent && "showRatioPercent") ||
            (titleInfo.ratio && "showRatio") ||
            (titleInfo.normField && "showNormField") ||
            (titleInfo.field && "showField") ||
            null;
        }
        else {
          bundleKey = (titleInfo.normField && "showNormField") ||
            (titleInfo.normByPct ? "showNormPct" : null) ||
            (titleInfo.field && "showField") ||
            null;
        }

        return bundleKey ? esriLang.substitute({
          field: titleInfo.field,
          normField: titleInfo.normField
        }, i18n[bundleKey]) : null;
      },

      _setVisible: function (domElm, visible) {
        var hasHide = domClass.contains(domElm, CSS.hidden);

        if (visible && hasHide) {
          domClass.remove(domElm, CSS.hidden);
        }
        else if (!visible && ! hasHide) {
          domClass.add(domElm, CSS.hidden);
        }
      }
    }
  );

  return Legend;

});
