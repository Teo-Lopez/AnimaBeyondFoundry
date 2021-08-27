import { ABFItems } from '../../actor/utils/prepareSheet/prepareItems/ABFItems';
import { openDialog } from '../../utils/openDialog';
import { ABFItemConfig, ItemChanges } from '../Items';
import { ABFItemBaseDataSource } from '../../../types';

export type TitleItemData = Record<string, never>;

export type TitleDataSource = ABFItemBaseDataSource<ABFItems.TITLE, TitleItemData>;

export type TitleChanges = ItemChanges<TitleItemData>;

export const TitleItemConfig: ABFItemConfig<TitleDataSource, TitleChanges> = {
  type: ABFItems.TITLE,
  isInternal: true,
  fieldPath: ['general', 'titles'],
  getFromDynamicChanges: changes => {
    return changes.data.dynamic.titles as TitleChanges;
  },
  selectors: {
    addItemButtonSelector: 'add-title',
    containerSelector: '#titles-context-menu-container',
    rowSelector: '.title-row',
    rowIdData: 'titleId'
  },
  onCreate: async (actor): Promise<void> => {
    const { i18n } = game as Game;

    const name = await openDialog<string>({
      content: i18n.localize('dialogs.items.title.content')
    });

    await actor.createInnerItem({
      name,
      type: ABFItems.TITLE
    });
  },
  onUpdate: async (actor, changes): Promise<void> => {
    for (const id of Object.keys(changes)) {
      const { name } = changes[id];

      await actor.updateInnerItem({ id, type: ABFItems.TITLE, name });
    }
  },
  onAttach: (data, item) => {
    const items = data.general.titles as TitleDataSource[];

    if (items) {
      const itemIndex = items.findIndex(i => i._id === item._id);
      if (itemIndex !== -1) {
        items[itemIndex] = item;
      } else {
        items.push(item);
      }
    } else {
      (data.general.titles as TitleDataSource[]) = [item];
    }
  }
};