import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarFav: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.itens.find((p) => p.id === produto.id)) {
        alert('Produto ja add')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionarFav } = favoritosSlice.actions
export default favoritosSlice.reducer
