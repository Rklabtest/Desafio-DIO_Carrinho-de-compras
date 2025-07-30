// adicionar itens
import chalk from "chalk"

const addItemToCart = async (userCart, item) => {
  
  let cartHasItem = userCart.some(obj => obj.name === item.name 
    && obj.price === item.price 
    && obj.qtd === item.qtd)

  // teste para saber se item já existe no carrinho
  if (cartHasItem) {
    console.log(chalk.red(`O item ´"${item.name} (${item.qtd} unid x ${item.price})" já existe no carrinho.`))
    return
  }

  userCart.push(item)
  console.log(chalk.green(`${item.name} adicionado com sucesso!`))
}

// encontrar index
const findCartItem = async (userCart, name) => {
  const index = userCart.findIndex(product => product.name === name)
  
  if (index < 0) {
    console.log(chalk.red(`Item "${name}" não encontrado.`))
    
  } else {
    console.log(chalk.cyan(`Item encontrado: "${userCart[index].name} (${userCart[index].qtd} x ${userCart[index].price})"`))
  }

  return index
}

// deletar itens
const deleteItem = async (userCart, indexFound) => {

  if (indexFound < 0) {
    console.log(chalk.red('Impossível deletar.'))
    return
  }
  const itemToDelete = userCart[indexFound].name

  userCart.splice(indexFound, 1)
  console.log(chalk.green(`${itemToDelete} deletado com sucesso!\n`))
  return
}

// remover itens
const removeItem = async (userCart, indexFound) => {
  
  if (indexFound < 0) {
    console.log(chalk.red("Não foi possível remover."))
    return
  }

  if(userCart[indexFound].qtd > 1) {
    userCart[indexFound].qtd--
    console.log(chalk.green(`${userCart[indexFound].name} atualizado. Quantidade: ${userCart[indexFound].qtd}\n`))
    return
  }

  deleteItem(userCart, indexFound)
  return
}

// mostrar carrinho
const displayCart = async userCart => {
  console.log(chalk.bold.yellow('Lista de itens do carrinho:'))
  userCart.forEach((item, index) => {
    console.log(chalk.yellow(`${index + 1}. ${item.name} - R${item.price} (Qtd: ${item.qtd}) | Subtotal = R$${item.subtotal()}`))
  })
  
}

// calcular total
const calculateTotal = async userCart => {

  const result = userCart.reduce((total, item) => total +
    item.subtotal(), 0)

  console.log(chalk.bold.bgGreen(`SHOPEE CART TOTAL: R$${result}`))
}


export {
  addItemToCart, 
  findCartItem, 
  deleteItem, 
  removeItem,
  displayCart,
  calculateTotal
}