import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <img className="w-full h-48 object-cover" src={img} alt={name} />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                <p className="text-xl font-bold text-blue-600 mt-2">${price}</p>
                <Link 
                    to={`/item/${id}`}
                    className="block mt-4 w-full bg-blue-600 text-white text-center py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                >
                    Ver Detalle
                </Link>
            </div>
        </div>
    );
};

export default Item;