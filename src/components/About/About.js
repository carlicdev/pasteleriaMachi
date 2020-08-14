import React from 'react'
import img1 from '../../images/cheesecake3.jpg';
import img2 from '../../images/cheesecake.jpg';

const About = () => {
    return (
        <div>
            <div className='flip-container'>
                <div className='card'>
                    <div className='front' id='front-1'></div>
                    <div className='back' id='back-1'></div>
                </div>
            </div>
            <div className='img-card'>
                <img src={img1} alt='pastel de chocolate' className='img-btm'/>
                <img src={img2} alt='rebanada de pastel de chocolate' className='img-top'/>
            </div>
            <div className='mx-auto max-w-md mt-10 border border-black p-5'>
                <p>TO DO:</p>
                <ul>
                    <li>Landing page</li>
                    <li>Pop Up</li>
                    <li>Google Fonts</li>
                    <li>Gama de colores</li>
                    <li>Tamaño de imagenes</li>
                    <li>Quitar efecto parallax en dispositivos pequeños</li>
                    <li>Links dentro de la pagina principal(?)</li>
                    <li>Contact card</li>
                    <li>Testimonios(?)</li>
                    <li>Contenido Footer</li>
                </ul>
            </div>
        </div>
    )
}

export default About
