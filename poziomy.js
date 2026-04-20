
const gameLevels = [
    {
        letters: ['A', 'K', 'T', 'O', 'R'],
        words: ["AKTOR", "KAROT", "KARTO", "KORAT", "KOTAR", "KRATO", "RATKO", "TARKO", "TAROK", "TROKA", "KART", "KATO", "KORT", "KOTA", "KRAT", "TAKO", "TRAK", "TROK", "AORT", "ARKO", "KARO", "KORA", "OKAR", "OKRA", "ORKA", "ORTA", "RATO", "ROTA", "TARO", "TORA", "AKT", "KAT", "KOT", "KTO", "TAK", "TKA", "TOK", "AKR", "ARK", "KAR", "KOR", "KRA", "KRO", "OKA", "OKR", "ORK", "ORT", "RAK", "RAT", "ROK", "ROT", "TAO", "TAR", "TOR", "TRA", "ARO", "ORA", "AT", "KA", "KO", "OK", "OT", "TA", "TO", "AR", "OR", "RO"]
    },
    {
    letters: ['P', 'L', 'A', 'N', 'E', 'T', 'A'],
    words: ["APELANT", "NAPLETA", "PLANETA", "TAPLANE", "NAPLET", "PALANT", "PALETA", "PLANET", "PLATAN", "ANTALE", "ETANAL", "NALEPA", "PANELA", "PATENA", "APLET", "LEPTA", "PALET", "PALTA", "PELTA", "PLANT", "TAPLA", "ALTAN", "APATE", "LENTA", "NALEP", "NAPAL", "PALNA", "PALNE", "PANEL", "PATEN", "PLENA", "TAELA", "ANALE", "ELANA", "ENATA", "LEPT", "PALT", "PELT", "ALPA", "ALTA", "APEL", "APLA", "APLE", "ETAP", "LAPA", "LATA", "LENT", "LEPA", "PALA", "PALE", "PANT", "PATA", "PELA", "PETA", "PLAN", "TAEL", "TALA", "TALE", "TLEN", "ANAL", "ANTA", "ELAN", "ENAT", "ENTA", "ETAN", "LANA", "LANE", "NAPA", "NATA", "NETA", "PANA", "PEAN", "PENA", "TANA", "ALP", "ALT", "LAT", "LEP", "PAL", "PAT", "PEL", "PET", "PLE", "TAL", "TLE", "ALA", "ALE", "ANT", "ATA", "PATE", "ENT", "ETA", "LEN", "NAP", "NAT", "NEP", "NET", "PAN", "PEN", "TAN", "TEN", "ANA", "AL", "AT", "EL", "ET", "LA", "PA", "PE", "TA", "TE", "AA", "EN", "NA"]
    },
    {
        letters: ['E', 'K', 'R', 'A', 'N'],
        words: ["EKRAN", "KARNE", "NERKA", "RANEK", "ANKR", "AREK", "ERKA", "KARE", "KRAN", "RANK", "AREN", "NERA", "RENA", "AKR", "ARK", "KAN", "KAR", "KEA", "KER", "KRA", "NEK", "RAK", "REK", "ERA", "NAR", "NER", "RAN", "REA", "REN", "NA"]
    },
    {
        letters: ['K', 'R', 'O', 'S', 'T', 'K', 'I'],
        words: ["KROSTKI", "KOSTKI", "KROTKI", "OSTRKI", "SKORKI", "STROIK", "STROKI", "TROSKI", "KITKO", "KOTIK", "KOTKI", "KIOSK", "KIRKO", "KORKI", "KROKI", "KROKS", "KROST", "OSTKI", "ROKIT", "SITKO", "SKOKI", "STOIK", "STOKI", "STROK", "TROKI", "TROSK", "IKSOR", "ISKRO", "ISTRO", "ORSKI", "SIKOR", "SIROT", "SKROI", "SORKI", "SROKI", "STROI", "KIKS", "KITO", "KOKI", "KOKS", "KORT", "KROK", "SKIT", "SKOK", "SKOT", "STOK", "TIKO", "TOKI", "TRIK", "TROK", "IKOS", "IKRO", "ISTR", "KORS", "KOSI", "KRIS", "KROI", "KROS", "ORKI", "OSIK", "OSKI", "ROIK", "ROKI", "SIKO", "SITO", "SKIR", "SKRO", "SOKI", "SORT", "SROK", "STOI", "STOR", "TORS", "TRIO", "TROI", "ROSI", "SIOR", "IKT", "KIT", "KOK", "KOT", "KTO", "TIK", "TOK", "IKR", "IKS", "ISK", "ITR", "KIR", "KOI", "KOR", "KOS", "KRO", "KSI", "OKI", "OKR", "ORK", "ORT", "ROK", "ROT", "SIK", "SIT", "SKI", "SOK", "STO", "TIR", "TOI", "TOR", "TOS", "TRI", "OSI", "ROI", "ROS", "SIO", "SIR", "SOI", "KI", "KO", "OK", "OT", "TO", "TS", "OR", "OS", "RO", "SI"]
    },
    {
        letters: ['S', 'Z', 'K', 'O', 'Ł', 'A'],
        words: ["ŁOSZAK", "SZKOŁA", "KŁOSA", "KOZŁA", "ŁASKO", "ŁKASZ", "SKAŁO", "SZKŁA", "SZKŁO", "ŁASZO", "ŁOSZA", "KASZO", "KOSZA", "OKSZA", "SKAZO", "ZAKOS", "KŁOS", "KOŁA", "ŁASK", "SKAŁ", "ŁASZ", "ŁOSZ", "ŁOZA", "OSŁA", "SZAŁ", "SZŁA", "SZŁO", "SZOŁ", "KASO", "KASZ", "KOSA", "KOSZ", "KOZA", "OKAZ", "OKSZ", "OSKA", "SAKO", "SKAZ", "SZOK", "SZOA", "KAŁ", "KŁA", "KOŁ", "ŁKA", "ŁZA", "ŁZO", "SAŁ", "ZŁA", "ZŁO", "KAS", "KOS", "OKA", "SAK", "SKA", "SOK", "OAZ", "OSA", "SAZ", "SZA", "KA", "KO", "OK", "AS", "OS", "OZ", "ZA"]
    },
    {
        letters: ['L', 'A', 'P', 'T', 'O', 'P'],
        words: ["LAPTOP", "PALTO", "PAPLO", "PATOL", "PLOTA", "POPAL", "PALT", "PLOT", "TOPL", "APLO", "ATOL", "LATO", "LOTA", "OPAL", "OPAT", "PAPO", "POLA", "POPA", "ALP", "ALT", "LAT", "LOT", "PAL", "PAP", "PAT", "POP", "POT", "TAL", "TOP", "ALO", "OPA", "TAO", "AL", "AT", "LA", "OP", "OT", "PA", "PO", "TA", "TO"]
    },
    {
        letters: ['M', 'I', 'A', 'S', 'T', 'O'],
        words: ["MIASTO", "OSTAMI", "SIAMTO", "SIATOM", "STOAMI", "STOMIA", "TOSAMI", "ASTMO", "MIAST", "MIOTA", "MOTIA", "OMAST", "SITOM", "SOMIT", "STOMA", "OSAMI", "OSTIA", "SIATO", "ASTM", "ATOM", "ISTM", "MATO", "MIOT", "MOST", "MOTA", "TAMO", "TOMI", "AMIO", "ASOM", "MAIS", "MASO", "MISA", "MISO", "MOAI", "OSIM", "SAMI", "SAMO", "SATI", "SIAM", "SIAT", "SIMA", "SIMO", "SITA", "SITO", "SOMA", "STAI", "STOA", "STOI", "TOSA", "OSIA", "MAT", "MIT", "TAM", "TOM", "IMA", "MAI", "MAS", "MIS", "MOA", "MOI", "OMA", "OSM", "SAM", "SIM", "SIT", "SOM", "STO", "TAI", "TAO", "TAS", "TOI", "TOS", "AIS", "OSA", "OSI", "SIA", "SIO", "SOI", "AM", "AT", "IM", "MA", "MI", "OM", "OT", "TA", "TO", "TS", "AS", "OS", "SI"]
    },
    {
        letters: ['O', 'B', 'R', 'A', 'Z'],
        words: ["OBRAZ", "ZORBA", "ARBO", "BAOR", "BAZO", "BORA", "ROBA", "ZOBA", "ZORB", "ORAZ", "ABO", "ARB", "BAO", "BAR", "BAZ", "BOA", "BOR", "OBA", "RAB", "ROB", "ARO", "OAZ", "ORA", "ORZ", "RAZ", "BA", "BO", "AR", "OR", "OZ", "RO", "ZA"]
    },
    {
        letters: ['D', 'R', 'O', 'G', 'A'],
        words: ["DOGRA", "DRAGO", "DROGA", "GARDO", "DAGO", "DOGA", "DRAG", "DRGA", "GARD", "GRAD", "AGOR", "GARO", "OGAR", "OGRA", "RAGO", "ODRA", "ORDA", "RADO", "DAG", "DOG", "GAD", "AGO", "GAR", "GRA", "GRO", "OGR", "RAG", "DAO", "DAR", "ODA", "ODR", "ORD", "RAD", "ROD", "ARO", "ORA", "AG", "GO", "AD", "DA", "DO", "OD", "AR", "OR", "RO"]
    },
    {
        letters: ['S', 'M', 'O', 'K', 'I'],
        words: ["IKSOM", "ISKOM", "KOMIS", "MISKO", "OMSKI", "OSKIM", "SIKOM", "SMOKI", "KIMO", "KOMI", "MIKO", "MIKS", "MOKS", "SMOK", "IKOS", "KOSI", "MISO", "OSIK", "OSIM", "OSKI", "SIKO", "SIMO", "SOKI", "KIM", "KOM", "MIK", "IKS", "ISK", "KOI", "KOS", "KSI", "MIS", "MOI", "OKI", "OSM", "SIK", "SIM", "SKI", "SOK", "SOM", "OSI", "SIO", "SOI", "IM", "KI", "KO", "MI", "OK", "OM", "OS", "SI"]
    },
    {
        letters: ['B', 'R', 'A', 'K', 'I'],
        words: ["BARKI", "BRAKI", "KRABI", "BAKI", "BARK", "BRAK", "KABI", "KARB", "KRAB", "RABI", "ARKI", "IKAR", "IKRA", "KARI", "RAKI", "BAK", "ARB", "BAI", "BAR", "RAB", "AKR", "ARK", "IKR", "KAI", "KAR", "KIR", "KRA", "RAK", "AIR", "RAI", "BA", "BI", "KA", "KI", "AR"]
    },
    {
        letters: ['P', 'Y', 'T', 'A', 'N', 'I', 'E'],
        words: ["ENTYPIA", "PATYNIE", "PYTANIE", "ATYPIE", "NAPITY", "PATENY", "PENATY", "PYTANE", "PYTANI", "NAPITE", "ETAPY", "PANTY", "PATYN", "PIETY", "PINTY", "PITNY", "PYTIA", "PYTIE", "TYPIE", "ENATY", "ETANY", "PATEN", "PEANY", "PIANY", "PIETA", "PINTA", "PITNA", "PITNE", "TEINY", "TYNIE", "NAPIE", "NATIE", "PANIE", "PENIA", "PIANE", "TANIE", "TEINA", "PATY", "PETY", "PITY", "PYTA", "TIPY", "TYPA", "ANTY", "ENTY", "ETAP", "ETYN", "NAPY", "NATY", "NEPY", "NETY", "NIPY", "NITY", "PANT", "PANY", "PENY", "PETA", "PIET", "PINT", "PINY", "PITA", "PITE", "TANY", "TIPA", "YETI", "ENAT", "ENTA", "ETAN", "INTE", "NETA", "NIPA", "NITA", "PANI", "PEAN", "PENA", "PIAN", "PINA", "PNIA", "PNIE", "TANI", "TEIN", "TNIE", "PYT", "TYP", "ATY", "ETY", "PAT", "PET", "PIT", "TIP", "TYN", "ANT", "ATE", "ENT", "ETA", "NAP", "NAT", "NEP", "NET", "NIP", "NIT", "PAI", "PAN", "PEN", "PIA", "PIE", "PIN", "PNI", "TAI", "TAN", "TEN", "YIN", "ANI", "NAI", "NIE", "TY", "AT", "ET", "NY", "PA", "PE", "PI", "TA", "TE", "EN", "IN", "NA", "NI"]
    },
    {
        letters: ['K', 'W', 'I', 'A', 'T'],
        words: ["KWIAT", "KWITA", "WATKI", "WITKA", "AKIT", "KIAT", "KITA", "KWIT", "TAKI", "TIKA", "TKWI", "WIKT", "KAWI", "KIWA", "WAKI", "WIAT", "WITA", "AKT", "IKT", "KAT", "KIT", "TAK", "TIK", "TKA", "KAI", "KAW", "KWA", "KWI", "TAI", "TWA", "WAT", "WIT", "IWA", "AT", "KA", "KI", "TA", "IW"]
    },
    {
        letters: ['R', 'A', 'D', 'I', 'O'],
        words: ["ADRIO", "RADIO", "DARI", "IRDA", "IRDO", "ODIA", "ODRA", "ORDA", "RADO", "RAID", "ARIO", "DAO", "DAR", "DOI", "IDO", "IRD", "ODA", "ODR", "ORD", "RAD", "ROD", "AIR", "ARO", "ORA", "RAI", "ROI", "AD", "DA", "DO", "ID", "OD", "AR", "OR", "RO"]
    },
    {
        letters: ['T', 'R', 'A', 'W', 'A'],
        words: ["TRAWA", "WARTA", "WATRA", "ARAT", "ATAR", "RATA", "TARA", "TRAW", "TRWA", "WART", "WATA", "WATR", "WARA", "ATA", "RAT", "TAR", "TRA", "TWA", "WAT", "ARA", "RWA", "WAR", "AT", "TA", "AA", "AR"]
    },
    {
        letters: ['P', 'R', 'E', 'Z', 'E', 'N', 'T'],
        words: ["PENTRZE", "PREZENT", "TERPEN", "PENTR", "REPET", "TRZEP", "ENTER", "NEPER", "PENER", "PERZE", "RENET", "TEREN", "TERZE", "NERZE", "PERT", "TREP", "ENTE", "ETEN", "ETER", "NERP", "PERZ", "PRZE", "RENT", "RZEP", "TERE", "TERN", "TREN", "TRZE", "ERZE", "PET", "ENT", "NEP", "NET", "PEN", "PER", "REP", "RET", "TEE", "TEN", "TER", "TEZ", "ZET", "NER", "REN", "ZEN", "ZER", "ET", "PE", "TE", "EE", "EN", "ER", "EZ", "RE", "ZE"]
    },
    {
        letters: ['M', 'A', 'R', 'K', 'A'],
        words: ["MAK", "RAK", "RAM", "ARK", "ARM", "KARA", "MAKA", "MARA", "RAMA", "ARAK", "AKRA", "KARMA", "MARKA", "RAMKA"]
    },
    {
        letters: ['L', 'I', 'S', 'T', 'A'],
        words: ["LIS", "SIT", "STO", "TAL", "SILA", "LIST", "STAL", "TALI", "LITA", "SALI", "LAST", "LISTA"]
    },
    {
        letters: ['P', 'R', 'A', 'C', 'A'],
        words: ["CAP", "CAR", "PAR", "RAP", "ACRA", "CAPA", "CARA", "PARA", "RACA", "PRAC", "PRACA"]
    },
    {
        letters: ['O', 'B', 'R', 'A', 'Z'],
        words: ["BAZ", "BOA", "RAZ", "ROB", "BARO", "BAZO", "BORA", "ORAZ", "ROBA", "ZORA", "ZROB", "OBRAZ"]
    },
    {
        letters: ['S', 'T', 'R', 'U', 'N'],
        words: ["NUR", "RUS", "STU", "TUN", "NURT", "RUST", "NURS", "STRUN", "NUTS", "TURA", "SURTN", "STRUN"]
    },
    {
        letters: ['K', 'A', 'N', 'A', 'Ł'],
        words: ["KAN", "ŁAN", "NAŁ", "AKA", "KAŁA", "KANA", "NAŁA", "ŁANA", "KANAŁ"]
    },
    {
        letters: ['P', 'R', 'O', 'C', 'E', 'N', 'T'],
        words: ["CENT", "PERT", "PRET", "NERO", "NETO", "TREN", "TECO", "TENOR", "TRONE", "CREDO", "ORNET", "PROCENT"]
    },
    {
        letters: ['P', 'R', 'E', 'Z', 'E', 'N', 'T'],
        words: ["PRZEN", "PENT", "RETE", "TEZE", "TREP", "ZETP", "PEEN", "NERZ", "PRZEZ", "TEZEN", "TRZEN", "PREZENT"]
    },
    {
        letters: ['B', 'U', 'T', 'E', 'L', 'K', 'A'],
        words: ["BULA", "BUTA", "ETAL", "KALE", "KULA", "LUTE", "TAKE", "TULE", "BELKA", "BUŁKA", "LUTEK", "BUTELKA"]
    },
    {
        letters: ['K', 'U', 'C', 'H', 'N', 'I', 'A'],
        words: ["ACHI", "CHIN", "HUKI", "INCA", "KANI", "KUNA", "NACI", "UNIA", "CHUNA", "KUCHI", "UNICA", "KUCHNIA"]
    },
    {
        letters: ['D', 'R', 'Z', 'E', 'W', 'K', 'O'],
        words: ["DREW", "KREW", "KRED", "KROZ", "KODER", "DREKO", "DREWO", "KREDO", "WODEK", "WOREK", "ZREDO", "DRZEWKO"]
    },
    {
        letters: ['M', 'I', 'E', 'J', 'S', 'C', 'E'],
        words: ["CESI", "EMIS", "JECI", "MECI", "MISE", "SEJM", "SIEC", "SMEC", "EMSIJ", "MIESC", "SEJMI", "MIEJSCE"]
    },
    {
        letters: ['P', 'L', 'A', 'N', 'E', 'T', 'A'],
        words: ["ALAT", "ALEN", "ELAN", "LANT", "NAPA", "PALE", "PANA", "TELA", "APELT", "PANEL", "PLANT", "PLANETA"]
    },
    {
        letters: ['B', 'R', 'A', 'M', 'K', 'A', 'R'],
        words: ["ARAR", "BARA", "KAMA", "KARA", "MARA", "RAKA", "RAMA", "AMBRA", "BARKA", "KARMA", "MARKA", "BRAMKAR"]
    },
    {
        letters: ['W', 'O', 'L', 'N', 'O', 'Ś', 'Ć'],
        words: ["ŁOŃ", "NOŚ", "WOŃ", "OŁO", "WOLN", "WONO", "ŁOWO", "NOWO", "WOLNO", "WOLNOŚĆ"]
    },
    {
        letters: ['S', 'T', 'O', 'P', 'A'],
        words: ["PAS", "PAT", "POT", "STO", "TAP", "OSTA", "OPAT", "PASO", "POST", "POTA", "STOP", "TOPA", "STOPA"]
    }

];
