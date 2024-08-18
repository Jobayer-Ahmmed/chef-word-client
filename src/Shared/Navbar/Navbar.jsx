import chef_hat from '../../assets/images/chef-wot-name.png'

const Navbar = () => {
  return (
    <div className="h-20 bg-yellow-400 flex justify-between lg:px-40 md:px-16 px-3">
        <div className='h-full flex items-center '>
            <img className='md:w-20 w-16' src={chef_hat} alt="" />
            <h3 className='md:ml-3 ml-2 md:text-2xl text-xl font-lobster text-black'>Chef World</h3>
        </div>
        <div className='flex items-center text-lg'>
          <button>Sign In</button>
          <div className='w-[2px] h-10 rounded-full  bg-white mx-2'></div>
          <button>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar
