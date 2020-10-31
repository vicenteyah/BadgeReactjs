import React from 'react'
import '../pages/styles/Badges.css'
class BadgesList extends React.Component {
    render(){
        return (
            <ul className="list-unstyled">
            {this.props.badges.map((badge)=>{
                return (
                    <li key={badge.id}>
                        <div className ="container">
                            <p className="BadgesListItem "> 
                            <img className="BadgesListItem__avatar" src={badge.avatarUrl} alt="avatar"/>
                            {badge.firstName} {badge.lastName} </p>
                        </div>
                        
                    </li>
                )
            })}
        </ul>
        )
    }
}
export default BadgesList