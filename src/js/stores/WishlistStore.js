/**
* Хранилище.
*
* @class WishlistStore
*/

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var WishlistConstants = require('../constants/WishlistConstants');

var assign = require('object-assign');

var CHANGE_EVENT = 'change';


// Данные о играх.
var games = [];



var WishlistStore = assign({}, EventEmitter.prototype, {

    /**
    * Получить смету.
    * @return {object}
    */
    getData: function() {
        var total = 0;
        games.forEach(function(item, i, arr) {
            if (item && (item.wishlist === true)) {
                total += item.price || 0;
            }
        });
        return {
            games: games,
            total: total
        }
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    /**
    * Добавляем подписчиков.
    * @param {function} callback
    */
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
    * Удаляем подписчиклов.
    * @param {function} callback
    */
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

// Регистрация обратного вызова для обработки всех обновлений.
AppDispatcher.register(function(action) {
    switch(action.actionType) {

        case WishlistConstants.WISHLIST_LOAD:           // Загрузка данных.
            var gamesData = action.data;
            var wishlist = action.wishlist;
            var gamesList = [];
            var item;
            
            for(var index in gamesData) { 
                item = {};
                item = gamesData[index];
                item.id = index;
                if (wishlist && wishlist.length && (wishlist[item.id] === true)) {
                    item.wishlist = true;
                }
                gamesList[item.id] = item;
            }
            games = gamesList;
            WishlistStore.emitChange();
            break;
    
        case WishlistConstants.WISHLIST_ADD_GAME:       // Добавление игры.
            var data = action.data;
            var gameId = data.id;
            games[gameId].wishlist = true;
            WishlistStore.emitChange();
            break;
            
        case WishlistConstants.WISHLIST_REMOVE_GAME:    // Удаление игры.
            var data = action.data;
            var gameId = data.id;
            games[gameId].wishlist = false;
            WishlistStore.emitChange();
            break;   

        case WishlistConstants.WISHLIST_REMOVE_ALL_GAME:    // Удаление всех игр.
            games.forEach(function(item, i, arr) {
                item.wishlist = false;
            });
            WishlistStore.emitChange();
            break;   
            
            
            
        default:
          // no op
      }
});

module.exports = WishlistStore;
