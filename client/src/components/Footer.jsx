import logo from "../logo.svg";

const Footer = () => {
  return (
    <div className='h-[200px] bg-black'>
        <div className='flex flex-col items-center justify-center'>
        <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-11 w-auto"
                    src={logo}
                    alt="Your Company"
                  />
              
                  <h1 className="font-bold ml-1">STORYHUB</h1>
                </div>
        </div>
    </div>
  )
}

export default Footer