import { ABFActor } from '../../../ABFActor';
import { attachFreeAccessSpell } from './attachFreeAccessSpell';
import { attachSecondarySkill } from './attachSecondarySkill';
import { attachCommonItem } from './attachCommonItem';
import { attachMaintenances } from './attachMaintenances';
import { attachSelectedSpells } from './attachSelectedSpells';
import { Items } from './Items';
import { attachInvocation } from './attachInvocation';
import { attachMetamagic } from './attachMetamagic';

export const prepareItems = (data: ActorSheet.Data<ABFActor>) => {
  let newData: ActorSheet.Data<ABFActor> = JSON.parse(JSON.stringify(data));

  const VALID_ITEM_TYPES = [
    Items.SECONDARY_SKILL,
    Items.FREE_ACCESS_SPELL,
    Items.MAINTENANCES,
    Items.SELECTED,
    Items.METAMAGIC,
    Items.INVOCATION
  ].map(
    type => type.toString()
  );

  for (const item of newData.items) {
    if (VALID_ITEM_TYPES.includes(item.type)) {
      item.img = item.img || CONST.DEFAULT_TOKEN;

      switch (item.type) {
        case Items.FREE_ACCESS_SPELL:
          newData = attachFreeAccessSpell(newData, item);
          break;
        case Items.SECONDARY_SKILL:
          newData = attachSecondarySkill(newData, item);
          break;
        case Items.MAINTENANCES:
          newData = attachMaintenances(newData, item);
          break;
        case Items.SELECTED:
          newData = attachSelectedSpells(newData, item);
          break;
        case Items.INVOCATION:
          newData = attachInvocation(newData, item);
          break;
        case Items.METAMAGIC:
          newData = attachMetamagic(newData, item);
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
