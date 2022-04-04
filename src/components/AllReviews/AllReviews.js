import UseUsers from '../hooks/UseUsers';
import Reviews from '../Reviews/Reviews';

const AllReviews = () => {
    const [users, setUsers] = UseUsers();
    return (
        <div className='w-3/4 mx-auto mt-6 md:mt-12'>
            <h1 className='text-center text-3xl font-bold font-mono'>What Our Customer Says</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-24 my-12'>
                {
                    users.map(user => <Reviews key={user._id} user={user}></Reviews>)
                }
            </div>
        </div>
    );
};

export default AllReviews;