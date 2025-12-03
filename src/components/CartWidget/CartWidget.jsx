import {ShoppingCart} from 'lucide-react';

/* Componente del icono del carrito de compras */

const CartWidget = () => {
    return (
        <div className="flexitems-center cursor-pointer hover:text-blue-500 transition-colors"> 
            <ShoppingCart size={24}/>
            <span className="ml-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                3
            </span>
        </div>
    );
}

export default CartWidget;