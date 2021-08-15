import { Templates } from './constants';

export const preloadTemplates = () => {
  const templatePaths = [
    // Add paths to "systems/AnimaBeyondFoundry/templates"
    Templates.Dialog.ModDialog,
    Templates.Dialog.Icons.Accept,

    // Actor sheet parts
    'systems/animabf/templates/parts/combat.html',
    'systems/animabf/templates/parts/domine.html',
    'systems/animabf/templates/parts/psychic.hbs',
    'systems/animabf/templates/parts/common/horizontal-titled-input.hbs',
    'systems/animabf/templates/parts/common/vertical-titled-input.hbs',
    'systems/animabf/templates/parts/common/group.hbs',
    'systems/animabf/templates/parts/general/general.hbs',
    'systems/animabf/templates/parts/general/parts/level.hbs',
    'systems/animabf/templates/parts/general/parts/language.hbs',
    'systems/animabf/templates/parts/general/parts/elan.hbs',
    'systems/animabf/templates/parts/general/parts/titles.hbs',
    'systems/animabf/templates/parts/general/parts/experience.hbs',
    'systems/animabf/templates/parts/general/parts/advantages.hbs',
    'systems/animabf/templates/parts/general/parts/disadvantages.hbs',
    'systems/animabf/templates/parts/general/parts/aspect.hbs',
    'systems/animabf/templates/parts/general/parts/description.hbs',
    'systems/animabf/templates/parts/general/parts/contacts.hbs',
    'systems/animabf/templates/parts/general/parts/notes.hbs',
    'systems/animabf/templates/parts/mystic/mystic.hbs',
    'systems/animabf/templates/parts/mystic/parts/act.hbs',
    'systems/animabf/templates/parts/mystic/parts/magic-projection.hbs',
    'systems/animabf/templates/parts/mystic/parts/zeon-regeneration.hbs',
    'systems/animabf/templates/parts/mystic/parts/innate-magic.hbs',
    'systems/animabf/templates/parts/mystic/parts/zeon.hbs',
    'systems/animabf/templates/parts/mystic/parts/summoning.hbs',
    'systems/animabf/templates/parts/mystic/parts/spheres.hbs',
    'systems/animabf/templates/parts/mystic/parts/free-access-spells.hbs',
    'systems/animabf/templates/parts/mystic/parts/spell-maintenances.hbs',
    'systems/animabf/templates/parts/mystic/parts/selected-spells.hbs',
    'systems/animabf/templates/parts/mystic/parts/summons.hbs',
    'systems/animabf/templates/parts/mystic/parts/metamagics.hbs',
    'systems/animabf/templates/parts/secondaries.html'
  ];

  return loadTemplates(templatePaths);
};
