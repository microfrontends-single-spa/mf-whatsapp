# Microfrontend Whatsapp

<p style='text-align: justify;'> Este proyecto es un microfrontend desarrollado en vue versión 3.2.13 y con single-spa en su version 2.1.0. Su principal función es visualizar funcionalidades limitadas de whatsapp. </p>

<p align="center">
    <img src="https://hme-mf-resources.netlify.app/src/assets/hme-mf-resources/images/mf-whatsapp.png"/>
</p>

## Orquestador

<p style='text-align: justify;'> El orquestador de este microfrontend se encuentra en el siguiente <a href="https://github.com/microfrontends-single-spa/mf-root-config">repositorio</a> </p>

## Storybook

<p style='text-align: justify;'> El proyecto consta de una serie de componentes los cuales pueden ser visualizados e interactuar con ellos a través de los storybooks en el siguiente enlace <a href="https://storybook-mf-whatsapp.netlify.app">Storybook</a>.</p> 

## Servidor de desarrollo

<p style='text-align: justify;'> Primero debemos clonar el código del <a href="https://github.com/microfrontends-single-spa/mf-whatsapp">repositorio</a> y con una terminal instalar las dependencias</p> 

```sh
npm i
```

<p style='text-align: justify;'> Luego debemos ejecutar</p> 

```sh
npm run serve
```

<p style='text-align: justify;'> Esto levantará un servidor de desarrollo localhost en el puerto 8084 </p> 


## Construcción

<p style='text-align: justify;'> Los archivos generados a través del proceso de contrucción se almacenan en la carpeta <strong>dist</strong>, para construir el proyecto debemos ejecutar el siguiente comando en una terminal</p> 


```sh
npm run build
```

## Whatsapp
<p style='text-align: justify;'> Este micro-frontend es una versión simplificada del proyecto whatsapp que he desarrollado, el cual se encuentra en el siguiente <a href="https://lmac-whatsapp.netlify.app">enlace</a>. Este proyecto se encuentra en el siguiente repositorio <a href="https://github.com/lamatcalderon/whatsapp-front">Whatsapp</a></p> 
