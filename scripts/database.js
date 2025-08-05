export const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [{
            id: 1,
            name: "TaxMan",
            power: "Increases property taxes tenfolds"    
    },{
            id: 2,
            name: "TPS Reports",
            power: "Always requires work reports" }]
}

export const getVillains = () => {
    return structuredClone(database.villains);
}
