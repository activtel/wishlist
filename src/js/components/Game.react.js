/**
* Игра.
*
* @class Game
*/

var React = require('react');
var WishlistActions = require('../actions/WishlistActions');

var Game = React.createClass({
    
    // Обработка нажатия на кнопке "Добавить"
	addGame: function(e) {
        WishlistActions.addGame(this.props.game);
	},
    
    render: function() {
        var wislistClass="btn";
        var textButtn = "Добавить";
        var textPrice = "";
        if (this.props.game.wishlist ===true) {
            textButtn = "В списке";
            wislistClass="btn wishlist";
        }
        if (this.props.game.price > 0) {
            textPrice = this.props.game.price + ' руб.';
        }
        return (
            <div className="col-md-3 col-sm-6 col-xs-12 item">
				<img src={this.props.game.cover} className="img-responsive center-block" alt={this.props.game.name} />
				<button className={wislistClass} onClick={this.addGame}>{textButtn}</button>
				<div className="text-center">
					<h4>{this.props.game.name}</h4>
					<h5>{textPrice}</h5>
				</div>
				
            </div>
        );
    }
});

module.exports = Game;