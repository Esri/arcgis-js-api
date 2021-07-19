// esri.libs
import { VNode, VNodeChild } from "esri/../libs/maquette";

// esri.widgets.support
import { Heading, HeadingLevel } from "esri/support/Heading";
import { tsx } from "esri/support/jsxFactory";
import { classes, isActivationKey } from "esri/support/widgetUtils";

const CSS = {
  base: "esri-item-list",
  list: "esri-item-list__list",
  group: "esri-item-list__group",
  scroller: "esri-item-list__scroller",
  groupHeader: "esri-item-list__group-header",
  item: "esri-item-list__list-item",
  itemSelected: "esri-item-list__list-item--selected",
  itemContainer: "esri-item-list__list-item-container",
  itemLabel: "esri-item-list__list-item-label",
  noMatchesMessage: "esri-item-list__no-matches-message",
  noItemsMessage: "esri-item-list__no-items-message",
  filterContainer: "esri-item-list__filter-container",
  filterPlaceholder: "esri-item-list__filter-placeholder",
  filterInput: "esri-item-list__filter-input",
  filterPlaceholderText: "esri-item-list__filter-placeholder-text",

  // icon
  searchIcon: "esri-icon-search",

  // common
  widget: "esri-widget",
  input: "esri-input"
};

interface Group<T extends Item> {
  label: string;
  items: T[];
  id?: string;
}

type RenderItemsProps<T extends Item> = Pick<
  ListProperties<T>,
  | "headingLevel"
  | "identify"
  | "items"
  | "selectedItem"
  | "messages"
  | "filterText"
  | "renderIcon"
  | "onItemMouseLeave"
  | "onItemMouseEnter"
  | "onItemSelect"
>;
type RenderItemProps<T extends Item> = Pick<
  ListProperties<T>,
  | "identify"
  | "selectedItem"
  | "onItemMouseLeave"
  | "onItemMouseEnter"
  | "onItemSelect"
  | "filterText"
  | "renderIcon"
> & {
  item: T;
  grouped: boolean;
};
type RenderGroupProps<T extends Item> = Pick<
  ListProperties<T>,
  | "filterText"
  | "headingLevel"
  | "identify"
  | "renderIcon"
  | "onItemMouseLeave"
  | "onItemMouseEnter"
  | "onItemSelect"
  | "selectedItem"
> & { group: Group<T> };
type RenderLabelProps = { match: string; text: string };
type RenderIconProps<T extends Item> = { item: T };
type RenderFilterProps<T extends Item> = Pick<
  ListProperties<T>,
  "filterText" | "onFilterChange" | "messages" | "id"
>;

interface Item {
  label: string;
  id?: string;
}

interface ListProperties<T extends Item = Item> {
  filterText?: string;
  filterEnabled?: boolean;
  selectedItem?: T;
  headingLevel?: HeadingLevel;
  id: string;
  identify?: (item: T | Group<T>) => string;
  items: (T | Group<T>)[];

  messages: {
    filterPlaceholder: string;
    noItems: string;
    noMatches: string;
  };

  renderIcon?: (props: RenderIconProps<T>) => VNode;

  onFilterChange?: (text: string) => void;
  onItemSelect?: (item: T) => void;
  onItemMouseEnter?: (item: T) => void;
  onItemMouseLeave?: (item: T) => void;
}

export function ItemList<T extends Item>(props: ListProperties<T>): VNode {
  const {
    id,
    identify,
    filterEnabled = true,
    headingLevel = 4,
    items,
    selectedItem,
    messages,
    filterText = "",
    onFilterChange,
    renderIcon,
    onItemMouseLeave,
    onItemMouseEnter,
    onItemSelect
  } = props;

  return (
    <div class={classes(CSS.base, CSS.widget)} key={id}>
      {filterEnabled ? renderFilter({ filterText, messages, onFilterChange, id }) : null}
      {renderItems({
        identify,
        items,
        selectedItem,
        messages,
        filterText,
        headingLevel,
        renderIcon,
        onItemMouseLeave,
        onItemMouseEnter,
        onItemSelect
      })}
    </div>
  );
}

function isGroup<T extends Item>(itemOrGroup: any): itemOrGroup is Group<T> {
  return !!itemOrGroup.items;
}

function renderItems<T extends Item | Group<T>>(props: RenderItemsProps<T>): VNode {
  const {
    headingLevel,
    identify,
    items,
    renderIcon,
    filterText,
    onItemMouseLeave,
    onItemMouseEnter,
    onItemSelect,
    selectedItem
  } = props;

  if (items.length === 0) {
    return (
      <div class={CSS.noMatchesMessage} key="no-matches">
        {props.messages.noMatches}
      </div>
    );
  }

  if (isGroup(items[0])) {
    return (
      <div class={CSS.scroller} key="item-container">
        {items.map((group: Group<T>) =>
          renderGroup({
            filterText,
            group,
            headingLevel,
            identify,
            onItemMouseLeave,
            onItemMouseEnter,
            onItemSelect,
            renderIcon,
            selectedItem
          })
        )}
      </div>
    );
  }

  return (
    <ul class={classes(CSS.list, CSS.scroller)} key="item-container">
      {items.map((item: T) =>
        renderItem({
          item,
          identify,
          grouped: true,
          onItemMouseLeave,
          onItemMouseEnter,
          onItemSelect,
          renderIcon,
          filterText,
          selectedItem
        })
      )}
    </ul>
  );
}

function renderFilter<T extends Item>(props: RenderFilterProps<T>): VNode {
  const placeholderId = `${props.id}-placeholder`;

  return (
    <div class={CSS.filterContainer} key="filter">
      <input
        aria-labelledby={placeholderId}
        class={classes(CSS.input, CSS.filterInput)}
        oninput={(event: Event) => {
          const input = event.currentTarget as HTMLInputElement;
          props.onFilterChange && props.onFilterChange(input.value);
        }}
        value={props.filterText}
        type="search"
      />
      {!props.filterText ? (
        <div class={CSS.filterPlaceholder} id={placeholderId} key="placeholder">
          <span class={CSS.searchIcon} aria-hidden="true" />
          <div class={CSS.filterPlaceholderText}>{props.messages.filterPlaceholder}</div>
        </div>
      ) : null}
    </div>
  );
}

export function renderItem<T extends Item>(props: RenderItemProps<T>): VNode {
  const {
    identify,
    item,
    selectedItem,
    grouped,
    filterText,
    onItemSelect,
    onItemMouseEnter,
    onItemMouseLeave,
    renderIcon
  } = props;

  const key = `${identify?.(item) || item.id}__${item.label}`;
  const selectedKey = selectedItem
    ? `${identify?.(selectedItem) || selectedItem.id}__${selectedItem.label}`
    : "";

  return (
    <li
      aria-level={grouped ? "2" : ""}
      class={classes(CSS.item, key === selectedKey && CSS.itemSelected)}
      data-item={item}
      key={key}
      onclick={(event: Event) => {
        const input = event.currentTarget as HTMLLIElement;
        const item = input["data-item"] as T;
        onItemSelect && onItemSelect(item);
      }}
      onmouseenter={(event: MouseEvent) => {
        const input = event.currentTarget as HTMLLIElement;
        const item = input["data-item"] as T;
        onItemMouseEnter && onItemMouseEnter(item);
      }}
      onkeydown={(event: KeyboardEvent) => {
        if (!isActivationKey(event.key)) {
          return;
        }

        const input = event.currentTarget as HTMLLIElement;
        const item = input["data-item"] as T;
        onItemSelect && onItemSelect(item);
      }}
      onmouseleave={(event: MouseEvent) => {
        const input = event.currentTarget as HTMLLIElement;
        const item = input["data-item"] as T;
        onItemMouseLeave && onItemMouseLeave(item);
      }}
      tabIndex={0}
    >
      <div class={CSS.itemContainer}>
        {renderIcon && renderIcon({ item })}
        {renderLabel({ text: item.label, match: filterText })}
      </div>
    </li>
  );
}

export function renderGroup<T extends Item>(props: RenderGroupProps<T>): VNode {
  const {
    group,
    headingLevel,
    identify,
    onItemMouseLeave,
    onItemMouseEnter,
    onItemSelect,
    filterText,
    renderIcon,
    selectedItem
  } = props;

  const headingId = `${(identify && identify(group)) || group.id}-heading`;

  return (
    <section aria-labelledby={headingId} class={CSS.group} key={group.label}>
      <Heading id={headingId} class={CSS.groupHeader} level={headingLevel}>
        {renderLabel({ text: group.label, match: filterText })}
      </Heading>
      <ul class={CSS.list}>
        {group.items.map((item) =>
          renderItem({
            item,
            identify,
            grouped: true,
            onItemMouseLeave,
            onItemMouseEnter,
            onItemSelect,
            renderIcon,
            filterText,
            selectedItem
          })
        )}
      </ul>
    </section>
  );
}

export function renderLabel(props: RenderLabelProps): VNode {
  const { match, text } = props;

  let content: VNodeChild = null;

  if (!match) {
    content = text;
  } else {
    const lowercasedLabel = text.toLowerCase();
    const lowercasedFilter = match.toLowerCase();

    const filterStartIndex = lowercasedLabel.indexOf(lowercasedFilter);

    if (filterStartIndex === -1) {
      content = text;
    } else {
      const starting = text.substring(0, filterStartIndex);
      const matching = text.substr(filterStartIndex, match.length);
      const ending = text.substring(filterStartIndex + match.length);

      content = (
        <span>
          {starting}
          <strong>{matching}</strong>
          {ending}
        </span>
      );
    }
  }

  return <span class={CSS.itemLabel}>{content}</span>;
}
