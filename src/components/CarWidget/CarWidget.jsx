import carshop from '../../assets/carshop.png'


const CarWidget = () => {
    return(
        <div className='flex  '>
            <img className='w-7 h-7' src={carshop}/>
            <div className='text-white pl-4 bg-purple-900 px-0.5 py-0.5 rounded-full'>3</div>
        </div>
    )
}

export default CarWidget