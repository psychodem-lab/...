
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
        letters: ['M', 'A', 'T', 'K', 'A'],
        words: ["MAKAT", "MATKA", "TKAM", "AKAM", "AKTA", "ATAK", "KAMA", "KATA", "MAKA", "MATA", "TAKA", "TAMA", "AKT", "KAM", "KAT", "MAK", "MAT", "TAK", "TAM", "TKA", "AKA", "ATA", "MAAAM", "AT", "KA", "MA", "TA", "AA"]
    },
    {
        letters: ['L', 'I', 'S', 'T', 'A'],
        words: ["LISTA", "STALI", "STILA", "ALIT", "LIST", "LITA", "SALT", "STAL", "STIL", "STLI", "TALI", "LAIS", "LASI", "LIAS", "LISA", "SALI", "SATI", "SIAL", "SIAT", "SITA", "STAI", "ALT", "LAT", "LIT", "TAL", "TLI", "ALI", "LAI", "LAS", "LIS", "SAL", "SIL", "SIT", "TAI", "TAS", "AIS", "SIA", "AL", "AT", "IL", "LA", "LI", "TA", "TS", "AS", "SI"]
    },
    {
        letters: ['P', 'R', 'O', 'C', 'E', 'N', 'T'],
        words: ["PROCENT", "CENTRO", "PENTRO", "POTERN", "TOPCE", "CENOT", "CENTO", "CENTR", "CERTO", "CETNO", "CONTR", "CREPO", "NEPOT", "NOTCE", "PENTR", "PERTO", "POTNE", "PROCE", "RECTO", "TONCE", "NERPO", "NORCE", "PERON", "RENTO", "ROPNE", "TENOR", "TERNO", "TONER", "CENT", "CERT", "CETN", "CNOT", "CREP", "OCET", "PERT", "PORT", "PROC", "PROT", "TREP", "TROP", "CENO", "CERO", "EROT", "ETNO", "NERP", "NETO", "NOCE", "OCEN", "OPEN", "OPER", "ORCE", "PEON", "PERO", "POEN", "RENT", "RONT", "TERN", "TERO", "TREN", "TRON", "NERO", "ORNE", "CEP", "PET", "POT", "TOP", "CEN", "CER", "CNE", "CNO", "ENT", "ETO", "NEP", "NET", "NOC", "NOT", "ORT", "PEN", "PER", "PON", "POR", "PRO", "REP", "RET", "ROP", "ROT", "TEN", "TER", "TON", "TOR", "EON", "ERO", "NER", "NOR", "ONE", "REN", "REO", "CE", "CO", "ET", "OP", "OT", "PE", "PO", "TE", "TO", "EN", "EO", "ER", "NO", "ON", "OR", "RE", "RO"]
    },
    {
        letters: ['B', 'U', 'T', 'E', 'L', 'K', 'A'],
        words: ["BLEKAUT", "BLUETKA", "BUTELKA", "BALETU", "BETULA", "BUKALE", "KABULE", "LABETU", "TABULE", "BLETKA", "BALUT", "BETUL", "BLATU", "BUKAL", "BUKAT", "BUKLA", "BUKLE", "BUTEK", "BUTKA", "BUTLA", "BUTLE", "KABLU", "KABUL", "KLUBA", "KUBLE", "TABLU", "TABUL", "TUBEK", "TUBKA", "BEATU", "LATKU", "TAKLU", "TALKU", "UBEKA", "AUTEK", "BALET", "BELKA", "BETKA", "ELUAT", "KABEL", "KABLE", "LABET", "TABEL", "TABLE", "TAELU", "TEAKU", "KALET", "KELTA", "LATEK", "TAKLE", "TALEK", "KLUB", "BAKU", "BALU", "BATU", "BEKU", "BELU", "BETU", "BLEU", "BUKA", "BULA", "BULE", "BUTA", "KULT", "LUBA", "LUBE", "TABU", "TUBA", "TUBE", "UBEK", "UBKA", "AKTU", "AKUT", "ALTU", "BLAT", "KATU", "KELU", "KETU", "KULA", "KULE", "KUTA", "KUTE", "LAKU", "LATU", "LEKU", "LUKA", "LUTA", "LUTE", "TALU", "TEKU", "TUKA", "TULE", "ULTA", "UTKA", "AULE", "BALE", "BEAT", "BEKA", "BELA", "BETA", "KABE", "KELT", "KLAT", "LABE", "TALK", "ELKA", "ETKA", "KALE", "KETA", "LEKA", "TAEL", "TALE", "TEAK", "TEKA", "BUK", "BUL", "BUT", "KUB", "LUB", "TUB", "KUL", "LUK", "LUT", "TUK", "TUL", "ALB", "ATU", "AUT", "BAK", "BAL", "BAT", "BEK", "BEL", "BET", "BLA", "BLE", "LAB", "LEU", "TAB", "TAU", "ULA", "ULE", "UTA", "AKT", "ALK", "ALT", "KAL", "KAT", "KEL", "KET", "KLE", "LAK", "LAT", "LEK", "TAK", "TAL", "TEK", "TKA", "TLE", "ALE", "ATE", "ETA", "KEA", "BU", "KU", "LU", "TU", "UL", "UT", "AU", "BA", "BE", "AL", "AT", "EL", "ET", "KA", "LA", "TA", "TE"]
    },
    {
        letters: ['K', 'U', 'C', 'H', 'N', 'I', 'A'],
        words: ["KUCHNIA", "UNIKACH", "KUCHNI", "KUNACH", "KUNICH", "HUKANI", "KAHUNI", "NIUCHA", "UNIACH", "INKACH", "KACHIN", "KANICH", "KINACH", "KNUCIA", "KUCANI", "NAKUCI", "UCINKA", "UNICKA", "KUCHA", "ANCHU", "ANKHU", "CHANU", "HAIKU", "HAUKI", "NIUCH", "CIUKA", "KICHA", "KNUCI", "KUCIA", "NICKU", "CHINA", "KAHIN", "KUNIA", "NAUKI", "UCINA", "UNICA", "UNIKA", "CANKI", "NICKA", "KUCH", "HAKU", "HAUK", "HUKA", "HUKI", "UCHA", "HANU", "HUAN", "HUNA", "ICKU", "KACU", "KICH", "KICU", "KUCA", "KUCI", "ANCH", "ANKH", "CHAN", "CHIA", "CHIN", "CHNA", "HAIK", "HAKI", "INKU", "KANU", "KINU", "KUNA", "KUNI", "NAUK", "NICH", "NUCI", "UNIK", "CKNI", "ICKA", "KACI", "KICA", "NICK", "UNIA", "INKA", "KAIN", "KANI", "KINA", "NACI", "NICA", "CHU", "HUK", "UCH", "HAU", "HUN", "KUC", "UHA", "ACH", "CHA", "CHI", "HAK", "ICH", "KUI", "KUN", "HAI", "HAN", "KAC", "KIC", "UNI", "CNA", "CNI", "INK", "KAI", "KAN", "KIN", "NIC", "ANI", "NAI", "HU", "KU", "AU", "HA", "HI", "NU", "CI", "KA", "KI", "IN", "NA", "NI"]
    },
    {
        letters: ['D', 'R', 'Z', 'E', 'W', 'K', 'O'],
        words: ["DRZEWKO", "DREWKO", "DWOREK", "REDZKO", "DRZEWO", "DWORZE", "WZOREK", "ZDROWE", "ZWOREK", "DEKOR", "DERKO", "DOKER", "KODER", "KODZE", "KREDO", "DRZEW", "KORZE", "KOWER", "KOZER", "KREWO", "KREZO", "KRZEW", "ODEZW", "ODRZE", "ODZEW", "OKRZE", "REDOW", "ROWEK", "RZEKO", "WODZE", "WORED", "WOREK", "WZROK", "WORZE", "ZERWO", "DEKO", "KORD", "KRED", "DERO", "DEWO", "DREW", "DRZE", "ERKO", "KORE", "KORZ", "KREW", "KREZ", "KRZE", "ODER", "OREK", "RDZE", "RDZO", "REDO", "RZEK", "WEKO", "WERK", "WOKE", "ORZE", "OWER", "REWO", "WORZ", "WRZE", "ZERO", "ZERW", "DEK", "DOK", "KOD", "DEO", "DER", "DOZ", "EKO", "KEO", "KER", "KOR", "KRO", "KWO", "ODE", "ODR", "OKR", "ORD", "ORK", "RED", "REK", "ROD", "ROK", "WEK", "WOK", "ZEK", "ERO", "EWO", "EZO", "ORZ", "OWE", "REO", "REW", "RWO", "WRE", "ZER", "ZEW", "DE", "DO", "KO", "OD", "OK", "EO", "ER", "EW", "EZ", "OR", "OZ", "RE", "RO", "WE", "ZE"]
    },
    {
        letters: ['M', 'I', 'E', 'J', 'S', 'C', 'E'],
        words: ["MIEJSCE", "MIEJSC", "EMISJE", "SEJMIE", "CESJE", "CESJI", "JECIE", "MISJE", "CISEM", "MECIE", "MISCE", "SIEJE", "ESICE", "MESIE", "SECIE", "SEMIE", "JMIE", "MIEJ", "SEJM", "CIEM", "EMCE", "ESEJ", "MICE", "SIEJ", "ECIE", "ESCE", "ESEM", "ESIC", "SICE", "SIEC", "ESIE", "JEM", "MEJ", "CES", "CIE", "CIS", "MEE", "MES", "MIS", "SEC", "SEM", "SIC", "SIM", "EIS", "SIE", "EJ", "JE", "CE", "CI", "EM", "IM", "ME", "MI", "EE", "ES", "SE", "SI"]
    },
    {
        letters: ['W', 'O', 'L', 'N', 'O', 'Ś', 'Ć'],
        words: ["WOLNOŚĆ", "NOWOŚĆ", "WOLNOĆ", "WOLNO", "WNOŚ", "WOLO", "NOWO", "OŚĆ", "NOŚ", "ONO", "OWO", "WON", "OŚ", "NO", "ON", "OO"]
    },
    {
        letters: ['M', 'A', 'R', 'K', 'A'],
        words: ["KARMA", "MAKRA", "MARAK", "MARKA", "RAMKA", "AKAM", "KAMA", "KARM", "KRAM", "MAKA", "MAKR", "AKAR", "AKRA", "ARAK", "ARKA", "KARA", "MAAR", "MARA", "RAKA", "RAMA", "KAM", "MAK", "AKA", "AKR", "ARK", "KAR", "KRA", "MAA", "MAR", "RAK", "RAM", "ARA", "AM", "KA", "MA", "AA", "AR"]
    },
    {
        letters: ['S', 'T', 'O', 'P', 'A'],
        words: ["PASTO", "PATOS", "POSTA", "POTAS", "PSOTA", "SAPOT", "SPOTA", "STOPA", "OPAT", "PAST", "POST", "PSOT", "SPAT", "SPOT", "STOP", "OPAS", "OSPA", "SAPO", "STOA", "TOSA", "PAT", "POT", "PST", "TOP", "OPA", "OSP", "PAS", "PSA", "SAP", "SPA", "STO", "TAO", "TAS", "TOS", "OSA", "AT", "OP", "OT", "PA", "PO", "TA", "TO", "TS", "AS", "OS"]
    }

];
