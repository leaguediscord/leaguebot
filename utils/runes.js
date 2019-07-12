// Todas as runas do sistema
const runes = {
    Precision: [
        ['Press the Attack', '[X][ ][ ][ ] Press the Attack (Pressione o Ataque)'],
        ['Lethal Tempo', '[ ][X][ ][ ] Lethal Tempo (Ritmo Fatal)'],
        ['Fleet Footwork', '[ ][ ][X][ ] Fleet Footwork (Agilidade nos Pés)'],
        ['Conqueror', '[ ][ ][ ][X] Conqueror (Conquistador)'],

        ['Overheal', ' 1 [X][ ][ ] Overheal (Cura Excessiva)'],
        ['Triumph', ' 1 [ ][X][ ] Triumph (Triunfo)'],
        ['Presence of Mind', ' 1 [ ][ ][X] Presence of Mind (Presença de Espirito)'],

        ['Legend: Alacrity', '2 [X][ ][ ] Legend: Alacrity (Lenda: Espontaneidade)'],
        ['Legend: Tenacity', '2 [ ][X][ ] Legend: Tenacity (Lenda: Tenacidade)'],
        ['Legend: Bloodline', '2 [ ][ ][X] Legend: Bloodline (Lenda: Linhagem)'],

        ['Coup de Grace', '3 [X][ ][ ] Coup de Grace (Golpe de Misericórdia)'],
        ['Cut Down', '3 [ ][X][ ] Cut Down (Dilacerar)'],
        ['Last Stand', '3 [ ][ ][X] Last Stand (Até a Morte)']
    ],

    Domination: [
        ['Eletrocute', '[X][ ][ ][ ] Eletrocute (Eletrocutar)'],
        ['Predator', '[ ][X][ ][ ] Predator (Predador)'],
        ['Dark Harvest', '[ ][ ][X][ ] Dark Harvest (Colheita Sombria)'],
        ['Hail of Blades', '[ ][ ][ ][X] Hail of Blades (Chuva de Lâminas)'],

        ['Cheap Shot', ' 1 [X][ ][ ] Cheap Shot (Golpe Desleal)'],
        ['Taste of Blood', ' 1 [ ][X][ ] Taste of Blood (Gosto de Sangue)'],
        ['Sudden Impact', ' 1 [ ][ ][X] Sudden Impact (Impacto Repentino)'],

        ['Zombie Ward', '2 [X][ ][ ] Zombie Ward (Sentinela Zumbi)'],
        ['Ghost Poro', '2 [ ][X][ ] Ghost Poro (Poro Fantasma)'],
        ['Eyeball Collection', '2 [ ][ ][X] Eyeball Collection (Globos Oculares)'],

        ['Ravenous Hunter', '3 [X][ ][ ][ ] Ravenous Hunter (Caça Voraz)'],
        ['Ingenious Hunter', '3 [ ][X][ ][ ] Ingenious Hunter (Caça Ardilosa)'],
        ['Rentless Hunter', '3 [ ][ ][X][ ] Rentless Hunter (Caça Incansável)'],
        ['Ultimate Hunter', '3 [ ][ ][ ][X] Ultimate Hunter (Caça Suprema)']
    ],

    Sorcery: [
        ['Summon Aery', '[X][ ][ ] Summon Aery (Invocar Aery)'],
        ['Arcane Comet', '[ ][X][ ] Arcane Comet (Cometa Arcano)'],
        ['Phade Rush', '[ ][ ][X] Phade Rush (Ímpeto Gradual)'],

        ['Nullifyng Orb', ' 1 [X][ ][ ] Nullifyng Orb (Orbe Anulador)'],
        ['Manaflow Band', ' 1 [ ][X][ ] Manaflow Band (Faixa de Fluxo de Mana)'],
        ['Nimbus Cloak', ' 1 [ ][ ][X] Nimbus Cloak (Manto de Nimbus)'],

        ['Transcedence', '2 [X][ ][ ] Transcedence (Trancedência)'],
        ['Celerity', '2 [ ][X][ ] Celerity (Celeridade)'],
        ['Abisolute Focus', '2 [ ][ ][X] Abisolute Focus (Foco Absoluto)'],

        ['Scorch', '3 [X][ ][ ] Scorch (Chamuscar)'],
        ['Waterwalking', '3 [ ][X][ ] Waterwalking (Caminhar Sobre as Águas)'],
        ['Gathering Storm', '3 [ ][ ][X] Gathering Storm (Tempestade Crescente)']
    ],

    Resolve: [
        ['Grasp of the Undying', '[X][ ][ ] Grasp of the Undying (Aperto dos Mortos-Vivos)'],
        ['Aftershock', '[ ][X][ ] Aftershock (Pós-Choque)'],
        ['Guardian', '[ ][ ][X] Guardian (Guardião)'],

        ['Demolish', ' 1 [X][ ][ ] Demolish (Demolir)'],
        ['Font of Life', ' 1 [ ][X][ ] Font of Life (Fonte da Vida)'],
        ['Shield Bash', ' 1 [ ][ ][X] Shield Bash (Golpe de Escudo)'],

        ['Conditioning', '2 [X][ ][ ] Conditioning (Condicinamento)'],
        ['Second Wind', '2 [ ][X][ ] Second Wind (Ventos Revigorantes)'],
        ['Bone Plating', '2 [ ][ ][X] Bone Plating (Osso Revestido)'],

        ['Overgrowth', '3 [X][ ][ ] Overgrowth (Crescimento Excessivo)'],
        ['Revitalize', '3 [ ][X][ ] Revitalize (Revitalizar)'],
        ['Unflinching', '3 [ ][ ][X] Unflinching (Inabalável)']
    ],

    Inspiration: [
        ['Glacial Augment', '[X][ ][ ] Glacial Augment (Aprimoramento Glacial)'],
        ['Kleptomancy', '[ ][X][ ] Kleptomancy (Cleptomancia)'],
        ['Unsealed Spellbook', '[ ][ ][X] Unsealed Spellbook (Livro de Feitiços Deslacrado)'],

        ['Hextech Flashtraption', ' 1 [X][ ][ ] Hextech Flashtraption (Flashtração Hextec)'],
        ['Magical Footwear', ' 1 [ ][X][ ] Magical Footwear (Calçados Mágicos)'],
        ['Perfect Timing', ' 1 [ ][ ][X] Perfect Timing (Sincromia Perfeita)'],

        ['Future\'s Market', '2 [X][ ][ ] Future\'s Market (Mercado do Futuro)'],
        ['Minion Dematerializer', '2 [ ][X][ ] Minion Dematerializer (Pulverizador de Tropas)'],
        ['Biscuit Delivery', '2 [ ][ ][X] Biscuit Delivery (Entrega de Biscoitos)'],

        ['Cosmic Insight', '3 [X][ ][ ] Cosmic Insight (Perspicácia Cósmica)'],
        ['Approach Velocity', '3 [ ][X][ ] Approach Velocity (Velocidade de Aproximação)'],
        ['Time Warp Tonic', '3 [ ][ ][X] Time Warp Tonic (Tônico de Distorção do Tempo)']
    ],

    Additional: [
        ['Adaptive Force', '[X][ ][ ] Adaptive Force (Força Adaptativa)'],
        ['Attack Speed', '[ ][X][ ] Attack Speed (Velocidade de Ataque)'],
        ['Cooldown Reduction ', '[ ][ ][X] Cooldown Reduction (Redução de Tempo de Recarga)'],

        ['Armor', '[ ][X][ ] Armor (Armadura)'],
        ['Magic Resist', '[ ][ ][X] Magic Resist (Resistência Mágica)'],

        ['Scaling Health', '[X][ ][ ] Scaling Health (Vida)']
    ]
}

exports.runeCheck = (tree, rune) => {
    let response = {}
    switch(tree){
        case 'Precision':
            runes.Precision.forEach(runeAtual => {
                if(runeAtual[0] == rune){
                    response.rune = runeAtual[1]
                }
            })
            break
        case 'Domination':
            runes.Domination.forEach(runeAtual => {
                if(runeAtual[0] == rune){
                    response.rune = runeAtual[1]
                }
            })
            break
        case 'Sorcery':
            runes.Sorcery.forEach(runeAtual => {
                if(runeAtual[0] == rune){
                    response.rune = runeAtual[1]
                }
            })
            break
        case 'Resolve':
            runes.Resolve.forEach(runeAtual => {
                if(runeAtual[0] == rune){
                    response.rune = runeAtual[1]
                }
            })
            break
        case 'Inspiration':
            runes.Inspiration.forEach(runeAtual => {
                if(runeAtual[0] == rune){
                    response.rune = runeAtual[1]
                }
            })
            break
        case 'Additional':
            runes.Additional.forEach(runeAtual => {
                if(runeAtual[0] == rune){
                    response.rune = runeAtual[1]
                }
            })
            break
        default:
            response = { error: true, message:'Error on getting runes' }
    }

    if(!response.rune && !response.error) return { error: true, message:'Error on getting runes' }
    return response
}