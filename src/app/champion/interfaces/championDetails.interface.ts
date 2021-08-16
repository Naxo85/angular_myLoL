export interface ChampionDetails {
  id: number;
  name: string;
  championLevel?: number;
  championPoints?: number;
  lastPlayTime?: number;
  alias: string;
  title: string;
  shortBio: string;
  tacticalInfo: TacticalInfo;
  playstyleInfo: PlaystyleInfo;
  squarePortraitPath: string;
  stingerSfxPath: string;
  chooseVoPath: string;
  banVoPath: string;
  roles: string[];
  recommendedItemDefaults: any[];
  skins: Skin[];
  passive: Passive;
  spells: Spell[];
}

export interface Passive {
  name: string;
  abilityIconPath: string;
  abilityVideoPath: string;
  abilityVideoImagePath: string;
  description: string;
}

export interface PlaystyleInfo {
  damage: number;
  durability: number;
  crowdControl: number;
  mobility: number;
  utility: number;
}

export interface Skin {
  id: number;
  isBase: boolean;
  name: string;
  splashPath: string;
  uncenteredSplashPath: string;
  tilePath: string;
  loadScreenPath: string;
  skinType: string;
  rarity: string;
  isLegacy: boolean;
  splashVideoPath: null;
  collectionSplashVideoPath: null;
  featuresText: null;
  chromaPath: null | string;
  emblems: null;
  regionRarityId: number;
  rarityGemPath: null;
  skinLines: SkinLine[] | null;
  description: null | string;
  loadScreenVintagePath?: string;
  chromas?: Chroma[];
}

export interface Chroma {
  id: number;
  name: string;
  chromaPath: string;
  colors: string[];
  descriptions: Description[];
  rarities: Rarity[];
}

export interface Description {
  region: string;
  description: string;
}

export interface Rarity {
  region: string;
  rarity: number;
}

export interface SkinLine {
  id: number;
}

export interface Spell {
  spellKey: string;
  name: string;
  abilityIconPath: string;
  abilityVideoPath: string;
  abilityVideoImagePath: string;
  cost: string;
  cooldown: string;
  description: string;
  dynamicDescription: string;
  range: number[];
  costCoefficients: number[];
  cooldownCoefficients: number[];
  coefficients: Coefficients;
  effectAmounts: { [key: string]: number[] };
  ammo: Ammo;
  maxLevel: number;
}

export interface Ammo {
  ammoRechargeTime: number[];
  maxAmmo: number[];
}

export interface Coefficients {
  coefficient1: number;
  coefficient2: number;
}

export interface TacticalInfo {
  style: number;
  difficulty: number;
  damageType: string;
}
