import React from 'react'
import filtros from './filtros.json'

type filtro = {
  label: string,
  id: number,
}

export default function Filtros() {
  const selecionarFiltro = ( opcao : filtro ):void => {

  }
  return (
    <div>{ filtros.map((opcao) => (
      <button key={opcao.id} onClick={() => selecionarFiltro(opcao) }>{ opcao.label }</button>
    )
    )}</div>
  )
}
