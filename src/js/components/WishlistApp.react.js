/**
* Controller-View
* ���� ��������� �������� ��� "Controller-View". �� ��������� �� ��������� � WishlistStore � �������� ����� ������ ����� ��������.
*
* @class WishlistApp
*/
var React = require('react');

var Wishlist = require('./Wishlist.react');
var WishlistStore = require('../stores/WishlistStore');


/**
 * �������� ������� ��������� ���������.
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
    
    // ������������� �� ��������� � ���������.
    componentDidMount: function() {
        WishlistStore.addChangeListener(this._onChange);
        
    },

    // ������������� �� ��������� � ���������.
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
    * ���������� ������� 'change' ����������� �� ���������.
    */
    _onChange: function() {
        this.setState(getWishlistState());
    }
});

module.exports = WishlistApp;