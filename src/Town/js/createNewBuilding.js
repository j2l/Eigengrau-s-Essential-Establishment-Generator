setup.initBuildingTypes = () => {
  setup.buildingTypes = {
    'Alchemist': 'alchemist',
    'Bakery': 'bakery',
    'Barber': 'barber',
    'Brothel': 'brothel',
    'Butcher': 'butcher',
    'Castle': 'castle',
    'Cobbler': 'cobbler',
    'Docks': 'docks',
    'Dungeon': 'dungeon',
    'Fletcher': 'fletcher',
    'Florist': 'florist',
    'General Store': 'generalStore',
    'Graveyard': 'graveyard',
    'Guardhouse': 'guardhouse',
    'Jeweller': 'jeweller',
    'Market': 'market',
    'Smithy': 'smithy',
    'Tailor': 'tailor',
    'Tavern': 'tavern',
    'Temple': 'temple',
    'Town Square': 'townSquare'
  }
  setup.createBuildingKeys = {
    // please keep this in alphabetic order
    // TODO automatically sort into alphabetic order
    // TODO automatically find available buildings
    'Alchemist': setup.createAlchemist,
    'Bakery': setup.goodsAndServices.default.create('bakery'),
    'Barber': setup.goodsAndServices.default.create('barber'),
    'Brothel': setup.createBrothel,
    'Butcher': setup.goodsAndServices.default.create('butcher'),
    'Castle': setup.createCastle,
    'Cobbler': setup.goodsAndServices.default.create('cobbler'),
    'Docks': setup.createDocks,
    'Dungeon': setup.createDungeon,
    'Fletcher': setup.goodsAndServices.default.create('fletcher'),
    'Florist': setup.goodsAndServices.default.create('florist'),
    'General Store': setup.createGeneralStore,
    'Graveyard': setup.createGraveyard,
    'Guardhouse': setup.createGuardhouse,
    'Jeweller': setup.goodsAndServices.default.create('jeweller'),
    'Market': setup.createMarket,
    'Smithy': setup.createSmithy,
    'Tailor': setup.goodsAndServices.default.create('tailor'),
    'Tavern': setup.createTavern,
    'Temple': setup.createTemple,
    'Town Square': setup.createTownSquare
  }
}

setup.createNewBuilding = (town, type, opts) => {
  // this is necessary to point the function towards where the building creation function is kept.
  // unfortunately, it currently needs to be updated manually with each new building.

  const newBuilding = setup.createBuildingKeys[lib.toTitleCase(type)](town, { ...opts, isHighlighted: true })
  console.log(town)
  if (Array.isArray(town.buildings)) town.buildings.push(newBuilding)
  return newBuilding
}
