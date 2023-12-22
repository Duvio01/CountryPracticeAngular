export interface Country {
 altSpellings: string[];
 area:         number;
 borders?:     string[];
 capital:      string[];
 capitalInfo:  CapitalInfo;
 car:          Car;
 cca2:         string;
 cca3:         string;
 ccn3:         string;
 cioc:         string;
 coatOfArms:   CoatOfArms;
 continents:   string[];
 currencies:   Currencies;
 demonyms:     Demonyms;
 fifa:         string;
 flag:         string;
 flags:        Flags;
 gini?:        { [key: string]: number };
 idd:          Idd;
 independent:  boolean;
 landlocked:   boolean;
 languages:    Languages;
 latlng:       number[];
 maps:         Maps;
 name:         Name;
 population:   number;
 postalCode?:  PostalCode;
 region:       string;
 startOfWeek:  string;
 status:       string;
 subregion:    string;
 timezones:    string[];
 tld:          string[];
 translations: { [key: string]: Translation };
 unMember:     boolean;
}

export interface CapitalInfo {
 latlng: number[];
}

export interface Car {
 side:  string;
 signs: string[];
}

export interface CoatOfArms {
 png?: string;
 svg?: string;
}

export interface Currencies {
 CLP?: Clp;
 CRC?: Clp;
 DOP?: Clp;
 EUR?: Clp;
 USD?: Clp;
 YER?: Clp;
}

export interface Clp {
 name:   string;
 symbol: string;
}

export interface Demonyms {
 eng: Eng;
 fra: Eng;
}

export interface Eng {
 f: string;
 m: string;
}

export interface Flags {
 alt?: string;
 png:  string;
 svg:  string;
}

export interface Idd {
 root:     string;
 suffixes: string[];
}

export interface Languages {
 ara?: string;
 eng?: string;
 ita?: string;
 spa?: string;
}

export interface Maps {
 googleMaps:     string;
 openStreetMaps: string;
}

export interface Name {
 common:     string;
 nativeName: NativeName;
 official:   string;
}

export interface NativeName {
 ara?: Translation;
 eng?: Translation;
 ita?: Translation;
 spa?: Translation;
}

export interface Translation {
 common:   string;
 official: string;
}

export interface PostalCode {
 format: string;
 regex:  string;
}
