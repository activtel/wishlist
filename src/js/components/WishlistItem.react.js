/**
* Желаемая игра.
*
* @class WishlistItem
*/

var React = require('react');
var WishlistActions = require('../actions/WishlistActions');

var WishlistItem = React.createClass({
	removeGame: function(e) {
		 WishlistActions.removeGame(this.props.game);
	},
    
    render: function() {
        return (
            <div className="wishlist-item" onClick={this.removeGame}>
				<div className="wishlist-item-name">{this.props.game.name}</div>
                <button className="btn" onClick={this.addGame}><i className="fa fa-times"></i></button>
            </div>
        );
    }
});

module.exports = WishlistItem;