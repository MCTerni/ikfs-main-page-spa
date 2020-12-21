import React from 'react'
import { Link } from 'react-router-dom'


function Menu() {
    return (
        <div>
            <ul>
                <li><Link to="">Home</Link></li>
                <li><Link to="about">Escola</Link></li>
                <li><a href="./classes.html">Horários</a></li>
                <li><a href="./services.html">Kung Fu | Taichi</a></li>
                <li><a href="./team.html">Equipe</a></li>
                <li><a href="">+</a>
                    <ul className="dropdown">
                        <li><a href="./about-us.html">Sobre Nós</a></li>
                        <li><a href="./class-timetable.html">Horários</a></li>
                        <li><a href="./bmi-calculator.html">Agende!</a></li>
                        <li><a href="./team.html">Equipe</a></li>
                        <li><a href="./gallery.html">Galeria</a></li>
                        <li><a href="./blog.html">Conteúdos</a></li>
                    </ul>
                </li>
                <li><a href="./contact.html">Contato</a></li>
            </ul>
        </div>
    )
}

export default Menu;