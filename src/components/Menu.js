import React from 'react'

function Menu() {
    return (
        <div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">Escola</a></li>
                <li><a href="/classes">Aulas</a></li>
                <li><a href="/styles">Kung Fu | Taichi</a></li>
                <li><a href="/team">Equipe</a></li>
                <li><a href='#'>+</a>
                    <ul className="dropdown">
                        <li><a href="timetable">Horários</a></li>
                        <li><a href="booking">Agende!</a></li>
                        <li><a href="gallery">Galeria</a></li>
                        <li><a href="blog">Conteúdos</a></li>
                    </ul>
                </li>
                <li><a href="contact">Contato</a></li>
            </ul>
        </div>
    )
}

export default Menu;