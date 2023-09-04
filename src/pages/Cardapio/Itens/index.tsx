import React, {useEffect, useState} from 'react'
import itens from './itens.json'
import styles from './Itens.module.scss';
import Item from './Item';

interface IProps {
  busca: string;
  ordenador: string;
  filtro: number | null;
}
type IItens = typeof itens; 


export default function Itens( { busca, ordenador, filtro }: IProps) {
  const [itensFiltrados, setItensFiltrados] = useState<IItens>(itens)
  const buscaTitle = (titulo : string) => {
    return (titulo.toLowerCase()).match(`${busca}`)
  }
  const buscaFiltro = (categoryId : number) => {
    if(filtro !== null) return categoryId === filtro;
    return true
  }
  const ordenar = (itens:IItens):IItens  =>  {
    switch (ordenador) {
      case 'porcao':
        return itens.sort((a,b) => a.size > b.size ? 1 : -1)
      case 'qtd-pessoas':
        return itens.sort((a,b) => a.serving > b.serving ? 1 : -1)
      case 'preco':
        return itens.sort((a,b) => a.price > b.price ? 1 : -1)

      default:
        return itens;
    }
  }
  useEffect(() => {
     let filtros = itens.filter((item) =>  buscaTitle(item.title) && buscaFiltro(item.category.id))

      setItensFiltrados(ordenar(filtros));

  }, [busca, filtro, ordenador])
  

  
  return (  
    <div className={styles.itens}>{ itensFiltrados.map((item) => (
      <div>
        <Item {...item} key={item.id} />
      </div>
    ))}</div>
  )
}
