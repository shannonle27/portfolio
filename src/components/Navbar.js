
function Navbar() {
  return (
    <div className="bg-pink-200 flex list-none">
      <h3>Shannon Le</h3>
      <li>About</li>
      <li>Projects</li>
      <li>Contact</li>
      <li className="bg-blue-200 hover:shadow-lg ml-auto rounded-full uppercase font-bold px-4 py-2">Resume</li>
    </div>
  );
}

export default Navbar;