import profilecard from '../../images/profilecard.jpg'

export default function ProfileCard({name, bio}) {

    return (
        <div className='max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 text-center'>
            <img 
                src={profilecard} 
                alt='profile card'
                className='w-32 h-32 rounded-full mx-auto mb-4 object-cover'
            />
            <h1 className='text-xl font-semibold text-gray-800'>{name}</h1>
            <h3 className='text-gray-600 mt-2'>{bio}</h3>
        </div>
    )
}