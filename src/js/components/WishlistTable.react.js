/**
* Таблица с желаемыми играми.
*
* @class WishlistItem
*/

var React = require('react');
var WishlistActions = require('../actions/WishlistActions');
var WishlistItem = require('./WishlistItem.react');


var WishlistTable = React.createClass({

    removeAllGame: function(e) {
		 WishlistActions.removeAllGame();
	},

    render: function() {
        var propsGames = this.props.wishlistGames;
        var games = [];
        var total;
        
        for(var index in propsGames) { 
            games.push(<WishlistItem key={index} game={propsGames[index]}/>);
        }
        
        if (this.props.total > 0) {
            total = <div className="col-md-12 total">
                    Сумма: <span className="total-price">{this.props.total}</span> руб.
                    <div>
                        <a href="#" onClick={this.removeAllGame}>Очистить список</a>
                    </div>
                </div>
        }
        
        return (
            <div className="row wishlist-table">
                <div className="col-md-12">
                    <h3 className="wishlist-header">Список желаемого</h3>
                    {games}
                </div>
                {total}
                
            </div>
        );
    },
    
   
});

module.exports = WishlistTable;