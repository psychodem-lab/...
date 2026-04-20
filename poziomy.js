
const gameLevels = [
    {
        letters: ['A', 'K', 'O', 'T', 'R'],
        words: ["AKT", "KAT", "KOT", "KTO", "OKA", "TAK", "TOK", "KOTA", "RAK", "ROK", "TOR", "ORT", "KOR", "TAR", "ART", "TRA", "KORA", "ROTA", "TARO", "KART", "TORA", "TROK", "AKTOR"]
    },
    {
        letters: ['E', 'K', 'R', 'A', 'N'],
        words: ["ERA", "RAK", "AKR", "KAR", "KRA", "NAR", "RAN", "REN", "NER", "EKA", "AREK", "KARE", "RENA", "KERA", "EKRAN"]
    },
    {
        letters: ['K', 'R', 'O', 'S', 'T','I','K'],
        words: ["TIK", "KROSTKI", "KROS", "TOR", "SIK", "TOK", "SROKI"]
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
        letters: ['D', 'I', 'A', 'G', 'N', 'O', 'Z', 'A'],
        words: ["DANIA", "DIODA", "GANDA", "GONIA", "NAGDA", "ZADAN", "ZAGON", "ZGODA", "ZNOI", "DAGO", "DINA", "DOZA", "GANI", "GNAJ", "NOGA", "Oaza", "ZNAI", "DIAGNOZA"]
    },
    {
        letters: ['H', 'I', 'S', 'T', 'O', 'R', 'I', 'A'],
        words: ["ASTIR", "HAITI", "HISTO", "IIRSI", "IRASI", "OSTRA", "ROTAS", "SITRI", "STORA", "TRAIS", "TRIAS", "AHIR", "HART", "HISA", "HOST", "IOTA", "SITA", "TRIA", "HISTORIA"]
    },
    {
        letters: ['K', 'O', 'N', 'T', 'R', 'A', 'K', 'T'],
        words: ["AKTOR", "KARTKA", "KONTRA", "KOTAR", "KRATA", "KRTOK", "TARKO", "TOKKA", "TRAKT", "TART", "AKOR", "KANT", "KOKA", "KORA", "KORT", "KROK", "RONA", "TRON", "KONTRAKT"]
    },
    {
        letters: ['P', 'R', 'Ogram', 'A', 'M', 'O', 'W', 'A'],
        words: ["MAPA", "MORA", "PARA", "PORA", "RAMA", "ROPA", "WAGA", "WARA", "WORM", "AGAR", "GRAM", "GRAPA", "MARA", "MOPR", "PROM", "RAMA", "ROMA", "WAGI", "PROGRAMA"]
    },
    {
        letters: ['S', 'P', 'R', 'Z', 'E', 'D', 'A', 'Ż'],
        words: ["DARZ", "DRES", "PADS", "PARA", "PRAD", "PRAS", "REDA", "SPRA", "SZAD", "ZEDA", "ZERA", "ZEPS", "ZRAD", "ŻADE", "ŻREB", "SPRZEDAŻ"]
    },
    {
        letters: ['T', 'R', 'A', 'N', 'S', 'P', 'O', 'R'],
        words: ["APORT", "ASTRO", "OPART", "ORANT", "PANTO", "PASTR", "PORTA", "PRANO", "PROST", "ROANT", "SOPRA", "SPORT", "STANO", "STRON", "TORAN", "TRANPO", "TRANSPORT"]
    },
    {
        letters: ['W', 'A', 'R', 'S', 'Z', 'T', 'A', 'T'],
        words: ["ASTRAT", "STARTA", "TARAWA", "TATARA", "TRAWA", "WARSZT", "WARSZA", "WARTA", "ZWARA", "ZWARAT", "SATA", "SWAT", "TARA", "TRAT", "WATA", "WARSZTAT"]
    },
    {
        letters: ['Z', 'B', 'I', 'O', 'R', 'N', 'I', 'K'],
        words: ["BIORNI", "BRONIK", "IKONII", "KORNII", "ROBNIK", "ZBIORN", "ZBROIK", "BIOR", "BOKI", "BORN", "IRON", "KINO", "KORB", "ORBI", "ZBIK", "ZBIORNIK"]
    },
    {
        letters: ['P', 'R', 'Z', 'Y', 'G', 'O', 'D', 'A'],
        words: ["DROGA", "GRYPA", "ODRAP", "PAGOD", "PORADY", "PRODY", "PRZYDA", "ZAGRO", "ZGORA", "DARY", "GADY", "GORA", "GRYZ", "PARO", "PRZY", "RDZA", "RYZA", "PRZYGODA"]
    },
    {
        letters: ['K', 'O', 'M', 'P', 'U', 'T', 'E', 'R'],
        words: ["KOMER", "KOMPUT", "KORUM", "KREMP", "METRO", "MUREK", "POKER", "PRUTE", "REKOM", "RUMEK", "TEMPO", "TREKO", "RUTE", "TROM", "TRUM", "KOMPUTER"]
    },
    {
        letters: ['S', 'T', 'O', 'P', 'A'],
        words: ["PAS", "PAT", "POT", "STO", "TAP", "OSTA", "OPAT", "PASO", "POST", "POTA", "STOP", "TOPA", "STOPA"]
    }

];
