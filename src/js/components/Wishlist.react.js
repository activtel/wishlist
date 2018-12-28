/**
* Выбор в список желаемого.
*
* @class Wishlist
*/

var React = require('react');

var WishlistActions = require('../actions/WishlistActions');
var EventEmitter = require('events').EventEmitter
var event = new EventEmitter();

var Game = require('./Game.react');
var WishlistTable = require('./WishlistTable.react');


var Wishlist = React.createClass({
    componentDidMount: function() {
        WishlistActions.loadData();
    },
    render: function() {
        var propsGames = this.props.wishlist.data.games;
        var games = [];
        var wishlistGames = [];
        var item;
        
        if (propsGames.length) {
            for(var index in propsGames) { 
                item = propsGames[index];
                
                games.push(<Game key={index} game={item}/>);
                
                if(item && (item.wishlist === true)) {
                    wishlistGames.push(item);
                }
            }
        } else {
            games = <h1><i className="fa fa-spinner fa-spin"></i></h1>
        }

        
        return (
            <div className="row">
                    <div className="col-md-8">
                        {games}
                    </div>
                    <div className="col-md-4"><WishlistTable wishlistGames={wishlistGames} total={this.props.wishlist.data.total} /></div>
            </div>
        );
    },
    
   
});

module.exports = Wishlist;