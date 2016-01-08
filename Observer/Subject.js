/**
 * Created by dkmiecik on 2015-11-14.
 */
var Subject = ( function( window, undefined ) {
    "use strict";

    function Subject() {
        this._list = [];
    }

    // this method will handle adding observers to the internal list
    Subject.prototype.observe = function observeObject( obj ) {
        console.log( 'added new observer' );
        this._list.push( obj );
    };

    Subject.prototype.unobserve = function unobserveObject( obj ) {
        for( var i = 0, len = this._list.length; i < len; i++ ) {
            if( this._list[ i ] === obj ) {
                this._list.splice( i, 1 );
                console.log( 'removed existing observer' );
                return true;
            }
        }
        return false;
    };

    return Subject;

} )( window );