
const gameLevels = [
    {
        letters: ['A', 'K', 'T', 'O', 'R'],
        words: ["AKTOR", "KAROT", "KARTO", "KORAT", "KOTAR", "KRATO", "RATKO", "TARKO", "TAROK", "TROKA", "KART", "KATO", "KORT", "KOTA", "KRAT", "TAKO", "TRAK", "TROK", "AORT", "ARKO", "KARO", "KORA", "OKAR", "OKRA", "ORKA", "ORTA", "RATO", "ROTA", "TARO", "TORA", "AKT", "KAT", "KOT", "KTO", "TAK", "TKA", "TOK", "AKR", "ARK", "KAR", "KOR", "KRA", "KRO", "OKA", "OKR", "ORK", "ORT", "RAK", "RAT", "ROK", "ROT", "TAO", "TAR", "TOR", "TRA", "ARO", "ORA", "AT", "KA", "KO", "OK", "OT", "TA", "TO", "AR", "OR", "RO"]
    },
    {
    letters: ['P', 'L', 'A', 'N', 'E', 'T', 'A'],
    words: ["APELANT", "NAPLETA", "PLANETA", "TAPLANE", "NAPLET", "PALANT", "PALETA", "PLANET", "PLATAN", "ANTALE", "ETANAL", "NALEPA", "PANELA", "PATENA", "APLET", "LEPTA", "PALET", "PALTA", "PELTA", "PLANT", "TAPLA", "ALTAN", "APATE", "LENTA", "NALEP", "NAPAL", "PALNA", "PALNE", "PANEL", "PATEN", "PLENA", "TAELA", "ANALE", "ELANA", "ENATA", "LEPT", "PALT", "PELT", "ALPA", "ALTA", "APEL", "APLA", "APLE", "ETAP", "SJPLAPA", "LATA", "LENT", "LEPA", "PALA", "PALE", "PANT", "PATA", "PELA", "PETA", "PLAN", "TAEL", "TALA", "TALE", "TLEN", "ANAL", "ANTA", "ELAN", "ENAT", "ENTA", "ETAN", "LANA", "LANE", "NAPA", "NATA", "NETA", "PANA", "PEAN", "PENA", "TANA", "ALP", "ALT", "LAT", "LEP", "PAL", "PAT", "PEL", "PET", "PLE", "TAL", "TLE", "ALA", "ALE", "ANT", "ATA", "PATE", "ENT", "ETA", "LEN", "NAP", "NAT", "NEP", "NET", "PAN", "PEN", "TAN", "TEN", "ANA", "AL", "AT", "EL", "ET", "LA", "PA", "PE", "TA", "TE", "AA", "EN", "NA"]
    },
    {
        letters: ['E', 'K', 'R', 'A', 'N'],
        words: ["EKRAN", "KARNE", "NERKA", "RANEK", "ANKR", "AREK", "ERKA", "KARE", "KRAN", "RANK", "AREN", "NERA", "RENA", "AKR", "ARK", "KAN", "KAR", "KEA", "KER", "KRA", "NEK", "RAK", "REK", "ERA", "NAR", "NER", "RAN", "REA", "REN", "NA"]
    },
    {
        letters: ['K', 'R', 'O', 'S', 'T','I','K'],
        words: ["TIK", "KROSTKI", "KROS", "TOR", "SIK", "TOK", "SROKI"]
    },
    {
        letters: ['S', 'Z', 'K', 'O', 'Ł', 'A'],
        words: ["KOS", "KOSZ", "KOZA", "KOŁA", "OSŁA", "SOK", "SZOK", "ŁOZA", "SZKOŁA"]
    },
    {
        letters: ['L', 'A', 'P', 'T', 'O', 'P'],
        words: ["LOT", "PAL", "PAT", "PLOT", "POL", "POP", "POT", "LAPTOP"]
    },
    {
        letters: ['M', 'I', 'A', 'S', 'T', 'O'],
        words: ["MAT", "MIT", "MOST", "OST", "SAM", "SIM", "SIT", "SITO", "SOM", "SOMA", "STO", "TAM", "TOM", "MIASTO"]
    },
    {
        letters: ['O', 'B', 'R', 'A', 'Z'],
        words: ["BAR", "BAZ", "BOA", "BOR", "BORA", "BRA", "OAZ", "OBRA", "RAB", "RAZ", "ROB", "OBRAZ"]
    },
    {
        letters: ['D', 'R', 'O', 'G', 'A'],
        words: ["DAG", "DAR", "DOG", "GAR", "GOR", "GRA", "GRAD", "GRO", "ODA", "ODR", "OGAR", "RAD", "ROD", "DROGA"]
    },
    {
        letters: ['S', 'M', 'O', 'K', 'I'],
        words: ["SOK", "KOS", "SOM", "MOS", "KIM", "MIK", "KOM", "SIK", "KIS", "SKI", "KOSI", "MOKI", "SMOK", "SKOM", "SOKI", "MIKO", "SMOKI"]
    },
    {
        letters: ['B', 'R', 'A', 'K', 'I'],
        words: ["BAK", "KAB", "BAR", "RAB", "ARB", "RAK", "AKR", "KAR", "KRA", "IRA", "KIR", "BIK", "BARK", "KRAB", "BRAK", "BAKI", "KARI", "RAKI", "KIRA", "BARI", "BIRA", "BRAKI"]
    },
    {
        letters: ['P', 'Y', 'T', 'A', 'N', 'I', 'E'],
        words: ["ANT", "ENT", "ETA", "ETAN", "ETAP", "ITA", "NAP", "NAT", "NEP", "NET", "NIE", "NIP", "NIT", "PAN", "PANI", "PAT", "PEN", "PET", "PIAN", "PIN", "PIT", "PITA", "TAI", "TAP", "TEN", "TYP", "PYTANIE"]
    },
    {
        letters: ['K', 'W', 'I', 'A', 'T'],
        words: ["AKT", "KAT", "KIWA", "KWIT", "TAI", "TIK", "WAT", "WIK", "WIT", "KWIAT"]
    },
    {
        letters: ['E', 'K', 'R', 'A', 'N'],
        words: ["ERA", "RAK", "KAN", "REK", "AREK", "ARKA", "ERKA", "EKAN", "KARE", "NERA", "AREN", "KRAN", "NERK", "EKRAN"]
    },
    {
        letters: ['R', 'A', 'D', 'I', 'O'],
        words: ["DAR", "DOA", "ORA", "RAD", "ROD", "ROI", "DORA", "ODRA", "DIOR", "ROID", "DRIO", "RADO", "RADIO"]
    },
    {
        letters: ['T', 'R', 'A', 'W', 'A'],
        words: ["RAT", "TAR", "WAR", "ARA", "ARTA", "RATA", "TARA", "WATA", "WARA", "TRWA", "TAWA", "TRAWA"]
    },
    {
        letters: ['P', 'R', 'E', 'Z', 'E', 'N', 'T'],
        words: ["ENT", "NEP", "NET", "PEN", "PER", "PERT", "PET", "PRE", "RENT", "REP", "RET", "TERN", "TEZ", "ZET", "PREZENT"]
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
