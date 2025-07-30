
import chalk from "chalk"
import createItem from "./services/item.js"
import * as cartService from './services/cart.js'

const myCart = []

console.log(chalk.yellow.bold('***** BEM VINDO AO CARRINHO DE COMPRAS DA SHOPEE! *****\n'))

const item1 = await createItem("hotwheels ferrari", 20.99, 1)
const item2 = await createItem("hotwheels lamborghini", 39.99, 3)
const item3 = await createItem("hotwheels fusca", 72.99, 3)
const item4 = await createItem("hotwheels kombi", 129.99, 1)


// adicionar item
console.log('CRIAÇÃO DOS ITENS 1, 2, 3 e 4')
await cartService.addItemToCart(myCart, item1)
await cartService.addItemToCart(myCart, item2)
await cartService.addItemToCart(myCart, item3)
await cartService.addItemToCart(myCart, item4)

console.log('\nTESTANDO ADIÇÃO DE ITEM JÁ EXISTENTE - LAMBORGHINI')
await cartService.addItemToCart(myCart, item2)
console.log('')

// diminuir quantdade de item 
console.log('REMOÇÃO DE ITEM1 - FERRARI (ITEM ÚNICO SERÁ DELETADO)')
await cartService.removeItem(myCart, await cartService.findCartItem(myCart, item1.name))

console.log('TESTANDO REMOÇÃO DE ITEM JÁ REMOVIDO - FERRARI')
await cartService.removeItem(myCart, await cartService.findCartItem(myCart, item1.name))

console.log('\nREMOÇÃO DE ITEM2 - LAMBORGHINI (DECREMENTO)')
await cartService.removeItem(myCart, await cartService.findCartItem(myCart, item2.name))

// deletar item do carrinho
console.log('DELEÇÃO DE ITEM3 - FUSCA')
await cartService.deleteItem(myCart, await cartService.findCartItem(myCart, 'hotwheels fusca'))

// busca por item
console.log('BUSCANDO ITEM2 - LAMBORGHINI')
await cartService.findCartItem(myCart, 'hotwheels lamborghini')

console.log('\nBUSCANDO ITEM INEXISTENTE NO CARRINHO - FUSCA')
await cartService.findCartItem(myCart, 'hotwheels fusca')

// mostrar carrinho
console.log('\nEXIBINDO LISTA DE ITENS')
await cartService.displayCart(myCart)

// calcular total
console.log('\nCÁLCULO DO TOTAL')
await cartService.calculateTotal(myCart)

