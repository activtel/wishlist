/**
* Действия.
*
* @class WishlistActions
*/

var AppDispatcher = require('../dispatcher/AppDispatcher');
var WishlistConstants = require('../constants/WishlistConstants');
var data = require('../products.json'); 

// Обертка для доступа к localstorage.
function store (namespace, data) {
    if (data) {
        return localStorage.setItem(namespace, JSON.stringify(data));
    }

	var store = localStorage.getItem(namespace);
	return (store && JSON.parse(store)) || [];
}

var WishlistActions = {
       
   /**
    * Загрузить данные.
	*
    * @method loadData
	*/
    loadData: function() {
        // Получить данные из localStorage.
        var wishlist = store("wishlist");
        // Для эмуляции AJAX-запроса используем setTimeout;
        setTimeout(function() {
            AppDispatcher.dispatch({
                actionType: WishlistConstants.WISHLIST_LOAD,
                data: data,
                wishlist: wishlist
            });
        }, 1000);
    },
   
    /**
    * Добавить игру.
	*
    * @method addGame
	*/
    addGame: function(data) {
        // Получить данные из localStorage и обновить их.
        var wishlist = store("wishlist");
        wishlist[data.id] = true;
        store("wishlist", wishlist);
        
        AppDispatcher.dispatch({
            actionType: WishlistConstants.WISHLIST_ADD_GAME,
            data: data
        });
    },

    /**
    * Удалить игру.
	*
    * @method removeGame
	*/
    removeGame: function(data) {
        // Получить данные из localStorage и обновить их.
        var wishlist = store("wishlist");
        wishlist[data.id] = false;
        store("wishlist", wishlist);
        
        AppDispatcher.dispatch({
            actionType: WishlistConstants.WISHLIST_REMOVE_GAME,
            data: data
        });
    },
    
    /**
    * Удалить все игры.
	*
    * @method removeAllGame
	*/
    removeAllGame: function(data) {
        // Очистить данные из localStorage.
        store("wishlist", []);
        AppDispatcher.dispatch({
            actionType: WishlistConstants.WISHLIST_REMOVE_ALL_GAME,
            data: data
        });
    },
    
};

module.exports = WishlistActions;
