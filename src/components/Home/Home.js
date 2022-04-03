import { Link } from 'react-router-dom';
import bannerImg from '../../images/product.png'
import UseUsers from '../hooks/UseUsers';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    const [users, setUsers] = UseUsers();
    return (
        <div className='w-3/4 mx-auto'>
            <div className="text-center md:text-left my-16 flex flex-col-reverse md:grid grid-cols-5 md:gap-24 items-center">
                <div className='col-span-3'>
                    <div className='text-2xl md:text-5xl font-mono font-bold'>
                        <h1 className='text-yellow-600'>Developer Guides</h1>
                        <h2 className='text-black mt-2 md:mt-3'>Grow Your JS Knowledge</h2>
                    </div>
                    <p className='mt-4 font-serif leading-7 md:text-xl md:leading-9'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ratione veritatis ut repellendus quidem eius, sapiente aspernatur quisquam! Est fugiat aliquid dolorum quis corrupti error facilis, cupiditate voluptas obcaecati molestias.</p>
                    <button className='mt-5 border-2 rounded text-sm md:text-2xl font-bold font-mono px-4 py-2 border-yellow-600 hover:bg-black hover:text-white hover:border-black'>Live Demo</button>
                </div>
                <div className='col-span-2 '>
                    <img className='w-2/4 mx-auto md:w-full' src={bannerImg} alt="productImg" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-24 my-12'>
                {
                    users.slice(0, 3).map(user => <Reviews key={user._id} user={user}></Reviews>)
                }
            </div>
            <div className='flex justify-center mb-5'>
                <Link to={'/reviews'}>
                    <button className='text-center text-white font-bold font-mono md:text-xl px-16 py-3 bg-yellow-600 rounded-lg'>
                        See All Reviews
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;