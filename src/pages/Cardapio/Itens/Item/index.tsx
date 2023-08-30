import React from 'react';
import itens from '../itens.json';
import styles from './Item.module.scss';
type IProps = typeof itens[0]

export default function Item( props: IProps) {
  const {title, description, category, size, serving, price} = props
  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={props.photo} alt="imagem"/>
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
        <h2>{ title }</h2>
          <p>{ description}</p> 
        </div>
        <div className={styles.item__tags}>
          <div className={styles.item__tipo}> { category.label }</div>
          <div className={styles.item__porcao}> { size }</div>
          <div className={styles.item__qtdpessoas}> { serving }</div>
          <div className={styles.item__valor}>{ price }</div>
        </div>
      </div>
    </div>
  )
}
