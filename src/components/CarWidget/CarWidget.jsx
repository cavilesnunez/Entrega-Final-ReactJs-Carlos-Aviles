import carshop from "../../assets/carshop.png";

const CarWidget = () => {
    return (
        <div className="flex  ">
            <img className="w-6 mr-1 ml-5" src={carshop} />
            <div className="text-white p-0.5 bg-purple-900 rounded-xl">3</div>
        </div>
    );
};

export default CarWidget;
