function replaceString(val) {
  return val.replace('+', '').replace('-', '').replace('/', '').replace('x', '').replace('*', '')
}

export const calculateWeakness = (weaknesses) => {
  let weakness = 0

  try {
    weaknesses.forEach((w) => {
      if (Object.hasOwnProperty.call(w, 'value')) {
        const wVal = Number(replaceString(w.value))
        weakness += wVal
      }
    })
  } catch (e) {
    return 0
  }
  /**
   * Weakness level calculation multiply by 100, maximum is 100.
   * e.g. if value is 1 set it to 100, otherwise 0
   */

  weakness *= 100

  if (weakness === 1) {
    return 100
  } else if (weakness > 100) {
    return 100
  } else {
    return 0
  }
}

export const calculateAtack = (attacks) => {
  let attack = 0
  try {
    attacks.forEach((w) => {
      if (Object.hasOwnProperty.call(w, 'value')) {
        const wVal = Number(replaceString(w.value))
        attack += wVal
      }
    })
  } catch (e) {
    return 0
  }
  /**
   * Strength level calculation multiply by 50, maximum is 100.
   * e.g. if value is 1 set it to 50, 2 set it to 100, otherwise 0.
   */


  attack *= 50

  if (attack === 1) {
    return 50
  } else if (attack === 2) {
    return 100
  } else if (attack > 100) {
    return 100
  } else {
    return 0
  }
}

export const calculateDamage = (damages) => {
  let damage = 0

  try {
    damages.forEach((w) => {
      if (Object.hasOwnProperty.call(w, 'value')) {
        const wVal = Number(replaceString(w.value))
        damage += wVal
      }
    })
  } catch (e) {
    return 0
  }

  return damage
}

export const calculateHappiness = (hp, damage, weak) => {
  return Number(((Number(hp) / 10) + (Number(damage) / 10) + 10 - (Number(weak))) / 5)
}

export const formatHP = (val) => {
  if (val > 100) {
    return 100
  }

  if (val < 0) {
    return 0
  }

  return val
}

export const calculate = (hpIn, atkArr, weakArr) => {
  const hp = formatHP(hpIn)
  const weak = calculateWeakness(weakArr)
  const atk = calculateAtack(atkArr)
  const damage = calculateDamage(atkArr)
  const happiness = calculateHappiness(hp, damage, weak)

  return {
    hp,
    weak,
    atk,
    damage,
    happiness: Math.abs(parseInt(happiness, 10)),
  }
}