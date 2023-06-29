import React from "react";

class body extends React.Component{

    render(){
        return(
            
            <body>
            <header>
                <h1 class="titulo">Daniel David Parra Sánchez(7202) <span>Pàgina web con React</span></h1>
            </header>
         
            <div class="nav-bg">
            <nav class="navegacion1 contenedor">
                <a href="index.html">Inicio</a>
                <a href="https://www.autofacil.es/marcas/">Marcas</a>
                <a href="https://www.full-autos.com">Consecionarios</a>
                <a href="#">Contacto</a>
            </nav>
            </div>

            <section class="imagencarro">
                <div class="contenido-carro">
                    <h2>Consecionarios Falcon</h2>
                    <div class="ubicacion">
        
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-code" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                <path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" />
                                <path d="M20 21l2 -2l-2 -2" />
                                <path d="M17 17l-2 2l2 2" />
                            </svg>                   
                            Riobamba, Ecuador</p>
                    </div>
        
                    <a class="boton" href="https://solo.to/danielparra">Mis Redes</a>
                </div>
             </section>
             <main class="contenedor sombra">
                <h2>Informacion Adicional</h2>
                <div class="servicios">
                <section class="servicio">
                    <h3>Sobre Mi</h3>
                    <div class="iconos">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                    </div>
                    <p>Soy Daniel Parra un chico que estudia Ingenieria en Software y me encantaria seguir
                        la rama de Desarollador Web, con el fin de crear proyectos. 
                    </p>
                </section>
        
                <section class="servicio">
                    <h3>¿Que Ofrecemos?</h3>
                    <div class="iconos">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-description" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                            <path d="M9 17h6" />
                            <path d="M9 13h6" />
                        </svg>
                    </div>
                    <p>En esta pagina ofreceremos todo tipos de coches, con sus respectivos modelos, diseños y marcas
                        con el fin de que la gente conozca sobre los coches y todas sus especificaciones.
                    </p>
                </section>
              
            
                <section class="servicio">
                    <h3>Sobre La Pagina</h3>
                    <div class="iconos">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users-group" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                            <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
                            <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                            <path d="M17 10h2a2 2 0 0 1 2 2v1" />
                            <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                            <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
                        </svg>
                    </div>
                    <p>Estamos emocionados por presentar nuestra nueva página web, la cual estamos desarrollando utilizando React para ofrecer una experiencia mejorada a nuestros usuarios.</p>
                </section>
            </div>  
        
            
        
            <section>
                <h2>Contacto</h2>
            
            <form class="formulario">
                <fieldset>
                    <legend>Informanos tu duda llenando todos los campos</legend>
                    
                 <div class="contenedor-campos">
        
                    <div class="campo">
                        <label>Nombre</label>
                        <input class="input-text" type="text" placeholder="Nombre" />  
            
                    </div>
        
                    <div class="campo">
                       <label>Telefono</label>
                       <input class="input-text" type="tel" placeholder="Numero De Telefono" />
                    </div>
        
                    <div class="campo">
                        <label>Correo</label>
                        <input class="input-text" type="email" placeholder="Correo E-mail" />
                    </div>
                    
                    <div class="campo">
                        <label>Mensaje</label>
                        <textarea class="input-text"></textarea>
                    </div>
                </div>    
        
        
                    <div class="aliniar-derecha flex">
                        <input class="boton w-100" type="submit" value="Enviar" />  
                    </div>
        
                </fieldset>
            </form>
          </section>
         
         </main>
        
        </body>

        )

    }


}

export default body;