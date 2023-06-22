import imgabout from "/kunai.jpg"

const Blog = () => {
  return (
    <div>
            <h2 className="text-center text-4xl font-semibold mt-3">Blog</h2>
            <hr/>

            <div class="container px-6 py-10 mx-auto">
                <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">From the blog</h1>

                <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
                    <img class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={imgabout} alt="" />

                    <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                        <p class="text-sm text-blue-600 uppercase font-bold">CATEGORIA</p>

                        <a href="#" class="block mt-4 text-2xl font-semibold text-gray-800 hover:underline md:text-3xl">
                            Kunai Case Split Keyboard
                        </a>

                        <p class="mt-3 text-sm text-blue-950 md:text-sm">
                            Compartimos los detalles del diseño similar a Angry Miao.
                        </p>

                        <a href="#" class="inline-block mt-2 text-blue-600 underline hover:text-blue-400">Leer más</a>

                        <div class="flex items-center mt-6">
                            <img class="object-cover object-center w-10 h-10 rounded-full" src={imgabout} alt="" />

                            <div class="mx-4">
                                <h1 class="text-sm text-blue-950 ">Carlos Aviles</h1>
                                <p class="text-sm text-gray-500 ">Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


    </div>
  )
}

export default Blog