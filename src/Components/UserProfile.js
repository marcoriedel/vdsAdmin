import React from 'react';

export default class UserProfile extends React.Component {
    constructor(){
        super()
    }

    triggerAuth() {

        this.props.handleAuth();
    }

    triggerLogOut(){
        this.props.handleLogout();
    }

    render(){
        if(!this.props.user)
        {
            return(
                <button onClick={this.triggerAuth.bind(this)}>Login</button>
            )
        }else{
        const style = {
            backgroundImage: 'url(' + this.props.user.photoURL + ')',
        }
        return(            
            <div>
                <div className="avatar" style={style}></div>
                <div className="usrName">{this.props.user.displayName}
                <div><span onClick={this.triggerLogOut.bind(this)}>Salir</span></div>                
            </div>
      </div>
        )
    }
    }
    
    };