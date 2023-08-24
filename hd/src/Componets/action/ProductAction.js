export const getData = (payload) => ({
  type: 'GET_DATA',
  payload
})

export const addItem = (payload) => ({
  type: 'ADD_ITEM',
  payload 
})

export const IncItem = (value) => ({
  type: 'INC_ITEM',
  payload : value.item.id
})

export const DecItem = (value) => ({
  type: 'DEC_ITEM',
  payload : value.item.id
})

export const RemoveItem = (value) => ({
  type: 'REMOVE_ITEM',
  payload : value.item.id
})




