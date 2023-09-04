import React, { useState } from 'react';
import styles from './Cardapio.module.scss';
import Buscador from './Buscador';
import logo from 'assets/logo.png'
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens';

export default function Cardapio() {
  const [busca, setBusca] = useState<string>('')
  const [filtro, setFiltro] = useState<number | null>(null)
  const [ordenador, setOrdenador] = useState<string>('')
  return (
    <main>
      <nav className={styles.menu}> <img src={logo} alt="" /> <h1>Pasta Mia</h1> </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>
          Home is where the pasta is
        </div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>
          Menu
        </h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>
        <Itens busca={busca} filtro={filtro} ordenador={ordenador}  />
      </section>
    </main>
  )
}