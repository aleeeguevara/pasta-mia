import React from 'react'
import itens from './itens.json'
import styles from './Itens.module.scss';
import Item from './Item';


export default function Itens() {
  return (
    
    <div className={styles.itens}>{ itens.map((item) => (
      <div>
        <Item {...item} key={item.id} />
      </div>
    ))}</div>
  )
}
