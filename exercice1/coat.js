// Programme qui va m'aider à décider si je dois mettre mon manteau
// ou pas en fonction d'une méteo pluvieuse ou venteuse
let isRainy = true
let isWindy = false
let temperature = 16



if ((isRainy || isWindy) && temperature <= 17 ) {
  console.log('Mettez votre manteau')
} else {
  console.log('Nous n avez pas besoin de manteau today')
}; 

