import Item from "../Item/Item";

const ItemList = ({ products }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((prod) => (
                <Item key={prod.id} {...prod} />
            ))}
        </div>
    );
};

export default ItemList;