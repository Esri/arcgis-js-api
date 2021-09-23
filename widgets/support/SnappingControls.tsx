/**
 * ## Overview
 *
 * The SnappingControls widget provides a user interface to use alongside the {@link module:esri/views/interactive/snapping/SnappingOptions} class. `SnappingOptions` is a property in {@link module:esri/widgets/Sketch#snappingOptions Sketch}, {@link module:esri/widgets/Sketch/SketchViewModel#snappingOptions SketchViewModel}, {@link module:esri/widgets/Editor#snappingOptions Editor}, and {@link module:esri/widgets/Editor/EditorViewModel#snappingOptions EditorViewModel}.
 *
 * This widget has been integrated as part of the {@link module:esri/widgets/Sketch} widget. Therefore, it will be automatically included when loading the Sketch widget and no additional work is needed on the end of the developer.
 *
 * Take a look at the SnappingControls in the Sketch widget with the [sketch-geometries](../sample-code/sketch-geometries/index.html) sample.<br>
 * [![sketch-geometries](../assets/img/apiref/widgets/snapping-controls/sketch-snapping-controls.png)](../sample-code/sketch-geometries/index.html)
 *
 * ## Using the widget
 *
 * The SnappingControls widget can be used with the {@link module:esri/views/MapView} like any other widget. However, this widget is dependent on the {@link module:esri/views/interactive/snapping/SnappingOptions} class. Currently, this is only available as a property in the {@link module:esri/widgets/Sketch#snappingOptions Sketch} and {@link module:esri/widgets/Editor#snappingOptions Editor} widgets, in addition to their respective view models. This means that the SnappingControls widget cannot be utilized as a standalone widget, unless it is being used in conjunction with these supported classes.
 * To use this widget with the {@link module:esri/widgets/Editor}, {@link module:esri/widgets/Editor/EditorViewModel} or {@link module:esri/widgets/Sketch/SketchViewModel}, it must be instantiated and its [snappingOptions](#snappingOptions) property must be set to either the {@link module:esri/widgets/Editor#snappingOptions Editor's}, {@link module:esri/widgets/Editor/EditorViewModel#snappingOptions EditorViewModel's}, or {@link module:esri/widgets/Sketch/SketchViewModel#snappingOptions SketchViewModel's} `snappingOptions` property.
 *
 * The following code snippet demonstrates how to use SnappingControls within the Editor widget.
 *
 * ```js
 * require(["esri/widgets/Editor", "esri/widgets/support/SnappingControls"], (Editor, SnappingControls) => {
 *   const editor = new Editor({
 *     view: view
 *   });
 *
 *   // create a new instance of the SnappingControls widget
 *   const snappingControls = new SnappingControls({
 *     view: view,
 *     snappingOptions: editor.snappingOptions  // set the Editor's snappingOptions property
 *   });
 *
 *   view.ui.add(editor, "top-right");  // adds the Editor widget to the view
 *   view.ui.add(snappingControls, "top-left"); // adds the SnappingControls widget to the view
 *
 * });
 * ```
 *
 * This widget will automatically detect any layers on the {@link module:esri/Map} that support snapping and the {@link module:esri/widgets/support/SnappingControls~VisibleElements layerlist} populates with these {@link module:esri/views/interactive/snapping/FeatureSnappingLayerSource FeatureSnappingLayerSources}. By default, these layers will be disabled for feature snapping. The layers will be enabled for snapping when a user clicks on the layer title in the layerlist. If there is a desire for these layers to be enabled automatically, set {@link module:esri/views/interactive/snapping/FeatureSnappingLayerSource#enabled enabled} as `true`.
 *
 * [![widgets-editor-basic](../assets/img/apiref/widgets/snapping-controls/snapping-controls-editor.png)](../sample-code/widgets-editor-basic/index.html)
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 * * Layer types currently supported for snapping include: {@link module:esri/layers/FeatureLayer FeatureLayer}, {@link module:esri/layers/GraphicsLayer GraphicsLayer},
 * {@link module:esri/layers/GeoJSONLayer GeoJSONLayer}, {@link module:esri/layers/WFSLayer}, {@link module:esri/layers/CSVLayer CSVLayer}, and {@link module:esri/layers/SubtypeGroupLayer}.
 * :::
 *
 * @module esri/widgets/support/SnappingControls
 *
 * @since 4.21
 * @see [SnappingControls.tsx (widget view)[deprecated since 4.21]]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/support/SnappingControls.tsx)
 * @see [SnappingControls.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_SnappingControls.scss)
 * @see module:esri/views/interactive/snapping/SnappingOptions
 * @see module:esri/widgets/Sketch
 * @see module:esri/views/interactive/snapping/FeatureSnappingLayerSource
 * @see [Sample - Sketch temporary geometries](../sample-code/sketch-geometries/index.html)
 * @see [Sample - Snapping with Sketch widget and Magnifier](../sample-code/sketch-snapping-magnifier/index.html)
 *
 * @example
 * // Create a new instance of SketchViewModel
 * const sketchViewModel = new SketchViewModel({
 *   view: view,
 *   layer: graphicsLayer
 * });
 *
 * // Create a new instance of the SnappingControls widget
 * const snappingControls = new SnappingControls({
 *   view: view,
 *   snappingOptions: sketchViewModel.snappingOptions
 * });
 */

// esri.core
import Collection from "esri/../core/Collection";
import { destroyMaybe, isNone, Maybe } from "esri/../core/maybe";

// esri.core.accessorSupport
import { aliasOf, cast, subclass, property } from "esri/../core/accessorSupport/decorators";

// esri.t9n
import CommonMessages from "esri/../t9n/common";

// esri.views
import IMapView from "esri/../views/IMapView";
import { ISceneView } from "esri/../views/ISceneView";

// esri.views.interactive.snapping
import SnappingOptions from "esri/../views/interactive/snapping/SnappingOptions";

// esri.widgets
import Widget from "esri/Widget";

// esri.widgets.support
import { VNode } from "esri/widgets/interfaces";
import { messageBundle, tsx, WidgetProperties } from "esri/widgets/widget";

// esri.widgets.support.SnappingControls
import SnappingControlsViewModel from "esri/widgets/SnappingControls/SnappingControlsViewModel";
import { SnappingListItem } from "esri/widgets/SnappingControls/SnappingListItem";

// esri.widgets.support.SnappingControls.t9n
import SnappingControlsMessages from "esri/widgets/SnappingControls/t9n/SnappingControls";

interface VisibleElements {
  header?: boolean;
  enabledToggle?: boolean;
  selfEnabledToggle?: boolean;
  featureEnabledToggle?: boolean;
  layerList?: boolean;
}

const DEFAULT_VISIBLE_ELEMENTS: VisibleElements = {
  header: true,
  enabledToggle: true,
  selfEnabledToggle: true,
  featureEnabledToggle: true,
  layerList: true
};

type RequiredConstructProperties = {
  snappingOptions: SnappingOptions;
  view: IMapView | ISceneView;
};

type WidgetConstructProperties = WidgetProperties<SnappingControlsViewModel> & {
  visibleElements?: VisibleElements;
};

type ConstructProperties = RequiredConstructProperties & WidgetConstructProperties;

const CSS = {
  base: "esri-snapping-controls",
  container: "esri-snapping-controls__container",
  panel: "esri-snapping-controls__panel",
  item: "esri-snapping-controls__item",
  toggleBlock: "esri-snapping-controls__toggle-block",
  nestedContainer: "esri-snapping-controls__nested-container",

  // common
  disabled: "esri-disabled",
  esriWidget: "esri-widget",
  widgetIcon: "esri-icon-vertex-gps"
};

@subclass("esri.widgets.support.SnappingControls")
class SnappingControls extends Widget<WidgetConstructProperties> implements ConstructProperties {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @constructor
   * @alias module:esri/widgets/support/SnappingControls
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   */
  constructor(properties: ConstructProperties, parentNode?: string | Element) {
    super(
      (() => {
        // avoid setting view, viewModel, and snappingOptions through Accessor
        const { view, viewModel, snappingOptions, ...widgetProperties } = properties;
        return widgetProperties;
      })(),
      parentNode
    );

    if (properties?.viewModel) {
      this.viewModel = properties.viewModel;
    } else {
      this._defaultViewModel = new SnappingControlsViewModel({
        snappingOptions: properties.snappingOptions,
        view: properties.view
      });
      this.viewModel = this._defaultViewModel;
    }
  }

  override destroy(): void {
    this._defaultViewModel = destroyMaybe(this._defaultViewModel);
  }

  protected override loadDependencies(): Promise<any> {
    return Promise.all([
      import("@esri/calcite-components/dist/custom-elements/bundles/action"),
      import("@esri/calcite-components/dist/custom-elements/bundles/block"),
      import("@esri/calcite-components/dist/custom-elements/bundles/icon"),
      import("@esri/calcite-components/dist/custom-elements/bundles/label"),
      import("@esri/calcite-components/dist/custom-elements/bundles/panel"),
      import("@esri/calcite-components/dist/custom-elements/bundles/pick-list"),
      import("@esri/calcite-components/dist/custom-elements/bundles/switch")
    ]);
  }

  //----------------------------------
  // visibleElements typedef
  //----------------------------------

  /**
   * The visible elements that are displayed within the widget.
   * This provides the ability to toggle visibility for individual elements within the widget.
   *
   * @typedef {Object} module:esri/widgets/support/SnappingControls~VisibleElements
   *
   * @property {boolean} [header] - Indicates whether to display the header. Default is `true`.
   *
   * @property {boolean} [enabledToggle] - Indicates whether to display the `enabledToggle` (Enable snapping). Default is `true`. This toggles
   * the {@link module:esri/views/interactive/snapping/SnappingOptions#enabled SnappingOptions.enabled} property.
   *
   * @property {boolean} [selfEnabledToggle] - Indicates whether to display the `selfEnabledToggle` (Geometry guides). Default is `true`. This toggles
   * the {@link module:esri/views/interactive/snapping/SnappingOptions#selfEnabled SnappingOptions.selfEnabled} property.
   *
   * @property {boolean} [featureEnabledToggle] - Indicates whether to display the `featureEnabledToggle` (Feature to feature). Default is `true`. This toggles
   * the {@link module:esri/views/interactive/snapping/SnappingOptions#featureEnabled SnappingOptions.featureEnabled} property.
   *
   * @property {boolean} [layerList] - Indicates whether to display the {@link module:esri/views/interactive/snapping/FeatureSnappingLayerSource} layerList. Default is `true`. The layerlist provides the available layer sources supported for snapping.
   */

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  label
  //----------------------------------

  /**
   * The SnappingControls widget's default label.
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
  //  messages
  //----------------------------------

  /**
   * The widget's message bundle.
   *
   * @instance
   * @name messages
   * @type {Object}
   *
   * @ignore
   */
  @property()
  @messageBundle("esri/widgets/support/SnappingControls/t9n/SnappingControls")
  messages: SnappingControlsMessages = null;

  //----------------------------------
  //  messagesCommon
  //----------------------------------

  /**
   * @name messagesCommon
   * @instance
   * @type {Object}
   *
   * @ignore
   */
  @property()
  @messageBundle("esri/t9n/common")
  messagesCommon: CommonMessages = null;

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
  snappingOptions: SnappingOptions = null;

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * The view from which the widget will operate.
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
   * The view model for the SnappingControls widget. This class contains all the logic, (ie. properties and methods) that control the widget's behavior. See the {@link module:esri/widgets/support/SnappingControls/SnappingControlsViewModel} class to access
   * all of the properties and methods on the SnappingControls widget.
   *
   * @name viewModel
   * @instance
   * @autocast
   * @type {module:esri/widgets/support/SnappingControls/SnappingControlsViewModel}
   */
  @property()
  // @ts-expect-error
  set viewModel(value: SnappingControlsViewModel) {
    if (value === this._get("viewModel")) {
      // do nothing on self-assignment
      return;
    }

    if (isNone(this._defaultViewModel) || this._defaultViewModel !== value) {
      this._defaultViewModel = destroyMaybe(this._defaultViewModel);
    }

    this._set("viewModel", value);
  }

  /**
   * The visible elements that are displayed within the widget.
   * This property provides the ability to turn individual elements of the widget's display on/off.
   *
   * The image below displays the default SnappingControls widget with all visible elements visible.
   *
   * ![snapping-controls-default](../assets/img/apiref/widgets/snapping-controls/snapping-controls-visible-elements-default.png)
   *
   * In comparison, the following image displays the widget with the feature enabled snapping toggle
   * and the feature snapping layer source layerList turned off.
   *
   * ![snapping-controls-example](../assets/img/apiref/widgets/snapping-controls/snapping-controls-visible-elements-example.png)
   *
   * @name visibleElements
   * @instance
   * @type {module:esri/widgets/support/SnappingControls~VisibleElements}
   * @autocast
   *
   * @example
   * // This removes the feature enabled snapping toggle and the layerlist.
   * snappingControls.visibleElements = {
   *   featureEnabledToggle: false,
   *   layerList: false
   * }
   */
  @property()
  visibleElements: VisibleElements = { ...DEFAULT_VISIBLE_ELEMENTS };

  @cast("visibleElements")
  protected castVisibleElements(value: Partial<VisibleElements>): VisibleElements {
    return { ...DEFAULT_VISIBLE_ELEMENTS, ...value };
  }

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  override render(): VNode {
    const {
      label,
      visibleElements: { header: headerVisible }
    } = this;

    return (
      <div aria-label={label} class={this.classes(CSS.base, CSS.esriWidget)}>
        <div class={CSS.container}>
          {headerVisible ? this.renderHeaderView() : this.renderContent()}
        </div>
      </div>
    );
  }

  protected renderHeaderView(): VNode {
    return (
      <calcite-panel heading={this.label} class={CSS.panel}>
        {this.renderContent()}
      </calcite-panel>
    );
  }

  protected renderContent(): VNode[] {
    return [this.renderToggles(), this.renderLayerList()];
  }

  protected renderToggles(): VNode {
    return (
      <calcite-block class={CSS.toggleBlock} open>
        {this.renderEnabledToggle()}
        <div class={CSS.nestedContainer}>
          {this.renderSelfEnabledToggle()}
          {this.renderFeatureEnabledToggle()}
        </div>
      </calcite-block>
    );
  }

  protected renderEnabledToggle(): VNode {
    if (!this.visibleElements.enabledToggle) {
      return undefined;
    }

    const {
      messages: { enableSnapping },
      viewModel: {
        snappingOptions: { enabled, enabledToggled }
      }
    } = this;

    return (
      <calcite-label layout="inline-space-between">
        {enableSnapping}
        <calcite-switch
          switched={enabled}
          disabled={enabledToggled}
          bind={this}
          onCalciteSwitchChange={this._enableSnappingSwitchChange}
        />
      </calcite-label>
    );
  }

  protected renderSelfEnabledToggle(): VNode {
    if (!this.visibleElements.selfEnabledToggle) {
      return undefined;
    }

    const {
      messages: { geometryGuides },
      viewModel: {
        snappingOptions: { enabled, selfEnabled, enabledToggled }
      }
    } = this;

    return (
      <calcite-label layout="inline-space-between">
        {geometryGuides}
        <calcite-switch
          switched={selfEnabled}
          disabled={enabledToggled || !enabled}
          bind={this}
          onCalciteSwitchChange={this._selfEnabledSwitchChange}
        />
      </calcite-label>
    );
  }

  protected renderFeatureEnabledToggle(): VNode {
    if (!this.visibleElements.featureEnabledToggle) {
      return undefined;
    }

    const {
      messages: { featureToFeature },
      viewModel: {
        snappingOptions: { enabled, featureEnabled, enabledToggled }
      }
    } = this;

    return (
      <calcite-label layout="inline-space-between">
        {featureToFeature}
        <calcite-switch
          switched={featureEnabled}
          disabled={enabledToggled || !enabled}
          bind={this}
          onCalciteSwitchChange={this._featureEnabledSwitchChange}
        />
      </calcite-label>
    );
  }

  protected renderLayerList(): VNode {
    if (!this.visibleElements.layerList) {
      return undefined;
    }

    const {
      messages: { snappingLayers, searchLayers }
    } = this;

    return (
      <calcite-block heading={snappingLayers} open collapsible>
        <calcite-pick-list
          multiple
          bind={this}
          onCalciteListChange={this._layerListChange}
          filterEnabled={this.viewModel.layerListViewModel.operationalItems.length >= 10}
          filter-placeholder={searchLayers}
        >
          {this.renderLayerListItemCollection(this.viewModel.layerListViewModel.operationalItems)}
        </calcite-pick-list>
      </calcite-block>
    );
  }

  protected renderLayerListItemCollection(items: Collection<SnappingListItem>): VNode[] {
    return items
      .map((item) =>
        item.children.length > 0
          ? this.renderLayerListItemGroup(item)
          : this.renderLayerListItem(item)
      )
      .toArray();
  }

  protected renderLayerListItem(listItem: SnappingListItem): VNode {
    const {
      messages: { untitledLayer }
    } = this;

    const label = listItem.title || untitledLayer;
    const hasChildren = listItem.children?.length > 0;
    const selected = listItem.enabled;

    return (
      <calcite-pick-list-item
        slot={hasChildren ? "parent-item" : null}
        key={`${this.id}-pick-list-item-${listItem.uid}`}
        label={label}
        value={listItem.layer.id}
        selected={selected}
      />
    );
  }

  protected renderLayerListItemGroup(listItem: SnappingListItem): VNode {
    const title = listItem.title || this.messages.untitledLayer;

    return (
      <calcite-pick-list-group group-title={title}>
        {[...this.renderLayerListItemCollection(listItem.children)]}
      </calcite-pick-list-group>
    );
  }

  private _enableSnappingSwitchChange(event: CustomEvent<any>): void {
    this.snappingOptions.enabled = event.detail.switched;
  }

  private _featureEnabledSwitchChange(event: CustomEvent<any>): void {
    this.snappingOptions.featureEnabled = event.detail.switched;
  }

  private _selfEnabledSwitchChange(event: CustomEvent<any>): void {
    this.snappingOptions.selfEnabled = event.detail.switched;
  }

  private _layerListChange(event: CustomEvent<any>): void {
    const selectedListItems: Map<string, HTMLCalcitePickListItemElement> = event.detail;
    this.viewModel.updateEnabledFeatureSources([...selectedListItems.keys()]);
  }

  private _defaultViewModel: Maybe<SnappingControlsViewModel> = null;
}

export default SnappingControls;
