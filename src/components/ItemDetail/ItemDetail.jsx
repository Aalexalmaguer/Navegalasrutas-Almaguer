const ItemDetail = ({ id, name, img, category, description, price }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row">
            <div className="md:w-1/2">
                <img className="w-full h-full object-cover" src={img} alt={name} />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <span className="text-sm text-gray-500 uppercase tracking-wide">{category}</span>
                <h1 className="text-3xl font-bold text-gray-900 mt-2">{name}</h1>
                <p className="mt-4 text-gray-600 leading-relaxed">{description}</p>
                <div className="mt-8 flex items-center justify-between">
                    <span className="text-3xl font-bold text-blue-600">${price}</span>
                    <button className="bg-green-500 text-white py-3 px-8 rounded-full hover:bg-green-600 transition-colors font-semibold shadow-md">
                        Comprar Ahora
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;