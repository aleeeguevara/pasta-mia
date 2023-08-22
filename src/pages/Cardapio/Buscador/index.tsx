
import React, { SetStateAction } from 'react'
import styles from './Buscador.module.scss'
import { CgSearch } from 'react-icons/cg'


type Props = {
  busca: string;
  setBusca: React.Dispatch<SetStateAction<string>>;
}

export default function Buscador({busca, setBusca}: Props) {
  return (
    <div className={styles.buscador}>
      <input 
        type="text"
        value={busca}
        onChange={evento => setBusca(evento.target.value)}
      />
      <CgSearch size={30} color="#f50057" />
    </div>
  )
}
