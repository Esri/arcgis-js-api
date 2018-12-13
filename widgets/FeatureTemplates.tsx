/**
 * The FeatureTemplates widget is part of the overall editing workflow. Its main purpose is to display
 * {@link module:esri/layers/FeatureLayer#templates templates} from one or more {@link module:esri/layers/FeatureLayer feature layers}.
 * In addition to displaying feature layer templates, it is also possible to [filter](#filterFunction) and [group](#groupBy) templates
 * for an easier editing experience. The widget listens for an end user to select a specific {@link esri/widgets/FeatureTemplates/TemplateItem template}
 * in the widget. Its [select](#event:select)
 * event is fired and the resulting template information is returned. This widget can be used in conjunction with
 * {@link module:esri/layers/FeatureLayer#applyEdits FeatureLayer.applyEdits} to enable an end user to
 * update one of its feature layers.
 *
 * [![featureTemplates](../../assets/img/apiref/widgets/featureTemplates.png)](../sample-code/editing-applyedits/index.html)
 *
 *
 * @module esri/widgets/FeatureTemplates
 * @since 4.10
 * @beta
 *
 * @see [FeatureTemplates.tsx (widget view)]({{ JSAPI_ARCGIS_JS_API_URL }}/widgets/FeatureTemplates.tsx)
 * @see [FeatureTemplates.scss]({{ JSAPI_ARCGIS_JS_API_URL }}/themes/base/widgets/_FeatureTemplates.scss)
 * @see [Sample - Update FeatureLayer using ApplyEdits](../sample-code/editing-applyedits/index.html)
 * @see module:esri/widgets/FeatureTemplates/FeatureTemplatesViewModel
 * @see module:esri/widgets/FeatureTemplates/TemplateItem
 * @see module:esri/widgets/FeatureTemplates/TemplateItemGroup
 * @see module:esri/views/ui/DefaultUI
 * @see module:esri/layers/FeatureLayer
 * @see module:esri/layers/support/FeatureTemplate
 *
 * @example
 * const templates = new FeatureTemplates({
 *   container: "templatesDiv",
 *   layers: layers
 * });
 */

/// <amd-dependency path="esri/core/tsSupport/assignHelper" name="__assign" />
/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

// dojo
import * as i18n from "dojo/i18n!esri/widgets/FeatureTemplates/nls/FeatureTemplates";

// esri.core
import HandleOwner = require("esri/core/HandleOwner");

// esri.core.accessorSupport
import { aliasOf, declared, property, subclass } from "esri/core/accessorSupport/decorators";

// esri.core.libs.intersection-observer
import "../core/libs/intersection-observer/intersection-observer";

// esri.layers
import FeatureLayer = require("esri/layers/FeatureLayer");

// esri.widgets
import Widget = require("esri/widgets/Widget");

// esri.widgets.FeatureTemplates
import FeatureTemplatesViewModel = require("esri/widgets/FeatureTemplates/FeatureTemplatesViewModel");
import { Filter, GroupByType } from "esri/widgets/FeatureTemplates/interfaces";
import TemplateItem = require("esri/widgets/FeatureTemplates/TemplateItem");
import TemplateItemGroup = require("esri/widgets/FeatureTemplates/TemplateItemGroup");

// esri.widgets.support
import { accessibleHandler, renderable, tsx } from "esri/widgets/support/widget";

// maquette
import { VNode } from "maquette";

const thumbnailsKey = "thumbnails";

const CSS = {
  base: "esri-feature-templates",
  list: "esri-feature-templates__list",
  section: "esri-feature-templates__section",
  scroller: "esri-feature-templates__scroller",
  sectionHeader: "esri-feature-templates__section-header",
  item: "esri-feature-templates__list-item",
  itemSelected: "esri-feature-templates__list-item--selected",
  itemContainer: "esri-feature-templates__list-item-container",
  itemLabel: "esri-feature-templates__list-item-label",
  itemIcon: "esri-feature-templates__list-item-icon",
  noMatchesMessage: "esri-feature-templates__no-matches-message",
  noItemsMessage: "esri-feature-templates__no-items-message",
  filterContainer: "esri-feature-templates__filter-container",
  filterPlaceholder: "esri-feature-templates__filter-placeholder",
  filterInput: "esri-feature-templates__filter-input",
  filterPlaceholderText: "esri-feature-templates__filter-placeholder-text",
  loader: "esri-feature-templates__loader",

  // icon
  searchIcon: "esri-icon-search",

  // common
  widget: "esri-widget",
  heading: "esri-widget__heading",
  input: "esri-input"
};

interface FeatureTemplates extends Widget, HandleOwner {}

@subclass("esri.widgets.FeatureTemplates")
class FeatureTemplates extends declared(Widget, HandleOwner) {
  /**
   * The filter used when setting the [filterFunction](#filterFunction)
   * property. It takes an object containing a {@link module:esri/widgets/FeatureTemplates/TemplateItem#label name}
   * property of the {@link module:esri/widgets/FeatureTemplates/TemplateItem template item} and returns
   * whether or not to include it.
   *
   * @typedef {Function} FilterFunction
   * @param {Object} filterName - An object containing a `name` property.
   * @param {string} filterName.name - The {@link module:esri/widgets/FeatureTemplates/TemplateItem#label name}
   * of the {@link module:esri/widgets/FeatureTemplates/TemplateItem template item} to filter.
   *
   * @return {boolean} Function is a predicate, to test each element of the array.
   * Return `true` to keep {@link module:esri/widgets/FeatureTemplates/TemplateItem item} in the template widget, otherwise, `false`
   * to remove it.
   *
   * @example
   * // Filter and display templates only if their names contain the word `Street`
   * function myFilterFunction(filter) {
   *   let containsName = filter.name.includes("Street");
   *   return containsName;
   * }
   *
   * // Create the FeatureTemplates widget
   * templates = new FeatureTemplates({
   *   container: "templatesDiv",
   *   filterEnabled: false, // disable the default filter UI
   *   layers: [featureLayer], // in this example, one layer is used
   *   filterFunction: myFilterFunction
   * });
   */

  /**
   * The function used when setting the [groupBy](#groupBy) property. It is
   * used to customize the grouping of {@link module:esri/widgets/FeatureTemplates/TemplateItem template items}. This can aid
   * in managing various template items and how they display within the widget. This takes an object containing a
   * `template` and a `layer` property.
   *
   * @typedef {Function} GroupByFunction
   * @param {Object} grouping - An object containing the properties referenced below.
   *
   * @param {module:esri/layers/FeatureLayer} grouping.layer - {@link module:esri/layers/FeatureLayer} instance referenced in [layers](#layers) property.
   * @param {module:esri/layers/support/FeatureTemplate} grouping.template - {@link module:esri/layers/support/FeatureTemplate} associated with the `layer`.
   * @return {string | Object} Groups consist of a group `key` and `label`. These are shown in the UI. If both
   * the `key` and `label` are identical, return a `string`. Otherwise, return an `object` with
   * `key/name` properties. This gives finer control of the groups.
   *
   * @example
   * // This example shows using a function to check if
   * // the layer title contains the word 'military'. If so,
   * // return a group of items called "All Military Templates"
   * function customGroup(grouping) {
   *   // Consolidate all military layers
   *   if (grouping.layer.title.toLowerCase().indexOf("military") > -1) {
   *     return "All Military Templates"
   *   }
   * // Otherwise, group by layer title
   *   return grouping.layer.title;
   * }
   *
   * // Create the FeatureTemplates widget
   * templates = new FeatureTemplates({
   *   container: "templatesDiv",
   *   layers: layers,
   *   groupBy: customGroup
   * });
   *
   * @example
   * // group template items by layers.
   * // this function is as same as setting
   * // groupBy property to "layer" option.
   * function groupByLayer (grouping) {
   *   const group = {
   *     key: grouping.layer,
   *     name: grouping.layer.title
   *   };
   *   return group;
   * }
   *
   * // Create the FeatureTemplates widget
   * templates = new FeatureTemplates({
   *   container: "templatesDiv",
   *   layers: layers,
   *   groupBy: groupByLayer
   * });
   */

  /**
   * Fires when a {@link module:esri/widgets/FeatureTemplates/TemplateItem template item} is selected.
   *
   * @event module:esri/widgets/FeatureTemplates#select
   * @property {module:esri/widgets/FeatureTemplates/TemplateItem} item - The selected template item.
   * @property {module:esri/layers/support/FeatureTemplate} template - The feature template associated with the template item.
   *
   * @see [Sample - Update FeatureLayer using ApplyEdits](../sample-code/editing-applyedits/index.html)
   * @example
   * // Listen for when a template item is selected
   * templates.on("select", function(evtTemplate) {
   *   // Access the selected template item's attributes
   *   attributes = evtTemplate.template.prototype.attributes;
   *
   *   // Create a new feature with the selected template at cursor location
   *   const handler = view.on("click", function(event) {
   *     handler.remove(); // remove click event handler.
   *     event.stopPropagation(); // stop click event propagation
   *
   *     if (event.mapPoint) {
   *       // Create a new feature with the selected template item.
   *       editFeature = new Graphic({
   *         geometry: event.mapPoint,
   *           attributes: {
   *             "IncidentType": attributes.IncidentType
   *           }
   *       });
   *
   *       // Setup the applyEdits parameter with adds.
   *       const edits = {
   *         addFeatures: [editFeature]
   *       };
   *       featureLayer.applyEdits(params).then(function(editsResult) {
   *         if (editsResult.addFeatureResults.length > 0) {
   *           console.log("Created a new feature.")
   *         }
   *       });
   *     }
   *   });
   * });
   */
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @constructor
   * @extends module:esri/widgets/Widget
   * @constructor
   * @alias module:esri/widgets/FeatureTemplates
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                            that may be passed into the constructor.
   *
   * @example
   * // Typical usage
   * const templates = new FeatureTemplates({
   *   container: "templatesDiv",
   *   layers: layers
   * });
   */
  constructor(params?: any) {
    super();

    this._handleItemClick = this._handleItemClick.bind(this);
    this._handleInputChange = this._handleInputChange.bind(this);
    this._afterItemCreateOrUpdate = this._afterItemCreateOrUpdate.bind(this);
    this._afterItemRemoved = this._afterItemRemoved.bind(this);
    this._afterRootCreate = this._afterRootCreate.bind(this);
  }

  postInitialize(): void {
    const nameBasedFilter: Filter = ({ name }) =>
      !this._filterText || name.toLowerCase().indexOf(this._filterText.toLowerCase()) > -1;

    if (!this.filterFunction) {
      this.filterFunction = nameBasedFilter;
    }
  }

  destroy(): void {
    if (this._iconIntersectionObserver) {
      this._iconIntersectionObserver.disconnect();
      this._iconIntersectionObserver = null;
    }
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _iconIntersectionObserver: IntersectionObserver;

  private _filterText: string = null;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  filterEnabled
  //----------------------------------

  /**
   * When `true`, displays the template [filter](#filterFunction).
   *
   * ![featureTemplatesFilter](../../assets/img/apiref/widgets/featureTemplatesFilter.png)
   *
   * @name filterEnabled
   * @type boolean
   * @instance
   * @default true
   *
   */
  @property()
  @renderable()
  filterEnabled: boolean = true;

  //----------------------------------
  //  filterFunction
  //----------------------------------

  /**
   * {@link module:esri/widgets/FeatureTemplates~FilterFunction function} can be defined to help filter
   * {@link module:esri/widgets/FeatureTemplates/TemplateItem template items} within the widget.
   * A custom function can be used to aid when searching for templates. It takes a function which passes in
   * an object containing a {@link module:esri/widgets/FeatureTemplates/TemplateItem#label name}
   * property of the {@link module:esri/widgets/FeatureTemplates/TemplateItem template item}.
   *
   * ![featureTemplatesFilterFunction](../../assets/img/apiref/widgets/featureTemplatesFilterFunction.png)
   *
   * @name filterFunction
   * @type {module:esri/widgets/FeatureTemplates~FilterFunction}
   * @instance
   *
   * @example
   * // Filter and display templates only if their names contain the word `Street`
   * function myFilterFunction(filter) {
   *   let containsName = filter.name.includes("Street");
   *   return containsName;
   * }
   *
   * // Create the FeatureTemplates widget
   * templates = new FeatureTemplates({
   *   container: "templatesDiv",
   *   filterEnabled: false, // disable the default filter UI
   *   layers: [featureLayer], // in this example, one layer is used
   *   filterFunction: myFilterFunction
   * });
   */
  @aliasOf("viewModel.filterFunction")
  filterFunction: Filter = null;

  //----------------------------------
  //  groupBy
  //----------------------------------

  /**
   * It is possible to group {@link module:esri/widgets/FeatureTemplates/TemplateItem template items}. This can aid
   * in managing various template items and how they display within the widget. The values are discussed below.
   *
   * Type | Description | Example
   * ----- | ----------- | -------
   * layer | This is the *default* grouping. Groups template items by layers. | ![featureTemplatesGroupByLayer](../../assets/img/apiref/widgets/groupByLayers.png)
   * geometry | Groups template items by geometry type. | ![FeatureTemplatesGroupByGeometry](../../assets/img/apiref/widgets/groupByGeometry.png)
   * none | The widget displays everything in one list with no grouping. | ![featureTemplatesGroupByLayer](../../assets/img/apiref/widgets/groupByNone.png)
   * {@link module:esri/widgets/FeatureTemplates~GroupByFunction} | Custom function that takes an object containing a {@link module:esri/layers/support/FeatureTemplate} and {@link module:esri/layers/FeatureLayer}. | ![FeatureTemplatesGroupByCustomGroupFunction](../../assets/img/apiref/widgets/groupCustomGroup.png)
   *
   * @name groupBy
   * @type {string | module:esri/widgets/FeatureTemplates~GroupByFunction}
   * @instance
   * @default layer
   *
   * @example
   * // This example shows using a function to check if
   * // the layer title contains the word 'military'. If so,
   * // return a group of items called "All Military Templates"
   * function customGroup(grouping) {
   *   // Consolidate all military layers
   *   if (grouping.layer.title.toLowerCase().indexOf("military") > -1) {
   *     return "All Military Templates"
   *   }
   * // Otherwise, group by layer title
   *   return grouping.layer.title;
   * }
   *
   * // Create the FeatureTemplates widget
   * templates = new FeatureTemplates({
   *   container: "templatesDiv",
   *   layers: layers,
   *   groupBy: customGroup
   * });
   */
  @aliasOf("viewModel.groupBy")
  groupBy: GroupByType = null;

  //----------------------------------
  //  layers
  //----------------------------------

  /**
   * An array of {@link module:esri/layers/FeatureLayer Featurelayers}
   * to display within the widget. The order in which these layers are
   * set in the array dictates how they display within the widget.
   *
   * ::: esri-md class="panel trailer-1"
   * The widget is designed to only display layers that are enabled for editing.
   * It will not display layers that are enabled to only edit attributes.
   * :::
   *
   * @name layers
   * @type {module:esri/layers/FeatureLayer[]}
   * @instance
   *
   * @example
   * // The layers to display within the widget
   * let militaryUnits = new FeatureLayer({
   *   url: "http://sampleserver6.arcgisonline.com/arcgis/rest/services/Military/FeatureServer/2"
   * });
   *
   * let militaryHostile = new FeatureLayer({
   *   url: "http://sampleserver6.arcgisonline.com/arcgis/rest/services/Military/FeatureServer/6"
   * });
   *
   * let layers = [militaryUnits, militaryHostile];
   *
   * // Create FeatureTemplates widget
   * templates = new FeatureTemplates({
   *   container: "templatesDiv",
   *   layers: layers
   * });
   */
  @aliasOf("viewModel.layers")
  layers: FeatureLayer[] = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/FeatureTemplates/FeatureTemplatesViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/FeatureTemplates/FeatureTemplatesViewModel}
   * @autocast
   */
  @property()
  @renderable(["viewModel.items", "viewModel.state"])
  viewModel: FeatureTemplatesViewModel = new FeatureTemplatesViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  render(): VNode {
    const {
      _filterText,
      viewModel: { items, state }
    } = this;

    return (
      <div
        class={this.classes(CSS.base, CSS.widget)}
        aria-label={i18n.widgetLabel}
        afterCreate={this._afterRootCreate}
      >
        {state === "loading"
          ? this.renderLoader()
          : state === "ready"
            ? items.length === 0 && !_filterText
              ? this.renderNoItems()
              : [this.filterEnabled ? this.renderFilterInput() : null, this.renderItems()]
            : null}
      </div>
    );
  }

  private _afterRootCreate(node: Element): void {
    this._iconIntersectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const node = entry.target;

            if (!node["data-has-icon"]) {
              node["data-has-icon"] = true;
              const item = node["data-item"] as TemplateItem;

              item.fetchThumbnail().then(() => {
                if (item.thumbnail) {
                  node.appendChild(item.thumbnail);
                }
              });
            }

            observer.unobserve(node);
          }
        });
      },
      {
        root: node
      }
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Protected Methods
  //
  //--------------------------------------------------------------------------

  protected renderFilterInput(): VNode {
    const placeholderId = `${this.id}-placeholder`;

    return (
      <div class={CSS.filterContainer} key="filter">
        <input
          aria-labelledby={placeholderId}
          class={this.classes(CSS.input, CSS.filterInput)}
          oninput={this._handleInputChange}
          type="search"
        />
        {!this._filterText ? (
          <div class={CSS.filterPlaceholder} id={placeholderId} key="placeholder">
            <span class={CSS.searchIcon} aria-hidden="true" />
            <div class={CSS.filterPlaceholderText}>{i18n.filterPlaceholder}</div>
          </div>
        ) : null}
      </div>
    );
  }

  protected renderItems(): VNode {
    const { filterFunction, items, groupBy } = this.viewModel;

    this.handles.remove(thumbnailsKey);

    if (filterFunction && items.length === 0) {
      return (
        <div class={CSS.noMatchesMessage} key="no-matches">
          {i18n.noMatches}
        </div>
      );
    }

    if (groupBy === "none") {
      return (
        <ul class={this.classes(CSS.list, CSS.scroller)} key="item-container">
          {items.map((item) => this.renderItem(item as TemplateItem))}
        </ul>
      );
    }

    return this.renderItemSections(items as TemplateItemGroup[]);
  }

  protected renderItemSections(groups: TemplateItemGroup[]): VNode {
    return (
      <div class={CSS.scroller} key="item-container">
        {groups.map((group) => this.renderItemSection(group))}
      </div>
    );
  }

  protected renderItemSection(group: TemplateItemGroup): VNode {
    const headingId = `${group.uid}-heading`;

    return (
      <section aria-labelledby={headingId} class={CSS.section} key={group.name}>
        <div aria-level="1" id={headingId} role="heading" class={this.classes(CSS.sectionHeader)}>
          {this.renderLabel(group.name)}
        </div>
        <ul class={CSS.list}>{group.items.map((item) => this.renderItem(item, group))}</ul>
      </section>
    );
  }

  protected renderItem(item: TemplateItem, group?: TemplateItemGroup): VNode {
    this.handles.add(item.watch("thumbnail", () => this.scheduleRender()), thumbnailsKey);

    const key = `${item.layer.uid}__${item.label}`;

    return (
      <li
        aria-level={group ? "2" : ""}
        class={CSS.item}
        data-item={item}
        key={key}
        onclick={this._handleItemClick}
        onkeydown={this._handleItemClick}
        tabIndex={0}
      >
        <div class={CSS.itemContainer}>
          <div
            class={CSS.itemIcon}
            afterCreate={this._afterItemCreateOrUpdate}
            afterUpdate={this._afterItemCreateOrUpdate}
            afterRemoved={this._afterItemRemoved}
            data-item={item}
            data-has-icon={false}
          />
          <div class={CSS.itemLabel}>{this.renderLabel(item.label)}</div>
        </div>
      </li>
    );
  }

  protected renderLabel(label: string): VNode | string {
    const { _filterText } = this;

    if (!_filterText) {
      return label;
    }

    const lowercasedLabel = label.toLowerCase();
    const lowercasedFilter = _filterText.toLowerCase();

    const filterStartIndex = lowercasedLabel.indexOf(lowercasedFilter);

    if (filterStartIndex === -1) {
      return label;
    }

    const start = label.substring(0, filterStartIndex);
    const match = label.substr(filterStartIndex, _filterText.length);
    const end = label.substring(filterStartIndex + _filterText.length);

    return (
      <span>
        {start}
        <strong>{match}</strong>
        {end}
      </span>
    );
  }

  protected renderLoader(): VNode {
    return <div class={CSS.loader} key="loader" />;
  }

  protected renderNoItems(): VNode {
    return (
      <div class={CSS.noItemsMessage} key="no-items">
        <h2 class={CSS.heading}>{i18n.noItems}</h2>
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  @accessibleHandler()
  protected _handleItemClick(event: Event): void {
    const listItem = event.currentTarget as HTMLLIElement;
    const item = listItem["data-item"] as TemplateItem;

    this.emit("select", { item, template: item.template });
  }

  protected _handleInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    this._filterText = input.value;
    this.viewModel.refresh();
  }

  protected _afterItemCreateOrUpdate(node: HTMLElement): void {
    this._iconIntersectionObserver.observe(node);
  }

  protected _afterItemRemoved(node: HTMLElement): void {
    this._iconIntersectionObserver.unobserve(node);
  }
}

export = FeatureTemplates;
