export interface IBeer {
    id: number
    name: string
    targline: string
    first_brewed: string
    description: string
    image_url: string
    abv: number
    ibu: number
    target_fg: number
    target_og: number
    ebc: number
    srm: number
    ph: number
    attenuation_level: number
    volume: ValueUnit
    boil_volume: ValueUnit
    method: Method
    ingredients: Ingredients
    food_pairing: string[]
    brewers_tips: string
    contributed_by: string
}

export interface Method{
    mash_temp: MashTemp[]
    fermentation: Fermentation
    twist?: string
}

export interface MashTemp {
    temp: ValueUnit
    duration: number
}

export interface Fermentation {
    temp: ValueUnit
}

export interface Ingredients {
    malt: Malt[]
    hops: Hop[]
    yeast: string
}

export interface Malt {
    name: string
    amount: ValueUnit
}

export interface Hop {
    name: string
    amount: ValueUnit
    add: string
    attribute: string
}

export interface ValueUnit {
    value: number
    unit: string
}