import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

// import { goods_list } from '../Data/goods_list.js';

//загрузить данные с mongodb (goods) и передать их на страницу (frontend)
/*добавление товаров в коллекцию goods осуществляется с помощью
Admin Panel*/

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const url = 'http://localhost:4000';
    const [token, setToken] = useState('');

    //управление добавлением и удалением товары в корзину
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    };

    const deleteFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    //изначально присваиваем пустой массив листу с товарами для собак
    const [goods_list, setGoods_list] = useState([]);

    const fetchGoodList = async () => {
        const response = await axios.get(url + '/api/goods/list');
        setGoods_list(response.data.data);
    };

    useEffect(() => {
        //load data from mongodb to frontend
        async function loadData() {
            await fetchGoodList();
            if (localStorage.getItem('token')) {
                setToken(localStorage.getItem('token'));
            }
        }
        loadData();
    });

    const contextValue = {
        url,
        token,
        setToken,
        goods_list,
        cartItems,
        setCartItems,
        addToCart,
        deleteFromCart
    };
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
