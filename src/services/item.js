// açãoes que item pode fazer


// criar item
const createItem = async (name, price, qtd) => {
  return {
    name,
    price,
    qtd,
    subtotal: () => price * qtd
  }
}


export default createItem