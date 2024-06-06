
import ProdutoComponent from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

const ProdutosContainer = () => {
  const { data: produtos } = useGetProdutosQuery()

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <ProdutoComponent key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosContainer
