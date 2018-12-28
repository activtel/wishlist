/**
* Controller-View
* Этот компонент работает как "Controller-View". Он реагирует на изменения в WishlistStore и передает новые данные своим потомкам.
*
* @class WishlistApp
*/
var React = require('react');

var Wishlist = require('./Wishlist.react');
var WishlistStore = require('../stores/WishlistStore');


/**
 * Получить текущее состояние хранилища.
 */
function getWishlistState() {
    return {
        loaded: false,
        data: WishlistStore.getData(),
    };
}

var WishlistApp = React.createClass({
    getInitialState: function() {
        return  getWishlistState();
    },
    
    // Подписываемся на изменения в хранилище.
    componentDidMount: function() {
        WishlistStore.addChangeListener(this._onChange);
        
    },

    // Подписываемся на изменения в хранилище.
    componentWillUnmount: function() {
        WishlistStore.removeChangeListener(this._onChange);
    },
    /**
    * @return {object}
    */
    render: function() {
        return (
            <Wishlist wishlist={this.state} />
        );
    },
    
    /**
    * Обработчик событий 'change' поступающих из хранилища.
    */
    _onChange: function() {
        this.setState(getWishlistState());
    }
});

module.exports = WishlistApp;