import profilecard from '../images/profilecard.jpg'

export default function ProfileCard({name, bio}) {
    return (
        <div>
            <img src={profilecard} alt='profile card'/>
            <h1>{name}</h1>
            <h3>{bio}</h3>
        </div>
    )
}