/**
 * Sketch widget provides a simple UI for creating and updating graphics on a {@link module:esri/views/MapView} or
 * a {@link module:esri/views/SceneView}. This significantly minimizes the code required for working with graphics in the view.
 * It is intended to be used with {@link module:esri/Graphic graphics} stored in its [layer](#layer) property.
 *
 * By default, the Sketch widget provides out-of-the-box tools for creating and updating graphics with {@link module:esri/geometry/Point point},
 * {@link module:esri/geometry/Polyline polyline}, {@link module:esri/geometry/Polygon polygon}, {@link module:esri/geometry/Polygon rectangle}
 * and {@link module:esri/geometry/Polygon circle} geometries.
 *
 * Discover the Sketch widget in MapView with [this sample](../sample-code/sketch-geometries/index.html):<br>
 * [![sketch-geometries](../assets/img/apiref/widgets/sketch/sketch-widget.gif)](../sample-code/sketch-geometries/index.html)
 *
 * Discover the Sketch widget in SceneView with [this sample](../sample-code/sketch-3d/index.html):<br>
 * [![sketch-geometries-3D](../assets/img/apiref/widgets/sketch/sketch-widget-3D.gif)](../sample-code/sketch-3d/index.html)
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 *
 * * Graphics with polyline or polygon geometries can not be rotated or scaled in a {@link module:esri/views/SceneView}.
 * * Multipoint geometry can only be created in a {@link module:esri/views/MapView}.
 * :::
 *
 * >>> esri-read-more
 * <a name="create-graphics"></a>
 * Pointer and keyboard gestures for creating graphics with different geometries are described in the tables below.
 *
 * #### Creating point graphics
 *
 * Gesture | Action |
 * ---------|---------|
 * Left-click | Adds a point graphic at the pointer location. |
 * Enter | Adds a point graphic at the pointer location. |
 *
 * #### Creating polyline and polygon graphics
 *
 * The following keyboard shortcuts apply when creating polyline and polygon graphics.
 *
 * Gesture | Action | Example |
 * ---------|---------|---------|
 * Left-click | Adds a vertex at the pointer location.| <img alt="Left-click" src="../assets/img/apiref/widgets/sketch/left-click-line.gif" width="400px"> |
 * Left-drag | Adds a vertex for each pointer move in [`hybrid`](#defaultCreateOptions) or [`freehand`](#defaultCreateOptions) mode. | <img alt="Left drag" src="../assets/img/apiref/widgets/sketch/left-drag-line.gif" width="400px"> |
 * F | Adds a vertex to the `polyline` or `polygon` graphic. Completes the `rectangle` or `circle` polygon graphic in [`click`](#defaultCreateOptions) mode. | <img alt="F vertex add" src="../assets/img/apiref/widgets/sketch/f-key-line.gif" width="400px"> |
 * Enter | Completes the `polyline` or `polygon` graphic without the staged vertex. A `double-click` will complete the graphic at the current mouse cursor's postion. | <img alt="Enter" src="../assets/img/apiref/widgets/sketch/enter-line.gif" width="400px"> |
 * Z | Incrementally undo actions recorded in the stack. The undo/redo stack is for an individual sketch operation, meaning you can redo/undo actions while creating or updating a graphic. | <img alt="Undo" src="../assets/img/apiref/widgets/sketch/undo-line.gif" width="400px"> |
 * R | Incrementally redo actions recorded in the stack. The undo/redo stack is for an individual sketch operation, meaning you can redo/undo actions while creating or updating a graphic. | <img alt="Redo" src="../assets/img/apiref/widgets/sketch/redo-line.gif" width="400px"> |
 * Ctrl | Toggle snapping dependent on the configuration in {@link  module:esri/widgets/Sketch/SketchViewModel#snappingOptions snappingOptions}. | <img alt="Ctrl key" src="../assets/img/apiref/widgets/sketch/ctrl-key-polygon.gif" width="400px"> |
 * Spacebar+Left-drag | Pan the view while creating a polyline or polygon graphic. | <img alt="Space left drag" src="../assets/img/apiref/widgets/sketch/space-left-drag.gif" width="400px"> |
 * Left-click on the first vertex | Completes the polygon graphic sketch. | <img alt="Left-click first vertex" src="../assets/img/apiref/widgets/sketch/left-click-vertex.gif" width="400px"> |
 *
 * #### Creating polygon graphics with predefined shapes
 *
 * The following keyboard shortcuts apply when creating polygon graphics with predefined shapes (`rectangle` and `circle`).
 *
 * Gesture | Action | Example |
 * ------- | ------ |---------|
 * Left-click+Drag | Creates a `rectangle` graphic with dimensions based on the bounding box between initial click and cursor location. Creates a `circle` graphic with radius based on the distance between initial click and cursor location. | <img alt="Polygon Left-click drag" src="../assets/img/apiref/widgets/sketch/polygon-left-click-drag.gif" width="400px"> |
 * Shift+Left-click+Drag | Changes the shape from a `rectangle` to a `square` or from a `circle` to an `ellipse`. | <img alt="Shift Left-click drag" src="../assets/img/apiref/widgets/sketch/shift-left-click-drag.gif" width="400px"> |
 * Alt+Left-click+Drag | Creates a `rectangle` graphic with a center at initial click, and dimensions based on the distance between the initial click to the cursor location. Creates a `circle` graphic with a radius based on the bounding box between the initial click and the cursor location. | <img alt="Alt Left-click drag" src="../assets/img/apiref/widgets/sketch/alt-left-click-drag.gif" width="400px"> |
 * Shift+Alt+Left-click+Drag | Combines the behavior described above. | <img alt="Shift Alt Left-click drag" src="../assets/img/apiref/widgets/sketch/shift-alt-left-click-drag.gif" width="400px"> |
 *
 * <a name="update-graphics"></a>
 * #### Updating graphics
 *
 * The Sketch widget provides users with the ability to move, rotate, scale or reshape graphics during an update operation.
 * To begin updating, `Left-click` on a graphic. Use `Shift+Left-click` to add more graphics to the selection, or remove graphics from the selection, for bulk updating.
 * Once graphics are selected, the following actions can be performed.
 *
 * Gesture | Action | Example |
 * ---------|---------|----------|
 * Left-click on a graphic | Select a graphic to move, rotate or scale. | <img alt="Select a graphic" src="../assets/img/apiref/widgets/sketch/sketch-box-mode.gif" width="400px"> |
 * Shift+Left-click graphics | Select or deselect multiple graphics to move, rotate or scale.| <img alt="Select graphics" src="../assets/img/apiref/widgets/sketch/sketch-graphics.gif" width="400px"> |
 * Drag graphic | Move the selected graphic.| <img alt="Drag the graphic" src="../assets/img/apiref/widgets/sketch/sketch-box-move.gif" width="400px"> |
 * Drag rotate handle | Rotate the selected graphic.| <img alt="Rotate the graphic" src="../assets/img/apiref/widgets/sketch/sketch-rotate.gif" width="400px"> |
 * Drag scale handle | Scale the selected graphic.| <img alt="Scale the graphic" src="../assets/img/apiref/widgets/sketch/sketch-scale.gif" width="400px"> |
 * Z | Incrementally undo actions recorded in the stack. The undo/redo stack is for an individual sketch operation, meaning you can redo/undo actions while creating or updating a graphic. | <img alt="Undo update" src="../assets/img/apiref/widgets/sketch/sketch-update-undo.gif" width="400px"> |
 * R | Incrementally redo actions recorded in the stack. The undo/redo stack is for an individual sketch operation, meaning you can redo/undo actions while creating or updating a graphic. | <img alt="Redo update" src="../assets/img/apiref/widgets/sketch/sketch-update-redo.gif" width="400px"> |
 * Left-click on view (not the graphic) | Complete the graphic update. | <img alt="Sketch update complete" src="../assets/img/apiref/widgets/sketch/sketch-update-complete.gif" width="400px"> |
 * Press `Delete` key | Remove the selected graphic(s) from the [layer](#layer). | <img alt="Sketch delete graphic" src="../assets/img/apiref/widgets/sketch/sketch-delete-graphic.gif" width="400px">
 *
 * The following update operations can be performed on a single polyline or polygon graphic:
 *
 * Gesture | Action | Example |
 * ---------|---------|----------|
 * Left-click on a graphic | Select a graphic to move or reshape.| <img alt="Select a graphic" src="../assets/img/apiref/widgets/sketch/sketch-reshape-mode.gif" width="400px"> |
 * Drag graphic | Move the selected graphic.| <img alt="Drag the graphic" src="../assets/img/apiref/widgets/sketch/sketch-drag.gif" width="400px"> |
 * Left-click on a ghost vertex| Add a new vertex. | <img alt="Add a vertex" src="../assets/img/apiref/widgets/sketch/sketch-add-vertices.gif" width="400px"> |
 * Left-click on a vertex| Select a vertex. | <img alt="Select a vertex" src="../assets/img/apiref/widgets/sketch/sketch-selectvertex.gif" width="400px"> |
 * Shift+Left-click on vertices | Select or deselect multiple vertices. | <img alt="Select vertices" src="../assets/img/apiref/widgets/sketch/sketch-selectvertices.gif" width="400px"> |
 * Drag vertex | Move the selected vertex or vertices. | <img alt="Drag vertices" src="../assets/img/apiref/widgets/sketch/sketch-dragvertices.gif" width="400px"> |
 * Right-click on a vertex | Delete a vertex. | <img alt="Delete a vertex" src="../assets/img/apiref/widgets/sketch/sketch-delete-vertex.gif" width="400px"> |
 * Select multiple vertices and press `Backspace` or `Delete` key | Delete multiple vertices. | <img alt="Delete vertices" src="../assets/img/apiref/widgets/sketch/sketch-delete-vertices.gif" width="400px"> |
 *
 * The following update operations can be performed on a single graphic with point geometry in a {@link module:esri/views/SceneView}, if the graphic uses a {@link module:esri/symbols/ObjectSymbol3DLayer 3D object symbol layer}:
 *
 * Gesture | Action | Example |
 * ---------|---------|----------|
 * Left-click on a graphic | Select a graphic to move, rotate or scale. | <img alt="Select a graphic" src="../assets/img/apiref/widgets/sketch/sketch-update-point-3D.gif" width="400px"> |
 * Drag inner handle | Move the selected graphic.| <img alt="Drag the graphic" src="../assets/img/apiref/widgets/sketch/sketch-transform-move-point.gif" width="400px"> |
 * Drag height handle | Move the selected graphic vertically (on the z axis).| <img alt="Drag the graphic" src="../assets/img/apiref/widgets/sketch/sketch-transform-movez-point.gif" width="400px"> |
 * Drag outer handle sideways | Rotate the selected graphic.| <img alt="Rotate the graphic" src="../assets/img/apiref/widgets/sketch/sketch-transform-rotate-point.gif" width="400px"> |
 * Drag outer handle inwards or outwards | Scale the selected graphic.| <img alt="Scale the graphic" src="../assets/img/apiref/widgets/sketch/sketch-transform-scale-point.gif" width="400px"> |
 *
 * Sketch 3D
 * ---------
 *
 * To be able to manipulate features on the z-axis using the height handle, the following configurations are relevant:
 * - {@link module:esri/layers/GraphicsLayer#elevationInfo Elevation info mode} of the
 * {@link module:esri/layers/GraphicsLayer} needs to be set to `absolute-height`, `relative-to-scene`or `relative-to-ground`.
 * - To create a graphic with z-value the `hasZ` needs to be `true` in [defaultCreateOptions](#defaultCreateOptions) and/or in the [createOptions](#createOptions).
 * - To update the z-value of a graphic the `enableZ` needs to be `true` in [defaultUpdateOptions](#defaultUpdateOptions) and/or in the [updateOptions](#updateOptions).
 *
 * ```js
 * // define the GraphicsLayer
 * const gLayer = new GraphicsLayer({
 *   elevationInfo: {
 *     mode: "absolute-height" // default value
 *   }
 * });
 *
 * // define the SketchViewModel
 * const sketchVM = new SketchViewModel({
 *   layer: gLayer,
 *   view: view,
 *   defaultCreateOptions: {
 *     hasZ: true  // default value
 *   },
 *   defaultUpdateOptions: {
 *     enableZ: true  // default value
 *   }
 * });
 * ```
 * In `absolute-height` mode the sketched vertices snap to scene elements (features and ground). A {@link module:esri/geometry/Polygon polygon} sketched in
 * `absolute-height` mode is planar, which means that all {@link module:esri/geometry/Polygon polygon} vertices use the height of the first vertex.
 * See {@link module:esri/layers/GraphicsLayer#elevationInfo elevation info} for more information on how z-values are used with different elevation modes.
 *
 * >>>
 *
 * @module module:esri/widgets/Sketch
 *
 * @since 4.10
 * @see [Sketch.tsx (widget view) [deprecated since 4.21]]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/Sketch.tsx)
 * @see [Sketch.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_Sketch.scss)
 * @see module:esri/widgets/Sketch/SketchViewModel
 * @see [Sample - Sketch temporary geometries](../sample-code/sketch-geometries/index.html)
 * @see [Sample - Sketch update validation](../sample-code/sketch-update-validation/index.html)
 * @see [Sample - Query statistics by geometry](../sample-code/featurelayerview-query-geometry/index.html)
 * @see [Sample - Snapping with Sketch widget and Magnifier](../sample-code/sketch-snapping-magnifier/index.html)
 *
 * @example
 * // Create a new instance of sketch widget and set
 * // its required parameters
 * let sketch = new Sketch({
 *   layer: graphicsLayer,
 *   view: view
 * });
 *
 * // Listen to sketch widget's create event.
 * sketch.on("create", function(event) {
 *   // check if the create event's state has changed to complete indicating
 *   // the graphic create operation is completed.
 *   if (event.state === "complete") {
 *     // remove the graphic from the layer. Sketch adds
 *     // the completed graphic to the layer by default.
 *     graphicsLayer.remove(event.graphic);
 *
 *     // use the graphic.geometry to query features that intersect it
 *     selectFeatures(event.graphic.geometry);
 *   }
 * });
 */

// esri
import { substitute } from "esri/intl";
import Graphic from "esri/widgets/../Graphic";

// esri.core
import Collection from "esri/core/Collection";
import { handlesGroup } from "esri/core/handleUtils";
import { destroyMaybe, isNone, isSome, Maybe, removeMaybe } from "esri/core/maybe";

// esri.core.accessorSupport
import { aliasOf, cast, subclass, property } from "esri/core/accessorSupport/decorators";

// esri.layers
import GraphicsLayer from "esri/widgets/../layers/GraphicsLayer";

// esri.views
import IMapView from "esri/views/IMapView";
import { ISceneView } from "esri/views/ISceneView";

// esri.views.interactive.snapping
import SnappingOptions from "esri/views/interactive/snapping/SnappingOptions";

// esri.widgets
import Widget from "esri/widgets/Widget";

// esri.widgets.Sketch
import SketchViewModel from "esri/widgets/Sketch/SketchViewModel";

// esri.widgets.Sketch.support
import {
  CreateEvent,
  CreateOptions,
  CreateTool,
  CreationMode,
  DeleteEvent,
  SketchTool,
  State,
  UpdateOptions
} from "esri/widgets/Sketch/support/interfaces";

// esri.widgets.Sketch.t9n
import SketchMessages from "esri/widgets/Sketch/t9n/Sketch";

// esri.widgets.support
import { VNode } from "esri/widgets/support/interfaces";
import SelectionToolbar from "esri/widgets/support/SelectionToolbar";
import SnappingControls from "esri/widgets/support/SnappingControls";
import { isRTL, messageBundle, tsx, vmEvent, WidgetProperties } from "esri/widgets/support/widget";

// esri.widgets.support.Selector2D
import { SelectionCompleteEventInfo } from "esri/widgets/support/Selector2D/interfaces";

type CreateToolVisibilityMap = { [key in CreateTool]?: boolean };

type SelectionToolVisibilityMap = { [key in SelectionTool]?: boolean };

type Layout = "vertical" | "horizontal";

type SelectionTool = "lasso-selection" | "rectangle-selection" | "custom-selection";

interface SketchEvents {
  delete: DeleteEvent;
}

interface VisibleElements {
  createTools?: CreateToolVisibilityMap;
  selectionTools?: SelectionToolVisibilityMap;
  undoRedoMenu?: boolean;
  settingsMenu?: boolean;
}

const CSS = {
  // sketch classes
  base: "esri-sketch",

  verticalLayout: "esri-sketch--vertical",
  panel: "esri-sketch__panel",
  infoPanel: "esri-sketch__info-panel",
  section: "esri-sketch__section",
  toolSection: "esri-sketch__tool-section",
  infoSection: "esri-sketch__info-section",
  infoCountSection: "esri-sketch__info-count-section",

  // settings menu
  menuContainer: "esri-sketch__menu-container",
  menuHeader: "esri-sketch__menu-header",
  menuTitle: "esri-sketch__menu-title",

  featureCountBadge: "esri-sketch__feature-count-badge",
  featureCountText: "esri-sketch__feature-count-text",
  featureCountNumber: "esri-sketch__feature-count-number",

  actionToggle: "esri-sketch__action-toggle",
  actionToggleOn: "esri-sketch__action-toggle--on",
  actionTitle: "esri-sketch__item-action-title",
  actionIcon: "esri-sketch__item-action-icon",

  // common
  disabled: "esri-disabled",
  esriWidget: "esri-widget",
  rotating: "esri-rotating",
  widgetIcon: "esri-icon-edit"
};

const DEFAULT_VISIBLE_ELEMENTS: VisibleElements = {
  createTools: {
    point: true,
    polyline: true,
    polygon: true,
    rectangle: true,
    circle: true
  },
  selectionTools: {
    "rectangle-selection": true,
    "lasso-selection": true
  },
  undoRedoMenu: true,
  settingsMenu: true
};

interface OptionalConstructProperties extends WidgetProperties<SketchViewModel> {
  availableCreateTools: CreateTool[];
  createGraphic: Graphic;
  creationMode: CreationMode;
  defaultCreateOptions: CreateOptions;
  defaultUpdateOptions: UpdateOptions;
  layer: GraphicsLayer;
  layout: Layout;
  snappingOptions: Partial<SnappingOptions>;
  view: IMapView | ISceneView;
  visibleElements: VisibleElements;
}

type ConstructProperties = Partial<OptionalConstructProperties>;

@subclass("esri.widgets.Sketch")
class Sketch extends Widget<ConstructProperties, SketchEvents> implements ConstructProperties {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * Fires when a user deletes selected graphics by clicking the `Delete feature` button on the Sketch widget
   * or when [delete()](#delete) method is called.
   *
   * @example
   * // selected graphics can be deleted only when update event becomes active
   * sketch.on("update", function(event) {
   *   if (event.state === "active") {
   *     sketch.delete();
   *   }
   * });
   *
   * // fires after delete method is called
   * // returns references to deleted graphics.
   * sketch.on("delete", function(event) {
   *   event.graphics.forEach(function(graphic){
   *     console.log("deleted", graphic)
   *   });
   * });
   *
   * @since 4.14
   * @event module:esri/widgets/Sketch#delete
   * @property {module:esri/Graphic[]} graphics - An array of deleted graphics.
   * @property {"move" | "reshape" | "transform"} tool - Name of the tool that was active when graphics are deleted.
   * @property {"delete"} type - The type of the event.
   */

  /**
   * Fires when a user starts sketching a graphic, is actively sketching a graphic and completes sketching a graphic.
   *
   * @event module:esri/widgets/Sketch#create
   * @property {module:esri/Graphic} graphic - The graphic that is being created.
   * @property {"start" | "active" | "complete" | "cancel"} state - The current state of the event.
   *
   * **Possible Values**
   *
   * Value | Description |
   * ----- | ----------- |
   * start | State changes to `start` when the first vertex is created. Not applicable when creating `points`.
   * active | State is `active` while graphic is being created. Not applicable when creating `points`.
   * complete | State changes to `complete` after the [complete()](#complete) method is called, when the user double clicks, presses the `C` key or clicks the first vertex of the `polygon` while creating a graphic. When `point` is created, the create event is fired with the `complete` state.
   * cancel | State changes to `cancel` if the user pressed the escape key or [create()](#create) or [cancel()](#cancel) methods are called during the create operation and before the state changes to `complete`.
   *
   * @property {"point" | "polyline" | "polygon" | "rectangle" | "circle"} tool - Name of the create tool.
   * @property {module:esri/widgets/Sketch~CreateToolEventInfo} toolEventInfo - Returns additional information associated with
   * the create operation such as where the user is clicking the view or where the user is moving the cursor to.
   * Value of this parameter changes to `null` when the `create` event's `state` changes to `complete` or `cancel`.
   *
   * @property {"create"} type - The type of the event.
   *
   * @example
   * // Listen to sketch widget's create event.
   * sketch.on("create", function(event) {
   *   // check if the create event's state has changed to complete indicating
   *   // the graphic create operation is completed.
   *   if (event.state === "complete") {
   *     // remove the graphic from the layer. Sketch adds
   *     // the completed graphic to the layer by default.
   *     polygonGraphicsLayer.remove(event.graphic);
   *
   *     // use the graphic.geometry to query features that intersect it
   *     selectFeatures(event.graphic.geometry);
   *   }
   * });
   */

  /**
   * Fires when the user starts updating graphics, is actively updating graphics, and completes updating graphics.
   *
   * @event module:esri/widgets/Sketch#update
   * @property {module:esri/Graphic[]} graphics - An array of graphics that are being updated.
   * @property {"start" | "active" | "complete"} state - The state of the event.
   *
   * **Possible Values**
   *
   * Value | Description |
   * ----- | ----------- |
   * start | State changes to `start` when a graphic is selected to be updated.
   * active | State is `active` while graphics are being updated and `toolEventInfo` parameter is not `null`.
   * complete | State changes to `complete` after graphics are updated.
   *
   * @property {boolean} aborted - Indicates if the update operation was aborted. Set to `true`
   * if the user pressed the escape key, or when the [update()](#update), [create()](#create)
   * or [cancel()](#cancel) method is called before the `update` event's `state` changes to `complete`.
   * @property {"move" | "transform" | "reshape"} tool - Name of the update operation tool.
   * @property {"update"} type - The type of the event.
   * @property {module:esri/widgets/Sketch~UpdateToolEventInfo} toolEventInfo - Returns additional information associated
   * with the update operation that is taking place for the selected graphics and what stage it is at. Value of this parameter
   * changes to `null` when the `update` event's `state` changes to `complete`.
   *
   * @example
   * // Listen to sketch's update event to show relevant data in a chart
   * // as the graphics are being moved
   * sketch.on("update", onMove);
   *
   * // Point graphics at the center and edge of the buffer polygon are being moved.
   * // Recalculate the buffer with updated geometry and run the query stats using
   * // the updated buffer and update the chart.
   * function onMove(event) {
   *   // If the edge graphic is moving, keep the center graphic
   *   // at its initial location. Only move edge graphic to resize the buffer.
   *   if (event.toolEventInfo && event.toolEventInfo.mover.attributes.edge) {
   *     const toolType = event.toolEventInfo.type;
   *     if (toolType === "move-start") {
   *       centerGeometryAtStart = centerGraphic.geometry;
   *     }
   *     // keep the center graphic at its initial location when edge point is moving
   *     else if (toolType === "move" || toolType === "move-stop") {
   *       centerGraphic.geometry = centerGeometryAtStart;
   *     }
   *   }
   *
   *   // the center or edge graphic is being moved, recalculate the buffer
   *   const vertices = [
   *     [centerGraphic.geometry.x, centerGraphic.geometry.y],
   *     [edgeGraphic.geometry.x, edgeGraphic.geometry.y]
   *   ];
   *
   *   // client-side stats query of features that intersect the buffer
   *   calculateBuffer(vertices);
   *
   *   // user is clicking on the view... call update method with the center and edge graphics
   *   if (event.state === "complete") {
   *     sketch.update({
   *       tool: "move",
   *       graphics: [edgeGraphic, centerGraphic]
   *     });
   *   }
   * }
   */

  /**
   * Fires in response to redo action during creation of a new graphic or updating existing graphics.
   * The undo/redo stack is for an individual sketch operation, meaning you can redo/undo actions while creating or updating a graphic.
   *
   * @event module:esri/widgets/Sketch#redo
   * @property {module:esri/Graphic[]} graphics - An array of graphics that are being updated or created.
   * @property {"point" | "polyline" | "polygon" | "rectangle" | "circle" | "move" | "transform" | "reshape"} tool - Name of the create or update tool that is active.
   * @property {"redo"} type - The type of the event.
   */

  /**
   * Fires in response to undo action during creation of a new graphic or updating existing graphics.
   * The undo/redo stack is for an individual sketch operation, meaning you can redo/undo actions while creating or updating a graphic.
   *
   * @event module:esri/widgets/Sketch#undo
   * @property {module:esri/Graphic[]} graphics - An array of graphics that are being updated or created.
   * @property {"point" | "polyline" | "polygon" | "rectangle" | "circle" | "move" | "transform" | "reshape"} tool - Name of the create or update tool that is active.
   * @property {"undo"} type - The type of the event.
   */

  /**
   * This information is returned as `toolEventInfo` parameter for the [create](#event-create) event when the graphic
   * is being created. It returns {@link module:esri/widgets/Sketch~VertexAddEventInfo}
   * when the user clicks the view or {@link module:esri/widgets/Sketch~CursorUpdateEventInfo} or when the user moves the cursor.
   *
   * @typedef {module:esri/widgets/Sketch~VertexAddEventInfo | module:esri/widgets/Sketch~CursorUpdateEventInfo} module:esri/widgets/Sketch~CreateToolEventInfo
   */

  /**
   * This information is returned as `toolEventInfo` parameter for the [update](#event-update) event when the user is updating graphics.
   *
   * @typedef {module:esri/widgets/Sketch~MoveEventInfo | module:esri/widgets/Sketch~ReshapeEventInfo | module:esri/widgets/Sketch~RotateEventInfo | module:esri/widgets/Sketch~ScaleEventInfo | module:esri/widgets/Sketch~SelectionChangeEventInfo | module:esri/widgets/Sketch~VertexAddEventInfo | module:esri/widgets/Sketch~VertexRemoveEventInfo} module:esri/widgets/Sketch~UpdateToolEventInfo
   */

  /**
   * This information is returned as `toolEventInfo` parameter for the [create](#event-create)
   * event when the user moves the cursor on the view while the graphic is being created.
   *
   * @typedef {Object} module:esri/widgets/Sketch~CursorUpdateEventInfo
   *
   * @property {"cursor-update"} type - Type is always `cursor-update`.
   *
   * @property {number[]} coordinates - An array of numbers representing the coordinates of the cursor location.
   *
   * @example
   * // listen to create event
   * sketch.on("create", function(event){
   *   // respond to create event while the cursor is being moved on the view.
   *   const eventInfo = event.toolEventInfo;
   *   if (eventInfo && eventInfo.type === "cursor-update"){
   *     console.log(eventInfo.type, eventInfo.coordinates[0], eventInfo.coordinates[1]);
   *   }
   * });
   */

  /**
   * This information is returned as `toolEventInfo` parameter for the [create](#event-create)
   * or [update](#event-update) event when the user adds vertices to the graphic being created or updated.
   *
   * @typedef {Object} module:esri/widgets/Sketch~VertexAddEventInfo
   *
   * @property {"vertex-add"} type - Type is always `vertex-add`.
   *
   * @property {number[]} added - An array of x,y coordinates representing the vertices added.
   *
   * @property {Object[]} vertices - Contains the details of the added vertices to track changes in topology of the geometry.
   * @property {number[]} vertices.coordinates - An array of x,y coordinates representing the vertices added.
   * @property {number} vertices.componentIndex - The ring/path index of the added vertex.
   * @property {number} vertices.vertexIndex - The index of the vertex position.
   *
   * @example
   * // listen to create event
   * sketch.on("create", function(event){
   *   // check if vertices are being added to the graphic that is being updated.
   *   if (event.toolEventInfo && event.toolEventInfo.type === "vertex-add"){
   *     const addedPoint = event.toolEventInfo.added[0].geometry;
   *     console.log(event.toolEventInfo.type, addedPoint.x, addedPoint.y);
   *   }
   * });
   */

  /**
   * This information is returned as `toolEventInfo` parameter for the [update](#event-update) event
   * when the user is removing vertices from the graphic.
   *
   * @typedef {Object} module:esri/widgets/Sketch~VertexRemoveEventInfo
   *
   * @property {"vertex-remove"} type - Type is always `vertex-remove`.
   *
   * @property {number[]} removed - An array of x,y coordinates representing the vertices removed.
   *
   * @property {Object[]} vertices - Contains the details of the removed vertices to track changes in topology of the geometry.
   * @property {number[]} vertices.coordinates - An array of x,y coordinates representing the vertices removed.
   * @property {number} vertices.componentIndex - The ring/path index of the removed vertex.
   * @property {number} vertices.vertexIndex - The index of the vertex position.
   *
   * @example
   * // listen to update event
   * sketch.on("update", function(event){
   *   // check if vertices are being added to the graphic that is being updated.
   *   const eventInfo = event.toolEventInfo;
   *   if (eventInfo && eventInfo.type === "vertex-remove"){
   *     const removedPoint = eventInfo.removed[0].geometry;
   *     console.log(eventInfo.type, removedPoint.x,removedPoint.y);
   *   }
   * });
   */

  /**
   * This information is returned as `toolEventInfo` parameter for the [update](#event-update)
   * event while the user is moving the graphics. It returns additional information associated with the move operation
   * and what stage it is at.
   *
   * @typedef {Object} module:esri/widgets/Sketch~MoveEventInfo
   *
   * @property {"move-start" | "move" | "move-stop"} type - Returns information indicating the stage of the move operation.
   *
   * **Possible Values**
   *
   * Value | Description |
   * ----- | ----------- |
   * move-start | The type changes to `move-start` at the start of `move` operation.
   * move | The type changes to `move` while graphics are being moved.
   * move-stop | The type changes to `move-stop` once graphics are moved.
   *
   * @property {number} dx - Number of pixels moved on the x-axis from the last known position.
   * @property {number} dy - Number of pixels moved on the y-axis from the last known position.
   * @property {module:esri/Graphic} mover - The instance of the graphic that is being moved.
   *
   * @example
   * // listen to update event
   * sketch.on("update", function(event){
   *   // check if the graphics are done being moved, printout dx, dy parameters to the console.
   *   const eventInfo = event.toolEventInfo;
   *   if (eventInfo && eventInfo.type.includes("move")){
   *     console.log(eventInfo.type, eventInfo.dx, eventInfo.dy);
   *   }
   * });
   */

  /**
   * This information is returned as `toolEventInfo` parameter for the [update](#event-update)
   * event while the user is reshaping the graphics. It returns additional information associated with the reshape operation
   * and what stage it is at.
   *
   * @typedef {Object} module:esri/widgets/Sketch~ReshapeEventInfo
   *
   * @property {"reshape-start" | "reshape" | "reshape-stop"} type - Returns information indicating the stage of the reshape operation.
   *
   * **Possible Values**
   *
   * Value | Description |
   * ----- | ----------- |
   * reshape-start | The type changes to `reshape-start` at the start of `reshape` operation.
   * reshape | The type changes to `reshape` while graphics are being reshaped.
   * reshape-stop | The type changes to `reshape-stop` once graphics are reshaped.
   *
   * @example
   * // listen to update event
   * sketch.on("update", function(event){
   *   // check if the graphics are done being reshaped, printout updated graphic's geometry and reshape stage.
   *   const eventInfo = event.toolEventInfo;
   *   if (eventInfo && eventInfo.type.includes("reshape")) {
   *     console.log(eventInfo.type, event.graphics[0].geometry);
   *   }
   * });
   */

  /**
   * This information is returned as `toolEventInfo` parameter for the [update](#event-update)
   * event while the user is rotating the graphics. It returns additional information associated with the rotate operation
   * and what stage it is at.
   *
   * @typedef {Object} module:esri/widgets/Sketch~RotateEventInfo
   *
   * @property {"rotate-start" | "rotate" | "rotate-stop"} type - Returns information indicating the stage of the rotate operation.
   *
   * **Possible Values**
   *
   * Value | Description |
   * ----- | ----------- |
   * rotate-start | The type changes to `rotate-start` at the start of `rotate` operation.
   * rotate | The type changes to `rotate` while graphics are being rotated.
   * rotate-stop | The type changes to `rotate-stop` once graphics are rotated.
   *
   * @property {number} angle - Angle of rotation in degrees.
   * @example
   * // listen to update event
   * sketch.on("update", function(event){
   *   if (event.tool === "transform") {
   *     if (event.toolEventInfo) {
   *       const info = event.toolEventInfo,
   *       type = info.type;
   *
   *       // rotate events only
   *       if (type.includes("rotate")) {
   *         // check if the rotation angle exceeded 45
   *         if (info.angle > 45) {
   *           // complete the graphic update operation
   *           sketch.complete();
   *         }
   *       }
   *     }
   *   }
   * });
   */

  /**
   * This information is returned as `toolEventInfo` parameter for the [update](#event-update)
   * event while the user is scaling or resizing the graphics. It returns additional information associated with the scale
   * operation and what stage it is at.
   *
   * @typedef {Object} module:esri/widgets/Sketch~ScaleEventInfo
   *
   * @property {"scale-start" | "scale" | "scale-stop"} type - Returns information indicating the stage of the scale operation.
   *
   * **Possible Values**
   *
   * Value | Description |
   * ----- | ----------- |
   * scale-start | The type changes to `scale-start` at the start of scale or resize operation.
   * scale | The type changes to `scale` while graphics are being scaled or resized.
   * scale-stop | The type changes to `scale-stop` once graphics are scaled or resized.
   *
   * @property {number} xScale - The x scale factor used to enlarge or shrink the geometry.
   * @property {number} yScale - The y scale factor used to enlarge or shrink the geometry.
   */

  /**
   * This information is returned as `toolEventInfo` parameter for the [update](#event-update)
   * event while the user is selecting or deselecting graphics using `Shift+Left-click`.
   *
   * @typedef {Object} module:esri/widgets/Sketch~SelectionChangeEventInfo
   *
   * @property {"selection-change"} type - Type is always `selection-change`.
   *
   * @property {module:esri/Graphic[]} added - An array of {@link module:esri/Graphic graphics} representing the latest graphic selected.
   *
   * @property {module:esri/Graphic[]} removed - An array of {@link module:esri/Graphic graphics} representing the latest graphic deselected.
   *
   * @example
   * // listen to update event
   * sketch.on("update", function(event) {
   *   const eventInfo = event.toolEventInfo;
   *   // check if a graphic is being selected or deselected.
   *   if (eventInfo && eventInfo.type === "selection-change") {
   *     if(eventInfo.added.length > 0) {
   *       // graphic is being added to the currently selected graphics.
   *       console.log("geometry type added: ", eventInfo.added[0].geometry.type);
   *     } else {
   *       // graphic is being removed from the currently selected graphics.
   *       console.log("geometry type removed: ", eventInfo.removed[0].geometry.type);
   *     }
   *   }
   * });
   */

  /**
   * @extends module:esri/widgets/Widget
   * @constructor
   * @alias module:esri/widgets/Sketch
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   *
   * @example
   * // typical usage
   * let sketch = new Sketch({
   *   layer: layer,
   *   view: view
   * });
   */
  constructor(properties?: ConstructProperties, parentNode?: string | Element) {
    super(properties, parentNode);

    this._activateCreateTool = this._activateCreateTool.bind(this);

    if (!properties?.viewModel) {
      this._defaultViewModel = new SketchViewModel();
      this.viewModel = this._defaultViewModel;
    }
  }

  protected override initialize(): void {
    const { layer, view } = this;

    const toolbar = new SelectionToolbar({
      view: view?.type === "2d" ? view : null,
      layers: layer ? [layer] : null
    });

    this._selectionHandlesGroup = handlesGroup([
      toolbar.watch("activeToolInfo", (info) => {
        if (info) {
          this.viewModel.cancel();
        }
      }),
      toolbar.on("complete", (event) => this._onSelectionOperationComplete(event))
    ]);

    this._selectionToolbar = toolbar;
    this._setUpSnappingControls();
  }

  protected override loadDependencies(): Promise<any> {
    return import("@esri/calcite-components/dist/custom-elements/bundles/action");
  }

  override destroy(): void {
    this._selectionToolbar.destroy();
    this._cleanupViewModel();
    this._selectionHandlesGroup = removeMaybe(this._selectionHandlesGroup);
    this._snappingControls = destroyMaybe(this._snappingControls);
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _activeCreateOptions: CreateOptions = null;

  private _defaultViewModel: Maybe<SketchViewModel> = null;

  private _menuOpen: boolean = false;

  private _selectionToolbar: SelectionToolbar = null;

  private _selectionHandlesGroup: Maybe<IHandle> = null;

  private _snappingControls: Maybe<SnappingControls> = null;

  private _viewModelHandlesGroup: Maybe<IHandle> = null;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  /**
   * When creating new graphics (for example after [create()](#create) has been called),
   * this property reflects the create tool being used. When updating graphics
   * (for example after [update()](#update) has been called), this property reflects the
   * update tool being used. If no create or update operation is in progress, this is `null`.
   *
   * @name activeTool
   * @instance
   * @type {"point" | "polyline" | "polygon" | "circle" | "rectangle" | "move" | "transform" | "reshape" | "rectangle-selection" | "lasso-selection" }
   * @readonly
   */
  @property()
  get activeTool(): SketchTool | SelectionTool {
    const selectionInfo = this._selectionToolbar.activeToolInfo;

    if (selectionInfo) {
      switch (selectionInfo.toolName) {
        case "lasso":
          return "lasso-selection";
        case "rectangle":
          return "rectangle-selection";
        case "default":
          return "custom-selection";
      }
    }
    return this.viewModel.activeTool;
  }

  //----------------------------------
  //  availableCreateTools
  //----------------------------------

  /**
   * Property controlling the visibility and order of create tool buttons.
   *
   * @name availableCreateTools
   * @since 4.12
   * @instance
   * @default ["point", "polyline", "polygon", "rectangle", "circle"]
   * @type {string[]}
   */
  @property({
    cast: (tools: string[]): CreateTool[] => {
      if (!tools || !tools.length) {
        return null;
      }

      const validTools = new Set(["point", "polyline", "polygon", "rectangle", "circle"]);
      return tools.filter((toolName) => validTools.has(toolName)) as CreateTool[];
    }
  })
  availableCreateTools: CreateTool[] = ["point", "polyline", "polygon", "rectangle", "circle"];

  //----------------------------------
  //  createGraphic
  //----------------------------------

  /**
   * The graphic that is being created.
   *
   * @name createGraphic
   * @instance
   * @type {module:esri/Graphic}
   * @readonly
   */
  @aliasOf("viewModel.createGraphic")
  createGraphic: Graphic = null;

  //----------------------------------
  //  creationMode
  //----------------------------------

  /**
   * Defines the default behavior once the [create](#create) operation is completed. By default, the user will be
   * able to continuously create graphics with same geometry types.
   *
   * **Possible Values**
   *
   * Value | Description |
   * ----- | ----------- |
   * continuous | This is the default. Users can continue creating graphics with same geometry types.
   * single | User can create a single graphic with the specified geometry type. User must choose an operation once the graphic is created.
   * update | The graphic will be selected for an [update](#update) operation once the `create` operation is completed.
   *
   * @name creationMode
   * @since 4.14
   * @instance
   * @default continuous
   * @type {"single"| "continuous"| "update"}
   */
  @property()
  creationMode: CreationMode = "continuous";

  //----------------------------------
  //  defaultCreateOptions
  //----------------------------------

  /**
   * Default create options set for the Sketch widget.
   *
   * @name defaultCreateOptions
   * @instance
   * @since 4.14
   *
   * @property {"hybrid" | "freehand" | "click"} [mode] - Create operation mode how the graphic can be created.
   * **Possible Values**
   *
   * Value | Description |
   * ----- | ----------- |
   * hybrid | Vertices are added while the pointer is clicked or dragged. Applies to `polygon` and `polyline`.
   * freehand | Vertices are added while the pointer is dragged. Applies to `polygon`, `polyline` `rectangle` and `circle`. Default for `rectangle` and `circle`.
   * click | This is the default. Vertices are added when the pointer is clicked. Applies to `polygon`, `polyline` `rectangle` and `circle`. Default for `polygon` and `polyline`.
   *
   * @property {boolean} [hasZ] - Controls whether the created geometry has z-values or not.
   * @property {number} [defaultZ] - The default z-value of the newly created geometry. Ignored when `hasZ` is `false` or the layer's elevation mode is set to `absolute-height`.
   *
   * @type {Object}
   */
  @aliasOf("viewModel.defaultCreateOptions")
  defaultCreateOptions: CreateOptions = null;

  //----------------------------------
  //  defaultUpdateOptions
  //----------------------------------

  /**
   * Default update options set for the Sketch widget. Update options set on this property will be overwritten if the update options are changed
   * when [update()](#update) method is called.
   *
   * @name defaultUpdateOptions
   * @instance
   * @since 4.11
   *
   * @property {string} [tool] - Name of the update tool. The default tool is `transform` for graphics with polygon and polyline geometries and `move` for graphics with point and multipoint geometries.
   *                             However, if a graphic with point geometry uses a {@link module:esri/symbols/ObjectSymbol3DLayer 3D object symbol layer}, the default tool is `transform`.
   * @property {boolean} [enableRotation=true] - Indicates if the `rotation` operation will be enabled when updating graphics. Only applies if `tool` is `transform`.
   * @property {boolean} [enableScaling=true] - Indicates if the `scale` operation will be enabled when updating graphics. Only applies if `tool` is `transform`.
   * @property {boolean} [enableZ=true] -  Indicates if z-values can be modified when updating the graphic. When enabled, the height handle manipulator is displayed.
   * @property {boolean} [multipleSelectionEnabled=true] - Indicates whether more than one selection can be made at once. This applies to the shift+click interaction with the `transform` tool.
   * @property {boolean} [preserveAspectRatio=false] - Indicates if the uniform scale operation will be enabled when updating graphics. `enableScaling`
   * must be set `true` when setting this property to `true`. Only applies if `tool` is `transform` and is always `true` when transforming points that use a {@link module:esri/symbols/ObjectSymbol3DLayer 3D object symbol layer}.
   * @property {boolean} [toggleToolOnClick=true] - Indicates if the graphic being updated can be toggled between `transform` and `reshape` update options.
   * @instance
   * @type {Object}
   */
  @aliasOf("viewModel.defaultUpdateOptions")
  defaultUpdateOptions: UpdateOptions = null;

  //----------------------------------
  //  iconClass
  //----------------------------------

  /**
   * The Sketch widget's default CSS icon class.
   *
   * @name iconClass
   * @instance
   * @type {string}
   */
  @property()
  override iconClass = CSS.widgetIcon;

  //----------------------------------
  //  label
  //----------------------------------

  /**
   * The Sketch widget's default label.
   *
   * @name label
   * @instance
   * @type {string}
   */
  @property({
    aliasOf: { source: "messages.widgetLabel", overridable: true }
  })
  override label: string = undefined;

  //----------------------------------
  //  layer
  //----------------------------------

  /**
   * The {@link module:esri/layers/GraphicsLayer} associated with the Sketch widget. The Sketch widget adds new {@link module:esri/Graphic graphics} to this layer or can only update graphics
   * stored in this layer.
   *
   * @name layer
   * @instance
   * @type {module:esri/layers/GraphicsLayer}
   *
   */
  @aliasOf("viewModel.layer")
  layer: GraphicsLayer = null;

  //----------------------------------
  //  layout
  //----------------------------------

  /**
   * Determines the layout/orientation of the Sketch widget.
   *
   * @name layout
   * @since 4.10
   * @instance
   * @default horizontal
   * @type {"vertical"|"horizontal"}
   */
  @property({ type: ["horizontal", "vertical"] })
  layout: Layout = "horizontal";

  //----------------------------------
  //  messages
  //----------------------------------

  /**
   * The widget's message bundle
   *
   * @instance
   * @name messages
   * @type {Object}
   *
   * @ignore
   * @todo revisit doc
   */
  @property()
  @messageBundle("esri/widgets/Sketch/t9n/Sketch")
  messages: SketchMessages = null;

  //----------------------------------
  //  snappingOptions
  //----------------------------------

  /**
   * The {@link module:esri/views/interactive/snapping/SnappingOptions} for sketching. It supports {@link module:esri/views/interactive/snapping/SnappingOptions#selfEnabled self} and {@link module:esri/views/interactive/snapping/SnappingOptions#featureEnabled feature} snapping.
   *
   * @name snappingOptions
   * @instance
   * @autocast
   * @type {module:esri/views/interactive/snapping/SnappingOptions}
   *
   */
  @aliasOf("viewModel.snappingOptions")
  snappingOptions = new SnappingOptions();

  //----------------------------------
  //  state
  //----------------------------------

  /**
   * The Sketch widget's state.
   *
   * @name state
   * @instance
   * @type {"ready" | "disabled" | "active"}
   * @readonly
   *
   */
  @property()
  get state(): State {
    return this._selectionToolbar.activeToolInfo ? "active" : this.viewModel.state;
  }

  //----------------------------------
  //  updateGraphics
  //----------------------------------

  /**
   * An array of {@link module:esri/Graphic graphics} that are being updated by the Sketch widget.
   *
   * @name updateGraphics
   * @instance
   * @type {module:esri/core/Collection<module:esri/Graphic>}
   * @readonly
   */
  @aliasOf("viewModel.updateGraphics")
  updateGraphics: Collection<Graphic> = new Collection();

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * A reference to the {@link module:esri/views/MapView} or {@link module:esri/views/SceneView}. Set this to link the Sketch widget to a specific view.
   *
   * @name view
   * @instance
   * @type {module:esri/views/MapView | module:esri/views/SceneView}
   */
  @aliasOf("viewModel.view")
  view: IMapView | ISceneView = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for the Sketch widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/Sketch/SketchViewModel} class to access
   * all properties and methods on the Sketch widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/Sketch/SketchViewModel}
   */
  @property()
  @vmEvent(["create", "update", "undo", "redo"])
  // @ts-expect-error
  set viewModel(value: SketchViewModel) {
    if (value === this._get("viewModel")) {
      // do nothing on self-assignment
      return;
    }

    // #34489 - only cleanup if changing from '_defaultViewModel'
    // or changing from custom 'viewModel' to another custom 'viewModel'
    // Avoid calling if using '_defaultViewModel' to avoid lifecycle issues
    if (isNone(this._defaultViewModel) || this._defaultViewModel !== value) {
      this._cleanupViewModel();
    }

    this._set("viewModel", value);

    if (this.viewModel) {
      this._viewModelHandlesGroup = handlesGroup([
        this.viewModel.on("create", (event) => {
          this.scheduleRender();
          this._onCreateOperation(event);
        }),
        this.viewModel.on("update", () => this.scheduleRender()),
        this.viewModel.on("delete", (event) => this.emit("delete", event)),
        this.viewModel.on("undo", () => this.scheduleRender()),
        this.viewModel.on("redo", () => this.scheduleRender()),
        this.viewModel.watch("layer", (layer) => {
          this._selectionToolbar.layers = layer ? [layer] : null;
        }),
        this.viewModel.watch("view", (view) => {
          this._selectionToolbar.view = view?.type === "2d" ? view : null;
          this._setUpSnappingControls();
        }),
        this.viewModel.watch("state", () => this.notifyChange("state"))
      ]);
    }
  }

  //----------------------------------
  // visibleElements
  //----------------------------------

  /**
   * The visible elements that are displayed within the widget.
   * This provides the ability to turn individual elements of the widget's display on/off.
   *
   * @typedef {Object} module:esri/widgets/Sketch~VisibleElements
   *
   * @property {Object} [createTools] - The available sketch tools within the widget.
   * @property {boolean} [createTools.point] - Indicates whether to display the point sketch tool. Default is `true`.
   * @property {boolean} [createTools.polyline] - Indicates whether to display the polyline sketch tool. Default is `true`.
   * @property {boolean} [createTools.polygon] - Indicates whether to display the polygon sketch tool. Default is `true`.
   * @property {boolean} [createTools.rectangle] - Indicates whether to display the rectangle sketch tool. Default is `true`.
   * @property {boolean} [createTools.circle] - Indicates whether to display the circle sketch tool. Default is `true`.
   *
   * @property {Object} [selectionTools] - The available selection tools within the widget.
   * @property {boolean} [selectionTools."rectangle-selection"] - Indicates whether to display the `"rectangle-selection"` tool. Default is `true`.
   * @property {boolean} [selectionTools."lasso-selection"] - Indicates whether to display the `"lasso-selection"` tool. Default is `true`.
   *
   * @property {boolean} [undoRedoMenu] - Indicates whether to display the undo/redo menu within the widget. Default is `true`.
   *
   * @property {boolean} [settingsMenu] - Indicates whether to display the settings menu. Currently this menu contains snapping options. Default value is `true`.
   */

  /**
   * The visible elements that are displayed within the widget.
   * This property provides the ability to turn individual elements of the widget's display on/off.
   *
   * The image below displays the default Sketch widget with selection, undo/redo, and settings menu tools.
   *
   * ![sketch-selection-default](../assets/img/apiref/widgets/selection/default-selection-sketch.png)
   *
   * In comparison, this image shows how the widget displays with some of its tools not visible as
   * set in the example code snippet below.
   *
   * ![sketch-selection-default](../assets/img/apiref/widgets/selection/visible-elements-selection-sketch.png)
   *
   * @name visibleElements
   * @instance
   * @type {module:esri/widgets/Sketch~VisibleElements}
   * @autocast
   *
   * @example
   * // Setting the sketch's visible elements as below would result
   * // in removing the point and circle tools. It also removes the
   * // lasso-selection tool and settings menu.
   * sketch.visibleElements = {
   *   createTools: {
   *     point: false,
   *     circle: false
   *   },
   *   selectionTools:{
   *     "lasso-selection": false
   *   },
   *   settingsMenu: false
   * }
   */
  @property()
  visibleElements: VisibleElements = { ...DEFAULT_VISIBLE_ELEMENTS };

  @cast("visibleElements")
  protected castVisibleElements(value: Partial<VisibleElements>): VisibleElements {
    return {
      ...DEFAULT_VISIBLE_ELEMENTS,
      ...value,
      createTools: {
        ...DEFAULT_VISIBLE_ELEMENTS.createTools,
        ...value?.createTools
      },
      selectionTools: {
        ...DEFAULT_VISIBLE_ELEMENTS.selectionTools,
        ...value?.selectionTools
      }
    };
  }

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Create a graphic with the geometry specified in the `tool` parameter. When the first vertex of the graphic is added,
   * the [create](#event-create) event will start firing. The provided `tool` will become the [activeTool](#activeTool).
   *
   * @since 4.10
   * @method create
   * @instance
   *
   * @param {"point" | "polyline" | "polygon" | "rectangle" | "circle"} tool - Name of the create tool. Specifies the geometry for the graphic to be created.
   * @param {Object} [createOptions] - Options for the graphic to be created.
   * @param {"hybrid" | "freehand" | "click"} [createOptions.mode] - Specifies how the graphic can be created. The create mode applies only when creating
   * `polygon`, `polyline`, `rectangle` and `circle` geometries.
   *
   * **Possible Values**
   *
   * Value | Description |
   * ----- | ----------- |
   * hybrid | Vertices are added while the pointer is clicked or dragged. Applies to and is the default for `polygon` and `polyline`.
   * freehand | Vertices are added while the pointer is dragged. Applies to `polygon`, `polyline` `rectangle` and `circle`. Default for `rectangle` and `circle`.
   * click | Vertices are added when the pointer is clicked.
   *
   * @param {boolean} [createOptions.hasZ] - Controls whether the created geometry has z-values or not.
   * @param {number} [createOptions.defaultZ] - The default z-value of the newly created geometry. Ignored when `hasZ` is `false` or the layer's elevation mode is set to `absolute-height`.
   *
   * @example
   * // Call create method to create a polygon with freehand mode.
   * sketch.create("polygon", { mode: "freehand" });
   *
   * // listen to create event, only respond when event's state changes to complete
   * sketch.on("create", function(event) {
   *   if (event.state === "complete") {
   *     // remove the graphic from the layer associated with the Sketch widget
   *     // instead use the polygon that user created to query features that
   *     // intersect it.
   *     polygonGraphicsLayer.remove(event.graphic);
   *     selectFeatures(event.graphic.geometry);
   *   }
   * });
   */

  create(tool: CreateTool, options?: CreateOptions): void {
    this._activeCreateOptions = options || null;
    this.viewModel.create(tool, options);
  }

  /**
   * Initializes an update operation for the specified graphic(s) and fires [update](#event-update) event.
   *
   * @since 4.10
   * @method update
   * @instance
   * @param {module:esri/Graphic | module:esri/Graphic[]} graphics - A graphic or an array of graphics to be updated. Only graphics added to SketchViewModel's [layer](#layer) property can be updated.
   * @param {Object} [updateOptions] - Update options for the graphics to be updated.
   * @param {"transform" | "reshape" | "move"} [updateOptions.tool] - Name of the update tool. Specifies the update operation for the selected graphics. The provided tool will become the [activeTool](#activeTool).
   *
   * **Possible Values**
   *
   * Value | Description |
   * ----- | ----------- |
   * transform | This is the *default* tool for graphics with a {@link module:esri/geometry/Polygon polygon} geometry, {@link module:esri/geometry/Polyline polyline} geometry or graphics that use a {@link module:esri/symbols/ObjectSymbol3DLayer 3D object symbol layer} with a {@link module:esri/geometry/Point point} geometry. It allows one or multiple graphics to be scaled, rotated and moved by default. Its default behavior can be changed by setting the `enableRotation`, `enableScaling` or `preserveAspectRatio` arguments when calling the `update` method or setting them on the [defaultUpdateOptions](#defaultUpdateOptions) property when the Sketch widget initializes.
   * reshape | This tool allows the entire graphic or individual vertices of the graphic to be moved. Vertices can be added or removed. This tool can only be used with a single graphic that has a {@link module:esri/geometry/Polygon polygon} or {@link module:esri/geometry/Polyline polyline} geometry.
   * move | This is the *default* tool for graphics with a {@link module:esri/geometry/Point point} geometry that do not use a {@link module:esri/symbols/ObjectSymbol3DLayer 3D object symbol layer}. It should be used for specific cases where you just want to move selected `polygon` and `polyline` graphics without additional options. Additionally, the `move` tool does not support toggling to different modes, since the `move` operation is built into both the `transform` and `reshape` tools by default.
   *
   * @param {boolean} [updateOptions.enableRotation=true] - Indicates if the `rotation` operation will be enabled when updating graphics. Only applies if `tool` is `transform`.
   * @param {boolean} [updateOptions.enableScaling=true] - Indicates if the `scale` operation will be enabled when updating graphics. Only applies if `tool` is `transform`.
   * @param {boolean} [updateOptions.enableZ=true] -  Indicates if z-values can be modified when updating the graphic. When enabled, the height handle manipulator is displayed.
   * @param {boolean} [updateOptions.multipleSelectionEnabled=true] - Indicates whether more than one selection can be made at once.  This applies to the shift+click interaction with the `transform` tool.
   * @param {boolean} [updateOptions.preserveAspectRatio=false] - Indicates if the uniform scale operation will be enabled when updating graphics. `enableScaling`
   * must be set `true` when setting this property to `true`. Only applies if `tool` is `transform` and is always `true` when transforming points that use a {@link module:esri/symbols/ObjectSymbol3DLayer 3D object symbol layer}.
   * @param {boolean} [updateOptions.toggleToolOnClick=true] - Indicates if the graphic being updated can be toggled between `transform` and `reshape` update options.
   *
   * @return {Promise<void>} Resolves when the requested update tool has been loaded and is ready to use.
   *
   * @example
   * // start update operation for the selected graphic
   * // with transform tool. Only allow uniform scaling operation.
   * sketch.update([selectedGraphic], {
   *   tool: "transform",
   *   enableRotation: false,
   *   enableScaling: true,
   *   preserveAspectRatio: true,
   *   toggleToolOnClick: false
   * });
   *
   * @example
   * // Listen to sketch's update event to validate graphic's
   * // location while it is being reshaped or moved
   * sketch.on("update", onGraphicUpdate);
   * function onGraphicUpdate(event) {
   *   // get the graphic as it is being updated
   *   const graphic = event.graphics[0];
   *   // check if the graphic is intersecting school buffers
   *   intersects = geometryEngine.intersects(buffers, graphic.geometry);
   *
   *   // change the graphic symbol to valid or invalid symbol
   *   // depending the graphic location
   *   graphic.symbol = (intersects) ? invalidSymbol : validSymbol
   *
   *   // check if the update event's the toolEventInfo.type is move-stop or reshape-stop
   *   // user finished moving or reshaping the graphic, call complete method.
   *   // This changes update event state to complete.
   *   const toolType = event.toolEventInfo.type;
   *   if (event.toolEventInfo && (toolType === "move-stop" || toolType === "reshape-stop")) {
   *     if (!intersects) {
   *       sketch.complete();
   *     }
   *   } else if (event.state === "complete") {
   *       // graphic update has been completed
   *       // if the graphic is in a bad spot, call sketch's update method again
   *       // giving user a chance to correct the location of the graphic
   *       if ((!contains) || (intersects)) {
   *         sketch.update({
   *           tool: "reshape",
   *           graphics: [graphic],
   *           toggleToolOnClick: false
   *         });
   *       }
   *   }
   * }
   */
  update(graphicOrGraphics: Graphic | Graphic[], options?: UpdateOptions): Promise<void> {
    return this.viewModel.update(graphicOrGraphics, options);
  }

  /**
   * Completes the active operation and fires the [create](#event-create) or [update](#event-update) event
   * and changes the event's state to `complete`. If called in the middle of a create operation, `complete()` finishes
   * the active create operation and keeps the valid geometry.
   *
   * @method complete
   * @instance
   *
   */
  @aliasOf("viewModel.complete")
  complete(): void {}

  /**
   * Cancels the active operation and fires the [create](#event-create) or [update](#event-update) event.
   * If called in the middle of a create operation, `cancel()` discards
   * the partially created graphic.
   *
   * @since 4.10
   * @method cancel
   * @instance
   *
   */
  cancel(): void {
    this._selectionToolbar.cancel();
    this.viewModel.cancel();
  }

  /**
   * Incrementally undo actions recorded in the stack. Calling this method will fire the
   * [undo](#event-undo) event.
   * The undo/redo stack is for an individual sketch operation, meaning you can redo/undo actions while creating or updating a graphic.
   *
   * @method undo
   * @instance
   *
   */
  undo(): void {
    this.viewModel.undo();
    this.view?.focus();
  }

  /**
   * Incrementally redo actions recorded in the stack. Calling this method will fire the
   * [redo](#event-redo) event.
   * The undo/redo stack is for an individual sketch operation, meaning you can redo/undo actions while creating or updating a graphic.
   *
   * @method redo
   * @instance
   *
   */
  redo(): void {
    this.viewModel.redo();
    this.view?.focus();
  }

  /**
   * Deletes the selected graphics used in the update workflow. Calling this method will fire the
   * [delete](#event-delete) event.
   *
   * @method delete
   * @instance
   * @since 4.14
   *
   */
  @aliasOf("viewModel.delete")
  delete(): void {}

  override render(): VNode {
    const {
      label,
      layout,
      viewModel: { state }
    } = this;

    return (
      <div
        aria-label={label}
        class={this.classes(CSS.base, CSS.esriWidget, {
          [CSS.disabled]: state === "disabled",
          [CSS.verticalLayout]: layout === "vertical"
        })}
      >
        <div role="toolbar" class={CSS.panel}>
          {this.renderTopPanelContents()}
        </div>
        <div class={this.classes(CSS.panel, CSS.infoPanel)}>{this.renderInfoPanelContents()}</div>
      </div>
    );
  }

  protected renderTopPanelContents(): VNode {
    const sectionClasses = this.classes(CSS.section, CSS.toolSection);
    const { availableCreateTools, visibleElements } = this;

    return [
      <div role="menu" key="selection-button-container" class={sectionClasses}>
        {this.renderDefaultSelectionButton()}
        {this.renderSelectionToolbar()}
      </div>,
      availableCreateTools && availableCreateTools.length ? (
        <div role="menu" class={sectionClasses}>
          {this.renderDrawButtons()}
        </div>
      ) : null,
      visibleElements.undoRedoMenu ? (
        <div role="menu" key="undo-redo-menu-button-container" class={sectionClasses}>
          {this.renderUndoRedoMenuButtons()}
        </div>
      ) : null,
      visibleElements.settingsMenu ? (
        <div key="settings-menu-button-container" class={CSS.section}>
          {this.renderSettingsMenuButton()}
        </div>
      ) : null
    ];
  }

  protected renderInfoPanelContents(): VNode {
    // Menu takes visual priority
    if (this._menuOpen) {
      return this.renderSettingsMenu();
    }

    if (this.updateGraphics.length) {
      return [
        <div
          class={this.classes(CSS.section, CSS.infoSection, CSS.infoCountSection)}
          key="feature-count-container"
        >
          {this.renderFeatureCount()}
        </div>,
        <div class={this.classes(CSS.section, CSS.infoSection)} key="delete-button-container">
          {this.renderDeleteButton()}
        </div>
      ];
    }

    return undefined;
  }

  protected renderSettingsMenu(): VNode {
    const { settings } = this.messages;

    return [
      <div role="menu" class={CSS.menuContainer} key="settings-menu-container">
        <header class={CSS.menuHeader} key="settings-menu-header">
          <span class={CSS.menuTitle}>{settings}</span>
        </header>
        {this.renderSnappingControls()}
      </div>
    ];
  }

  protected renderSnappingControls(): VNode {
    if (isSome(this._snappingControls)) {
      return this._snappingControls.render();
    }

    return undefined;
  }

  protected renderFeatureCount(): VNode {
    const {
      layout,
      messages,
      updateGraphics: { length: count }
    } = this;

    const countLabel = substitute(count === 1 ? messages.featureCount : messages.featuresCount, {
      count
    });

    return (
      <div class={CSS.featureCountBadge} aria-label={countLabel}>
        <span class={CSS.featureCountNumber}>{layout === "vertical" ? count : countLabel}</span>
      </div>
    );
  }

  protected renderDeleteButton(): VNode {
    const title = this.messages.deleteFeature;

    return (
      <calcite-action
        bind={this}
        icon="trash"
        label={title}
        onclick={this.delete}
        scale="s"
        text={title}
        title={title}
      />
    );
  }

  protected renderDefaultSelectionButton(): VNode {
    if (!this.viewModel.updateOnGraphicClick) {
      return undefined;
    }

    const title = this.messages.selectFeature;

    return (
      <calcite-action
        active={this.state === "ready"}
        bind={this}
        icon="cursor"
        label={title}
        onclick={this._activateDefaultSelectTool}
        scale="s"
        text={title}
        title={title}
      />
    );
  }

  protected renderSelectionToolbar(): VNode {
    if (this.view?.type !== "2d") {
      return undefined;
    }

    return this._selectionToolbar.render();
  }

  protected renderDrawButtons(): VNode {
    const visibleCreateTools = this.visibleElements.createTools;

    return this.availableCreateTools.map((toolName) => {
      if (toolName === "point" && visibleCreateTools["point"]) {
        return this.renderPointButton();
      }

      if (toolName === "polyline" && visibleCreateTools["polyline"]) {
        return this.renderPolylineButton();
      }

      if (toolName === "polygon" && visibleCreateTools["polygon"]) {
        return this.renderPolygonButton();
      }

      if (toolName === "rectangle" && visibleCreateTools["rectangle"]) {
        return this.renderRectangleButton();
      }

      if (toolName === "circle" && visibleCreateTools["circle"]) {
        return this.renderCircleButton();
      }

      return undefined;
    });
  }

  protected renderPointButton(): VNode {
    const toolName = "point";
    const title = this.messages.drawPoint;

    return (
      <calcite-action
        active={this.activeTool === toolName}
        bind={this}
        icon="pin"
        label={title}
        onclick={() => this._activateCreateTool(toolName)}
        scale="s"
        text={title}
        title={title}
      />
    );
  }

  protected renderPolygonButton(): VNode {
    const toolName = "polygon";
    const title = this.messages.drawPolygon;

    return (
      <calcite-action
        active={this.activeTool === toolName}
        bind={this}
        icon="polygon"
        label={title}
        onclick={() => this._activateCreateTool(toolName)}
        scale="s"
        text={title}
        title={title}
      />
    );
  }

  protected renderPolylineButton(): VNode {
    const toolName = "polyline";
    const title = this.messages.drawPolyline;

    return (
      <calcite-action
        active={this.activeTool === toolName}
        bind={this}
        icon="line"
        label={title}
        onclick={() => this._activateCreateTool(toolName)}
        scale="s"
        text={title}
        title={title}
      />
    );
  }

  protected renderCircleButton(): VNode {
    const toolName = "circle";
    const title = this.messages.drawCircle;

    return (
      <calcite-action
        active={this.activeTool === toolName}
        bind={this}
        icon="circle"
        label={title}
        onclick={() => this._activateCreateTool(toolName)}
        scale="s"
        text={title}
        title={title}
      />
    );
  }

  protected renderRectangleButton(): VNode {
    const toolName = "rectangle";
    const title = this.messages.drawRectangle;

    return (
      <calcite-action
        active={this.activeTool === toolName}
        bind={this}
        icon="rectangle"
        label={title}
        onclick={() => this._activateCreateTool(toolName)}
        scale="s"
        text={title}
        title={title}
      />
    );
  }

  protected renderUndoRedoMenuButtons(): VNode {
    return [this.renderUndoButton(), this.renderRedoButton()];
  }

  protected renderUndoButton(): VNode {
    const title = this.messages.undo;

    return (
      <calcite-action
        disabled={!this.viewModel.canUndo()}
        bind={this}
        icon={isRTL(this.container) ? "redo" : "undo"}
        label={title}
        onclick={this.undo}
        scale="s"
        text={title}
        title={title}
      />
    );
  }

  protected renderRedoButton(): VNode {
    const title = this.messages.redo;

    return (
      <calcite-action
        disabled={!this.viewModel.canRedo()}
        bind={this}
        icon={isRTL(this.container) ? "undo" : "redo"}
        label={title}
        onclick={this.redo}
        scale="s"
        text={title}
        title={title}
      />
    );
  }

  protected renderSettingsMenuButton(): VNode {
    const title = this.messages.settings;

    return (
      <calcite-action
        active={this._menuOpen}
        bind={this}
        icon="gear"
        label={title}
        onclick={this._toggleMenu}
        scale="s"
        text={title}
        title={title}
      />
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  // Toggles tool if currently active
  private _activateCreateTool(toolName: CreateTool): void {
    if (this.activeTool === toolName) {
      this.cancel();
      return;
    }

    this._selectionToolbar.cancel();
    this.create(toolName);
  }

  private _onCreateOperation(event: CreateEvent): void {
    if (event.state !== "complete") {
      return;
    }

    const { creationMode } = this;
    const { type } = event;

    if (type === "create") {
      const { tool, graphic } = event as CreateEvent;
      const oldOptions = this._activeCreateOptions;
      this._activeCreateOptions = null;

      if (creationMode === "continuous") {
        this.create(tool, oldOptions);
      } else if (creationMode === "update") {
        this.update([graphic]);
      }
    }
  }

  private _toggleMenu(): void {
    this._menuOpen = !this._menuOpen;
    this.scheduleRender();
  }

  //--------------------------------------------------------------------------
  //  Selection
  //--------------------------------------------------------------------------

  private _onSelectionOperationComplete(event: SelectionCompleteEventInfo): void {
    const {
      viewModel: { defaultUpdateOptions }
    } = this;

    const { selection } = event;

    if (!event.aborted && selection.length) {
      // Reshaping multiple graphics is not supported
      // Instead of erroring out, we'll replace the tool
      // Still required to pass all other options
      const tool = defaultUpdateOptions.tool;
      const defaultTool = selection.length > 1 && tool === "reshape" ? "transform" : tool;
      this.update(selection, { ...defaultUpdateOptions, tool: defaultTool });
    }

    this.notifyChange("state");
  }

  private _activateDefaultSelectTool(): void {
    this.cancel();
    this.view?.focus();
  }

  /**
   * Destroy potential default view model and remove potential view model handles
   * @ignore
   */
  private _cleanupViewModel(): void {
    this._defaultViewModel = destroyMaybe(this._defaultViewModel);
    this._viewModelHandlesGroup = removeMaybe(this._viewModelHandlesGroup);
  }

  private _setUpSnappingControls(): void {
    const { snappingOptions, view } = this;

    this._snappingControls = destroyMaybe(this._snappingControls);

    if (!snappingOptions || !view) {
      return;
    }

    const snappingControls = new SnappingControls({
      snappingOptions,
      view,
      visibleElements: {
        header: false
      }
    });

    this._snappingControls = snappingControls;
  }
}

export default Sketch;
