import { FaGithub, FaLinkedin, FaTwitter, FaBlog, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { SiLeetcode, SiHashnode, SiDevdotto } from 'react-icons/si';

export default function SocialLinks() {
  const socialMedia = [
    { href: 'https://github.com/GausAlMunirTushar', icon: <FaGithub size={20} />, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/GausAlMunirTushar', icon: <FaLinkedin size={20} />, label: 'LinkedIn' },
    { href: 'https://leetcode.com/GausAlMunirTushar', icon: <SiLeetcode size={20} />, label: 'LeetCode' },
    { href: 'https://blog.gausalmunirtushar.xyz', icon: <FaBlog size={20} />, label: 'Blog' },
    { href: 'https://twitter.com/GausAlMunir', icon: <FaTwitter size={20} />, label: 'Twitter' },
    { href: 'https://facebook.com/GausAlMunirTusharProfile', icon: <FaFacebook size={20} />, label: 'Facebook' },
    { href: 'https://youtube.com/GausAlMunirTushar', icon: <FaYoutube size={20} />, label: 'YouTube' },
    { href: 'https://instagram.com/GausAlMunirTushar', icon: <FaInstagram size={20} />, label: 'Instagram' },
    { href: 'https://hashnode.com/@GausAlMunirTushar', icon: <SiHashnode size={20} />, label: 'Hashnode' },
    { href: 'https://dev.to/GausAlMunirTushar', icon: <SiDevdotto size={20} />, label: 'Dev.to' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold">Connect with Me</h2>
      <div className="flex gap-4 my-2 items-center">
        {socialMedia.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-gray-400 hover:text-white"
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
}
