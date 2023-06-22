import imgabout from "/kunai.jpg"

const About = () => {
  return (
    <div>
            <h2 className="text-center text-4xl font-semibold mt-3">About</h2>
            <hr/>

            <div className="py-16 bg-white">  
              <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                  <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                    <img src={imgabout} alt="image" className="rounded-lg shadow-2xl"  />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">KeebMx</h2>
                      <p className="mt-6 text-gray-600">Comercializamos componentes electrónicos para ensamble de teclados mecánicos. Realizamos envios a todo México. También ofrecemos servicio de ensamble de teclados. Localizamos el teclado de tu preferencia si no lo tenemos en stock. </p>
                      <p className="mt-4 text-gray-600">Proximamente podrás configurar el teclado de tu preferencia, con los componentes que tu desees. Desde el tipo de case, switch de la especificación que desees y el tipo de keycaps que nos solicites.</p>

                    </div>
                  </div>
              </div>
            </div>
    </div>
  )
}

export default About