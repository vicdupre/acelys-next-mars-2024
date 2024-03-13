
type Item = {
    id: number,
    name: string
}
type Weapon = Item & {
    damage: number
}
type Armor = Item & {
    defense: number
}

type Store<TItemType> = {
    name: string,
    items: TItemType[]
}

type StoreOfWeapons = Store<Weapon>

const blacksmith : Store<Armor | Weapon> = {
    name: 'Blacksmith',
    items: [
        {id: 1, name: 'Iron Armor', defense: 10},
        {id: 2, name: 'Steel Armor', defense: 20},
        {id: 3, name: 'Iron Sword', damage: 10},
    ]
}

const createStore = <TItemType>(name : string, items : TItemType[]) : Store<TItemType> => {
    return {
        name,
        items
    }
}

const generalStore = createStore<Item | Weapon>('General Store', [])

generalStore.items.push({
    id: 1,
    name: 'Rusty Sword',
    damage: 5
})

