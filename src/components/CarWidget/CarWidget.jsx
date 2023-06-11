import carshop from '../../assets/carshop.png'


const CarWidget = () => {
    return(
        <div className='flex  '>
            <img className='w-6' src={carshop}/>
            <div className='text-white pl-4 bg-purple-900 '>3</div>
        </div>
    )
}

export default CarWidget