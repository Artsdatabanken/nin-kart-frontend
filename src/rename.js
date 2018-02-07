const replacements = {
  Rødlistekategorier: 'Rødliste',
  Rotnivå: 'Natur',
  //    'RKAT': "RL",
  //    'MIV' : "MV",
  '"EN"': '"Truet"',
  '"VU"': '"Sårbar"',
  '"NT"': '"Nær truet"',
  '"DD"': '"Datamangel"',
  //    "RKAT-3": "RL_EN",
  //    "RKAT-4": "RL_VU",
  //    "RKAT-5": "RL_NT",
  //    "RKAT-6": "RL_DD",
}
const rename = data => {
  let text = JSON.stringify(data)
  Object.keys(replacements).forEach(k => {
    text = text.replace(k, replacements[k])
  })
  return JSON.parse(text)
}

export default rename