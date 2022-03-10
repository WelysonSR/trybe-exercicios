const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDano = (dragon) => {
  const danoMin = 15;
  let rand = Math.floor(Math.random() * (dragon.strength - danoMin + 1) + danoMin);
  return rand;
}

const warriorDano = (warrior) => {
  const danoMin = warrior.strength;
  const danoMax = warrior.weaponDmg * danoMin;
  let rand = Math.floor(Math.random() * (danoMax - danoMin + 1) + danoMin);
  return rand;
}

const mageDano = (mage) => {
  const danoMin = mage.intelligence;
  const danoMax = mage.intelligence * 2;
  let rand = Math.floor(Math.random() * (danoMax - danoMin + 1) + danoMin);
  if (mage.mana >= 15) {
    mage.mana -= 15;
    return {
      dano: rand,
      manaGasta: 15,
    };
  }
  return {
    dano: 'Não possui mana suficiente',
    manaGasta: 0
  }
}

const gameActions = {
  warriorTurno: (callback) => {
    const dano = callback(warrior);
    warrior.damage = dano;
    dragon.healthPoints -= dano;
  },
  mageTurno: (callback) => {
    const dano = callback(mage);
    mage.damage = dano.dano;
    mage.mana = dano.manaGasta;
    dragon.healthPoints -= dano.dano;
  },
  gragonTurno: (callback) => {
    const dano = callback(dragon);
    mage.healthPoints -= dano;
    warrior.healthPoints -= dano;
    dragon.damage = dano;
  },
  status: () => {    
    console.log(warrior);
    console.log(mage);
    console.log(dragon);
    console.log('***********************************************');
  },
};
gameActions.warriorTurno(warriorDano);
gameActions.mageTurno(mageDano);
gameActions.gragonTurno(dragonDano);
gameActions.status();

gameActions.warriorTurno(warriorDano);
gameActions.mageTurno(mageDano);
gameActions.gragonTurno(dragonDano);
gameActions.status();