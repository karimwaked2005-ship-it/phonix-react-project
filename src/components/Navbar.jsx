import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center gap-10 p-5 bg-black text-cyan-400 border-b border-cyan-700">

      <Link className="hover:text-white transition" to="/">
        Home
      </Link>

      <Link className="hover:text-white transition" to="/devices">
        Devices
      </Link>

      <Link className="hover:text-white transition" to="/pulse">
        Pulse
      </Link>

      <Link className="hover:text-white transition" to="/system">
        System
      </Link>

    </div>
  );
}