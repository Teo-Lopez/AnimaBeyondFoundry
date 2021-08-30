import { ABFActorDataSourceData } from '../../../../types/Actor';
import { ArmorDataSource } from '../../../../types/combat/ArmorItemConfig';

const calculateTA = (tas: number[]): number => {
  if (tas.length === 0) return 0;

  const orderedTas = [...tas].sort().reverse();

  const maxTa = orderedTas.shift();

  const sumOtherTas = orderedTas.reduce((prev, curr) => prev + curr, 0);

  return maxTa! + Math.floor(sumOtherTas / 2);
};

export const calculateTotalArmor = (data: ABFActorDataSourceData): ABFActorDataSourceData['combat']['totalArmor'] => {
  const totalArmor: ABFActorDataSourceData['combat']['totalArmor'] = {
    at: {
      cold: { value: 0 },
      cut: { value: 0 },
      electricity: { value: 0 },
      energy: { value: 0 },
      heat: { value: 0 },
      impact: { value: 0 },
      thrust: { value: 0 }
    }
  };

  const armors = data.combat.armors as ArmorDataSource[];

  if (armors.length > 0) {
    totalArmor.at.cold.value = calculateTA(armors.map(armor => armor.data.cold.value));
    totalArmor.at.cut.value = calculateTA(armors.map(armor => armor.data.cut.value));
    totalArmor.at.electricity.value = calculateTA(armors.map(armor => armor.data.electricity.value));
    totalArmor.at.energy.value = calculateTA(armors.map(armor => armor.data.energy.value));
    totalArmor.at.heat.value = calculateTA(armors.map(armor => armor.data.heat.value));
    totalArmor.at.impact.value = calculateTA(armors.map(armor => armor.data.impact.value));
    totalArmor.at.thrust.value = calculateTA(armors.map(armor => armor.data.thrust.value));
  }

  return totalArmor;
};