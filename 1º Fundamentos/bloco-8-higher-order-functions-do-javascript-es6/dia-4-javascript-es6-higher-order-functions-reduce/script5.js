const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = (array) => {
  return array.reduce((acc, name) =>
    acc + name.split('')// Transformando em uma matiz de substrings.
      .reduce((accumulator, interaction) => interaction === 'a' || interaction === 'A' ? accumulator + 1 : accumulator, 0)
    , 0)
};
console.log(containsA(names));