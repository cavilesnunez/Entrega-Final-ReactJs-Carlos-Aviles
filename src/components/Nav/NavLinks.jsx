

const NavLinks = () => {
    const links = [
        {name: "Products", submenu: true,sublink:[{
            Head:"Keyboard",
            sublink:[
                {name:"Split",link:"/"},
                {name:"30%",link:"/"},
                {name:"40%",link:"/"},
                {name:"60%",link:"/"},
                {name:"Full",link:"/"},

            ]
        }]},
        {name: "Blog"},
        {name: "About"},
        {name: "Contact"}

    ]


  return (
    <>
    {
        links.map(Link=>(
            <div>
                <div className='px-3 text-left md:cursor-pointer'>
                    <h1 className='py-7'>{Link.name}</h1>

                </div>
            </div>

        ))
    }

    </>
  )
}

export default NavLinks