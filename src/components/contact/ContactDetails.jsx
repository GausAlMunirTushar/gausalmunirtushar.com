import Link from 'next/link';
import { FaCalendarAlt } from 'react-icons/fa';

export default function ContactDetails() {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">Email</h2>
        <p className="text-gray-400 text-lg">
          <Link href="mailto:gausalmunirtushar@gmail.com">gausalmunirtushar@gmail.com</Link>{' '}
          <span className="text-gray-500">(Best way to reach me)</span>
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">Book a Meeting</h2>
        <p className="text-gray-400 flex items-center my-1">
          <FaCalendarAlt className="text-white mr-2" />
          <a href="https://calendly.com/gausalmunirtushar" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-lg">
            calendly.com/gausalmunirtushar
          </a>
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">Address</h2>
        <p className="text-gray-400 text-lg">
          Mirpur, Dhaka, Bangladesh
        </p>
      </div>
    </>
  );
}
