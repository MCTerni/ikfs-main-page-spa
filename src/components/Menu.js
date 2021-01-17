import React from 'react'
import { Link } from 'react-router-dom'


function Menu() {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Escola</Link></li>
                <li><Link to="/classes">Aulas</Link></li>
                <li><Link to="/styles">Kung Fu | Taichi</Link></li>
                <li><Link to="/team">Equipe</Link></li>
                <li><a href='#'>+</a>
                    <ul className="dropdown">
                        <li><Link to="timetable">Horários</Link></li>
                        <li><Link to="booking">Agende!</Link></li>
                        <li><Link to="gallery">Galeria</Link></li>
                        <li><Link to="blog">Conteúdos</Link></li>
                    </ul>
                </li>
                <li><Link to="contact">Contato</Link></li>
            </ul>
        </div>
    )
}

export default Menu;