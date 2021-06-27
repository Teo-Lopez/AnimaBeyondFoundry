import { ABFActor } from '../../../ABFActor';
import { attachFreeAccessSpell } from './attachFreeAccessSpell';
import { attachSecondarySkill } from './attachSecondarySkill';
import { attachCommonItem } from './attachCommonItem';
import { attachMaintenances } from './attachMaintenances';
import { attachSelectedSpells } from './attachSelectedSpells';

export const prepareItems = (data: ActorSheet.Data<ABFActor>) => {
  let newData: ActorSheet.Data<ABFActor> = JSON.parse(JSON.stringify(data));

  const VALID_COLLECTIONS = [
    'consumable',
    'misc',
    'weapon',
    'shield',
    'ammunition',
    'armor',
    'helmet',
    'skill',
    'freeAccessSpell',
    'maintenances',
    'selected'
  ];

  for (const item of newData.items) {
    if (VALID_COLLECTIONS.includes(item.type)) {
      item.img = item.img || CONST.DEFAULT_TOKEN;

      switch (item.type) {
        case 'freeAccessSpell':
          newData = attachFreeAccessSpell(newData, item);
          break;
        case 'skill':
          newData = attachSecondarySkill(newData, item);
          break;
        case 'maintenances':
          newData = attachMaintenances(newData, item);
          break;
        case 'selected':
          newData = attachSelectedSpells(newData, item);
          break;
        default:
          newData = attachCommonItem(newData, item);
          break;
      }
    } else {
      console.warn('Item with unknown type detected. Skipping...', { item });
    }
  }

  return newData;
};
