function manufacture(gifts, materials) {
  return gifts.filter(gift => {
    return [...gift].every(material => materials.includes(material));
  })
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa';

const result = manufacture(gifts, materials)

// 270 puntos