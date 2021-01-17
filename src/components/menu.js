import React from 'react'
import { Link } from 'react-router-dom'


function Menu() {
    return (
        <div>
            <ul>
                <li><Link to="">Home</Link></li>
                <li><Link to="about">Escola</Link></li>
                <li><a href="classes">Aulas</a></li>
                <li><a href="services">Kung Fu | Taichi</a></li>
                <li><a href="team">Equipe</a></li>
                <li><a href="">+</a>
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