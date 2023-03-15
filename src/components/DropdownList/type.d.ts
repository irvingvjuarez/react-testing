export type DataItem = {
  value: string;
  label: string;
}

export type DropdownListProps = {
  data: DataItem[];
  onRemoveItem: (item: DataItem, index: number) => void;
  labels: {
    show: string;
    hide: string;
  }
}