import React from 'react';

const Blogs = () => {
    return (
        <div className='w-3/4 md:w-2/4 mx-auto'>
            <div className='mt-6 md:mt-12'>
                <h1 className='text-center text-2xl md:text-4xl font-mono font-bold '>Purpose Of Context API</h1>
                <div className='mt-8 p-5 border-2 border-yellow-600 rounded-lg font-serif text-xl'>
                    <p>1. The Context API is a component structure provided by the React framework.</p>
                    <br />
                    <p>2. Context provides a way to share values between components without having to explicitly pass a prop through every level of the tree.</p>
                    <br />
                    <p>3. Using context, we can avoid Props Drilling</p>
                    <br />
                    <p>4. Context is used when data needs to be accessible by many components at different nesting levels.</p>
                    <br />
                    <p>5. The Context Provider acts a delivery service. When a consumer asks for something, it finds it in the context and delivers it to where it's needed.</p>
                </div>
            </div>
            <div className='mt-6 md:mt-12'>
                <h1 className='text-center text-2xl md:text-4xl font-mono font-bold '>Purpose Of Semantic Tag</h1>
                <div className='mt-8 p-5 border-2 border-black bg-black rounded-lg font-serif text-xl text-white'>
                    <p>1. This Element Clearly Define its content.</p>
                    <br />
                    <p>2. The semantic tags help the search engines and other user devices to determine the importance and context of web pages.</p>
                    <br />
                    <p>3. The pages made with semantic elements are much easier to read.</p>
                    <br />
                    <p>4. It has greater accessibility. It offers a better user experience.</p>
                    <br />
                    <p>5. Example Of few Semantic Tags:
                        <br />
                        --- <small>header, section, article, footer, aside, main, mark.</small></p>
                </div>
            </div>
            <div className='my-6 md:mt-12'>
                <div className='mt-8 p-5 border-2 border-yellow-600 rounded-lg font-serif text-xl'>
                    <h1 className='text-center text-2xl md:text-4xl font-mono font-bold '>Inline</h1>
                    <div className='mt-8 p-5 border-2 border-black rounded-lg font-serif text-xl'>
                        <p>1. Do not start on a new line.</p>
                        <br />
                        <p>2. Only use as much horizontal space as required by the content.</p>
                        <br />
                        <p>3. Do not accept width and height CSS properties.</p>
                        <br />
                        <p>4. Margins will work horizontally, but not vertically</p>
                        <br />
                        <p>5. Padding works on all sides, but the top and bottom may overlap other elements.</p>
                    </div>
                    <h1 className='text-center mt-4 text-2xl md:text-4xl font-mono font-bold '>Inline Block</h1>
                    <div className='mt-8 p-5 border-2 border-black rounded-lg font-serif text-xl'>
                        <p>1. Elements accept width and height properties.</p>
                        <br />
                        <p>2. Elements can have vertical and horizontal padding on all sides.</p>
                        <br />
                        <p>3. Elements do not start on a new line.</p>
                        <br />
                        <p>4. There will often be a small gap between inline-block elements</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;