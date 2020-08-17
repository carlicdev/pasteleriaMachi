import React from 'react'
import img1 from '../../images/cheesecake3.jpg';
import img2 from '../../images/cheesecake.jpg';

const About = () => {
    return (
        <div className='bg-gray-100'>
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
                <p>NOTAS:</p>
                <p>*En el cheesecake cambie un poco el color y el grosor de la fuente y creo que se ve mejor. la otra al ser demasiado delgada se ve rara en mis monitores. </p>
                <p>*Que piensas del color de los titulos de los pasteles y el texto. Es un amarillo tirandole a dorado que se parece al de machi pero no distingo bien los colores. Dime con que colores probamos</p>
                <p>*La fuente que usaste para el logotipo no esta en google fonts puse dos de prueba solo para ver los titulos en cursiva. Si quieres busca alguna cursiva que te busque.</p>
                <p>*Puse el fondo blanco en la pagina principal y en esta gris para que compares y decidas</p>
                <p>*No use el logo de la M en la barra de navegación porque o ensancha mucho la barra o se ve muy chica la M. Ademas lo mandaste en .jpeg, los logos plos queremos sin fondo y en .png o .svg</p>
                <p>*Use la M en la forma de contacto</p>
                <p>En el footer puse unos logos. a ver si esos quieres o prefieres otro estilo. Que mas quieres que lleve el footer? </p>
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
