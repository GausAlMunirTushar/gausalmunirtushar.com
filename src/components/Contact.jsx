export default function Contact() {
    return (
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto flex flex-col gap-4 md:flex-row justify-between items-start px-6 md:px-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg md:text-xl mb-6">
              I am interested in working with any company that thinks my skill will be helpful for them.
              If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.
            </p>
            <div className="my-2">
              <input placeholder="Enter your email" type="email" className="w-full my-1 py-1 px-2 focus:outline-none rounded bg-tertiary"/> <br/>
              <input placeholder="Write your message..." className="w-full my-1 h-10 py-2 px-2 focus:outline-none rounded bg-tertiary"/>
            </div>
            <button className="bg-primary text-white font-semibold py-2 px-4 rounded">
              Message Me
            </button>
          </div>
          <div className="md:w-1/2 space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Email</h2>
              <p className="text-gray-400">gausalmunirtushar@gmail.com <span className="text-gray-500">(Recommended)</span></p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Skype</h2>
              <p className="text-gray-400">GausAlMunirTushar <span className="text-gray-500">(Always Available)</span></p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Social</h2>
              <p className="text-gray-400">Facebook/Twitter - @GausAlMunir <span className="text-gray-500">(Slow response)</span></p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Address</h2>
              <p className="text-gray-400">
                Mirpur 10, Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  