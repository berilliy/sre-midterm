import React from 'react'
import { Link } from 'react-router-dom';

export default function ProfileCard(props) {

    const { userId, nickname } = props;

    return (
    <>
        <div className="profileCard">
            <Link to={`/user/${userId}`}>
                {nickname}
            </Link>
        </div>
    </>
  )
}
